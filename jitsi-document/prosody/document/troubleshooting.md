---
title: Troubleshooting Prosody
---

As hard as we try to make Prosody painless to get running, occasionally
things don\'t go to plan. If you can\'t find the solution to your issue
here then [contact us](/discuss) and we\'ll try to help sort it out.

First, try running `prosodyctl check`, which may be able to diagnose
some common issues.

Second, find where Prosody logs go. E.g. `/var/log/prosody/prosody.log` is a
common location. If you have a separate `prosody.err` then check there first
for errors.

# I can\'t contact people on other servers (eg. jabber.org, gmail.com) {#i_can_t_contact_people_on_other_servers_eg_jabberorg_gmailcom}

Prosody requires no extra configuration to communicate with other
servers. Usually the problem is due to network or DNS issues.

-   Check that Prosody isn\'t running behind a firewall, or a NAT
    router. These block incoming connections to Prosody by default, and
    will cause the attempts by other servers to verify your server to
    fail. Configure your firewall or router to allow or forward incoming
    connections on port 5269 to Prosody.

<!-- -->

-   Check that you have the correct domains pointing at the machine
    running Prosody, and that these domains are listed in the config
    file (like VirtualHost \"example.com\"). If you can\'t run Prosody
    on the domain you want, then look into setting \_xmpp-client and
    \_xmpp-server [DNS SRV records](/doc/dns), which will let you
    redirect Jabber traffic to another domain.

Further debugging:

If you have access to a command line, run: telnet yourdomain.com 5269

If telnet just appears to hang, then it is likely your DNS is not
configured properly, or more likely port 5269 is firewalled. If telnet
prints \"connection refused\" then it indicates Prosody is not running,
or you are connecting to a machine without Prosody (yes, it happens...).
