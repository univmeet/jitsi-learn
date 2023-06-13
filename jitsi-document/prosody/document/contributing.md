---
title: Contributing
---

Thanks for your interest in contributing to the project!

There are many ways to contribute, such as helping improve the
[documentation](//hg.prosody.im/site/), [reporting bugs](/bugs/),
[spreading the word](/marketing) or testing the [latest development
version](/nightly/trunk/latest/).

Since the documentation is kept in a Mercurial repository like the code,
most of the instructions for sending patches applies.

# Before you start {#before_you_start}

Before you begin working on your contribution, it is always a good idea
to let us know. We might have plans you should be aware of, or someone
might already be working on the same thing. A great way to do this is to
file an issue in our tracker.

Hang out in our chatroom if you can. We'll be able to assist with any
questions you might have, and provide advice and code reviews at your
request.

Finally, note that we can't **promise** to accept every patch, but rest
assured that we'll never reject without an explanation. Some reasons we
might reject a patch:

-   If the patch adds a feature that few people will use, and/or should
    be in a module instead. This is because we aim to keep Prosody
    lightweight out of the box, modules are the best way to extend
    Prosody. We can advise you on how to turn your code into a module.
-   If it contains code that is longer or more complex than it needs to
    be. We strive to keep our code clean and concise. If we feel that
    there is a neater way of implementing your feature or fix, we'll let
    you know.
-   If the code in the patch does not conform to our [coding
    style](https://hg.prosody.im/trunk/file/tip/doc/coding_style.md).
    Simple to fix... always try and make your code follow the same
    formatting as the rest of Prosody's code.

If you submit code we reserve the right to criticise it, and let you
know so that you can make it the best that it can be. Please don't take
this process personally! We judge code, but we don't judge people
[:sunglasses:]{.icon}

# Creating patches {#creating_patches}

We are pretty relaxed about how we receive contributions, and we'll let
you know if what you send us is problematic. Sending us the entire
changed file is perfectly fine. However the preferred way to submit
contributions is:

1.  Clone the source repository using Mercurial:
    `hg clone https://hg.prosody.im/trunk` (tip: if you are submitting a
    bugfix, replace 'trunk' with the version you are fixing, such as
    '0.11').
2.  Make your changes to the files in the repository you just cloned.
3.  Ensure `make test` passes, and run changed files through
    [luacheck](https://github.com/mpeterv/luacheck) to catch any simple
    mistakes.
4.  Run `hg commit` to commit your changes to your local repository (if
    this is the first time you have used Mercurial, you may want to set
    your public name in
    [.hgrc](http://hgbook.red-bean.com/read/a-tour-of-mercurial-the-basics.html#sec:tour-basic:username)).

Exporting single commits:

1.  Run `hg export tip > short-patch-description.patch`

Exporting multiple commits:

1.  Run `hg bundle short-patch-description.hg`

## Commits

### Small commits {#small_commits}

Try to keep individual commits small, and avoid doing multiple things in
one commit (like fixing two different bugs, or implementing two
different features). Make multiple commits if you have to.

### Commit messages {#commit_messages}

By convention, our commit messages are often a single line of text, and
commit messages begin with the name of the plugin(s) or core component
they are modifying. Sometimes with a few lines more to explain why the
change was needed. For example:

``` {.code}
mod_ping: Implement timeout feature (fixes #NNN)

Optional longer explanation of why a timeout was needed.
```

If you find yourself typing the word "and" into a commit message,
consider splitting the commit.

If you really need to write a longer description, prefer to explain why
the change is needed, rather than describing what is changed (this
should be obvious from the change itself). Keep in mind that the 'why'
of the change is something different from the 'why' of the code itself.
The later is better written in comments along with the code.

-   [Blog post about writing good commit
    messages](https://chris.beams.io/posts/git-commit/)

# Sending patches {#sending_patches}

Email the patch or bundle file to the [prosody-dev](/discuss) mailing
list. If the patch fixes a bug, please include the issue number.
