module.exports = {
	name: 'costume',
	description:'今日の衣装は何にするかな🍩',
	async execute(interaction){
        const costume = require("./json/costume.json");
        const randomIndex = Math.floor(Math.random() * costume.costumes.length);
        const str = costume.costumes[randomIndex];
		console.log('Command \' Costume \' used in Server '+ interaction.guild.toString());
		await interaction.reply(str);
	},
};