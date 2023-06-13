---
title: Data storage
---

Prosody\'s current data storage is plain and simple. Data is stored in
files in a data storage directory, organised into files and folders.

# Default data paths {#default_data_paths}

The data path for the current installation can be found out via
`prosodyctl about` (might need to use `sudo`).

With most GNU/Linux packages, the base data directory will be at
\`/var/lib/prosody\`.

Permissions are by default set so that only Prosody can read the files
in that area.

# Backing up and restoring {#backing_up_and_restoring}

Backups can be made quite simply using tar to create a compressed
archive:

``` {.code}
 tar czf prosody_data_backup.tar.gz /var/lib/prosody
```

You can extract the contents of the archive using:

``` {.code}
 tar xzf prosody_data_backup.tar.gz
```

... and then move the folder into place.

**Tip:** You can also use the [Prosody Migrator](/doc/migrator) tool to
import/export user data between Prosody data stores.
