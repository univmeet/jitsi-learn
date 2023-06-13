# always-on-top

## index.js

### 功能

+ 渲染`main/root`组件：在`react`容器（元素）中渲染`<AlwaysOnTop/>`组件（元素）。
+ 添加`window.beforeunload`事件监听器：卸载`react`容器（元素）中的组件（元素）。

## AlwaysOnTop.js

## Toolbar.js

## AudioMuteButton.js

## VideoMuteButton.js

## HangupButton.js

## ToolbarButton.js

工具栏按钮：`<ToolbarButton/>`。

### 结构

```html
<div>
    <div>
        <!-- jitsi-meet/react/features/base/icons/components/Icon -->
        <Icon/>
    </div>
</div>
```

### 属性

+ `accessibilityLabel: string`：按钮的可访问性标签。
+ `customClass?: string`：自定义样式的类名，添加在元素类名的末尾。
+ `disabled?: boolean`：是否禁用按钮，默认false（未禁用）。
+ `onClick: Function`：点击事件处理器。
+ `icon: Object`：按钮图标。
+ `toggled?: boolean`：是否切换按钮，默认false（未切换）。
