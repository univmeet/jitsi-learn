---
title: Security
---

Security is a topic that is broad, deep, and in some places complex.
Security is nearly always bought with compromises - for example by
decreasing performance, usability, or interoperability.

By default Prosody aims to provide a server that is quite secure enough
for most people and follows all current security best practices, while
not becoming difficult to use or introducing unnecessary
interoperability issues. This article is to help you dig further into
our default settings, and understand which ones you might want to change
to adjust depending on your actual security needs.

There are two primary aspects of security that typically concern an XMPP
server administrator: *information* security and *communication*
security.

# Information

Information security is about protecting the data stored on your server
from unauthorized access or public leakage. By default, this is the kind
of data Prosody might store on behalf of users:

-   [Account credentials](/doc/authentication)
-   [Roster](/doc/modules/mod_roster) (contact list)
-   [vCard](/doc/modules/mod_vcard) (user profile)
-   [Offline messages](/doc/modules/mod_offline) (messages received when
    users are offline, delivered and deleted when they next log in)
-   [List of blocked addresses](/doc/modules/mod_blocklist)
-   [Private XML storage](/doc/modules/mod_private) (commonly used for
    chatroom bookmarks)
-   [Message archives](/doc/modules/mod_mam) (messages stored for some
    time on the server to ensure all the users' devices catches up)

Prosody\'s data store should be adequately protected. If you are using
the default [file-based storage](/doc/modules/mod_storage_internal), the
data directory\'s filesystem permissions should allow access only by
Prosody\'s user account and trusted users on the system. For ultimate
security, also consider encrypting the disk that the files are stored on
using your system\'s facilities for that.

If you have configured Prosody to use an external database for storage,
ensure that Prosody\'s config file containing the database credentials
is protected from read access by unauthorized users. Also note that some
plugins may still make use of the configured data directory - as of 0.9
this currently includes storage of offline messages, which never get
stored in an external database.

Account credentials should be hashed if you can, using for example
[mod\_auth\_internal\_hashed](/doc/modules/mod_auth_internal_hashed).
But note that enabling this can have unexpected security consequences
for users when authenticating - see [Plain or hashed password
storage?](/doc/plain_or_hashed) for some discussion on this.

# Communication

Protecting your messages and data as it travels across the network and
internet falls into the realm of communication security. Prosody uses
OpenSSL to implement connection encryption using SSL/TLS.

There are various aspects to consider regarding communication security:

## Policy

The first step is to decide who you need to be able to communicate with.
The smaller and less diverse your set of users and contacts is, the more
you can lock down your server.

### Client-to-server

Almost all clients will use SSL/TLS out of the box, and warn users
loudly if their connection is not encrypted, or if the certificate
cannot be verified. However Prosody has a couple of controls for
client-to-server encryption policy on the server side:

-   [c2s\_require\_encryption](/doc/modules/mod_tls)
-   [allow\_unencrypted\_plain\_auth](/doc/modules/mod_saslauth)

Remember that an encrypted connection is only truly secure if your users
have securely verified your server\'s certificate. This might mean
getting a certificate by a widely-trusted CA, or securely sending your
certificate\'s fingerprint to users so that they can verify it manually.
More discussion on [certificates](#certificates) below.

### Server-to-server

Server-to-server encryption policy has some additional complexity,
because Prosody has to verify the certificates of other servers.
Sometimes (too often!) servers present invalid, expired, or
self-signed/untrusted certificates that prevent Prosody from securely
authenticating them. When this happens, Prosody will fall back to
DNS-based authentication (XMPP dialback) - but the connection will still
be encrypted. Prosody will always use encryption on server-to-server
connections when the other server supports it.

Some servers support no encryption at all (most notably this includes
all Google-hosted servers, including gmail.com). By default Prosody
allows unencrypted server-to-server connections if the other server does
not seem to support it - but this can be a security concern. You can
prevent this behaviour by setting the `s2s_require_encryption` option to
`true`.

Once you have decided on your encryption policy, you can move on to your
authentication policy. Authentication is the process of determining that
the other server is really the server it claims to be, and not an
attacker (or \"man in the middle\"). The most secure form of
authentication is using certificates - Prosody will attempt to use these
by default if your version of [LuaSec](/doc/depends#luasec) supports it.

If you wish to always use certificates for authentication, and never
fall back to (weaker) DNS authentication, set `s2s_secure_auth` to
`true`.

Regardless of this default authentication policy, you can selectively
require or not require certificate authentication for certain domains by
using the lists `s2s_secure_domains` and `s2s_insecure_domains`. You can
find examples in the default config file, and documentation at
[Server-to-server security](/doc/s2s#security).

## Certificates

The curse of many service admins! Certificates are important, because
they allow your users (and other servers on the network) to identify you
- and ensure that there is not a [\"man in the
middle\"](https://en.wikipedia.org/wiki/man%20in%20the%20middle%20attack)
attacker reading your messages and passing them on.

We have an article on [obtaining certificates](/doc/certificates) for
use with Prosody.

You can check any XMPP server\'s certificate manually by using a service
such as <https://xmpp.net/>.

## Ciphers

The cipher is the actual algorithm used to encrypt your data as it goes
along the wires. There are many many ciphers available, and all of them
have strengths and weaknesses - some are fast and weak, some are slow
and secure - so there is no such thing as the \"best\" cipher, and the
set of recommended ciphers changes over time as weaknesses are found.

It is not recommended to change Prosody\'s default cipher list unless
you know what you are doing, but if you do need to do this, see our
[advanced SSL configuration](/doc/advanced_ssl_config#ciphers) article.

### Forward secrecy {#forward_secrecy}

Forward secrecy (\'FS\', also called \'Perfect Forward Secrecy\' or
\'PFS\') is a property of some TLS ciphers/handshakes to protect
encrypted streams from later decryption if the server\'s certificate\'s
private key is ever compromised (e.g. stolen or computationally
cracked). There are currently two kinds of forward-secrecy handshakes in
use today, standard Diffie-Hellman (DH) and Elliptic Curve
Diffie-Hellman (ECDH).

For both methods you will need an up-to-date
[LuaSec](/doc/depends#luasec) (not 0.4.x).

Out of both methods, ECDH is the newest and fastest. Prosody enables
support for this [by default](/doc/advanced_ssl_config#curve) when your
versions of LuaSec and OpenSSL support it.

Standard DH is more widely implemented, mathematically simpler (a good
thing in security), and has been around longer than ECDH. However it
decreases performance and requires you to generate some parameters
before you can use it. It is disabled by default in Prosody, but you can
enable it by generating a DH parameters file and setting the [\'ssl\'
dhparam option](/doc/advanced_ssl_config#dhparam) in your config.
