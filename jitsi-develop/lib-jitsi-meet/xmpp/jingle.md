# Jingle

## Jingle会话：JingleSession

```
# 类
JingleSession
    constructor
    initiatorJid
    responderJid
    getState
    initialize
    doInitialize
    terminate
    acceptOffer
    addIceCandidates
    addSources
    removeSources
```

## Jingle会话PC：JingleSessionPC

```
# 常量
IQ_TIMEOUT
DEFAULT_MAX_STATS
ICE_CAND_GATHERING_TIMEOUT

# 方法
getEndpointId
_addSourceElement

# 类
JingleSessionPC
    parseVideoSenders
    parseSourceMaxFrameHeight
    constructor

    doInitialize
    terminate
    close
    generateRecvonlySsrc
    readSsrcInfo
    acceptOffer
    invite
    processSourceMap
    modifyContents
    notifyMySSRCUpdate
    newJingleErrorHandler
    toString

    addIceCandidates
    addRemoteStream
    addTracks
    addTrackToPc

    removeRemoteStream
    removeRemoteStreamsOnLeave
    removeTrackFromPc

    sendContentModify
    sendIceCandidate
    sendIceCandidates
    sendIceFailedNotification
    sendSessionAccept
    sendSessionInitiate
    sendTransportAccept
    sendTransportReject

    onTerminated
    onXmppStatusChanged

    replaceTrack
    replaceTransport

    getConfiguredVideoCodec
    getIceConnectionState
    getRemoteRecvMaxFrameHeight
    getRemoteSourcesRecvMaxFrameHeight

    setAnswer
    setMediaTransferActive
    setOfferAnswerCycle
    setP2pVideoTransferActive
    setReceiverVideoConstraint
    setSenderVideoConstraint
    setVideoCodecs

    _addRemoveTrack
    _addOrRemoveRemoteStream
    _parseSsrcInfoFromSourceAdd
    _parseSsrcInfoFromSourceRemove
    _processNewJingleOfferIq
    _processRemoteAddSource
    _processRemoteRemoveSource
    _assertNotEnded
    _initiatorRenegotiate
    _modifyRemoteVideoActive
    _renegotiate
    _responderRenegotiate
    _verifyNoSSRCChanged
```

## Jingle会话状态：JingleSessionState

```
# 常量
ACTIVE
PENDING
ENDED

# 枚举
JingleSessionState
    ACTIVE
    PENDING
    ENDED
```

## Jingle辅助方法：JingleHelperFunctions

```
# 方法
_createSourceExtension
_createSsrcGroupExtension
_getOrCreateRtpDescription
_getSemantics
expandSourcesFromJson
```
