const Discord = require ('discord.js')
  
module.exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed ()
   .setTitle ('Informações sobre mim')         
   .setDescription (`olá ${message.author}, aqui estão algumas de minhas informações!`)
   .addFields (
     {
       name: "Meu Criador:",
       value: `🎄✞в૯૨૨y ૨૯∂ ツ#8190`
     },
     {
       name: "Data De Criação",
       value: `12/10/2020`
     }
   )
  
  await message.channel.send (embed)
}