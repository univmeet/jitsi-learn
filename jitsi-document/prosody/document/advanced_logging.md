---
title: Advanced logging configuration
---

If you want ultimate control over where log messages go, you can use
this rule-based config format for logging. For most cases you will only
need the [simple logging](/doc/logging) formats.

This advanced format allows you give Prosody a list of logging
destinations (console, file, syslog, etc.) and specify which messages
should go to that destination. An example is worth a thousand words, so
here is the default logging Prosody uses if you don\'t specify one in
the config:

``` {.code .lua}
   log = {
            { to = "console" };
         }
```

That\'s right... one rule, it matches all messages and sends them to the
\'console\' sink.

So here\'s a better one, which is similar to the [split
logging](/doc/logging#split_logging) output:

``` {.code .lua}
   log = {
          -- Log all error messages to prosody.err
          { levels = { min = "error" }, to = "file", filename = "/var/log/prosody/prosody.err" };
          -- Log everything of level "info" and higher (that is, all except "debug" messages)
          -- to prosody.log
          { levels = { min =  "info" }, to = "file", filename = "/var/log/prosody/prosody.log" };
         }
```

These rules have something new... a \'levels\' option. To this you can
provide a min/max level, or a list of levels, or a single level.

Here are some examples:

``` {.code .lua}
   levels = { min = "info" } -- Only match messages with a level of 'info' or higher
   levels = { max = "warn" } -- Exclude messages with a level higher that 'warn'
   levels = { min = "info", max = "warn" } -- The above combined, only match messages between 'info' and 'warn'
   levels = { "info", "warn", "error" } -- Only match these levels
   levels = "info" -- Only match 'info' messages, and nothing else
```

If any \'levels\' specification is omitted then the rule will match
messages from all levels.

You may build your own timestamp format, for example:

``` {.code .lua}
   log = {
          -- Log all error messages to prosody.err
          { levels = { min = "error" }, to = "file", timestamps = "%s", filename = "/var/log/prosody/prosody.err" };
          -- Log everything of level "info" and higher (that is, all except "debug" messages)
          -- to prosody.log
          { levels = { min =  "info" }, to = "file", timestamps = "%s", filename = "/var/log/prosody/prosody.log" };
         }
```
