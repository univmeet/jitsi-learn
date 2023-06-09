---
title: Developer Documentation
---

Welcome to the prime page for developer documentation on Prosody.

To get started with writing a module, begin with our introduction to
[developing Prosody modules](/doc/developers/modules). And have a look
at the [Module API](/doc/developers/moduleapi).

Also useful to you, whether writing a module or working on core Prosody
code, will be our [Utility APIs](#utility_apis).

We also have documentation on the various [common data
structures](#common_data_structures) that Prosody uses internally.

If after reading this you are still clueless, or can't find what you
were looking for, you are strongly encouraged to [contact us](/discuss)!
We also welcome anyone wanting to [contribute](/doc/contributing) to the
project itself or the documentation.

# Project layout

Most of the code resides in a few different directories.

`prosody`
:   Main executable

`prosodyctl`
:   Management tool

`core/`
:   [Core] logic

`net/`
:   [Network and socket handling](#net)

`util/`
:   [Utilities](#utility_apis)

`util-src/`
:   More utilities, but implemented in C

`plugins/`
:   Almost all functionality is in [plugins](/doc/modules)

`tools/`
:   Tools for migrating data

`spec/`
:   Tests using the [Busted framework](https://olivinelabs.com/busted/)

# Core

The Core is a set of modules providing core functionality for the
server.

[core.certmanager](/doc/developers/core/certmanager)
:   Manages TLS configuration, certificates etc.

[core.configmanager](/doc/developers/core/configmanager)
:   Handles reading, parsing and accessing the configuration.

[core.hostmanager](/doc/developers/core/hostmanager)
:   Manages initialization of virtual hosts.

[core.loggingmanager](/doc/developers/core/loggingmanager)
:   Deals with setting up log output.

[core.moduleapi](/doc/developers/core/moduleapi)
:   Implements the [Module API](/doc/developers/moduleapi).

[core.modulemanager](/doc/developers/core/modulemanager)
:   Handles loading, un- and reloading of plugins.

[core.portmanager](/doc/developers/core/portmanager)
:   Handles setting up TCP port listeners

[core.rostermanager](/doc/developers/core/rostermanager)
:   API for managing users contact lists.

[core.s2smanager](/doc/developers/core/s2smanager)
:   Manages server-to-server connections.

[core.sessionmanager](/doc/developers/core/sessionmanager){.text-danger}
:   Managing user sessions.

[core.stanza\_router](/doc/developers/core/stanza_router)
:   Routes stanzas to the right host and fires the correct events.

[core.statsmanager](/doc/developers/core/statsmanager)
:   Statistics collection and reporting API.

[core.storagemanager](/doc/developers/core/storagemanager)
:   Manages on-demand loading of storage plugins and the storage API.

[core.usermanager](/doc/developers/core/usermanager)
:   Core API for user account management

# Network and socket handling {#net}

net.adns
: asynchronous DNS resolution

net.connect
: API for outgoing connections

net.dns
: stub DNS resolver

[net.http](/doc/developers/net/http)
:   HTTP client library

net.http.codes
:   HTTP status code registry

net.http.files
:   Serve static files from HTTP

net.http.parser
:   HTTP stream parser

net.http.server
:   HTTP server

net.resolvers
: Implementations of connection strategies

net.server
:   Socket handling

net.websocket
: WebSocket client library

net.websocket.frames
: WebSocket wire protocol library

# Utility APIs {#utility_apis}

These modules are designed to provide a unified API for both core and
module developers. They help with common tasks, and provide useful data
structures.

[util.adhoc](/doc/developers/util/adhoc){.text-danger}
:   Convenience library for writing Ad-hoc commands

[util.adminstream](/doc/developers/util/adminstream){.text-danger}
:   Module to manage a local unix domain socket for admin functionality

[util.argparse](/doc/developers/util/argparse)
:   Parse command line arguments

[util.array](/doc/developers/util/array)
:   Convenience methods for working with Lua tables as arrays

[util.async](/doc/developers/util/async)
:   Library to provide support around coroutine-based non-blocking
    functions

[util.bit53](/doc/developers/util/bit53)
:   Compatibility module for bitwise operations (Lua 5.3+)

[util.bitcompat](/doc/developers/util/bitcompat)
:   Compatibility module for bitwise operations

[util.cache](/doc/developers/util/cache)
:   Ordered key-value least recently used pairs

[util.caps](/doc/developers/util/caps){.text-danger}
:   Utility for calculating XEP-0115: Entity Capabilities hashes

[util.crand](/doc/developers/util/crand)
:   Binding to native platform RNG

[util.dataforms](/doc/developers/util/dataforms){.text-danger}
:   Utility for handling XEP-0004: Data Forms

[util.datamanager](/doc/developers/util/datamanager)
:   Allows persistent storage and retrieval of data

[util.datamapper](/doc/developers/util/datamapper)
:   Transform data to and from XML using a schema

[util.datetime](/doc/developers/util/datetime)
:   Retrieve the current or specified time in various XMPP formats

[util.dbuffer](/doc/developers/util/dbuffer){.text-danger}
:   Dynamic string buffer library

[util.debug](/doc/developers/util/debug){.text-danger}
:   A verbose debug library

[util.dependencies](/doc/developers/util/dependencies)
:   Utility containing Prosodys dependencies

[util.dns](/doc/developers/util/dns){.text-danger}
:   Library for decoding DNS records

[util.encodings](/doc/developers/util/encodings)
:   Encode/decode data using algorithms such as base64, IDNA, stringprep

[util.envload](/doc/developers/util/envload)
:   Lua version agnostic library for loading code into an environment

[util.error](/doc/developers/util/error)
:   Library implementing an error or exception object.

[util.events](/doc/developers/util/events)
:   Library to abstract the firing and handling of named events

[util.filters](/doc/developers/util/filters){.text-danger}
:   *Describe me*

[util.format](/doc/developers/util/format){.text-danger}
:   More liberal string formatting

[util.gc](/doc/developers/util/gc){.text-danger}
:   Module for configuring the Lua garbage collector

[util.hashes](/doc/developers/util/hashes)
:   Calculate hashes of input data using MD5, SHA1, SHA256, etc.

[util.hashring](/doc/developers/util/hashring){.text-danger}
:   *Describe me*

[util.helpers](/doc/developers/util/helpers){.text-danger}
:   Library to aid with debugging, etc.

[util.hex](/doc/developers/util/hex){.text-danger}
:   Base 16 / hexadecimal encoding and decoding

[util.hmac](/doc/developers/util/hmac)
:   HMAC functions *compat library*[^1]

[util.http](/doc/developers/util/http)
:   Common functions for dealing with HTTP requests

[util.human.io](/doc/developers/util/human/io){.text-danger}
:   Human interface library

[util.human.units](/doc/developers/util/human/units){.text-danger}
:   Human-friendly unit formatting

[util.id](/doc/developers/util/id)
:   Generates compact strings suitable for use as identifiers

[util.import](/doc/developers/util/import){.text-danger}
:   Combined `require()` and unpacking

[util.indexedbheap](/doc/developers/util/indexedbheap){.text-danger}
:   A priority queue implementation with a reverse index with no
    per-entry memory allocation.

[util.interpolation](/doc/developers/util/interpolation)
:   A string templating engine

[util.ip](/doc/developers/util/ip){.text-danger}
:   Deal with IP address

[util.iterators](/doc/developers/util/iterators){.text-danger}
:   Iterator library

[util.jid](/doc/developers/util/jid)
:   Common functions for splitting and prepping JIDs

[util.json](/doc/developers/util/json)
:   A JSON library

[util.jsonschema](/doc/developers/util/jsonschema){.text-danger}
:   JSON Schema validator

[util.jwt](/doc/developers/util/jwt){.text-danger}
:   JSON Web Token library

[util.logger](/doc/developers/util/logger)
:   An interface to Prosody's logging system

[util.mercurial](/doc/developers/util/mercurial)
:   Small library for identifying Mercturial repositories

[util.multitable](/doc/developers/util/multitable)
:   A multitable is a handy tree-like data structure, a table allowing
    multiple keys

[util.net](/doc/developers/util/net)
:   Deals with IP addresses and their representations

[util.openmetrics](/doc/developers/util/openmetrics)
:   Library for OpenMetrics-compatible metrics in Prosody

[util.openssl](/doc/developers/util/openssl)
:   A library for dealing with OpenSSL and certificate configuration

[util.paths](/doc/developers/util/paths)
:   File system path handling

[util.pluginloader](/doc/developers/util/pluginloader){.text-danger}
:   Library responsible for locating and loading Prosody plugins

[util.poll](/doc/developers/util/poll)
:   library for watching file descriptors

[util.pposix](/doc/developers/util/pposix)
:   A POSIX library

[util.presence](/doc/developers/util/presence){.text-danger}
:   Presence priority calculation library

[util.promise](/doc/developers/util/promise)
:   ES6-like API for promises

[util.prosodyctl](/doc/developers/util/prosodyctl){.text-danger}
:   Support functions for the `prosodyctl` tool

[util.pubsub](/doc/developers/util/pubsub)
:   Abstract Publish-Subscribe library

[util.queue](/doc/developers/util/queue)
:   A library for first-in, first-out queues

[util.random](/doc/developers/util/random)
:   Produce pseudorandom byte strings

[util.rfc6724](/doc/developers/util/rfc6724){.text-danger}
:   Library for doing address selection per
    [RFC6724](https://www.rfc-editor.org/rfc/rfc6724.html)

[util.ringbuffer](/doc/developers/util/ringbuffer)
:   A ringbuffer for binary data

[util.rsm](/doc/developers/util/rsm){.text-danger}
:   XEP-0059: Result Set Management library

[util.sasl\_cyrus](/doc/developers/util/sasl_cyrus){.text-danger}
:   SASL logic used by mod\_auth\_cyrus

[util.sasl](/doc/developers/util/sasl){.text-danger}
:   Abstract SASL middleware library

[util.serialization](/doc/developers/util/serialization)
:   Convert objects into a format suitable to save to disk or send
    across the network

[util.session](/doc/developers/util/session){.text-danger}
:   Common session methods

[util.set](/doc/developers/util/set)
:   A Set library

[util.signal](/doc/developers/util/signal){.text-danger}
:   Send and handle process signals (SIGKILL etc)

[util.sql](/doc/developers/util/sql){.text-danger}
:   SQL abstraction library

[util.sslconfig](/doc/developers/util/sslconfig){.text-danger}
:   Abstraction over LuaSec SSL context configuration

[util.stanza](/doc/developers/util/stanza)
:   Create and manipulate stanzas and other XML objects

[util.startup](/doc/developers/util/startup){.text-danger}
:   Prosodys startup logic

[util.statistics](/doc/developers/util/statistics)
:   Provider for in-memory buffered metrics

[util.statsd](/doc/developers/util/statsd){.text-danger}
:   Provider for pushing metrics to a statsd server

[util.strbitop](/doc/developers/util/strbitop)
:   Perform bit-wise operations on strings

[util.table](/doc/developers/util/table)
:   Small library to complement Luas built-in table module

[util.template](/doc/developers/util/template){.text-danger}
:   XML stanza template library

[util.termcolours](/doc/developers/util/termcolours)
:   Library for producing ANSI colour codes

[util.throttle](/doc/developers/util/throttle)
:   Token bucket implementation

[util.time](/doc/developers/util/time)
:   Low-level time functions

[util.timer](/doc/developers/util/timer)
:   Set callbacks to be called after a specified delay

[util.uuid](/doc/developers/util/uuid)
:   Generate unique string identifiers

[util.vcard](/doc/developers/util/vcard){.text-danger}
:   Abstract vCard library

[util.watchdog](/doc/developers/util/watchdog){.text-danger}
:   Watchdog timer library

[util.windows](/doc/developers/util/windows){.text-danger}
:   Windows OS support functions

[util.x509](/doc/developers/util/x509){.text-danger}
:   Functions for X.509 certificate identity matching

[util.xml](/doc/developers/util/xml)
:   Simple XML parsing library

[util.xmppstream](/doc/developers/util/xmppstream){.text-danger}
:   Streaming XML parsing library

[util.xpcall](/doc/developers/util/xpcall)
:   Compat library providing protected Lua function calls with error
    handler

[util.xtemplate](/doc/developers/util/xtemplate)
:   Another template language for mapping stanzas to text or HTML.

# Specific Modules {#specific_modules}

These are prosody modules that have an API that can be used from other
modules, or manage data in a format that needs documentation.

[Ad-Hoc Commands](/doc/developers/modules/mod_adhoc)
:   Provides functionality to easily add new Ad-Hoc commands

[mod\_storage\_sql developer notes](/doc/developers/modules/mod_storage_sql)
:   Describes the used SQL format

[HTTP](/doc/developers/http)
:   Developing a HTTP-capable module for Prosody

[Network services](/doc/developers/network)
:   Opening ports from modules

[Telnet console](/doc/developers/telnet)
:   Extending the telnet console with new commands

# Common data structures {#common_data_structures}

-   [The 'session' object](/doc/developers/sessions)

[^1]: Actually provided by `util.hashes`
