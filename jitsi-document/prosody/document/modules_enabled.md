% modules_enabled

`modules_enabled` is the list of modules Prosody will load when started.
An example looks like this:

``` {.code .lua}
modules_enabled = {
    "saslauth"; -- Authentication for clients and servers. Recommended if you want to log in.
    "legacyauth"; -- Legacy authentication. Only used by some old clients and bots.
    "roster"; -- Allow users to have a roster. Recommended ;)
    "register"; -- Allow users to register on this server using a client
    "tls"; -- Add support for secure TLS on c2s/s2s connections
    "vcard"; -- Allow users to set vCards
    "private"; -- Private XML storage (for room bookmarks, etc.)
    "version"; -- Replies to server version requests
    "dialback"; -- s2s dialback support
    "disco"; -- Service discovery
    "ping"; -- XMPP Ping
    "time"; -- Let others know the time here
    "uptime"; -- Uptime reporting
    "pep"; -- PEP support (tune, mood, actvity, ...)
};
```

It is a comma (or semi-colon) separated list. The name of a module
corresponds to its filename (mod\_X.lua in your [Plugins
Directory](/doc/plugins_directory)).

Also see [`modules_disabled`](/doc/modules_disabled).
