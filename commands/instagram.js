const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
 // Zweon Tarafından RealFamily'e Özel Olarak Tasarlanmıştır
module.exports = {
  name: "instagram",
  description: "Zweon", 
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
    `
\[RealAkali İnstagram sayfasına gitmek için buraya tıklayın.](https://www.instagram.com/guvenkronostas/)\n
`)
                       .setColor("#ec3b83")
                      )    
}
} 