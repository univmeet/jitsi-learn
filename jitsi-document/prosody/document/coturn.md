---
abstract: 'Guide to setting up Prosody with coturn for TURN and STUN
  support via XEP-0215'
keywords:
- 'XEP-0215'
- extdisco
- mod_external_services
- turn_external
- Jingle
- coturn
title: Using Prosody with coturn
---

[coturn](https://github.com/coturn/coturn) is a TURN and STUN server.

# Installation

This assumes a Debian system. Commands for installation and config file
paths may vary with operating system.

## Install coturn

``` {.bash}
sudo apt install coturn
```

Check whether it was started automatically,

``` {.bash}
sudo systemctl status coturn
```

If not, do so (or wait until after configuring).

``` {.bash}
sudo systemctl enable --now coturn
```

### Firewall

If you have a firewall enabled, make sure to allow coturn through.

``` {.bash}
sudo ufw allow Turnserver
```

## Install mod_external_services

::: {.alert .alert-warning}
This step can be skipped after version 0.12 because
[mod_turn_external](/doc/modules/mod_turn_external) and
[mod_external_services](/doc/modules/mod_external_services) are included
with Prosody.
:::

-   [mod_turn_external](https://modules.prosody.im/mod_turn_external)
-   [mod_external_services](https://modules.prosody.im/mod_external_services)

See page about [installing
modules](/doc/installing_modules#prosody-modules).

# Configuration

Enable the module in the `modules_enabled` list:

``` {.lua}
modules_enabled = {
    -- other modules ...
    "turn_external"
}
```

Generate a suitably strong shared secret and put it both as
`static-auth-secret` in `/etc/turnserver.conf` and as
`turn_external_secret` in Prosodys configuration. A `realm` is also
needed.

``` {.ini}
realm=turn.example.com
use-auth-secret
static-auth-secret=s1kr3t
```

In Prosodys configuration, `/etc/prosody/prosody.cfg.lua`, add:

``` {.lua}
modules_enabled = {
    -- other modules ...
    "turn_external"
}

turn_external_host = "turn.example.com"
turn_external_secret = "s1kr3t"
```

That should be it! Don't forget to check out coturns own documentation
and skim through the rest of the default configuration file.

# Test

By using a client with an XML console, manually request temporary
credentials as per
[XEP-0215](https://xmpp.org/extensions/xep-0215.html#usecases). These
can be tested using
<https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/>
