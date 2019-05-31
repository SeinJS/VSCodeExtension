import * as vscode from 'vscode';

import * as fileOpts from './fileOperations';
import environment from './environment';

export function activate(context: vscode.ExtensionContext) {
	environment.setContext(context);

	context.subscriptions.push(vscode.commands.registerCommand('seinjs.createClass', async (e: vscode.Uri) => {
		console.log(e);

		try {
			const templates = await fileOpts.getTemplates();
			const template = await fileOpts.pickTemplate(templates);
			const name = await fileOpts.getFileName();

			let distDir = e && e.fsPath ? e.fsPath : vscode.workspace.rootPath;

			if (!distDir) {
				return;
			}

			fileOpts.createFile(template, distDir, name);
		} catch (error) {
			vscode.window.showErrorMessage(`Sein.js: ${error.message}`);
		}
	}));

	console.log('extension "seinjs" is now active!');
}

// this method is called when your extension is deactivated
export function deactivate() {}
