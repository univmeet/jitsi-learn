---
title: Using Prosody with Docker
---

Docker is a tool that allows easy download of software images, which it
can run in isolated \"containers\" on any system that has Docker
installed.

Prosody has official images published in the main Docker registry. This
makes Docker very useful for installing Prosody on systems without
official Prosody packages, or for testing or developing Prosody without
disturbing your main system.

::: {.alert .alert-warning}
**Note:** Docker builds are not currently being updated since the move to
our new build system. We plan to get them working again before the next
major release, but if you need up-to-date or nightly versions before then,
you'll need to build them yourself or use a different base image.
:::

The rest of this page assumes that you have Docker already installed on
your system and working. If you do not currently have Docker, see the
[Docker installation guide](https://docs.docker.com/installation/).

# Getting started {#getting_started}

To launch the latest stable release of Prosody in a new container, run:

``` bash
docker run -d --name prosody -p 5222:5222 prosody/prosody
```

The first time you run this, it may take some time to download the
required Docker images.

The default configuration will serve \"localhost\", but you will want to
override this. One way to do this is by mounting your configuration
files inside the container. Let\'s say your configuration is at
/opt/prosody/config on your machine. When starting the container, use
the \'-v\' option to add this as a mounted volume inside the container
at /etc/prosody:

``` bash
docker run -d --name prosody -p 5222:5222 -v /opt/prosody/config:/etc/prosody:ro prosody/prosody
```

The \':ro\' at the end of the volume configuration tells Docker that it
should be read-only. Prosody never needs to write to its config file, so
this is just some additional safety. See [Volumes](#volumes) for other
possible mounts you might want to configure.

# Official docker images {#official_docker_images}

Our build server that handles all our releases and nightly builds, also
builds Docker images and publishes them to the registry at
[prosody/prosody](https://hub.docker.com/r/prosody/prosody/).

When telling Docker which image to use when pulling or starting a
container, use \`prosody/prosody\`. You can optionally add a specific
tag to use, such as \`prosody/prosody:trunk\`. By default Docker uses
the tag called \'latest\', which will always be our latest stable
release.

We have individual tags for stable releases, such as \`0.11.8\`,
\`0.11.9\`. We also have tags for our active release branches
(including stable and in-development) like \`0.11\` and \`trunk\`. Our
per-branch tags are rebuilt nightly whenever a change is committed,
just like our regular nightly builds.

## Dockerfile

Our build server uses the scripts and Dockerfile from the
[prosody-docker](https://github.com/prosody/prosody-docker) project. It
uses the latest [stable
release](https://github.com/prosody/prosody-docker/releases) of
prosody-docker to build new images.

# Volumes

Docker lets you override paths in the default container image, as
described earlier when discussing how to provide configuration files to
the container. Volumes are important, as they are the primary way to
feed data into your container, as well as making sure that data stored
by Prosody is preserved when the container is stopped or destroyed.

This table lists some mount points (inside the container) that you may
want to put volumes at.

  Mount point        Description
  ------------------ ---------------------------------------------------------------------------------------
  /etc/prosody       Configuration files and certificates
  /var/lib/prosody   Prosody's data directory (can be used even if using a database for storage)
  /var/log/prosody   Prosody's logs (may be overridden/unnecessary depending on your logging configuration

# Environment variables

**Note:** This section only applies to new images built from December 2022 onwards.

If you do not provide your own config file, the default configuration
supports some environment variables to control the default behaviour.

## Server

`PROSODY_ADMINS`
: A comma-separated list of JIDs that should be admins of the Prosody instance.

`PROSODY_LOGLEVEL`
: The minimum log level output. May be one of `debug`, `info`, `warn` or `error`. Defaults to `info`.

## Hosts

`PROSODY_VIRTUAL_HOSTS`
: Comma-separated list of virtual host names for Prosody to serve. If unset, it auto-detects the container hostname.

`PROSODY_COMPONENTS`
: Comma-separated list of *internal* components. Each listed component should be of the form `ADDRESS:MODULE` - e.g. a MUC component might be `groups.example.com:muc`.

`PROSODY_EXTERNAL_COMPONENTS`
: Comma-separated list of *external* components. Each listed component should be of the form `ADDRESS:SECRET` - e.g. `gateway.example.com:my-secret-123`.

`PROSODY_NETWORK_HOSTNAME`
: Specifies the network address (not XMPP address) of the Prosody server. If set, this is used as the default HTTP host and proxy65 address. If a single virtual host is configured, the network hostname defaults to that.

## Modules

`PROSODY_PLUGIN_PATHS`
: A comma-separated list of paths to search for plugins (modules). Defaults to `/etc/prosody/modules`.

`PROSODY_ENABLE_MODULES`
: A comma-separated list of modules to enable, in addition to those that are enabled by default.

`PROSODY_DISABLE_MODULES`
: A comma-separated list of modules to disable.

## Data retention

`PROSODY_RETENTION_DAYS`
: The number of days to store data (messages, uploads, etc.) for. Setting this enables mod_mam.

`PROSODY_ARCHIVE_EXPIRY_DAYS`
: The number of days to store messages for (e.g. for synchronization). Defaults to the value of `PROSODY_RETENTION_DAYS`, or `7` if that is not set either. Setting this enables mod_mam.

`PROSODY_UPLOAD_EXPIRY_DAYS`
: The number of days to store file uploads for (so they can be fetched by recipients). Defaults to the value of `PROSODY_RETENTION_DAYS`, or 7 if that is not set.

## Connections

`PROSODY_CERTIFICATES`
: The path to the certificates directory, relative to the config directory. Defaults to `certs` (i.e. '/etc/prosody/certs').

`PROSODY_S2S_SECURE_AUTH`
: Whether to require valid certificates from other servers, or fall back to other methods such as dialback. Defaults to `1`, set to `0` to enable dialback. 

`PROSODY_C2S_RATE_LIMIT`
: The default rate limit for client connections. Defaults to `10kb/s`.

`PROSODY_S2S_RATE_LIMIT`
: The default rate limit for server connections. Defaults to `30kb/s`.

## MUC

These settings are applied to any `muc` components. If none are defined, these settings will be ignored.

`PROSODY_MUC_MODULES`
: A comma-separated list of modules to load on the MUC host, e.g. `muc_mam`.

## Uploads

These settings are applied to any `http_file_share` components. If none are defined, these settings will be ignored.

`PROSODY_UPLOAD_LIMIT_MB`
: The maximum file size in megabytes that Prosody will allow in a single share.

`PROSODY_UPLOAD_STORAGE_GB`
: The total maximum storage that Prosody will use for uploads, for all users.

## Storage

`PROSODY_STORAGE`
: The name of the storage driver to use. Defaults to `internal` unless `PROSODY_SQL_DRIVER` is set, in which case it defaults to `sql`.

`PROSODY_SQL_DRIVER`
: The name of the SQL driver to use. Must be one of `sqlite`, `postgres` or `mysql`.

`PROSODY_SQL_DB`
: The name of the database to connect to (the filename if using SQLite).

`PROSODY_SQL_USERNAME`
: The username to authenticate to the database server with.

`PROSODY_SQL_PASSWORD`
: The password to authenticate to the database server with.

`PROSODY_SQL_HOST`
: The hostname of the database server.

## TURN

`PROSODY_TURN_SECRET`
: The secret token shared with the TURN server to authenticate clients. TURN won't be advertised if this is not set.

`PROSODY_TURN_HOST`
: The network address of the TURN service. Defaults to Prosody's hostname if not set.

`PROSODY_TURN_PORT`
: The network port of the TURN service.

`PROSODY_TURN_TLS_PORT`
: The network port for TURN over TLS (if any).


## Other

`PROSODY_STATISTICS`
: Enable Prosody's statistics/metrics gathering. Disabled by default, but you may want to set it to `internal`.

`PROSODY_EXTRA_CONFIG`
: An path/pattern to include after the main config (included files can add or override options). Defaults to `/etc/prosody/conf.d/*.cfg.lua`.