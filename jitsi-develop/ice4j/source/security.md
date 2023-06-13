# 安全性

## CredentialsAuthority

使栈（stack）可以验证包含MessageIntegrityAttribute的输入信息的完整性。

```
+ org.ice4j.security.CredentialsAuthority.java
  + org.ice4j.ice.ConnectivityCheckServer.java
  + org.ice4j.security.LongTermCredentialSession.java

public byte[] getLocalKey(String username);
public byte[] getRemoteKey(String username, String media);

public boolean checkLocalUserName(String username);
```

## CredentialsManager

通过注册的CredentialsAuthority实现，可以验证输入的MessageIntegrityAttribute。这种机制的要点在于，允许处理大量潜在用户的应用程序（例如：STUN/TURN服务器）或只处理少量用户的应用程序（例如：ICE的实现）使用。

```
+ org.ice4j.security.CredentialsManager.java

public void registerAuthority(CredentialsAuthority authority)
public void unregisterAuthority(CredentialsAuthority authority)

public byte[] getLocalKey(String username)
public byte[] getRemoteKey(String username, String media)

public boolean checkLocalUserName(String username)
```

## LongTermCredential

STUN长期证书。

```
+ org.ice4j.security.LongTermCredential.java

public LongTermCredential(byte[] username, byte[] password)
public LongTermCredential(String username, String password)

public byte[] getUsername()
public byte[] getPassword()
public static byte[] getBytes(String s)
public static String toString(byte[] bytes)
```
