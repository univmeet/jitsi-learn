---
title: DNSSEC
---

Starting with Prosody [0.12.0](/doc/release/0.12.0),
[libunbound](/doc/depends#libunbound) can be used to enable DNSSEC
support.

Just like certificate validation needs root certificates, DNSSEC
validation requires knowledge of the root key. Securely getting a hold
of this key is a Hard Problem, so your best bet is to hope your
distribution already includes it. You trust your distro, right?

If your distro packages the key, like [Debian
does](https://tracker.debian.org/pkg/dns-root-data), you can install
that package and configure the location of the root zone trust anchor
like so:

``` lua
unbound = {
    -- on Debian this file is included in the package 'dns-root-data'
    trustfile = "/usr/share/dns/root.ds";
}
```
