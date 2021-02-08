module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('ping?');

  m.edit(`🏓 **| Pong!**\n<:wifi:790656859354693674> Latência do Server: **${m.createdTimestamp -
      message.createdTimestamp}ms.**\n<:cpu:790656859085996073> Latência da API: **${Math.round(
      client.ws.ping
    )}ms**`
  );
};