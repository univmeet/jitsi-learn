---
title: prosodyctl
---

Prosody comes with a small utility to control the server, and manage
users, etc. This is prosodyctl. It (currently) doesn\'t support Windows.

As an aid to those migrating from *ejabberd*, who may have existing
scripts, prosodyctl is compatible with ejabberdctl wherever possible,
this includes the *register* and *unregister* commands, despite these
being hidden from the prosodyctl command listing by default.

# Usage

The basic usage of prosodyctl is:

``` {.code}
 prosodyctl COMMAND [OPTIONS]
```

Where COMMAND may be one of:

## User management

**adduser** *JID* - Create the specified user account in Prosody

**passwd** *JID* - Set the password for the specified user account in
Prosody

**deluser** *JID* - Permanently remove the specified user account from
Prosody

## Process management

::: {.alert .alert-warning}
Do not use these to start and stop Prosody unless you know what you are
doing. Instead, use your distributions init system tools, e.g.
`systemctl`.
:::

**start** - Start Prosody

**stop** - Stop a running Prosody server

**restart** - Restart Prosody

**reload** - Reload Prosody\'s configuration and re-open log files

**status** - Reports the running status of Prosody

## Other

**shell** - Securely connects to the [Prosody console](/doc/console)

**cert** ... - Certificate management commands

## Plugin management

**install** *mod_plugin* - Install a plugin using the [Plugin installer](/doc/plugin_installer)

**remove** *mod_plugin* - Remove a plugin using the [Plugin installer](/doc/plugin_installer)

**list** - List plugins installed using the [Plugin installer](/doc/plugin_installer)

## Informative

**about** - Shows information about the installation, including
versions and paths

**check** *WHAT* - Perform various configuration and setup self-checks,
see below

### Check

**check config** - Perform various sanity checks on the configuration
file.

**check dns** - Check that DNS records match currently configured
domains and ports.

**check certs** - Check that certificates are valid and not expired

**check disabled** - Report disabled VirtualHosts and Components that
are excluded from checks

**check turn** \[--ping=stun.server.example\] - Test configuration of
[mod_turn_external](/doc/modules/mod_turn_external), optionally by
pinging a remote STUN server.

**check connectivity** - Check connectivity from the outside. Uses 3rd
party service [observe.jabber.network](https://observe.jabber.network/).

#### Configuration

Some configuration for the various checks themselves exists. These don't
affect Prosody in any way, so no restart or reload is needed to apply
them, just run `prosodyctl check` again.

If `prosodyctl check dns` is confused about what the public IP of the
server is, e.g. because it is behind NAT, set it in the config:

```lua
-- in global section
external_addresses = { "198.51.100.42" }
```

To use a different service than observe.jabber.network, a service
behaving like [XMPP Blackbox
Exporter](https://github.com/horazont/xmpp-blackbox-exporter) instance
can be configured like this:

```lua
-- only the URL
connectivity_probe = "https://probe.xmpp.example:9115"
-- full format
connectivity_probe = {
    url = "https://probe.xmpp.example:9115";
    modules = {
        -- map of service name (like in SRV records) to probe module
        ["xmpp-client"] = "c2s_normal_auth";
        ["xmpp-server"] = "s2s_normal";
        ["xmpps-client"] = "c2s_direct";
        ["xmpps-server"] = "s2s_direct";
    };
}
```

## Flags

An alternative configuration file can be given by
`--config /path/to/config.cfg.lua`.

When invoked as `root`, prosodyctl will try to switch to the prosody
user before proceeding. This can be disabled with `--root`.

# Using prosodyctl {#using_prosodyctl}

Because prosodyctl needs to switch to the same user that Prosody runs
as, you need to run it as root, or otherwise ensure that you are logged
in as the same user as Prosody runs as first. On Ubuntu and other
systems you can do this by simply prepending \'sudo\' to the command,
like this:

``` {.code}
 sudo prosodyctl status
```

If you installed your Prosody manually, then you will need to tell
prosodyctl which user Prosody runs as. This is simple, just add the
following line to the global section of your config file:

``` {.code .lua}
   prosody_user = "username"
```

You may also replace \"username\" with a numeric UID (in this case you
wouldn\'t use quotes) if you need to.

If you installed Prosody from a package (e.g. using apt or another
package manager) then you should already have an init script for
controlling Prosody, and it is recommended to use that instead of
prosodyctl for starting and stopping the server. On most systems this
would be:

``` code
sudo systemctl start prosody
```

or

``` {.code}
 sudo /etc/init.d/prosody start
```

Where \'start\' can also be \'stop\', \'restart\' and \'reload\'. Reload
will cause the configuration file to be reloaded (no guarantees that
changes will appear instantly though, in 0.4) and also re-open the log
files (useful as part of log rotation).

# pidfile

If you are not using one of our ready-made [packages](/download/start)
then to use prosodyctl you will need to tell it where to store its
pidfile. Prosodyctl looks for this file to find whether Prosody is
running. If you have multiple Prosody daemons running on the same
machine, they must all use different pidfile locations. The pidfile and
daemonization support is provided by the mod\_posix module, so ensure
that is loaded in your config.

Setting a pidfile location is as simple as:

``` {.code .lua}
   pidfile = "/var/run/prosody/prosody.pid" -- this is the default on Debian
```

or

``` {.code .lua}
   -- This one works great if you run Prosody direct from where you checked it out
   -- (ie. you use "./prosodyctl start")
   pidfile = "prosody.pid" -- stores prosody.pid in the current directory
```

::: {.alert .alert-warning}
[:warning:]{.icon} Note that the pidfile option has to be in the global
section of the config.
:::

Just make sure Prosody has the necessary permissions to create, modify
and delete the file you tell it to use.
