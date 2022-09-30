const { default: axios } = require("axios")

test("Obter todos os pedidos", async function() {

    const response = await axios(
        {
            url: `http://localhost:5450/pedidos`,
            method: 'get',
        }
    );
   const respostaJSON = response.data;
   console.log(respostaJSON)
   const respostaHTTP = response.status;
   expect(respostaHTTP).toBe(200);
})

test("Obter o pedido pelo ID", async function() {

    const id = 'b9564d06-5b7f-4b6a-9b31-4a88166e9efa'
    
    const response = await axios(
        {
            url: `http://localhost:5450/pedidos/${id}`,
            method: 'get',
        }
    );

   const respostaJSON = response.data;
   console.log(respostaJSON)

   expect(respostaJSON.order_id).toBe('b9564d06-5b7f-4b6a-9b31-4a88166e9efa')

});

test.only("Criando o pedido", async () => {
 
    const novoPedido = {
        customer_id : "163c52e5-6cb3-4e32-86be-480e9618b755",  
        payment_mode_id : "73c9f163-5cd4-4367-a1f4-ac8d5f48df5c"
    }
 
    const response = await axios(
 
        {
            url: "http://localhost:5450/pedidos",
            method: "post",
            data: novoPedido
        }
    )
 
    const httpStatus = response.status
    expect(httpStatus).toBe(201)
})

