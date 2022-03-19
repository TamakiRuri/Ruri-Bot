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
                    str += `/${command.name}    ランダムワールドにゃ!✨ \n`
                    break;
                case 'ra':
                    str += `/${command.name}    ランダムアバターにゃ!🍣 \n`
                    break;
                case 'wear':
                    str += `/${command.name}    ランダム衣装にゃ！🧥 \n`
                    break;
                case 'tutorial':
                    str += `/${command.name}    アバター改変チュートリアルのリストにゃ！🔧`
                    break;
                default:
                    str += `/${command.name}    ${command.description} \n`;
                    break;
            }
        }
		await interaction.reply(str);
	},
};