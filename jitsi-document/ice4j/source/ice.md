# ICE

## Agent

代理，ICE实现的主类（main）。

正如RFC 3264中所定义的，代理是Offer/Answer交换协议的实现。Offer/Answer交换中存在两个代理。

注意：如果及时释放相关资源很重要的话，那么应该调用Agent.free()，为Agent实例显式准备垃圾回收，否则应该等待垃圾收集器调用Agent.finalize()。

```
+ org.ice4j.ice.Agent.java

public static final String PROPERTY_ICE_PROCESSING_STATE = "IceProcessingState";

public Agent()
public Agent(Logger parentLogger)
public Agent(String ufragPrefix, Logger parentLogger)

public Component createComponent(IceMediaStream stream, int preferredPort, int minPort, int maxPort) throws IllegalArgumentException, IOException, BindException
public Component createComponent(IceMediaStream stream, int preferredPort, int minPort, int maxPort, KeepAliveStrategy keepAliveStrategy) throws IllegalArgumentException, IOException, BindException
public Component createComponent(IceMediaStream stream, int preferredPort, int minPort, int maxPort, KeepAliveStrategy keepAliveStrategy, boolean useComponentSocket) throws IllegalArgumentException, IOException, BindException
public Component createComponent(IceMediaStream stream, KeepAliveStrategy keepAliveStrategy, boolean useComponentSocket) throws IllegalArgumentException, IOException

public IceMediaStream createMediaStream(String mediaStreamName)

public String generateLocalUserName(String media)
public String generateRemoteUserName(String media)
public String generateLocalUserName(RemoteCandidate remoteCandidate, LocalCandidate localCandidate)
public String generateRemoteUserName(RemoteCandidate remoteCandidate, LocalCandidate localCandidate)

public void startCandidateTrickle(TrickleCallback trickleCallback) throws IllegalStateException
public void startConnectivityEstablishment()

public LocalCandidate findLocalCandidate(TransportAddress address)
public LocalCandidate findLocalCandidate(TransportAddress address, LocalCandidate base)
public RemoteCandidate findRemoteCandidate(TransportAddress remoteAddress)
public CandidatePair findCandidatePair(TransportAddress localAddress, TransportAddress remoteAddress)
public CandidatePair findCandidatePair(String localUFrag, String remoteUFrag)

public void addCandidateHarvester(CandidateHarvester harvester)
public void addStateChangeListener(PropertyChangeListener l)
public void removeStateChangeListener(PropertyChangeListener l)

public synchronized void nominate(CandidatePair pair) throws IllegalStateException
public void removeStream(IceMediaStream stream)
public void free()

public boolean isStarted()
public boolean isOver()

public LocalCandidate getSelectedLocalCandidate(String streamName)
public RemoteCandidate getSelectedRemoteCandidate(String streamName)

public CandidateHarvesterSet getHarvesters()
public int getHarvestCount()
public int getHarvestCount(String harvesterName)
public long getTotalHarvestingTime()
public long getHarvestingTime(String harvesterName)

public List<IceMediaStream> getStreams()
public IceMediaStream getStream(String name)
public List<String> getStreamNames()
public int getStreamCount()

public String getLocalUfrag()
public String getLocalPassword()

public final FoundationsRegistry getFoundationsRegistry()
public IceProcessingState getState()

public void setUseDynamicPorts(boolean value)
public void setTa(long taValue)

public boolean isControlling()
public void setControlling(boolean isControlling)

public long getTieBreaker()
public void setTieBreaker(long tieBreakerInput)

public synchronized StunStack getStunStack()
public void setStunStack(StunStack stunStack)

public boolean isTrickling()
public void setTrickling(boolean trickle)

public NominationStrategy getNominationStrategy()
public void setNominationStrategy(NominationStrategy strategy)

public int getGeneration()
public void setGeneration(int generation)

public boolean getPerformConsentFreshness()
public void setPerformConsentFreshness(boolean performConsentFreshness)

public Level getLoggingLevel()
public void setLoggingLevel(Level level)
```

## AgentConfig

代理配置。

