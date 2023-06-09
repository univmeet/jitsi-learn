---
title: Prosody Migrator
---

Prosody comes bundled with a migration tool to make it easy to move all
XMPP server data (user accounts, rosters, vcards, etc.) between
different data stores.

Starting with Prosody 0.12 the migrator supports any [storage
module](/doc/storage) available, with some caveats.

In 0.11.x and earlier, the migrator supports Prosody's file-based and
SQL backends. In a future release we intend to merge our [ejabberd and
XEP-0227 migrators](https://hg.prosody.im/trunk/file/tip/tools/) into
this one.

# Installing

On Debian with [the prosody repository](/download/package_repository)
the migrator can be installed by running

``` bash
sudo apt install prosody-migrator
```

On other distributions it may be included in the same package as
Prosody.

If so you can proceed to [Configuration], otherwise see the next section
for how to [build](#building).

# Building

The term "building" is a bit out of place here as the migrator is a
collection of Lua scripts that do not need compiling. You can either run
it from a Prosody source package or repository checkout - or hopefully
the packages you use for your system install it.

If using from the repository, simply `cd tools/migration`, edit the
migrator.cfg.lua in that directory (as described below) and run
`lua prosody-migrator.lua`.

If you want to install the migrator system-wide then you can run
`make install` here, and it will install to the same prefix as Prosody
as "prosody-migrator".

# Configuration

The first step for using the migrator is to tell it about the data
stores you have. The default config defines two... the file-based one
and an SQLite based one.

First, open up /etc/prosody/migrator.cfg.lua in your editor. You should
see two stores defined, one called 'input' and one called 'output'. It's
possible to name them what you like, but when running the migrator
without config options 'input' and 'output' are used as the default,
er... input and output.

## Store types {#store_types}

From [0.12.0](/doc/release/0.12.0) the migrator uses the same [storage
plugins](/doc/storage) Prosody uses. This allows migration between any
storage type without having to implement migration support.

A downside of this is that the migrator needs some help to know which
hosts and stores to migrate, since storage modules may not implement
functionality to discover that. This is accomplished by listing the
VirtualHosts and Components under a `hosts` key in the definition of the
source store that you will be migrating from. Each host entry should
contain a list of [stores](/doc/storage#common_stores) to migrate.

```
prosody_files {
  hosts = {
    -- each VirtualHost to be migrated must be represented
    ["example.com"] = {
      -- a list of the stores to migrate
      "accounts";
      "roster";
      "archive-archive";
      "pep-pubsub";
      -- etc
    };
  };

  type = "internal"; -- the default file based backend
  path = "/var/lib/prosody";
}

database {
  -- The migration target does not need 'hosts'
  type = "sql";
  driver = "PostgreSQL";
  database = "prosody";
  username = "mydbuser";
  password = "mydbpass";
  host = "localhost";
}
```

## Legacy storage types

In 0.11.x and before the migration was handled by custom modules that
duplicated some of the work of storage plugins.

### prosody_files

A store with type = "prosody_files" will read/write a Prosody data store
using the file-based backend. The only required parameter is 'path', to
give the path to the store.

Example:

``` {.code .lua}
  myfilestore {
         type = "prosody_files";
         path = "/var/lib/prosody";
  }
```

### prosody_sql

The prosody_sql backend is for storing or importing data from an SQL
database using Prosody's schema. It requires the LuaDBI library to be
installed on the system (as does Prosody itself - see [LuaDBI
dependency](/doc/depends#luadbi) for more information). A message from
prosody-migrator that 'prosody_sql' is not an available store type would
suggest that LuaDBI is not found.

Available options are:

  ---------- --------------------------------------------------------------------------------------------------------
  *Name*     *Description*
  driver     (**Required**) The database driver to use (case-sensitive). Must be one of: SQLite3, PostgreSQL, MySQL
  database   (**Required**) The name of the database to connect to (or the filename in SQLite3's case)
  username   (Optional) The username to authenticate to the database.
  password   (Optional) The password to authenticate to the database.
  host       (Optional) The address of the database server to connect to.
  port       (Optional) The port to connect to the database server on.
  ---------- --------------------------------------------------------------------------------------------------------

Example:

``` {.code .lua}
  mydatabase {
         type = "prosody_sql";
         driver = "PostgreSQL";
         database = "prosody";
         username = "mydbuser";
         password = "mydbpass";
         host = "localhost";
  }
```

# Running

After defining your stores in the config, you can simply run the
migrator:

``` code
   prosody-migrator store_one store_two
```

This will move all the data from 'store_one' in the config to
'store_two'. If no stores are given, 'input' and 'output' are used by
default.

::: {.alert .alert-warning}
[:warning:]{.icon} Note that any existing data in the destination store
will be overwritten!
:::

It is also possible to use an alternative config file via the --config
option:

``` code
   prosody-migrator --config=./mymigratorconfig.cfg.lua
```

# Tips and tricks {#tips_and_tricks}

If it's not already obvious from the above - there is no limit on the
number of stores you can define in the migrator config. You can use the
migrator to move the data between them at any time. This makes it handy
for backing up your Prosody database to files, for example, or for
moving data between a production and a development Prosody instance, and
vice-versa.
