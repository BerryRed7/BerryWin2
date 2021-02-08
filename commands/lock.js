 const Discord = require('discord.js')


exports.run = async (client, message, args) => {
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Você não tem permissão para usar esse comando!')
        message.channel.overwritePermissions([{ 
          
            id: message.guild.id, 
            
            deny: ['SEND_MESSAGES'], 
            
            }]); 
            
            let embed = new Discord.MessageEmbed()
               .setColor('#FF0000')
               .setTitle('Chat Bloqueado para desbloquear use: `m!unlock`')
               .setImage('https://onetwopixel.com/wp-content/uploads/2018/02/animat-lock-color.gif')
               .setFooter(`Comando Solicitado por: ${message.author.username}`)
               

            return message.reply(embed)
    }