```
+ org.ice4j.ice.AgentConfig.kt

org.ice4j.ice.CONSENT_FRESHNESS_INTERVAL
ice4j.consent-freshness.interval

org.ice4j.ice.CONSENT_FRESHNESS_WAIT_INTERVAL
ice4j.consent-freshness.original-wait-interval

org.ice4j.ice.CONSENT_FRESHNESS_MAX_WAIT_INTERVAL
ice4j.consent-freshness.max-wait-interval

org.ice4j.ice.CONSENT_FRESHNESS_MAX_RETRANSMISSIONS
ice4j.consent-freshness.max-retransmissions

org.ice4j.TERMINATION_DELAY
ice4j.ice.termination-delay

org.ice4j.MAX_CHECK_LIST_SIZE
ice4j.ice.max-check-list-size

org.ice4j.SOFTWARE
ice4j.software

org.ice4j.ice.USE_COMPONENT_SOCKET
ice4j.use-component-socket
```

## Candidate

候选，表示接收媒体的潜在联络点的传输地址。候选对象的属性：type（服务器自反、中继或主机）、priority、foundation和base。

目前，这个类只支持UDP候选。为支持其他传输协议的实现，这个类应该定义为abstract，并且一些特定于传输的组件，例如：套接字，应该下放到到继承链的下游。

```
+ org.ice4j.ice.Candidate.java
  + org.ice4j.ice.LocalCandidate.java
    + org.ice4j.ice.GoogleRelayedCandidate.java
    + org.ice4j.ice.UPNPCandidate.java
    + org.ice4j.ice.RelayedCandidate.java
    + org.ice4j.ice.PeerReflexiveCandidate.java
    + org.ice4j.ice.ServerReflexiveCandidate.java
    + org.ice4j.ice.HostCandidate.java
      + org.ice4j.ice.TcpHostCandidate.java
  + org.ice4j.ice.RemoteCandidate.java

public static final int MAX_TYPE_PREFERENCE = 126;
public static final int MIN_TYPE_PREFERENCE = 0;
public static final int MAX_LOCAL_PREFERENCE = 65535;
public static final int MIN_LOCAL_PREFERENCE = 0;

public Candidate(TransportAddress transportAddress, Component parentComponent, CandidateType type, T relatedCandidate)

public long computePriority()
public long computeGTalkPriority()
public long computePriorityForType(CandidateType candidateType)
public long computeGTalkPriorityForType(CandidateType candidateType)

public TransportAddress getTransportAddress()
public TransportAddress getStunServerAddress()
public TransportAddress getRelayServerAddress()
public TransportAddress getMappedAddress()
public TransportAddress getHostAddress()
public TransportAddress getReflexiveAddress()
public TransportAddress getRelayedAddress()
public TransportAddress getRelatedAddress()

public abstract String getUfrag();
public abstract boolean isDefault();

public long getPriority()
public Component getParentComponent()
public Transport getTransport()
public T getRelatedCandidate()
public boolean canReach(Candidate<?> dst)

public CandidateType getType()
public void setCandidateType(CandidateType candidateType)

public CandidateTcpType getTcpType()
public void setTcpType(CandidateTcpType tcpType)

public String getFoundation()
public void setFoundation(String foundation)

public T getBase()
public void setBase(T base)

public boolean isVirtual()
public void setVirtual(boolean virtual)
```

## CandidatePair

候选对，映射本地和远程候选，以便添加到检查列表中。ICE中的连通性总是按候选对进行验证的，即：候选对中的本地候选把STUN数据包发送给候选对中的远程候选。为了查看哪个候选对有效，Agent会调度一系列的ConnectivityCheck。每个ConnectivityCheck都是一个STUN 请求/响应事务，在特定候选对上，客户端会从本地候选向远程候选发送STUN请求。

```
+ org.ice4j.ice.CandidatePair.java
+ org.ice4j.ice.CandidatePair.PairComparator.java

public static final long CONSENT_FRESHNESS_UNKNOWN = -1;
public static final PairComparator comparator = new PairComparator();

public CandidatePair(LocalCandidate localCandidate, RemoteCandidate remoteCandidate)

public void nominate()

public LocalCandidate getLocalCandidate()
public RemoteCandidate getRemoteCandidate()

public Candidate<?> getControllingAgentCandidate()
public Candidate<?> getControlledAgentCandidate()

public Component getParentComponent()
public TransactionID getConnectivityCheckTransaction()
public String getFoundation()
public long getPriority()
public long getConsentFreshness()

public boolean isFrozen()
public boolean isNominated()
public boolean isValid()

public CandidatePairState getState()
public void setStateFailed()
public void setStateFrozen()
public void setStateInProgress(TransactionID tranID)
public void setStateSucceeded()
public void setStateWaiting()

public boolean useCandidateSent()
public void setUseCandidateSent()

public boolean useCandidateReceived()
public void setUseCandidateReceived()

已废弃：
public DatagramSocket getDatagramSocket()
public Socket getSocket()
public IceSocketWrapper getIceSocketWrapper()
```

