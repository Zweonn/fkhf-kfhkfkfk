const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
module.exports = {
   
  name: "yardım",
  description: "KOMUTLAR", 
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed().setTitle('KOMUTLAR')
                      .setDescription(
    `
    
      **----------Müzik Komutları----------**

\`${ayarlar.PREFIX}oynat <şarkı-adı>\` : **Bir Şarkıyı Oynatır.** \n
\`${ayarlar.PREFIX}atla\` : **Çalan şarkıyı atlar.**\n
\`${ayarlar.PREFIX}durdur\` : **Şarkıyı durdurur.**\n
\`${ayarlar.PREFIX}devam\` : **Duran şarkıyı devam ettirir.**\n
\`${ayarlar.PREFIX}sıra\` : **Şarkı sırasını gösterir.**\n
\`${ayarlar.PREFIX}şarkı\` : **Oynatılan şarkının adını söyler.**\n

          **----------RealAkali Bilgi----------**

\`${ayarlar.PREFIX}youtube\` : **RealAkali Youtube linkini atar.**\n
\`${ayarlar.PREFIX}twitch\` : **RealAkali Twitch Kanalının linkini atar.**\n
\`${ayarlar.PREFIX}instagram\` : **RealAkali İnstagram sayfasının linkini atar.**\n
\`${ayarlar.PREFIX}klipler\` : **En popüler klipleri sırasıyla atar**\n
`)
                       .setColor("#008000")
                      )    
}
}