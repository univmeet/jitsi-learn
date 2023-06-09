# 多用户聊天

## ChatRoom

```
org.jitsi.jicofo.xmpp.muc.ChatRoom.kt

# 对Smack MultiUserChat进行包装，用于jicofo。
public interface ChatRoom

# XMPP供应商
public abstract val xmppProvider: XmppProvider

# 聊天室的JID
public abstract val roomJid: EntityBareJid

# 本地用户当前是否处于多用户聊天中（调用一个join方法之后）
public abstract val isJoined: Boolean

# ChatRoom中的成员列表。注意：这个列表中并未包含本地用户作为MUC占有者的表示。
public abstract val members: List<ChatRoomMember>

# 成员数量，为提高性能而暴露（只要获取数量时，避免创建新的List）
public abstract val memberCount: Int

# 角色为访问者（VISITOR）的成员数量，为提高性能而暴露（只要获取数量时，避免创建新的List）
public abstract val visitorCount: Int

# ChatRoom是否是分组聊天室
public abstract val isBreakoutRoom: Boolean

# 如果ChatRoom是分组聊天室，则mainRoom为ChatRoom关联的主聊天室的JID，否则为null
public abstract val mainRoom: String?

# 与聊天室关联的唯一会议ID（MUC服务设置的）
public abstract val meetingId: String?

# 调试状态
public abstract val debugState: OrderedJsonObject

# 当前音频源未静音的成员数量
public abstract var audioSendersCount: Int

# 当前视频源未静音的成员数量
public abstract var videoSendersCount: Int

# 使用预配置的昵称加入聊天室
@Throws(SmackException::class, XMPPException::class, InterruptedException::class)
public abstract fun join(meetingIdToSet: String? = null): Unit

# 离开聊天室
public abstract fun leave(): Unit

# 把所有者权限授予另一个用户。聊天室所有者可以授予所有者权限。
# 有些聊天室的实现不允许把所有者权限授予其他用户。
# 所有者可以修改聊天室的功能定义，以及执行所有管理功能。
#
# 参数：
# 1. member：授予所有者权限的成员
public abstract fun grantOwnership(member: ChatRoomMember): Unit

# 根据MUC占有者的JID获取ChatRoomMember
#
# 参数：
# 1. occupantJid：要查找的聊天室成员实例的用户的完整的MUC JID，例如：chatroom1@muc.server.com/nick1234
public abstract fun getChatMember(occupantJid: EntityFullJid): ChatRoomMember?

# 添加状态扩展集合
public abstract fun addPresenceExtensions(extensions: Collection<ExtensionElement>): Unit

# 添加状态扩展，如果已经存在相同QName的扩展，则不做任何操作。
public abstract fun addPresenceExtensionIfMissing(extension: ExtensionElement): Unit

# 删除与断言pred匹配的状态扩展
public abstract fun removePresenceExtensions(pred: (ExtensionElement) -> Boolean): Unit

# 设置状态扩展：删除之前所有相同QName的扩展，添加状态扩展。
# 注意：这个方法总是会发送状态的stanza。如果目的只是在扩展修改时发送数据包，则使用addPresenceExtensionIfMissing。
public abstract fun setPresenceExtension(extension: ExtensionElement): Unit

# 把ChatRoomListener添加到ChatRoom事件通知的监听器列表中。
public abstract fun addListener(listener: ChatRoomListener): Unit

# 从ChatRoom事件通知的监听器列表中删除ChatRoomListener。
public abstract fun removeListener(listener: ChatRoomListener): Unit

# 删除所有ChatRoomListener。
public abstract fun removeAllListeners(): Unit

# 指定媒体类型（音频或视频）是否启用A/V节制。
public abstract fun isAvModerationEnabled(mediaType: MediaType): Boolean

# 为指定媒体类型启用或禁用a/v节制。
public abstract fun setAvModerationEnabled(mediaType: MediaType, value: Boolean): Unit

# 更新允许取消音频或视频静音的成员列表。
public abstract fun setAvModerationWhitelist(mediaType: MediaType, whitelist: List<String>): Unit

# 当前A/V节制设置是否允许指定JID的成员取消静音（对于特定媒体类型）。
public abstract fun isMemberAllowedToUnmute(jid: Jid, mediaType: MediaType): Boolean
```

## ChatRoomImpl