## CandidatePairState

列表中每个候选对（CandidatePair）的状态（CandidatePairState）。计算出每个媒体流的检查列表后，就会对候选对状态进行赋值。这个枚举表示存在的5个潜在状态值。

```
+ org.ice4j.ice.CandidatePairState.java

WAITING("Waiting"),
IN_PROGRESS("In-Progress"),
SUCCEEDED("Succeeded"),
FAILED("Failed"),
FROZEN("Frozen");
```

## CandidateType

根据ICE规范，候选对象存在类型属性，使其成为服务器自反、对等点自反、中继或主机。

```
+ org.ice4j.ice.CandidateType.java

PEER_REFLEXIVE_CANDIDATE("prflx"),
SERVER_REFLEXIVE_CANDIDATE("srflx"),
RELAYED_CANDIDATE("relay"),
HOST_CANDIDATE("host"),
LOCAL_CANDIDATE("local"),
STUN_CANDIDATE("stun");

public static CandidateType parse(String candidateTypeName) throws IllegalArgumentException
```

## CandidateTcpType

ICE TCP候选的TCP类型，参考：http://tools.ietf.org/html/rfc6544。

```
+ org.ice4j.ice.CandidateTcpType.java

ACTIVE("active"),
PASSIVE("passive"),
SO("so");

public static CandidateTcpType parse(String candidateTcpTypeName) throws IllegalArgumentException
```

## CandidateExtendedType

用于发现新候选的不同可用方法。

```
+ org.ice4j.ice.CandidateExtendedType.java

HOST_CANDIDATE("host"),
UPNP_CANDIDATE("upnp"),
STATICALLY_MAPPED_CANDIDATE("statically mapped"),
STUN_PEER_REFLEXIVE_CANDIDATE("stun peer reflexive"),
STUN_SERVER_REFLEXIVE_CANDIDATE("stun server reflexive"),
TURN_RELAYED_CANDIDATE("turn relayed"),
GOOGLE_TURN_RELAYED_CANDIDATE("google turn relayed"),
GOOGLE_TCP_TURN_RELAYED_CANDIDATE("google tcp turn relayed"),
JINGLE_NODE_CANDIDATE("jingle node");

public static CandidateExtendedType parse(String extendedTypeName) throws IllegalArgumentException
```

## Component

组件是需要单个传输地址的媒体流的一部分，一个媒体流可能需要多个组件，每个组件都必须为整个媒体流工作。对于基于RTP的媒体流而言，每个媒体流都有两个组件：一个用于RTP，另一个用于RTCP。

```
+ org.ice4j.ice.Component.java

public static final int RTP = 1;
public static final int RTCP = 2;

public static Component build(int componentID, IceMediaStream mediaStream, Logger parentLogger)

public List<LocalCandidate> getLocalCandidates()
public int getLocalCandidateCount()
public boolean addLocalCandidate(LocalCandidate candidate)

public List<RemoteCandidate> getRemoteCandidates()
public int getRemoteCandidateCount()
public void addRemoteCandidate(RemoteCandidate candidate)
public void addRemoteCandidates(List<RemoteCandidate> candidates)

public void addUpdateRemoteCandidates(RemoteCandidate candidate)
public void updateRemoteCandidates()
public int countLocalHostCandidates()

public LocalCandidate getDefaultCandidate()
public Candidate<?> getDefaultRemoteCandidate()
public void setDefaultRemoteCandidate(Candidate<?> candidate)

public IceMediaStream getParentStream()
public CandidatePair getSelectedPair()
public int getComponentID()
public String getName()

public ComponentSocket getComponentSocket()
public MultiplexingDatagramSocket getSocket()
public IceSocketWrapper getSocketWrapper()
public Logger getLogger()

public LocalCandidate findLocalCandidate(TransportAddress localAddress)
public LocalCandidate findLocalCandidate(TransportAddress address, LocalCandidate base)
public RemoteCandidate findRemoteCandidate(TransportAddress remoteAddress)

public void propertyChange(PropertyChangeEvent event)
public String toString()
public String toShortString()
```

