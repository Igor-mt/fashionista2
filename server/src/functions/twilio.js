require('dotenv').config()

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;

const client = require('twilio')(accountSid, authToken);

exports.sendOrderNotification = (userData, orderData) => {

  const { name, phone } = userData

  const { order_id, order_total, order_date } = orderData

  const message = `Olá, ${name}.

Seu pedido acaba de ser aprovado ✔.
    
*Detalhes do pedido:*
📦 *Pedido Nº* #${order_id}
🧾 *Valor Total:* R$${order_total.toFixed(2).replace(".", ",")}
📆 *Data:* ${order_date.replace(/-/g, "/")}
    
Muito obrigado por comprar na Fashionista ❤(●'◡'●)✨!!`

  client.messages
    .create({
      body: message,
      from: `whatsapp:+${process.env.TWILIO_FROM_NUMBER}`,
      to: `whatsapp:+55${process.env.TWILIO_TO_NUMBER}`
    })
    .then(message => console.log(message.sid))
    .done();
}
