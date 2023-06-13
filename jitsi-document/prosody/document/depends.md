---
title: Prosody Dependencies
---

Prosody depends on other applications or libraries to allow certain
functionality.

This page describes the different runtime dependencies we have, what
they are for, and how to get hold of them if you don't have them.

Note: If you are trying to build Prosody from source then you will need
additional dependencies, please see [Installing from
source](/doc/installing_from_source) for a short how-to.

# Optional

## lua-readline

**Recommended**

Used for
:   History and editing capabilities in the [console](/doc/console)

Prosody version
:   0.12.0

-   [Homepage](https://pjb.com.au/comp/lua/readline.html)

## LuaRocks

**Recommended**

Used for
:   Plugin installer

Prosody version
:   0.12.0

Supported versions:
:   2.x, 3.x (recommended)

Enables installation of plugins using prosodyctl.

-   [Homepage](https://luarocks.org/)

::: {.alert .alert-info}
LuaRocks 2.x on Debian/Ubuntu can be unreliable when multiple versions of Lua
are installed - it will always install packages for the oldest version of Lua
available on the system, rather than the version of Lua that Prosody is using.
:::

## luaunbound

**Recommended**

Used for
:   Secure asynchronous DNS lookups

Required version
:   0.5+

Prosody version
:   0.12.0

-   [Homepage](https://www.zash.se/luaunbound.html)
-   [Source](https://code.zash.se/luaunbound/)
-   [Luarocks](https://luarocks.org/modules/zash/luaunbound)

In Debian 11+ and Ubuntu 21.04+ you can install the `lua-unbound` package:

```
sudo apt install lua-unbound
```

## LuaEvent

**Optional**

Used for
:   Efficiently scaling above hundreds of concurrent connections

Required version
:   [luaevent](https://github.com/harningt/luaevent/releases) 0.3.2+
    (0.4.4+ recommended) with libevent 2.0+

LuaEvent is an optional dependency you should install if you intend your
server to be handling large numbers of concurrent connections.
Information on how to configure Prosody in this instance can be [found
here](/doc/libevent).

Users on Debian/Ubuntu with our [Prosody package
repository](/download/package_repository) added can install luaevent or
luaevent-prosody like so:

``` {.code}
 sudo apt install lua-event
```

This will automatically install libevent if you don't have it. It is not
recommended to use libevent versions before 2.0.

Users on Mac OS X can use homebrew to install LuaEvent:

``` {.code}
 brew install https://prosody.im/files/homebrew/luaevent.rb
```

## LuaSQLite3

**Optional**

Used for
:   SQL database support (SQLite3 only)

Prosody version
:   trunk (not released yet)

This module is used by [mod\_storage\_sql](/doc/modules/mod_storage_sql)
for connecting to SQLite3 databases, as an alternative to [LuaDBI].

## LuaDBI

**Optional**

Used for
:   SQL database support (SQLite3, MySQL, PostgreSQL)

Required version
:   0.6+

This module is used by [mod\_storage\_sql](/doc/modules/mod_storage_sql)
for connecting to SQL databases.

::: {.alert .alert-info}
It is recommended that SQLite3 be compiled with the
[`SQLITE_ENABLE_UPDATE_DELETE_LIMIT`](https://sqlite.org/compile.html#enable_update_delete_limit)
option.
:::

### Debian/Ubuntu and derived GNU/Linux distributions {#debianubuntu_and_derived_gnulinux_distributions1}

Simply install the package 'lua-dbi-DATABASE', where DATABASE is one of:
`mysql` or `postgresql` or `sqlite3`

If the package isn't found in your distribution, you may need to add our
[package repository](/download/package_repository) to your system.

### Source

If you use another platform that doesn't have packages for LuaDBI yet
then you will need to compile from source, which can be found at
<https://github.com/mwild1/luadbi/releases/latest>.

## BitOp

**Recommended on Lua 5.1**

Used for
:   Efficient bit-level manipulation.

Used by [mod\_websocket](/doc/modules/mod_websocket)

There two alternative bit-op modules.

-   Lua 5.2+ comes with `bit32` built in.
-   `bit32` for Lua 5.1 is available in
    [LuaRocks](https://luarocks.org/modules/siffiejoe/bit32) and as
    `lua-bit32` in Debian / Ubuntu
-   LuaJIT 2 comes with `bit` built in, which is available for Lua 5.1
    as `lua-bitop` in Debian / Ubuntu.

## struct

**Used by Prosody 0.11.x only**

Used for
:   Converting numbers to and from their binary representation.

Used by [mod\_websocket](/doc/modules/mod_websocket). If not available,
bitops will be used.

Unknown if packaged anywhere, available from
<http://www.inf.puc-rio.br/~roberto/struct/>.

Equivalent functionality to this module is included in Lua 5.3+ and Prosody
0.12+. Therefore this module is only recommended for Prosody 0.11.x installations
on Lua 5.1 or 5.2.

::: {.alert .alert-warning}
:warning: There exist other Lua modules with the exact same name, some
of which have an incompatible API **which will not work with Prosody**.
:::

## ICU

<https://icu.unicode.org/>

Used for
:   Unicode normalisation etc, alternative to libidn

Required by [mod\_mimicking](/doc/modules/mod_mimicking)

To use, enable in `configure` step like:

``` {.bash}
./configure --idn-library=icu
```

## LuaLDAP

<https://github.com/lualdap/lualdap>

Used for
:   [LDAP authentication](/doc/modules/mod_auth_ldap)

# Required

## Lua

<https://www.lua.org/>

Used for
:   Runtime for majority of Prosody code

**Required**

Prosody is mostly written in Lua, so it needs a Lua runtime.

As of 0.12 Prosody supports the following Lua versions:

- **Lua 5.1** (deprecated, but still functional - Prosody 0.12.x will be the
  last Prosody series to support Lua 5.1)
- **Lua 5.2** (supported)
- **Lua 5.3** (supported)
- **Lua 5.4** (recommended, only if 5.4-compatible [dependencies](/doc/depends) are available)

## LuaSocket

**Required**

Used for
:   Accepting and making network connections

Required version
:   3.x

Debian and Ubuntu users can easily install LuaSocket with apt,
simply run:

``` {.code}
 sudo apt install lua-socket
```

BSD and users of other Linux distributions have reported success using
[luarocks](https://luarocks.org/) to install the 'luasocket' rock.

## LuaSec

**Required**

Used for
:   SSL/TLS support

Required version
:   0.7+

Debian and Ubuntu users can easily install LuaSec with apt, simply
run:

``` {.code}
sudo apt install lua-sec
```


On Mac OS X you can use Homebrew to install LuaSec:

``` {.code}
 brew install https://prosody.im/files/homebrew/luasec.rb
```

You can also download the source from the LuaSec link above, it is not
hard to build, and requires just liblua5.2 and libssl to compile.

## LuaExpat

**Required**

<https://matthewwild.co.uk/projects/luaexpat/>

Used for
:   Parsing XML/XMPP streams

Required version
:   1.2.x+,
    1.4.x+ recommended

Debian and Ubuntu users can easily install LuaExpat with apt, simply
run:

``` {.code}
 sudo apt install lua-expat
```

~~BSD and users of other Linux distributions have reported success using
[luarocks](https://luarocks.org/) to install the 'luaexpat' rock.~~

::: {.alert .alert-warning}
'luaexpat' on luarocks now points to fork without certain features
Prosody needs, see issue [#1375](https://issues.prosody.im/1375).
:::

::: {.alert .alert-warning}
[:warning:]{.icon} Although Prosody works with versions of LuaExpat
prior to 1.3, they leave Prosody open to denial-of-service (DoS)
attacks. Prosody will warn if this is the case and it is strongly
recommended you upgrade, or disable
[mod\_compression](/doc/modules/mod_compression) (note: it is disabled
by default). If you do not see the warning in your log file, you are not
vulnerable (e.g. Debian stable has 1.2.0 but with patches to resolve the
issue).
:::


## LuaFileSystem

**Required**

Used for
:   Managing Prosody's data store and permissions

Required version
:   1.6.2 or higher, or Debian's `lua-filesystem` package

LuaFileSystem is automatically installed by our packages, but if you
find yourself without it for some reason it is easy to obtain.
Debian/Ubuntu users can run the following command to install it:

``` {.code}
 sudo apt install lua-filesystem
```
