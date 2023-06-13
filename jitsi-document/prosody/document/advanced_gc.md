---
title: Advanced GC configuration
---

Prosody is written primarily in Lua, which is a [garbage collected](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)) language. The garbage collector
(GC) is responsible for periodically cleaning up objects that Prosody no
longer needs in memory.

Although this common approach to memory management adds convenience and
safety features, it also adds overhead in terms of the CPU and RAM that
Prosody may require. Luckily the GC is quite configurable, so you can
tell it which resources it should focus on reducing (i.e. CPU or RAM).

Since Prosody 0.11.7, Prosody supports configuration of the GC and comes
supplied with what we feel are sensible defaults for Prosody. However
different Prosody deployments see different traffic patterns, and some
run in constrained environments where it is valuable to be able to tweak
the GC on a per-server basis.

A quick note about Lua versions: there are a number of ways to implement
a GC, and the GC algorithms can be tweaked or rewritten completely between
different Lua versions. That means the configuration you set can behave
entirely differently in different Lua versions, they are **not** portable.

Prosody's configuration options attempts to hide changes in the Lua GC
parameters, and turn these into simpler options that you can tweak.
Nevertheless, they will still behave differently between Lua versions.

## GC principles

As Prosody is running, it allocates memory as necessary to hold data. At
some point this data is no longer needed, and we call it "garbage". But
it is not immediately known when data becomes garbage. The GC periodically
examines the data in memory, and figures out which data is still being
used, and which data can be released.

All supported Lua versions include an "incremental" GC algorithm, which
means that it performs its work in small steps spread out over time.
This prevents it from stopping Prosody for long periods while it peeks
at all the data.

Some Lua versions (5.2 and 5.4) also support a "generational" algorithm,
which is essentially the same but adds additional logic to prioritize
looking at recently-allocated data first, which is usually the data most
likely to be discarded (most data objects are only needed temporarily).
The Lua 5.2 generational mode is **not** supported, and cannot be
enabled through Prosody configuration options.

## Configuration

All configuration is done through the 'gc' configuration option which
must be provided in the global section of your config file. What fields
it accepts will depend upon your Lua version and the selected mode.

``` {.code .lua}
gc = {
    mode = "incremental";
    threshold = 105;
    speed = 250;
}
```

### Incremental mode

To use these options set `mode = "incremental"`. This mode is supported
in Lua 5.1, 5.2, 5.3 and 5.4, though they may vary in behaviour.

#### threshold

This configures when the GC will be triggered to run. By default it does
not run continuously, thus saving CPU cycles for the application.

After each garbage collection cycle, Lua tracks how much memory is being
used by Prosody. The 'threshold' value is specified as a percentage of
this baseline memory usage. For example a threshold of `200` will wait
for Prosody's memory usage to double before it triggers the GC to start
running again.

The default threshold in Prosody 0.11.7 is `105`, meaning the GC will
trigger after a 5% increase in memory usage. The value should not be set
below `100`, which causes the GC to run continuously.

Smaller values cause higher CPU usage, larger values cause higher memory
usage.

#### speed

This value controls how aggressively the GC will perform its work.

The speed should never be set below 100, which attempts to balance
the rate of memory deallocation equally with the rate of memory
allocation. Values smaller than 100 may result in Prosody's memory usage
growing continuously.

The default speed is `250`, which means the GC will attempt to free 2.5x
memory per cycle as Prosody allocated.

Smaller values reduce Prosody's latency (by making the GC work less) and
reduce CPU usage and increase RAM usage. Larger values cause higher CPU
usage, higher latency but reduce RAM usage.

#### step_size

**Supported on Lua 5.4 only**

This parameter provides more fine-grained control over the size of each
GC step. To quote the Lua 5.4 documentation:

> This parameter is logarithmic: A value of n means the interpreter will
> allocate 2n bytes between steps and perform equivalent work during the
> step. A large value (e.g., 60) makes the collector a stop-the-world
> (non-incremental) collector. The default value is 13, which means
> steps of approximately 8 Kbytes. 

### Generational mode

**Supported on Lua 5.4 only**

To use this mode, set `mode = "generational"`.

The generational mode added in Lua 5.4 promises to make the GC more
effective and more efficient, by prioritizing deallocation of the most
recently allocated objects.

A GC step that only looks at recent objects is known as a 'minor step',
while a 'major step' performs a full search of all objects. Since both
steps need to pause Prosody while they run, it is desirable to run minor
collections frequently enough that they keep memory usage low and a
major collection only needs to run occasionally.

#### minor_threshold

Configures the percentage by which memory usage should grow before
triggering a minor GC step. E.g. a value of `20` will perform a minor
step if memory usage grows by 20% since the last major step was
performed.

If generational mode is enabled and this option is not specified, it
defaults to `20`. The maximum value is `200`.

#### major_threshold

Configured the percentage of memory growth at which a major collection
will be performed. E.g a value of `100` will wait for memory usage to
double before triggering a major GC collection step.

If generational mode is enabled and this option is not specified, it
defaults to `100`. The maximum value is `1000`.


## Further reading

Lua GC documentation:

- [Lua 5.1](https://www.lua.org/manual/5.1/manual.html#2.10)
- [Lua 5.2](https://www.lua.org/manual/5.2/manual.html#2.5)
- [Lua 5.3](https://www.lua.org/manual/5.3/manual.html#2.5)
- [Lua 5.4](https://www.lua.org/manual/5.4/manual.html#2.5)