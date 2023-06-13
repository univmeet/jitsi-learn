# Jitsi会议

## 创建本地轨道选项：ICreateLocalTrackOptions

```
# 接口
ICreateLocalTrackOptions
    cameraDeviceId
    devices
    firePermissionPromptIsShownEvent
    fireSlowPromiseEvent
    micDeviceId
    resolution
```

## Jitsi会议选项：IJitsiMeetJSOptions

```
# 接口
IJitsiMeetJSOptions
    enableAnalyticsLogging
    enableWindowOnErrorHandler
    externalStorage
    flags
        runInLiteMode
        ssrcRewritingEnabled
```

## Jitsi会议：JitsiMeetJS

```
# 全局常量
USER_MEDIA_SLOW_PROMISE_TIMEOUT

# 全局方法
getAnalyticsAttributesFromOptions

# 属性
JitsiMeetJS.version
JitsiMeetJS.JitsiConnection
JitsiMeetJS.ProxyConnectionService
JitsiMeetJS.logLevels
JitsiMeetJS.mediaDevices
JitsiMeetJS.analytics
JitsiMeetJS.precallTest

JitsiMeetJS.constants
JitsiMeetJS.constants.recording
JitsiMeetJS.constants.sipVideoGW
JitsiMeetJS.constants.transcriptionStatus
JitsiMeetJS.constants.trackStreamingStatus

JitsiMeetJS.events
JitsiMeetJS.events.conference
JitsiMeetJS.events.connection
JitsiMeetJS.events.detection
JitsiMeetJS.events.track
JitsiMeetJS.events.mediaDevices
JitsiMeetJS.events.connectionQuality
JitsiMeetJS.events.e2eping

JitsiMeetJS.errors
JitsiMeetJS.errors.conference
JitsiMeetJS.errors.connection
JitsiMeetJS.errors.track

JitsiMeetJS.errorTypes
JitsiMeetJS.errorTypes.JitsiTrackError

JitsiMeetJS.util
JitsiMeetJS.util.AuthUtil
JitsiMeetJS.util.ScriptUtil
JitsiMeetJS.util.browser

# 方法
JitsiMeetJS.init
JitsiMeetJS.enumerateDevices

JitsiMeetJS.addGlobalLogTransport
JitsiMeetJS.removeGlobalLogTransport

JitsiMeetJS.createLocalTracks
JitsiMeetJS.createTrackVADEmitter
JitsiMeetJS.createAudioMixer

JitsiMeetJS.isDesktopSharingEnabled
JitsiMeetJS.isWebRtcSupported
JitsiMeetJS.isDeviceListAvailable
JitsiMeetJS.isDeviceChangeAvailable
JitsiMeetJS.isMultipleAudioInputSupported
JitsiMeetJS.isCollectingLocalStats

JitsiMeetJS.getActiveAudioDevice
JitsiMeetJS.getGlobalOnErrorHandler

JitsiMeetJS.setLogLevel
JitsiMeetJS.setLogLevelById
JitsiMeetJS.setGlobalLogOptions
JitsiMeetJS.setNetworkInfo
JitsiMeetJS.setVideoTrackContentHints
```