## IceMediaStream

ICE视角的媒体流，即：组件集合。

```
+ org.ice4j.ice.IceMediaStream.java

public static final String PROPERTY_PAIR_CONSENT_FRESHNESS_CHANGED = "PairConsentFreshnessChanged";
public static final String PROPERTY_PAIR_NOMINATED = "PairNominated";
public static final String PROPERTY_PAIR_STATE_CHANGED = "PairStateChanged";
public static final String PROPERTY_PAIR_VALIDATED = "PairValidated";

public static IceMediaStream build(Agent parentAgent, String name)

public Agent getParentAgent()
public String getName()
public CheckList getCheckList()
public Logger getLogger()

public Component getComponent(int id)
public List<Component> getComponents()
public int getComponentCount()
public List<Integer> getComponentIDs()
public void removeComponent(Component component)

public LocalCandidate findLocalCandidate(TransportAddress address, LocalCandidate base)
public RemoteCandidate findRemoteCandidate(TransportAddress remoteAddress)
public CandidatePair findCandidatePair(TransportAddress localAddress, TransportAddress remoteAddress)
public CandidatePair findCandidatePair(String localUFrag, String remoteUFrag)

public void addPairChangeListener(PropertyChangeListener l)
public void removePairStateChangeListener(PropertyChangeListener l)

public String getRemoteUfrag()
public void setRemoteUfrag(String remoteUfrag)

public String getRemotePassword()
public void setRemotePassword(String remotePassword)
```

## CheckList

CheckList是一个包含状态（即：CheckListState）的CandidatePair列表。ICE Agent会对CheckList中的CandidatePair进行STUN连接检查。Offer/Answer交换中产生的每个正在使用的媒体流都有一个CheckList。根据ICE的异步特性，可以从不同位置访问CheckList。因此，CheckList把CandidatePair存储在Vector中。

```
+ org.ice4j.ice.CheckList.java

public static final String PROPERTY_CHECK_LIST_STATE = "CheckListState";
public static final String PROPERTY_CHECK_LIST_CHECKS = "CheckListChecks";

public void addStateChangeListener(PropertyChangeListener l)
public void removeStateChangeListener(PropertyChangeListener l)
public void addChecksListener(PropertyChangeListener l)
public void removeChecksListener(PropertyChangeListener l)

public IceMediaStream getParentStream()
public String getName()
public CheckListState getState()

public synchronized CandidatePair findPairMatching(LocalCandidate local, RemoteCandidate remote)
public synchronized boolean isActive()
public synchronized boolean allChecksCompleted()
public synchronized boolean isFrozen()

public synchronized boolean containsNomineeForComponent(Component component)
```

## CheckListState

每个CheckList关联一个状态，捕获了媒体流的ICE检查状态。存在三种状态：1、Running：媒体流的ICE检查正在进行。2、Completed：ICE检查已经为媒体流的每个组件生成了推荐候选对。因此，ICE已经成功，并可以发送媒体。3、Failed：媒体流的ICE检查没有完全成功。CheckList作为Offer/Answer交换的结果第一次被构造时，被设置为Running状态。

```
+ org.ice4j.ice.CheckListState.java

RUNNING("Running"),
COMPLETED("Completed"),
FAILED("Failed");
```

## IceProcessingState

RFC 5245提到的，跨所有媒体流的ICE处理也有一个关联状态。1、Running：ICE处理正在进行。2、Completed：ICE处理已经完成。3、Failed：ICE处理没有成功。为了方便起见，还添加了两个额外的状态。第一个状态是Waiting，表示Agent开始处理之前的状态，这是Agent的默认状态。第一个状态是Terminated，RFC 5245中说到，对于使用这些候选的媒体流的所有对等点，ICE处理一旦进入Completed状态，Agent应该额外等待3秒钟，然后Agent可能会终止响应检查或在候选对象上生成触发检查。那时，Agent可能会释放候选对象。这表示Agent不再需要处理输入检查并准备进行垃圾回收的状态。这就是Terminated状态。

