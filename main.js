const Insta = require('./insta.js');
const client = new Insta.Client();
const chatbot = require("node-fetch").default;
const god = ""; //Your Instagram ID

client.on('connected', () => {
    console.log(`${client.user.username} Is Ready Now For Chats`);
});

client.on('messageCreate', (message) => {
    if (message.author.id === client.user.id) return
    message.markSeen();

    if(message.content.toLowerCase().includes('owner')){ 
        return message.chat.sendMessage(`Calling my owner for u ... ${god} #Kidding`);
    }
    else if(message.content.toLowerCase().includes('tofu')){ 
        return message.chat.sendMessage(`OwO, how do you know my master ${god}?`);
          } 
  else
    chatbot(`<Enter Brainshop API>${encodeURIComponent(message.content)}`) //Replace <Enter Brainshop API> to API
    .then(res => res.json())
    .then(json => {
      message.chat.sendMessage(json.cnt);
    }).catch(err => {});
});

client.login('<username>', '<Password>');  //Robot's Account Username and Password

