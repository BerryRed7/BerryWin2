const Discord = require ('discord.js')

exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed ()
  .setTitle ('Meus comandos!')
  .setTimestamp ()
  .setDescription (`Esses são meus comandos ${message.author}!`)
  .setColor ('RANDOM')
  .addFields (
    {
      name: 'ação',
      value: `**<a:1_setarosa:790953029380866069> kiss
<a:1_setarosa:790953029380866069> hug
<a:1_setarosa:790953029380866069> cafuné
<a:1_setarosa:790953029380866069> slap**`
    },
    {
      name: 'moderação',
      value: `**<a:1_setarosa:790953029380866069> say
<a:1_setarosa:790953029380866069> ban
<a:1_setarosa:790953029380866069> kick
<a:1_setarosa:790953029380866069> slowmode
<a:1_setarosa:790953029380866069> lock
<a:1_setarosa:790953029380866069> unlock
<a:1_setarosa:790953029380866069> clear
<a:1_setarosa:790953029380866069> setprefix
<a:1_setarosa:790953029380866069> giveaway**`
    },
    {
      name: 'diversão',
      value: `**<a:1_setarosa:790953029380866069> coinflip
<a:1_setarosa:790953029380866069> oraculo**`
    },
    {
      name: 'outros',
      value: `**<a:1_setarosa:790953029380866069> ping
<a:1_setarosa:790953029380866069> avatar
<a:1_setarosa:790953029380866069> site
<a:1_setarosa:790953029380866069> uptime
<a:1_setarosa:790953029380866069> help**`
    }
  )
  .setFooter (`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"})); 
  await message.channel.send (embed)
}