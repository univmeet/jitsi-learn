# Jitsi连接

## Jitsi连接：JitsiConnection

```
JitsiConnection
    appID
    token
    options
    xmpp

    attach
    connect
    disconnect
    initJitsiConference
    addEventListener
    removeEventListener
    addFeature
    removeFeature
    getJid
    getConnectionTimes
    getLogs
    setToken
```

## Jitsi连接事件：JitsiConnectionEvents

```
# 常量
CONNECTION_ESTABLISHED
CONNECTION_DISCONNECTED
CONNECTION_FAILED
WRONG_STATE
DISPLAY_NAME_REQUIRED

# 枚举
JitsiConnectionEvents
    CONNECTION_ESTABLISHED
    CONNECTION_DISCONNECTED
    CONNECTION_FAILED
    WRONG_STATE
    DISPLAY_NAME_REQUIRED
```

## Jitsi连接错误：JitsiConnectionErrors

```
# 常量
CONNECTION_DROPPED_ERROR
PASSWORD_REQUIRED
SERVER_ERROR
OTHER_ERROR

# 枚举
JitsiConnectionErrors
    CONNECTION_DROPPED_ERROR
    PASSWORD_REQUIRED
    SERVER_ERROR
    OTHER_ERROR
```
