# ice4j

## BaseStunMessageEvent

事件对象，通知STUN信息。

```
+ org.ice4j.BaseStunMessageEvent.java
  + org.ice4j.StunFailureEvent.java
  + org.ice4j.StunTimeoutEvent.java
  + org.ice4j.StunMessageEvent.java
    + org.ice4j.StunResponseEvent.java

public BaseStunMessageEvent(StunStack stunStack, TransportAddress sourceAddress, Message message)

public StunStack getStunStack()
public Message getMessage()
public TransactionID getTransactionID()
```

## PeerUdpMessageEvent

事件对象，处理输入的UDP对等点信息。

```
+ org.ice4j.PeerUdpMessageEvent.java

public PeerUdpMessageEvent(StunStack stunStack, RawMessage udpMessage)

public StunStack getStunStack()
public TransportAddress getRemoteAddress()
public TransportAddress getLocalAddress()
public int getMessageLength()
public byte[] getBytes()
```

## ChannelDataMessageEvent

事件对象，处理输入的ChannelData信息。

```
+ org.ice4j.ChannelDataMessageEvent.java

public ChannelDataMessageEvent(StunStack stunStack, TransportAddress remoteAddress, TransportAddress localAddress, ChannelData channelDataMessage)

public StunStack getStunStack()
public TransportAddress getRemoteAddress()
public TransportAddress getLocalAddress()
public ChannelData getChannelDataMessage()
```

## ResponseCollector

发送请求时的回调接口，用于处理响应。

```
+ org.ice4j.ResponseCollector.java
  + org.ice4j.AbstractResponseCollector.java
    + org.ice4j.stunclient.BlockingRequestSender.java
    + org.ice4j.ice.harvest.StunCandidateHarvest.java
      + org.ice4j.ice.harvest.TurnCandidateHarvest.java
      + org.ice4j.ice.harvest.GoogleTurnCandidateHarvest.java
  + org.ice4j.socket.GoogleRelayedCandidateDelegate.java
  + org.ice4j.ice.ConnectivityCheckClient.java

public void processResponse(StunResponseEvent event);
public void processTimeout(StunTimeoutEvent event);
```

## StunException

发生STUN异常时抛出的异常。

```
+ org.ice4j.StunException.java

public static final int UNKNOWN_ERROR = 0;
public static final int ILLEGAL_STATE = 1;
public static final int ILLEGAL_ARGUMENT = 2;
public static final int INTERNAL_ERROR = 3;
public static final int TRANSACTION_DOES_NOT_EXIST = 3;
public static final int NETWORK_ERROR = 4;
public static final int TRANSACTION_ALREADY_ANSWERED = 5;

public StunException()
public StunException(int id)
public StunException(int id, String message)
public StunException(int id, String message, Throwable cause)
public StunException(String message)
public StunException(String message, Throwable cause)
public StunException(Throwable cause)

public int getID()
public void setID(int id)
```

## StackProperties

配置ice4j行为的属性及其默认值。

```
+ org.ice4j.StackProperties.java

public static final int BIND_RETRIES_DEFAULT_VALUE = 50;
public static final String BIND_RETRIES = "org.ice4j.BIND_RETRIES";
public static final String BIND_WILDCARD = "org.ice4j.BIND_WILDCARD";
public static final String FIRST_CTRAN_RETRANS_AFTER = "org.ice4j.FIRST_CTRAN_RETRANS_AFTER";
public static final String MAX_CTRAN_RETRANS_TIMER = "org.ice4j.MAX_CTRAN_RETRANS_TIMER";
public static final String KEEP_CRANS_AFTER_A_RESPONSE = "org.ice4j.KEEP_CRANS_AFTER_A_RESPONSE";
public static final String MAX_CTRAN_RETRANSMISSIONS = "org.ice4j.MAX_RETRANSMISSIONS";
public static final String PROPAGATE_RECEIVED_RETRANSMISSIONS = "org.ice4j.PROPAGATE_RECEIVED_RETRANSMISSIONS";
public static final String ALLOW_LINK_TO_GLOBAL_REACHABILITY = "org.ice4j.ALLOW_LINK_TO_GLOBAL_REACHABILITY";
public static final String ALWAYS_SIGN = "org.ice4j.ALWAYS_SIGN";
public static final String REQUIRE_MESSAGE_INTEGRITY = "org.ice4j.REQUIRE_MESSAGE_INTEGRITY";
public static final String NO_KEEP_ALIVES = "org.ice4j.NO_KEEP_ALIVES";
public static final String NOMINATION_TIMER = "org.ice4j.NOMINATION_TIMER";
public static final String ALLOWED_INTERFACES = "org.ice4j.ice.harvest.ALLOWED_INTERFACES";
public static final String BLOCKED_INTERFACES = "org.ice4j.ice.harvest.BLOCKED_INTERFACES";
public static final String ALLOWED_ADDRESSES = "org.ice4j.ice.harvest.ALLOWED_ADDRESSES";
public static final String BLOCKED_ADDRESSES = "org.ice4j.ice.harvest.BLOCKED_ADDRESSES";

public static String getString(String propertyName)
public static String[] getStringArray(String propertyName, String regex)
public static int getInt(String propertyName, int defaultValue)
public static boolean getBoolean(String propertyName, boolean defaultValue)
```

## Transport

当前已知的所有传输方式，可能与ICE进行交互，但是不一定支持。

```
+ org.ice4j.Transport.java

TCP("tcp"),
UDP("udp"),
TLS("tls"),
DTLS("dtls"),
SCTP("sctp"),
SSLTCP("ssltcp");

public static Transport parse(String transportName)
```

## TransportAddress

STUN数据包的输出目标地址。

```
+ org.ice4j.TransportAddress.java

public TransportAddress(String hostname, int port, Transport transport)
public TransportAddress(byte[] ipAddress, int port, Transport transport)
public TransportAddress(InetSocketAddress address, Transport transport)
public TransportAddress(InetAddress address, int port, Transport transport)

public String getHostAddress()
public byte[] getAddressBytes()
public Transport getTransport()
public boolean isIPv6()
public boolean canReach(TransportAddress dst)
```
