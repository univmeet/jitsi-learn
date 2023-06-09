-- Prosody示例配置文件
--
-- https://prosody.im/doc/configure中可以找到Prosody的相关配置信息。
--
-- 提示：配置完成之后，运行prosodyctl check config命令，可以检查配置文件的语法是否正确。
-- 如果存在错误，它会告诉你错误是什么，错误在哪里，否则它会保持沉默。
--
-- 接下来要做的唯一一件事是重命名这个文件（删除结尾的.dist），配置Prosody。

---------- 服务器范围的设置 ----------
-- 这部分设置应用于整个服务器，是所有虚拟主机的默认设置。

-- 管理服务器的账号列表（默认为空）。
-- 注意：必须单独创建账号（相关信息请查看：https://prosody.im/doc/creating_accounts）。
-- 示例：admins = { "user1@example.com", "user2@example.net" }
admins = { }

-- 为了获得更好性能，在高负载时启用libevent。
-- 更多信息请查看：https://prosody.im/doc/libevent。
--use_libevent = true

-- Prosody总是会在其源目录中查找模块，这个选项可以指定查找模块时，Prosody最先查找的位置。
-- 可安装的其他模块，请查看社区模块仓库：https://modules.prosody.im/。
-- 对于本地管理员，通常会把本地修改放在/usr/local/层次结构下：
plugin_paths = { "/usr/local/lib/prosody/modules" }

-- Prosody在启动时加载的模块列表。
-- Prosody会在插件文件夹中查找mod_modulename.lua，请确保存在mod_modulename.lua。
-- https://prosody.im/doc/modules中可以找到绑定模块的文档。
modules_enabled = {

  -- 通常需要的模块
  "disco";                 -- 服务发现
  "roster";                -- 让用户拥有花名册，推荐使用
  "saslauth";              -- 用于客户端和服务器认证，如果需要登录，则推荐使用
  "tls";                   -- 在c2s/s2s连接上添加TLS安全支持
  "dialback";              -- s2s回拨支持

  -- 不是必需的模块，但是推荐使用
  "blocklist";             -- 允许用户阻塞与其他用户的通信
  "carbons";               -- 保持多个在线客户端的同步
  "limits";                -- 为XMPP连接启用带宽限制
  "pep";                   -- 允许用户发布头像、情绪、活动、正在播放的音乐等等
  "private";               -- 私有的XML存储（房间标记等等）
  "vcard4";                -- 用户的Profile（存储在PEP中）
  "vcard_legacy";          -- 传统vCard和PEP头像、vCard之间的转换

  -- 最好拥有的模块
  --"csi_simple";          -- 简单有效的移动设备流量优化
  "ping";                  -- 使用pong回复XMPP的ping
  "register";              -- 允许用户使用客户端在这个服务器上注册并修改密码
  "time";                  -- 让其他人指定这个服务器的时间
  "uptime";                -- 报告服务器运行了多长时间
  "version";               -- 答复服务器版本请求
  --"mam";                 -- 在归档中存储信息，允许用户访问

  -- 管理界面
  "admin_adhoc";           -- 允许通过支持ad-hoc命令的XMPP客户端进行管理
  --"admin_telnet";        -- 在localhost的5582端口上打开telnet控制台界面

  -- HTTP模块
  --"bosh";                -- 启用BOSH客户端，又名：HTTP上的Jabber
  --"websocket";           -- WebSocket上的XMPP
  --"http_files";          -- 在HTTP上提供目录中的静态文件

  -- 其他特定功能
  "posix";                 -- POSIX functionality, sends server to background, enables syslog, etc.
  --"announce";            -- 向所有在线用户发送公告
  --"groups";              -- 共享花名册支持
  --"legacyauth";          -- 遗留的认证，只用于一些旧的客户端和机器人程序
  --"motd";                -- 用户登录时向用户发送信息
  --"proxy65";             -- 启用NAT后面的客户端可以使用的文件传输代理服务
  --"server_contact_info"; -- 发布这个服务的联系信息
  --"watchregistrations";  -- 提醒管理员注册
  --"welcome";             -- 欢迎注册账号的用户
}

-- 这些模块时自动加载的，如果希望禁用这些模块，那么需要在这里取消注释
modules_disabled = {
  -- "offline"; -- 存储离线消息
  -- "c2s";     -- 处理客户端连接
  -- "s2s";     -- 处理服务器到服务器的连接
}

-- 为了安全起见，默认禁用账号创建。更多信息请查看：https://prosody.im/doc/creating_accounts
allow_registration = false

-- Debian：不要把服务器发送到后端，systemd或start-stop-daemon会处理这个
daemonize = false;

-- Debian：不要修改这个选项，因为/run/prosody/是允许Prosody写入的少数目录之一
pidfile = "/run/prosody/prosody.pid";

-- 是否强制客户端使用加密连接，这个选项将会阻止客户端进行认证，除非它们使用加密
c2s_require_encryption = true

