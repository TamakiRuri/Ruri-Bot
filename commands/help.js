const fs = require('fs');

module.exports = {
	name: 'help',
	description:'コマンドリストにゃ！📝',
	async execute(interaction){
        let str = 'Ruri Bot コマンドリストにゃ！📖 \n';
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        for (const file of commandFiles){
            const command = require(`./${file}`);
            switch(command.name){
                case 'go':
                    str += `/${command.name}    ランダムワールド推薦にゃ!✨ \n`
                    break;
                case 'ra':
                    str += `/${command.name}    ランダムアバター推薦にゃ!🍣 \n`
                    break;
                default:
                    str += `/${command.name}    ${command.description} \n`;
                    break;
            }
        }
		await interaction.reply(str);
	},
};