```
+ org.ice4j.ice.IceProcessingState.java

WAITING("Waiting"),
RUNNING("Running"),
COMPLETED("Completed"),
FAILED("Failed"),
TERMINATED("Terminated");

public String toString()
public boolean isOver()
public boolean isEstablished()
```

## FoundationsRegistry

在单个Agent的有效期内跟踪并生成新的Foundation。

```
+ org.ice4j.ice.FoundationsRegistry.java

public void assignFoundation(Candidate<?> candidate)
public String obtainFoundationForPeerReflexiveCandidate()
public int size()
```

## CandidatePrioritizer

候选对象排序器，根据候选对象的优先级进行比较。

```
+ org.ice4j.ice.CandidatePrioritizer.java

public static int compareCandidates(Candidate<?> c1, Candidate<?> c2)
```

## DefaultNominator

实现ice4j内部的推荐策略。

```
+ org.ice4j.ice.DefaultNominator.java

public DefaultNominator(Agent parentAgent)

public void propertyChange(PropertyChangeEvent ev)
public NominationStrategy getStrategy()
public void setStrategy(NominationStrategy strategy)
```

## NominationStrategy

DefaultNominator实现类当前支持的推荐策略。应用程序可以选择其中一个策略，或选择NONE，防止应用程序想自己处理推荐。注意：NominationStrategy是ice4j的概念，RFC 5245中并未提及。

```
+ org.ice4j.ice.NominationStrategy.java

NONE("None"),
NOMINATE_FIRST_VALID("NominateFirstValid"),
NOMINATE_HIGHEST_PRIO("NominateHighestPriority"),
NOMINATE_FIRST_HOST_OR_REFLEXIVE_VALID("NominateFirstHostOrReflexiveValid"),
NOMINATE_BEST_RTT("NominateBestRTT");

public static NominationStrategy fromString(String string)
public String toString()
```

## KeepAliveStrategy

保留CandidatePair时的选择策略。

```
+ org.ice4j.ice.KeepAliveStrategy.java

SELECTED_ONLY("selected_only"),
SELECTED_AND_TCP("selected_and_tcp"),
ALL_SUCCEEDED("all_succeeded");

public static KeepAliveStrategy fromString(String string)
public String toString()
```

## NetworkUtils

处理网络地址时使用的工具方法和字段。

```
+ org.ice4j.ice.NetworkUtils.java

public static final String IN6_ADDR_ANY = "::0";
public static final String IN4_ADDR_ANY = "0.0.0.0";
public static final String IN_ADDR_ANY = determineAnyAddress();
public static final int MAX_PORT_NUMBER = 65535;
public static final int MIN_PORT_NUMBER = 1024;

public static boolean isWindowsAutoConfiguredIPv4Address(InetAddress add)
public static boolean isIPv4Address(String address)
public static boolean isIPv6Address(String address)
public static boolean isValidIPAddress(String address)
public static boolean isValidPortNumber(int port)
public static boolean isInterfaceLoopback(NetworkInterface iface)
public static boolean isInterfaceUp(NetworkInterface iface)
public static boolean isInterfaceVirtual(NetworkInterface iface)

public static int getRandomPortNumber()
public static int getRandomPortNumber(int min, int max)
public static InetAddress getInetAddress(String hostAddress) throws UnknownHostException

public static byte[] strToIPv4(String ipv4AddrStr)
public static byte[] strToIPv6(String ipv6AddrStr)
public static byte[] mappedIPv4ToRealIPv4(byte[] addr)
public static String stripScopeID(String ipv6Address)
```

## IceSdpUtils

WebRTC或SIP应用程序使用jain-sdp时的工具方法。

```
+ org.ice4j.ice.sdp.IceSdpUtils.java

public static final String ICE_UFRAG = "ice-ufrag";
public static final String ICE_PWD = "ice-pwd";
public static final String ICE_OPTIONS = "ice-options";
public static final String ICE_OPTION_TRICKLE = "trickle";
public static final String MID = "mid";

public static void setIceCredentials(SessionDescription sDes, String uFrag, String pwd) throws NullPointerException
public static void initMediaDescription(MediaDescription mediaDescription, IceMediaStream iceMediaStream)
public static void initSessionDescription(SessionDescription sDes, Agent agent) throws IllegalArgumentException
public static Collection<Attribute> createTrickleUpdate(Collection<LocalCandidate> localCandidates)
```
