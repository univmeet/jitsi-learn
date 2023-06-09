# sctp

## org.jitsi_modified.sctp4j

### Sctp4j

```
org.jitsi_modified.sctp4j.Sctp4j

public class Sctp4j
```

### SctpSocket

```
org.jitsi_modified.sctp4j.SctpSocket

SCTP套接字
public abstract class SctpSocket

public SctpSocketEventHandler eventHandler;
public SctpDataSender outgoingDataSender;
public SctpDataCallback dataCallback;

public SctpSocket(long ptr, long id, Logger parentLogger)

public void onConnIn(byte[] packet, int offset, int len)
public int onSctpOut(byte[] packet, int tos, int set_df)
public int send(ByteBuffer data, boolean ordered, int sid, int ppid)
public void close()

```

### SctpSocket.SctpSocketEventHandler

```
org.jitsi_modified.sctp4j.SctpSocket.SctpSocketEventHandler

SCTP套接字事件处理器。
public interface SctpSocketEventHandler

void onReady();
void onDisconnected();
```

### SctpClientSocket

```
org.jitsi_modified.sctp4j.SctpClientSocket

SCTP客户端套接字。
public class SctpClientSocket extends SctpSocket

public SctpClientSocket(long ptr, long id, Logger parentLogger)

public boolean connect(int remoteSctpPort)
```

### SctpServerSocket

```
org.jitsi_modified.sctp4j.SctpServerSocket

SCTP服务端套接字。
用于监听接入连接，向其他对等点发送数据，或从其他对等点接收数据。
public class SctpServerSocket extends SctpSocket

public SctpServerSocket(long ptr, long id, Logger parentLogger)

public void listen()
public boolean accept()
```

### SctpDataSender

```
org.jitsi_modified.sctp4j.SctpDataSender

SCTP套接字使用的用于发送数据的接口。
public interface SctpDataSender

int send(byte[] data, int offset, int length);
```

### SctpDataCallback

```
org.jitsi_modified.sctp4j.SctpDataCallback

用于在SCTP套接字上监听输入数据的回调接口。
public interface SctpDataCallback

void onSctpPacket(byte[] data, int sid, int ssn, int tsn, long ppid, int context, int flags);
```

### SctpNotification

```
org.jitsi_modified.sctp4j.SctpNotification

SCTP通知
public class SctpNotification

public static final int SCTP_ASSOC_CHANGE                = 0x0001;
public static final int SCTP_PEER_ADDR_CHANGE            = 0x0002;
public static final int SCTP_REMOTE_ERROR                = 0x0003;
public static final int SCTP_SEND_FAILED                 = 0x0004;
public static final int SCTP_SHUTDOWN_EVENT              = 0x0005;
public static final int SCTP_ADAPTATION_INDICATION       = 0x0006;
public static final int SCTP_PARTIAL_DELIVERY_EVENT      = 0x0007;
public static final int SCTP_AUTHENTICATION_EVENT        = 0x0008;
public static final int SCTP_STREAM_RESET_EVENT          = 0x0009;
public static final int SCTP_SENDER_DRY_EVENT            = 0x000a;
public static final int SCTP_NOTIFICATIONS_STOPPED_EVENT = 0x000b;
public static final int SCTP_ASSOC_RESET_EVENT           = 0x000c;
public static final int SCTP_STREAM_CHANGE_EVENT         = 0x000d;
public static final int SCTP_SEND_FAILED_EVENT           = 0x000e;

public final int sn_type;
public final int sn_flags;
public final int sn_length;

public static SctpNotification parse(byte[] data)
```

### SctpNotification.AssociationChange

```
org.jitsi_modified.sctp4j.SctpNotification.AssociationChange

关联发生改变事件。
public static class AssociationChange extends SctpNotification

public static final int SCTP_COMM_UP        = 0x0001;
public static final int SCTP_COMM_LOST      = 0x0002;
public static final int SCTP_RESTART        = 0x0003;
public static final int SCTP_SHUTDOWN_COMP  = 0x0004;
public static final int SCTP_CANT_STR_ASSOC = 0x0005;

public static final int SCTP_ASSOC_SUPPORTS_PR        = 0x01;
public static final int SCTP_ASSOC_SUPPORTS_AUTH      = 0x02;
public static final int SCTP_ASSOC_SUPPORTS_ASCONF    = 0x03;
public static final int SCTP_ASSOC_SUPPORTS_MULTIBUF  = 0x04;
public static final int SCTP_ASSOC_SUPPORTS_RE_CONFIG = 0x05;
public static final int SCTP_ASSOC_SUPPORTS_MAX       = 0x05;

public final int state;
public final int error;
public final int outboundStreams;
public final int inboundStreams;
public final long assocId;
```

### SctpNotification.PeerAddressChange

```
org.jitsi_modified.sctp4j.SctpNotification.PeerAddressChange

对等点地址发生改变事件
public static class PeerAddressChange extends SctpNotification

public static final int SCTP_ADDR_AVAILABLE   = 0x0001;
public static final int SCTP_ADDR_UNREACHABLE = 0x0002;
public static final int SCTP_ADDR_REMOVED     = 0x0003;
public static final int SCTP_ADDR_ADDED       = 0x0004;
public static final int SCTP_ADDR_MADE_PRIM   = 0x0005;
public static final int SCTP_ADDR_CONFIRMED   = 0x0006;

public final int state;
public final long error;
public final long assocId;
```

### SctpNotification.SendFailed

```
org.jitsi_modified.sctp4j.SctpNotification.SendFailed

SCTP发送失败事件。
public static class SendFailed extends SctpNotification

public static final int SCTP_DATA_UNSENT = 0x0001;
public static final int SCTP_DATA_SENT = 0x0002;

public final long error;
```

### SctpNotification.SenderDry

```
org.jitsi_modified.sctp4j.SctpNotification.SenderDry

SCTP发送方DRY事件（不再发送或重新传输数据）。
public static class SenderDry extends SctpNotification
```

### SctpNotification.StreamReset

```
org.jitsi_modified.sctp4j.SctpNotification.StreamReset

流重置事件。
public static class StreamReset extends SctpNotification

public static final int SCTP_STREAM_RESET_INCOMING     = 0x00000001;
public static final int SCTP_STREAM_RESET_OUTGOING     = 0x00000002;

public static final int SCTP_STREAM_RESET_INCOMING_SSN = 0x0001;
public static final int SCTP_STREAM_RESET_OUTGOING_SSN = 0x0002;

public static final int SCTP_STREAM_RESET_DENIED       = 0x0004;
public static final int SCTP_STREAM_RESET_FAILED       = 0x0008;

public static final int SCTP_STREAM_CHANGED_DENIED     = 0x0010;
```

## org.jitsi_modified.sctp4j.example

org.jitsi_modified.sctp4j.example.Client

org.jitsi_modified.sctp4j.example.Server
