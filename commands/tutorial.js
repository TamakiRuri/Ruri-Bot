module.exports = {
	name:'tutorial',
	description:'アバター改変のチュートリアル！🥯(WIP)',
	async execute(interaction){
		const tutorialMain = {
			title: 'アバター改変チュートリアル',
			discription: 'チュートリアル（WIP）⚡',
			fields:[
				{
					name: 'アバターライティングがおかしくなったとき',
					value:'RuriのライティングFAQ\nhttps://rurinya.com/2024/04/15/unityfaq/\n\b',
				},
			]
		};
		console.log('Command \' Tutorial \' used in Server '+ interaction.guild.toString());
		await interaction.reply({embeds:[tutorialMain]});
    }
};