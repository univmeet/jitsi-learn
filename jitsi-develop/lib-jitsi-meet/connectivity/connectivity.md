# 连接性

## 连接质量事件：ConnectionQualityEvents

```
# 常量
LOCAL_STATS_UPDATED
REMOTE_STATS_UPDATED

# 枚举
ConnectionQualityEvents
    LOCAL_STATS_UPDATED
    REMOTE_STATS_UPDATED
```

## 连接质量：ConnectionQuality

```
# 常量
kSimulcastFormats
STATS_MESSAGE_TYPE
MAX_TARGET_BITRATE

# 变量
startBitrate

# 方法
getTarget
rampUp

# 类
ConnectionQuality
    constructor
    getStats
    _maybeUpdateUnmuteTime
    _calculateConnectionQuality
    _updateLocalConnectionQuality
    _broadcastLocalStats
    _updateLocalStats
    _updateRemoteStats
```

## 网络信息：NetworkInfo

```
# 常量
NETWORK_INFO_EVENT
networkInfo

# 类
NetworkInfo
    constructor
    isOnline
    updateNetworkInfo
```

## ICE失败处理：IceFailedHandling

```
# 类
IceFailedHandling
    constructor
    start
    cancel
    _actOnIceFailed
```

## 流状态映射：StreamingStatusMap

```
# 类型
StreamingStatusMap
    videoType
    startedMs
    p2p
    streamingStatus
    value
```

## 轨道流状态：TrackStreamingStatus

```
# 枚举
TrackStreamingStatus
    ACTIVE
    INACTIVE
    INTERRUPTED
    RESTORING
```

## 轨道流状态实现：TrackStreamingStatusImpl

```
# 常量
DEFAULT_NOT_IN_FORWARDED_SOURCES_TIMEOUT
DEFAULT_P2P_RTC_MUTE_TIMEOUT
DEFAULT_RTC_MUTE_TIMEOUT
DEFAULT_RESTORING_TIMEOUT

# 类
TrackStreamingStatusImpl
    rtc
    conference
    track
    trackTimer
    restoringTimer
    outOfForwardedSourcesTimeout
    p2pRtcMuteTimeout
    rtcMuteTimeout
    rtcMutedTimestamp
    streamingStatusMap

    _onP2PStatus
    _onUserLeft
    _onTrackRtcMuted
    _onTrackRtcUnmuted
    _onTrackVideoTypeChanged
    _onSignallingMuteChanged
    _onLastNValueChanged
    _onForwardedSourcesChanged

    _getNewStateForJvbMode
    _getNewStateForP2PMode

    constructor

    init
    dispose
    clearTimeout
    clearRtcMutedTimestamp
    figureOutStreamingStatus
    maybeSendTrackStreamingStatusEvent
    isVideoTrackFrozen

    onUserLeft
    onTrackRtcMuted
    onTrackRtcUnmuted
    onTrackVideoTypeChanged
    onSignallingMuteChanged
    onForwardedSourcesChanged

    _clearRestoringTimer
    _changeStreamingStatus
    _isCurrentTrack
    _isRestoringTimedout
    _getVideoFrozenTimeout
```
