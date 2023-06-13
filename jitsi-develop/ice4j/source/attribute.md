# 属性

## Attribute

头部后面的属性，存在0个或多个。每个属性的编码为TLV：16位的类型，16位的长度，可变的值：

```
 0                   1                   2                   3   
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|         Type                  |            Length             |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                             Value                             |
|                             ....                              |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

已经定义的类型：

```
STUN属性：
    0x0001: MAPPED-ADDRESS
    0x0002: RESPONSE-ADDRESS
    0x0003: CHANGE-REQUEST
    0x0004: SOURCE-ADDRESS
    0x0005: CHANGED-ADDRESS
    0x0006: USERNAME
    0x0007: PASSWORD
    0x0008: MESSAGE-INTEGRITY
    0x0009: ERROR-CODE
    0x000a: UNKNOWN-ATTRIBUTES
    0x000b: REFLECTED-FROM
    0x0014: REALM
    0x0015: NONCE
    0x0020: XOR-MAPPED-ADDRESS
    0x8022: SOFTWARE
    0x8023: ALTERNATE-SERVER
    0x8028: FINGERPRINT

TURN属性：
    0x000C: CHANNEL-NUMBER
    0x000D: LIFETIME
    0x0012: XOR-PEER-ADDRESS
    0x0013: DATA
    0x0016: XOR-RELAYED-ADDRESS
    0x0018: EVEN-PORT
    0x0019: REQUESTED-TRANSPORT
    0x001A: DONT-FRAGMENT
    0x0022: RESERVATION-TOKEN

ICE属性：
    0x0024: PRIORITY
    0x0025: USE-CANDIDATE
    0x8029: ICE-CONTROLLED
    0x802A: ICE-CONTROLLING
```

继承体系：

```
+ org.ice4j.attribute.Attribute.java
  + org.ice4j.attribute.EvenPortAttribute.java
  + org.ice4j.attribute.RequestedTransportAttribute.java
  + org.ice4j.attribute.DataAttribute.java
  + org.ice4j.attribute.SoftwareAttribute.java
  + org.ice4j.attribute.FingerprintAttribute.java
  + org.ice4j.attribute.ReservationTokenAttribute.java
  + org.ice4j.attribute.UsernameAttribute.java
  + org.ice4j.attribute.ChangeRequestAttribute.java
  + org.ice4j.attribute.PriorityAttribute.java
  + org.ice4j.attribute.XorOnlyAttribute.java
  + org.ice4j.attribute.OptionalAttribute.java
  + org.ice4j.attribute.MagicCookieAttribute.java
  + org.ice4j.attribute.ChannelNumberAttribute.java
  + org.ice4j.attribute.ConnectionIdAttribute.java
  + org.ice4j.attribute.RequestedAddressFamilyAttribute.java
  + org.ice4j.attribute.MessageIntegrityAttribute.java
  + org.ice4j.attribute.AddressAttribute.java
    + org.ice4j.attribute.ReflectedFromAttribute.java
    + org.ice4j.attribute.ChangedAddressAttribute.java
    + org.ice4j.attribute.DestinationAddressAttribute.java
    + org.ice4j.attribute.ResponseAddressAttribute.java
    + org.ice4j.attribute.MappedAddressAttribute.java
    + org.ice4j.attribute.AlternateServerAttribute.java
    + org.ice4j.attribute.SourceAddressAttribute.java
    + org.ice4j.attribute.RemoteAddressAttribute.java
    + org.ice4j.attribute.XorMappedAddressAttribute.java
      + org.ice4j.attribute.XorRelayedAddressAttribute.java
      + org.ice4j.attribute.XorPeerAddressAttribute.java
  + org.ice4j.attribute.DontFragmentAttribute.java
  + org.ice4j.attribute.LifetimeAttribute.java
  + org.ice4j.attribute.UseCandidateAttribute.java
  + org.ice4j.attribute.IceControlAttribute.java
    + org.ice4j.attribute.IceControlledAttribute.java
    + org.ice4j.attribute.IceControllingAttribute.java
  + org.ice4j.attribute.NonceAttribute.java
  + org.ice4j.attribute.UnknownAttributesAttribute.java
  + org.ice4j.attribute.RealmAttribute.java
  + org.ice4j.attribute.ErrorCodeAttribute.java

STUN属性：
public static final char MAPPED_ADDRESS = 0x0001;
public static final char RESPONSE_ADDRESS = 0x0002;
public static final char CHANGE_REQUEST = 0x0003;
public static final char SOURCE_ADDRESS = 0x0004;
public static final char CHANGED_ADDRESS = 0x0005;
public static final char USERNAME = 0x0006;
public static final char PASSWORD = 0x0007;
public static final char MESSAGE_INTEGRITY = 0x0008;
public static final char ERROR_CODE = 0x0009;
public static final char UNKNOWN_ATTRIBUTES = 0x000a;
public static final char REFLECTED_FROM = 0x000b;
public static final char REALM = 0x0014;
public static final char NONCE = 0x0015;
public static final char XOR_MAPPED_ADDRESS = 0x0020;
public static final char XOR_ONLY = 0x0021;
public static final char SOFTWARE = 0x8022;
public static final char ALTERNATE_SERVER = 0x8023;
public static final char FINGERPRINT = 0x8028;
public static final char UNKNOWN_OPTIONAL_ATTRIBUTE = 0x8000;

