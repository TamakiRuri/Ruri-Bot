const fs = require('fs');

module.exports = {
	name: 'avatarlist',
	description:'アバターコマンドーのリストにゃ!🍡',
	async execute(interaction){
        let str = 'アバターコマンドーのリストにゃ!🍡 \n';
        const avatarCommandFiles = fs.readdirSync('./commands/avatars').filter(file => file.endsWith('.js'));
        for (const file of avatarCommandFiles){
            const command = require(`./avatars/${file}`);
            str += `/${command.name}    ${command.description} \n`;
        }
		await interaction.reply(str);
	},
};