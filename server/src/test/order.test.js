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

