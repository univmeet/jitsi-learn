% modules_disabled

The `modules_disabled` option allows you to specify a list of modules
that will *not* be loaded for a particular host.

This can also be used to prevent the loading of the auto-loaded core
modules mod\_message, mod\_iq, and mod\_presence.

An example:

``` {.code .lua}
VirtualHost "example.net"
    modules_disabled = { "vcard" } -- Prevent users on example.net from having vcards
```
