# Server-side Components

Server-side stuff is currently WIP for now. Ideas are flowing from my mind for a while.

## Contents

* [`@secrets-pull-api/api-server`](./api) - The core API server for receiving requests from `@secrets-pull-api/client` JS package, `secrets-pulls-client` for Python and `github.com/ajhalili2006/secrets-pull-api/client/golang` for Go. The core server will handle
* [`@secrets-pull-api/tg-bot`](./telegram) - Skeleton Telegram bot for handling commands from users. Sending secrets to users through PMs are still handled through the core API server.
* [`@secrets-pull-api/discord-bot`](./discord) - Skeleton Discord bot for handling commands from users. Sending secrets to users through PMs are still handled through the core API server, possibly through webhooks?
