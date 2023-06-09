# RTC

## 分辨率类型：Resolutions

```
# 常量
Resolutions
    2160
    1080
    720
    540
    480
    360
    240
    180
    4k
    fullhd
    hd
    qhd
    vga
```

## 编解码器MIME类型：CodecMimeType

```
# 常量
CodecMimeType
    AV1
    H264
    OPUS
    ULPFEC
    VP8
    VP9
```

## 摄像头朝向模式：CameraFacingMode

```
# 常量
CameraFacingMode
    ENVIRONMENT
    USER
```

## 桥接的视频类型：BridgeVideoType

```
# 常量
BridgeVideoType
    CAMERA
    DESKTOP
    DESKTOP_HIGH_FPS
    NONE
```

## 媒体方向：MediaDirection

```
# 枚举
MediaDirection
    INACTIVE
    RECVONLY
    SENDONLY
    SENDRECV
```

## 媒体类型：MediaType

```
# 枚举
MediaType
    AUDIO
    VIDEO
```

## 视频类型：VideoType

```
# 枚举
VideoType
    CAMERA
    DESKTOP
```

## RTC事件：RTCEvents

```
# 常量
CREATE_OFFER_FAILED
CREATE_ANSWER_FAILED
SET_LOCAL_DESCRIPTION_FAILED
SET_REMOTE_DESCRIPTION_FAILED
DATA_CHANNEL_OPEN
DATA_CHANNEL_CLOSED
ENDPOINT_MESSAGE_RECEIVED
ENDPOINT_STATS_RECEIVED
ENDPOINT_CONN_STATUS_CHANGED
DEVICE_LIST_AVAILABLE
DEVICE_LIST_WILL_CHANGE
DEVICE_LIST_CHANGED
VIDEO_SSRCS_REMAPPED
AUDIO_SSRCS_REMAPPED
AUDIO_OUTPUT_DEVICE_CHANGED
LOCAL_TRACK_SSRC_UPDATED
LOCAL_TRACK_MAX_ENABLED_RESOLUTION_CHANGED
LOCAL_UFRAG_CHANGED
REMOTE_TRACK_ADDED
REMOTE_TRACK_MUTE
REMOTE_TRACK_REMOVED
REMOTE_TRACK_UNMUTE
REMOTE_UFRAG_CHANGED
TRACK_ATTACHED
DOMINANT_SPEAKER_CHANGED
FORWARDED_SOURCES_CHANGED
LASTN_VALUE_CHANGED
PERMISSIONS_CHANGED
SENDER_VIDEO_CONSTRAINTS_CHANGED

# 枚举
RTCEvents
    CREATE_OFFER_FAILED
    CREATE_ANSWER_FAILED
    SET_LOCAL_DESCRIPTION_FAILED
    SET_REMOTE_DESCRIPTION_FAILED
    DATA_CHANNEL_OPEN
    DATA_CHANNEL_CLOSED
    ENDPOINT_MESSAGE_RECEIVED
    ENDPOINT_STATS_RECEIVED
    ENDPOINT_CONN_STATUS_CHANGED
    DEVICE_LIST_AVAILABLE
    DEVICE_LIST_WILL_CHANGE
    DEVICE_LIST_CHANGED
    VIDEO_SSRCS_REMAPPED
    AUDIO_SSRCS_REMAPPED
    AUDIO_OUTPUT_DEVICE_CHANGED
    LOCAL_TRACK_SSRC_UPDATED
    LOCAL_TRACK_MAX_ENABLED_RESOLUTION_CHANGED
    LOCAL_UFRAG_CHANGED
    REMOTE_TRACK_ADDED
    REMOTE_TRACK_MUTE
    REMOTE_TRACK_REMOVED
    REMOTE_TRACK_UNMUTE
    REMOTE_UFRAG_CHANGED
    TRACK_ATTACHED
    DOMINANT_SPEAKER_CHANGED
    FORWARDED_SOURCES_CHANGED
    LASTN_VALUE_CHANGED
    PERMISSIONS_CHANGED
    SENDER_VIDEO_CONSTRAINTS_CHANGED
```

## 信令事件：SignalingEvents

```
# 常量
PEER_MUTED_CHANGED
PEER_VIDEO_TYPE_CHANGED
SOURCE_MUTED_CHANGED
SOURCE_VIDEO_TYPE_CHANGED
SOURCE_UPDATED

# 枚举
SignalingEvents
    PEER_MUTED_CHANGED
    PEER_VIDEO_TYPE_CHANGED
    SOURCE_MUTED_CHANGED
    SOURCE_VIDEO_TYPE_CHANGED
    SOURCE_UPDATED
```

## 信令层：SignalingLayer

```
# 方法
getMediaTypeFromSourceName
getSourceIndexFromSourceName
getSourceNameForJitsiTrack

# 类
SignalingLayer
    updateSsrcOwnersOnLeave
    removeSSRCOwners
    getPeerMediaInfo
    getPeerSourceInfo
    getSSRCOwner
    getTrackSourceName
    setSSRCOwner
    setTrackSourceName
    setTrackMuteStatus
    setTrackVideoType
```
















