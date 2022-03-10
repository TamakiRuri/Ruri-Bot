module.exports = {
	name: 'go',
	description:'どこに行けばよいかな～✨(WIP)',
	async execute(interaction){
        const worlds = require("./worlds/worlds.json");
        const randomWorldIndex = Math.floor(Math.random() * worlds.worlds.length);
        const str = worlds.worlds[randomWorldIndex];
		await interaction.reply(str);
	},
};