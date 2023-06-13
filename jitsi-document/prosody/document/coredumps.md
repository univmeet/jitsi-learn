---
title: Core dump debugging
---

Prosody and Lua itself rarely crashes so hard you need this page, but
sometimes there are issues with dependencies like luaevent.

# Enabling core dumps on crashes {#enabling_core_dumps_on_crashes}

Add this line to `/etc/sysctl.conf`:

``` {.code}
kernel.core_pattern = /tmp/%t.%p.core
```

To enable it without rebooting, run:

``` {.code .bash}
sysctl -w 'kernel.core_pattern = /tmp/%t.%p.core'
```

If Prosody has been given the capability to bind low ports then this
counts as suid, which in turn disables core dumps. This can be bypassed
with:

```
fs.suid_dumpable = 1
```

In your `prosody.cfg.lua` add:

``` {.code .lua}
require"util.pposix".setrlimit("CORE", "unlimited", "unlimited")
```

# Getting a core dump from a running Prosody {#getting_a_core_dump_from_a_running_prosody}

Without killing it.

``` {.code .bash}
prosodyctl status
# should print eg Prosody is running with PID 1234
gcore -o prosody 1234
```

This should produce a file `prosody.1234`.

# Getting a backtrace {#getting_a_backtrace}

Open the core dump using `gdb -c prosody.1234 /usr/bin/lua5.1`, then you
can get a backtrace using `bt` or more vebosely with `bt full`.
