---
title: 'Plain or hashed password storage?'
---

::: {.alert .alert-warning}
The majority of this article was written in 2011, when SCRAM support
in clients was scarce. Since then, adoption of SCRAM has become
widespread and the default of Prosody has changed to 'hashed'. DIGEST-MD5
has been removed entirely.

This article is only of historical interest now.
:::

\"Hashed!\" I hear you say. It\'s true, if you are looking for the
ultimate security then you should use the [hashed authentication
provider](/doc/modules/mod_auth_internal_hashed), but you should also
ensure all your users are using up-to-date clients, encryption, and
verifying your server\'s certificate (not just blindly clicking \"OK\"
to warnings). The account database is not the easiest place for an
attacker to get passwords from.

In summary: it is easier to secure your server than to secure users\'
clients and educate users about security.

# The Technical Bit {#the_technical_bit}

## What do you mean by \"hashed\"? {#what_do_you_mean_by_hashed}

Many people confuse \"hashing\" with \"encrypting\". Hashing is a
one-way process that converts an input into an output from which the
original password cannot be recovered. Encrypting a password, however,
implies that the password can be \"decrypted\". Obviously if you store
passwords encrypted then the server must be able to decrypt them, so it
needs a key. If you store the key on the same server as your password
database then the attacker can simply get both when they break into your
server.

For this reason, Prosody only supports hashing passwords.

## Authenticating

XMPP uses a generic authentication protocol known as SASL (not to be
confused with Cyrus SASL, a specific SASL implementation). SASL supports
a number of authentication mechanisms, however there are a few main ones
used in XMPP today: PLAIN, DIGEST-MD5, SCRAM-SHA-1.

### PLAIN

The PLAIN mechanism is simple. The client transmits the username and
password to the server, and the server compares it with what it has in
the database. If it has the plaintext password in the database, it can
compare this directly with the password it received from the client. If
it has a hashed password stored, it hashes the password from the client
and compares the hashes.

Since this mechanism sends the password in the clear, it should not be
used on unencrypted connections. This means also that the user should
verify the server\'s certificate. Encryption is of little use if you
don\'t verify the identity of the server you are encrypting to.

### DIGEST-MD5

By far the most common mechanism used in XMPP today. This is a more
advanced SASL mechanism published in 2000 that actually sends a
calculated hash of the password to the server, instead of a plaintext
one. Unfortunately to verify that the hash is the correct hash of the
user\'s password, the server needs access to the user\'s plaintext
password to calculate it.

Because the hash the client sends is not just a hash of the password,
but also of a random number, the hash changes every time (this is to
prevent the attacker capturing a single hash and using it for login in
the future) - which means the server cannot store it in the database.

DIGEST-MD5 also has a basic mechanism to verify that the server does
have access to its password. This is a form of \"mutual
authentication\", and gives the client confidence that it is connected
to the right server, even if the connection is encrypted with an
unverified certificate (it does not protect against eavesdroppers,
however).

However, because DIGEST-MD5 had a number of issues it was [formally
obsoleted in 2011](https://www.rfc-editor.org/rfc/rfc6331.html).

### SCRAM-SHA-1

This shiny new mechanism was published in 2010. It aims to solve all the
problems in prior mechanisms, and fix their weaknesses. In particular
it:

-   Sends a hash of the password from the client to the server
-   Still allows the server to store only a (specially-constructed) hash
    of the password
-   Mutual authentication (and protection against eavesdroppers if the
    client and server both support it)

Unfortunately there\'s a catch. Since SCRAM is so new, most clients in
the wild do not implement it (even though support is in or being added
to most clients, many users have not upgraded yet). This causes two
problems:

-   If only the specially-constructed SCRAM hash is stored in the
    database, only the SCRAM mechanism is designed to work with this,
    DIGEST-MD5 cannot. For compatibility, PLAIN *does* work, because
    when the client gives the password to the server, the server can
    perform the SCRAM calculations itself. This means slower logins for
    PLAIN authentication when just a SCRAM hash is available in the
    database.
-   Because only PLAIN and SCRAM can be offered, clients that don\'t
    support SCRAM yet (most of them) will use PLAIN. As described above,
    PLAIN has a number of issues when the connection is not properly
    secured and verified with TLS.

On the other hand, when the server is storing the plaintext password in
the database, it needs to calculate the SCRAM hash to clients that try
to log in with SCRAM-SHA-1. This makes the hashed storage much more
attractive if all your clients support SCRAM.

### SCRAM-SHA-1-PLUS

Similar to regular SCRAM-SHA-1, but with a feature called channel
binding, wherein the hashes are bound to the specific TLS session. This
means that the authentication handshake would fail during an
Man-in-the-Middle attack, where you would have an TLS session to the
attacker instead of your server and the attacker has another TLS session
to the server.

# Conclusion

[Plain](/doc/modules/mod_auth_internal_plain) or
[hashed](/doc/modules/mod_auth_internal_hashed)? You decide. ~~For now
Prosody\'s default remains \"plain\". However in the future when more
clients support SCRAM out of the box the choice is clear.~~

Prosody's default is `"internal_hashed"`.
