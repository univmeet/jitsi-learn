# This WIKI is outdated and will be removed soon!! Please check the source for more recent documentation: https://github.com/coturn/coturn #

## turnutils\_stunclient is a basic STUN client ##
It sends a "new" STUN RFC 5389 request (over UDP) and shows the reply information.

The turnutils_stunclient program checks the results of the first request,
and if it finds that the STUN server supports RFC 5780
(the binding response reveals that) then the turnutils_stunclient makes a couple more
requests with different parameters, to demonstrate the NAT discovery capabilities.

This utility does not support the "old" "classic" STUN protocol (RFC 3489).

### Usage: ###
```
$ turnutils_stunclient [options] <STUN-Server-IP-address>
```
### Options with required values: ###
```
  -p  STUN server port (Default: 3478).
  -L  Local address to use (optional).
  -f  Force RFC 5780 processing.
```
