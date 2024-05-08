const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('count')
    .setDescription('Conta o total de membros'),
  async execute(interaction) {
    const guild = await interaction.guild
    await interaction.reply(`${guild.memberCount} membros`)
  },
}
