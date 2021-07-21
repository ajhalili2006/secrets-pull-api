# Secrets Pulls API

[![GitHub license](https://img.shields.io/github/license/ajhalili2006/secrets-pull-api?style=flat-square)](https://github.com/ajhalili2006/secrets-pull-api/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/ajhalili2006/secrets-pull-api?style=flat-square)](https://github.com/ajhalili2006/secrets-pull-api/issues)
[![GitHub stars](https://img.shields.io/github/stars/ajhalili2006/secrets-pull-api?style=flat-square)](https://github.com/ajhalili2006/secrets-pull-api/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/ajhalili2006/secrets-pull-api?style=flat-square)](https://github.com/ajhalili2006/secrets-pull-api/network)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ajhalili2006/secrets-pull-api?style=flat-square)

An API server (formerly an simple Python script using Pygrogram) to get an secret and send to Telegram or Discord, effortlessly without needing to setup SSH to your Actions machine.

## Structure

We use monorepo-style to efficently manage smaller components.

* Client-side Stuff
  * [Legacy Code](./client/legacy) - Pyrogram code, originally uploaded as an GitHub Gist.
* Server-side Stuff
  * [Core API Server](./server/api) - where we feed data from clients to Discord/Telegram.
  * [Telegram Bot](./server/telegram) - Skeleton Telegram bot for handling commands from users, including bot usage and API docs.
  * [Discord Bot](./server/discord) - Skeleton Discord bot for handling commands from users, including bot usage and API docs.

## Contributing

By contributing to this project, you agree to the following;

* either [GitHub's Community Guidelines](https://docs.github.com/articles/github-community-guidelines) or [GitLab SaaS ToS](https://about.gitlab.com/terms/#gitlab_com), depending on where you contribute
* [The Pins Team Community Code of Conduct](https://github.com/MadeByThePinsHub/policies/blob/master/CODE_OF_CONDUCT.md), even it's just my personal project; AND
* [Developer's Certificate of Origin](https://developercertificate.org)

If you agree to all of them, consult the [contributing docs](./CONTRIBUTING.md) for details. Even we have these prerequisites, you don't need to be an JavaScript/Golang/Python developer to contribute! We need help in finding bugs and improving features and even in writing documentation.
