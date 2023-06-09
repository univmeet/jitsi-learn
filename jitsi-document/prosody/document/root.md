---
title: Running Prosody as root
---

For the unprepared, \'root\' is the name of a user on a computer with
absolute access to any part of the operating system.

Occasionally people will try to run Prosody as root, either by mistake,
or laziness. **Don\'t do it!** Prosody doesn\'t need access to anything
special which only root has access to. It is very rare that you should
run any server software as root.

As a safety check, if mod\_posix is loaded and detects that Prosody is
running as root, it will cause Prosody to quit as soon as possible. To
bypass this check, add the following option to the global section of
your config file (with or without the optional comment):

``` {.code .lua}
    run_as_root = true -- I am insane!
```

# How to run Prosody correctly {#how_to_run_prosody_correctly}

## Init scripts {#init_scripts}

The safest way to run Prosody (or indeed any server software) is to
create a new user account. If you installed using a package, it most
likely created a user automatically. The Debian/Ubuntu packages do this,
for example.

If this is the case, start Prosody using the system init script:

``` {.code}
 sudo /etc/init.d/prosody start
```

## prosodyctl

If you don\'t have such a script, then you may use prosodyctl. It really
does little more than making a best-guess as to where the prosody
executable is, and then running it. If you have a user called
\'prosody\' (or specified another user with prosody\_user in the config)
then it will attempt to switch to that user prior to starting Prosody.

Therefore if you have the \'prosody\' user configured then you should be
fine to run prosodyctl as root (Prosody won\'t end up running as root).
