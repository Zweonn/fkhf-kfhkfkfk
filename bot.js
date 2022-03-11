const discord = require("discord.js")

const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { join } = require("path");
const ayarlar = require("./ayarlar.json")

client.on("ready", () => {
  console.log('Zweon Tarafından RealFamilye Özel Olarak Tasarlanmıştır')
  client.user.setActivity("Prefix: ra! Komutlar: ra!yardım | Zweon Tarafından RealFamily'e Özel Olarak Tasarlanmıştır")
})
client.on("warn", info => console.log(info));

client.on("error", console.error)

client.commands = new discord.Collection()
client.prefix = ayarlar.PREFIX
client.queue = new Map();


const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"))
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file))
  client.commands.set(command.name, command)
} 


client.on("message", message => {
   if (message.author.bot) return;
  if (!message.guild) return;
  if(message.content.includes("<@934358651601309746>") || message.content.includes("<@!934358651601309746>")) return message.channel.send(`Merhaba Ben RealBot Prefixim: ra! | ra!yardım Yazarak Detaylara Bakabiirsiniz.`) 
  if(message.content.startsWith(ayarlar.PREFIX)) {
    
    const args = message.content.slice(ayarlar.PREFIX.length).trim().split(/ +/)
    const command = args.shift().toLowerCase();
    
    if(!client.commands.has(command)) {
      return;
    } 
  try  { 
      client.commands.get(command).execute(client, message, args)
    } catch (err) { 
      console.log(err)
      message.reply("Bir hata oluştu!")
    }
    
  }
});

client.login(process.env.TOKEN) 