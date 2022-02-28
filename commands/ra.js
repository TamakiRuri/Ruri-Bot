const fs = require('fs');

module.exports = {
	name: 'ra',
	description:'誰が出てくるかな～🍣',
	async execute(interaction){
        const avatarCommandFiles = fs.readdirSync('./commands/avatars').filter(file => file.endsWith('.js'));
        const randomNumber = Math.floor( Math.random() * avatarCommandFiles.length);
        const command = require(`./avatars/${avatarCommandFiles[randomNumber]}`);
		await command.execute(interaction);
	},
};