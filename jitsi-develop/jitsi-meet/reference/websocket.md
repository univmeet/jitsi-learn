# 启用WebSocket

## 配置prosody

```
/etc/prosody/conf.avail/192.168.56.103.cfg.lua

添加配置
cross_domain_websocket = false;
consider_websocket_secure = true;

VirtualHost "192.168.56.103"
    ...
    modules_enabled = {
        ...
        "websocket";
        "smacks";
        ...
    }
    ...
    smacks_max_unacked_stanzas = 5;
    smacks_hibernation_time = 60;
    smacks_max_hibernated_sessions = 1;
    smacks_max_old_sessions = 1;
```

## 配置nginx

```
/etc/nginx/sites-available/192.168.56.103.conf

upstream prosody {
    zone upstreams 64K;
    server 127.0.0.1:5280;
    keepalive 2;
}

map $arg_vnode $prosody_node {
    default prosody;
    v1 v1;
    v2 v2;
    v3 v3;
    v4 v4;
    v5 v5;
    v6 v6;
    v7 v7;
    v8 v8;
}

server {
    ...
    # xmpp-websocket
    location = /xmpp-websocket {
        proxy_pass http://$prosody_node/xmpp-websocket?prefix=$prefix&$args;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $http_host;
        tcp_nodelay on;
    }
    ...
}
```

## 配置jitsi-meet

```
/etc/jitsi/meet/192.168.56.103-config.js

var config = {
    ...
    // Websocket URL
    websocket: 'wss://192.168.56.103/' + subdir + 'xmpp-websocket',
    ...
}
```

## 重启服务

```
systemctl restart prosody
systemctl restart nginx
systemctl restart jicofo
```
