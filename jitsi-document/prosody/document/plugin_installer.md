---
title: Prosody Plugin Installer
---

Prosody comes with a plugin installer available since
[0.12.0](/doc/release/0.12.0).

# Prerequisites

[LuaRocks](https://luarocks.org) is used and must be installed for the
installer to work. See [page about dependenices](/doc/depends#luarocks).

# Getting started

To use the installer you need to specify where to retrieve modules from.

There are two ways to do this. The first is to give the full URL to a
package to install. If you have such an URL, probably ending with
`.src.rock` or similar, you can skip right to the [Installing] section.

The second is to specify the LuaRocks repository to use.  The [community
modules repository](/doc/installing_modules#prosody-modules) exposes
such a repository.

``` lua
plugin_server = "https://modules.prosody.im/rocks/"
```

# Directory

By default plugins are installed into a directory `custom_plugins` under
the [data path](/doc/data_storage). It can be customized by setting

```
installer_plugin_path = "/path/to/installed/modules"
```

This path MUST be readable by the user Prosody runs as, and should be
writable for `prosodyctl install` to work.

The installer path does **not** need to be added to `plugin_paths`.

# Installing

If you have an URL to a package file you can give it directly on the
command line like so:

``` bash
sudo prosodyctl install mod_example_module https://modules.prosody.im/rocks/mod_bob-3-1.src.rock
```

When you specified a `plugin_server` you can install modules with only
the module name using [prosodyctl](/doc/prosodyctl)  by running e.g.:

``` bash
sudo prosodyctl install mod_example_module
```

Remember that you then need to [enable](/doc/modules_enabled) and
configure newly installed modules. Remember to read the modules own
documentation, as the setup procedure might vary.

## Listing

To list all installed modules, use:

``` bash
sudo prosodyctl list
```

Modules that can be updated can be listed using:

``` bash
sudo prosodyctl list --outdated
```

To update them, simply run the same install command again.

## Uninstalling

Installed modules can be removed by running:

``` bash
sudo prosodyctl remove mod_example_module
```

Remember to unload the module and disable it by e.g. removing it from
[modules_enabled](/doc/modules_enabled), or Prosody will complain about
not finding it the next time it starts.
