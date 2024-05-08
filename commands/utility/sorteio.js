const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('sorteio')
    .setDescription('Sorteia alguém pra chupar meu pinto'),
  async execute(interaction) {
    const members = await interaction.guild.members.fetch()

    interaction.reply(
      `<@${members.random().user.id}> Você foi sorteado pra chupar meu pinto`
    )
  },
}
