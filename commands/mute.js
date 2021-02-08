const discord = require('discord.js')
module.exports = {
    name: "mutar",
    description: "Muta alguém",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não tem permissão para usar este comando!");

        const target = message.mentions.members.first()
        if(!target) return message.reply("Mencione alguém para mutar!");

        if(target.id === message.author.id) {
            return message.reply("Você não pode se mutar!")
        }

        let reason = args.slice(1).join(" ");
        if(!reason) return message.reply("Por favor, dê um motivo para o mute!")

        const memberrole = message.guild.roles.cache.find(r => r.name === "Membro");
        const mutedrole = message.guild.roles.cache.find(r => r.name === "Muted");
        if(!memberrole) guild.createRole (r => r.name === "Muted")  
        if(!memberrole) return message.reply("não achei o cargo `Membro`!")
        if(!mutedrole) return message.reply("não achei o cargo `Muted`!")
        if(!memberrole)

        if(target.roles.cache.some(r => r.name === "Muted")) {
            return message.reply("Este membro ja esta mutado!");
        }

        let embed = new discord.MessageEmbed()
        .setTitle("Membro mutado!")
        .addField("Alvo", target.user.tag)
        .addField("Administrador", message.author.tag)
        .addField("Motivo", reason)
        await message.channel.send(embed)
        target.roles.add(mutedrole)
        target.roles.remove(memberrole)
    }
}