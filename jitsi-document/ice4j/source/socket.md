# 套接字

## DelegatingSocket

把调用委托给特定Socket的Socket实现。

```
+ org.ice4j.socket.DelegatingSocket.java
  + org.ice4j.socket.MultiplexingSocket.java
  + org.ice4j.socket.MultiplexedSocket.java
  + org.ice4j.socket.GoogleRelayedCandidateSocket.java

public static void receiveFromInputStream(DatagramPacket p, InputStream inputStream, InetAddress inetAddress, int port) throws IOException

public DelegatingSocket()
public DelegatingSocket(InetAddress address, int port) throws IOException
public DelegatingSocket(InetAddress address, int port, InetAddress localAddr, int localPort) throws IOException
public DelegatingSocket(Proxy proxy)
public DelegatingSocket(Socket delegate)
public DelegatingSocket(Socket delegate, SocketChannel channel)
public DelegatingSocket(String host, int port) throws UnknownHostException, IOException
public DelegatingSocket(String host, int port, InetAddress localAddr, int localPort)

public void bind(SocketAddress bindpoint) throws IOException
public void connect(SocketAddress endpoint) throws IOException
public void connect(SocketAddress endpoint, int timeout) throws IOException
public void close() throws IOException
public void shutdownInput() throws IOException
public void shutdownOutput() throws IOException

public void send(DatagramPacket p) throws IOException
public void sendUrgentData(int data) throws IOException
public void receive(DatagramPacket p) throws IOException

public boolean isBound()
public boolean isClosed()
public boolean isConnected()
public boolean isInputShutdown()
public boolean isOutputShutdown()

public SocketChannel getChannel()
public InetAddress getInetAddress()
public int getPort()
public InputStream getInputStream() throws IOException
public OutputStream getOutputStream() throws IOException
public int getLocalPort()
public InetAddress getLocalAddress()
public SocketAddress getLocalSocketAddress()
public SocketAddress getRemoteSocketAddress()

public void setOriginalInputStream(InputStream inputStream)
public void setPerformancePreferences(int connectionTime, int latency, int bandwidth)

public boolean getKeepAlive() throws SocketException
public void setKeepAlive(boolean on) throws SocketException

public boolean getOOBInline() throws SocketException
public void setOOBInline(boolean on) throws SocketException

public int getReceiveBufferSize() throws SocketException
public void setReceiveBufferSize(int size) throws SocketException

public boolean getReuseAddress() throws SocketException
public void setReuseAddress(boolean on) throws SocketException

public int getSendBufferSize() throws SocketException
public void setSendBufferSize(int size) throws SocketException

public int getSoLinger() throws SocketException
public void setSoLinger(boolean on, int linger) throws SocketException

public int getSoTimeout() throws SocketException
public void setSoTimeout(int timeout) throws SocketException

public boolean getTcpNoDelay() throws SocketException
public void setTcpNoDelay(boolean on) throws SocketException

public int getTrafficClass() throws SocketException
public void setTrafficClass(int tc) throws SocketException
```

## DelegatingDatagramSocket

把调用委托给特定DatagramSocket的DatagramSocket实现。

