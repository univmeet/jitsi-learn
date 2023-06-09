---
title: Transports and gateways
---

Transports/gateways are services that allow XMPP users to communicate
with users that are connected to other networks and protocols. Gateways
exist for most popular networks, and Prosody works with all of them (via
the [XEP-0114](https://xmpp.org/extensions/xep-0114.html) Jabber
component standard).

# Spectrum

The recommended gateway software to use with Prosody is
[Spectrum](https://spectrum.im/). Spectrum is based on libpurple, the
same code that the Pidgin IM client is built on. This means that its
protocol support is very broad and actively developed.

Spectrum has its own [configuration
guide](https://spectrum.im/documentation/tutorials/gateway_mode.html), so
don\'t forget to read it after you have installed Spectrum. You can also
refer to the general Prosody documentation for [adding external
components](/doc/components). Spectrum\'s \'jid\' and \'password\'
options must match the component name and password that you specify in
Prosody\'s configuration.

An example gateway, icq.example.com might look like this:

**Prosody:**

``` {.code .lua}
    Component "icq.example.com"
      component_secret  = "verysecret"
```

**Spectrum:**

``` {.code}
[service]
jid = icq.example.com
password = verysecret
server = 127.0.0.1
port = 5347
```
