---
title: libevent
---

# Introduction

Prosody\'s core task is to handle multiple client or server connections,
and handle incoming data from those connections. Monitoring lots of
connections for incoming data efficiently isn\'t a trivial task, and
although the standard [POSIX](https://en.wikipedia.org/wiki/POSIX) API
provides [select()](https://linux.die.net/man/2/select) and
[poll()](https://linux.die.net/man/2/poll) for this task, neither scale
well for increasing connection counts.

To solve this problem and help people write efficient scalable servers
that could make the most of the system\'s CPU time, many alternative
methods started appearing - for example Linux gained
\'[epoll](https://linux.die.net/man/7/epoll)\' and BSD gained
\'[kqueue](https://www.freebsd.org/cgi/man.cgi?query=kqueue&sektion=2)\'.
To avoid having server developers work to add support for each method to
their application [libevent](https://libevent.org/) was created - a
library to provide a standard interface across all the different
connection monitoring mechanisms.

In 0.7 Prosody gained optional support for libevent, but still uses
select() by default which is still adequate for most servers and
requires no additional libraries.

# Enabling the libevent backend {#enabling_the_libevent_backend}

## luaevent

First you need to install luaevent. Information on obtaining luaevent
for various platforms can be found on our [dependencies
page](/doc/depends#luaevent).

## Configuration

Next you simply need to add the following line to your configuration
file, in the global section:

``` {.code .lua}
   use_libevent = true
```

Restart Prosody and enjoy!

## Verification

To check that everything is working, after restarting Prosody you should
see a new log line like:

``` {.code}
general    info    Prosody is using the epoll backend for connection handling
```

If it says \'select\' then you have a problem. Check libevent is
installed properly, or [ask us for help](/discuss).
