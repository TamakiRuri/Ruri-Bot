module.exports = {
	name:'select',
	description:'最大４つの中から一つを選ぶ',
	options: [
		{
			type: 3,
			name: 'str1',
			description: '選択肢１',
			required: true,
		},
		{
			type: 3,
			name:'str2',
			description: '選択肢２',
			required: true,
		},
		{
			type: 3,
			name: 'str3',
			description: '選択肢３',
		},
		{
			type: 3,
			name: 'str4',
			description: '選択肢4',
		},
	],
	async execute(interaction){
		let count = 0;
		for (let i = 0; i < 4; i++){
			let opt = 'str'.concat( i+1 );
			let str = interaction.options.getString(opt);
			if (str===null){
				break;
			}
			count++;
		}
		let out = 'str'.concat(Math.floor(Math.random()*count)+1);
		let outstr = interaction.options.getString(out);
		await interaction.reply(outstr);
	},
};