# 采集器

## CandidateHarvester

候选采集器，为特定组件采集特定类型的候选（例如：主机、自反或中继）。

```
+ org.ice4j.ice.harvest.CandidateHarvester.java
  + org.ice4j.ice.harvest.TcpHarvester.java
  + org.ice4j.ice.harvest.SinglePortUdpHarvester.java
  + org.ice4j.ice.harvest.AbstractCandidateHarvester.java
    + org.ice4j.ice.harvest.UPNPHarvester.java
    + org.ice4j.ice.harvest.StunCandidateHarvester.java
      + org.ice4j.ice.harvest.TurnCandidateHarvester.java
      + org.ice4j.ice.harvest.GoogleTurnCandidateHarvester.java
        + org.ice4j.ice.harvest.GoogleTurnSSLCandidateHarvester.java
    + org.ice4j.ice.harvest.MappingCandidateHarvester.kt
      + org.ice4j.ice.harvest.AwsCandidateHarvester.java
      + org.ice4j.ice.harvest.StunMappingCandidateHarvester.java
      + org.ice4j.ice.harvest.StaticMappingCandidateHarvester.kt

Collection<LocalCandidate> harvest(Component component);
HarvestStatistics getHarvestStatistics();
boolean isHostHarvester();
```

## HostCandidateHarvester

为特定组件采集主机候选。大多数CandidateHarvester都依赖于主机采集器的输出，即所有主机地址。在候选采集器可以采集它们负责的地址类型之前，这些主机地址就已经存在并绑定在组件中。

```
+ org.ice4j.ice.harvest.HostCandidateHarvester.java

public static String[] getAllowedInterfaces()
public static String[] getBlockedInterfaces()
public static synchronized List<InetAddress> getAllowedAddresses()
public static synchronized  List<InetAddress> getBlockedAddresses()
public static List<InetAddress> getAllAllowedAddresses()
public void harvest(Component component, int preferredPort, int minPort, int maxPort, Transport transport) throws IllegalArgumentException, IOException
public static boolean isInterfaceAllowed(NetworkInterface iface)
public HarvestStatistics getHarvestStatistics()
public static synchronized void initializeInterfaceFilters()
```

## AbstractTcpListener

抽象的TCP监听器，绑定一组套接字，接收发起STUN绑定请求的会话（在可选的伪SSL握手之前）。把对接收到的会话的处理（例如：在ICE中的处理）留给实现者。

这个实例运行了两个线程：acceptThread和readThread。acceptThread只是接收新的Socket，并把Socket传递给readThread。readThread从接收到的套接字中读取STUN信息，然后根据STUN用户名，把信息传递给适当的会话。

```
+ org.ice4j.ice.harvest.AbstractTcpListener.java
  + org.ice4j.ice.harvest.TcpHarvester.java

public AbstractTcpListener(int port) throws IOException
public AbstractTcpListener(int port, List<NetworkInterface> interfaces) throws IOException
public AbstractTcpListener(List<TransportAddress> transportAddresses) throws IOException

public void close()
```

## AbstractUdpListener

抽象的UDP监听器，持有一个DatagramSocket，运行一个线程并从这个线程中不断地读取数据包。

UDP监听器接收到来自未知源的数据包时，会把数据包解析为STUN绑定请求，如果STUN绑定请求中包含USERNAME属性，则提取USERNAME属性中的ufrag（本地用户名片段）。

目前，可以选择一个实现类，为数据包的远程地址创建映射，这个映射将被用于这个地址的其他数据包。

```
+ org.ice4j.ice.harvest.AbstractUdpListener.java
  + org.ice4j.ice.harvest.SinglePortUdpHarvester.java

public static List<TransportAddress> getAllowedAddresses(int port)
public void close()
```

## CandidateHarvesterSet

候选采集器集合，用于运行CandidateHarvester元素并行执行的候选地址采集。

```
+ org.ice4j.ice.harvest.CandidateHarvesterSet.java
+ org.ice4j.ice.harvest.CandidateHarvesterSetElement.java
+ org.ice4j.ice.harvest.CandidateHarvesterSetTask.java

public CandidateHarvesterSet()
public boolean add(CandidateHarvester harvester)
public void harvest(Component component)
public void harvest(final List<Component> components, TrickleCallback trickleCallback)
public Iterator<CandidateHarvester> iterator()
public int size()
```

## MappingCandidateHarvesters

根据系统属性提供的配置创建MappingCandidateHarvester实例，管理MappingCandidateHarvester实例的静态列表。

任何Agent都可以安全地使用集合中的MappingCandidateHarvester实例。

```
+ org.ice4j.ice.harvest.MappingCandidateHarvesters.java

public static boolean stunDiscoveryFailed = false;

public static MappingCandidateHarvester[] getHarvesters()
public static MappingCandidateHarvester findHarvesterForAddress(TransportAddress publicAddress)
public static synchronized void initialize()
```

## HarvestStatistics

管理采集时间的统计信息。

```
+ org.ice4j.ice.harvest.HarvestStatistics.java

public long getHarvestDuration()
public int getTotalCandidateCount()
public int getHarvestCount()
public String getName()
```

## TrickleCallback

使用这个回调接口，向支持ICE的ice4j用户应用程序提供候选者。这个接口提供了两个方法，可以逐个或批量把候选者传递给应用程序。前者通常用于STUN等采集器，这些采集器中每种信息只知道一个候选者。查询TURN服务器时可能会发现一批候选者，许多情况下，会返回服务器的自反（STUN）和中继（TURN）候选者。

```
+ org.ice4j.ice.harvest.TrickleCallback.java

public void onIceCandidates(Collection<LocalCandidate> iceCandidates);
```

## HarvestConfig

采集器配置。

```
+ org.ice4j.ice.harvest.HarvestConfig.kt

org.ice4j.ice.harvest.DISABLE_LINK_LOCAL_ADDRESSES
ice4j.harvest.use-link-local-addresses

org.ice4j.ice.harvest.AbstractUdpListener.SO_RCVBUF
ice4j.harvest.udp.receive-buffer-size

org.ice4j.ipv6.DISABLED
ice4j.harvest.use-ipv6

org.ice4j.ice.harvest.USE_DYNAMIC_HOST_HARVESTER
ice4j.harvest.udp.use-dynamic-ports

org.ice4j.ice.harvest.HARVESTING_TIMEOUT
ice4j.harvest.timeout

org.ice4j.ice.harvest.STUN_MAPPING_HARVESTER_ADDRESSES
ice4j.harvest.mapping.stun.addresses

org.ice4j.ice.harvest.DISABLE_AWS_HARVESTER
ice4j.harvest.mapping.aws.enabled

org.ice4j.ice.harvest.FORCE_AWS_HARVESTER
ice4j.harvest.mapping.aws.force

org.ice4j.ice.harvest.NAT_HARVESTER_LOCAL_ADDRESS
org.ice4j.ice.harvest.NAT_HARVESTER_PUBLIC_ADDRESS

ice4j.harvest.mapping.static-mappings.local-address
ice4j.harvest.mapping.static-mappings.public-address
ice4j.harvest.mapping.static-mappings.name
```