```
org.jitsi.jicofo.xmpp.muc.ChatRoomImpl.kt

# 聊天室的实现
public final class ChatRoomImpl: ChatRoom, PresenceListener

# 构造函数
ChatRoomImpl(xmppProvider: XmppProvider, roomJid: EntityBareJid, leaveCallback: (ChatRoomImpl) -> Unit)

# 获取聊天室占有者
public final fun getOccupant(chatMember: ChatRoomMemberImpl): Occupant?

# 根据指定占有者的JID，获取聊天室占有者的实际JID。
#
# 参数：
# 1. occupantJid：占有者的JID。
#
# 返回：
# 占有者的实际JID或null。
public final fun getJid(occupantJid: EntityFullJid): Jid?

# 处理输出的状态数据包。
#
# 参数：
# 1. presence：输出的状态。
public open fun processPresence(presence: Presence?): Unit
```

## ChatRoomMember

```
org.jitsi.jicofo.xmpp.muc.ChatRoomMember.kt

# 聊天室参与者，通过ChatRoom接口的实现来获取实例，提供了查询成员属性的方法，例如：节制权限、关联的聊天室及其他。
public interface ChatRoomMember

public abstract val chatRoom: ChatRoom
public abstract val name: String
public abstract val role: MemberRole
public abstract val jid: Jid?
public abstract val sourceInfos: Set<SourceInfo>
public abstract val occupantJid: EntityFullJid
public abstract val presence: Presence?
public abstract val isRobot: Boolean
public abstract val isJigasi: Boolean
public abstract val isTranscriber: Boolean
public abstract val isJibri: Boolean
public abstract val isAudioMuted: Boolean
public abstract val isVideoMuted: Boolean
public abstract val region: String?
public abstract val statsId: String?
public abstract val features: Set<Features>
public abstract val debugState: OrderedJsonObject
```

## ChatRoomMemberImpl

```
org.jitsi.jicofo.xmpp.muc.ChatRoomMemberImpl.kt

public final class ChatRoomMemberImpl: ChatRoomMember

ChatRoomMemberImpl(occupantJid: EntityFullJid, chatRoom: ChatRoomImpl, parentLogger: Logger)
public final fun processPresence(presence: Presence): Unit
public open fun toString(): String
```

# ChatRoomListener

```
org.jitsi.jicofo.xmpp.muc.ChatRoomListener.kt

# ChatRoom触发事件的监听器
public interface ChatRoomListener

# 聊天室成员加入
public open fun memberJoined(member: ChatRoomMember): Unit

# 聊天室成员踢除
public open fun memberKicked(member: ChatRoomMember): Unit

# 聊天室成员离开
public open fun memberLeft(member: ChatRoomMember): Unit

# 聊天室成员状态发生改变
public open fun memberPresenceChanged(member: ChatRoomMember): Unit

# 聊天室销毁
public open fun roomDestroyed(reason: String? = null): Unit

# 静音状态发生改变
public open fun startMutedChanged(startAudioMuted: Boolean, startVideoMuted: Boolean): Unit

# 本地角色发生改变
public open fun localRoleChanged(newRole: MemberRole): Unit

# 音频发送方发生改变
public open fun numAudioSendersChanged(numAudioSenders: Int): Unit

# 视频发送方发生改变
public open fun numVideoSendersChanged(numVideoSenders: Int): Unit

# 默认的ChatRoom事件监听器实现（避免使用@JvmDefault）。
public open class DefaultChatRoomListener: ChatRoomListener
```

## MemberRole

```
org.jitsi.jicofo.xmpp.muc.MemberRole.kt

# 聊天室成员在其所属聊天室中的角色。
public final enum class MemberRole

# 枚举常量序数：0，所有者：具有所有的权限。
enum entry OWNER

# 枚举常量序数：1，管理员：具有管理员权限。
enum entry ADMINISTRATOR

# 枚举常量序数：2，主持人：具有主持人权限。
enum entry MODERATOR

# 枚举常量序数：3，参与者：具有发送的权限。
enum entry PARTICIPANT

# 枚举常量序数：4，访问者：只有观看的权限。
enum entry VISITOR

# 从MUCAffiliation或MUCRole中解析成员角色
public final fun fromSmack(mucRole: MUCRole?, mucAffiliation: MUCAffiliation?): MemberRole

# 是否具有主持人权限
public fun MemberRole?.hasModeratorRights(): Boolean

# 是否具有管理员权限
public fun MemberRole?.hasAdministratorRights(): Boolean

# 是否具有所有者权限
public fun MemberRole?.hasOwnerRights(): Boolean
```

## SourceInfo

```
org.jitsi.jicofo.xmpp.muc.SourceInfo.kt

# jitsi-meet SourceInfo扩展中包含的源的相关信息。
public final data class SourceInfo(name: String, muted: Boolean, videoType: VideoType?)

# 把SourceInfo XML扩展中JSON编码的字符串解析为SourceInfo集合。
#
# 异常：
# 1. ParseException：字符串不是有效JSON。
# 2. IllegalArgumentException：JSON不是期望格式。
public fun parseSourceInfoJson(s: String): Set<SourceInfo>
```
