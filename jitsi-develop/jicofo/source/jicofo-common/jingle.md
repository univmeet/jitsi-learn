# Jingle

## JingleIqRequestHandler

```
org.jitsi.jicofo.xmpp.jingle.JingleIqRequestHandler.kt

# JingleSession的弱映射，把输入的Jingle IQ路由到关联的会话
public final class JingleIqRequestHandler: AbstractIqHandler<JingleIQ>

# 处理请求
public open fun handleRequest(request: IqRequest<JingleIQ>): IqProcessingResult

# 注册会话
public final fun registerSession(session: JingleSession): Unit

# 删除会话
public final fun removeSession(session: JingleSession): Unit
```

## JingleRequestHandler

```
org.jitsi.jicofo.xmpp.jingle.JingleRequestHandler.kt

# 会话期间接收到Jingle请求时通知的监听器类。
public interface JingleRequestHandler

# 接收到'source-add' IQ
public open fun onAddSource(jingleSession: JingleSession, contents: List<ContentPacketExtension>): StanzaError?

# 接收到'source-remove' IQ
public open fun onRemoveSource(jingleSession: JingleSession, contents: List<ContentPacketExtension>): StanzaError?

# 接收到'session-accept' IQ
public open fun onSessionAccept(jingleSession: JingleSession, contents: List<ContentPacketExtension>): StanzaError?

# 接收到'session-info' IQ
public open fun onSessionInfo(jingleSession: JingleSession, iq: JingleIQ): StanzaError?

# 接收到'session-terminate' IQ
public open fun onSessionTerminate(jingleSession: JingleSession, iq: JingleIQ): StanzaError?

# 接收到'transport-info' IQ
public open fun onTransportInfo(jingleSession: JingleSession, contents: List<ContentPacketExtension>): StanzaError?

# 接收到'transport-accept' IQ
public open fun onTransportAccept(jingleSession: JingleSession, contents: List<ContentPacketExtension>): StanzaError?

# 接收到'transport-reject' IQ
public open fun onTransportReject(jingleSession: JingleSession, iq: JingleIQ): Unit

# 导出默认实现，以便可以在Java中使用，不需要-Xjvm-default
public final class NoOpJingleRequestHandler: JingleRequestHandler
```

## JingleSession

```
org.jitsi.jicofo.xmpp.jingle.JingleSession.kt













```








## JingleStats

```
org.jitsi.jicofo.xmpp.jingle.JingleStats.kt

public final class JingleStats

public final class JingleStats.Companion

public final fun stanzaSent(action: JingleAction): Unit
public final fun stanzaReceived(action: JingleAction): Unit
public final fun toJson(): JSONObject
```
