module.exports = {
	name: 'world',
	description:'どこに行こうかな✨',
	async execute(interaction){
        const worlds = require("./json/worlds.json");
        const randomIndex = Math.floor(Math.random() * worlds.worlds.length);
        const str = worlds.worlds[randomIndex];
		console.log('Command \' World \' used in Server '+ interaction.guild.toString());
		await interaction.reply(str);
	},
};