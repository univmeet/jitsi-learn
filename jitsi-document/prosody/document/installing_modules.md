---
title: Installing modules
---

Most of Prosody\'s functionality is implemented through plugins/modules
(the two terms are used interchangeably). Sometimes you will want to
install additional modules that are not supplied with Prosody.

# Paths

By default Prosody looks in a single directory for a module, and this is
set at build time. On a standard Linux system such as Debian, you might
expect to find it somewhere like `/usr/lib/prosody/modules/`.

You can ask Prosody to tell you the path by
running: `prosodyctl about`

In previous versions, you can extract the default from the Prosody
source with something like: `grep ^CFG_PLUGINDIR $(which prosody)`

Finally, you can add custom paths to search. Simply add the `plugin_paths`
option to the global section of your config:

``` {.code .lua}
    -- These paths are searched in the order specified, and before the default path
    plugin_paths = { "/path/to/modules", "/path/to/more/modules" }
```

Prosody will always look in the built-in path, so you don\'t need to add
it if you set `plugin_paths`.

## Directory structure {#directory_structure}

Within the module directory you can simply put `mod_*.lua` files. Some
modules have multiple files, so for convenience you may also put a
module and its files within a sub-directory of the same name. Therefore
when looking to load mod\_foobar, Prosody will check (in this order):

``` {.code}
  /path/to/modules/mod_foobar/mod_foobar.lua
  /path/to/modules/foobar/mod_foobar.lua
  /path/to/modules/mod_foobar.lua
```

# Using the installer

Prosody comes with a plugin installer available starting with
[0.12.0](/doc/release/0.12.0) plugins to be installed simply by running
[prosodyctl](/doc/prosodyctl) , allowing like:

``` bash
sudo prosodyctl install https://mods.example/mod_example_module.src.rock
```

Remember that you then need to [enable](/doc/modules_enabled) and
configure newly installed modules. Remember to read the modules own
documentation, as the setup procedure might vary.

[More information about the plugin installer](/doc/plugin_installer).

# prosody-modules

A community repository of modules exists at the
[prosody-modules](https://modules.prosody.im/) project.

::: {.alert .alert-warning}
[:warning:]{.icon} Note that while we\'ll help you if you have problems
or find bugs in any module in prosody-modules, many of them are
beta, alpha, experimental or just for fun! Each module\'s documentation
describes what state it is in, so **check carefully** before installing
such modules on production servers.
:::

The easiest way to fetch and install these is currently via Mercurial
(hg). Once you have it installed, simply run:

``` {.code}
  hg clone https://hg.prosody.im/prosody-modules/ prosody-modules
```

It will download all the files to a new directory named
\'prosody-modules\'.

Since some modules are available in core and community it is recommended
to create an empty folder 'prosody-modules-enabled' and symlink the
modules you want to use from the community repository. **Note** that
especially for modules consisting of multiple files, symlink the
*directory* (`prosody-modules/mod_example`), not the main
`mod_example.lua` file.

``` bash
cd /path/to/prosody-modules-enabled
ln -s /path/to/prosody-modules/mod_example
```

Once you have the files, add the path 'prosody-modules-enabled' to
`plugin_paths`, as described above. Then add any of the modules to the
[modules\_enabled](/doc/modules_enabled) list (without `mod_` and
`.lua`), and you're done.

## Updating

Whenever you want to update, simply switch to that directory and run:

``` {.bash}
hg pull --update
```

You will need to restart Prosody or reload the modules to take effect.
