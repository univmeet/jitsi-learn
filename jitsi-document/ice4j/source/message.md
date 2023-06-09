# 信息

## Message

STUN信息，信息大端模式（网络顺序的）二进制编码为TLV（类型、长度、值）。

大端模式：数据的高字节保存在内存的低地址中，数据的低字节保存在内存的高地址中。小端模式：数据的高字节保存在内存的高地址中，数据的低字节保存在内存的低地址中。

所有STUN信息的开头都是STUN头，后面是STUN负载。负载为一些列STUN属性，STUN属性的集合取决于信息类型。STUN头包含STUN信息类型、事物ID和长度。

```
+ org.ice4j.message.Message.java
  + org.ice4j.message.Request.java
  + org.ice4j.message.Response.java
  + org.ice4j.message.Indication.java

public static final char STUN_REQUEST = 0x0000;
public static final char STUN_INDICATION = 0x0010;
public static final char STUN_SUCCESS_RESP = 0x0100;
public static final char STUN_ERROR_RESP = 0x0110;

STUN方法：
public static final char STUN_METHOD_BINDING = 0x0001;
public static final char BINDING_REQUEST = (STUN_METHOD_BINDING | STUN_REQUEST);
public static final char BINDING_SUCCESS_RESPONSE = (STUN_METHOD_BINDING | STUN_SUCCESS_RESP);
public static final char BINDING_ERROR_RESPONSE = (STUN_METHOD_BINDING | STUN_ERROR_RESP);
public static final char BINDING_INDICATION = (STUN_METHOD_BINDING | STUN_INDICATION);
public static final char SHARED_SECRET_REQUEST = 0x0002;
public static final char SHARED_SECRET_RESPONSE = 0x0102;
public static final char SHARED_SECRET_ERROR_RESPONSE = 0x0112;

TURN方法：
public static final char TURN_METHOD_ALLOCATE = 0x0003;
public static final char TURN_METHOD_REFRESH = 0x0004;
public static final char TURN_METHOD_SEND = 0x0006;
public static final char TURN_METHOD_DATA = 0x0007;
public static final char TURN_METHOD_CREATEPERMISSION = 0x0008;
public static final char TURN_METHOD_CHANNELBIND = 0x0009;
public static final char TURN_METHOD_CONNECT = 0X000a;
public static final char TURN_METHOD_CONNECTION_BIND = 0X000b;
public static final char TURN_METHOD_CONNECTION_ATTEMPT = 0X000c;
public static final char ALLOCATE_REQUEST = (TURN_METHOD_ALLOCATE | STUN_REQUEST);
public static final char ALLOCATE_RESPONSE = (TURN_METHOD_ALLOCATE | STUN_SUCCESS_RESP);
public static final char ALLOCATE_ERROR_RESPONSE = (TURN_METHOD_ALLOCATE | STUN_ERROR_RESP);
public static final char REFRESH_REQUEST = (TURN_METHOD_REFRESH | STUN_REQUEST);
public static final char ALLOCATE_REFRESH_REQUEST = (TURN_METHOD_ALLOCATE | REFRESH_REQUEST);
public static final char REFRESH_RESPONSE = (TURN_METHOD_REFRESH | STUN_SUCCESS_RESP);
public static final char REFRESH_ERROR_RESPONSE = (TURN_METHOD_REFRESH | STUN_ERROR_RESP);
public static final char CHANNELBIND_REQUEST = (TURN_METHOD_CHANNELBIND | STUN_REQUEST);
public static final char CHANNELBIND_RESPONSE = (TURN_METHOD_CHANNELBIND | STUN_SUCCESS_RESP);
public static final char CHANNELBIND_ERROR_RESPONSE = (TURN_METHOD_CHANNELBIND | STUN_ERROR_RESP);
public static final char CREATEPERMISSION_REQUEST = (TURN_METHOD_CREATEPERMISSION | STUN_REQUEST);
public static final char CREATEPERMISSION_RESPONSE = (TURN_METHOD_CREATEPERMISSION | STUN_SUCCESS_RESP);
public static final char CREATEPERMISSION_ERROR_RESPONSE = (TURN_METHOD_CREATEPERMISSION | STUN_ERROR_RESP);
public static final char SEND_INDICATION = (TURN_METHOD_SEND | STUN_INDICATION);
public static final char DATA_INDICATION = (TURN_METHOD_DATA | STUN_INDICATION);
public static final char CONNECT_REQUEST = (TURN_METHOD_CONNECT | STUN_REQUEST);
public static final char CONNECT_RESPONSE = (TURN_METHOD_CONNECT | STUN_SUCCESS_RESP);
public static final char CONNECT_ERROR_RESPONSE = (TURN_METHOD_CONNECT | STUN_ERROR_RESP);
public static final char CONNECTION_BIND_REQUEST = (TURN_METHOD_CONNECTION_BIND | STUN_REQUEST);
public static final char CONNECTION_BIND_SUCCESS_RESPONSE = (TURN_METHOD_CONNECTION_BIND | STUN_SUCCESS_RESP);
public static final char CONNECTION_BIND_ERROR_RESPONSE = (TURN_METHOD_CONNECTION_BIND | STUN_ERROR_RESP);
public static final char CONNECTION_ATTEMPT_INDICATION = (TURN_METHOD_CONNECTION_ATTEMPT | STUN_INDICATION);

旧的TURN方法：
public static final char SEND_REQUEST = 0x0004;
public static final char OLD_DATA_INDICATION = 0x0115;

信息字段：
public static final byte HEADER_LENGTH = 20;
public static final byte[] MAGIC_COOKIE = { 0x21, 0x12, (byte)0xA4, 0x42 };
public static final byte TRANSACTION_ID_LENGTH = 12;
public static final byte RFC3489_TRANSACTION_ID_LENGTH = 16;
public static final byte O = 2;
public static final byte M = 3;

public char getDataLength()
public char getDataLengthWithoutPadding()

public Attribute getAttribute(char attributeType)
public List<Attribute> getAttributes()
public int getAttributeCount()
public boolean containsAttribute(char attributeType)
public void putAttribute(Attribute attribute) throws IllegalArgumentException
public Attribute removeAttribute(char attributeType)

public String getName()
public char getMessageType()
public byte[] getTransactionID()
public void setTransactionID(byte[] tranID) throws StunException

public static boolean isErrorResponseType(char type)
public static boolean isSuccessResponseType(char type)
public static boolean isResponseType(char type)
public static boolean isIndicationType(char type)
public static boolean isRequestType(char type)

public byte[] encode(StunStack stunStack) throws IllegalStateException
public static Message decode(byte[] binMessage, int offset, int arrayLen) throws StunException
```

