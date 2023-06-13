---
abstract: 'How to set up a STUN/TURN server for reliable calls between clients'
keywords:
- 'XEP-0215'
- extdisco
- mod_external_services
- Jingle
- coturn
- eturnal
- calls
title: Audio/video calls with Prosody using a STUN/TURN server
---

You can make audio and video calls between XMPP clients. To ensure calls work
reliably, you will generally need to set up a STUN/TURN server alongside
Prosody.

## What is a STUN/TURN server?

Realtime audio and video data streams have special requirements in terms of
bandwidth and latency, which make this kind of data unsuitable for sending
through a normal XMPP connection.

When starting a call, XMPP clients will generally try to connect directly to
each other (a direct "peer-to-peer" connection). Due to firewalls and NAT
devices, this can often be tricky or sometimes impossible. Two notable
standard protocols exist for assisting clients with this process: STUN and
TURN. STUN provides a way for clients to discover information about their
network connection, and TURN can be used as a relay/proxy for the data stream
in case a direct connection can't be established between the clients.

There are multiple open-source STUN/TURN server software projects available
such as [coturn](https://github.com/coturn/coturn) and
[eturnal](https://eturnal.net/). Both have been tested with Prosody and are
popular choices in the XMPP community.

Throughout this document we will refer to it as a 'TURN server', because in
practice both STUN and TURN are always provided by the same service.

## Choosing a location for your TURN server

Your TURN server should be somewhere publicly accessible, reachable by all
your clients regardless of where they are connecting from. It should have a
reliable network connection, with minimal latency and good bandwidth.

It is not recommended to host a TURN service behind a NAT, on a LAN or any
other private network. As well as performance and networking issues, it can
pose a security risk - anyone able to access the TURN service may use it to
establish connections to other IP addresses on the same network as the TURN
server. Most TURN server software does have security controls to restrict the
connections that can be made, so review this if necessary.

Prosody never communicates with the TURN server. There is no need or advantage
gained by having them located on the same server or network.

Modern clients will encrypt all media traffic going through the TURN server,
preventing it (and the operator) from capturing the audio/video data that is
proxied through the service.

## Setting up your TURN server

How to set up your TURN server depends on the software you choose. Refer to
its documentation if you have any doubts.

- [Guide to setting up coturn with Prosody](/doc/coturn)
- [eturnal documentation](https://eturnal.net/setup/)

Ensure you have the necessary UDP ports open to provide the STUN/TURN service.
This includes the primary ports (e.g. 3478) **and** the "ephemeral port" range
that is used for relaying (this range is specified in your TURN server
configuration).

Due to the design of the STUN protocol, it is not uncommon for STUN services
to be used by attackers as part of reflection/amplification DDoS attacks.
Although these rarely cause any trouble for the service itself, one way to
avoid contributing to these attacks is to run your service on a non-standard
port (i.e. not 3478) so it is harder for attackers to find.

## Configuring Prosody

After setting up your TURN server, add it to your Prosody configuration so
that Prosody can tell your clients about it.

First, enable mod_turn_external by adding it to your modules_enabled
list (it is included with Prosody [0.12.0](/doc/release/0.12.0), but
if you use an earlier version you can find it in the [community modules
repository](https://modules.prosody.im/mod_turn_external)).

Then specify the following settings:

``` {.lua}
turn_external_host = "turn.example.com"
turn_external_port = 3478
turn_external_secret = "my-very-secret-secret"
```

The `turn_external_host` setting should be the public address of your TURN
server, reachable by your clients. It is not connected to by Prosody, so
**don't** use `127.0.0.1` or another private IP address here.

The `turn_external_secret` should be a secret string (not too short!), and it
should match **exactly** the same secret string you have set in your TURN
server configuration.

If you use a non-standard port, also provide Prosody with the port number via
the `turn_external_port` setting.

All of these settings *can* be specified per VirtualHost, but people usually
want to share a single TURN service for all VirtualHosts. In this case, just
put the options in the [global section](/doc/configure#overview) so you don't
have to repeat them for every VirtualHost.

## Testing your setup

It is not always obvious when your STUN/TURN setup has problems - many calls
do not actually require STUN or TURN, and may often succeed even if your
service is not working or incorrectly configured. If you have intermittent
call failures, it's a good indication that something is wrong.

### prosodyctl check

Since Prosody 0.12, Prosody will do some simple tests when you run `prosodyctl
check` or `prosodyctl check turn`, and will warn you of any problems it finds
with your TURN configuration.

For a more complete test, you can also do an end-to-end relay test. This pings
a small amount of data to a remote STUN server via your TURN server, and waits
for a response. Unlike the simple test, the relay test can catch problems with
your firewall configuration.

To run this test you will need to provide the address of an **external** public
STUN server (do not provide the address of your own server here!). In this
example we test our setup works by pinging the STUN service run by
[conversations.im](https://conversations.im/):

```
prosodyctl check turn -v --ping=stun.conversations.im
```

The `-v` flag (for "verbose") provides some additional information, such as IP
addresses and ports used during the test.

**Note:** This test only works with mod_turn_external. If you are using a
different module and configured your services manually (e.g. using
mod_external_services or mod_turncredentials) then prosodyctl will not be able
to test your service.

### Manual testing (advanced)

You can do some manual testing by using a client with an XML console, manually
request temporary credentials as per
[XEP-0215](https://xmpp.org/extensions/xep-0215.html#usecases). These
can be tested using
<https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/>.
