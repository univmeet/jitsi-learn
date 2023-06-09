---
title: Logging
---

Prosody\'s logging configuration is very flexible. For those who want
something simple however, this is also easy.

All log messages in Prosody have a \'level\', which is basically a
priority/urgency indicator. Most messages Prosody generates are at the
\'debug\' level, and can be safely ignored, unless you are trying to
diagnose and/or report an issue. The next level is \'info\', which is
given to normal everyday messages about things happening on the server -
client/server connections, for example. Two higher levels, \'warn\' and
\'error\' show potential problems. A message of \'warn\' usually does
not require any action to be taken, and may indicate a bug in a client
or server that Prosody is connected to. A message of type \'error\' is
potentially quite serious, and all such messages should be investigated
by an administrator.

## Logging to a single file {#logging_to_a_single_file}

Now, many people simply want Prosody to log to a file. This is easy...
in your config put:

``` {.code .lua}
   log = "prosody.log" -- Can be any filename
```

Prosody will automatically log all messages with a level of \'info\' and
higher, that is... all messages except the noisy \'debug\' level.

## Logging to a single sink {#logging_to_a_single_sink}

Apart from files, Prosody modules can provide log \'sinks\' where
Prosody can send log messages. For example Prosody comes with a
\'console\' sink built-in and mod\_posix provides a \'syslog\' sink.

To log everything to a sink, simply set the log option to the sink name
prefixed by \'\*\', like this:

``` {.code .lua}
   log = "*syslog" -- Requires mod_posix to be loaded
```

All messages will be sent to syslog if it is selected, which allows you
to filter messages using syslog.conf instead.

## Split logging {#split_logging}

If you want to send different log levels to different files or sinks,
you can use a slightly more advanced config format:

``` {.code .lua}
   log = {
       debug = "/var/log/prosody/prosody.log"; -- Send debug and higher here
       error = "*syslog"; -- Send error and higher to the syslog sink
   }
```

The supported levels are: \"debug\", \"info\", \"warn\", \"error\".

## Log rotation {#log_rotation}

Log rotation is the process of creating new log files and archiving the
old ones on a regular basis to make sure that the log files do not get
too large.

Prosody is compatible with tools like logrotate, which should work
automatically if you installed Prosody using a pre-built package. If you
installed Prosody from source or if your system package did not set up
log rotation please see our [documentation on logging for
packagers](/doc/packagers#logging), which includes an example logrotate
configuration for Prosody.

# Going further {#going_further}

For the adventurous, Prosody also offers a more [Advanced logging
configuration](/doc/advanced_logging) format for even more flexibility.

Hopefully this covers all you wanted to know about Prosody\'s logging,
if you have any remaining questions, just remember to [ask](/discuss)
[:smile:]{.icon}
