---
title: 'Encryption, certificates, trust'
---

If you\'re reading this page, you probably care something about
security. So do we. Unfortunately there are also many people who care
about security but do not understand entirely how to best protect
themselves. This article describes some common pitfalls we see people
make when applying security online.

A very very common misconception is that if your connection is encrypted
you are safe from eavesdroppers. Unfortunately this is not always the
case. Guess what? Eavesdroppers know how to use encryption too! Consider
this scenario:

``` {.code}
  You <-(SSL/TLS)-> Eavesdropper <-(SSL/TLS)-> Server
```

Ok, so your connection is encrypted. But you\'re connected to the
eavesdropper! This is clearly not a secure connection, though it is an
encrypted connection.

# The solution {#the_solution}

Thankfully SSL/TLS support a method to securely transmit an identity
across the connection. The identity transmitted by the server cannot be
re-transmitted by the eavesdropper. As long as you know for certain what
the server\'s identity is, you can ensure you are connected to the right
entity.

But the identity isn\'t a name (it couldn\'t be anyway - multiple people
can have the same name for example, so it wouldn\'t be secure). Instead
the identity is a unique private key file and a certificate file for
that key. So the whole of internet security is based on these 2 files...

The certificate file is public, and you can calculate (it\'s
complicated) that the entity you are connected to has the right private
key for it. This is the easy part.

The hard part is ensuring that the certificate you have is the right
one. You could get a copy of the right certificate before you connect.
Perhaps you meet up with the server owner (or is he the server owner\'s
evil twin brother?!) who personally gives you the certificate file. This
is the most \"secure\" way. Assuming the server\'s private key is never
stolen by the eavesdropper, you can be sure you\'re connected to the
server of the same person who gave you that certificate file.

Unfortunately if we had to meet with everyone whose server we accessed,
things would get a bit awkward. Not to mention that we don\'t know them
personally, so it would be hard to establish that we are meeting with
the right people.

The internet solved this by inventing certificate authorities (CAs). The
CAs are paid by people who want certificates, and the CA verifies their
identity for you, before they issue the certificate. Then when you see a
new certificate you can check two things: 1) you trust the CA who issued
it 2) The identity they put in the certificate (the one they verified)
is the one you want to connect to. Typically the identity you check is a
domain name , and perhaps a personal name, or an organisation name.

You can probably see how this situation isn\'t perfect. Firstly you are
vesting all your trust in CAs you personally don\'t know either. Worse,
these CAs have an incentive (money) to issue lots of certificates to
people. They do want to make sure people continue trusting them though,
or people might not pay them for their certificates anymore.

Your system very likely came with a large selection of \"pre-trusted\"
CAs. \"Wait... what?\". Yes... you have never chosen which CAs you
trust, who you trust was chosen for you by your operating system,
browser or XMPP client vendor. So now we have yet another organisation
to trust. We\'re rapidly growing in the number of places this system
could be attacked.

# Security in practice {#security_in_practice}

As you can probably see by now, there are different levels of security.
Now it\'s not just whether you trust a server\'s certificate, but \*how
much\* you trust a server\'s certificate.

Perhaps you\'re willing to close your eyes and pretend the first time
you connect that you are sure there are no eavesdroppers. Your client
will then warn you if the certificate changes, then perhaps you have
eavesdroppers. Or perhaps the admin just installed a new certificate.
Should you close your eyes and click \"Continue\" again this time? Check
the server\'s website, if they\'re good they posted about the change
there. Or perhaps the eavesdropper intercepted your connection and
showed you a fake announcement. :)

Alternatively perhaps you\'re willing to trust the CA that issued the
server\'s certificate. Not that most clients display that info... they
just check against the system\'s certificate store.

# Summary

Security on the internet is *hard*. Who is going to spend time
researching every certificate they accept? Not me. Just continue as you
wish, but next time you think about security think especially about
whether your connection is \'encrypted\' or \'secure\'.

Hopefully this article taught you at least something you didn\'t know.
If it didn\'t then perhaps you can [offer ideas](/discuss) on how to
improve this article. Thanks for reading!
