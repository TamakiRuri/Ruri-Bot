## Ruri Bot

**Ruri BotはVRChat関連のDiscordサーバー向けのBotです（Alpha）**

このBotはDiscord js v14を利用します。利用するにはgitとNode JSが必要です。

---

> **注意**: このBotはまだ完成していません。

### **機能**:

- **ランダムワールド** (./commands/json/worlds.jsonにリンクの追加が必要です。)
- **ランダム衣装** (./commands/json/costume.jsonにリンクの追加が必要です。)
- **改変チュートリアル** (未実装)
- **ランダム機能** 4つの選択肢からランダムに一つを選ぶ機能です
---

### インストール

**Node.js 16.11.0 以降が必要です**

### このBotを利用する前に、Discord Developer PortalにApplicationとBotを作る必要があります。[Discord Developer Portal](https://discord.com/developers/applications)作ったあとにtokenとClient IDを保存します（tokenは公開しないでください）。

### OAuth2 でApplication.Commandを選択し、生成したURLでBotを管理しているサーバーにインバイトしてください。

1. Botを保存したいディレクトリに移動し、ターミナルを開きます。

```
git clone https://github.com/TamakiRuri/Ruri-Bot.git
```

2. config.jsonを作ります。

```
cp config.json.example config.json
```

3. config.jsonを編集します。

```
{
    "clientId": "BotのClient ID",
    "guildId": "", //すでに破棄されました。初めて使用する場合何も入力しないでください。古いバージョンを使う場合は一回動かしてから消してください。
    "token": "BotのToken"
}
```

4. Botを動かします。

```
npm install
node index.js
```

5. もしLogged Inというメセージがターミナルで出たら完成です。エラーが出た場合はconfig.jsonに問題があるか見てください。Ctrl + Cを同時に押すとBotが終了します。

> 他になにか問題がある場合、Issuesに書いてくれると助かります。


### 0.2.1から更新する方へ

1. アバター機能が削除されました。
2. 一部のコマンドが変更されました。
3. コマンドの登録が Guildからグローバルになりました。一回動かしてからconfig.jsonからGuildIdを消してください。