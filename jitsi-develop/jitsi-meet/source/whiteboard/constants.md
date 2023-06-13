# constants.ts

## WHITEBOARD_PARTICIPANT_NAME

```ts
/**
 * 白板伪参与者的名称。
 */
WHITEBOARD_PARTICIPANT_NAME = 'Whiteboard';
```

## WHITEBOARD_ID

```ts
/**
 * 白板的ID。
 */
WHITEBOARD_ID = 'whiteboard';
```

## WHITEBOARD_UI_OPTIONS

```ts
/**
 * 白板的UI选项。
 */
WHITEBOARD_UI_OPTIONS = {
    canvasActions: {
        allowedShapes: ['arrow', 'diamond', 'ellipse', 'freedraw', 'line', 'rectangle', 'selection', 'text'],
        allowedShortcuts: ['cut', 'deleteSelectedElements', 'redo', 'selectAll', 'undo'],
        disableAlignItems: true,
        disableFileDrop: true,
        disableGrouping: true,
        disableHints: true,
        disableLink: true,
        disableShortcuts: true,
        disableVerticalAlignOptions: true,
        fontSizeOptions: [ 's', 'm', 'l' ],
        hideArrowHeadsOptions: true,
        hideColorInput: true,
        hideClearCanvas: true,
        hideFontFamily: true,
        hideHelpDialog: true,
        hideIOActions: true,
        hideLayers: true,
        hideLibraries: true,
        hideLockButton: true,
        hideOpacityInput: true,
        hideSharpness: true,
        hideStrokeStyle: true,
        hideTextAlign: true,
        hideThemeControls: true,
        hideUserList: true,
        saveAsImageOptions: {
            defaultBackgroundValue: true,
            disableScale: true,
            disableSelection: true,
            disableClipboard: true,
            disableSceneEmbed: true,
            hideTheme: true
        }
    }
};
```

















