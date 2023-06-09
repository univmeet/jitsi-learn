---
title: Port and network configuration
---

# Overview

As a general rule, any network-related options may only be specified in
the [global section](/doc/configure#overview) of the configuration file.
This is because they affect the whole server, and are not applicable to
virtual hosts.

## Default ports

Here is an overview of default ports and the respective services:

  port       service
  ---------- ------------------------------------------------------
  5000/tcp   [File transfer proxy](/doc/modules/mod_proxy65)
  5222/tcp   [Client connections](/doc/modules/mod_c2s)
  5269/tcp   [Server-to-server connections](/doc/modules/mod_s2s)
  5280/tcp   [HTTP](/doc/http)
  5281/tcp   [HTTPS](/doc/http)
  5347/tcp   [External components](/doc/components)
  5582/tcp   [Telnet console](/doc/console)

As a rule of thumb, Prosody uses almost exclusively TCP for all its
network communication. Rare exceptions (such as cooperating external
services, e.g. TURN) mention the protocol they use in their own
documentation.

Of the ports above, the https port uses standard TLS, the http port is
unencrypted, and "Client connections" and "Server-to-server connections"
ports use plain TCP by default, but can upgrade a connection using the
STARTTLS option. "External components" and "Telnet console" only ever
listen on a local interface.

# Default interfaces {#default_interfaces}

By default Prosody will try to use all available network interfaces (IP
addresses) on the system. It is possible to restrict to one or more
interfaces by manually specifying them with the \'interfaces\' option:

``` {.code .lua}
    interfaces = { "127.0.0.1" } -- Listen only for local connections
```

All plugins will use the default interfaces unless you override them.

The special interface \"\*\" means \"all IPv4 interfaces\", and the
special interface \"::\" means \"all IPv6 interfaces\". We have separate
documentation to tell you more about [IPv6 configuration](/doc/ipv6).

# Private interfaces {#private_interfaces}

Some services, such as the [telnet console](/doc/console) and
[components](/doc/components) are considered private and by default will
listen only to local \"loopback\" interfaces. These default to `::1` and
`127.0.0.1`.

These can be changed by setting `local_interfaces`:

``` {.code .lua}
local_interfaces = { "::1" }
```

If the services specific option, eg `console_interfaces` is set then
that takes priority over `local_interfaces`.

# Ports

Each module that opens ports in Prosody has a default port (or possibly
multiple), mentioned in its documentation. For example
[mod\_c2s](/doc/modules/mod_c2s) listens on port 5222, XMPP\'s standard
port for client connections.

It is possible to override the port and interface settings for a module.
Simply set *\*\_ports* or *\*\_interfaces* as required (replace the \*
with the module or service name). For example to customise the port and
interface mod\_c2s uses:

``` {.code .lua}
    c2s_ports = { 5222, 5322 } -- Listen on 5322 as well as 5222
    c2s_interfaces = { "192.168.0.1", "::1" } -- Listen only on these interfaces
```

# SSL configuration {#ssl_configuration}

Some services use SSL encryption. For example mod\_c2s also provides a
\'legacy\_ssl\' service that can be configured. As well as the standard
ports and interfaces options described above, SSL services also have a
*\*\_ssl* option (replace the \* with the service name). This allows you
to set the [Certificates](/doc/certificates) and other SSL options on
that port. By default the use the certificate settings from the \'ssl\'
option if it is specified, alternatively you can set per-service
certificates:

``` {.code .lua}
    legacy_ssl_ssl = {
        key = "/path/to/certificate.key";
        certificate = "/path/to/certificate.crt";
    }
```

Another common SSL service is https, where the certificates can be
configured with the *https\_ssl* option. Sometimes it is necessary to
handle multiple virtual hosts with different certificates. This is
possible, by using different interfaces or ports. The configuration
needs to be specified like this:

``` {.code .lua}
    https_ssl = {
        --- You can specify certificates by interfaces:
        ["127.0.0.1"] = {
            key = "/path/to/certificate.key";
            certificate = "/path/to/certificate.crt";
        };
        ["192.168.0.1"] = {
            key = "/path/to/other-certificate.key";
            certificate = "/path/to/other-certificate.crt";
        };
        -- or by ports, if more convenient:
        [5285] = {
            key = "/path/to/another-certificate.key";
            certificate = "/path/to/another-certificate.crt";
        };
    }
```

We have further documentation on [certificate
configuration](/doc/certificates) and other SSL options if you need
them.

# Multiplexing

Prosody allows you to run multiple services on each port, and will
automatically detect the kind of connection that has been opened. It is
important to note that if you use these options, the individual port
options above will be disabled. More information can be found in our
article on [Port Multiplexing](/doc/port_multiplexing).

# Advanced

It is possible to configure and tweak some low-level settings in
Prosody\'s network library. What options are available here depend on
the [connection backend](/doc/network_backend) you are using, there are
currently three: select (default), [libevent](/doc/libevent) and
[epoll](/doc/network_backend#epoll).

The settings here apply to \*all\* connections on the server, regardless
of what type they are. In this section we refer to the remote end of the
connection as the \"peer\", which may in fact be a client or another
server.

The option to use is `network_settings`, and you can use it like this:

``` {.code .lua}
    network_settings = {
        read_timeout = 300;
        tcp_backlog = 5;
    }
```

Here are the most common settings you may want to tweak:

  Name                      Backend   Description
  ------------------------- --------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  read\_timeout             All       The number of seconds to allow peers to be silent for. Prosody will take appropriate action when the timeout is hit depending on the connection type and which plugins are installed.
  send\_timeout             All       The number of seconds to allow data to wait for a peers to receive it. The peer will be disconnected when this timeout triggers.
  max\_send\_buffer\_size   All       The maximum size, in bytes, of our (per-connection) send buffer. This is in addition to the send buffer provided by the OS. If the buffer increases above this limit, the peer will be disconnected.
  tcp\_backlog              All       This number is passed to the OS as the desired size of our \'backlog\'. Interpretations of what it means vary, but if you have trouble dealing with large numbers of incoming connection attempts at once, try tweaking this value. Default is 32.
