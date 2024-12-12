import * as vscode from "vscode";
import { switchLayout } from "./layoutSwitcher";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
	"layout-switcher.switch",
	() => {
	  const editor = vscode.window.activeTextEditor;
	  if (!editor) {
		vscode.window.showErrorMessage("Нет активного редактора.");
		return;
	  }

	  const selection = editor.selection;
	  const text = editor.document.getText(selection);

	  if (!text) {
		vscode.window.showErrorMessage("Текст для преобразования не найден");
		return;
	  }

	  const convertedText = switchLayout(text);

	  editor.edit(editBuilder => {
		editBuilder.replace(selection, convertedText);
	  });
	}
  );

  context.subscriptions.push(disposable);
}

export function deactive() {}