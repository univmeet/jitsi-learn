# Jitsi媒体设备

## Jitsi媒体设备：JitsiMediaDevices

```
# 常量
PERMISSION_GRANTED_STATUS
AUDIO_PERMISSION_NAME
VIDEO_PERMISSION_NAME

# 类
JitsiMediaDevices
    constructor

    enumerateDevices
    emitEvent
    addEventListener
    removeEventListener
    isDeviceListAvailable
    isDeviceChangeAvailable
    isDevicePermissionGranted
    isMultipleAudioInputSupported
    getAudioOutputDevice
    setAudioOutputDevice

    _parsePermissionState
    _handlePermissionsChange
    _logOutputDevice
```

## Jitsi媒体设备事件：JitsiMediaDevicesEvents

```
# 常量
DEVICE_LIST_CHANGED
PERMISSIONS_CHANGED
PERMISSION_PROMPT_IS_SHOWN
SLOW_GET_USER_MEDIA

# 枚举
JitsiMediaDevicesEvents
    DEVICE_LIST_CHANGED
    PERMISSIONS_CHANGED
    PERMISSION_PROMPT_IS_SHOWN
    SLOW_GET_USER_MEDIA
```
