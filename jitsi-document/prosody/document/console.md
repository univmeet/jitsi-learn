---
title: Console
---

Prosody comes bundled with a
[mod\_admin\_telnet](/doc/modules/mod_admin_telnet) plugin. Enabling
this plugin starts a telnet console to let you communicate with a
running Prosody instance. The console is very powerful, and enables you
change things without restarting the server.

Supplied commands make it easy to load, unload and reload modules, show
client to server and server to server connections and much more.

Using the advanced mode allows for easy debugging of Prosody at runtime
also.

To use any of these commands you need to have the module "admin_shell"
in your config file. You connect to the console by executing:

``` {.bash}
sudo prosodyctl shell
```

Prior to Prosody 0.12.x, these commands were only available by enabling
the module \"admin\_telnet\" in your config file and connecting to the
console by executing:

``` {.bash}
telnet localhost 5582
```

# Modules

## module:load(module, host) {#moduleload_module_host}

To load a module on all hosts, simply run:

``` {.lua}
module:load("module")
```

If you only want to load it on a single host, perhaps example.org:

``` {.lua}
module:load("module", "example.org")
```

## module:reload(module, host) {#modulereload_module_host}

Quite often after editing and reloading the server configuration, you
will want to reload a module to have the changes take effect.

Let\'s reload the pep module on all hosts:

``` {.lua}
module:reload("pep")
```

Too personal? Let\'s unload pep just from example.com:

``` {.lua}
module:unload("pep", "example.com")
```

## Check if a module is loaded {#check_if_a_module_is_loaded}

``` {.lua}
> require"core.modulemanager".is_loaded("host", "module")
```

# Client (c2s) commands {#client_c2s_commands}

## c2s:show(host) {#c2sshow_host}

Show current client connections on all hosts:

Show current client connections only on a specific host:

``` {.lua}
c2s:show("example.org")
```

## c2s:close(jid) {#c2sclose_jid}

Close a user\'s session. The supplied JID may either be \'bare\' (ie.
user\@example.com) to close all connections for that account or \'full\'
(ie. user\@example.com/Office) to close only that session.

Example:

``` {.lua}
c2s:close("romeo@shakespeare.lit")
```

## c2s:show\_secure()

Show all secure (encrypted) connections.

## c2s:show\_insecure()

Show all insecure (unencrypted) connections.

# Server-to-server (s2s) commands {#server-to-server_s2s_commands}

## s2s:show()

Show current s2s connections on all hosts.

## s2s:show(\"example.org\") {#s2sshow_exampleorg}

Show current s2s connections on a specific host.

## s2s:close(from, to) {#s2sclose_from_to}

Close an s2s connection.

For example to close a connection from example.org to jabber.org:

``` {.lua}
s2s:close("example.org", "jabber.org")
```

# Server commands {#server_commands}

## server:shutdown(reason) {#servershutdown_reason}

Begin shutting down the server. An optional reason can be sent to all
connections when they are closed to tell them why the server is
stopping.

## server:uptime()

Report for how long the server has been running.

## server:version()

Report the version of the running server.

# Configuration commands {#configuration_commands}

## config:reload()

Reload the server\'s configuration file. Note that not all changes may
take effect, for example you may need to [reload](#reloading_a_module)
affected modules.

# Host commands {#host_commands}

## host:list()

List all the hosts currently configured (but not necessarily enabled)
for the server.

## host:activate(host) {#hostactivate_host}

Activates a given host. If changes have been applied to the config you
may need to [reload](#configreload) it.

## host:deactivate(host) {#hostdeactivate_host}

Deactivates a given host.

# MUC commands {#muc_commands}

## muc:room(room) {#mucroom_room}

Fetches the room object. Not very useful by itself, but has some useful
methods.

### muc:room(room):get\_affiliation(jid) {#mucroom_roomget_affiliation_jid}

Shows what affiliation `jid` has in the room.

### muc:room(room):set\_affiliation(actor, jid, affiliation) {#mucroom_roomset_affiliation_actor_jid_affiliation}

Sets affiliation for `jid` in the room. Pass `true` as first argument.
Possible values for affiliation are `"owner"`, `"admin"`, `"member"`,
`"outcast"` (banned) and `"none"` (no affiliation).

``` {.lua}
muc:room("room@muc.host"):set_affiliation(true, "user@host", "member");
```

### muc:room(room):get\_role(nick) {#mucroom_roomget_role_nick}

Shows what role the user with nickname `nick` has in the room.

### muc:room(room):destroy() {#mucroom_roomdestroy}

Kicks everyone from the room and removes it.

::: {.alert .alert-info}
Destroying a room leaves a tombstone, preventing the room from being
mistakenly re-created. Calling `:destroy` another time destroys the
tombstone and allows the room to be created again.
:::

### muc:room(room):save(force) {#mucroom_roomsave_force}

Commits the room to storage. Passing `true` as argument ensures that
non-persistent rooms are removed.

# User management {#user_management}

### user:create(jid, password) {#usercreate_jid_password}

Create the specified user account.

### user:password(jid, password) {#userpassword_jid_password}

Set the password for the specified user account.

### user:delete(jid) {#userdelete_jid}

Permanently remove the specified user account.

### user:list(hostname, pattern) {#userlist_hostname_pattern}

List users on the specified host, optionally filtering with a pattern.

# Leaving the console {#leaving_the_console}

Type either `bye` or `quit` to end the console session.

# Advanced usage {#advanced_usage}

The console can also be used to access server internals at runtime, this
can be done by prefixing a line with the `>` character. For example:

``` {.code}
> hosts
| Result: table: 0x80dffe0
```

This is most useful to those debugging or otherwise familiar with
Prosody\'s internals.
