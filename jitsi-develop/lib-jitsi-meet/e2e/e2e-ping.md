# 端对端Ping

## 端对端Ping事件：E2ePingEvents

```
# 常量
E2E_RTT_CHANGED

# 枚举
E2ePingEvents
    E2E_RTT_CHANGED
```

## 端对端Ping：E2ePing

```
# 常量
E2E_PING_REQUEST
E2E_PING_RESPONSE
DEFAULT_NUM_REQUESTS
DEFAULT_MAX_MESSAGES_PER_SECOND
DEFAULT_MAX_CONFERENCE_SIZE

# 类
E2ePing
    constructor
    conferenceJoined
    messageReceived
    participantJoined
    participantLeft
    removeParticipant
    handleRequest
    handleResponse
    stop
```

## 参与者包装器：ParticipantWrapper

```
# 类
ParticipantWrapper
    constructor
    scheduleNext
    stop
    sendRequest
    handleResponse
    maybeLogRttAndStop
    getDelay
```
