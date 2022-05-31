const { MessageEmbed } = require("discord.js")
const fs = require("fs-extra")
const json = tempVars("list")

for (let index = 0; index < json.length; index++) {
 if (msg.content.includes(json[index])) {
  const exampleEmbed = new MessageEmbed()
  .setColor('#9b111e')
  .setTitle(`Замечено плохо слово!`)
  .setAuthor({name: `Система модерации`, iconURL: `https://media.discordapp.net/attachments/916857694114156564/980916511713660998/law.png?width=461&height=461`})
  .setDescription(`Пользователь ${msg.author} отправил плохое слово!`)
  msg.channel.send({ embeds: [exampleEmbed] });
  msg.delete()
 }
}
