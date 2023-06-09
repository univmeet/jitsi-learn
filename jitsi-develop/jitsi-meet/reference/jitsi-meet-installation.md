# jitsi-meet安装

## 安装包

```
jitsi-meet_2.0.8319-1_all.buildinfo                 21-Feb-2023 16:08
jitsi-meet_2.0.8319-1_all.changes                   21-Feb-2023 16:08
jitsi-meet_2.0.8319-1_all.deb                       21-Feb-2023 16:08

jitsi-meet-web_1.0.6991-1_all.buildinfo             21-Feb-2023 16:08
jitsi-meet-web_1.0.6991-1_all.changes               21-Feb-2023 16:08
jitsi-meet-web_1.0.6991-1_all.deb                   21-Feb-2023 16:08

jitsi-meet-web-config_1.0.6991-1_all.deb            21-Feb-2023 16:08

jitsi-meet-prosody_1.0.6991-1_all.deb               21-Feb-2023 16:08

jitsi-meet-tokens_1.0.6991-1_all.deb                21-Feb-2023 16:08

jitsi-meet-turnserver_1.0.6991-1_all.deb            21-Feb-2023 16:08

jitsi-videobridge2_2.2-79-gf6426ea0-1_all.buildinfo 21-Feb-2023 16:08
jitsi-videobridge2_2.2-79-gf6426ea0-1_all.changes   21-Feb-2023 16:08
jitsi-videobridge2_2.2-79-gf6426ea0-1_all.deb       21-Feb-2023 16:08

jicofo_1.0-996-1_all.buildinfo                      21-Feb-2023 16:08
jicofo_1.0-996-1_all.changes                        21-Feb-2023 16:08
jicofo_1.0-996-1_all.deb                            21-Feb-2023 16:08

jibri_8.0-140-gccc7278-1_all.buildinfo              03-Nov-2022 13:52
jibri_8.0-140-gccc7278-1_all.changes                03-Nov-2022 13:52
jibri_8.0-140-gccc7278-1_all.deb                    03-Nov-2022 13:52

jigasi_1.1-288-gccf44d7-1_all.buildinfo             26-Jan-2023 22:49
jigasi_1.1-288-gccf44d7-1_all.changes               26-Jan-2023 22:49
jigasi_1.1-288-gccf44d7-1_all.deb                   26-Jan-2023 22:49
```

## 安装步骤

### Ubuntu22

```bash
# 安装：curl
sudo apt install curl

# 安装：wget
sudo apt install wget

# 安装：gnupg2
sudo apt install gnupg2

# 安装：nginx-full
sudo apt update
sudo apt install nginx-full

# 安装：openjdk-11-jre-headless
sudo apt install openjdk-11-jre-headless
java -version

# 安装：apt-transport-https
sudo apt update
sudo apt install apt-transport-https

# 添加仓库：universe
sudo apt-add-repository universe
sudo apt update

# 设置主机名：quick.jitsi.org
sudo hostnamectl set-hostname 192.168.56.101
或
sudo hostnamectl set-hostname quick.jitsi.org
sudo hostnamectl

# 添加域名映射：quick.jitsi.org（使用IP时，不需要这一步）
vim /etc/hosts
192.168.56.101  quick.jitsi.org
ping "$(hostname)"

# 添加仓库：prosody
echo deb http://packages.prosody.im/debian $(lsb_release -sc) main | sudo tee -a /etc/apt/sources.list
wget https://prosody.im/files/prosody-debian-packages.key -O- | sudo apt-key add -
sudo apt install lua5.2

# 添加仓库：jitsi
curl https://download.jitsi.org/jitsi-key.gpg.key | sudo sh -c 'gpg --dearmor > /usr/share/keyrings/jitsi-keyring.gpg'
echo 'deb [signed-by=/usr/share/keyrings/jitsi-keyring.gpg] https://download.jitsi.org stable/' | sudo tee /etc/apt/sources.list.d/jitsi-stable.list > /dev/null
sudo apt update

# 设置防火墙
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 10000/udp
sudo ufw allow 22/tcp
sudo ufw allow 3478/udp
sudo ufw allow 5349/tcp
sudo ufw enable
sudo ufw status verbose

# 安装：jitsi-meet
sudo apt install jitsi-meet

# 卸载：执行两次
sudo apt purge jitsi-meet jitsi-meet-web jitsi-meet-web-config jitsi-meet-prosody jitsi-meet-turnserver jitsi-meet-tokens jitsi-videobridge2 jicofo jibri jigasi
sudo apt purge nginx-full prosody coturn
find / -name "*jitsi*" | xargs rm -rf
find / -name "*nginx*" | xargs rm -rf
find / -name "*prosody*" | xargs rm -rf
find / -name "*coturn*" | xargs rm -rf

# 清理依赖
sudo apt autoremove
```
