const fs = require('fs');

module.exports = {
	name: 'help',
	description:'コマンドリスト📝',
	async execute(interaction){
        let str = 'コマンドリスト📖 \n';
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        for (const file of commandFiles){
            const command = require(`./${file}`);
            switch(command.name){
                case 'world':
                    str += `/${command.name}    ランダムワールド!✨ \n`
                    break;
                case 'costume':
                    str += `/${command.name}    ランダム衣装!✨ \n`
                    break;
                case 'select':
                    str += `/${command.name}    使い方：/select [A] [B] [C] [D]、最大４つの中からランダムに一つを選ぶ！🏵️ \n`
                    break;
                case 'tutorial':
                    str += `/${command.name}    アバター改変チュートリアルのリスト！🔧\n`
                    break;
                default:
                    str += `/${command.name}    ${command.description} \n`;
                    break;
            }
        }
        console.log('Command \' Help \' used in Server '+ interaction.guild.toString());
		await interaction.reply(str);
	},
};