# 浏览器

## 浏览器兼容性：BrowserCapabilities

```
# 常量
MIN_REQUIRED_CHROME_VERSION
MIN_REQUIRED_SAFARI_VERSION
MIN_REQUIRED_IOS_VERSION

# 类
BrowserCapabilities
    constructor

    doesVideoMuteByStreamRemove
    usesSdpMungingForSimulcast
    usesRidsForSimulcast

    isChromiumBased
    isIosBrowser
    isWebKitBased
    isTwa
    isSupported
    isSupportedAndroidBrowser
    isSupportedIOSBrowser
    isUserInteractionRequiredForUnmute

    supportsVideoMuteOnConnInterrupted
    supportsBandwidthStatistics
    supportsCodecPreferences
    supportsDeviceChangeEvent
    supportsPerformanceObserver
    supportsReceiverStats
    supportsRTTStatistics
    supportsTrackBasedStats
    supportsVP9
    supportsGetDisplayMedia
    supportsEncodedTransform
    supportsInsertableStreams
    supportsAudioRed
    supportsUnifiedPlan
    supportsVADDetection
    supportsRTX

    _getChromiumBasedVersion
    _getSafariVersion
    _getIOSVersion
```
