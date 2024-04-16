module.exports = {
	name:'nya',
	description:'にゃー!',
	async execute(interaction){
		console.log('Command \' Nya \' used in Server '+ interaction.guild.toString());
		await interaction.reply('にゃー!');
	},
};