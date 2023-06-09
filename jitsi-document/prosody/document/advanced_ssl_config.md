---
title: 'Advanced SSL/TLS configuration'
---

::: {.alert .alert-danger}
# Warning!

The options presented on this page can be **dangerous**. It is easy to
lower the security of your server using these options (we have seen this
happen multiple times).

We make every attempt to ship Prosody with sane and secure defaults, so
you do **not** need to modify these settings.

If you do not completely understand these options, **do not add them to
your config**! It is especially unwise to copy/paste them from blog
posts or websites.

**Tutorials:** If you are writing a tutorial, please do not advise
people to change these settings. If you insist, at least let us [review
your tutorial](/discuss){.alert-link} before you publish it.

You might wonder, if the options are potentially dangerous, why do we
allow these options to be changed? Because some people genuinely have
specific non-standard configuration requirements. And it is also safer
to have them documented than not.

Finally, security changes over time. If you modify these settings, you
need to keep them up to date, as you will no longer benefit from
improvements that we make to our default settings.
:::

# Overview

Prosody passes the contents of the 'ssl' option from the config file
almost directly to LuaSec, the library we use for SSL/TLS support in
Prosody. LuaSec accepts a range of options here, mostly things that it
passes directly to OpenSSL. It is recommended to leave Prosody's
defaults in most cases, unless you know what you are doing (you could
easily reduce security or introduce unnecessary compatibility issues
with clients and other servers).

