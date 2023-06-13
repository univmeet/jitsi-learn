# Sctp4j


This class represents the first layer of the actual API on top of the bare SctpJni layer. 
It manages the created sockets and muxes all data received from the usrsctp lib into the appropriate socket instance, so the user can send and receive data for a particular sid through the socket instance.

```
org.jitsi_modified.sctp4j.Sctp4j
```

## MSG_NOTIFICATION

```
/**
 * SCTP通知。
 */
public static final int MSG_NOTIFICATION = 0x2000;
```

## init

```
/**
 * https://github.com/sctplab/usrsctp/blob/master/Manual.md#usrsctp_init
 * 
 * 初始化Native SCTP对等点，初始化SCTP输入和输出数据处理器。
 * 
 * 参数：
 * 1. int port：UDP端口
 */
public static void init(int port);
```

## createServerSocket

```
/**
 * 创建SCTP服务端套接字（SctpServerSocket），用于监听接入连接。
 * 
 * 参数：
 * 1. int localSctpPort：本地SCTP套接字端口。
 * 2. Logger parentLogger：父日志记录器。
 * 
 * 返回：
 * SctpServerSocket：SCTP服务端套接字
 */
public static SctpServerSocket createServerSocket(int localSctpPort, Logger parentLogger);
```

## createClientSocket

```
/**
 * 创建SCTP客户端套接字（SctpClientSocket），用于连接SCTP服务端套接字（SctpServerSocket）。
 * 
 * 参数：
 * 1. int localSctpPort：本地SCTP套接字端口。
 * 2. Logger parentLogger：父日志记录器。
 * 
 * 返回：
 * SctpClientSocket：SCTP客户端套接字
 */
public static SctpClientSocket createClientSocket(int localSctpPort, Logger parentLogger);
```
