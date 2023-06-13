---
title: Plugins Directory
---

Your plugins directory contains all the optional modules that Prosody
uses. Adding a module file (.lua) to this directory and then either
commanding Prosody to load it, or adding it to
[modules\_enabled](/doc/modules_enabled) in your config is enough to get
Prosody using it. Bear in mind that some plugins will require
configuration before they will do anything useful - refer to their
documentation for more help on that. The documentation for core modules
(those supplied by the Prosody team) is [available here](/doc/modules).

Your plugins directory will be in one of several locations, depending on
how you installed Prosody.

If you never installed Prosody, and are running it directly from source
checkout then Prosody will use the \'plugins\' sub-directory of the
place that you started the server from.

If you installed using \'make install\' or a package, check
**/usr/lib/prosody/modules/**

Windows users can find the plugins folder in the location they opted to
install Prosody to during setup.

# Additional Plugin Directories {#additional_plugin_directories}

You can specify additional plugin directories using the `plugin_paths`
config option. Specify it in the global section of your config like
this:

``` {.code}
plugin_paths = { "path/to/plugins", "path/to/plugins2" }
```

Plugins are searched in all the specified paths in order, and finally
checked in the default plugin directory.

::: {.alert .alert-warning}
[:warning:]{.icon} A restart is required after changing `plugin_paths`.
:::
