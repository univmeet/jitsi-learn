---
title: LuaRocks
---

LuaRocks is a lightweight specialised package manager dedicated for
installing Lua modules.

# Usage

To install a module, simply run:

``` {.code}
 luarocks install <module name>
```

You can also use the LuaRocks \'search\' command to look for modules,
and more. See luarocks --help for a full list.

# Troubleshooting

Some older versions of LuaRocks supplied with Debian and Ubuntu have a
bug when compiling binary modules on 64-bit systems.

An example of a failed install message would be:

``` {.code}
  /usr/bin/ld: relocation R_X86_64_32 against `.rodata.str1.1' can not be used when making a shared object; recompile with -fPIC
```

The fix is simple, and you only have to do it once to fix the issue for
your system. Just run this command:

``` {.code}
  echo 'variables.CFLAGS = "-O2 -fPIC"' | sudo tee -a /etc/luarocks/config.lua
```

Problem solved! [:smile:]{.icon}
