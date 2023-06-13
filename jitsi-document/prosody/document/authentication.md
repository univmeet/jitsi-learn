---
title: Authentication providers
---

Prosody supports authentication provider plugins. These can either use
Prosody\'s built-in storage drivers (e.g. to use a custom format for
account data), or they can integrate with external storage and
authentication APIs.

The default provider uses Prosody's configured storage, and is adequate for
most deployments. To learn how to create accounts for your users, see our
guide on [creating user accounts](/doc/creating_accounts).

# Selecting a provider {#selecting_a_provider}

A provider can be selected with the \"authentication\" option. This can
be set globally and/or per-host.

``` {.code .lua}
   authentication = "internal_hashed" -- Default
```

# Providers

  Name                                                        Description
  ----------------------------------------------------------- ------------------------------------------------------------------------
  [internal\_plain](/doc/modules/mod_auth_internal_plain)     Plaintext passwords stored using built-in storage
  [internal\_hashed](/doc/modules/mod_auth_internal_hashed)   Hashed passwords stored using built-in storage
  [cyrus](/doc/modules/mod_auth_cyrus)                        Cyrus SASL integration (LDAP, PAM, ...)
  [ldap](/doc/modules/mod_auth_ldap)                          Authenticate users against an LDAP directory using lua-ldap
  [anonymous](/doc/modules/mod_auth_anonymous)                SASL \'ANONYMOUS\' mechanism, random username, requires no credentials

There are also a number of additional providers in our [community module
repository](https://modules.prosody.im/type_auth.html). These modules are
developed by the Prosody team and community, and may be at different
stages of development. Please read the documentation before installing
and using these modules.
