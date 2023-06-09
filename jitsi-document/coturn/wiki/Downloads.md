# This WIKI is outdated and will be removed soon!! Please check the source for more recent documentation: https://github.com/coturn/coturn #

## Latest official recommended version - 4.5.2: ##

  * fix null pointer dereference in case of out of memory. (thanks to Thomas Moeller for the report)
  * merge PR #517 (by wolmi)
                * add prometheus metrics
  * merge PR #637 (by David Florness)
            * Delete trailing whitespace in example configuration files
  * merge PR #631 (by Debabrata Deka)
            * Add architecture ppc64le to travis build
  * merge PR #627 (by Samuel)
                * Fix misleading option in doc (prometheus)
  * merge PR #643 (by tupelo-schneck)
                * Allow RFC6062 TCP relay data to look like TLS
  * merge PR #655 (by plinss)
                * Add support for proxy protocol V1
  * merge PR #618 (by Paul Wayper)
                * Print full date and time in logs
                * Add new options: "new-log-timestamp" and "new-log-timestamp-format"
  * merge PR #599 (by Cédric Krier)
                * Do not use FIPS and remove hardcode OPENSSL_VERSION_NUMBER with LibreSSL
  * update Docker mongoDB and fix with workaround the missing systemctl
  * merge PR #660 (by Camden Narzt)
                * fix compilation on macOS Big Sur
  * merge PR #546 (by jelmd)
                * Add ACME redirect url
  * merge PR #551 (by jelmd)
                * support of --acme-redirect <URL>
  * merge PR #672 further acme fixes (by jemld)
                * fix acme security, redundancy, consistency
  * Disable binding request logging to avoid DoS attacks. (Breaking change!)
                * Add new --log-binding option to enable binding request logging
  * Fix stale-nonce documentation. Resolves #604
  * Version number is changed to semver 2.0
  * Merge PR #288 (by Hristo Venev)
                * pkg-config, and various cleanups in configure file
  * Add systemd notification for better systemd integration
  * Fix Issue #621 (by ycaibb)
                * Fix: Null pointer dereference on tcp_client_input_handler_rfc6062data function
  * Fix Issue #600 (by ycaibb)
                * Fix: use-after-free vulnerability on write_to_peerchannel function
  * Fix Issue #601 (by ycaibb)
                * Fix: use-after-free vulnerability on write_client_connection function
  * Little refactoring prometheus
                * Fix c++ support
                * Simplify (as agreed in Issue #666)
                        * Remove session id/allocation labels
                        * Remove per session metrics. We should later add more counters.
  * Fix CVE-2020-26262 (credits: Enable-Security)
                * Fix ipv6 ::1 loopback check
                * Not allow allocate peer address 0.0.0.0/8 and ::/128
                * For more details see the github security advisory:
                        https://github.com/coturn/coturn/security/advisories/GHSA-6g6j-r9rf-cm7p

[4.5.2 Version Downloads](http://coturn.net/turnserver/v4.5.2/)

[Main Downloads Page (with all versions)](http://coturn.net/turnserver/)

[Backup Downloads Page](http://turnserver.open-sys.org/downloads/)

[Debian package](https://packages.qa.debian.org/c/coturn.html)

[FreeBSD port](http://svnweb.freebsd.org/ports/head/net/turnserver/)

[Extra Docs ](http://turnserver.open-sys.org/downloads/extradocs/)

## Older versions ##

### 4.5.1.3: ###

* merge PR #575: (by osterik)
		* fix rpm packaging
  * merge PR #576: (by osterik)
                * tell tar to not include the metadata into release
  * merge PR #574: (by DevRockstarZ)
                * change Docker turnserver.conf to latest turnserver.conf
  * merge PR #566: (by bpcurse)
                * Remove reference to SSLv3
  * merge PR #579: (by islamoglus)
                *Ignore MD5 for BoringSSL
  * merge PR #577: (by osterik)
                *build RPM from local folder instead of git repo
  * Fix for CVE-2020-4067
                * STUN response buffer not initialized properly
                * The issue found and reported #583 by Felix Dörre all credits belongs to him.

[4.5.1.3](http://coturn.net/turnserver/v4.5.1.3/)

### 4.5.1.2: ###

  * merge regression fix: (by Mathieu Brunot)
		* Do not display empty CLI passwd alert if CLI is not enabled
  * merge PR #359: (by bradleythughes)
		* Remove turn_free_simple
		* Remove turn_malloc()
		* Remote turn_realloc()
		* Remote turn_free()
		* Remove turn_calloc()
		* Remove turn_strdup()
		* Remove SSL_NEW() and SSL_FREE()
		* Remove pointer debugging machinery
		* Remove ns_bzero(), ns_bcopy(), and ns_bcmp()
		* Remove [su]{08,16,32,64}bits type defines
  * merge PR #327 (by Alexander Terczka)
		* Strip white-spaces from config file lines end
  * merge PR #386 (by Thibaut ACKERMANN)
		* fix the webadmin ip permission add/delete sql injection
  * merge PR #390 (by Thibaut ACKERMANN)
		* fix mongo driver crash when invalid connection string is used
  * merge PR #392 enhanced fread return length check (by islamoglus)
  * merge PR #367 disconnect database gracefully (by Shu Muto)
  * merge PR #382 (by islamoglus)
		* Using SSL_get_version method for BoringSSL compatibility
		* Now we put in turn_session_info->tls_method the real TLS version.
		  Earlier we put UNKNOWN in this field if it was a TLS protocol
		  that was not defined supportel TLS protocol during compile time.
  * merge PR #276 Add systemd service example (by Liberasys)
  * merge PR #284 Add bandwidth usage reporting packet/bandwidth usage by peers
  * merge PR #381 Modifying configure to enable compile with private libraries
  * merge PR #455 Typo corrected (by chanduthedev)
  * merge PR #417 Append only to log files rather to override them (by robert-scheck)
  * merge PR #442 Updated incorrect string length check for 'ssh' (by chanduthedev)
  * merge PR #449 Fix Dockerfile for latest Debian (by rao-donut)
  * http server NULL dereference
		* Reported (by quarkslab.com, cisco/talos)
		* CVE-2020-6061 / TALOS-2020-0984
  * http server out of bound read
		* Reported (by quarkslab.com, cisco/talos)
		* CVE-2020-6061 / TALOS-2020-0984
  * merge PR #472 STUN input validation (by bobsayshilol)
  * merge PR #398 FIPS (by  byronclark)
  * merge PR #478 prod (by alepolidori)
  * merge PR #463 fix typos and grammar (by xthursdayx)
  * update travis config ubuntu/mac images
  * merge PR #466 added null check for second char (by chanduthedev)
  * merge PR #470 compiler warning fixes (by bobsayshilol)
  * merge PR #475 Update README.docker (by raksonibs)
  * merge PR #471 Fix a memory leak when an SHATYPE isn't supported (by bobsayshilol)
  * merge PR #488 Fix typos about INSTALL filenames (by raccoonback)
  * fix compiler warning comparison between signed and unsigned integer expressions
  * fix compiler warning string truncation
  * change Diffie Hellman default key length from 1066 to 2066
  * merge PR #522 drop of supplementary group IDs (by weberhofer)
  * merge PR #514 Unify spelling of Coturn (by paulmenzel)
  * merge PR#506 Rename "prod" config option to "no-software-attribute" (by dbrgn)
  * merge PR #519 fix config extension in README.docker (by ooookai)
  * merge PR #516 change sql data dir in docker-compose-all.yml (by raghumuppa)
  * merge PR #513 remove trailing spaces from READMEs (by paulmenzel)
  * merge PR #525 add flags to disable periodic use of dynamic tables (by gfodor)

[4.5.1.2](http://coturn.net/turnserver/v4.5.1.2/)

### 4.5.0.8: ###

  * Travis CI integration
  * to avoid warnings add compiler comment hint to fallthrough
  * reload-tls-certs PR#236 (by Arne Georg Gisnås Gleditsch)
  * minor fixes PR#223 (by Pavel Kretov)

	  move rm Makefile to distclean

	  list all phony targets

  * Fix typo PR#253 (by Orsiris de Jong)
  * Fix stuck IPv6 connections. (issue #217)

	  THX to damencho, vol4iniche

  * Spelling fixes.
  * Add a warning if --lt-cred-mech and --use-auth-secret both presents.
  * Revert "Add the realm parameter in the example config file (by Domenico)"
  * Fix for Verbose config file option -v cli option override
  * Add a Notice to config about realm default value is the domain name.
  * Update total allocation usage on client shutdown
  * Fix total and user quota mix-up
  * Fixed typos in postinstall.txt (by Prashanth Rajaram)
  * MySQL password encryption (by Mustafa Bingül & Erdem Duman)
  * Do not write to log before logging configuration is read from a config file (by eiver)
  * Add more explanation on use-auth-secret / REST in example config (by Krithin Sitaram)
  * Add a Warning if lines in config file ends with semicolon (by heyheyjc)
  * Fix --prod pointer bug
  * Fix auth server thread detach race (by weishuyin)
  * New Feature: Add -K --keep-address-family 

	  Be aware if you enable it, then it breaks rfc6156 section 4.2 (default IPv4 family fallback)

  * Fix dtls double free crash

[4.5.0.8](http://coturn.net/turnserver/v4.5.0.8/)

### 4.5.0.7: ###

  * Misc security and functionality improvements.

[4.5.0.7](http://coturn.net/turnserver/v4.5.0.7/)

### 4.5.0.6: ###

  * Typos in the text fixed.
  * TLS1.2 support fixed.
  * uclient minor performance tweak.
  * Issue #113 (BoringSSL compatibility) fixed (by David Benjamin).

[4.5.0.6](http://turnserver.open-sys.org/downloads/v4.5.0.6/)

### 4.5.0.5: ###

  * Typos in the text fixed.
  * LibreSSL compatibility fixed.
  * "read_timeout" option support for MySQL.
  * new NAT behavior discovery utilty. 
  * new OAuth access_token encrypt/decrypt utilty.
  * improved configurability: added parameters for allocate, channel and permission lifetimes (by Richard Garnier).

[v4.5.0.5](http://turnserver.open-sys.org/downloads/v4.5.0.5/)

### 4.5.0.4: ###

  * OpenSSL 1.1.0 support added.
  * CentOS 7 installation updated.
  * hiredis and mongo compilation configuration fixed
	(fix provided by Harsha Bellur).
  * RPM: Systemd optimization.
  * REST API option fixed.
  * Thread creation error handling fixed.
  * Issue #36 fixed.

[v4.5.0.4](http://turnserver.open-sys.org/downloads/v4.5.0.4/)

### 4.5.0.3: ###

  * SSLv3 support removed. That provides extra security and
	compatibility with OpenSSL distributions or clones
	that do not support SSLv3 (like LibreSSL 2.3.0).
	This fix is required for fresh FreeBSD and for Debian unstable.
  * Compilation and configuration cleaning.
  * Fix for non-interactive shells.
  * RPM: Fixed mongo-c-driver include path (by Sergey Safarov).
  * RPM: Fixed startup daemon as non root user (by Sergey Safarov).
  * RPM: Systemd optimized for high-volume network traffic (by Sergey Safarov).

[v4.5.0.3](http://turnserver.open-sys.org/downloads/v4.5.0.3/)

### 4.5.0.2: ###

  * DTLS segmentation fault fixed.

[v4.5.0.2](http://turnserver.open-sys.org/downloads/v4.5.0.2/)

### 4.5.0.1: ###

  * multiple realms based on oAuth (third-party authorization);
  * STUN attributes conflict resolution;
  * SIGHUP handler fixed;
  * error message logging improved;
  * mongo test db files fixed.

[v4.5.0.1](http://turnserver.open-sys.org/downloads/v4.5.0.1/)

### 4.4.5.4: ###

  * migrated to github.

[v4.4.5.4](http://turnserver.open-sys.org/downloads/v4.4.5.4/)

### 4.4.5.3: ###

  * third-party authorization STUN attributes adjusted according to the values assigned by IANA;
  * SQL injection security hole fixed; reported by Alex Inführ and Mario Heiderich from Cure53 (https://cure53.de/)
  * Amazon EC2 AMI security strengthened.

[v4.4.5.3](http://turnserver.open-sys.org/downloads/v4.4.5.3/)

### 4.4.5.2: ###

  * dual allocation adjusted according to the new TURN-bis draft;
  * options sha256, sha384, sha512 retired as non-standard;
  * third-party authorization (oAuth) updated according to the version 16 of the draft;
  * C++ compilation fixes;
  * cosmetic fixes;
  * fixed binary package for CentOS 7.1;
  * support for older SQLite versions added;
  * compilation support for older CentOS release 5.x added;
  * [Issue 11](https://code.google.com/p/coturn/issues/detail?id=11) fixed;
  * [Issue 12](https://code.google.com/p/coturn/issues/detail?id=12) fixed.

[v4.4.5.2](http://turnserver.open-sys.org/downloads/v4.4.5.2/)

### 4.4.4.2: ###

  * SCTP fixes: [Issue 10](https://code.google.com/p/coturn/issues/detail?id=10) .

[v4.4.4.2](http://turnserver.open-sys.org/downloads/v4.4.4.2/)

### 4.4.4.1: ###

  * 'native' SCTP support (experimental);
  * option of encrypted stored passwords for web admin users;
  * option of encrypted stored password for CLI user;


[v4.4.4.1](http://turnserver.open-sys.org/downloads/v4.4.4.1/)

### 4.4.2.3: ###

  * bandwidth control fixed;
  * STUN/TURN control traffic counted separately from data traffic, for the sake of the bandwidth control;
  * higher bandwidth limit capacity on 64 bits systems;
  * redis operations with the realm options fixed;


[v4.4.2.3](http://turnserver.open-sys.org/downloads/v4.4.2.3/)

### 4.4.2.2: ###

  * admin\_user SQLite table schema fixed;
  * REST API docs fixed;
  * Amazon AWS uses syslog;


[v4.4.2.2](http://turnserver.open-sys.org/downloads/v4.4.2.2/)

### 4.4.2.1: ###

  * (HMAC-)SHA-512 and -384 algorithms added;
  * TOS (DiffServer) and TTL IP header field handling fixed ([Issue 9](https://code.google.com/p/coturn/issues/detail?id=9) fixed);
  * updates according to the new third-party-auth draft (oauth);
  * peer logging added.


[v4.4.2.1](http://turnserver.open-sys.org/downloads/v4.4.2.1/)

### 4.4.1.2: ###

  * TURN-bis draft experimental implementation;
  * TRANSPORT attribute handling fixed;
  * hostname-to-IP-address resolution fix;
  * updates for Solaris (name resolution libraries);

[v4.4.1.2](http://turnserver.open-sys.org/downloads/v4.4.1.2/)

### 4.4.1.1: ###

  * HTTPS web admin server;
  * SSLv2 support cancelled (security concern fixed);
  * The server-side short-term credentials mechanism support cancelled;
  * OpenSSL 1.1.0 supported;
  * Shared secrets fixed in MongoDB: multiple secrets per realm allowed;
  * Shared secrets admin fixed in Redis;

[v4.4.1.1](http://turnserver.open-sys.org/downloads/v4.4.1.1/)

### 4.3.3.1: ###

  * multiple authentication threads;
  * database code cleaned;

[v4.3.3.1](http://turnserver.open-sys.org/downloads/v4.3.3.1/)

### 4.3.2.2: ###

  * Redis read message queue bug fixed;
  * STUN/TURN ALPN supported (when compiled with OpenSSL 1.0.2+ );
  * DTLS v1.2 supported (when compiled with OpenSSL 1.0.2+ );
  * Auto optimal ECDH parameters (when compiled with OpenSSL 1.0.2+ );
  * TLS/DTLS code cleaning.

[v4.3.2.2](http://turnserver.open-sys.org/downloads/v4.3.2.2/)

### 4.3.1.3: ###

  * Reliability fixes ([Issue 141](https://code.google.com/p/coturn/issues/detail?id=141) from rfc5766-turn-server).
  * HTTP/HTTPS echo fixed.
  * External address mapping fixes for Amazon EC2.
  * Minor docs improvements.

[v4.3.1.3](http://turnserver.open-sys.org/downloads/v4.3.1.3/)

### 4.3.1.2: ###

  * SQLite supported as the default user database.
  * Support of the flat-file user database removed (no longer supported).
  * TLS connection procedure improved in uclient test program.
  * CentOS 6.5 binary build in the downloads section upgraded to CentOS 6.6.
  * We do not provide 32-bits binary download images since this release. We do support the 32-bits platforms, but you either have to compile it yourself, or you have to use the Coturn package that is packed with your OS (if available).

[v4.3.1.2](http://turnserver.open-sys.org/downloads/v4.3.1.2/)

### 4.2.3.1: ###

  * Request re-transmission implemented in uclient test program.
  * TLS connection procedure improved in uclient test program.

[v4.2.3.1](http://turnserver.open-sys.org/downloads/v4.2.3.1/)

### 4.2.2.2: ###

  * Black- and white- IP lists are divided per realm (the DB schema for those two tables changed);
  * Updated Redis database schema.
  * Debian UFW file added ([Issue 1](https://code.google.com/p/coturn/issues/detail?id=1) fixed).
  * TCP/TLS tests extended.
  * Relay RTCP sockets ports allocation fixed.
  * List of libraries cleaned.
  * SSL renegotiation callback fixed.

[v4.2.2.2](http://turnserver.open-sys.org/downloads/v4.2.2.2/)


### 4.2.1.2: ###

  * oAuth security experimental implementation;
  * The "TLS renegotiation" DoS attack prevention implemented;
  * FQDN as relay-ip and listener-ip parameters ([issue 6](https://code.google.com/p/coturn/issues/detail?id=6)) (patch provided by Iñaki Baz Castillo);
  * redis user key operation fixed.
  * redis, mysql and psql db operations fixed.
  * SHA-256 memory leak fixed.
  * Mobility ticket retransmission fixed.
  * Move debian package from SVN to GIT.
  * Move secondary download area to coturn.net.
  * Quota allocation fixed.
  * Core dump fixed.
  * Bandwidth allocation fixed.
  * Memory code cleaning.
  * Logging fixed.

[v4.2.1.2](http://turnserver.open-sys.org/downloads/v4.2.1.2/)

### 4.1.2.1: ###

  * The origin attribute is verified in the subsequent session messages (server flag --check-origin-consistency).
  * MySQL SSL connection support.
  * Crash fixed when the DB connection string is incorrect.
  * Minor docs fixes.

[v4.1.2.1](http://turnserver.open-sys.org/downloads/v4.1.2.1/)

### 4.1.1.1: ###

  * Forceful server-side session cancellation implemented (in telnet console).

[v4.1.1.1](http://turnserver.open-sys.org/downloads/v4.1.1.1/)

### 4.1.0.2: ###

  * SSODA (double allocation) draft support added.
  * DB "driver" abstraction and MongoDB support (by Federico Pinna).
  * multiple origins supported per request.
  * "allocation mismatch" condition fixed (merged from rfc5766-turn-server).
  * STUN BINDING response fixed in the case of -X (external address) option.
  * "pu" CLI command fixed.
  * session cleaning fixed in TCP relay functionality (RFC 6062).
  * some crash conditions fixed.
  * working on compilation warnings.

[v4.1.0.2](http://turnserver.open-sys.org/downloads/v4.1.0.2/)

### 4.0.1.3: ###

  * Redis DB connection status fixed ([Issue 129](https://code.google.com/p/coturn/issues/detail?id=129)).
  * SIGHUP for logfile reset implemented (Gustavo Garcia suggestion).
  * log reset command in CLI added.
  * Some error code corrections:
    1. "Mobility forbidden" error changed, to value 405.
    1. "Wrong credentials" situation is now treated as error 441.

[v4.0.1.3](http://turnserver.open-sys.org/downloads/v4.0.1.3/)

### 4.0.1.2: ###

  * Bandwidth draft implemented.
  * Issues 126, 127 and 128 fixes merged from rfc5766-turn-server.
  * Amazon EC2 image fixed (test db).

[v4.0.1.2](http://turnserver.open-sys.org/downloads/v4.0.1.2/)

### 4.0.0.2: ###

  * Channel management callbacks for the custom libraries.
  * Separate header file for the new spaces data.

[v4.0.0.2](http://turnserver.open-sys.org/downloads/v4.0.0.2/)

### 4.0.0.0: ###

  * Multi-tenant TURN server.

[v4.0.0.0](http://turnserver.open-sys.org/downloads/v4.0.0.0/)