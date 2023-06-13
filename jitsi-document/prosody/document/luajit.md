---
title: Running Prosody on LuaJIT
---

::: {.alert .alert-warning}
**Note:** Running Prosody with LuaJIT is not recommended or supported these
days. The LuaJIT project has not adopted most new changes to the Lua language
since Lua 5.1. Meanwhile we are deprecating Lua 5.1 support.

LuaJIT also has restrictions on the amount of memory that a Lua process can
use. In general, Prosody needs more RAM than it does CPU. This means LuaJIT
does not provide a substantial performance benefit for most deployments.

This page remains solely for reference purposes, and special-purpose
deployments which *do* need the optimizations that LuaJIT provides.
:::

[LuaJIT](https://luajit.org/) is an alternate implementation of a Lua
interpreter that does tracing Just-In-Time compilation. Running Prosody
on LuaJIT can be an attractive option in order to squeeze some extra
performance out of your server.

# On Debian/Ubuntu {#on_debianubuntu}

If you installed Prosody from our [package
repository](/download/package_repository), you can switch to LuaJIT by
editing `/etc/default/prosody` and adding a line like this:

``` {.code}
RUNTIME=/usr/bin/luajit
```

# Built from source {#built_from_source}

When building from source, you can specify a runtime as an argument to
`configure`.

For example:

``` {.code}
./configure --runwith=/usr/local/bin/luajit
```

# The scary way {#the_scary_way}

As a last resort, you can edit the `prosody` executable and replace the
shebang, by changing

``` {.code}
#!/usr/bin/env lua
```

to

``` {.code}
#!/usr/bin/env luajit
```
