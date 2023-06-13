---
title: 'How many users?'
---

We often get asked how many users Prosody can handle. Or we get asked
for benchmarks. We are reluctant to answer either of these questions (as
any honest project should be). Here is where we try to explain why...

# Why won\'t you just tell me? {#why_won_t_you_just_tell_me}

There is no correct answer to the \"How many users?\" question. It
depends on many things. Here are some (not all) of the possible things
that could affect how many users Prosody can handle:

-   Prosody configuration (including enabled modules, etc.)
-   System configuration (available RAM, operating system and its
    configuration, etc.)
-   The behaviour of your users (do they have rosters? what kind of
    traffic are they generating?)

For example, Prosody can handle many more users if you disable all
modules, all the users have empty rosters, don\'t generate any traffic,
and don\'t use encryption or compression. Obviously this scenario is not
very realistic, as an XMPP server configured this way would not be very
secure or very useful. Yet some other server projects have published
benchmarks demonstrating their impressive scalability under just these
circumstances.

We\'d like to provide a realistic and honest figure, but there are so
many different configurations, and every setup is different. It\'s
impossible to just choose one number.

# Why won\'t you publish benchmarks? {#why_won_t_you_publish_benchmarks}

For similar reasons. Because every setup is different, benchmarks from
two different setups cannot be compared. Even different benchmark tools
on the same system will typically produce massively different results.
Running benchmarks is a tricky operation. To be done correctly you have
to be very careful to run them on a clean system, preferably not in a
virtual environment or anywhere that CPU could be \"stolen\". You have
to ensure your CPU isn\'t doing automatic frequency scaling, and so on.

This all makes *publishing* benchmarks next to useless, and harmful in
fact (because people will naturally want to compare them to other
projects). This would make Prosody incorrectly look either better or
worse than other projects.

## So what now? {#so_what_now}

I encourage you to do your own tests.
