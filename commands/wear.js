module.exports = {
	name: 'wear',
	description:'新しい服を買いたい！🍩',
	async execute(interaction){
        const clothes = require("./avatar_changes/clothes/clothes.json");
        const randomIndex = Math.floor(Math.random() * clothes.clothes.length);
        const str = clothes.clothes[randomIndex];
		await interaction.reply(str);
	},
};