# Prosody组件

组件是服务器向客户端提供的额外服务，通常在主服务器的子域名上（例如：mycomponent.example.com）。示例组件可能是聊天室服务器、用户目录或其他协议的网关。

Prosody支持内部组件（使用Prosody的特定插件来实现）和外部组件（使用大多数独立组件支持的XEP-0114来实现）。

## DNS

如果远程服务器需要在s2s上访问组件，必须在DNS中对其进行记录（**A**或*`_xmpp-server._tcp` **SRV**记录），请参考：[Jabber/XMPP中的DNS配置](https://prosody.im/doc/dns)

## 加密

如果父域名的证书没有覆盖组件，可能还需要为连接组件的s2s连接指定SSL证书。这只需要在配置文件的Component条目中添加一个[ssl选项](https://prosody.im/doc/configure#encryption_and_security_settings)即可实现。如果组件是虚拟主机的直接子域名，那么这个组件会默认使用主机的证书。

## 添加内部组件

要添加组件，只需要在配置文件中添加一行，指定主机名和要使用的组件插件。

添加Prosody [MUC](https://prosody.im/doc/modules/mod_muc)组件的示例如下：

```lua
Component "conference.jabber.org" "muc"
```

### 给内部组件添加额外模块

有些模块，例如[mod_muc_mam](https://prosody.im/doc/modules/mod_muc_mam)，可以为组件启用额外的功能。这些模块不能在全局[`modules_enabled`](https://prosody.im/doc/modules_enabled)中启用，只能在组件的`modules_enabled`中启用，例如：

```lua
Component "conference.jabber.org" "muc"
modules_enabled = {
    "muc_mam",
}
```

## 添加外部组件

Prosody supports all external components that use the XEP-0114 component
protocol (practically all do).

Example external components include [Spectrum](https://spectrum.im/),
which we recommend if you wish to bridge your Prosody server to legacy
IM networks such as MSN, Yahoo, AIM and ICQ. You can use the
documentation on the [Spectrum site](https://spectrum.im/documentation/)
to further assist you.

To add an external component, you need to tell Prosody the address and a
password (or \'secret\') which the component will use to log in. Be sure
that the password and the port (Prosody defaults to 5347) that you tell
Prosody match the same password and port in your component\'s
configuration file(s).

Definition is the same as for internal components, except no internal
plugin is specified:

``` {.code .lua}
Component "msn.example.org"
         component_secret = "mysecretcomponentpassword"
```

To configure the port(s) Prosody listens on for component connections,
set the component\_ports option in the global section of the config. The
default port is 5347. Multiple components can all use the same port to
connect.

Also by default for security Prosody will only listen for connections on
the local interface (127.0.0.1 or 'localhost'). This can optionally be
changed with the global `component_interfaces` option.

For example:

``` {.code .lua}
-- Global config section --
component_ports = { 8888 }
component_interfaces = { "192.168.0.10" }
```

The above would configure Prosody to listen for component connections on
port 8888, coming only to the IP address 192.168.0.10.

XEP-0114 provides no standard for encryption of component connections,
and so connections from external components are not affected by the
\"require\_encryption\" option.
