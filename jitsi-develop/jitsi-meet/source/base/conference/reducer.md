# 会议

## 操作

```
_addConferenceListeners
_conferenceWillJoin

authStatusChanged
checkIfCanJoin

conferenceFailed
conferenceJoined
conferenceJoinInProgress
conferenceLeft
conferenceSubjectChanged
conferenceTimestampChanged
conferenceUniqueIdSet
conferenceWillJoin
conferenceWillLeave

createConference
dataChannelClosed
dataChannelOpened
e2eRttChanged
endConference
kickedOut
leaveConference
lockStateChanged
nonParticipantMessageReceived
onStartMutedPolicyChanged
p2pStatusChanged
sendTones

setFollowMe
setLocalSubject
setObfuscatedRoom
setPassword
setRoom
setStartMutedPolicy
setStartReactionsMuted
setSubject
```

## 操作类型

```
AUTH_STATUS_CHANGED
CONFERENCE_FAILED
CONFERENCE_JOIN_IN_PROGRESS
CONFERENCE_JOINED
CONFERENCE_LEFT
CONFERENCE_LOCAL_SUBJECT_CHANGED
CONFERENCE_SUBJECT_CHANGED
CONFERENCE_TIMESTAMP_CHANGED
CONFERENCE_UNIQUE_ID_SET
CONFERENCE_WILL_JOIN
CONFERENCE_WILL_LEAVE
DATA_CHANNEL_CLOSED
DATA_CHANNEL_OPENED
E2E_RTT_CHANGED
KICKED_OUT
LOCK_STATE_CHANGED
NON_PARTICIPANT_MESSAGE_RECEIVED
P2P_STATUS_CHANGED
SEND_TONES
SET_FOLLOW_ME
SET_OBFUSCATED_ROOM
SET_PASSWORD
SET_PASSWORD_FAILED
SET_PENDING_SUBJECT_CHANGE
SET_ROOM
SET_START_MUTED_POLICY
SET_START_REACTIONS_MUTED
```

## 常量

```
AVATAR_URL_COMMAND
CONFERENCE_DESTROYED_LEAVE_TIMEOUT
CONFERENCE_LEAVE_REASONS
EMAIL_COMMAND
JITSI_CONFERENCE_URL_KEY
TRIGGER_READY_TO_CLOSE_REASONS
```

## 函数

```
_addLocalTracksToConference
_handleParticipantError
_removeLocalTracksFromConference
_reportError

commonUserJoinedHandling
commonUserLeftHandling

forEachConference

getAnalyticsRoomName
getConferenceName
getConferenceNameForTitle
getConferenceOptions
getConferenceState
getConferenceTimestamp
getCurrentConference
getIsConferenceJoined
getOrCreateObfuscatedRoomName
getRoomName
getVisitorOptions

isRoomValid

restoreConferenceOptions
safeStartCase
sendLocalParticipant
```












```
const DEFAULT_STATE = {
    conference: undefined,
    e2eeSupported: undefined,
    joining: undefined,
    leaving: undefined,
    locked: undefined,
    membersOnly: undefined,
    password: undefined,
    passwordRequired: undefined
};

export interface IJitsiConference {
    addCommandListener: Function;
    addLobbyMessageListener: Function;
    addTrack: Function;
    authenticateAndUpgradeRole: Function;
    avModerationApprove: Function;
    avModerationReject: Function;
    createVideoSIPGWSession: Function;
    dial: Function;
    disableAVModeration: Function;
    disableLobby: Function;
    enableAVModeration: Function;
    enableLobby: Function;
    end: Function;
    getBreakoutRooms: Function;
    getLocalParticipantProperty: Function;
    getLocalTracks: Function;
    getMeetingUniqueId: Function;
    getMetadataHandler: Function;
    getName: Function;
    getParticipantById: Function;
    getParticipantCount: Function;
    getParticipants: Function;
    getRole: Function;
    getSpeakerStats: () => ISpeakerStats;
    getSsrcByTrack: Function;
    grantOwner: Function;
    isAVModerationSupported: Function;
    isCallstatsEnabled: Function;
    isE2EEEnabled: Function;
    isE2EESupported: Function;
    isEndConferenceSupported: Function;
    isLobbySupported: Function;
    isSIPCallingSupported: Function;
    isStartAudioMuted: Function;
    isStartVideoMuted: Function;
    join: Function;
    joinLobby: Function;
    kickParticipant: Function;
    leave: Function;
    lobbyApproveAccess: Function;
    lobbyDenyAccess: Function;
    lock: Function;
    markParticipantVerified: Function;
    muteParticipant: Function;
    myLobbyUserId: Function;
    myUserId: Function;
    off: Function;
    on: Function;
    options: any;
    removeTrack: Function;
    replaceTrack: Function;
    room: IJitsiConferenceRoom;
    sendApplicationLog: Function;
    sendCommand: Function;
    sendCommandOnce: Function;
    sendEndpointMessage: Function;
    sendFaceLandmarks: (faceLandmarks: FaceLandmarks) => void;
    sendFeedback: Function;
    sendLobbyMessage: Function;
    sendMessage: Function;
    sendPrivateTextMessage: Function;
    sendTextMessage: Function;
    sendTones: Function;
    sessionId: string;
    setAssumedBandwidthBps: (value: number) => void;
    setDesktopSharingFrameRate: Function;
    setDisplayName: Function;
    setLocalParticipantProperty: Function;
    setMediaEncryptionKey: Function;
    setReceiverConstraints: Function;
    setSenderVideoConstraint: Function;
    setStartMutedPolicy: Function;
    setSubject: Function;
    startRecording: Function;
    startVerification: Function;
    stopRecording: Function;
    toggleE2EE: Function;
}

export interface IConferenceState {
    authEnabled?: boolean;
    authLogin?: string;
    authRequired?: IJitsiConference;
    conference?: IJitsiConference;
    conferenceTimestamp?: number;
    e2eeSupported?: boolean;
    error?: Error;
    followMeEnabled?: boolean;
    joining?: IJitsiConference;
    leaving?: IJitsiConference;
    localSubject?: string;
    locked?: string;
    membersOnly?: IJitsiConference;
    obfuscatedRoom?: string;
    obfuscatedRoomSource?: string;
    p2p?: Object;
    password?: string;
    passwordRequired?: IJitsiConference;
    pendingSubjectChange?: string;
    room?: string;
    startAudioMutedPolicy?: boolean;
    startReactionsMuted?: boolean;
    startVideoMutedPolicy?: boolean;
    subject?: string;
}

export interface IJitsiConferenceRoom {
    myroomjid: string;
    roomjid: string;
}




























private function _lockStateChanged(     state: IConferenceState,     {conference, locked}: {conference: Object, locked: boolean}): IConferenceState

private function _p2pStatusChanged(     state: IConferenceState,     action: any): IConferenceState

private function _setPassword(state: IConferenceState, {conference, method, password}: {conference: any, method: Object, password: string}): IConferenceState

private function _setRoom(state: IConferenceState, action: any): IConferenceState
```