```
+ org.ice4j.socket.DelegatingDatagramSocket.java
  + org.ice4j.socket.MultiplexedDatagramSocket.java
  + org.ice4j.socket.SafeCloseDatagramSocket.java
    + org.ice4j.socket.MultiplexingDatagramSocket.java

public static void setDefaultDelegateFactory(DatagramSocketFactory factory)
public static void setDefaultReceiveBufferSize(int size)

public DelegatingDatagramSocket() throws SocketException
public DelegatingDatagramSocket(DatagramSocket delegate) throws SocketException
public DelegatingDatagramSocket(int port) throws SocketException
public DelegatingDatagramSocket(int port, InetAddress laddr) throws SocketException
public DelegatingDatagramSocket(SocketAddress bindaddr) throws SocketException
public DelegatingDatagramSocket(DatagramSocket delegate, SocketAddress address) throws SocketException

public void bind(SocketAddress addr) throws SocketException
public void connect(InetAddress address, int port)
public void connect(SocketAddress addr) throws SocketException
public void disconnect()
public void close()

public void send(DatagramPacket p) throws IOException
public void receive(DatagramPacket p) throws IOException

public boolean isBound()
public boolean isClosed()
public boolean isConnected()

public DatagramChannel getChannel()
public int getPort()
public InetAddress getInetAddress()
public int getLocalPort()
public InetAddress getLocalAddress()
public SocketAddress getLocalSocketAddress()
public SocketAddress getRemoteSocketAddress()

public boolean getBroadcast() throws SocketException
public void setBroadcast(boolean on) throws SocketException

public int getReceiveBufferSize() throws SocketException
public void setReceiveBufferSize(int size) throws SocketException

public boolean getReuseAddress() throws SocketException
public void setReuseAddress(boolean on) throws SocketException

public int getSendBufferSize() throws SocketException
public void setSendBufferSize(int size) throws SocketException

public int getSoTimeout() throws SocketException
public void setSoTimeout(int timeout) throws SocketException

public int getTrafficClass() throws SocketException
public void setTrafficClass(int tc) throws SocketException
```

## DelegatingServerSocket

把调用委托给另一个ServerSocket的ServerSocket实现。

```
+ org.ice4j.socket.DelegatingServerSocket.java

public DelegatingServerSocket(ServerSocket delegate) throws IOException
public DelegatingServerSocket(ServerSocket delegate, ServerSocketChannel channel) throws IOException

public void bind(SocketAddress endpoint) throws IOException
public void bind(SocketAddress endpoint, int backlog) throws IOException
public void close() throws IOException
public Socket accept() throws IOException

public boolean isBound()
public boolean isClosed()

public ServerSocketChannel getChannel()
public InetAddress getInetAddress()
public int getLocalPort()
public SocketAddress getLocalSocketAddress()

public void setPerformancePreferences(int connectionTime, int latency, int bandwidth)

public int getReceiveBufferSize() throws SocketException
public void setReceiveBufferSize(int size) throws SocketException

public boolean getReuseAddress() throws SocketException
public void setReuseAddress(boolean on) throws SocketException

public int getSoTimeout() throws IOException
public void setSoTimeout(int timeout) throws SocketException
```

## MergingDatagramSocket

合并了一组套接字的DatagramSocket实现。用于维护从每个底层套接字读取的线程。因此，接收到的数据包由receive(DatagramPacket) API提供，按照原本的接收顺序（或接近于此，因为只是根据时间戳实现的）。其中一个底层套接字用作代理，通过send(DatagramPacket)以及调用getLocalPort()、getLocalAddress()和getLocalSocketAddress()来处理发送。

```
+ org.ice4j.socket.MergingDatagramSocket.java
  + org.ice4j.ice.ComponentSocket.java

public MergingDatagramSocket() throws SocketException
public MergingDatagramSocket(Logger parentLogger) throws SocketException

public void add(DatagramSocket socket)
public void add(DelegatingSocket socket)
public void add(IceSocketWrapper wrapper)
public void remove(DatagramSocket socket)
public void remove(DelegatingSocket socket)

public void send(DatagramPacket pkt) throws IOException
public void receive(DatagramPacket p) throws SocketTimeoutException, SocketClosedException

public void close()
public boolean isClosed()

public int getLocalPort()
public InetAddress getLocalAddress()
public SocketAddress getLocalSocketAddress()

public int getSoTimeout()
public void setSoTimeout(int soTimeout)
```

## MultiplexedXXXSocket

定义了伪套接字所需的应用程序编程接口（API），是真实套接字基于DatagramPacket的实际视图。

