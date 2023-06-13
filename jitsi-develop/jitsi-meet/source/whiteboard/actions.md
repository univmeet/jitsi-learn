# actions.ts

## setupWhiteboard

```ts
/**
 * 配置白板协作的明细。
 *
 * 参数：
 * `{collabDetails}: {collabDetails: {roomId: string; roomKey: string}}`：白板的设置。
 * 
 * 返回：
 * {{
 *     type: SETUP_WHITEBOARD,
 *     collabDetails: { roomId: string, roomKey: string }
 * }}
 */
setupWhiteboard({collabDetails}: {collabDetails: {roomId: string; roomKey: string}}): IWhiteboardAction;
```

## resetWhiteboard

```ts
/**
 * 清理白板协作的设置。只能在native上使用，在会议之间进行清理。
 *
 * 返回：
 * {{
 *     type: RESET_WHITEBOARD
 * }}
 */
resetWhiteboard(): IWhiteboardAction;
```

## setWhiteboardOpen

```ts
/**
 * 设置白板的可见状态。
 * 
 * 参数：
 * `isOpen: boolean`：白板的可见标记
 * 
 * 返回：
 * {{
 *      type: SET_WHITEBOARD_OPEN,
 *      isOpen
 * }}
 */
setWhiteboardOpen(isOpen: boolean): IWhiteboardAction;
```
