// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import * as fileOptions from './bin/fileOptions';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	fileOptions.activate(context);

	console.log('Congratulations, your extension "seinjs" is now active!');
}

// this method is called when your extension is deactivated
export function deactivate() {
	fileOptions.deactivate();
}
