---
title: 'XMPP Extensions (XEPs) supported in Prosody'
toc: False
---

This is a list of relevant XEPs and their implementation status in
Prosody. I can\'t guarantee the list is 100% correct, I struggle to
memorize so many numbers. If you are unsure, the best thing is to [ask
us](/discuss) [:smile:]{.icon}

If there is a particular feature you are looking for which isn\'t here,
do [let us know](/discuss) - we decide which features to work on
primarily based on requests for those features. If you would like to
sponsor development of a feature in Prosody then please [contact
us](/discuss#contact_us)!

There is also an automatically generated page of [Community Modules by
XEP](https://modules.prosody.im/xeps.html) which will likely be more up
to date than this one.

::: {.alert .alert-warning}
[:warning:]{.icon} XEPs describe XMPP **protocol** extensions, they do
**not** describe server features. Many Prosody features do not have XEP
numbers, because they do not need to make any changes to the XMPP
protocol. Furthermore, many features (such as voice/video, and
end-to-end encryption for example) depend only on the client software in
use, and will work with Prosody with no change.
:::

  XEP                                                                                                                 Status
  ------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------
  [XEP-0004: Data Forms](https://xmpp.org/extensions/xep-0004.html)                                                   Supported
  [XEP-0008: IQ-Based Avatars](https://xmpp.org/extensions/xep-0008.html)                                             Applicable to clients only, so will work with Prosody
  [XEP-0009: Jabber-RPC](https://xmpp.org/extensions/xep-0009.html)                                                   Supported from 0.4.0, removed in 0.7.0
  [XEP-0012: Last Activity](https://xmpp.org/extensions/xep-0012.html)                                                Supported
  [XEP-0013: Flexible Offline Message Retrieval](https://xmpp.org/extensions/xep-0013.html)                           Not yet supported
  [XEP-0016: Privacy Lists](https://xmpp.org/extensions/xep-0016.html)                                                ~~[Supported](/doc/modules/mod_privacy)~~ Deprecated in 0.10
  [XEP-0020: Feature Negotiation](https://xmpp.org/extensions/xep-0020.html)                                          Applicable to clients only, so will work with Prosody
  [XEP-0022: Message Events](https://xmpp.org/extensions/xep-0022.html)                                               Applicable to clients only, so will work with Prosody
  [XEP-0025: Jabber HTTP Polling](https://xmpp.org/extensions/xep-0025.html)                                          Not supported, obsoleted by XEP-0124: BOSH
  [XEP-0030: Service Discovery](https://xmpp.org/extensions/xep-0030.html)                                            [Supported](/doc/modules/mod_disco)
  [XEP-0033: Extended Stanza Addressing](https://xmpp.org/extensions/xep-0033.html)                                   [Community module available](https://modules.prosody.im/mod_addressing.html)
  [XEP-0045: Multi-User Chat](https://xmpp.org/extensions/xep-0045.html)                                              [Supported since 0.3](/doc/modules/mod_muc)
  [XEP-0047: In-Band Bytestreams (IBB)](https://xmpp.org/extensions/xep-0047.html)                                    Applicable to clients only, so will work with Prosody
  [XEP-0048: Bookmarks](https://xmpp.org/extensions/xep-0048.html)                                                    Applicable to clients only, so will work with Prosody
  [XEP-0049: Private XML Storage](https://xmpp.org/extensions/xep-0049.html)                                          [Supported since 0.1](/doc/modules/mod_private)
  [XEP-0050: Ad-Hoc Commands](https://xmpp.org/extensions/xep-0050.html)                                              Supported since 0.8
  [XEP-0054: vcard-temp](https://xmpp.org/extensions/xep-0054.html)                                                   [Supported since 0.1](/doc/modules/mod_vcard)
  [XEP-0055: Jabber Search](https://xmpp.org/extensions/xep-0055.html)                                                Not yet supported
  [XEP-0059: Result Set Management](https://xmpp.org/extensions/xep-0059.html)                                        Not supported
  [XEP-0060: Publish-Subscribe](https://xmpp.org/extensions/xep-0060.html)                                            [Supported since 0.9](/doc/pubsub)
  [XEP-0065: SOCKS5 Bytestreams](https://xmpp.org/extensions/xep-0065.html)                                           [Supported since 0.7](/doc/modules/mod_proxy65)
  [XEP-0066: Out of Band Data](https://xmpp.org/extensions/xep-0066.html)                                             Applicable to clients only, so will work with Prosody
  [XEP-0068: Field Standardization for Data Forms](https://xmpp.org/extensions/xep-0068.html)                         Supported
  [XEP-0070: Verifying HTTP Requests via XMPP](https://xmpp.org/extensions/xep-0070.html)                             Not supported
  [XEP-0071: XHTML-IM](https://xmpp.org/extensions/xep-0071.html)                                                     Applicable to clients only, so will work with Prosody
  [XEP-0072: SOAP Over XMPP](https://xmpp.org/extensions/xep-0072.html)                                               Applicable to clients only, so will work with Prosody
  [XEP-0077: In-Band Registration](https://xmpp.org/extensions/xep-0077.html)                                         [Supported since 0.1](/doc/modules/mod_register)
  [XEP-0078: Non-SASL Authentication](https://xmpp.org/extensions/xep-0078.html)                                      [Supported since 0.1](/doc/modules/mod_legacyauth)
  [XEP-0079: Advanced Message Processing](https://xmpp.org/extensions/xep-0079.html)                                  Not supported
  [XEP-0080: User Location](https://xmpp.org/extensions/xep-0080.html)                                                Supported
  [XEP-0082: XMPP Date and Time Profiles](https://xmpp.org/extensions/xep-0082.html)                                  Supported
  [XEP-0083: Nested Roster Groups](https://xmpp.org/extensions/xep-0083.html)                                         Applicable to clients only, so will work with Prosody
  [XEP-0084: User Avatar](https://xmpp.org/extensions/xep-0084.html)                                                  Supported
  [XEP-0085: Chat State Notifications](https://xmpp.org/extensions/xep-0085.html)                                     Applicable to clients only, so will work with Prosody
  [XEP-0090: Entity Time](https://xmpp.org/extensions/xep-0090.html)                                                  [Supported](/doc/modules/mod_time)
  [XEP-0091: Delayed Delivery](https://xmpp.org/extensions/xep-0091.html)                                             Supported
  [XEP-0092: Software Version](https://xmpp.org/extensions/xep-0092.html)                                             Supported
  [XEP-0096: File Transfer](https://xmpp.org/extensions/xep-0096.html)                                                Applicable to clients only, so will work with Prosody
  [XEP-0100: Gateway Interaction](https://xmpp.org/extensions/xep-0100.html)                                          Applicable to clients only, so will work with Prosody
  [XEP-0106: JID Escaping](https://xmpp.org/extensions/xep-0106.html)                                                 Applicable to clients only, so will work with Prosody
  [XEP-0107: User Mood](https://xmpp.org/extensions/xep-0107.html)                                                    Supported
  [XEP-0108: User Activity](https://xmpp.org/extensions/xep-0108.html)                                                Supported
  [XEP-0114: Jabber Component Protocol](https://xmpp.org/extensions/xep-0114.html)                                    [Supported since 0.4](/doc/components)
  [XEP-0115: Entity Capabilities](https://xmpp.org/extensions/xep-0115.html)                                          Applicable to clients only, so will work with Prosody
  [XEP-0118: User Tune](https://xmpp.org/extensions/xep-0118.html)                                                    Supported
  [XEP-0122: Data Forms Validation](https://xmpp.org/extensions/xep-0122.html)                                        [Supported since 0.11](/doc/developers/util/dataforms)
  [XEP-0124: Bidirectional-streams Over Synchronous HTTP (BOSH)](https://xmpp.org/extensions/xep-0124.html)           [Supported since 0.2](/doc/bosh)
  [XEP-0126: Invisibility](https://xmpp.org/extensions/xep-0126.html)                                                 Supported until 0.10, removed along with XEP-0016 in 0.10
  [XEP-0127: Common Alerting Protocol (CAP) Over XMPP](https://xmpp.org/extensions/xep-0127.html)                     Applicable to clients only, so will work with Prosody
  [XEP-0128: Service Discovery Extensions](https://xmpp.org/extensions/xep-0128.html)                                 Supported
  [XEP-0130: Waiting Lists](https://xmpp.org/extensions/xep-0130.html)                                                Not supported
  [XEP-0131: Stanza Headers and Internet Metadata (SHIM)](https://xmpp.org/extensions/xep-0131.html)                  Applicable to clients only, so will work with Prosody
  [XEP-0133: Service Administration](https://xmpp.org/extensions/xep-0133.html)                                       [Supported since 0.8](/doc/modules/mod_admin_adhoc)
  [XEP-0138: Stream Compression](https://xmpp.org/extensions/xep-0138.html)                                           ~~[Supported](/doc/modules/mod_compression)~~ Deprecated in 0.10
  [XEP-0141: Data Forms Layout](https://xmpp.org/extensions/xep-0141.html)                                            Applicable to clients only, so will work with Prosody
  [XEP-0144: Roster Item Exchange](https://xmpp.org/extensions/xep-0144.html)                                         Applicable to clients only, so will work with Prosody
  [XEP-0145: Annotations](https://xmpp.org/extensions/xep-0145.html)                                                  Applicable to clients only, so will work with Prosody
  [XEP-0146: Remote Controlling Clients](https://xmpp.org/extensions/xep-0146.html)                                   Applicable to clients only, so will work with Prosody
  [XEP-0152: Reachability Addresses](https://xmpp.org/extensions/xep-0152.html)                                       Applicable to clients only, so will work with Prosody
  [XEP-0153: vCard-Based Avatars](https://xmpp.org/extensions/xep-0153.html)                                          Supported
  [XEP-0154: User Profile](https://xmpp.org/extensions/xep-0154.html)                                                 Not yet supported
  [XEP-0155: Stanza Session Negotiation](https://xmpp.org/extensions/xep-0155.html)                                   Applicable to clients only, so will work with Prosody
  [XEP-0156: Discovering Alternative XMPP Connection Methods](https://xmpp.org/extensions/xep-0156.html)              Uses DNS records, so will work with Prosody
  [XEP-0157: Contact Addresses for XMPP Services](https://xmpp.org/extensions/xep-0157.html)                          [Supported](/doc/modules/mod_server_contact_info)
  [XEP-0158: CAPTCHA Forms](https://xmpp.org/extensions/xep-0158.html)                                                Not yet supported
  [XEP-0159: Spim-Blocking Control](https://xmpp.org/extensions/xep-0159.html)                                        Not yet supported
  [XEP-0160: Best Practices for Handling Offline Messages](https://xmpp.org/extensions/xep-0160.html)                 Supported
  [XEP-0161: Abuse Reporting](https://xmpp.org/extensions/xep-0161.html)                                              Not yet supported
  [XEP-0163: Personal Eventing Protocol](https://xmpp.org/extensions/xep-0163.html)                                   [Supported since 0.5](/doc/modules/mod_pep)
  [XEP-0166: Jingle](https://xmpp.org/extensions/xep-0166.html)                                                       [Applicable to clients only, so will work with Prosody](/doc/jingle)
  [XEP-0167: Jingle RTP Sessions](https://xmpp.org/extensions/xep-0167.html)                                          [Applicable to clients only, so will work with Prosody](/doc/jingle)
  [XEP-0168: Resource Application Priority](https://xmpp.org/extensions/xep-0168.html)                                Not supported
  [XEP-0170: Recommended Order of Stream Feature Negotiation](https://xmpp.org/extensions/xep-0170.html)              Supported
  [XEP-0171: Language Translation](https://xmpp.org/extensions/xep-0171.html)                                         Applicable to clients only, so will work with Prosody
  [XEP-0172: User Nickname](https://xmpp.org/extensions/xep-0172.html)                                                Applicable to clients only, so will work with Prosody
  [XEP-0174: Serverless Messaging](https://xmpp.org/extensions/xep-0174.html)                                         Applicable to clients only, so will work with Prosody
  [XEP-0175: Best Practices for Use of SASL ANONYMOUS](https://xmpp.org/extensions/xep-0175.html)                     [Supported](/doc/anonymous_logins)
  [XEP-0176: Jingle ICE-UDP Transport Method](https://xmpp.org/extensions/xep-0176.html)                              [Applicable to clients only, so will work with Prosody](/doc/jingle)
  [XEP-0177: Jingle Raw UDP Transport Method](https://xmpp.org/extensions/xep-0177.html)                              [Applicable to clients only, so will work with Prosody](/doc/jingle)
  [XEP-0178: Best Practices for Use of SASL EXTERNAL with Certificates](https://xmpp.org/extensions/xep-0178.html)    [Server-to-server recommendations followed](/doc/s2s)
  [XEP-0179: Jingle IAX Transport Method](https://xmpp.org/extensions/xep-0179.html)                                  [Applicable to clients only, so will work with Prosody](/doc/jingle)
  [XEP-0180: Jingle Video via RTP](https://xmpp.org/extensions/xep-0180.html)                                         [Applicable to clients only, so will work with Prosody](/doc/jingle)
  [XEP-0181: Jingle DTMF](https://xmpp.org/extensions/xep-0181.html)                                                  [Applicable to clients only, so will work with Prosody](/doc/jingle)
  [XEP-0182: Application-Specific Error Conditions](https://xmpp.org/extensions/xep-0182.html)                        Supported
  [XEP-0184: Message Receipts](https://xmpp.org/extensions/xep-0184.html)                                             Applicable to clients only, so will work with Prosody
  [XEP-0185: Dialback Key Generation and Validation](https://xmpp.org/extensions/xep-0185.html)                       Supported
  [XEP-0186: Invisible Command](https://xmpp.org/extensions/xep-0186.html)                                            Not yet supported
  [XEP-0189: Public Key Publishing](https://xmpp.org/extensions/xep-0189.html)                                        Supported
  [XEP-0190: Best Practice for Closing Idle Streams](https://xmpp.org/extensions/xep-0190.html)                       Not yet supported
  [XEP-0191: Simple Communications Blocking](https://xmpp.org/extensions/xep-0191.html)                               [Supported](/doc/modules/mod_blocklist)
  [XEP-0194: User Chatting](https://xmpp.org/extensions/xep-0194.html)                                                Supported
  [XEP-0195: User Browsing](https://xmpp.org/extensions/xep-0195.html)                                                Supported
  [XEP-0196: User Gaming](https://xmpp.org/extensions/xep-0196.html)                                                  Supported
  [XEP-0197: User Viewing](https://xmpp.org/extensions/xep-0197.html)                                                 Supported
  [XEP-0198: Stream Management](https://xmpp.org/extensions/xep-0198.html)                                            [Community module available](https://modules.prosody.im/mod_smacks.html)
  [XEP-0199: XMPP Ping](https://xmpp.org/extensions/xep-0199.html)                                                    [Supported](/doc/modules/mod_ping)
  [XEP-0201: Best Practices for Message Threads](https://xmpp.org/extensions/xep-0201.html)                           Applicable to clients only, so will work with Prosody
  [XEP-0202: Entity Time](https://xmpp.org/extensions/xep-0202.html)                                                  [Supported](/doc/modules/mod_time)
  [XEP-0203: Delayed Delivery](https://xmpp.org/extensions/xep-0203.html)                                             Supported
  [XEP-0205: Best Practices to Discourage Denial of Service Attacks](https://xmpp.org/extensions/xep-0205.html)       Not yet supported
  [XEP-0206: XMPP Over BOSH](https://xmpp.org/extensions/xep-0206.html)                                               [Supported since 0.2](/doc/bosh)
  [XEP-0209: Metacontacts](https://xmpp.org/extensions/xep-0209.html)                                                 Applicable to clients only, so will work with Prosody
  [XEP-0214: File Repository and Sharing](https://xmpp.org/extensions/xep-0214.html)                                  Not supported
  [XEP-0215: External Service Discovery](https://xmpp.org/extensions/xep-0215.html)                                   [Supported](/doc/modules/mod_external_services)
  [XEP-0216: XMPP Intermediate IM Server 2008](https://xmpp.org/extensions/xep-0216.html)                             Supported
  [XEP-0220: Server Dialback](https://xmpp.org/extensions/xep-0220.html)                                              [Supported](/doc/modules/mod_dialback)
  [XEP-0221: Data Forms Media Element](https://xmpp.org/extensions/xep-0221.html)                                     Supported
  [XEP-0222: Persistent Storage of Public Data via PubSub](https://xmpp.org/extensions/xep-0222.html)                 [Supported since 0.11](/doc/modules/mod_pep)
  [XEP-0223: Persistent Storage of Private Data via PubSub](https://xmpp.org/extensions/xep-0223.html)                [Supported since 0.11](/doc/modules/mod_pep)
  [XEP-0224: Attention](https://xmpp.org/extensions/xep-0224.html)                                                    Applicable to clients only, so will work with Prosody
  [XEP-0225: Component Connections](https://xmpp.org/extensions/xep-0225.html)                                        Not yet supported
  [XEP-0226: Message Stanza Profiles](https://xmpp.org/extensions/xep-0226.html)                                      Applicable to clients only, so will work with Prosody
  [XEP-0227: Portable Import/Export Format for XMPP-IM Servers](https://xmpp.org/extensions/xep-0227.html)            Supported
  [XEP-0230: Service Discovery Notifications](https://xmpp.org/extensions/xep-0230.html)                              Not supported
  [XEP-0231: Bits of Binary](https://xmpp.org/extensions/xep-0231.html)                                               Applicable to clients only, so will work with Prosody
  [XEP-0232: Software Information](https://xmpp.org/extensions/xep-0232.html)                                         Not supported
  [XEP-0233: Use of Domain-Based Service Names in XMPP SASL Negotiation](https://xmpp.org/extensions/xep-0233.html)   Not yet supported
  [XEP-0234: Jingle File Transfer](https://xmpp.org/extensions/xep-0234.html)                                         [Applicable to clients only, so will work with Prosody](/doc/jingle)
  [XEP-0235: OAuth Over XMPP](https://xmpp.org/extensions/xep-0235.html)                                              Not yet supported
  [XEP-0236: Abuse Reporting](https://xmpp.org/extensions/xep-0236.html)                                              Not yet supported
  [XEP-0237: Roster Versioning](https://xmpp.org/extensions/xep-0237.html)                                            [Supported since 0.4](/doc/modules/mod_roster)
  [XEP-0241: Encryption of Archived Messages](https://xmpp.org/extensions/xep-0241.html)                              Not supported
  [XEP-0243: XMPP Server Compliance 2009](https://xmpp.org/extensions/xep-0243.html)                                  Supported
  [XEP-0245: The /me Command](https://xmpp.org/extensions/xep-0245.html)                                              Applicable to clients only, so will work with Prosody
  [XEP-0246: End-to-End XML Streams](https://xmpp.org/extensions/xep-0246.html)                                       Applicable to clients only, so will work with Prosody
  [XEP-0247: Jingle XML Streams](https://xmpp.org/extensions/xep-0247.html)                                           [Applicable to clients only, so will work with Prosody](/doc/jingle)
  [XEP-0248: PubSub Collection Nodes](https://xmpp.org/extensions/xep-0248.html)                                      Not yet supported
  [XEP-0249: Direct MUC Invitations](https://xmpp.org/extensions/xep-0249.html)                                       Applicable to clients only, so will work with Prosody
  [XEP-0250: C2C Authentication Using TLS](https://xmpp.org/extensions/xep-0250.html)                                 Applicable to clients only, so will work with Prosody
  [XEP-0251: Jingle Session Transfer](https://xmpp.org/extensions/xep-0251.html)                                      [Applicable to clients only, so will work with Prosody](/doc/jingle)
  [XEP-0252: BOSH Script Syntax](https://xmpp.org/extensions/xep-0252.html)                                           Not supported
  [XEP-0253: PubSub Chaining](https://xmpp.org/extensions/xep-0253.html)                                              Not supported
  [XEP-0254: PubSub Queueing](https://xmpp.org/extensions/xep-0254.html)                                              Not supported
  [XEP-0255: Location Query](https://xmpp.org/extensions/xep-0255.html)                                               Not supported
  [XEP-0256: Last Activity in Presence](https://xmpp.org/extensions/xep-0256.html)                                    Not yet supported
  [XEP-0257: Client Certificate Management for SASL EXTERNAL](https://xmpp.org/extensions/xep-0257.html)              [Community module available](https://modules.prosody.im/mod_client_certs.html)
  [XEP-0258: Security Labels in XMPP](https://xmpp.org/extensions/xep-0258.html)                                      [Community module available](https://modules.prosody.im/mod_seclabels.html)
  [XEP-0259: Message Mine-ing](https://xmpp.org/extensions/xep-0259.html)                                             Not supported
  [XEP-0260: Jingle SOCKS5 Bytestreams Transport Method](https://xmpp.org/extensions/xep-0260.html)                   [Applicable to clients only, so will work with Prosody](/doc/jingle)
  [XEP-0261: Jingle In-Band Bytestreams Transport](https://xmpp.org/extensions/xep-0261.html)                         [Applicable to clients only, so will work with Prosody](/doc/jingle)
  [XEP-0262: Use of ZRTP in Jingle RTP Sessions](https://xmpp.org/extensions/xep-0262.html)                           [Applicable to clients only, so will work with Prosody](/doc/jingle)
  [XEP-0273: Stanza Interception and Filtering Technology](https://xmpp.org/extensions/xep-0273.html)                 [Community module available](https://modules.prosody.im/mod_sift.html)
  [XEP-0277: Microblogging over XMPP](https://xmpp.org/extensions/xep-0277.html)                                      Applicable to clients only, so will work with Prosody
  [XEP-0279: Server IP Check](https://xmpp.org/extensions/xep-0279.html)                                              [Community module available](https://modules.prosody.im/mod_ipcheck)
  [XEP-0280: Message Carbons](https://xmpp.org/extensions/xep-0280.html)                                              [Supported since 0.10](/doc/modules/mod_carbons)
  [XEP-0288: Bidirectional Server-to-Server Connections](https://xmpp.org/extensions/xep-0288.html)                   [Supported starting with 0.12](/doc/modules/mod_s2s_bidi)
  [XEP-0292: vCard4 Over XMPP](https://xmpp.org/extensions/xep-0292.html)                                             [Supported since 0.11](/doc/modules/mod_vcard4)
  [XEP-0301: In-Band Real Time Text](https://xmpp.org/extensions/xep-0301.html)                                       Applicable to clients only, so will work with Prosody
  [XEP-0307: Unique Room Names for Multi-User Chat](https://xmpp.org/extensions/xep-0307.html)                        [Supported](/doc/modules/mod_muc_unique)
  [XEP-0309: Service Directories](https://xmpp.org/extensions/xep-0309.html)                                          [Community module available](https://modules.prosody.im/mod_service_directories.html)
  [XEP-0313: Message Archive Management](https://xmpp.org/extensions/xep-0313.html)                                   [Supported since 0.10](/doc/modules/mod_mam)
  [XEP-0323: Internet of Things - Sensor Data](https://xmpp.org/extensions/xep-0323.html)                             Applicable to clients only, so will work with Prosody
  [XEP-0324: Internet of Things - Provisioning](https://xmpp.org/extensions/xep-0324.html)                            Applicable to clients only, so will work with Prosody
  [XEP-0325: Internet of Things - Control](https://xmpp.org/extensions/xep-0325.html)                                 Applicable to clients only, so will work with Prosody
  [XEP-0326: Internet of Things - Concentrators](https://xmpp.org/extensions/xep-0326.html)                           Applicable to clients only, so will work with Prosody
  [XEP-0333: Chat Markers](https://xmpp.org/extensions/xep-0333.html)                                                 Applicable to clients only, so will work with Prosody
  [XEP-0359: Unique and Stable Stanza IDs](https://xmpp.org/extensions/xep-0359.html)                                 [Used in the context of archiving](/doc/modules/mod_mam)
  [XEP-0379: Pre-Authenticated Roster Subscription](https://xmpp.org/extensions/xep-0379.html)                        Supported starting with 0.12
  [XEP-0380: Explicit Message Encryption](https://xmpp.org/extensions/xep-0380.html)                                  [Used by mod\_csi\_simple](/doc/modules/mod_csi_simple)
  [XEP-0389: User Avatar to vCard-Based Avatars Conversion](https://xmpp.org/extensions/xep-0398.html)                [Supported since 0.11](/doc/modules/mod_vcard_legacy)
  [XEP-0401: Easy User Onboarding](https://xmpp.org/extensions/attic/xep-0401-0.3.0.html)                             Supported starting with 0.12
  [XEP-0402: PEP Native Bookmarks](https://xmpp.org/extensions/xep-0402.html)                                         [Supported starting with 0.12](/doc/modules/mod_bookmarks)
  [XEP-0411: Bookmarks Conversion (Legacy)](https://xmpp.org/extensions/xep-0411.html)                                [Supported starting with 0.12](/doc/modules/mod_bookmarks)
  [XEP-0410: MUC Self-Ping](https://xmpp.org/extensions/xep-0410.html)                                                Supported since 0.11
