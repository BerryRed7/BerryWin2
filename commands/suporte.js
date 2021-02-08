const Discord = require('discord.js')

module.exports.run = (client, message, args) =>{
      const user = message.author.id;
    const name = "ticket-" + user;
    if(message.guild.channels.cache.find(ch => ch.name == name)){
        message.channel.send("Você já abriu um ticket")
    }else{
message.guild.channels.create(name).then((chan)=>{
chan.updateOverwrite(message.guild.roles.everyone, {
    SEND_MESSAGES: false,
    VIEW_CHANNEL: false
})
chan.updateOverwrite(user,{
    SEND_MESSAGES: true,
    VIEW_CHANNEL: true
})
message.channel.send(`Eu criei um ticket para você <#${chan.id}>`);
chan.send(`${message.author} escreva neste canal no que você precisa de ajuda e o suporte estará aqui em breve <:joinha:790663284909932604>`)
  })
 }
}