# Jitsi会议

## Jitsi会议：JitsiConference

```
# 全局常量
JINGLE_SI_TIMEOUT

# 全局方法
_getCodecMimeType

# 类
JitsiConference
    resourceCreator
    constructor

    authenticateAndUpgradeRole
    leave
    end
    replaceTrack
    lock
    unlock
    grantOwner
    revokeOwner
    kickParticipant
    muteParticipant
    updateDTMFSupport
    myUserId
    dial
    hangup
    broadcastEndpointMessage
    createVideoSIPGWSession
    toggleE2EE
    markParticipantVerified
    myLobbyUserId

    join
    joinLobby

    startP2PSession
    startRecording
    startTranscriber
    startVerification

    stopP2PSession
    stopTranscriber
    stopRecording

    avModerationApprove
    avModerationReject

    lobbyApproveAccess
    lobbyDenyAccess

    addEventListener
    addCommandListener
    addLobbyMessageListener
    addTrack

    removeEventListener
    removeCommand
    removeCommandListener
    removeLobbyMessageHandler
    removeLocalParticipantProperty
    removeTrack

    on
    off

    onCallAccepted
    onCallEnded
    onDisplayNameChanged
    onIncomingCall
    onLocalRoleChanged
    onLocalTrackRemoved
    onMemberJoined
    onMemberKicked
    onMemberLeft
    onRemoteTrackAdded
    onRemoteTrackRemoved
    onSuspendDetected
    onTransportInfo
    onUserRoleChanged

    sendApplicationLog
    sendCommand
    sendCommandOnce
    sendEndpointMessage
    sendEndpointStatsMessage
    sendFaceLandmarks
    sendFeedback
    sendLobbyMessage
    sendMessage
    sendPrivateTextMessage
    sendTextMessage
    sendTones

    isAuthEnabled
    isAVModerationSupported
    isCallstatsEnabled
    isConnectionInterrupted
    isDTMFSupported
    isE2EEEnabled
    isE2EESupported
    isEndConferenceSupported
    isExternalAuthEnabled
    isFocus
    isHidden
    isJoined
    isLobbySupported
    isLoggedIn
    isMembersOnly
    isModerator
    isP2PActive
    isP2PEnabled
    isP2PTestModeEnabled
    isSIPCallingSupported
    isStartAudioMuted
    isStartVideoMuted

    getActiveMediaSession
    getActivePeerConnection
    getAuthLogin
    getBreakoutRooms
    getConnection
    getConnectionState
    getConnectionTimes
    getExternalAuthUrl
    getForwardedSources
    getLastN
    getLocalAudioTrack
    getLocalParticipantProperty
    getLocalTracks
    getLocalVideoTrack
    getLocalVideoTracks
    getMediaSessions
    getMeetingUniqueId
    getMetadataHandler
    getName
    getP2PConnectionState
    getParticipantById
    getParticipantCount
    getParticipants
    getPerformanceStats
    getPhoneNumber
    getPhonePin
    getProperty
    getRole
    getSpeakerStats
    getSsrcByTrack
    getStartMutedPolicy
    getTranscriber
    getTranscriptionStatus

    enableAVModeration
    enableLobby

    disableAVModeration
    disableLobby

    setAssumedBandwidthBps
    setDesktopSharingFrameRate
    setDisplayName
    setLastN
    setLocalParticipantProperty
    setMediaEncryptionKey
    setReceiverConstraints
    setReceiverVideoConstraint
    setSenderVideoConstraint
    setStartMutedPolicy
    setSubject

    _init
    _doReplaceTrack
    _getInitialLocalTracks

    _shouldBeInP2PMode
    _startP2PSession
    _stopP2PSession

    _resumeMediaTransferForJvbConnection
    _suspendMediaTransferForJvbConnection

    _registerRtcListeners
    _rejectIncomingCall
    _restartMediaSessions

    _acceptJvbIncomingCall
    _acceptP2PIncomingCall

    _addLocalTrackToPc
    _addRemoteJVBTracks
    _addRemoteP2PTracks
    _addRemoteTracks

    _removeLocalSourceOnReject
    _removeLocalTrackFromPc
    _removeRemoteJVBTracks
    _removeRemoteP2PTracks
    _removeRemoteTracks

    _maybeClearDeferredStartP2P
    _maybeClearSITimeout
    _maybeSetSITimeout
    _maybeStartOrStopP2P

    _sendBridgeVideoTypeMessage
    _sendConferenceJoinAnalyticsEvent
    _sendConferenceLeftAnalyticsEvent

    _fireAudioLevelChangeEvent
    _fireIncompatibleVersionsEvent
    _fireMuteChangeEvent

    _onConferenceRestarted
    _onIceConnectionEstablished
    _onIceConnectionFailed
    _onIceConnectionInterrupted
    _onIceConnectionRestored
    _onIncomingCallP2P
    _onMemberBotTypeChanged
    _onMucJoined
    _onTrackAttach

    _updateFeatures
    _updateProperties
    _updateRoomPresence

    _setBridgeChannel
    _setNewVideoType
    _setP2PStatus
    _setTrackMuteStatus
    _setupNewTrack
```

