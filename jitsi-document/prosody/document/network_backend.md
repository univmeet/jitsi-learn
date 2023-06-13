% Network backends

Prosody ships with several alternative modules for keeping track of
network connections, reading incoming data when available and sending
outgoing data when appropriate.

-   [epoll] (default since 0.12)
-   [select] (default until 0.11)
-   [libevent]

# select

The original network backend is called `net.server_select`. It needs only
[LuaSocket] to work. It uses the [`select()` system call][select_syscall],
is suitable for smaller servers. It has bad scaling properties and a
limit of 1024 connections.

To use this backend, add the following in the global section of the
config:

``` lua
network_backend = "select"
```

[LuaSocket]: https://github.com/diegonehab/luasocket/
[select_syscall]: http://man7.org/linux/man-pages/man2/select.2.html

# libevent

The first alternative network backend, `net.server_event` introduced with
Prosody 0.7 uses the [luaevent] binding of the [libevent][libeventlib]
event notification library to handle connections.

See documentation on [using Prosody with libevent](/doc/libevent).

To use this backend, add the following in the global section of the
config:

``` lua
network_backend = "event"
```

[libeventlib]: https://libevent.org/
[luaevent]: https://github.com/harningt/luaevent

# epoll

First available in Prosody 0.11, `net.server_epoll` uses the included
[`util.poll`][poll] library to keep track of connections. It has been
written from scratch to be easier to maintain, without having external
dependencies.  Despite the name it is not bound to the Linux `epoll`
API, but uses an abstraction that can also use the POSIX
`poll`^[starting with 0.12.0] or the `select()` APIs.

Starting with [0.12.0](/doc/release/0.12.0) this is the default, so no
configuration is required to use it. If you enjoy explicit
configuration, you can add the following in the global section of the
config:

``` lua
network_backend = "epoll"
```

[poll]: /doc/developers/util/poll


