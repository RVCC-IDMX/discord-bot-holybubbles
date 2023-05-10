const {SlashCommandBuilder} = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
	.setName('echo')
	.setDescription('Echo your message back to you!')
  .addStringOption(option =>
		option.setName('msg')
			.setDescription('The message to echo back')
      .setRequired(true)
      .setMaxLength(25)
      ),
	async execute(interaction) {
		await interaction.reply(interaction.options.getString('msg'));
	}
}