-- 是否强制服务器使用加密连接，这个选项将会阻止服务器进行认证，除非它们使用加密
s2s_require_encryption = true

-- 服务器到服务器的认证，是否需要验证服务器到服务器连接的证书。
-- false：可以使用其他方法，例如回拨（DNS）
s2s_secure_auth = false

-- 有些服务器包含无效或自签名证书。可以在这里列出不需要使用证书进行认证的远程域名。
-- 这些域名将使用DNS进行认证，即使启用了s2s_secure_auth。
--s2s_insecure_domains = { "insecure.example" }

-- 即使禁用了s2s_secure_auth，仍然可以在这里指定需要有效证书的域名列表
--s2s_secure_domains = { "jabber.org" }

-- 为接入的客户端和服务器连接启用速度限制。
limits = {
  c2s = {
    rate = "10kb/s";
  };
  s2sin = {
    rate = "30kb/s";
  };
}

-- 选择使用的认证后端。internal提供商使用Prosody的配置数据存储来存储认证数据。
authentication = "internal_hashed"

-- 存储：选择使用的存储后端。默认情况下，Prosody在其配置数据目录中使用扁平文件，但是通过模块可以支持更多后端。
-- 默认情况下，包含sql后端，但是需要其他依赖，更多信息请查看：https://prosody.im/doc/storage。
--storage = "sql" -- 默认为internal（Debian：sql需要lua-dbi-sqlite3、lua-dbi-mysql或lua-dbi-postgresql安装包才能工作）

-- 对于sql后端，可以去掉以下其中一个注释进行配置：
--sql = { driver = "SQLite3", database = "prosody.sqlite" } -- 默认配置，database为文件名
--sql = { driver = "MySQL", database = "prosody", username = "prosody", password = "secret", host = "localhost" }
--sql = { driver = "PostgreSQL", database = "prosody", username = "prosody", password = "secret", host = "localhost" }

-- 归档配置：如果启用了mod_mam，Prosody会存储所有消息的副本。
-- 这个副本用于同步多个客户端之间的会话，尽管这些会话已经离线。
-- 这个设置用于控制删除消息之前，Prosody将会在归档中保留消息的时间。
-- 也可以配置为把消息存储在内存中，更多归档选项请查看：https://prosody.im/doc/modules/mod_mam
archive_expires_after = "1w" -- 1个星期后删除归档消息

-- 日志配置，高级日志配置请查看：https://prosody.im/doc/logging
-- Debian：把info或更高级别的日志记录到/var/log，把错误记录到syslog
log = {
  -- 日志文件（要获取debug日志，需要把info修改为debug）
  info = "/var/log/prosody/prosody.log";
  error = "/var/log/prosody/prosody.err";
  -- Syslog：
  { levels = { "error" }; to = "syslog";  };
}

-- 去掉注释，启用统计信息，更需信息请查看：https://prosody.im/doc/statistics
-- statistics = "internal"

-- 证书：所有虚拟主机和组件都需要一个证书，这样客户端和服务器才能安全地验证它们的身份。
-- Prosody会自动从这里指定的目录中加载证书/密钥。
-- 更多信息，包括如何使用prosodyctl来自动导入证书（例如，从Let's Encrypt），请查看：https://prosody.im/doc/certificates

-- 查找证书的目录位置（相对于主配置文件）：
certificates = "certs"

-- HTTPS目前只支持单个证书，在这里指定：
--https_certificate = "/etc/prosody/certs/localhost.crt"

---------- 虚拟主机 ----------
-- 需要为希望Prosody提供的每个域名添加一个VirtualHost条目。每个VirtualHost条目下的设置只应用于这个主机。
-- 通常，在/etc/prosody/conf.d/目录下的单独配置文件中维护VirtualHost条目。
-- 在/etc/prosody/conf.avail/目录中可以找到这种示例配置文件。

---------- 其他配置文件 ----------
-- 为了组织配置，可以把VirtualHost和Component的定义添加到它们自己的配置文件中。
-- 这一行包含/etc/prosody/conf.d/中的所有配置文件。
Include "conf.d/*.cfg.lua"

VirtualHost "localhost"

--VirtualHost "example.com"
--  certificate = "/path/to/example.crt"

---------- 组件 ----------
-- 可以指定组件，添加提供特定服务的主机，例如：多用户会议（MUC：Multi-User Conference），以及传输协议。
-- 组件的更多信息请查看：https://prosody.im/doc/components

-- 在conference.example.com上设置多用户聊天室（MUC：Multi-User Chat Room）服务器：
--Component "conference.example.com" "muc"

-- 把MUC信息存储在归档中，运行用户访问
--modules_enabled = { "muc_mam" }

-- 设置外部组件（默认组件端口为5347）。
-- 外部组件允许添加各种服务，例如，到其他网络的网关/传输协议，例如：ICQ、MSN和Yahoo。
-- 更多信息请查看：https://prosody.im/doc/components#adding_an_external_component
--Component "gateway.example.com"
--  component_secret = "password"
