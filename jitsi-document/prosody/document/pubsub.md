---
title: Pubsub
---

Pubsub (from \'publish-subscribe\') is an XMPP extension
([XEP-0060](https://xmpp.org/extensions/xep-0060.html) that allows pieces
of data to be published to \'nodes\', and then automatically broadcast
to any subscribers to those nodes. This is similar to technologies like
RSS, except that instead of subscribers continuously checking for new
data it is pushed to them in realtime.

Prosody comes with an internal pubsub service (mod\_pubsub) that can be
set up very simply:

``` {.code .lua}
    Component "pubsub.example.com" "pubsub"
```

For a full list of options that can be used here, see
[mod\_pubsub](/doc/modules/mod_pubsub).

# Features

XEP-0060 is a very large document, and pubsub can grow to be a complex
task. Different applications require very different feature sets.
Prosody currently implements the following features (as of
[0.11.0](/doc/release/0.11.0)):

-   [Create node](https://xmpp.org/extensions/xep-0060.html#owner-create)
-   [Delete node](https://xmpp.org/extensions/xep-0060.html#owner-delete)
-   [Subscribe](https://xmpp.org/extensions/xep-0060.html#subscriber-subscribe)
-   [Unsubscribe](https://xmpp.org/extensions/xep-0060.html#subscriber-unsubscribe)
-   [Get
    subscriptions](https://xmpp.org/extensions/xep-0060.html#entity-subscriptions)
-   [Publish](https://xmpp.org/extensions/xep-0060.html#publisher-publish)
-   [Retract](https://xmpp.org/extensions/xep-0060.html#publisher-retract)
-   [Get
    items](https://xmpp.org/extensions/xep-0060.html#subscriber-retrieve)
-   [Purge](https://xmpp.org/extensions/xep-0060.html#owner-purge)
-   [Service discovery](https://xmpp.org/extensions/xep-0060.html#entity)
-   [Discover Node
    Metadata](https://xmpp.org/extensions/xep-0060.html#entity-metadata)
-   [Configure a
    Node](https://xmpp.org/extensions/xep-0060.html#owner-configure)
-   [Create and Configure a
    Node](https://xmpp.org/extensions/xep-0060.html#owner-create-and-configure)
-   [Subscribe and
    Configure](https://xmpp.org/extensions/xep-0060.html#subscriber-configure-subandconfig)
-   [Retrieve
    Subscriptions](https://xmpp.org/extensions/xep-0060.html#entity-subscriptions)
-   [Manage
    Subscriptions](https://xmpp.org/extensions/xep-0060.html#owner-subscriptions)
-   [Manage
    Affiliations](https://xmpp.org/extensions/xep-0060.html#owner-affiliations)
-   [Configure Subscription
    Options](https://xmpp.org/extensions/xep-0060.html#subscriber-configure)
-   Persistence of node configuration and data
-   [Including a Message
    Body](https://xmpp.org/extensions/xep-0060.html#impl-body) *via
    internal API*
-   [Node Access
    Models](https://xmpp.org/extensions/xep-0060.html#accessmodels)
    `open`, `whitelist` and `presence`
-   [Publishing
    Options](https://xmpp.org/extensions/xep-0060.html#publisher-publish-options)

Unreleased features as of July 2021 include:

-   Using "max" as limit in certain fields.
