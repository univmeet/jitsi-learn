---
title: Jingle
abstract: Jingle allows for p2p connections to transmit audio, video and other data.
---

Jingle is the XMPP extension that allows for peer-to-peer client
connections to transmit audio, video and other data.

Many XMPP clients now support voice and video using your microphone and
webcam. A list of clients that support Jingle can be found on the
[Wikipedia page](https://en.wikipedia.org/wiki/Jingle_(protocol)).

Example clients:

-   [Jitsi](https://jitsi.org/) - Cross-platform
-   [Empathy](https://live.gnome.org/Empathy) - GNOME, default in Ubuntu
-   [Gajim](https://gajim.org/) - GTK+, Linux-centric
-   [Psi](https://psi-im.org/) - Qt, voice only
-   [Pidgin](https://pidgin.im/) - Voice/video supported on Linux only
-   [Movim](https://movim.eu) - Web based client
-   [Conversations](https://conversations.im/) - Mobile client for
    Android smartphones

# Server support {#server_support}

Server support is **not** required for Jingle, as the clients
communicate directly and only use the XMPP channel for negotiating. As a
result Jingle clients are fully compatible with Prosody.

The server can however provide some additional services that help
clients with e.g. connectivity or passing through NAT.

-   [SOCKS5 proxy](/doc/modules/mod_proxy65)
-   [TURN, STUN via coturn](/doc/coturn)
