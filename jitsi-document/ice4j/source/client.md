# 客户端

## SimpleAddressDetector

这个类提供了发现公共IP地址的基本方法。这个类所做的就是，通过指定端口发送绑定请求，并返回获得的映射地址，如果没有响应，则返回null。

```
+ org.ice4j.stunclient.SimpleAddressDetector.java

public SimpleAddressDetector(TransportAddress serverAddress)

public void start()
public void shutDown()

public TransportAddress getServerAddress()
public TransportAddress getMappingFor(IceSocketWrapper socket) throws IOException, BindException
```

## NetworkConfigurationDiscoveryProcess

这个类实现了RFC 3489中第10.1节描述的STUN发现过程。

这个流程使用了三个测试。在测试I中，客户端向服务器发送一个STUN绑定请求，CHANGE-REQUEST属性中没有设置任何标记，也没有RESPONSE-ADDRESS属性。这会导致服务器把响应发回给请求的来源地址和端口。在测试II中，客户端会发送一个绑定请求，CHANGE-REQUEST属性中设置了"change IP"和"change port"标记。在测试III中，客户端会发送一个绑定请求，只设置了"change port"标记。

客户端始于初始化测试I。如果这个测试没有产生响应，客户端立即确定无法连接UDP。如果这个测试产生了一个响应，客户端会检查MAPPED-ADDRESS属性。如果这个地址和端口与套接字发送请求时使用的本地IP地址和端口相同，客户端确定不是NAT的。客户端继续执行测试II。

如果接收到响应，客户端确定对网络开放访问（或者，至少处于行为类似于全锥NAT的防火墙后面，但是没有转换）。如果没有接收到响应，客户端确定处于对称的UDP防火墙后面。

如果套接字的IP地址和端口与测试I响应中的MAPPED-ADDRESS属性不匹配，则客户端确定处于NAT后面。客户端继续执行测试II。如果接收到响应，则客户端确定处于全锥NAT后面。如果没有接收到响应，客户端会再次执行测试I，但是这一次，客户端会把请求发送到测试I响应中CHANGED-ADDRESS属性的地址和端口。如果MAPPED-ADDRESS属性中返回的IP地址和端口与第一次测试I中的IP地址和端口不同，则客户端确定处于对称的NAT后面。如果地址和端口都相同，则客户端处于受限或端口受限的NAT后面。为了确定处于哪个后面，客户端会初始化测试III。如果接收到响应，则客户端处于受限的NAT后面；如果没有接收到响应，则客户端处于端口受限的NAT后面。

这个过程会产生大量与客户端应用程序的运行状况相关的信息。如果客户端与网络之间存在多个NAT，则发现的类型为客户端与网络之间受限最多的类型。NAT类型按受限程度从多到少排序为：对称、端口受限锥、受限锥、全锥。

通常，客户端会定期重新执行这个发现过程，以检查变更或查找不一致的结果。需要注意的是，重新执行发现过程时，通常不应该在之前的发现过程中使用的相同本地地址和端口上执行。如果重用了相同的本地地址和端口，之前测试中的绑定可能仍然存在，这些绑定会使测试结果无效。在后续测试中使用不同的本地地址和端口可以解决这个问题。另一种方法是，等待足够长的时间，以确定旧的绑定已经过期（半个小时应该就足够了）。

```
+ org.ice4j.stunclient.NetworkConfigurationDiscoveryProcess.java

public NetworkConfigurationDiscoveryProcess(StunStack stunStack, TransportAddress localAddress, TransportAddress serverAddress)

public void start() throws IOException, StunException
public void shutDown()

public StunDiscoveryReport determineAddress() throws StunException, IOException
```

## StunDiscoveryReport

这个类用于传递STUN发现过程的结果。包含的信息包括：这个客户端前面的NAT服务器（或防火墙），以及映射地址值（如果找到的话）。

```
+ org.ice4j.stunclient.StunDiscoveryReport.java

public static final String UNKNOWN = "Unknown Network Configuration";
public static final String OPEN_INTERNET = "Open Internet Configuration";
public static final String UDP_BLOCKING_FIREWALL = "UDP Blocking Firewall";
public static final String SYMMETRIC_UDP_FIREWALL= "Symmetric UDP Firewall";
public static final String FULL_CONE_NAT = "Full Cone NAT";
public static final String SYMMETRIC_NAT = "Symmetric NAT";
public static final String RESTRICTED_CONE_NAT = "Restricted Cone NAT";
public static final String PORT_RESTRICTED_CONE_NAT = "Port Restricted Cone NAT";

public String getNatType()
public TransportAddress getPublicAddress()
```
