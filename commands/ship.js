 var ship = [
    '□□□□□\nNunca!',
    '■□□□□\nNão daria muito certo..',
    '■■□□□\nTem chance!',
    '■■■□□\nAcho que são mais que amigos...',
    '■■■■□\nDevem estar namorando!',
    '■■■■■\nJá devem ser casados!',
   
  ];

exports.run = (bot, msg, params, mention) => {
  if (!params[0]){
   return msg.channel.send (`mencione duas pessoas para shipar!`)
  }
  if (!params[0]) msg.channel.send (mention[1], mention[2]);
      else msg.channel.send (ship)
 }