TURN属性：
public static final char CHANNEL_NUMBER = 0x000c;
public static final char LIFETIME = 0x000d;
public static final char XOR_PEER_ADDRESS = 0x0012;
public static final char DATA = 0x0013;
public static final char XOR_RELAYED_ADDRESS = 0x0016;
public static final char REQUESTED_ADDRESS_FAMILY = 0X0017;
public static final char EVEN_PORT = 0x0018;
public static final char REQUESTED_TRANSPORT = 0x0019;
public static final char DONT_FRAGMENT = 0x001a;
public static final char RESERVATION_TOKEN = 0x0022;
public static final char CONNECTION_ID = 0x002a;

旧的TURN属性：
public static final char MAGIC_COOKIE = 0x000f;
public static final char DESTINATION_ADDRESS = 0x0011;
public static final char REMOTE_ADDRESS = 0x0012;

ICE属性：
public static final char PRIORITY = 0x0024;
public static final char USE_CANDIDATE = 0x0025;
public static final char ICE_CONTROLLED = 0x8029;
public static final char ICE_CONTROLLING = 0x802a;

头部长度
public static final char HEADER_LENGTH = 4;

public abstract String getName();
public char getAttributeType()
public abstract char getDataLength();
public int getLocationInMessage()
public void setLocationInMessage(int index)
public abstract byte[] encode();
```

## ContentDependentAttribute

属性值取决于信息内容的属性。

应该使用`ContentDependentAttribute.encode()`方法对属性进行编码，而不是通过`Attribute.encode()`方法。

```
+ org.ice4j.attribute.ContentDependentAttribute.java
  + org.ice4j.attribute.MessageIntegrityAttribute.java
  + org.ice4j.attribute.FingerprintAttribute.java

public byte[] encode(StunStack stunStack, byte[] content, int offset, int length);
```

## AttributeFactory

创建STUN/TURN/ICE属性的工厂方法。

```
+ org.ice4j.attribute.AttributeFactory.java

public static ChangeRequestAttribute createChangeRequestAttribute()
public static ChangeRequestAttribute createChangeRequestAttribute(boolean changeIP, boolean changePort)
public static ChangedAddressAttribute createChangedAddressAttribute(TransportAddress address)
public static ErrorCodeAttribute createErrorCodeAttribute(byte errorClass, byte errorNumber) throws StunException
public static ErrorCodeAttribute createErrorCodeAttribute(byte errorClass, byte errorNumber, String reasonPhrase) throws StunException
public static ErrorCodeAttribute createErrorCodeAttribute(char errorCode) throws StunException
public static ErrorCodeAttribute createErrorCodeAttribute(char errorCode, String reasonPhrase) throws IllegalArgumentException
public static MappedAddressAttribute createMappedAddressAttribute(TransportAddress address)
public static ReflectedFromAttribute createReflectedFromAttribute(TransportAddress address)
public static ResponseAddressAttribute createResponseAddressAttribute(TransportAddress address)
public static SourceAddressAttribute createSourceAddressAttribute(TransportAddress address)
public static UnknownAttributesAttribute createUnknownAttributesAttribute()
public static XorRelayedAddressAttribute createXorRelayedAddressAttribute(TransportAddress address, byte[] tranID)
public static XorPeerAddressAttribute createXorPeerAddressAttribute(TransportAddress address, byte[] tranID)
public static XorMappedAddressAttribute createXorMappedAddressAttribute(TransportAddress address, byte[] tranID)
public static UsernameAttribute createUsernameAttribute(byte username[])
public static UsernameAttribute createUsernameAttribute(String username)
public static MessageIntegrityAttribute createMessageIntegrityAttribute(String username)
public static FingerprintAttribute createFingerprintAttribute()
public static ChannelNumberAttribute createChannelNumberAttribute(char channelNumber)
public static RealmAttribute createRealmAttribute(byte realm[])
public static NonceAttribute createNonceAttribute(byte nonce[])
public static SoftwareAttribute createSoftwareAttribute(byte software[])
public static EvenPortAttribute createEvenPortAttribute(boolean rFlag)
public static LifetimeAttribute createLifetimeAttribute(int lifetime)
public static RequestedTransportAttribute createRequestedTransportAttribute(byte protocol)
public static ReservationTokenAttribute createReservationTokenAttribute(byte token[])
public static DataAttribute createDataAttribute(byte data[])
public static DataAttribute createDataAttributeWithoutPadding(byte data[])
public static IceControlledAttribute createIceControlledAttribute(long tieBreaker)
public static PriorityAttribute createPriorityAttribute(long priority) throws IllegalArgumentException
public static UseCandidateAttribute createUseCandidateAttribute()
public static IceControllingAttribute createIceControllingAttribute(long tieBreaker)
public static MagicCookieAttribute createMagicCookieAttribute()
public static DestinationAddressAttribute createDestinationAddressAttribute(TransportAddress address)
public static RequestedAddressFamilyAttribute createRequestedAddressFamilyAttribute(char family)
public static ConnectionIdAttribute createConnectionIdAttribute(int connectionIdValue)
public static ConnectionIdAttribute createConnectionIdAttribute()
```

## AttributeDecoder

把二进制流解码为Attribute类型的工具。

```
+ org.ice4j.attribute.AttributeDecoder.java

public static Attribute decode(byte[] bytes, int offset, int length)
```

## CandidateAttribute

候选对象属性。

```
+ org.ice4j.ice.sdp.CandidateAttribute.java

public static final String NAME = "candidate";

public CandidateAttribute(Candidate<?> candidate)
public CandidateAttribute clone()

public NameValue getAttribute()
public char getTypeChar()
public String encode()

public String getName()
public void setName(String name)

public boolean hasValue()
public String getValue()
public void setValue(String value) throws SdpException
```
