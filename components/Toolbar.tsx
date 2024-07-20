import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import * as ToolbarUI from "@radix-ui/react-toolbar";
import {
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_CRITICAL,
  FORMAT_TEXT_COMMAND,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import { useCallback, useEffect, useState } from "react";

import {
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "@/components/icons/format";

import styles from "./Toolbar.module.css";

function getTextFormatting(
  bold: boolean,
  italic: boolean,
  strikethrough: boolean,
  underline: boolean
) {
  const styleArray: Array<string> = [];
  if (bold) {
    styleArray.push("bold");
  }

  if (italic) {
    styleArray.push("italic");
  }

  if (strikethrough) {
    styleArray.push("strikethrough");
  }

  if (underline) {
    styleArray.push("underline");
  }

  return styleArray.length > 0 ? styleArray : ["none"];
}

// A toolbar with simple rich-text controls
export function Toolbar() {
  const [editor] = useLexicalComposerContext();
  const [activeEditor, setActiveEditor] = useState(editor);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isEditable, setIsEditable] = useState(() => editor.isEditable());
  const textFormatting = getTextFormatting(
    isBold,
    isItalic,
    isStrikethrough,
    isUnderline
  );

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      // Update text format
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsStrikethrough(selection.hasFormat("strikethrough"));
      setIsUnderline(selection.hasFormat("underline"));
    }
  }, [activeEditor]);

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        $updateToolbar();
        setActiveEditor(newEditor);
        return false;
      },
      COMMAND_PRIORITY_CRITICAL
    );
  }, [editor, $updateToolbar]);

  useEffect(() => {
    return mergeRegister(
      editor.registerEditableListener((editable) => {
        setIsEditable(editable);
      }),
      activeEditor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar();
        });
      })
    );
  }, [$updateToolbar, activeEditor, editor]);

  return (
    <ToolbarUI.Root
      className={styles.root}
      aria-label="Formatting options"
      aria-controls="note-content"
    >
      <ToolbarUI.ToggleGroup
        className={styles.toolbar}
        type="multiple"
        aria-label="Text formatting"
        value={textFormatting}
      >
        <ToolbarUI.ToggleItem
          disabled={!isEditable}
          className={styles.button}
          onClick={() => {
            activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
          }}
          aria-label="Format text as bold."
          aria-pressed={isBold}
          value="bold"
        >
          <BoldIcon />
        </ToolbarUI.ToggleItem>
        <ToolbarUI.ToggleItem
          disabled={!isEditable}
          className={styles.button}
          onClick={() => {
            activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
          }}
          aria-label="Format text as italics."
          aria-pressed={isItalic}
          value="italic"
        >
          <ItalicIcon />
        </ToolbarUI.ToggleItem>
        <ToolbarUI.ToggleItem
          disabled={!isEditable}
          className={styles.button}
          onClick={() => {
            activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
          }}
          aria-label="Format text to underlined."
          aria-pressed={isUnderline}
          value="underline"
        >
          <UnderlineIcon />
        </ToolbarUI.ToggleItem>
        <ToolbarUI.ToggleItem
          disabled={!isEditable}
          className={styles.button}
          onClick={() => {
            activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
          }}
          aria-label="Format text to strikethrough."
          aria-pressed={isStrikethrough}
          value="strikethrough"
        >
          <StrikethroughIcon />
        </ToolbarUI.ToggleItem>
      </ToolbarUI.ToggleGroup>
    </ToolbarUI.Root>
  );
}
