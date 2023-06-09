# 配置白板

https://github.com/jitsi/excalidraw-backend
https://github.com/excalidraw/excalidraw-room

## 安装所需软件

+ 安装nodejs：

```bash
# https://github.com/nodesource/distributions
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - && sudo apt install -y nodejs
```

+ 安装node-typescript：

```bash
sudo apt install node-typescript
```

+ 安装git：

```bash
sudo apt install git
```

## 构建excalidraw

+ 克隆代码仓库：

```bash
mkdir /root/jitsi
cd /root/jitsi
git clone https://github.com/jitsi/excalidraw-backend.git
```

+ 安装项目依赖：

```bash
cd /root/jitsi/excalidraw-backend
npm install
```

+ 添加环境配置：

```bash
cd /root/jitsi/excalidraw-backend
echo "PORT=3002" >.env.production
```

+ 修改端口配置：

```bash
# 打开源码文件
cd /root/jitsi/excalidraw-backend
vi src/index.ts

# 添加端口属性
prometheus.metrics(io, {
    port: 9091,
    collectDefaultMetrics: true
});
```

+ 服务启动测试：

```bash
# 启动服务
npm start
DEBUG=* npm start

# 停止服务
Ctrl + C
```

## 启动excalidraw

+ 打开配置文件：

```bash
vi /etc/systemd/system/excalidraw.service
```

+ 添加服务配置：

```bash
[Unit]
Description=Excalidraw-backend
Requires=network.target
After=network.target

[Service]
User=root
WorkingDirectory=/root/jitsi/excalidraw-backend
Type=simple
ExecStart=/usr/bin/npm start
Restart=on-failure
RestartSec=250s
TimeoutStartSec=20s
TimeoutStopSec=1min

[Install]
WantedBy=multi-user.target
```

+ 设置开机启动：

```bash
systemctl enable excalidraw
```

+ 立即启动服务：

```bash
systemctl start excalidraw
```

## 配置nginx

+ 打开配置文件：

```bash
# 打开文件
vi /etc/nginx/sites-available/192.168.56.103.conf
```

+ 添加反向代理：

```bash
server {
    # ...

    # excalidraw-backend
    location = /socket.io/ {
        proxy_pass http://192.168.56.103:3002/socket.io/?$args;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $http_host;
        tcp_nodelay on;
    }

    # ...
}
```

+ 重新启动服务：

```bash
systemctl restart nginx
```

## 配置jitsi-meet

+ 打开配置文件：

```bash
vi /etc/jitsi/meet/192.168.56.103-config.js
```

+ 添加白板配置：

```bash
var config = {
    // ...

    // 集成Excalidraw白板的设置
    whiteboard: {
        // 是否启用白板功能
        enabled: true,

        // 支持白板协作的服务器：https://github.com/jitsi/excalidraw-backend
        collabServerBaseUrl: 'https://192.168.56.103',
    },

    // ...
};
```