## Jitsi会议事件：JitsiConferenceEvents

```
# 常量
_MEDIA_SESSION_ACTIVE_CHANGED
_MEDIA_SESSION_STARTED

AUDIO_INPUT_STATE_CHANGE
AUDIO_UNMUTE_PERMISSIONS_CHANGED

AV_MODERATION_APPROVED
AV_MODERATION_REJECTED
AV_MODERATION_CHANGED
AV_MODERATION_PARTICIPANT_APPROVED
AV_MODERATION_PARTICIPANT_REJECTED

BREAKOUT_ROOMS_UPDATED
BREAKOUT_ROOMS_MOVE_TO_ROOM

CONFERENCE_JOIN_IN_PROGRESS
CONFERENCE_JOINED
CONFERENCE_CREATED_TIMESTAMP
CONFERENCE_UNIQUE_ID_SET
CONFERENCE_LEFT
CONFERENCE_FAILED
CONFERENCE_ERROR

CONNECTION_ESTABLISHED
CONNECTION_INTERRUPTED
CONNECTION_RESTORED

DATA_CHANNEL_OPENED
DATA_CHANNEL_CLOSED

USER_JOINED
USER_ROLE_CHANGED
USER_STATUS_CHANGED
USER_LEFT

VIDEO_UNMUTE_PERMISSIONS_CHANGED
VIDEO_SIP_GW_AVAILABILITY_CHANGED
VIDEO_SIP_GW_SESSION_STATE_CHANGED

TRACK_ADDED
TRACK_AUDIO_LEVEL_CHANGED
TRACK_MUTE_CHANGED
TRACK_UNMUTE_REJECTED
TRACK_REMOVED

E2EE_VERIFICATION_READY
E2EE_VERIFICATION_AVAILABLE
E2EE_VERIFICATION_COMPLETED

ENDPOINT_MESSAGE_RECEIVED
ENDPOINT_STATS_RECEIVED

LOBBY_USER_JOINED
LOBBY_USER_UPDATED
LOBBY_USER_LEFT

PARTICIPANT_KICKED
PARTICIPANT_SOURCE_UPDATED
PARTICIPANT_PROPERTY_CHANGED
PARTCIPANT_FEATURES_CHANGED

AUTH_STATUS_CHANGED
BOT_TYPE_CHANGED
DISPLAY_NAME_CHANGED
DOMINANT_SPEAKER_CHANGED
DTMF_SUPPORT_CHANGED
FORWARDED_SOURCES_CHANGED
LAST_N_ENDPOINTS_CHANGED
LOCK_STATE_CHANGED
MEMBERS_ONLY_CHANGED
PHONE_NUMBER_CHANGED
PROPERTIES_CHANGED
RECORDER_STATE_CHANGED
SERVER_REGION_CHANGED
START_MUTED_POLICY_CHANGED
SUBJECT_CHANGED
TRANSCRIPTION_STATUS_CHANGED

MESSAGE_RECEIVED
PRIVATE_MESSAGE_RECEIVED
NON_PARTICIPANT_MESSAGE_RECEIVED

STARTED_MUTED
TALK_WHILE_MUTED

JVB121_STATUS
P2P_STATUS

BEFORE_STATISTICS_DISPOSED
KICKED
METADATA_UPDATED
NO_AUDIO_INPUT
NOISY_MIC
SUSPEND_DETECTED

# 枚举
JitsiConferenceEvents
    _MEDIA_SESSION_ACTIVE_CHANGED
    _MEDIA_SESSION_STARTED

    AUDIO_INPUT_STATE_CHANGE
    AUDIO_UNMUTE_PERMISSIONS_CHANGED

    AV_MODERATION_APPROVED
    AV_MODERATION_REJECTED
    AV_MODERATION_CHANGED
    AV_MODERATION_PARTICIPANT_APPROVED
    AV_MODERATION_PARTICIPANT_REJECTED

    BREAKOUT_ROOMS_UPDATED
    BREAKOUT_ROOMS_MOVE_TO_ROOM

    CONFERENCE_JOIN_IN_PROGRESS
    CONFERENCE_JOINED
    CONFERENCE_CREATED_TIMESTAMP
    CONFERENCE_UNIQUE_ID_SET
    CONFERENCE_LEFT
    CONFERENCE_FAILED
    CONFERENCE_ERROR

    CONNECTION_ESTABLISHED
    CONNECTION_INTERRUPTED
    CONNECTION_RESTORED

    DATA_CHANNEL_OPENED
    DATA_CHANNEL_CLOSED

    USER_JOINED
    USER_ROLE_CHANGED
    USER_STATUS_CHANGED
    USER_LEFT

    VIDEO_UNMUTE_PERMISSIONS_CHANGED
    VIDEO_SIP_GW_AVAILABILITY_CHANGED
    VIDEO_SIP_GW_SESSION_STATE_CHANGED

    TRACK_ADDED
    TRACK_AUDIO_LEVEL_CHANGED
    TRACK_MUTE_CHANGED
    TRACK_UNMUTE_REJECTED
    TRACK_REMOVED

    E2EE_VERIFICATION_READY
    E2EE_VERIFICATION_AVAILABLE
    E2EE_VERIFICATION_COMPLETED

    ENDPOINT_MESSAGE_RECEIVED
    ENDPOINT_STATS_RECEIVED

    LOBBY_USER_JOINED
    LOBBY_USER_UPDATED
    LOBBY_USER_LEFT

    PARTICIPANT_KICKED
    PARTICIPANT_SOURCE_UPDATED
    PARTICIPANT_PROPERTY_CHANGED
    PARTCIPANT_FEATURES_CHANGED

    AUTH_STATUS_CHANGED
    BOT_TYPE_CHANGED
    DISPLAY_NAME_CHANGED
    DOMINANT_SPEAKER_CHANGED
    DTMF_SUPPORT_CHANGED
    FORWARDED_SOURCES_CHANGED
    LAST_N_ENDPOINTS_CHANGED
    LOCK_STATE_CHANGED
    MEMBERS_ONLY_CHANGED
    PHONE_NUMBER_CHANGED
    PROPERTIES_CHANGED
    RECORDER_STATE_CHANGED
    SERVER_REGION_CHANGED
    START_MUTED_POLICY_CHANGED
    SUBJECT_CHANGED
    TRANSCRIPTION_STATUS_CHANGED

    MESSAGE_RECEIVED
    PRIVATE_MESSAGE_RECEIVED
    NON_PARTICIPANT_MESSAGE_RECEIVED

    STARTED_MUTED
    TALK_WHILE_MUTED

    JVB121_STATUS
    P2P_STATUS

    BEFORE_STATISTICS_DISPOSED
    KICKED
    METADATA_UPDATED
    NO_AUDIO_INPUT
    NOISY_MIC
    SUSPEND_DETECTED
```