You may want to refer to [LuaSec's official
documentation](https://github.com/brunoos/luasec/wiki/LuaSec-0.4.1#wiki-ssl_newcontext),
though we try to present the key options here with more detailed
explanations.

Firstly remember that the available options will depend on what versions
of LuaSec and OpenSSL you have. Always check Prosody's error log for
messages after making changes, as this is how Prosody will communicate
configuration errors.

# SSL options {#ssl_options}

These are options that can be set inside an 'ssl' block. For example:

``` {.code .lua}
    ssl = {
        -- Normal options
        key = "/path/to/key.pem";
        certificate = "/path/to/cert.pem";
        -- Advanced options
        protocol = "tlsv1_1+";
    }
```

## protocol

This determines what handshake to use. Possible values are:

-   `"sslv23"`
-   `"sslv3"`
-   `"tlsv1"`
-   `"tlsv1_1"`
-   `"tlsv1_2"`

The `sslv23` option provides the greatest range of compatibility, and
despite the name it supports the full range of SSL and TLS versions.

If you wish to restrict which versions of SSL/TLS are used, it is
recommended to disable them individually using the ['options'
flags](#options) (e.g. `"no_sslv2"`) and **not** by changing the
`protocol` value.

In **Prosody 0.10**, these additional values are supported:

-   `"sslv3+"`
-   `"tlsv1+"`
-   `"tlsv1_1+"`
-   `"tlsv1_2+"`

Using one of these will automatically disable protocols below the
selected one, so for example `"tlsv1+"` will disable SSLv2 and SSLv3.

## key

Required. Path to your private key file, relative to your primary config
file.

## certificate

Required. Path to your certificate file, relative to your primary config
file.

## capath

Path to directory containing root certificates that you wish Prosody to
trust when verifying the certificates of remote servers. Default is
`"/etc/ssl/certs"`.

## cafile

Path to a file containing root certificates that you wish Prosody to
trust. Similar to `capath` but with all certificates concatenated
together.

## verify

A list of verification options (these mostly map to OpenSSL's
[set\_verify()
flags](https://www.openssl.org/docs/ssl/SSL_CTX_set_verify.html)).
Prosody's default is `{ "peer", "client_once" }`.

Available verification options are:

-   `none` (no verification)
-   `peer` (verify the peer's certificate)
-   `client_once` (do not request the client's certificate during
    renegotiation)
-   `fail_if_no_peer_cert` (fail if the peer does not present a
    certificate)

## options

A list of general options relating to SSL/TLS. These map to [OpenSSL's
set\_options()](https://www.openssl.org/docs/manmaster/man3/SSL_CTX_set_options.html).
For a full list of options available in LuaSec, see [the LuaSec
source](https://github.com/brunoos/luasec/blob/master/src/options.h).

Prosody's default option list, as of 0.9.6, is
`{ "no_sslv2", "no_sslv3", "no_ticket", "no_compression", "cipher_server_preference", "single_dh_use", "single_ecdh_use" }`{.lua}.
If you run `0.9.x` and override with your own list, remember to include
these!

Starting with 0.10, options can be enabled or disabled without including
all options set by other `ssl` sections, like
`{ cipher_server_preference = true, no_ticket = false }`. Options
related to SSL/TLS protocol versions are no longer needed as these are
set by the [protocol](#protocol) option.

**Note:** If you wish to enable SSL compression, please use the
`ssl_compression` option instead (set it to true). However generally it
is recommended to use [XMPP compression](/doc/modules/mod_compression)
instead for greater flexibility and performance.

## depth

How long a chain of certificate authorities to check when looking for a
trusted root certificate.

For example: A value of `2` would mean a chain with 3 certificates, one
root certificate, one intermediate and finally the servers certificate.
A chain with two intermediate certificates would be rejected.

`0.9.x` and earlier does not set a default. `0.10.x` and later default
to `9` (chain of 10 certificates in total).

More info can be found in [OpenSSLs
documentation](https://www.openssl.org/docs/ssl/SSL_CTX_set_verify.html).

## ciphers

An OpenSSL [cipher
string](https://www.openssl.org/docs/apps/ciphers.html). This selects
what ciphers Prosody will offer to clients, and in what order.

Prosody's default, as of 0.9.2, is
`"HIGH+kEDH:HIGH+kEECDH:HIGH:!PSK:!SRP:!3DES:!aNULL"`. This roughly
translates as (in order of preference):

1.  EDH-based "high strength" ciphersuites first, if [dhparam](#dhparam)
    is specified. EDH uses more CPU when establishing connections.
2.  EECDH-based "high strength" ciphersuites, which uses the specified
    [elliptic curve](#curve).
3.  RSA/DSA "high strength" ciphersuites. These have no forward-secrecy,
    so if your key is compromised or cracked, previously-recorded
    traffic may be decrypted.

Also we explicitly disable:

-   PSK: These ciphersuites require the client and server to already
    share some secret key. This makes it not particularly useful for the
    open XMPP network.
-   SRP: Similar to PSK, these ciphersuites also require a shared
    password.
-   3DES: Triple-DES is an older encryption algorithm that is quite
    slow. As used in TLS it is also marginally weaker than the more
    modern AES, though OpenSSL still considers it "high strength".
-   aNULL: We disable any ciphersuite that doesn't allow authenticating
    the other party.

## dhparam

A path to a file containing parameters for [Diffie--Hellman key
exchange](https://en.wikipedia.org/wiki/Diffie-Hellman_key_exchange).

You can create such a file with:

``` {.code}
openssl dhparam -out /etc/prosody/certs/dh-2048.pem 2048
```

**Note:**

-   There are known interoperability issues with DH parameters greater
    in size than 1024 bits. For example Java applications, running on
    Java 7 or older^[1)](#fn__1)^, do not support greater than 1024
    bits^[2)](#fn__2)^, and some versions of Pidgin do not support more
    than 3072 bits.

## curve

Curve for Elliptic curve Diffie--Hellman. Prosody's default is
`secp384r1`.

## verifyext

A list of "extra" verification options. Prosody's default is
`{ "lsec_continue", "lsec_ignore_purpose" }`.

Available options are:

-   `lsec_continue` (don't fail the handshake when an untrusted/invalid
    certificate is encountered)
-   `lsec_ignore_purpose` (ignore the certificate's "purpose" flags)

## password

Password for encrypted private keys.

^[1)](#fnt__1)^ See
<https://docs.oracle.com/javase/8/docs/technotes/guides/security/enhancements-8.html>

^[2)](#fnt__2)^ See
<https://bugs.java.com/bugdatabase/view_bug.do?bug_id=6521495>
