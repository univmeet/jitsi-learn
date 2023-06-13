---
title: Information for packagers
---

Prosody\'s main goal is to be user-friendly and easy to use. One of the
hardest parts of this task is getting the server installed and running
in the first place. By providing reliable high quality packages then on
most systems installing Prosody should take no more than a minute of the
user\'s time.

If you\'re planning to, or already, maintain packages for Prosody,
thanks! This page is here just for you. If you feel there is anything
that should be added, or have any questions about how to best package
Prosody feel free as always to [ask us](/discuss).

# Changes

## 0.13 {#section-0.13}

-   Lua 5.1 no longer supported

## 0.12 {#section-0.12}

-   New [dependencies](/doc/depends):
    -   [lua-readline](https://pjb.com.au/comp/lua/readline.html) for
        the console
    -   [luarocks](https://luarocks.org/) for plugin installer
    -   [luaunbound](https://www.zash.se/luaunbound.html) for more
        reliable DNS support
    -   [LuaLDAP](https://github.com/lualdap/lualdap) for
        [mod_auth_ldap](/doc/modules/mod_auth_ldap)
-   [server_epoll](/doc/network_backend#epoll) is the new default
    network backend, which has a hard dependency on
    [LuaSec](https://github.com/brunoos/luasec), unlike older network
    backends.
-   [ICU] is now the recommended string normalization library
    ([details in issue #533](https://issues.prosody.im/533)), replacing
    libidn

## 0.11.5 {#section-0.11.5}

-   The `prosody` executable now supports command line flags to control
    daemonization, `-D` to daemonize and `-F` to force foreground
    operation, meant to be used in service/init scripts.

## 0.11 {#section-0.11}

-   **Lua 5.2** is now the recommended version, but Lua 5.1 is still
    supported. Lua 5.3 is still **not** officially supported.
-   `make test` now runs tests using
    [Busted](https://olivinelabs.com/busted/) and lints with
    [luacheck](https://github.com/mpeterv/luacheck).
-   The utility `util.time` has been rewritten in C to gain access to
    `clock_gettime()`. Systems with **glibc** before **2.17** may need to be
    linked with `-lrt` to work. See [#1219](https://issues.prosody.im/1219)
-   `Makefile` renamed `GNUmakefile` to reflect use of GNU-isms. There's
    also a `makefile` meant to be compatible with BSD make.

# Guidelines

Follows some common questions or issues that new packagers have or
stumble upon.

## Lua versions

Recommended Lua versions by Prosody release:

- 0.11: Lua 5.2 (recommended), Lua 5.1 (supported), Lua 5.3 (experimental)
- 0.12: Lua 5.4 (recommended), Lua 5.2/Lua 5.3 (supported)

## Init script {#init_script}

Most platforms are using start-stop-daemon for their Prosody init
scripts, as it is a little more flexible than prosodyctl at the moment.
For reference, the Debian init script can be [found
here](https://prosody.im/files/prosody.init).

We also have user-contributed scripts for systemd as attachments to
[issue \#280](https://prosody.im/bugs/280).

## Pidfile option {#pidfile_option}

In order for prosodyctl to locate a running Prosody, and for Prosody to
detect multiple running instances, you need to set the pidfile option
in the default config. It needs to point to a filename that is within a
directory writeable by Prosody. On Debian we use:

``` {.code .lua}
    pidfile = "/var/run/prosody/prosody.pid"
```

## mod\_posix

On POSIX platforms (that is well, all of them except Windows) you should
make sure that mod\_posix is enabled in the default config file. It adds
features like syslog support, daemonizing, and writing the pidfile.

## Logging

Check you have sensible defaults for [Logging](/doc/logging). If your
platform uses logrotate or something similar then include a config file
for that too.

As with the pidfile, the logs need to go into a directory writeable by
Prosody.

Example logging config on Debian:

``` {.code .lua}
        -- Hint: If you create a new log file or rename them, don't forget to update the
        --       logrotate config at /etc/logrotate.d/prosody
        log = {
                -- Log all error messages to prosody.err
                { levels = { min = "error" }, to = "file", filename = "/var/log/prosody/prosody.err" };
                -- Log everything of level "info" and higher (that is, all except "debug" messages)
                -- to prosody.log
                { levels = { min =  "info" }, to = "file", filename = "/var/log/prosody/prosody.log" };
        }
```

As noted, if usual on your platform then include a logrotate config for
Prosody. Debian uses this:

``` {.code}
/var/log/prosody/prosody.log /var/log/prosody/prosody.err {
        daily
        rotate 14
        compress
        postrotate
                /etc/init.d/prosody reload > /dev/null
        endscript
        sharedscripts
        missingok
}
```

Tip: Don\'t be tempted to use /var/log/prosody/prosody.\* here
[:smile:]{.icon}. Finding sensible defaults is difficult, as log noise
will vary depending on usage. We had rough consensus in the Prosody
chatroom that 14 days of logs rotated daily was a decent mid-way point.

## Prosody user account {#prosody_user_account}

Prosody never needs to run as root. Upon installation your package
should create a system user, preferably called \'prosody\', with a group
of the same name. If you use another name then be sure to set
prosody\_user in the default configuration file.

A suitable user can be created with this shell code:

``` {.code}
if ! getent passwd prosody >/dev/null; then
    adduser --disabled-password --quiet --system \
            --home /var/lib/prosody --no-create-home \
            --gecos "Prosody XMPP Server" --group prosody
fi
```

## Registration policy {#registration_policy}

For security reasons the default configuration file has in-band account
registration disabled (allow\_registration = false). Note that
mod\_register is still loaded though, because the same protocol is used
for existing users to change their passwords. Admins are encouraged to
use prosodyctl to create new users. See [Creating
accounts](/doc/creating_accounts).

## Data directory {#data_directory}

On most systems the default data directory is /var/lib/prosody. This
needs to be passed to ./configure using the --data-dir flag.

Make sure that upon installation the directory is created, owned by
Prosody, and is not world-readable (the data files contain passwords and
other sensitive information).

``` {.code}
   chown prosody:prosody /var/lib/prosody
   chmod 750 /var/lib/prosody
```

## Including separate files {#including_separate_files}

Some systems might find it desirable to split the configuration file
into multiple files. To achieve this you can use the Include directive.
This also supports including files by wildcard.

``` {.code .lua}
Include "base_config.lua"
Include "vhosts.d/*.lua"
```
