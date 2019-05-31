/**
 * @File   : environment.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 5/31/2019, 5:07:22 PM
 * @Description:
 */
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

import {getGitUser, camelize} from './utils';

export class Fields {
  private _name: string = '';
  private _defaultAuthor: string = '';
  private _defaultEmail: string = '';

  public get name() {
    return this._name;
  }

  public get date() {
    return new Date().toLocaleString();
  }

  public get author(): string {
    return this.config.get('fields.author') || this._defaultAuthor;
  }

  public get email(): string {
    return this.config.get('fields.email') ||  this._defaultEmail;
  }

  public get custom(): string {
    return this.config.get('fields.custom') ||  '';
  }

  private get config() {
    return vscode.workspace.getConfiguration('seinjs');
  }

  public async update(name: string) {
    this._name = camelize(name);
    const user = await getGitUser();
    this._defaultAuthor = user.name;
    this._defaultEmail = user.email;
  }
}

export class Environment {
  private _header: string = '';
  public targetFolderPath: string = '';
  public fields: Fields = new Fields();
  public context: vscode.ExtensionContext | null = null;

  public get config(): vscode.WorkspaceConfiguration {
    return vscode.workspace.getConfiguration('seinjs');
  }

  public get templatesFolderPath(): string {
    if (!this.context) {
      throw new Error('No context !');
    }

    return path.join(this.context.extensionPath, 'templates');
  }

  public setContext(context: vscode.ExtensionContext) {
    this.context = context;

    this._header = fs.readFileSync(path.resolve(this.templatesFolderPath, 'header.ts'), {encoding: 'utf8'});
  }

  public readTemplate(template: string): string {
    return this._header + fs.readFileSync(path.join(this.templatesFolderPath, `${template}.ts`), {encoding: 'utf8'});
  }

  public async update(fileName: string) {
    await this.fields.update(fileName);
  }
}

export default new Environment();
