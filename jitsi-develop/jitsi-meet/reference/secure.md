# 设置安全域名

## 配置prosody

+ 打开配置文件：

```bash
vi /etc/prosody/conf.avail/192.168.56.103.cfg.lua
```

+ 修改虚拟主机：

```
VirtualHost "192.168.56.103"
    -- 修改：authentication = "jitsi-anonymous"
    authentication = "internal_hashed"
```

+ 添加虚拟主机：

```
VirtualHost "guest.192.168.56.103"
    authentication = "anonymous"
    c2s_require_encryption = false
```

## 配置jitsi-meet

+ 打开配置文件：

```bash
vi /etc/jitsi/meet/192.168.56.103-config.js
```

+ 添加匿名域名：

```
var config = {

    hosts: {
        // XMPP域名
        domain: '192.168.56.103',

        // 使用认证时，为来宾用户设置的域名
        // 修改：anonymousdomain: 'guest.example.com',
        anonymousdomain: 'guest.192.168.56.103',

        // ...
    },
    // ...
};
```

## 配置jicofo

+ 打开配置文件：

```bash
vi /etc/jitsi/jicofo/jicofo.conf
```

+ 添加认证配置：

```
jicofo {
  authentication: {
    enabled: "true"
    type: "XMPP"
    login-url: "192.168.56.103"
  }
}
```

## 创建prosody用户

```bash
# sudo prosodyctl register <username> 192.168.56.103 <password>
sudo prosodyctl register test 192.168.56.103 test
```

## 重启服务

```bash
systemctl restart prosody
systemctl restart jicofo
systemctl restart jitsi-videobridge2
```