## ChannelData

客户端把通道绑定到对等点之后，在TURN协议中使用的信息。

```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|         Channel Number        |            Length             |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
|                       Application Data                        |
|                                                               |
|                                                               |
|                               +-------------------------------+
|                               |
+-------------------------------+
```

```
+ org.ice4j.message.ChannelData.java

public static char HEADER_LENGTH = 4;

public ChannelData()

public char getChannelNumber()
public void setChannelNumber(char channelNumber)

public byte[] getData()
public void setData(byte data[])

public char getDataLength()
public static boolean isChannelDataMessage(byte[] binMessage)

public byte[] encode() throws StunException
public byte[] encode(boolean pad) throws StunException

public static ChannelData decode(byte binMessage[], char offset) throws StunException
public static ChannelData decode(byte binMessage[], char offset, char arrayLen) throws StunException
```

## MessageFactory

允许应用程序在特定实现中创建STUN和TURN信息的工厂方法。

```
+ org.ice4j.message.MessageFactory.java

public static Request createBindingRequest()
public static Request createBindingRequest(long priority) throws StunException
public static Request createBindingRequest(long priority, boolean controlling, long tieBreaker) throws StunException
public static Request createAllocateRequest()
public static Request createAllocateRequest(byte protocol, boolean rFlag)
public static Request createGoogleAllocateRequest(String username)
public static Request createRefreshRequest()
public static Request createRefreshRequest(int lifetime)
public static Request createChannelBindRequest(char channelNumber, TransportAddress peerAddress, byte[] tranID)
public static Request createCreatePermissionRequest(TransportAddress peerAddress, byte[] transactionID)
public static Request createSendRequest(String username, TransportAddress peerAddress, byte[] data)
public static Request createSharedSecretRequest()
public static Request createConnectRequest(TransportAddress peerAddress, Request request) throws IllegalArgumentException
public static Request createConnectRequest(TransportAddress peerAddress, byte[] transactionId) throws IllegalArgumentException
public static Request createConnectionBindRequest(int connectionIdValue) throws IllegalArgumentException

public static Response create3489BindingResponse(TransportAddress mappedAddress, TransportAddress sourceAddress, TransportAddress changedAddress) throws IllegalArgumentException
public static Response createBindingResponse(Request request, TransportAddress mappedAddress) throws IllegalArgumentException
public static Response createBindingErrorResponse(char errorCode, String reasonPhrase, char[] unknownAttributes) throws IllegalArgumentException
public static Response createBindingErrorResponseUnknownAttributes(char[] unknownAttributes) throws StunException
public static Response createBindingErrorResponseUnknownAttributes(String reasonPhrase, char[] unknownAttributes) throws StunException
public static Response createBindingErrorResponse(char errorCode, String reasonPhrase)
public static Response createBindingErrorResponse(char errorCode)
public static Response createAllocationResponse(Request request, TransportAddress mappedAddress, TransportAddress relayedAddress, int lifetime) throws IllegalArgumentException
public static Response createAllocationResponse(Request request, TransportAddress mappedAddress, TransportAddress relayedAddress, byte[] token, int lifetime) throws IllegalArgumentException
public static Response createAllocationErrorResponse(char errorCode)
public static Response createAllocationErrorResponse(char errorCode, String reasonPhrase)
public static Response createRefreshResponse(int lifetime)
public static Response createRefreshErrorResponse(char errorCode)
public static Response createRefreshErrorResponse(char errorCode, String reasonPhrase)
public static Response createChannelBindResponse()
public static Response createChannelBindErrorResponse(char errorCode)
public static Response createChannelBindErrorResponse(char errorCode, String reasonPhrase)
public static Response createCreatePermissionResponse()
public static Response createCreatePermissionErrorResponse(char errorCode)
public static Response createPermissionErrorResponse(char errorCode, String reasonPhrase)
public static Response createSharedSecretResponse()
public static Response createSharedSecretErrorResponse()
public static Response createConnectResponse(int connectionIdValue) throws IllegalArgumentException
public static Response createConnectErrorResponse(char errorCode) throws IllegalArgumentException
public static Response createConnectErrorResponse(char errorCode, String reasonPhrase) throws IllegalArgumentException
public static Response createConnectionBindResponse() throws IllegalArgumentException
public static Response createConnectionBindErrorResponse(char errorCode) throws IllegalArgumentException
public static Response createConnectionBindErrorResponse(char errorCode, String reasonPhrase) throws IllegalArgumentException

public static Indication createBindingIndication()
public static Indication createSendIndication(TransportAddress peerAddress, byte[] data, byte[] tranID)
public static Indication createDataIndication(TransportAddress peerAddress, byte[] data, byte[] tranID)
public static Indication createConnectionAttemptIndication(int connectionIdValue, TransportAddress peerAddress) throws IllegalArgumentException
public static Indication createConnectionAttemptIndication(int connectionIdValue, TransportAddress peerAddress, byte[] transactionId) throws IllegalArgumentException, StunException

public static void addLongTermCredentialAttributes(Request request, byte username[], byte realm[], byte nonce[]) throws StunException
```
