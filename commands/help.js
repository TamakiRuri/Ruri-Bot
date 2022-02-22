const fs = require('fs');

module.exports = {
	name: 'help',
	description:'コマンドリストにゃ！📝',
	async execute(interaction){
        let str = 'Ruri Bot コマンドリストにゃ！📖 \n';
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        for (const file of commandFiles){
            const command = require(`./${file}`);
            str += `/${command.name}    ${command.description} \n`;
        }
		await interaction.reply(str);
	},
};