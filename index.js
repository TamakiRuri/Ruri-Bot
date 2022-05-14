console.log('Nyaaaaaaaaaa! This is Ruri Bot Nya!🐱');

const fs = require("fs");
const config = require("./config.json");
const {Client, Collection, Intents, Message, Guild} = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const client = new Client({intents: [Intents.FLAGS.GUILDS]});
client.commands = new Collection();

// Read commands from ./commands
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// read avatar commands
const avatarCommandFiles = fs.readdirSync('./commands/avatars').filter(file => file.endsWith('.js'));
for (const file of avatarCommandFiles) {
	const command = require(`./commands/avatars/${file}`);
	client.commands.set(command.name, command);
}

// deploy commands to Discord server
const rest = new REST({ version: '9' }).setToken(config.token);

rest.put(Routes.applicationGuildCommands(config.clientId, config.guildId), { body: client.commands })
	.then(() => console.log('Successfully registered application commands Nya!🪟'))
	.catch(console.error);

// Read event handlers from ./events
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) {
		console.log("Not a command Nya!");
		return;
	}
	const command = client.commands.get(interaction.commandName);

	if (!command) {
		console.log("Command not true Nya!")
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command Nya!❌', ephemeral: true });
	}
});

client.login(config.token);