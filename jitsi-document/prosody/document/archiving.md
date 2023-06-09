---
title: Message archiving
---

There are a various reasons a server administrator might want to enable
archiving of user messages. Prosody has a number of modules to cater for
different setups. The table below gives an overview of the available
modules, all of which are available from the
[prosody-modules](/doc/installing_modules#prosody-modules) project.

# Module comparison {#module_comparison}

  Module                    Protocol   Storage                    Notes
  ------------------------- ---------- -------------------------- -----------------------------------------------------------------------------------------------
  mod\_message\_logging     None       Text files                 Recommended for archiving for compliance/auditing purposes.
  mod\_log\_messages\_sql   None       External SQL storage       Recommended alternative to mod\_message\_logging when logging to SQL is a requirement.
  mod\_log\_messages        None       Text files                 Inefficient, for example purposes only.
  mod\_mam                  XEP-0313   Internal archive storage   In-memory unless coupled with an appropriate storage module.
  mod\_archive              XEP-0136   Internal object storage    Inefficient.
  mod\_mam\_archive         XEP-0136   Internal archive storage   Unmaintained community module, may be buggy. For legacy clients that do not support XEP-0313.

## Which protocol? {#which_protocol}

If you are archiving messages for compliance/auditing purposes, you
should choose one of the modules with no protocol associated with them.
These log to files or a database, which can be backed up or rotated as
necessary.

Alternatively if you want users to be able to access and manage their
archive, choose a module with either XEP-0136 or XEP-0313 support. The
user\'s client must implement the same protocol to be able to access the
archive.
