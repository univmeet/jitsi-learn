# functions.ts

## isWhiteboardEnabled

```ts
/**
 * 白板是否启用。
 *
 * 参数：
 * `state: IReduxState`：Redux存储中的状态。
 *
 * 返回：
 * boolean
 */
isWhiteboardEnabled(state: IReduxState): boolean;
```

## isWhiteboardOpen

```ts
/**
 * 白板是否打开。
 *
 * 参数：
 * `state: IReduxState`：Redux存储中的状态。
 *
 * 返回：
 * boolean
 */
isWhiteboardOpen(state: IReduxState): boolean;
```

## isWhiteboardButtonVisible

```ts
/**
 * 白板按钮是否可见。
 *
 * 参数：
 * `state: IReduxState`：Redux存储中的状态。
 *
 * 返回：
 * boolean
 */
isWhiteboardButtonVisible(state: IReduxState): boolean;
```

## isWhiteboardPresent

```ts
/**
 * 白板是否在场（作为会议参与者）。
 *
 * 参数：
 * `state: IReduxState`：Redux存储中的状态。
 *
 * 返回：
 * boolean
 */
isWhiteboardPresent(state: IReduxState): boolean;
```

## getCollabDetails

```ts
/**
 * 获取白板协作的明细。
 *
 * 参数：
 * `state: IReduxState`：Redux存储中的状态。
 *
 * 返回：
 * {roomId: string, roomKey: string} | undefined
 */
getCollabDetails(state: IReduxState): {roomId: string; roomKey: string} | undefined;
```

## getCollabServerUrl

```ts
/**
 * 获取白板协作的服务器路径。
 *
 * 参数：
 * `state: IReduxState`：Redux存储中的状态。
 *
 * 返回：
 * string | undefined
 */
getCollabServerUrl(state: IReduxState): string | undefined;
```

## isWhiteboardVisible

```ts
/**
 * 白板在stage上是否可见。
 *
 * 参数：
 * `state: IReduxState`：Redux存储中的状态。
 * 
 * 返回：
 * boolean
 */
isWhiteboardVisible(state: IReduxState): boolean;
```
