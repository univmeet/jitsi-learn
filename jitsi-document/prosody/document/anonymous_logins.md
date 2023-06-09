---
title: Configuring anonymous logins
---

It is common when developing XMPP-based services that you will want to
allow (usually restricted) access to users without requiring them to
have an account.

In Prosody you can instruct a host to allow anonymous logins with:

``` {.code .lua}
VirtualHost "anon.example.com" -- Replace with your domain
   authentication = "anonymous"
```

# Behaviour

Upon login, anonymous users will be assigned a temporary unique username
and resource. For example
*1338460e-7076-4d5d-b76a-7c3e4aad32d3\@example.com/0b2cfd4d-22d1-4177-8c83-1dfcf5a9cd80*.

Although anonymous users have access to everything a normal user would,
including roster, vcard and XML store, as soon as they log out it will
be removed. If you don\'t need or want them to have access to these
features then you can disable the respective modules with a
`modules_disabled` list in the configuration for that host.

# Anonymous hosts {#anonymous_hosts}

Note that a host with anonymous logins enabled will *not* allow any
other kind of login (eg. with a username/password). If you are mixing
authenticated and anonymous services then it is recommended to set up a
subdomain for anonymous users, like `"anon.example.com"`.

# Allowing access to remote servers {#allowing_access_to_remote_servers}

By default Prosody will prevent users on a host configured for anonymous
logins from sending messages to other servers (normal non-anonymous
hosts on the same server are unaffected). This precaution helps to
prevent your server being used as a relay for spammers, bots, and other
attackers.

If however you are **sure** that you want to allow anonymous users to
communicate with other services then simply add the
`allow_anonymous_s2s` option to your config, like so:

``` {.code .lua}
VirtualHost "anon.example.com"
   -- Enable anonymous login:
   authentication = "anonymous"
 
   -- Allow anonymous users to access remote servers:
   allow_anonymous_s2s = true
```
