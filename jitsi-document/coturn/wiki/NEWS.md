# This WIKI is outdated and will be removed soon!! Please check the source for more recent documentation: https://github.com/coturn/coturn #

## 07/20/2015 ##
### Version 4.4.5.4 ###
  * Migrated to Guthub.

## 06/28/2015 ##
### Version 4.4.5.3 ###
  * third-party STUN attributes at last assigned official IANA values and moved from experimental to supported;
  * a big SQL injection security hole fixed.

## 06/06/2015 ##
### Version 4.4.5.2 ###

  * support for some non-standard features dropped (long-term credentials with sha256, sha384 and sha512);
  * oAuth support re-engineered significantly.

## 03/25/2015 ##
### Version 4.4.4.1 ###

SCTP supported.

Encrypted form of admin passwords supported.

## 02/01/2015 ##
### Version 4.4.1.2 ###

TURN-bis draft impleented (with new dual allocation specs)

## 01/24/2015 ##
### Version 4.4.1.1 ###

HTTPS Web admin interface to the TURN server.
SSLv2 is no longer supported.
Short-term credentials are no longer supported in the TURN server.

## 12/24/2014 ##
### Version 4.3.3.1 ###

Authentication optimization: multiple authentication threads are utilized.

## 12/14/2014 ##
### Version 4.3.2.2 ###

STUN/TURN ALPN supported (whith OpenSSL 1.0.2+):http://tools.ietf.org/html/draft-ietf-tram-alpn-08

## 11/22/2014 ##
### Version 4.3.1.1 ###

Flat files are not supported as the user database.
SQLite support added, as the default DB option.

## 10/05/2014 ##
### Version 4.2.1.2 ###

oAuth authorization implemented

## 07/22/2014 ##
### Version 4.1.0.2 ###

SSODA draft support and MongoDB support.

## 05/04/2014 ##
### Version 4.0.0.0 ###

First downloads issued

## 04/20/2014 ##
### Version 3.3.0.0 ###

Project copied from rfc5766-turn-server trunk.