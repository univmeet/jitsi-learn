// 注意：添加新选项时，别忘了记录在这个文档中：
// https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-configuration

// 子目录
var subdir = '<!--# echo var="subdir" default="" -->';

// 子域名
var subdomain = '<!--# echo var="subdomain" default="" -->';
if (subdomain) {
    subdomain = subdomain.substr(0, subdomain.length - 1).split('.').join('_').toLowerCase() + '.';
}

// 如果Web服务器没有提供SSI，则使用空字符串
if (subdir.startsWith('<!--')) {
    subdir = '';
}

// 如果Web服务器没有提供SSI，则使用空字符串
if (subdomain.startsWith('<!--')) {
    subdomain = '';
}

// 是否启用JaaS
var enableJaaS = false;

// 配置
var config = {
    // 连接

    // 主机
    hosts: {
        // XMPP域名
        domain: 'jitsi-meet.example.com',

        // 启用认证时，为来宾用户设置的域名
        // anonymousdomain: 'guest.example.com',

        // 为认证用户设置的域名，默认为：<domain>。
        // authdomain: 'jitsi-meet.example.com',

        // Focus组件的域名，默认为：focus.<domain>。
        // focus: 'focus.jitsi-meet.example.com',

        // XMPP MUC的域名。待修复：使用XEP-0030来发现。
        muc: 'conference.' + subdomain + 'jitsi-meet.example.com',
    },

    // BOSH的URL。待修复：使用XEP-0156来发现。
    bosh: 'https://jitsi-meet.example.com/' + subdir + 'http-bind',

    // Websocket的URL（XMPP）
    // websocket: 'wss://jitsi-meet.example.com/' + subdir + 'xmpp-websocket',

    // Focus参与者的真实JID，可以在这进行覆盖。不要修改用户名，待修复：focus用户名可配置。
    // https://github.com/jitsi/jitsi-meet/issues/7376
    // focusUserJid: 'focus@auth.jitsi-meet.example.com',

    // 桥接器（Colibri）数据通道的相关选项。
    bridgeChannel: {
        // 如果后端公布了多个Colibri Websocket，这个选项可以根据域名过滤掉一些Websocket。
        // 使用第一个不匹配ignoreDomain的URL，回退到第一个匹配ignoreDomain的URL。如果没有设置，则没有任何影响。
        // ignoreDomain: 'example.com',

        // 是否首选SCTP（媒体路径上的WebRTC数据通道），而不是Colibri Websocket。
        // 如果SCTP在后端可用，则SCTP将会用于替换WS。默认为false，仅在SCTP可用且没有可用的WS时使用SCTP。
        // preferSctp: false
    },

    // 测试/实验性功能
    testing: {
        // 是否禁用端对端加密功能。调试可插入流的相关问题时非常有用。
        // disableE2EE: false,

        // 为指定用户数启用XMPP WebSocket（与BOSH相反）。示例：在移动端为10%的用户启用XMPP WebSocket
        // mobileXmppWsThreshold: 10,

        // 是否启用点对点测试模式。禁用时，如果会议中只存在2个参与者，则禁止自动切换到点对点模式。
        // p2pTestMode: false,

        // 是否启用jitsi-meet-torture使用的测试的特定功能。
        // testMode: false,

        // 是否禁用所有新创建的视频元素的自动播放行为。客户端在资源受限的主机上运行时非常有用。
        // noAutoPlayVideo: false,

        // 为指定比例的用户启用callstats，有效值0~100。示例：为5%的用户启用callstats。
        // callStatsThreshold: 5,
    },

    // 是否禁用主持人指示器。
    // disableModeratorIndicator: false,

    // 是否禁用表情符号功能。
    // disableReactions: true,

    // 是否禁用表情符号的节制功能。
    // disableReactionsModeration: false,

    // 是否禁用投票功能。
    // disablePolls: false,

    // 是否禁用本人视图标题（在平铺视图和幻灯片中隐藏本人视图）。
    // disableSelfView: false,

    // 是否在UI中禁用本人视图
    // disableSelfViewSettings: false,

    // 屏幕截图捕获
    // screenshotCapture: {
    //     // 是否启用屏幕截图捕获功能。
    //     enabled: false,
    //
    //     // 屏幕截图捕获功能的模式。
    //     // 1、recording：只在开启录制时截取屏幕共享截图
    //     // 2、always：总是截取屏幕共享截图
    //     mode: 'recording',
    // }

    // 是否通过在信令中过滤掉本地和远程UDP候选来禁用ICE/UDP。
    // webrtcIceUdpDisable: false,

    // 是否通过在信令中过滤掉本地和远程TCP候选来禁用ICE/TCP。
    // webrtcIceTcpDisable: false,

    // 媒体

    // 是否在基于Chromium的浏览器上启用统一计划实现的支持
    // enableUnifiedOnChrome: false,

    // 音频

    // 是否禁用音频音量的测量。
    // disableAudioLevels: false,

    // 音频音量测量的时间间隔。
    // audioLevelsInterval: 200,

    // 是否运行lib-jitsi-meet的无音频检测模块。
    // 如果当前选择的麦克风没有音频输入，则通知用户，并建议用户使用另一个存在的有效设备。
    enableNoAudioDetection: true,

    // 是否在GSM弹窗中显示`Save Logs`链接。这个链接用于收集通话相关的调试信息（XMPP IQ、SDP的Offer/Answer周期）。
    // enableSaveLogs: false,

    // 是否在GSM弹出中隐藏`Show More`链接。这个链接用于显示连接相关的更多统计信息（IP、Port、协议，等等）。
    // disableShowMoreStats: true,

    // 是否运行lib-jitsi-meet的噪音检测模块。
    // 如果当前选择的麦克风存在声音之外的噪音，则通知用户。目的在于让用户知道噪音输入可能会让其他会议参与者感到不适。
    enableNoisyMicDetection: true,

    // 是否只以音频模式开启会议（不接收或发送视频）。
    // startAudioOnly: false,

    // 第N个之后的所有参与者将以音频静音模式开启会议。
    // startAudioMuted: 10,

    // 是否以音频静音模式开启会议。不同于上面的选项，这个选项只适用于本地参与者。
    // 待修复：这两个选项让人感到困惑。
    // startWithAudioMuted: false,

    // 是否开启沉默模式（使用#params），禁用远程参与者的本地音频输出，重新启用音频输出时需要重新加载。
    // startSilent: false,

    // 是否启用对Opus-Red的支持（对Opus的冗余）。
    // enableOpusRed: false,

    // 音频质量配置，用于启用HD音频。注意，这样做会禁用回声消除、噪声抑制和AGC。
    // audioQuality: {
    //     // 是否启用立体声
    //     stereo: false,
    //
    //     // Opus的最大平均码率：6000~510000
    //     opusMaxAverageBitrate: null,
    //
    //     // 是否启用Opus-Dtx，禁用时，如果参与者沉默或静音，则不传输音频包
    //     enableOpusDtx: false,
    // },

    // 噪声抑制配置，默认使用rnnoise。
    // 可以使用以下方式启用可选的Krisp，但是在安装时必须提供Krisp JS SDK文件，确切地说，需要这些文件：
    // 1、https://meet.example.com/libs/krisp/krisp.mjs
    // 2、https://meet.example.com/libs/krisp/models/model_8.kw
    // 3、https://meet.example.com/libs/krisp/models/model_16.kw
    // 4、https://meet.example.com/libs/krisp/models/model_32.kw
    // 注意：Krisp JS SDK v1.0.9已经过测试。
    // noiseSuppression: {
    //     krisp: {
    //         enabled: false,
    //         logProcessStats: false,
    //         debugLogs: false,
    //     },
    // },

    // 视频

    // 本地视频的首选分辨率（高度），默认为：720。
    // resolution: 720,

    // 是否在某个参与者成为主发言人时隐藏已举起的手。
    // disableRemoveRaisedHandOnFocus: false,

    // 发言人统计
    // speakerStats: {
    //     // 是否禁用发言人统计。
    //     disabled: false,
    //
    //     // 是否在发言人统计中包含搜索字段。
    //     disableSearch: false,
    //
    //     // 发言人统计中参与者的排序优先级。
    //     // 1、'role'：主持人排在最上面。
    //     // 2、'name'：按名称的字母顺序排列。
    //     // 3、'hasLeft'：已经离开的参与者排在最下面。
    //     order: [
    //         'role',
    //         'name',
    //         'hasLeft',
    //     ],
    // },

    // 已废弃，请使用：speakerStats.disableSearch。
    // 是否在发言人统计中包含搜索字段。
    // disableSpeakerStatsSearch: false,

    // 已废弃，请使用：speakerStats.order。
    // 发言人统计中参与者的排序优先级。
    // 1、'role'：主持人排在最上面。
    // 2、'name'：按名称的字母顺序排列。
    // 3、'hasLeft'：已经离开的参与者排在最下面。
    // speakerStatsOrder: [
    //     'role',
    //     'name',
    //     'hasLeft',
    // ],

    // 接收的视频质量从HD（高清）降到SD（标清）之前，平铺视图模式中存在多少参与者。`-1`表示禁用。
    // maxFullResolutionParticipants: 2,

    // 用于捕获视频的符合W3C规范的视频约束。
    // 目前用于lib-jitsi-meet的`util#browser#usesNewGumFlow`返回true的浏览器。
    // 这个约束与分辨率（`resolution`）的配置值无关。默认要求的理想分辨率为720p。
    // constraints: {
    //     video: {
    //         height: {
    //             ideal: 720,
    //             max: 720,
    //             min: 240,
    //         },
    //     },
    // },

    // 是否禁用同步播放支持。
    // disableSimulcast: false,

    // 是否启用层暂停。启用时，没有使用HD（高清）层的端点将会被挂起（不再发送），直到再次请求这些端点。
    // Chrome上必须启用这个设置，屏幕共享才能正常工作。警用这个设置，可能会导致客户端发送低分辨率的屏幕共享。
    // enableLayerSuspension: false,

    // 第N个之后所有参与者都将开启视频静音模式。
    // startVideoMuted: 10,

    // 是否开启视频静音通话。与上面的选项不同，这个选项只适用于本地视频。
    // 待修复：这两个选项让人感到困惑。
    // startWithVideoMuted: false,

    // 桌面共享

    // 桌面共享帧率选项，可选。默认值：min:5、max:5。
    // desktopSharingFrameRate: {
    //     min: 5,
    //     max: 5,
    // },

    // 是否开启屏幕共享。
    // 已废弃，因为w3c规范已不再支持这个选项：https://w3c.github.io/mediacapture-screen-share/#dom-mediadevices-getdisplaymedia。
    // 如果调用getDisplayMedia之前，用户没有与Web页面进行交互，那么浏览器会拒绝这个Promise。
    // Firefox和Safari中已经实现了这个功能，Chrome中很快也会实现这个功能：https://bugs.chromium.org/p/chromium/issues/detail?id=1198918。
    // startScreenSharing: false,

    // 录制

    // 已废弃，请使用：recordingService.enabled。
    // 是否启用文件录制。
    // fileRecordingsEnabled: false,

    // 集成Dropbox。
    // dropbox: {
    //     // APP密钥。
    //     appKey: '<APP_KEY>',
    //
    //     // 认证完成之后需要重定向的URL，默认使用：'https://jitsi-meet.example.com/static/oauth.html'。
    //     redirectURI: 'https://jitsi-meet.example.com/subfolder/static/oauth.html',
    // },

    // 录制服务。
    // recordingService: {
    //     // 是否启用录制服务。只在集成了诸如Dropbox时才会显示，
    //     // 启用fileRecordingsServiceEnabled时，会显式集成和通用的录制服务（其配置和存储取决于jibri的配置）。
    //     enabled: false,
    //
    //     // 是否根据后端的实际实现，与其他参与者共享文件录制。
    //     sharingEnabled: false,
    //
    //     // 是否隐藏录制只存储24小时的警告。
    //     hideStorageWarning: false,
    // },

    // 已废弃，请使用：recordingService.enabled。
    // 是否启用录制服务。
    // fileRecordingsServiceEnabled: false,

    // 已废弃，请使用：recordingService.sharingEnabled。
    // 是否根据后端的实际实现，与其他参与者共享文件录制。
    // fileRecordingsServiceSharingEnabled: false,

    // 本地录制配置。
    // localRecording: {
    //     // 是否禁用本地录制。
    //     disable: false,
    //
    //     // 是否在某个参与者进行本地录制时通知所有参与者。
    //     notifyAllParticipants: false,
    //
    //     // 是否禁用本人录制功能（只是本地参与者的流）。
    //     disableSelfRecording: false,
    // },

    // 自定义直播对话框，非YouTube供应商可以进行修改。
    // liveStreaming: {
    //    // 是否启用直播功能
    //    enabled: false,
    //
    //    // 条款链接
    //    termsLink: 'https://www.youtube.com/t/terms',
    //
    //    // 数据隐私链接
    //    dataPrivacyLink: 'https://policies.google.com/privacy',
    //
    //    // 验证流密钥输入字段的正则表达式
    //    validatorRegExpString: '^(?:[a-zA-Z0-9]{4}(?:-(?!$)|$)){4}',
    //
    //    // 直播功能的参考文档链接
    //    helpLink: 'https://jitsi.org/live'
    // },

    // 已废弃，请使用：liveStreaming.enabled。
    // 是否启用直播功能。
    // liveStreamingEnabled: false,

    // 已废弃，请使用：transcription.enabled。
    // 是否启用转录功能。
    // transcribingEnabled: false,

    // 已废弃，请使用：transcription.useAppLanguage。
    // 是否使用应用程序语言进行转录。
    // transcribeWithAppLanguage: true,

    // 已废弃，请使用：transcription.preferredLanguage。
    // 是否使用首选语言进行转录。
    // preferredTranscribeLanguage: 'en-US',

    // 已废弃，请使用：transcription.autoCaptionOnRecord。
    // 是否在录制时自动打开字幕。
    // autoCaptionOnRecord: false,

    // 转录选项。
    // transcription: {
    //     // 是否启用转录功能。
    //     enabled: false,
    //
    //     // 转录语言，可用语言请查找：./src/react/features/transcribing/translation-languages.json。
    //     translationLanguages: ['en', 'es', 'fr', 'ro'],
    //
    //     // 语言列表顶部显示的重要语言。
    //     translationLanguagesHead: ['en'],
    //
    //     // 是否使用应用程序语言进行转录，默认为true。应用程序语言在参与者设置中显示设置，或根据环境自动检测。
    //     // 例如：如果在使用法语作为默认语言的Chrome实例中打开应用程序，那么这个参与者将使用法语进行转录。
    //     useAppLanguage: true,
    //
    //     // 转录器的首选语言。这个设置只在useAppLanguage显示设置为false时有效。
    //     // 可用语言请查找：./src/react/features/transcribing/transcriber-langs.json。
    //     preferredLanguage: 'en-US',
    //
    //     // 是否对所有参与者禁用转录开启模式
    //     disableStartForAll: false,
    //
    //     // 是否在录制时自动打开字幕。
    //     autoCaptionOnRecord: false,
    // },

    // 混杂

    // 通道`last N`属性的默认值，-1表示无限制。
    channelLastN: -1,

    // 连接指示器
    // connectionIndicators: {
    //     autoHide: true,
    //     autoHideTimeout: 5000,
    //     disabled: false,
    //     disableDetails: false,
    //     inactiveDisabled: false
    // },

    // 通过UI控制lastN的值。提供startLastN时，开启会议时使用last-n为startLastN，
    // 通过`Manage Video Quality`滑块选择质量等级时，将会使用channelLastN的值。
    // startLastN: 1,

    // 根据会议中参与者的数量使用不同的`last N`值。对象中的key表示参与者的数量，value值表示参与者达到或超过指定数量时使用的`last N`。
    // 对于给定的示例映射，会议中存在5~29个参与者时，`last N`会被设置为20；存在30~49个参与者时，`last N`会被设置为15。达到第一个阈值之前，默认使用`channelLastN`。
    // lastNLimits: {
    //     5: 20,
    //     30: 15,
    //     50: 10,
    //     70: 5,
    //     90: 2,
    // },

    // 客户端优化视频质量的设置。
    // videoQuality: {
    //     // 防止在JVB连接上协商视频编解码器。客户端生成的SDP应答中出现的编解码器列表会删除这里指定的编解码器。
    //     // 如果`disabledCodec`和`preferredCodec`选项中指定了相同的编解码器，那么以`disabledCodec`设置为准。
    //     // 注意，不能禁用`VP8`，因为`VP8`是强制使用的编解码器，这种情况下，会忽略这个设置。
    //     disabledCodec: 'H264',
    //
    //     // 为JVB连接设置首选的视频编解码器。如果这里指定了`H264`，那么会自动禁用同步播放，因为JVB还不支持H264同步播放。
    //     // 这里指定的首选编解码器存在时，才会重新排列浏览器生成的SDP应答中编解码器的首选顺序。请确保JVB提供了指定的编解码器，这个设置才能生效。
    //     preferredCodec: 'VP8',
    //
    //     // 强制会议使用首选编解码器，即使会议中存在不支持首选编解码器的端点。例如，旧版本的Safari还不支持`VP9`。
    //     // 这会导致Safari不能对支持`VP9`视频的端点发送的视频进行解码。
    //     // 设置为`false`时，只要存在一个端点不支持首选编解码器，会议就会回退为使用`VP8`，这个端点离开时，会议会回归为使用首选编解码器。
    //     enforcePreferredCodec: false,
    //
    //     // 配置视频轨道的同步播放流上强制使用的最大比特率。对象中的key表示流的类型（LD、SD或HD），value表示特定流类型上设置的`max.bitrates`。
    //     // 实际发送带宽因浏览器计算的可用带宽而不同，并受限于这里指定的值。目前尚未根据移动客户端在APP上实现这一点。
    //     maxBitratesVideo: {
    //         H264: {
    //             low: 200000,
    //             standard: 500000,
    //             high: 1500000,
    //         },
    //         VP8 : {
    //             low: 200000,
    //             standard: 500000,
    //             high: 1500000,
    //         },
    //         VP9: {
    //             low: 100000,
    //             standard: 300000,
    //             high: 1200000,
    //         },
    //     },
    //
    //     // 用于覆盖应用程序中使用的视频适量等级对应的视频缩略图高度的默认阈值。key：正数，表示质量等级的最小缩略图高度。
    //     // 以下默认配置中，缩略图高度达到360个像素之前，应用程序将会使用`low`质量等级。
    //     // 如果缩略图高度达到720个像素，那么应用程序将会切换到高质量等级。目前允许的质量等级
    //     // 1、`low`：低质量等级（180p）
    //     // 2、`standard`：中质量等级（360p）
    //     // 3、`high`：高质量等级（720p）
    //     minHeightForQualityLvl: {
    //         360: 'standard',
    //         720: 'high',
    //     },
    // },

    // 通知的超时时间
    // notificationTimeouts: {
    //     short: 2500,
    //     medium: 5000,
    //     long: 10000,
    // },

    // 录制限制通知的相关选项。
    // recordingLimit: {
    //
    //    // 录制限制时间（分钟），注意，这个数字只出现在通知文本中，不会强制限制实际的录制时间，实际的录制时间限制在jibri中配置。
    //    limit: 60,
    //
    //    // 没有录制限制的应用程序名称。
    //    appName: 'Unlimited recordings APP',
    //
    //    // 没有录制限制的应用程序URL。
    //    appURL: 'https://unlimited.recordings.app.com/',
    // },

    // 是否禁用RTX（RFC 4588）。默认：`false`。
    // disableRtx: false,

    // 是否禁用beforeunload处理器，把Jitsi Meet的所有'beforeunload'逻辑（清理、离开、断开连接，等等）迁移到'unload'事件中。
    // disableBeforeUnloadHandlers: true,

    // 是否在这个客户端启用TCC支持，默认启用。
    // enableTcc: true,

    // 是否在这个客户端启用REMB支持，默认启用。
    // enableRemb: true,

    // 是否在LJM中启用ICE重新启动逻辑并在ICE失败时显示页面重新加载覆盖。目前默认禁用，因为启用Octo时会导致信号问题。
    // 此外，进行ICE重新启动（不是真正的ICE重启）时，客户端会维护TCC序列号计数器，但是桥接器会重置这个计数器。
    // 桥接器会发送TCC序列号从0开始的媒体包。
    // enableIceRestart: false,

    // 因为桥接器中断而迁移通话时，是否强制客户端重新加载。
    // enableForcedReload: true,

    // 是否为jitsi-videobridge连接使用TURN/UDP服务器（默认会过滤掉TURN/UDP，因为桥接器自身可以通过UDP进行访问，所以通常不需要TURN/UDP）。
    // useTurnUdp: false

    // 是否在支持的浏览器中启用编码转换支持。如果浏览器中启用了相应标记，那么Safari中的端对端就会生效。实验性功能。
    // enableEncodedTransformSupport: false,

    // 界面

    // 是否禁用响应式平铺。
    // disableResponsiveTiles: false,

    // 已废弃，请使用：`securityUi?.hideLobbyButton`。
    // 是否隐藏大厅按钮。
    // hideLobbyButton: false,

    // 已废弃，请使用：`lobby?.autoKnock`。
    // 大厅启用时，是否自动开启敲门。
    // autoKnockLobby: false,

    // 已废弃，请使用：`lobby?.enableChat`。
    // 是否启用大厅聊天。
    // enableLobbyChat: true,

    // 已废弃，请使用：`breakoutRooms.hideAddRoomButton`。
    // 是否隐藏分会场按钮。
    // hideAddRoomButton: false,

    // 是否要求用户总是指定显示名。
    // requireDisplayName: true,

    // 是否为音频启用WebHID功能。
    // enableWebHIDFeature: false,

    // 已废弃，请使用：'welcomePage.disabled'。
    // 是否使用欢迎页面。设置为false时，如果没有指定房间，则会加入一个随机房间。
    // enableWelcomePage: true,

    // 欢迎页面的配置。
    // welcomePage: {
    //     // 是否禁用欢迎页面。禁用时，如果没有指定房间，则会加入一个随机房间。
    //     disabled: false,
    //
    //     // 自定义路径，登录页面会被重定向到这个路径。
    //     customUrl: ''
    // },

    // 大厅屏幕配置
    // lobby {
    //     // 大厅启用时，是否自动开启敲门，用于替代：`autoKnockLobby`。
    //     autoKnock: false,
    //
    //     // 是否启用大厅聊天，用于替代：`enableLobbyChat`。
    //     enableChat: true,
    // },

    // UI元素安全性的相关选项。
    // securityUi: {
    //     // 是否隐藏大厅按钮，用于替代：`hideLobbyButton`。
    //     hideLobbyButton: false,
    //
    //     // 是否禁用大厅密码设置和输入。
    //     disableLobbyPassword: false,
    // },

    // 是否禁用在加入会议时注册的应用程序快捷键。
    // disableShortcuts: false,

    // 是否禁止初始化浏览器的getUserMedia请求。用户只想开启屏幕共享会议时非常有用。
    // disableInitialGUM: false,

    // 是否启用关闭页面，挂断通话时，会忽略欢迎页面的重定向。
    // enableClosePage: false,

    // 是否在1对1会议通话中禁止隐藏远程缩略图。null：鼠标移动显示工具栏时，还会禁止显示远程视频。
    // disable1On1Mode: null | false | true,

    // 默认的本地显示名称。
    // defaultLocalDisplayName: 'me',

    // 默认的远程显示名称。
    // defaultRemoteDisplayName: 'Fellow Jitster',

    // 是否在参与者缩略图中隐藏显示名。
    // hideDisplayName: false,

    // 是否隐藏悬浮在工具箱上的主发言人名称标识。
    // hideDominantSpeakerBadge: false,

    // 用户界面的默认语言，不能被覆盖。
    // defaultLanguage: 'en',

    // 是否禁用Profile以及Profile设置中所有字段的编辑（显示名和电子邮箱）。
    // disableProfile: false,

    // 是否隐藏Profile设置下的电子邮箱部分。
    // hideEmailInSettings: false,

    // 房间密码的数字位数限制，默认：roomPasswordNumberOfDigits: false,
    // roomPasswordNumberOfDigits: 10,

    // 向用户显示的信息，示例：这个服务将会在01:00 AM GMT进行维护。
    // noticeMessage: '',

    // 是否启用日历集成，取决于googleApiApplicationClientID和microsoftApiApplicationClientID。
    // enableCalendarIntegration: false,

    // 预加入页面配置。
    // prejoinConfig: {
    //     // 是否在加入会议前显示预加入页面，用户可以在这个页面中配置设备，用于替换：`prejoinPageEnabled`。
    //     enabled: true,
    //
    //     // 是否在预加入屏幕中隐藏参与者名称编辑字段。如果requireDisplayName也被设置为true，
    //     // 仍然应该在iframe api的初始对象中通过jwt或userInfo来提供显示名，使这个设置有效。
    //     hideDisplayName: false,
    //
    //     // 其他加入选项下拉框中隐藏的按钮列表
    //     hideExtraJoinButtons: ['no-audio', 'by-phone'],
    // },

    // 是否允许用户编辑显示名（主要用于与JWT一起使用时，这样JWT名称才会变成只读）。
    // readOnlyName: false,

    // 是否在参与者加入会议时自动打开etherpad（如果集成了etherpad）。
    // 这个配置在移动APP上无效，因为打开etherpad会遮挡会议控制。这种情况下，最好让用户自己选择是否打开etherpad。
    // openSharedDocumentOnJoin: false,

    // 是否在房间名不安全（名称太简单）并且没有设置密码或启用大厅时显示房间名不安全的警告标签。
    // enableInsecureRoomNameWarning: false,

    // 是否在房间创建之后自动复制邀请路径。
    // enableAutomaticUrlCopy: false,

    // 需要使用CORS的头像路径前缀数组。
    // corsAvatarURLs: [ 'https://www.gravatar.com/avatar/' ],

    // Base URL for a Gravatar-compatible service. Defaults to Gravatar.
    // 已废弃，请使用：`gravatar.baseUrl`。
    // gravatarBaseURL: 'https://www.gravatar.com/avatar/',

    // Gravatar兼容服务设置。
    // gravatar: {
    //     // Gravatar兼容服务的基础URL，默认为Gravatar。
    //     baseUrl: 'https://www.gravatar.com/avatar/',
    //
    //     // 是否禁用Gravatar。
    //     disabled: false,
    // },

    // 在邀请邮件主题中显示的应用程序名称，用于替换：interfaceConfig.APP_NAME。
    // inviteAppName: null,

    // 工具栏中显示的工具栏按钮名称，包括`更多操作`菜单，用于替换：interfaceConfig.TOOLBAR_BUTTONS。
    // 如果提供了这个设置，则会显示按钮。除了`直播`和`录制`，这两个按钮需要主持人角色以及在config.js启用其他一些设置。
    // 此外，使用JWT的用户，不显示Profile按钮。注意：
    // 1、无法在`更多操作`菜单中选择按钮。
    // 2、无法控制按钮位置。
    // 3、'desktop'用于控制"共享屏幕"按钮。
    // 4、如果`toolbarButtons`为undefined，则在UI中启用所有按钮。
    // toolbarButtons: [
    //     'camera',
    //     'chat',
    //     'closedcaptions',
    //     'desktop',
    //     'download',
    //     'embedmeeting',
    //     'etherpad',
    //     'feedback',
    //     'filmstrip',
    //     'fullscreen',
    //     'hangup',
    //     'help',
    //     'highlight',
    //     'invite',
    //     'linktosalesforce',
    //     'livestreaming',
    //     'microphone',
    //     'noisesuppression',
    //     'participants-pane',
    //     'profile',
    //     'raisehand',
    //     'recording',
    //     'security',
    //     'select-background',
    //     'settings',
    //     'shareaudio',
    //     'sharedvideo',
    //     'shortcuts',
    //     'stats',
    //     'tileview',
    //     'toggle-camera',
    //     'videoquality',
    //     'whiteboard',
    // ],

    // 控制工具栏可见性的相关配置。
    // toolbarConfig: {
    //     // 工具栏按钮在屏幕上可见的初始化毫秒数，用于替换：interfaceConfig.INITIAL_TOOLBAR_TIMEOUT
    //     initialTimeout: 20000,
    //
    //     // 工具栏按钮在屏幕上可见的毫秒数，用于替换：interfaceConfig.TOOLBAR_TIMEOUT
    //     timeout: 4000,
    //
    //     // 是否总是显示工具栏，还是在x毫秒后隐藏，用于替换：interfaceConfig.TOOLBAR_ALWAYS_VISIBLE
    //     alwaysVisible: false,
    //
    //     // 是否在打开聊天对话框中自动移仓工具栏。
    //     autoHideWhileChatIsOpen: false,
    // },

    // 工具栏按钮，包含通过`toolbarButtonClicked` API暴露的click/tap事件。
    // 只传递按钮的`key`，会阻止click/tap程序的执行；传递一个对象，
    // 包含按钮的`key`和标记为false的`preventExecution`，不会阻止click/tap程序的执行。
    // 下面的数组使用混合模式来传递按钮。
    // buttonsWithNotifyClick: [
    //     'camera',
    //     {
    //         key: 'chat',
    //         preventExecution: false
    //     },
    //     {
    //         key: 'closedcaptions',
    //         preventExecution: true
    //     },
    //     'desktop',
    //     'download',
    //     'embedmeeting',
    //     'end-meeting',
    //     'etherpad',
    //     'feedback',
    //     'filmstrip',
    //     'fullscreen',
    //     'hangup',
    //     'hangup-menu',
    //     'help',
    //     {
    //         key: 'invite',
    //         preventExecution: false
    //     },
    //     'livestreaming',
    //     'microphone',
    //     'mute-everyone',
    //     'mute-video-everyone',
    //     'noisesuppression',
    //     'participants-pane',
    //     'profile',
    //     {
    //         key: 'raisehand',
    //         preventExecution: true
    //     },
    //     'recording',
    //     'security',
    //     'select-background',
    //     'settings',
    //     'shareaudio',
    //     'sharedvideo',
    //     'shortcuts',
    //     'stats',
    //     'tileview',
    //     'toggle-camera',
    //     'videoquality',
    //     // 安全对话框中的添加密码按钮
    //     {
    //         key: 'add-passcode',
    //         preventExecution: false
    //     },
    //     'whiteboard',
    // ],

    // 会议屏幕按钮前面的隐藏列表。有效值：'microphone'、'camera'、'select-background'、'invite'、'settings'。
    // hiddenPremeetingButtons: [],

    // 参与者上下文菜单的自定义按钮列表。类型：Array<{ icon: string; id: string; text: string; }>。
    // customParticipantMenuButtons: [],

    // 工具栏的自定义按钮列表。类型：Array<{ icon: string; id: string; text: string; }>。
    // customToolbarButtons: [],

    // 统计信息

    // 是否在TraceablePeerConnection中启用统计收集。
    // 这个配置对调试（webrtc统计的后处理/分析）非常有用，因为这是在jitsi-meet-torture带宽预估测试中完成的。
    // gatherStats: false,

    // 调用PeerConnection.getStats()的时间间隔，默认为10000
    // pcStatsInterval: 10000,

    // 把统计信息发送到callstats.io时提供的应用程序ID。
    // callStatsID: '',

    // 把统计信息发送到callstats.io时提供的应用程序密钥。
    // callStatsSecret: '',

    // 是否禁止把统计信息发送到callstats.io。
    // callStatsApplicationLogsDisabled: false,

    // API中描述的callstats的初始化配置参数：https://docs.callstats.io/docs/javascript#callstatsinitialize-with-app-secret
    // callStatsConfigParams: {
    //     // 是否禁用callstats.js的window.onbeforeunload参数
    //     disableBeforeUnloadHandler: true,
    //
    //     // 开发人员指定的应用程序版本
    //     applicationVersion: "app_version",
    //
    //     // 是否禁用预呼叫测试，默认启用
    //     disablePrecalltest: true,
    //
    //     // 进行呼叫/预呼叫测试的站点/场所的名称/ID
    //     siteID: "siteID",
    //
    //     // 其他ID对象，包含应用程序相关的ID
    //     additionalIDs: {
    //         customerID: "客户ID，示例：walmart",
    //         tenantID: "租户ID，示例：monster",
    //         productName: "产品名称，示例：Jitsi",
    //         meetingsName: "会议名称，示例：Jitsi loves callstats",
    //         serverName: "服务器/中间设备名称，示例：jvb-prod-us-east-mlkncws12",
    //         pbxID: "PBX ID，示例：walmart",
    //         pbxExtensionID: "PBX扩展ID，示例：5625",
    //         fqExtensionID: "全限定扩展ID，示例：+71 (US) +5625",
    //         sessionID: "会话ID，示例：session-12-34",
    //     },
    //
    //     // 是否收集chrome浏览器中的遗留统计
    //     collectLegacyStats: true,
    //
    //     // 是否收集本地IP地址
    //     collectIP: true,
    // },

    // 是否把参与者的显示名称发送到callstats。
    // enableDisplayNameInStats: false,

    // 是否把参与者的电子邮箱（如果可以获取）发送到callstats及其他分析平台。
    // enableEmailInStats: false,

    // 人脸标识的相关选项。
    // faceLandmarks: {
    //     // 是否通过共享人脸坐标居中视频中的人脸。
    //     enableFaceCentering: false,
    //
    //     // 是否检测人脸表情并与其他参与者共享数据。
    //     enableFaceExpressionsDetection: false,
    //
    //     // 是否在发言人统计中显示人脸表情。
    //     enableDisplayFaceExpressions: false,
    //
    //     // 是否为人脸标识启用RTC统计。
    //     enableRTCStats: false,
    //
    //     // 发送新的人脸居中坐标数据所需的最小人脸移动百分比阈值
    //     faceCenteringThreshold: 10,
    //
    //     // 为检测人脸标识，处理新捕获的图片的毫秒数
    //     captureInterval: 1000,
    // },

    // 启用callstats时，对参与者显示的自动反馈百分比，默认100%。如果设置为0，不请求自动反馈。
    // feedbackPercentage: 100,

    // 隐私

    // 是否在禁用第三方请求时，不与其他服务器进行联系。这意味着头像将在本地生成，callstats集成将不起作用。
    // disableThirdPartyRequests: false,

    // 点对点模式：只有两个参与者时使用（如果启用的话）。
    p2p: {
        // 是否启用点对点模式。启用点对点模式时，如果房间中只有2个参与者，那么系统会尝试建立直接连接。
        // 如果成功建立直连，那么会议会停止通过JVB发送数据，而是使用点对点连接。当第三个参与者加入会议时，会议会迁移到JVB连接上。
        enabled: true,

        // 是否为点对点连接启用Chromium的统一计划实现支持
        // enableUnifiedOnChrome: false,

        // 为点对点连接设置ICE传输策略。目前，可选的值为：`all`和`relay`。枚举定义：
        // https://www.w3.org/TR/webrtc/#rtcicetransportpolicy-enum。
        // 如果没有设置，有效值为`all`。
        // iceTransportPolicy: 'all',

        // 点对点连接中的首选视频编解码器，接受的编解码器：`VP8`、`VP9`和`H264`。
        // preferredCodec: 'H264',

        // 禁用的编解码器，在点对点连接中防止视频编解码器被协商。
        // disabledCodec: '',

        // 第三个参与者离开会议（过滤掉页面重新加载）后，回到点对点模式需要等待多久。
        // backToP2PDelay: 5,

        // 点对点连接中使用的STUN服务器。
        stunServers: [

            // { urls: 'stun:jitsi-meet.example.com:3478' },
            { urls: 'stun:meet-jit-si-turnrelay.jitsi.net:443' },
        ],
    },

    // 分析平台
    analytics: {
        // 是否禁用分析平台。
        // disabled: false,

        // 谷歌分析平台的跟踪ID。
        // googleAnalyticsTrackingId: 'your-tracking-id-UA-123456-1',

        // Matomo配置：Matomo端点。
        // matomoEndpoint: 'https://your-matomo-endpoint/',

        // Matomo配置：Matomo网站ID。
        // matomoSiteID: '42',

        // Amplitude应用程序密钥。
        // amplitudeAPPKey: '<APP_KEY>',

        // 是否把模糊房间名发送到分析平台（amplitude、rtcstats），默认为false。
        // obfuscateRoomName: false,

        // rtcstats服务器配置：是否启用rtcstats服务器。
        // 启用rtcstats服务器时，每次加入会议时，rtcstats模块会连接提供的rtcstatsEndpoint，
        // 发送PeerConnection相关的统计信息，以及指定时间间隔内轮询的getStats指标。
        // rtcstatsEnabled: false,

        // rtcstats服务器配置：是否启用rtcstats存储日志。
        // rtcstatsStoreLogs: false,

        // rtcstats服务器配置：rtcstats服务器端点。
        // rtcstatsEndpoint: wss://rtcstats-server-pilot.jitsi.net/,

        // rtcstats服务器配置：rtcstats服务器轮询getStats的时间间隔，默认为10000ms。
        // 0：不再轮询getStats，rtcstats客户端只会发送RTCPeerConnection事件的相关数据。
        // rtcstatsPollInterval: 10000,

        // rtcstats服务器配置：是否把SDP发送到rtcstats服务器，还是把所有SDP替换为空字符串。
        // rtcstatsSendSdp: false,

        // 加载为lib-jitsi-meet分析处理器的脚本路径数组。
        // scriptURLs: [
        //     // 谷歌分析
        //     "libs/analytics-ga.min.js",
        //     "https://example.com/my-custom-analytics.js",
        // ],
    },

    // 通过log事件传递给log事件处理器的日志。
    // apiLogLevels: ['warn', 'log', 'error', 'info', 'debug'],

    // 连接的jitsi-meet实例的相关信息，包括服务器查看到的用户区域。
    // deploymentInfo: {
    //     shard: "shard1",
    //     region: "europe",
    //     userRegion: "asia",
    // },

    // 禁止的声音数组，有效值：
    // 'ASKED_TO_UNMUTE_SOUND'
    // 'E2EE_OFF_SOUND'
    // 'E2EE_ON_SOUND'
    // 'INCOMING_MSG_SOUND'
    // 'KNOCKING_PARTICIPANT_SOUND'
    // 'LIVE_STREAMING_OFF_SOUND'
    // 'LIVE_STREAMING_ON_SOUND'
    // 'NO_AUDIO_SIGNAL_SOUND'
    // 'NOISY_AUDIO_INPUT_SOUND'
    // 'OUTGOING_CALL_EXPIRED_SOUND'
    // 'OUTGOING_CALL_REJECTED_SOUND'
    // 'OUTGOING_CALL_RINGING_SOUND'
    // 'OUTGOING_CALL_START_SOUND'
    // 'PARTICIPANT_JOINED_SOUND'
    // 'PARTICIPANT_LEFT_SOUND'
    // 'RAISE_HAND_SOUND'
    // 'REACTION_SOUND'
    // 'RECORDING_OFF_SOUND'
    // 'RECORDING_ON_SOUND'
    // 'TALK_WHILE_MUTED_SOUND'
    // disabledSounds: [],

    // 已废弃，请使用：`disabledSounds`。
    // 是否禁止录制时播放的录制音频通知。
    // disableRecordAudioNotification: false,

    // 已废弃，请使用：`disabledSounds`。
    // 是否禁止其他参与者加入或离开会议时播放的声音。
    // disableJoinLeaveSounds: false,

    // 已废弃，请使用：`disabledSounds`。
    // 是否禁止接收到信息时播放的声音。
    // disableIncomingMessageSound: false,

    // Chrome扩展横幅的信息。
    // chromeExtensionBanner: {
    //     // Chrome扩展的安装地址
    //     url: 'https://chrome.google.com/webstore/detail/jitsi-meetings/kglhbbefdnlheedjiejgomgmfplipfeb',
    //
    //     // Chrome扩展的安装地址：边缘路径
    //     edgeUrl: 'https://microsoftedge.microsoft.com/addons/detail/jitsi-meetings/eeecajlpbgjppibfledfihobcabccihn',
    //
    //     // 扩展信息，用于检查是否安装
    //     chromeExtensionsInfo: [
    //         {
    //             id: 'kglhbbefdnlheedjiejgomgmfplipfeb',
    //             path: 'jitsi-logo-48x48.png',
    //         },
    //         // 边缘扩展信息
    //         {
    //             id: 'eeecajlpbgjppibfledfihobcabccihn',
    //             path: 'jitsi-logo-48x48.png',
    //         },
    //     ]
    // },

    // 端对端配置
    // e2ee: {
    //   labels,
    //   externallyManagedKey: false,
    // },

    // 端对端（参与者到参与者）ping相关的选项。
    // e2eping: {
    //   // 是否启用端对端ping。
    //   enabled: false,
    //
    //   // 等待的响应数。
    //   numRequests: 5,
    //
    //   // 发送端对端ping的最大会议大小。
    //   maxConferenceSize: 200,
    //
    //   // 整个会议每秒钟发送端对端ping信息的最大数量。这个属性用于控制信息的发送节奏，以减小后端负载。
    //   maxMessagesPerSecond: 250,
    // },

    // 是否在触发屏幕共享时尝试使用提供的视频输入设备标签，而不是通过获取桌面流的正常流程来进行处理。
    // 注意：这个选项是实验性的，并且目前只在内部使用。
    // _desktopSharingSourceDevice: 'sample-id-or-label',

    // 已废弃，请使用：deeplinking.disabled。是否阻止切换到另一个应用程序的所有检查，应用程序将继续显示在当前浏览器中。
    // disableDeepLinking: false,

    // 深度链接配置。deeplinking.[ios/android].dynamicLink检查的相关属性信息：
    // https://firebase.google.com/docs/dynamic-links/create-manually
    // deeplinking: {
    //
    //     // 桌面深度链接配置
    //     desktop: {
    //         appName: 'Jitsi Meet'
    //     },
    //
    //     // 是否阻止切换到另一个应用程序的所有检查，应用程序将继续显示在当前浏览器中。
    //     disabled: false,
    //
    //     // 是否在深度链接页面隐藏Logo。
    //     hideLogo: false,
    //
    //     // iOS深度链接配置。
    //     ios: {
    //         // 应用程序名称。
    //         appName: 'Jitsi Meet',
    //
    //         // 用于在移动端浏览器打开APP的移动APP Scheme。
    //         appScheme: 'org.jitsi.meet',
    //
    //         // iOS移动端APP的下载路径。
    //         downloadLink: 'https://itunes.apple.com/us/app/jitsi-meet/id1165103905',
    //
    //         // 动态链接
    //         dynamicLink: {
    //             apn: 'org.jitsi.meet',
    //             appCode: 'w2atb',
    //             customDomain: undefined,
    //             ibi: 'com.atlassian.JitsiMeet.ios',
    //             isi: '1165103905'
    //         }
    //     },
    //
    //     // Android深度链接配置。
    //     android: {
    //         // 应用程序名称。
    //         appName: 'Jitsi Meet',
    //
    //         // 用于在移动端浏览器打开APP的移动APP Scheme。
    //         appScheme: 'org.jitsi.meet',
    //
    //         // Android移动端APP的下载路径。
    //         downloadLink: 'https://play.google.com/store/apps/details?id=org.jitsi.meet',
    //
    //         // Android APP的包名。
    //         appPackage: 'org.jitsi.meet',
    //
    //         // F-Droid移动端APP的下载路径。
    //         fDroidUrl: 'https://f-droid.org/en/packages/org.jitsi.meet/',
    //
    //         // 动态链接
    //         dynamicLink: {
    //             apn: 'org.jitsi.meet',
    //             appCode: 'w2atb',
    //             customDomain: undefined,
    //             ibi: 'com.atlassian.JitsiMeet.ios',
    //             isi: '1165103905'
    //         }
    //     }
    // },

    // 条款、隐私和帮助中心的路径。
    // legalUrls: {
    //     helpCentre: 'https://web-cdn.jitsi.net/faq/meet-faq.html',
    //     privacy: 'https://jitsi.org/meet/privacy',
    //     terms: 'https://jitsi.org/meet/terms'
    // },

    // 是否在本地视频的上下文菜单中禁用视频翻转选项。
    // disableLocalVideoFlip: false,

    // 是否取消本地视频的默认翻转状态，取消翻转后，本地（自己的）视频将不再是镜像视频。
    // doNotFlipLocalVideo: false,

    // 与隐私相关的设置。

    // 是否在应用程序中禁用所有邀请功能（共享、邀请、拨出，等等）。
    // disableInviteFunctions: true,

    // 是否禁止把房间名称存储到最近列表。iframe中将会忽略这个选项，并且房间从不保存在最近列表中。
    // doNotStoreRoom: true,

    // 部署特定的路径。
    // deploymentUrls: {
    //    // 在菜单中显示`帮助`按钮并链接到下面指定的用户文档。
    //    userDocumentationURL: 'https://docs.example.com/video-meetings.html',
    //
    //    // 在菜单中显示`下载APP`按钮并链接到下面指定的下载页面。
    //    downloadAppsUrl: 'https://docs.example.com/our-apps.html',
    // },

    // 远程参与者菜单的相关选项。
    // remoteVideoMenu: {
    //     // 是否禁止渲染远程视频上下文菜单。
    //     disabled: true,
    //
    //     // 是否禁用`剔除`按钮。
    //     disableKick: true,
    //
    //     // 是否禁用`授予主持人角色`按钮。
    //     disableGrantModerator: true,
    //
    //     // 是否禁用`发送私聊信息`按钮。
    //     disablePrivateChat: true,
    // },

    // 销售人员与会议资源链接集成的端点。以下端点需要这个配置：
    // 1、获取最近记录列表：salesforceUrl/records/recents
    // 2、搜索记录：salesforceUrl/records?text=${text}
    // 3、获取记录详情：salesforceUrl/records/${id}?type=${type}
    // 4、链接会议：salesforceUrl/sessions/${sessionId}/records/${id}
    // salesforceUrl: 'https://api.example.com/',

    // 是否禁用远程参与者的静音操作。
    // disableRemoteMute: true,

    // 是否为这个客户端启用lip-sync支持（如果浏览器支持）
    // enableLipSync: false,

    // 外部API路径：用于接收品牌特定的信息。如果没有设置URL或没有这个字段，将会使用默认值。
    // 配置文件必须为JSON文件，没有任何字段是必需的，响应格式如下：
    // {
    //     // 要应用的域名路径（用于替换共享会议链接/嵌入部分的域名）。
    //     inviteDomain: 'example-company.org,
    //
    //     // 背景色的十六进制值。
    //     backgroundColor: '#fff',
    //
    //     // 背景图片路径。
    //     backgroundImageUrl: 'https://example.com/background-img.png',
    //
    //     // 点击Logo图片时的链接路径。
    //     logoClickUrl: 'https://example-company.org',
    //
    //     // Logo图片的路径。
    //     logoImageUrl: 'https://example.com/logo-img.png',
    //
    //     // 头像背景图片
    //     avatarBackgrounds: ['url(https://example.com/avatar-background-1.png)', '#FFF'],
    //
    //     // 大厅/预加入屏幕的背景。
    //     premeetingBackground: 'url(https://example.com/premeeting-background.png)',
    //
    //     // 虚拟背景，视频背景图片列表。如果没有设置这个字段，则使用默认图片；如果设置这个字段，则使用这些图片。
    //     virtualBackgrounds: ['https://example.com/img.jpg'],
    //
    //     // 主题属性对象。所有可能的主题标记列表及其默认值，请查看：
    //     // https://github.com/jitsi/jitsi-meet/tree/master/resources/custom-theme/custom-theme.json
    //     // 主题标记的简短说明，请查看：
    //     // https://github.com/jitsi/jitsi-meet/blob/master/react/features/base/ui/Tokens.ts
    //     customTheme: {
    //         palette: {
    //             ui01: "orange !important",
    //             ui02: "maroon",
    //             surface02: 'darkgreen',
    //             ui03: "violet",
    //             ui04: "magenta",
    //             ui05: "blueviolet",
    //             field02Hover: 'red',
    //             action01: 'green',
    //             action01Hover: 'lightgreen',
    //             disabled01: 'beige',
    //             success02: 'cadetblue',
    //             action02Hover: 'aliceblue',
    //         },
    //         typography: {
    //             labelRegular: {
    //                 fontSize: 25,
    //                 lineHeight: 30,
    //                 fontWeight: 500,
    //             }
    //         }
    //     }
    // }
    // dynamicBrandingUrl: '',

    // 参与者面板的相关选项。
    // participantsPane: {
    //     // 是否隐藏打开主持人设置选项卡的按钮。
    //     hideModeratorSettingsTab: false,
    //
    //     // 是否隐藏更多操作按钮。
    //     hideMoreActionsButton: false,
    //
    //     // 是否隐藏对所有参与者进行静音的按钮。
    //     hideMuteAllButton: false,
    // },

    // 分会场功能的相关选项。
    // breakoutRooms: {
    //     // 是否隐藏分会场按钮，用于替代：`hideAddRoomButton`
    //     hideAddRoomButton: false,
    //
    //     // 是否隐藏自动分配参与者按钮。
    //     hideAutoAssignButton: false,
    //
    //     // 是否隐藏加入分会场按钮。
    //     hideJoinRoomButton: false,
    // },

    // 是否禁止添加更多虚拟背景图片，只使用默认可用的虚拟背景图片。
    // disableAddingBackgroundImages: false,

    // 是否禁止把屏幕共享用作虚拟背景。
    // disableScreensharingVirtualBackground: false,

    // 设置背景透明度，'0'：完全透明；'1'：不透明。
    // backgroundAlpha: 1,

    // 可用的主持房间微服务的路径。如果设置这个属性，欢迎页面会渲染这个服务链接；否则，应用程序不渲染服务链接。
    // moderatedRoomServiceUrl: 'https://moderated.jitsi-meet.example.com',

    // 是否禁用平铺视图。如果禁用，参与者人数达到阈值时不会自动启用平铺视图。
    // disableTileView: true,

    // 是否禁止平铺视图以16:9的纵横比放大覆盖可用空间，在可用空间内显示。
    // disableTileEnlargement: true,

    // 顶部标题中会议信息标签的可见性和行为。如果两个数组中都不存在标签ID，则标题中不显示这个标签。
    // conferenceInfo: {
    //     // 不与工具箱一起隐藏的标签
    //     alwaysVisible: ['recording', 'raised-hands-count'],
    //
    //     // 与工具箱按钮一起自动隐藏的标签
    //     autoHide: [
    //         'subject',
    //         'conference-timer',
    //         'participants-count',
    //         'e2ee',
    //         'transcribing',
    //         'video-quality',
    //         'insecure-room',
    //         'highlight-moment',
    //         'top-panel-toggle',
    //     ]
    // },

    // 是否隐藏会议主题。
    // hideConferenceSubject: false,

    // 是否隐藏会议计时器。
    // hideConferenceTimer: false,

    // 是否隐藏录制标签。
    // hideRecordingLabel: false,

    // 是否隐藏参与者统计。
    // hideParticipantsStats: true,

    // 设置会议主题。
    // subject: 'Conference Subject',

    // 设置会议本地主题。
    // localSubject: 'Conference Local Subject',

    // 这个属性与通过IFrame API来使用Jitsi Meet时的用例相关。
    // 这个属性为true时，Jitsi Meet使用主机页面的本地存储，而不是它自己的存储。
    // 浏览器没有持久化IFrame内部的本地存储时，这个选项非常有用。
    // useHostPageLocalStorage: true,

    // 集成Etherpad（共享文档）。在右下角菜单中添加`打开共享文档`链接，用于打开etherpad文档。
    // etherpad_base: 'https://your-etherpad-installati.on/p/',

    // 要获取拨入访问会议的相关信息，需要提供：dialInNumbersUrl和dialInConfCodeUrl。
    // dialInNumbersUrl：返回可用于拨入的成员json数组：
    // {"countryCode":"US","tollFree":false,"formattedNumber":"+1 123-456-7890"}
    // dialInConfCodeUrl：会议映射器，把会议ID转换为拨入使用的PIN，或把拨入使用的PIN转换为会议ID。
    // 更多信息请查看：resources/cloud-api.swagger

    // jitsi-meet中使用的没有记录的设置列表。
    // _immediateReloadThreshold
    // debug
    // debugAudioLevels
    // deploymentInfo
    // dialOutAuthUrl
    // dialOutCodesUrl
    // dialOutRegionUrl
    // disableRemoteControl
    // displayJids
    // e2eeLabels
    // firefox_fake_device
    // googleApiApplicationClientID
    // iAmRecorder
    // iAmSipGateway
    // microsoftApiApplicationClientID
    // peopleSearchQueryTypes
    // peopleSearchUrl
    // requireDisplayName
    // tokenAuthUrl

    // 品牌化房间别名，用于修改生成的会议邀请链接（与jitsi meet内部获取的品牌化域名相结合）。
    // 例如：https://meet.jit.si/someMeeting可以变为 https://brandedDomain/roomAlias
    // brandingRoomAlias: null,

    // lib-jitsi-meet中使用的没有记录的设置列表。
    // _peerConnStatusOutOfLastNTimeout
    // _peerConnStatusRtcMuteTimeout
    // abTesting
    // avgRtpStatsN
    // callStatsConfIDNamespace
    // callStatsCustomScriptUrl
    // desktopSharingSources
    // disableAEC
    // disableAGC
    // disableAP
    // disableHPF
    // disableNS
    // enableTalkWhileMuted
    // forceJVB121Ratio
    // forceTurnRelay
    // hiddenDomain
    // hiddenFromRecorderFeatureEnabled
    // ignoreStartMuted
    // websocketKeepAlive
    // websocketKeepAliveUrl

    // 触发IFrame API的鼠标移动事件的时间间隔（毫秒）。
    mouseMoveCallbackInterval: 1000,

    // 向用户显示的通知。数组中的元素为通知标题或描述的key。
    // 有些通知是否显示还依赖于其他一些内部逻辑，因此这里添加的通知并不能确保一定会显示。
    // 如果把这个属性设置为false值（例如：null、undefined、false），那么会启用所有通知。
    // notifications: [
    //     'connection.CONNFAIL',                 // 连接失败
    //     'dialog.cameraNotSendingData',         // 用户摄像头没有反馈
    //     'dialog.kickTitle',                    // 用户被剔除
    //     'dialog.liveStreaming',                // 直播通知（等待、打开、关闭、限制）
    //     'dialog.lockTitle',                    // 会议密码设置失败
    //     'dialog.maxUsersLimitReached',         // 达到最大用户限制
    //     'dialog.micNotSendingData',            // 用户的麦克风没有发送音频
    //     'dialog.passwordNotSupportedTitle',    // 密码格式错误导致会议密码设置失败
    //     'dialog.recording',                    // 录制通知（等待、开启、关闭、限制）
    //     'dialog.remoteControlTitle',           // 远程控制通知（允许、拒绝、开启、关闭、错误）
    //     'dialog.reservationError',             // 预订错误
    //     'dialog.serviceUnavailable',           // 服务器不可用
    //     'dialog.sessTerminated',               // 会议会话故障
    //     'dialog.sessionRestarted',             // 桥接器迁移导致客户端重新加载
    //     'dialog.tokenAuthFailed',              // 使用无效的jwt
    //     'dialog.transcribing',                 // 转录通知（等待、关闭）
    //     'dialOut.statusMessage',               // 拨出状态更新
    //     'liveStreaming.busy',                  // 直播服务忙碌
    //     'liveStreaming.failedToStart',         // 直播开启失败
    //     'liveStreaming.unavailableTitle',      // 直播服务不可用
    //     'lobby.joinRejectedMessage',           // 大厅中用户请求加入被拒绝
    //     'lobby.notificationTitle',             // 允许/拒绝加入请求时切换大厅
    //     'notify.chatMessages',                 // 关闭聊天窗口时接收到聊天信息
    //     'notify.disconnected',                 // 断开连接
    //     'notify.connectedOneMember',           // 1个参与者加入
    //     'notify.connectedTwoMembers',          // 2个参与者同时加入
    //     'notify.connectedThreePlusMembers',    // 超过2个参与者同时加入
    //     'notify.leftOneMember',                // 1个参与者离开
    //     'notify.leftTwoMembers',               // 2个参与者同时离开
    //     'notify.leftThreePlusMembers',         // 超过2个参与者同时离开
    //     'notify.grantedTo',                    // 授予参与者主持人权限
    //     'notify.hostAskedUnmute',              // 主机要求参与者取消静音
    //     'notify.invitedOneMember',             // 已邀请1个参与者
    //     'notify.invitedThreePlusMembers',      // 已邀请3+参与者
    //     'notify.invitedTwoMembers',            // 已邀请2个参与者
    //     'notify.kickParticipant',              // 参与者被剔除
    //     'notify.linkToSalesforce',             // 加入销售团队集成的会议
    //     'notify.moderationStartedTitle',       // 开启音频视频节制
    //     'notify.moderationStoppedTitle',       // 取消音频视频节制
    //     'notify.moderationInEffectTitle',      // 音频视频节制期间用户尝试取消静音
    //     'notify.moderationInEffectVideoTitle', // 音频视频节制期间用户尝试开启视频
    //     'notify.moderationInEffectCSTitle',    // 音频视频节制期间用户尝试共享内容
    //     'notify.mutedRemotelyTitle',           // 用户被远程静音
    //     'notify.mutedTitle',                   // 用户加入时被静音
    //     'notify.newDeviceAudioTitle',          // 提示用户使用新检测到的音频设备
    //     'notify.newDeviceCameraTitle',         // 提示用户使用新检测到的摄像头
    //     'notify.participantWantsToJoin',       // 开启大厅且用户请求加入会议
    //     'notify.passwordRemovedRemotely',      // 密码被远程删除
    //     'notify.passwordSetRemotely',          // 密码被远程设置
    //     'notify.raisedHand',                   // 参与者举手
    //     'notify.startSilentTitle',             // 用户以无音频模式加入
    //     'notify.unmute',                       // 音频视频节制期间向主持人显示有用户举手
    //     'notify.videoMutedRemotelyTitle',      // 用户视频被远程静音
    //     'prejoin.errorDialOut',                // 拨出错误
    //     'prejoin.errorDialOutDisconnected',    // 拨出连接断开错误
    //     'prejoin.errorDialOutFailed',          // 拨出失败错误
    //     'prejoin.errorDialOutStatus',          // 拨出状态错误
    //     'prejoin.errorStatusCode',             // 状态码错误
    //     'prejoin.errorValidation',             // 验证错误
    //     'recording.busy',                      // 录制服务忙碌
    //     'recording.failedToStart',             // 录制无法开启
    //     'recording.unavailableTitle',          // 录制服务不可用
    //     'toolbar.noAudioSignalTitle',          // 检测到麦克风损坏
    //     'toolbar.noisyAudioInputTitle',        // 当前麦克风检测出噪音
    //     'toolbar.talkWhileMutedPopup',         // 静音用户视图发言
    //     'transcribing.failedToStart',          // 转录无法开启
    // ],

    // 禁止的通知列表，需要与上述设置配合使用。
    // disabledNotifications: [],

    // Prevent the filmstrip from autohiding when screen width is under a certain threshold
    // disableFilmstripAutohiding: false,

    // 幻灯片的相关选项。
    // filmstrip: {
    //     // 是否禁止用户重新调整幻灯片大小，还可以通过`interfaceConfig`选项来配置幻灯片（宽度，平铺纵横比）。
    //     disableResizable: false,
    //
    //     // 是否禁用stage幻灯片（垂直幻灯片除外，在stage上显示多个参与者）。
    //     disableStageFilmstrip: false,
    //
    //     // stage中显示的默认参与者数量。用户可以在设置中修改这个属性，有效值：1~6。
    //     stageFilmstripParticipants: 1,
    //
    //     // 是否禁用顶部面板（只在用户共享屏幕时显示）。
    //     disableTopPanel: false,
    //
    //     // 使用顶部面板布局时通话中的最少参与者数量。
    //     minParticipantCountForTopPanel: 50,
    // },

    // 平铺视图的相关选项。
    // tileView: {
    //     // 平铺视图中显示的最佳方块数。取决于屏幕大小，可能无法显示这里指定的参与者数量。
    //     numberOfVisibleTiles: 25,
    // },

    // 是否禁用聊天表情符号。
    // disableChatSmileys: false,

    // 集成Giphy的设置。
    // giphy: {
    //     // 是否启用giphy功能。
    //     enabled: false,
    //
    //     // Giphy的SDK API密钥
    //     sdkKey: '',
    //
    //     // 显示模式：
    //     // 1、`tile`：在发送GIF的参与者平铺层显示GIF。
    //     // 2、`chat`：在聊天中作为信息显示GIF。
    //     // 3、`all`：以上所有，默认选项。
    //     displayMode: 'all',
    //
    //     // GIF在平铺层显示的时长（毫秒数）。
    //     tileTime: 5000,
    //
    //     // 收视率的限制结果：
    //     // 1、`g`：在公共环境中被广泛接受，默认选项。
    //     // 2、`pg`：在公共环境中常见，但不被广泛接受。
    //     // 3、`pg-13`：通常看不到，除非被找到，但仍然常见。
    //     // 4、`r`：通常看不到，除非被找到，如果看到，可能会令人震惊。
    //     rating: 'pg',
    //
    //     // Web应用程序中giphy请求的代理服务器路径。
    //     proxyUrl: 'https://giphy-proxy.example.com',
    // },

    // 日志
    // logging: {
    //     // 应用程序和lib-jitsi-meet的默认日志级别。
    //     defaultLogLevel: 'trace',
    //
    //     // 是否禁用LogCollector（在CallStats上存储日志）。
    //     disableLogCollector: true,
    //
    //     // 个别可定制的日志记录器。
    //     loggers: {
    //         // 以下日志的默认级别太详细了
    //         'modules/RTC/TraceablePeerConnection.js': 'info',
    //         'modules/statistics/CallStats.js': 'info',
    //         'modules/xmpp/strophe.util.js': 'log',
    //     }
    // },

    // 应用程序的默认Logo路径。
    // defaultLogoUrl: 'images/watermark.svg',

    // 集成Excalidraw白板的设置。
    // whiteboard: {
    //     // 是否启用白板功能。
    //     enabled: true,
    //
    //     // 用于支持白板协作的服务器：https://github.com/jitsi/excalidraw-backend。
    //     collabServerBaseUrl: 'https://excalidraw-backend.example.com',
    // },
};

// 暂时向后兼容旧的手机客户端
config.flags = config.flags || {};
config.flags.sourceNameSignaling = true;
config.flags.sendMultipleVideoStreams = true;
config.flags.receiveMultipleVideoStreams = true;

// 为JaaS客户设置默认值
if (enableJaaS) {
    config.dialInNumbersUrl = 'https://conference-mapper.jitsi.net/v1/access/dids';
    config.dialInConfCodeUrl = 'https://conference-mapper.jitsi.net/v1/access';
    config.roomPasswordNumberOfDigits = 10; // 跳过重新添加（不要删除注释）
}
