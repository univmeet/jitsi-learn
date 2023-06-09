---
title: Prosody Modules
toc: false
---

This is a list of Prosody modules, both core (distributed with Prosody)
and third-party.

# Core modules {#core_modules}

::: {.alert .alert-warning}
[:warning:]{.icon} This list does not include modules for
[authentication](/doc/authentication) or [data storage](/doc/storage).
:::

| Name                                                                | Description                                                      | Specs                                                                                                        | Notes                                              | First version |
|:--------------------------------------------------------------------|:-----------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|:--------------|
| [adhoc](/doc/modules/mod_adhoc)                                     | Provides protocol support for adhoc commands                     | [XEP-0050](https://xmpp.org/extensions/xep-0050.html)                                                        | Automatically loaded by other modules when needed  | 0.8           |
| [admin_adhoc](/doc/modules/mod_admin_adhoc)                         | Service Administration                                           | [XEP-0133](https://xmpp.org/extensions/xep-0133.html)                                                        |                                                    | 0.8           |
| [admin_shell](/doc/modules/mod_admin_shell)                         | Provides commands and logic for admin console                    |                                                                                                              |                                                    | 0.12          |
| [admin_socket](/doc/modules/mod_admin_socket)                       | Access admin console via UNIX socket                             |                                                                                                              | Replaces mod_admin_telnet                          | 0.12          |
| [admin_telnet](/doc/modules/mod_admin_telnet)                       | Telnet admin console                                             |                                                                                                              | Previously [mod_console](/doc/modules/mod_console) | 0.2           |
| [announce](/doc/modules/mod_announce)                               | Broadcast message to online users                                |                                                                                                              | Supported by Psi, Gajim and other clients          | 0.5           |
| [blocklist](/doc/modules/mod_blocklist)                             | Block list                                                       | [XEP-0191](https://xmpp.org/extensions/xep-0191.html)                                                        |                                                    | 0.10          |
| [bookmarks](/doc/modules/mod_bookmarks)                             | Converts between old and new ways to store chat room bookmarks   | [XEP-0402](https://xmpp.org/extensions/xep-0402.html), [XEP-0411](https://xmpp.org/extensions/xep-0411.html) |                                                    | 0.12          |
| [bosh](/doc/modules/mod_bosh)                                       | BOSH (XMPP over HTTP) support for Prosody                        | [XEP-0124](https://xmpp.org/extensions/xep-0124.html), [XEP-0206](https://xmpp.org/extensions/xep-0206.html) |                                                    | 0.3           |
| [c2s](/doc/modules/mod_c2s)                                         | Handles normal XMPP client connections                           | [RFC 6120](https://www.rfc-editor.org/rfc/rfc6120.html)                                                      | Loaded by default                                  | 0.9           |
| [carbons](/doc/modules/mod_carbons)                                 | Carbons                                                          | [XEP-0280](https://xmpp.org/extensions/xep-0280.html)                                                        |                                                    | 0.10          |
| [component](/doc/modules/mod_component)                             | Support for external components                                  | [XEP-0114](https://xmpp.org/extensions/xep-0114.html)                                                        |                                                    | 0.4           |
| [compression](/doc/modules/mod_compression)                         | Support for stream compression on C2S and S2S links              | [XEP-0138](https://xmpp.org/extensions/xep-0138.html)                                                        | S2S is supported since 0.7. Deprecated in 0.10     | 0.6           |
| [cron](/doc/modules/mod_cron)                                       | Coordinates periodic tasks for other modules                     |                                                                                                              |                                                    | 0.12          |
| [csi](/doc/modules/mod_csi)                                         | Allows clients to report their active/inactive state             | [XEP-0352](https://xmpp.org/extensions/xep-0352)                                                             |                                                    | 0.11          |
| [csi_simple](/doc/modules/mod_csi_simple)                           | Simple mobile optimizations to go with mod_csi                   | [XEP-0286](https://xmpp.org/extensions/xep-0286)                                                             |                                                    | 0.11          |
| [debug_sql](/doc/modules/mod_debug_sql)                             | Activates extra verbose debug logging for SQL queries            |                                                                                                              |                                                    | 0.10          |
| [dialback](/doc/modules/mod_dialback)                               | Dialback support for server-to-server identity verification      | [XEP-0220](https://xmpp.org/extensions/xep-0220.html)                                                        |                                                    | 0.1           |
| [disco](/doc/modules/mod_disco)                                     | Service Discovery support                                        | [XEP-0030](https://xmpp.org/extensions/xep-0030.html)                                                        |                                                    | 0.1           |
| [external_services](/doc/modules/mod_external_services)             | Discovery and generation of external services                    | [XEP-0215](https://xmpp.org/extensions/xep-0215.html)                                                        |                                                    | 0.12          |
| [groups](/doc/modules/mod_groups)                                   | Groups ('shared roster') support                                 |                                                                                                              |                                                    | 0.5           |
| [http](/doc/modules/mod_http)                                       | Allow Prosody modules to expose various services over HTTP       | [RFC 2616](https://www.rfc-editor.org/rfc/rfc2616.html)                                                      | Automatically loaded by other modules when needed  | 0.9           |
| [http_errors](/doc/modules/mod_http_errors)                         | Serve HTTP error pages                                           |                                                                                                              | Automatically loaded by mod_http                   | 0.9           |
| [http_files](/doc/modules/mod_http_files)                           | Serve static files over HTTP (does **not** allow uploads)        | [RFC 2616](https://www.rfc-editor.org/rfc/rfc2616.html)                                                      | Was called mod_httpserver until 0.8                | 0.3           |
| [http_file_share](/doc/modules/mod_http_file_share)                 | Let users share files via HTTP                                   | [XEP-0363](https://xmpp.org/extensions/xep-0363.html)                                                        |                                                    | 0.12          |
| [http_openmetrics](/doc/modules/mod_http_openmetrics)               | Expose statistics in OpenMetrics format                          | [OpenMetrics](https://openmetrics.io/)                                                                       |                                                    | 0.12          |
| [invites](/doc/modules/mod_invites)                                 | Invite creation and management                                   |                                                                                                              |                                                    | 0.12          |
| [invites_adhoc](/doc/modules/mod_invites_adhoc)                     | Invite creation                                                  | [XEP-0401 version 0.3.0](https://xmpp.org/extensions/attic/xep-0401-0.3.0.html)                              |                                                    | 0.12          |
| [invites_register](/doc/modules/mod_invites_register)               | Invite based registration                                        | [XEP-0401 version 0.3.0](https://xmpp.org/extensions/attic/xep-0401-0.3.0.html)                              |                                                    | 0.12          |
| [iq](/doc/modules/mod_iq)                                           | Core XMPP functionality                                          | [RFC 6120](https://www.rfc-editor.org/rfc/rfc6120.html)                                                      |                                                    | 0.1           |
| [lastactivity](/doc/modules/mod_lastactivity)                       | Support querying for user idle times                             | [XEP-0012](https://xmpp.org/extensions/xep-0012.html)                                                        |                                                    | 0.5           |
| [legacyauth](/doc/modules/mod_legacyauth)                           | Legacy (non-SASL) authentication                                 | [XEP-0078](https://xmpp.org/extensions/xep-0078.html)                                                        | Required by some old clients                       | 0.1           |
| [limits](/doc/modules/mod_limits)                                   | Connection-level rate limiting                                   |                                                                                                              |                                                    | 0.10          |
| [mam](/doc/modules/mod_mam)                                         | Message archiving                                                | [XEP-0313](https://xmpp.org/extensions/xep-0313.html)                                                        |                                                    | 0.10          |
| [message](/doc/modules/mod_message)                                 | Message handling                                                 | [RFC 6121](https://www.rfc-editor.org/rfc/rfc6121.html)                                                      |                                                    | 0.1           |
| [mimicking](/doc/modules/mod_mimicking)                             | Prevents username spoofing                                       | [UTS #39](https://www.unicode.org/reports/tr39/)                                                              |                                                    | 0.12          |
| [motd](/doc/modules/mod_motd)                                       | Send a MOTD to users on login                                    |                                                                                                              |                                                    | 0.7           |
| [muc](/doc/modules/mod_muc)                                         | Multi-User Chat support                                          | [XEP-0045](https://xmpp.org/extensions/xep-0045.html)                                                        |                                                    | 0.3           |
| [muc_mam](/doc/modules/mod_muc_mam)                                 | Message archiving for Multi-User Chat                            | [XEP-0313](https://xmpp.org/extensions/xep-0313.html)                                                        |                                                    | 0.11          |
| [muc_unique](/doc/modules/mod_muc_unique)                           | Provides a random MUC name                                       | [XEP-0307](https://xmpp.org/extensions/xep-0307.html)                                                        |                                                    | 0.11          |
| [net_multiplex](/doc/modules/mod_net_multiplex)                     | Allows serving multiple protocols on the same port               |                                                                                                              |                                                    | 0.9           |
| [offline](/doc/modules/mod_offline)                                 | Offline message storage and delayed delivery support             | [XEP-0160](https://xmpp.org/extensions/xep-0203.html) [XEP-0091](https://xmpp.org/extensions/xep-0091.html)  |                                                    | 0.8           |
| [pep](/doc/modules/mod_pep)                                         | Lets users broadcast various information to interested contacts  | [XEP-0163](https://xmpp.org/extensions/xep-0163.html)                                                        | Replaced previous mod_pep                          | 0.11          |
| [pep_simple](/doc/modules/mod_pep_simple)                           | Same as mod_pep but simpler and fewer features                   | [XEP-0163](https://xmpp.org/extensions/xep-0163.html)                                                        | Older version of mod_pep from 0.10                 | 0.5           |
| [ping](/doc/modules/mod_ping)                                       | XMPP Ping reply support                                          | [XEP-0199](https://xmpp.org/extensions/xep-0199.html)                                                        |                                                    | 0.1           |
| [posix](/doc/modules/mod_posix)                                     | Support for POSIX-only system features                           | [POSIX](https://www.opengroup.org/onlinepubs/9699919799/)                                                     | Required for daemonizing, syslog logging           | 0.3           |
| [presence](/doc/modules/mod_presence)                               | User presence notification                                       | [RFC 6121](https://www.rfc-editor.org/rfc/rfc6121.html)                                                      |                                                    | 0.1           |
| [privacy](/doc/modules/mod_privacy)                                 | Privacy lists                                                    | [XEP-0016](https://xmpp.org/extensions/xep-0016.html)                                                        | Deprecated in 0.10                                 | 0.7           |
| [private](/doc/modules/mod_private)                                 | Private XML storage for clients                                  | [XEP-0049](https://xmpp.org/extensions/xep-0049.html)                                                        |                                                    | 0.3           |
| [proxy65](/doc/modules/mod_proxy65)                                 | File transfer proxy                                              | [XEP-0065](https://xmpp.org/extensions/xep-0065.html)                                                        |                                                    | 0.7           |
| [pubsub](/doc/modules/mod_pubsub)                                   | Publish-Subscribe component                                      | [XEP-0060](https://xmpp.org/extensions/xep-0060.html)                                                        |                                                    | 0.9           |
| [register](/doc/modules/mod_register)                               | In-band registration and password change                         | [XEP-0077](https://xmpp.org/extensions/xep-0077.html)                                                        | Split into 3 modules in 0.11                       | 0.1           |
| [register_ibr](/doc/modules/mod_register_ibr)                       | In-band registration                                             | [XEP-0077](https://xmpp.org/extensions/xep-0077.html)                                                        | Previously part of mod_register                    | 0.11          |
| [register_limits](/doc/modules/mod_register_limits)                 | Enforces limits on account registration                          |                                                                                                              | Previously part of mod_register                    | 0.11          |
| [roster](/doc/modules/mod_roster)                                   | Manage and store client rosters                                  | [RFC 6121](https://www.rfc-editor.org/rfc/rfc6121.html)                                                      |                                                    | 0.1           |
| [s2s_auth_certs](/doc/modules/mod_s2s_auth_certs)                   | Handles certificate authentication for s2s connections.          | [RFC 6120](https://www.rfc-editor.org/rfc/rfc6125.html)                                                      | Loaded by default, was part of mod_s2s before      | 0.10          |
| [s2s_bidi](/doc/modules/mod_s2s_bidi)                               | Bidirectional Server-to-Server Connections                       | [XEP-0288](https://xmpp.org/extensions/xep-0288.html)                                                        |                                                    | 0.12          |
| [s2s](/doc/modules/mod_s2s)                                         | Handles server-to-server connections.                            | [RFC 6120](https://www.rfc-editor.org/rfc/rfc6120.html)                                                      |                                                    | 0.9           |
| [saslauth](/doc/modules/mod_saslauth)                               | Authentication using SASL                                        | [RFC 6120](https://www.rfc-editor.org/rfc/rfc6120.html)                                                      |                                                    | 0.1           |
| [scansion_record](/doc/modules/mod_scansion_record)                 | Records stanzas in format suitable for creating test cases       |                                                                                                              |                                                    | 0.11          |
| [server_contact_info](/doc/modules/mod_server_contact_info)         | Lets you advertise contact addresses                             | [XEP-0157](https://xmpp.org/extensions/xep-0157.html)                                                        |                                                    | 0.10          |
| [smacks](/doc/modules/mod_smacks)                                   | Provides reliability and session resumption                      | [XEP-0198](https://xmpp.org/extensions/xep-0198.html)                                                        |                                                    | 0.12          |
| [stanza_debug](/doc/modules/mod_stanza_debug)                       | Extra verbose logging of XML stanzas.                            |                                                                                                              |                                                    | 0.10          |
| [time](/doc/modules/mod_time)                                       | Reply to "What time is it?" requests                             | [XEP-0090](https://xmpp.org/extensions/xep-0202.html)                                                        |                                                    | 0.2           |
| [tls](/doc/modules/mod_tls)                                         | Support for SSL/TLS encryption                                   | [RFC 6120](https://www.rfc-editor.org/rfc/rfc6120.html)                                                      |                                                    | 0.1           |
| [tokenauth](/doc/modules/mod_tokenauth)                             | Token based login support module                                 |                                                                                                              |                                                    | 0.12          |
| [tombstones](/doc/modules/mod_tombstones)                           | Prevent registration and impersonation of deleted accounts       |                                                                                                              |                                                    | 0.12          |
| [turn_external](/doc/modules/mod_turn_external)                     | Provides TURN credentials for Audio/Video                        | [XEP-0215](https://xmpp.org/extensions/xep-0215.html)                                                        | Uses mod_external_services behind the scenes       | 0.12          |
| [unknown](/doc/modules/mod_unknown)                                 | Loaded when platform is not Windows or POSIX                     |                                                                                                              | Does nothing                                       | 0.10          |
| [uptime](/doc/modules/mod_uptime)                                   | Reply to uptime requests                                         | [XEP-0012](https://xmpp.org/extensions/xep-0012.html)                                                        |                                                    | 0.1           |
| [user_account_management](/doc/modules/mod_user_account_management) | Support for password change                                      | [XEP-0077](https://xmpp.org/extensions/xep-0077.html)                                                        | Previously part of mod_register                    | 0.11          |
| [vcard4](/doc/modules/mod_vcard4)                                   | Access to modern vcard format stored in PEP                      | [XEP-0292](https://xmpp.org/extensions/xep-0292.html)                                                        |                                                    | 0.11          |
| [vcard](/doc/modules/mod_vcard)                                     | Legacy vCard storage for user profiles                           | [XEP-0054](https://xmpp.org/extensions/xep-0054.html)                                                        |                                                    | 0.2           |
| [vcard_legacy](/doc/modules/mod_vcard_legacy)                       | Compatibility between new and old methods for avatars and vcards | [XEP-0398](https://xmpp.org/extensions/xep-0054.html)                                                        |                                                    | 0.11          |
| [version](/doc/modules/mod_version)                                 | Reply to software version requests                               | [XEP-0092](https://xmpp.org/extensions/xep-0092.html)                                                        |                                                    | 0.1           |
| [watchregistrations](/doc/modules/mod_watchregistrations)           | Notify a list of JIDs on new registrations                       |                                                                                                              |                                                    | 0.4           |
| [websocket](/doc/modules/mod_websocket)                             | Supports for XMPP connections over Websockets                    | [RFC 7395](https://www.rfc-editor.org/rfc/rfc7395.html)                                                      |                                                    | 0.10          |
| [welcome](/doc/modules/mod_welcome)                                 | Sends a welcome message to new users                             |                                                                                                              |                                                    | 0.4           |
| [windows](/doc/modules/mod_windows)                                 | Place holder for Windows platform support                        |                                                                                                              | Does nothing                                       | 0.10          |
| [xmlrpc](/doc/modules/mod_xmlrpc)                                   | Support for controlling Prosody via XML-RPC                      |                                                                                                              | Deprecated in 0.7                                  | 0.4           |

# Non-core modules {#non-core_modules}

Unofficial modules or modules not supplied with Prosody as standard are
available in the [prosody-modules project](https://modules.prosody.im/).
Also see [instructions for installing modules](/doc/installing_modules).