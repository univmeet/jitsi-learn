---
title: Port Multiplexing
---

Prosody can handle multiple protocols on a single port. This allows you
to offer both XMPP and HTTP on port 80 for example.

# Usage

To use multiplexed ports, enable
[mod\_net\_multiplex](/doc/modules/mod_net_multiplex) and use the
\'ports\' and \'ssl\_ports\' option in the configuration file:

The following makes Prosody accept HTTP, XMPP client, XMPP server and
XMPP component connections on each of these three ports:

``` {.code .lua}
ports = { 5222, 5269, 80 }
```

And the following makes Prosody accept HTTPS, XMPP Direct TLS
connections on both the specified ports:

``` {.code .lua}
ssl_ports = { 443, 5223 }
```

For S2S authentication to work correctly, requesting and verifying client certificates must be enabled:

``` lua
ssl_ssl = { verify = { "peer", "client_once" } }
```

# Configuration

  Option       Default   Notes
  ------------ --------- ---------------------------------------------------------------------
  ports        {}        Ports which handle HTTP, XMPP client, S2S and component connections
  ssl\_ports   {}        Ports which handle HTTPS and Direct TLS connections
  ssl_ssl      {}        Custom TLS settings