## Jitsi会议事件管理器：JitsiConferenceEventManager

```
JitsiConferenceEventManager
    conference
    xmppListeners

    setupRTCListeners
    setupChatRoomListeners
    setupStatisticsListeners
    setupXMPPListeners
    removeXMPPListeners
    _addConferenceXMPPListener
```

## Jitsi会议错误：JitsiConferenceErrors

```
# 常量
AUTHENTICATION_REQUIRED
PASSWORD_REQUIRED
PASSWORD_NOT_SUPPORTED
CONFERENCE_ACCESS_DENIED
CONFERENCE_DESTROYED
CONFERENCE_RESTARTED
CONFERENCE_MAX_USERS
CONNECTION_ERROR
SETTINGS_ERROR
NOT_ALLOWED_ERROR
MEMBERS_ONLY_ERROR
RESERVATION_ERROR
CHAT_ERROR
FOCUS_LEFT
FOCUS_DISCONNECTED
OFFER_ANSWER_FAILED
ICE_FAILED
VIDEOBRIDGE_NOT_AVAILABLE
INCOMPATIBLE_SERVER_VERSIONS
REDIRECTED
GRACEFUL_SHUTDOWN

# 枚举
JitsiConferenceErrors
    AUTHENTICATION_REQUIRED
    PASSWORD_REQUIRED
    PASSWORD_NOT_SUPPORTED
    CONFERENCE_ACCESS_DENIED
    CONFERENCE_DESTROYED
    CONFERENCE_RESTARTED
    CONFERENCE_MAX_USERS
    CONNECTION_ERROR
    SETTINGS_ERROR
    NOT_ALLOWED_ERROR
    MEMBERS_ONLY_ERROR
    RESERVATION_ERROR
    CHAT_ERROR
    FOCUS_LEFT
    FOCUS_DISCONNECTED
    OFFER_ANSWER_FAILED
    ICE_FAILED
    VIDEOBRIDGE_NOT_AVAILABLE
    INCOMPATIBLE_SERVER_VERSIONS
    REDIRECTED
    GRACEFUL_SHUTDOWN
```
