# actionTypes.ts

## RESET_WHITEBOARD

```ts
/**
 * 关闭白板协作的会话。
 * 
 * {{
 *      type: RESET_WHITEBOARD
 * }}
 */
RESET_WHITEBOARD: string = 'RESET_WHITEBOARD';
```

## SETUP_WHITEBOARD

```ts
/**
 * 配置白板协作的明细。
 * 
 * {{
 *      type: SETUP_WHITEBOARD,
 *      collabDetails
 * }}
 */
SETUP_WHITEBOARD: string = 'SETUP_WHITEBOARD';
```

## SET_WHITEBOARD_OPEN

```ts
/**
 * 设置白板的可见状态。
 * 
 * {{
 *      type: SET_WHITEBOARD_OPEN,
 *      isOpen
 * }}
 */
SET_WHITEBOARD_OPEN: string = 'SET_WHITEBOARD_OPEN';
```