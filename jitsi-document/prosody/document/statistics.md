---
title: Statistics
---

Prosody has a built-in mechanism for gathering and reporting internal
metrics. Examples include reporting the number of connected users,
number of stanzas processed.

::: {.alert .alert-warning}
[:warning:]{.icon} A note on configuration: statistics is a server-wide
feature, all configuration options described on this page must be placed
in the [global section](/doc/configure#overview) of the config file.
Also to prevent inconsistent data reporting, these options cannot be
changed at runtime.
:::

::: {.alert .alert-info}
*Note:* The statistics backends were rewritten for Prosody 0.12 in order to
implement the [OpenMetrics specification](https://openmetrics.io). The
configuration did not change, but the naming and formatting of metrics may
change depending on the measurement modules used. Also, not all existing
modules may be compatible.
:::

# Statistics providers {#statistics_providers}

Although there is a common interface for modules to report their metrics
to Prosody, you can choose how you want Prosody to handle these metrics.
By default any gathering of metrics is disabled (to avoid any impact on
performance when not in use). However you can easily enable one of
Prosody\'s built-in statistics providers, or use an external one, by
setting the \'statistics\' option in your config file.

## Built-in providers {#built-in_providers}

The following providers are available in Prosody out of the box.

### internal

``` {.code .lua}
    statistics = "internal"
```

The internal provider collects and buffers metrics entirely within prosody,
without any external dependencies. The metrics are stored in memory so that
they can be used and exported by other modules or be examined in the telnet
console.

If you want to integrate Prosody with a pull-based external monitoring
system (such as Prometheus) you should use this provider so they can pull the
stored metrics.

### statsd

``` {.code .lua}
    statistics = "statsd"
```

The statsd provider pushes all metrics to an external statsd server (or
anything that is compatible with the standard statsd protocol). It does
not do any processing, aggregation or storage of metrics, which makes it
suitable for high-volume servers.

You can configure the address and port of the statsd server like this:

``` {.code .lua}
    statistics_config = {
        statsd_server = "localhost";
        statsd_port = 8125;
    }
```

The above settings are the defaults.

## External providers {#external_providers}

It is possible to use (and develop) external providers, to allow Prosody
to push metrics to other services for monitoring and aggregation of
metrics.

For example, to load an external provider called \'super\_stats\':

``` {.code .lua}
    statistics = ':super_stats'
```

The library will be loaded using Lua\'s require() function, so should be
available in standard locations. It must implement the API described in
[util.statistics](/doc/developers/util/statistics).

# Collection interval {#collection_interval}

Some modules only report metrics when they are asked to, at intervals.
You can control how often this collection happens using the
\'statistics\_interval\' option. It defaults to 60 seconds.

To enable collection, add the `statistics_interval` option in the global
section of the config:

``` {.code .lua}
statistics_interval = 60 -- the collection interval, in seconds
```

With this, statistics will be collected and processed once per minute.
You may want to pick a different interval depending on your use case.

# Developers

To add metrics to your module, use the
[module:measure()](/doc/developers/moduleapi#modulemeasure_type_name)
method, and follow the examples provided for different kinds of metrics.