```
+ org.ice4j.socket.MultiplexedXXXSocket.java
  + org.ice4j.socket.MultiplexedSocket.java
  + org.ice4j.socket.MultiplexedDatagramSocket.java

DatagramPacketFilter getFilter();
```

## PseudoTcpSocket

伪TCP套接字。

```
+ org.ice4j.pseudotcp.PseudoTcpSocket.java

public void connect(SocketAddress endpoint) throws IOException
public void connect(SocketAddress remoteAddr, int timeout) throws IOException
public synchronized void close() throws IOException

public void accept(int timeout) throws IOException
public void accept(SocketAddress remoteAddress, int timeout) throws IOException

public boolean isConnecting()
public boolean isConnected()
public boolean isClosed()

public OutputStream getOutputStream() throws IOException
public PseudoTcpState getState()
public FileDescriptor getFileDescriptor()

public void setDebugName(String debugName)

public long getConversationID()
public void setConversationID(long convID) throws IllegalStateException

public int getMTU()
public void setMTU(int mtu)

public long getOption(Option option)
public void setOption(Option option, long optValue)
```

## PseudoTcpJavaSocket

伪TCP Java套接字。

```
+ org.ice4j.pseudotcp.PseudoTcpJavaSocket.java

public PseudoTcpJavaSocket(long conv_id) throws SocketException
public PseudoTcpJavaSocket(long conv_id, DatagramSocket socket) throws SocketException
```

## IceSocketWrapper

抽象的套接字包装器，定义的套接字可以是UDP套接字、TCP套接字。

```
+ org.ice4j.socket.IceSocketWrapper.java
  + org.ice4j.socket.IceUdpSocketWrapper.java
  + org.ice4j.socket.IceTcpSocketWrapper.java
  + org.ice4j.socket.IceTcpServerSocketWrapper.java

public abstract void receive(DatagramPacket p) throws IOException;
public abstract void close();

public abstract int getLocalPort();
public abstract InetAddress getLocalAddress();
public abstract SocketAddress getLocalSocketAddress();
public abstract Socket getTCPSocket();
public abstract DatagramSocket getUDPSocket();
```

## BaseDelegatingSocketChannel

把调用委托给另一个SocketChannel的SocketChannel实现。

```
+ org.ice4j.socket.BaseDelegatingSocketChannel.java

public BaseDelegatingSocketChannel(T delegate)

public SocketChannel bind(SocketAddress local) throws IOException
public boolean connect(SocketAddress remote) throws IOException
public boolean finishConnect() throws IOException

public SocketChannel shutdownInput() throws IOException
public SocketChannel shutdownOutput() throws IOException

public int read(ByteBuffer dst) throws IOException
public long read(ByteBuffer[] dsts, int offset, int length) throws IOException

public int write(ByteBuffer src) throws IOException
public long write(ByteBuffer[] srcs, int offset, int length) throws IOException

public Socket socket()
public Set<SocketOption<?>> supportedOptions()

public boolean isConnected()
public boolean isConnectionPending()

public SocketAddress getLocalAddress() throws IOException
public SocketAddress getRemoteAddress() throws IOException

public <U> U getOption(SocketOption<U> name) throws IOException
public <U> SocketChannel setOption(SocketOption<U> name, U value) throws IOException
```

## BaseDelegatingServerSocketChannel

把调用委托给另一个ServerSocketChannel的ServerSocketChannel实现。

```
+ org.ice4j.socket.BaseDelegatingServerSocketChannel.java

public BaseDelegatingServerSocketChannel(T delegate)

public ServerSocket socket()
public SocketChannel accept() throws IOException

public ServerSocketChannel bind(SocketAddress local, int backlog) throws IOException
public boolean isBound()

public SocketAddress getLocalAddress() throws IOException
public Set<SocketOption<?>> supportedOptions()

public <U> U getOption(SocketOption<U> name) throws IOException
public <U> ServerSocketChannel setOption(SocketOption<U> name, U value) throws IOException
```

## TCPInputStream

