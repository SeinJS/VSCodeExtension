/**
 * @File   : fileOperations.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 5/29/2019, 10:45:20 PM
 * @Description:
 */
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

import environment from './environment';
import templates, {TTemplate} from './templates';

const validateNameRegex = ((): RegExp => {
  if (process.platform === 'win32') {
    return /[/?*:|<>\\]/;
  } else if (process.platform === 'darwin') {
    return /[/:]/;
  } else {
    return /\//;
  }
})();

export async function getTemplates(): Promise<TTemplate[]> {
  return templates;
}

export async function pickTemplate(templates: TTemplate[]): Promise<TTemplate> {
  let template = await vscode.window.showQuickPick(templates, {
    placeHolder: 'Select base class:',
  });

  if (!template) {
    throw new Error('Invalidate template !');
  }

  return template;
}

export async function getFileName(): Promise<string> {
  let fileName = await vscode.window.showInputBox({
    placeHolder: 'Input class name',
    validateInput: text => (validateNameRegex.test(text) ? 'Invalidate file name' : null),
  });

  if (!fileName) {
    throw new Error('Invalidate filename !');
  }

  return fileName;
}

export async function createFile(template: TTemplate, distDir: string, name: string) {
  await environment.update(name);

  if (fs.statSync(distDir).isFile()) {
    distDir = path.dirname(distDir);
  }

  const fileName = environment.fields.name + template.type;
  const content = environment.readTemplate(template.label)
    .replace(/__name__/g, environment.fields.name)
    .replace(/__file__/g, fileName)
    .replace(/__class__/g, fileName)
    .replace(/__author__/g, environment.fields.author)
    .replace(/__email__/g, environment.fields.email)
    .replace(/__date__/g, environment.fields.date)
    .replace(/__custom__/g, environment.fields.custom);

  const distPath = path.join(distDir, `${fileName}.ts`);
  fs.writeFileSync(distPath, content);

  let uri = vscode.Uri.file(distPath);
  vscode.commands.executeCommand('vscode.open', uri);
}
