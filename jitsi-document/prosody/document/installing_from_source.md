---
title: Installing from source
---

Building Prosody from source isn\'t difficult, but it certainly isn\'t
as simple as using one of our ready-made [packages](/download/start).

Why might you want to build from source? Well it\'s certainly the
easiest way to get hacking on Prosody. Or perhaps there isn\'t a package
for your system yet, or perhaps you want to contribute a package.
Alternatively you may simply want more control over how and where
Prosody is installed on your system.

There are many different kinds of systems, all configured in different
ways. No single set of instructions will work for all, though the steps
outlined here should be a good guide for most cases. If you are having
trouble getting it to work, feel free to [let us know your
problem](/discuss), and we\'ll try to help however we can!

If you are developing packages, or even if you aren\'t, there are some
additional tips to accompany this article that may be useful in our
[documentation for packagers](/doc/packagers).

This guide assumes that you are using the command-line on a GNU/Linux or
similar system.

# Fetching the source {#fetching_the_source}

## Official releases {#official_releases}

First of all, make a directory where we will work on Prosody:

``` {.code}
 mkdir prosody-build
 cd prosody-build
```

Now download the latest [release](/doc/release/_LATESTRELEASE) from
<https://prosody.im/downloads/source>.

``` {.code}
 wget https://prosody.im/downloads/source/prosody-_LATESTRELEASE.tar.gz
 
```

Extract it, and move into the newly extracted directory:

``` {.code}
 tar xzf prosody-_LATESTRELEASE.tar.gz
 cd prosody-_LATESTRELEASE
```

## Direct from our source repository {#direct_from_our_source_repository}

All daily development occurs in a source repository, powered by
Mercurial. If you have Mercurial - \'hg\' - installed then you can
simply fetch the source through:

``` {.code}
 hg clone https://hg.prosody.im/trunk prosody-trunk
```

The above will create a new directory, \'prosody-trunk\' containing the
latest development code. The neat thing about using hg is that if you
want to pull down our latest changes then all you need to do is switch
into this directory and run:

``` {.code}
 hg pull -u
```

# Building

## Dependencies

There are a couple of libraries which Prosody needs installed before you
can build it. These are:

-   The [Lua](https://lua.org/) library
    -   Lua version 5.2 is recommended with Prosody 0.11.x
    -   Lua version 5.4 is recommended with Prosody 0.12.x
-   [OpenSSL](https://openssl.org/)
-   String processing library, one of
    -   [ICU](https://icu.unicode.org/) (recommended)
    -   [GNU libidn](http://www.gnu.org/software/libidn/)

These can be installed on Debian/Ubuntu by simply running:

```{.code}
apt build-dep prosody
```

or by manually installing the packages `lua5.2`, `liblua5.2-dev`,
`libidn11-dev` and `libssl-dev`.

On Mandriva try:

``` {.code}
urpmi lua liblua-devel libidn-devel libopenssl-devel
```

On Mac OS X, if you have MacPorts installed, you can try:

``` {.code}
sudo port install lua lua-luasocket lua-luasec lua-luaexpat
```

On other systems... good luck, but please [let us know](/discuss) of the
best way of getting the dependencies for your system and we can add it
here.

## configure

The first step of building is to run the configure script. This creates
a file called \'config.unix\' which is used by the next step to control
aspects of the build process.

``` {.bash}
./configure
```

All options to configure can be seen by running

``` {.code}
./configure --help
```

## make

Once you have run configure successfully, then you can simply run:

``` {.code}
make
```

Simple? [:smile:]{.icon}

If you do happen to have problems at this stage, it is most likely due
to the build process not finding the dependencies. Ensure you have them
installed, and in the standard library paths for your system.

For more help, [just ask](/discuss) [:wink:]{.icon}

## install

Finally, if this is for a real setup and not just development purposes,
we recommend installing Prosody system-wide by running:

``` {.code}
sudo make install
```

...it will install into /usr/local/ by default. To change this you can
pass to the initial ./configure using the \'prefix\' option, or edit
config.unix directly. If the new path doesn\'t require root permission
to write to, you also won\'t need (or want) to use \'sudo\' in front of
the \'make install\'.

Alternatively, you can run Prosody directly from where you built it, with
`./prosody` (and `./prosodyctl` also works)

Have fun, and see you on Jabber!
