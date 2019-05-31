/**
 * @File   : utils.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 5/31/2019, 3:22:50 PM
 * @Description:
 */
import {exec} from 'child_process';

const gitUser: {name: string, email: string, inited: boolean} = {name: '', email: '', inited: false};

export async function getGitUser() {
  if (gitUser.inited) {
    return Promise.resolve(gitUser);
  }

  function gitConfig(field: any, callback: any) {
    var command = 'git config --get user.' + field;
    exec(command, function (err, stdout, stderr) {
      if (err) {
        callback(err);
        return;
      }
      callback(null, stdout.toString().replace(/(\r\n|\n|\r)/gm,""));
    });
  }

  function getAll(callback: any) {
    gitConfig("name", function (err: any, name: any) {
      if (err) {
        callback(err);
        return;
      }

      gitConfig("email", function (err: any, email: any) {
        if (err) {
          callback(err);
          return;
        }

        callback(null, {name, email});
      });
    });
  }

  return new Promise<{name: string, email: string}>(resolve => {
    getAll((err: any, result: any) => {
      if (!err) {
        gitUser.name = result.name;
        gitUser.email = result.email;
      }

      gitUser.inited = true;
      resolve(gitUser);
    });
  });
}

export function camelize(str: string): string {
  return str[0].toUpperCase() + str.slice(1).replace(/\W+(.)/g, (match, chr) => chr.toUpperCase());
}
