console.log('This is Ruri Bot!');

const fs = require("fs");
const config = require("./config.json");
const {Routes, REST, Client, Collection, GatewayIntentBits, Message, Guild} = require('discord.js');

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates]});
client.commands = new Collection();

global.channelMap = new Map();
global.vcTimeMap = new Map();

// Read commands from ./commands
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// read avatar commands (deprecated)
/*
const avatarCommandFiles = fs.readdirSync('./commands/avatars').filter(file => file.endsWith('.js'));
for (const file of avatarCommandFiles) {
	const command = require(`./commands/avatars/${file}`);
	client.commands.set(command.name, command);
}
*/

// Regesiter token for applying commands
const rest = new REST({ version: '9' }).setToken(config.token);

// Clean up old guild specific commands
if (config.guildId != ''){
	rest.put(Routes.applicationGuildCommands(config.clientId, config.guildId), { body:[]})
	.then(() => console.log('Successfully deleted guild commands!'))
	.catch(console.error);
}

// Apply commands
rest.put(Routes.applicationCommands(config.clientId), { body: client.commands })
	.then(() => console.log('Successfully registered application commands!'))
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


// Call functions when an interaction happened
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) {
		console.log("The interaction is not a command!");
		return;
	}
	const command = client.commands.get(interaction.commandName);

	if (!command) {
		console.log("Command is not true!");
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'このコマンドを実行するときにエラーが発生しました!❌', ephemeral: true });
	}
});

client.login(config.token);