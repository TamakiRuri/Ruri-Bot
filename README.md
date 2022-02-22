## Ruri Bot

**Ruri Bot is a VRChat Avatar bot that can recommand avatars from shopping sites to players.**

This bot is built with Discord.js 13, with a approach similar to official guide without using builders. 

---

> **Important Notice**: This bot is not finished. Even though you can (somehow) get some testing results, the results are not granted and may be very wrong. このBOTはまだ完成されていません。

---

### Installation Guide

**Require Node.js 16.6.0 or after.**

> Before downloading this bot files, you should create your own bot application and bot at [Discord Developer Portal](https://discord.com/developers/applications), and get your client ID and token.

> **Please give your bot application.commands permission by checking the checkbox at OAuth2 URL Generator, and use that URL to invite your bot to a server you managed or owned.**

1. Get to a directory you want this bot to be, and open your terminal at this directory.

```
git clone https://github.com/TamakiRuri/Ruri-Bot.git
// Don't close your terminal after this step.
```

2. Create a new file named "config.json".

    **I mean, I don't have to teach you this, right?**

3. Edit config.json

```
{
    "clientId": "Your bot's Client ID",
    "guildId": "Your Discord server's ID",
    "channelId": "The ID of the channel you want this bot to speak",
    "token": "Your token"
}
```
**Channel ID is not functional for now**

1. At your terminal, input following commands.

```
cd Ruri-Bot
npm install
node index.js
```

5. Now the Bot is running. Every time you start this bot, it will deploy commands automatically, so you don't need to worry about changing commands or ongoing changes about GUILDS_MESSAGE.

6. How to stop this bot? Simply ctrl + C to stop it.
