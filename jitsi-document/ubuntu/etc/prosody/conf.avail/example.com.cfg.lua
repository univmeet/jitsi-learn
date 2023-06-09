-- example.com部分

VirtualHost "example.com"
  enabled = false -- 删除这一行，启用这个主机

  -- 为这个主机分配TLS证书，否则将使用全局部分的设置（如果存在）。
  -- 注意：老式的SSL在5223端口上只支持一个证书，并总是使用全局设置。
  ssl = {
    key = "/etc/prosody/certs/example.com.key";
    certificate = "/etc/prosody/certs/example.com.crt";
  }

---------- 组件 ----------
-- 可以指定组件，添加提供特定服务的主机，例如：多用户会议（MUC：Multi-User Conference），以及传输协议。
-- 组件的更多信息请查看：https://prosody.im/doc/components

-- 在conference.example.com上设置多用户聊天室（MUC：Multi-User Chat Room）服务器：
Component "conference.example.com" "muc"

-- 为服务器代理的文件传输设置SOCKS5字节流代理：
--Component "proxy.example.com" "proxy65"

-- 设置外部组件（默认组件端口为5347）。
--Component "gateway.example.com"
--  component_secret = "password"
