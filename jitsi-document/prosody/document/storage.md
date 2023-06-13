---
title: Data storage
---

Prosody needs to store a certain amount of data, primarily about users.
For example account names/passwords, contact lists, profiles. The
storage system is extensible via plugins. We have two plugins that come
with Prosody, \"internal\" and \"sql\".

# Selecting a storage backend {#selecting_a_storage_backend}

Select the storage backend to load with the \'storage\' configuration
option. It is not necessary to add storage plugins to
[modules\_enabled](/doc/modules_enabled) - they are loaded automatically
on-demand.

Example to use the \"internal\" storage backend for all stores:

``` {.code .lua}
    storage = "internal"
```

Example to store rosters using \"sql\", and everything else using the
default \"internal\" backend:

``` {.code .lua}
    storage = {
         roster = "sql";
    }
```

Example to store everything using \"sql\", except accounts:

``` {.code .lua}
    default_storage = "sql"
    storage = {
        accounts = "internal";
    }
```

## Backends

  Name                                            Description                                                               Archive support
  ----------------------------------------------- ------------------------------------------------------------------------- ---------------
  [internal](/doc/modules/mod_storage_internal)   Default file-based storage.                                               Yes
  [sql](/doc/modules/mod_storage_sql)             SQL database support.                                                     Yes
  memory                                          Keeps data in memory only, intended for tests, **not for production**     Yes
  null                                            Built-in backend that always fails to load/save data.                     No
  none                                            Backend where all stores are always empty and saving data always fails.   No

Additional storage backends are available in from the [Community
modules](/community_modules) project.

# Common stores {#common_stores}

These are the stores used by core modules. Usually stores will have the
same name as the module using it. Community modules may use additional
stores.

  Store              Description                                  Modules
  ------------------ -------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------
  accounts           Account details, such as (hashed) password   [mod\_auth\_internal\_plain](/doc/modules/mod_auth_internal_plain), [mod\_auth\_internal\_hashed](/doc/modules/mod_auth_internal_hashed)
  account\_details   Extra account details                        [mod\_register](/doc/modules/mod_register)
  roster             User contact lists                           [mod\_roster](/doc/modules/mod_roster), [rostermanager](/doc/developers/core/rostermanager)
  vcard              Profile details and avatar                   [mod\_vcard](/doc/modules/mod_vcard)
  private            Private XML storage data                     [mod\_private](/doc/modules/mod_private)
  blocklist          Blocked JIDs                                 [mod\_blocklist](/doc/modules/mod_blocklist)
  privacy            Privacy lists                                [mod\_privacy](/doc/modules/mod_privacy)
  archive            Message archives                             [mod\_mam](/doc/modules/mod_mam)
  muc_log            MUC message archives                         [mod_muc_mam](/doc/modules/mod_muc_mam)
  persistent         Set of persistent MUC rooms                  [mod\_muc](/doc/modules/mod_muc)
  config             Room configuration                           [mod\_muc](/doc/modules/mod_muc)
  offline            Offline messages                             [mod\_offline](/doc/modules/mod_offline)
  pubsub\_nodes      PubSub node configuration                    [mod\_pubsub](/doc/modules/mod_pubsub)
  pubsub\_data       PubSub node data (archive type)              [mod\_pubsub](/doc/modules/mod_pubsub)
  pep                PEP node configuration                       [mod\_pep](/doc/modules/mod_pep)
  pep\_data          PEP node data (archive type)                 [mod\_pep](/doc/modules/mod_pep)

# Migrating data between stores

Prosody includes a [migration tool](/doc/migrator).
