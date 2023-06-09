# Ubuntu 22.04.2

## Prosody

+ 安装Prosody

```
apt install prosody
```

+ 配置Prosody

```
vim /etc/prosody/prosody.cfg.lua
```

+ 数据存储目录

```
/var/lib/prosody
```

```
/etc/letsencrypt/renewal-hooks/deploy/prosody.sh
```


+ snapd

```
# 安装snapd：
apt update
apt install snapd
snap install core; snap refresh core

# 安装certbot：
apt remove certbot
snap install --classic certbot
ln -s /snap/bin/certbot /usr/bin/certbot
```







































