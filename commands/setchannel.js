module.exports = {
    name: 'setchannel',
    description: 'デフォルトチャンネルを送信するチャンネルに設定する',
    async execute(interaction){
        // この機能はいま、botが再起動するたびにリセットされます。
        // いまはテキストチャンネルのみ利用します
        /*
        if (!interaction.member.voice.channel){
            await interaction.reply({content: 'ボイスチャンネルにいる時にしか設定できません。', ephemeral: true});
        }
        else {
            const channelPair = {
                txChannel: interaction.channelId,
                vcChannel: interaction.member.voice.channelId,
            }
            global.channelMap.set(interaction.guildId, channelPair);
            console.log('Command \' SetChannel \' used in Server '+ interaction.guild.toString());
            await interaction.reply({content:'デフォルトチャンネルを'+interaction.channel.toString()+'に設定しました。'})
        }
        */
        global.channelMap.set(interaction.guildId, interaction.channelId);
        console.log('Command \' SetChannel \' used in Server '+ interaction.guild.toString() + ' ID :' + global.channelMap.get(interaction.guildId));
        await interaction.reply({content:'デフォルトチャンネルを'+interaction.channel.toString()+'に設定しました。'})
    }
}