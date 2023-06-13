---
title: 'strophe.js'
---

# Setting things up to get strophe working {#setting_things_up_to_get_strophe_working}

1\. Install Prosody

2\. Open Prosody\'s config file, and enable `mod_bosh` (search for
`"bosh"` and uncomment it by removing `–` from before it)

3\. Create an account on Prosody, as described here: [Creating
accounts](/doc/creating_accounts)

4\. Edit web server config as described here: [Setting up BOSH: Proxying
requests](/doc/setting_up_bosh#proxying_requests)

5\. Download [strophe.js](https://strophe.im/) and extract it somewhere on
your web server

6\. The strophe examples by default connect to `/xmpp-httpbind`. Edit the
`.js` files in the examples directory to change from `/xmpp-httpbind` to
`/http-bind` in the first lines.

The crossdomain example requires this: [Setting up BOSH: Cross-domain
requests (CORS)](/doc/setting_up_bosh#cross-domain_requests_cors)

The prebind example requires setup described at the top in the
`prebind.js` file

And that\'s it. Strophe examples should now be working without issues.

Note: Prosody by default disallows plain text passwords over
non-encrypted connections. If you are using a non-default authentication
backend in Prosody, you might run into this. You can use the
[consider\_bosh\_secure](/doc/modules/mod_bosh#configuration) or
[allow\_unencrypted\_plain\_auth](/doc/modules/mod_saslauth#configuration)
config options, though ideally you should [set up
encryption](/doc/certificates) (SSL BOSH port defaults to 5281, while
non-SSL is 5280).
