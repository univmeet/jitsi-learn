---
title: Frequently Asked Questions
---

# What is Jabber? What is a Jabber server?? What can Prosody do for me??? {#what_is_jabber_what_is_a_jabber_server_what_can_prosody_do_for_me}

[Jabber](https://jabber.org/) is an open instant-messaging network. The
network is made up of many servers relaying chat messages on behalf of
talkative users. Prosody can be installed on your server to let you take
part in this network. Simple [:smile:]{.icon}

You can set up your own Jabber service on your server (dedicated, VPS,
etc.) or just on a box on your local network, to serve your home or
office. Either way you can use it to converse with anyone else on an XMPP-compatible
service.

Prosody is such server software. It will allow you to connect using one of the
many available Jabber clients, and begin chatting with your Jabber-enabled friends.

# Why another Jabber server? Don\'t we have enough already? {#why_another_jabber_server_don_t_we_have_enough_already}

We do have quite a few choices of server software, yes, but not so
many as you might think. Many are not actively developed. There are
roughly 3 servers actually considered for use by most people, and each
of these has shortcomings. We believe there is room for improvement, and
some innovation along the way. Prosody has more in its sights than just
being another plain Jabber server.

# Why in LUA\... er\... Lua? {#why_in_lua_er_lua}

Ahem, yes, that\'s **Lua**. If you have heard of [Lua](https://lua.org/),
you likely know it is used frequently in games, as an embedded scripting
language. The reason Lua has been so popular in this area is due to its
size, speed, and simplicity. Obviously games need to have high
performance. Well so do servers.

Of course one could argue that performance would have been even greater
if we had written Prosody entirely in C. This is most probably true,
however the project would probably still be fairly incomplete right now,
had we done this [:smile:]{.icon} Sticking for the most part to Lua
keeps things simple, and development fast.

# What exactly makes Prosody different then? {#what_exactly_makes_prosody_different_then}

Well, Prosody aims to be simple. Really simple. Whether you are setting
up your first Jabber server, or whether you are looking to write
server-side code that speaks the [Jabber/XMPP
protocol](https://xmpp.org/), we want to make it easy for you.

Apart from these goals, we also strive to keep lightweight, implementing
much functionality in optional modules, which may be disabled if not
needed.

# I love it! How can I help? {#i_love_it_how_can_i_help}

Join our [chatroom and mailing list](/discuss). Say hi! There is plenty
of work to go around. Not only do we need developers, but also
packagers, documentation editors, and most important of all, testers!

So whether you\'re interested in picking up tools for development, or
helping us in some other way, do ask. We don\'t bite [::]{.icon}

# You didn\'t answer my question! {#you_didn_t_answer_my_question}

Do feel free to [contact us](/discuss) if you have any questions you
need answered.

# How many users?

See the [longer page about this subject](/doc/how_many_users).
