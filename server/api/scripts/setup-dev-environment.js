/*
 * Source: https://github.com/hydralite/hydralite/blob/dev/api/setup.js
 * We just customized stuff for our own server code.
*/
require('dotenv').config();
import { writeFile } from 'fs';
import { prompt as _prompt } from 'inquirer';
import { red, green, blue, magenta, yellow } from 'chalk';

const prompt = async (args) =>
  await _prompt([{ type: 'input', ...args, name: 'cmd' }]).then((a) => {
    return args.parse ? args.parse(a.cmd) : a.cmd;
  });

(async () => {
  if (
    process.env.TELEGRAM_BOT_TOKEN ||
    process.env.DISCORD_BOT_TOKEN
  )
    return console.log(
      yellow.bold('warning: Looks like this configuration exists, proceed at your own risk.')
    );
  console.clear();
  console.log(green('!') + blue.bold(' API .env Configurator\n'));

  let env = {};

  env.TELEGRAM_BOT_TOKEN = await prompt({
    message: `Telegram Bot Token (get it from https://t.me/botfather if you don't have one):`,
    
  });

  env.DISCORD_BOT_TOKEN = await prompt({
    message: `Discord Bot Token ()`,
  });

  if (!process.env.IS_GITPOD) {
    env.DATABASE_URL = await prompt({
      message: `Please enter your PostgresSQL Database URL:`,
      default: 'postgresql://postgres@localhost/postgres',
    });
  } else {
    env.DATABASE_URL = 'postgresql://gitpod@localhost/postgres';
  }

  console.log(
    green('*') + magenta.bold(' Writing configuration...')
  );

  const mapped = Object.keys(env).map((k) => `${k}='${env[k]}'`);

  writeFile(`.env`, mapped.join('\n'), () => {});

  console.log(
    green.bold('success: Successfully generated dotenv file for core API server\n')
  );
})();
