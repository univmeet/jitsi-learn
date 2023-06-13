---
title: Randomness
---

Prosody requires a good source of randomness to generate various tokens
that need to be unpredictable. Often this is required for adequate
security.

Currently on all platforms we use the `/dev/urandom` file provided by
the operating system for this.
