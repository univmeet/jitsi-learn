# Strophe

## Strophe

```
# 变量常量
lastErrorStatus
lastErrorStatusRegExpr
resetLastErrorStatusRegExpr

# 类
Strophe
    log
    getStatusString
    getLastErrorStatus
```

## 最后请求跟踪器：LastRequestTracker

```
# 类
LastRequestTracker
    constructor
    startTracking
    getLastFailedMessage
    getTimeSinceLastSuccess
```

## Strophe日志记录器：StropheLogger

```
# 类
StropheLogger
    constructor
    init
    logIncoming
    logOutgoing
```

## Ping连接插件：PingConnectionPlugin

```
# 常量
PING_DEFAULT_INTERVAL
PING_DEFAULT_TIMEOUT
PING_DEFAULT_THRESHOLD

# 类
PingConnectionPlugin
    constructor
    init
    ping
    startInterval
    stopInterval
    getPingSuspendTime
    _addPingExecutionTimestamp
```

## Jingle连接插件：JingleConnectionPlugin

```
# 方法
_parseIceCandidates

# 类
JingleConnectionPlugin
    constructor
    init
    newP2PJingleSession
    terminate
    onJingle
    onReceiveStunAndTurnCredentials
    getStunAndTurnCredentials
    getLog
```

## MUC连接插件：MucConnectionPlugin

```
# 类
MucConnectionPlugin
    constructor
    init
    createRoom
    isRoomCreated
    doLeave
    onPresence
    onPresenceUnavailable
    onPresenceError
    onMessage
    onMute
    onMuteVideo
    onVisitors
```

## Rayo连接插件：RayoConnectionPlugin

```
# 常量
RAYO_XMLNS

# 类
RayoConnectionPlugin
    init
    dial
    hangup
    onRayo
```
