---
title: 'Server-to-server XMPP'
keywords:
- federation
---

XMPP allows for servers communicating seamlessly with each other,
forming a global \'federated\' IM network. This architecture is very
similar email, where someone on gmail.com can send an email to someone
with an account on hotmail.com, for example.

Prosody supports server-to-server (s2s) connections out of the box. All
you need for it to work is:

-   A public domain name (such as \'example.com\').
-   That domain name pointed to a public IP address.
-   Port 5269 open in your firewall.

If your XMPP server is accessed via a different domain name than your
XMPP host (e.g. your address are \`user\@example.com\`, but your server
is \`xmpp.example.com\`) then you need to set up [SRV DNS
records](/doc/dns). This also applies if you want to run s2s over a
custom port.

# Disabling

If you do not want to allow server-to-server communication on your
server, or on particular hosts, you can simply disable mod\_s2s. Either
in the global section of your config, or in a specific host section,
add:

``` {.code .lua}
    modules_disabled = { "s2s" }
```

Note: if [anonymous authentication](/doc/anonymous_logins) is enabled
then anonymous users are automatically blocked from making outgoing s2s
connections. You can control this behaviour with:

``` {.code .lua}
    allow_anonymous_s2s = true
```

Due to the potential for abuse it is recommended to leave
`allow_anonymous_s2s` at its default (disabled).

# Security

It is possible to control how Prosody authenticates s2s connections. By
default it will try to use TLS if the other side supports it, and fall
back to [dialback](/doc/modules/mod_dialback) if it does not or if the
certificate is incorrect or not trusted.

It is possible to have fine-grained control over
server-to-server security.

[:warning:]{.icon} Note that certificate verification requires [LuaSec
0.5](/doc/depends#luasec) or higher to be installed.

To require encryption and certificate authentication, simply set
s2s\_secure\_auth:

``` {.code .lua}
    -- Set the default security policy for s2s connections:
    s2s_secure_auth = true
```

This will disable dialback (a DNS-based authentication mechanism), and
require that all remote servers present trusted certificates valid for
their domain. Note that you can configure which certificate authorities
Prosody trusts certificates from, see our [documentation on
certificates](/doc/certificates#specify_trusted_certificate_store) for
more info.

Beware that many servers on the XMPP network use self-signed or invalid
certificates, or even don\'t support TLS at all (such as gmail.com and
all Google-hosted domains). It is possible to make exceptions like this:

``` {.code .lua}
    -- These hosts are allowed to authenticate via weaker mechanisms, such as dialback:
    s2s_insecure_domains = { "gmail.com" }
```

Finally, if you don\'t want to require certificate authentication in
general, but care strongly that certain domains are always securely
authenticated, you can leave the default policy open, but provide a list
of secure domains:

``` {.code .lua}
    -- Whatever the value of s2s_secure_auth, these domains must always present valid certificates:
    s2s_secure_domains = { "jabber.org", "xmpp.org" }
```

# Stanza restrictions

From Prosody 0.11.7 you can configure the limit on the size of
stanzas accepted over a server-to-server connection. The limit
is specified in bytes and (per the XMPP specification) must not
be lower than 10000.

``` {.code .lua}
    s2s_stanza_size_limit = 512 * 1000 -- 512kb
```

Since [version 0.11.9](/doc/release/0.11.9) the above 512 KiB is the
default size limit.

See also [c2s_stanza_size_limit](/doc/modules/mod_c2s).
