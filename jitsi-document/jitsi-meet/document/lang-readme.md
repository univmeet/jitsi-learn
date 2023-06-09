# Jitsi Meet翻译

Jitsi Meet使用[i18next](http://i18next.com)库进行翻译。i18next为每种语言使用单独的json文件。

## 翻译

Jitsi Meet的翻译是通过手动编辑语言文件进行处理的。

可以使用`update-translation.js`脚本实现这一点，如下所示：

```bash
cd lang
node update-translation.js main-es.json
```

这个脚本将会更新`main-es.json`文件，所有缺失的key都会被设置为空字符串。接下来要做的是填充这些空白。

## 开发

如果要给Jitsi Meet添加新的功能，并且包含需要翻译的文本，必须在`main.json`文件中为每个需要翻译的文本添加key和英文值。然后，可以使用这些key获取当前语言的翻译文本。

可以在HTML中添加翻译文本：

+ 通过HTML元素的属性：添加`data-i18n`属性，属性值为翻译文本的key。

```
<span data-i18n="dialog.OK">OK</span>
```

+ 可以使用`APP.translation.generateTranslationHTML(key, options)`获取这个HTML代码的Javascript字符串。

```
APP.translation.generateTranslationHTML("dialog.OK") // 返回：<span data-i18n="dialog.OK">OK</span>
```

`options`参数的值将会被添加到元素的`data-i18n-options`属性中。

+ 注意：如果要动态添加HTML元素，首先不要忘了调用`APP.translation.translateElement(jquery_selector)`进行文本翻译。

```
APP.translation.translateString("dialog.OK") // 返回当前语言文件中这个key的值，例如：OK。
```

翻译模块的以上方法中，`options`参数的可用值请参考[i18next文档](http://i18next.com/pages/doc_features)。

> 注意：在HTML中为持久化HTML元素添加属性非常有用，因为当语言发生变化时，文本将会被自动翻译。