TCP套接字的TCP输入流。用于Multiplex（多路）套接字，并为用户保留InputStream接口。

```
+ org.ice4j.socket.TCPInputStream.java

public TCPInputStream(MultiplexingSocket socket)

public int read() throws IOException
public int read(byte[] b, int off, int len) throws IOException
public long skip(long n) throws IOException
public void close() throws IOException
```

## TCPOutputStream

TCP套接字的TCP输出流。用于Multiplex（多路）套接字，并为用户保留OutputStream接口。

```
+ org.ice4j.socket.TCPOutputStream.java

public TCPOutputStream(OutputStream outputStream)

public void write(byte[] b, int off, int len) throws IOException
public void write(int b) throws IOException
public void flush() throws IOException
public void close() throws IOException
```

## DatagramPacketFilter

表示选择或不选择DatagramPacket的过滤器。

```
+ org.ice4j.socket.DatagramPacketFilter.java
  + org.ice4j.socket.HttpDemuxFilter.java
  + org.ice4j.socket.DTLSDatagramFilter.java
  + org.ice4j.socket.RtcpDemuxPacketFilter.java
  + org.ice4j.socket.StunDatagramPacketFilter.java
    + org.ice4j.socket.TurnDatagramPacketFilter.java

public boolean accept(DatagramPacket p);
```

## MessageEventHandler

这个类用于从NetAccessManager（更准确地说是MessageProcessor）收集输入的STUN信息。这是保持网络和STUN层可扩展的方法。

```
+ org.ice4j.stack.MessageEventHandler.java
  + org.ice4j.socket.RelayedCandidateDatagramSocket.java
  + org.ice4j.socket.GoogleRelayedCandidateDatagramSocket.java
  + org.ice4j.stack.StunStack.java

public void handleMessageEvent(StunMessageEvent evt);
```

## DatagramSocketFactory

这个接口的实现类遵循工程模式，生成栈中其他类使用的DatagramSocket对象。通过扩展这个接口并使用DelegatingDatagramSocket#setDefaultDelegateFactory()方法，应用程序的开发人员可以确保ice4j栈使用各种DatagramSocket，并在ICE协议完成时把DatagramSocket传回到应用程序。

```
+ org.ice4j.socket.DatagramSocketFactory.java

public DatagramSocket createUnboundDatagramSocket() throws SocketException;
```

## MuxServerSocketChannelFactory

如果运行时支持，初始化ServerSocketChannel，可以与多个类似ServerSocketChannel共享监听端点的。

```
+ org.ice4j.socket.MuxServerSocketChannelFactory.java

public static final int SOCKET_CHANNEL_READ_TIMEOUT = 15 * 1000;
public static final String SOCKET_REUSE_ADDRESS_PROPERTY_NAME = "socket.reuseAddress";
public static ServerSocketChannel openAndBindServerSocketChannel(Map<String, Object> properties, SocketAddress endpoint, int backlog) throws IOException
```

## SocketClosedException

表示套接字已关闭的异常。

```
+ org.ice4j.socket.SocketClosedException.java

public SocketClosedException()
```

## MultiplexingXXXSocketSupport

实现了（反）多路复用套接字（即：以伪套接字形式接收数据包，提供基于DatagramPacket的数据包视图的套接字）的TCP和UDP实现的通用功能。

```
+ org.ice4j.socket.MultiplexingXXXSocketSupport.java
```

## SocketReceiveBuffer

DatagramSocket或Socket接收到的DatagramPacket的缓冲区。这个列表强制为DatagramSocket或Socket使用SO_RCVBUF选项。

```
+ org.ice4j.socket.SocketReceiveBuffer.java

public SocketReceiveBuffer(Callable<Integer> receiveBufferSizeSupplier)

public void add(DatagramPacket p)
public DatagramPacket poll()
public List<DatagramPacket> scan(DatagramPacketFilter filter)
public boolean isEmpty()
```
