const nome = "caique";
const sobrenome = "mendes";

//Funlçao que será executada e retornará ou um reject() ou um resolve()
const callbackfunction = (resolve, reject) => {
  if (nome !== "caique") {
    reject(); //Retorna uma reijeição, leva a promise para o catch
  }
  resolve(); //Retorna um status de sucesso, leva a promisse para os then's seguintes
};

//Passando callback para a promise
new Promise(callbackfunction)
  .then(() => {
    console.log("Conectando 1...");
  })
  .then(() => {
    console.log("Conectando 2...");
    if (sobrenome !== "mendes") {
      throw new Error("O sobrenome está incorreto!"); //Pula o proximo then e vai para o catch
    }
  })
  .then(() => {
    console.log("Conexao estabelecida com sucesso!...");
  })
  .catch(() => {
    console.log("Falha na conexao com o banco de dados caique");
  });

//é preciso exercutar o arquivo 011_servidor_com_express.js para funcionar
fetch("http://localhost:8080/?type=pessoas")
  .then((response) => {
    //A promise retorna um objeto Response
    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }
    console.log("Status:" + response.status);
    return response.json(); //Retorna um json para o proximo then
  })
  .then((data) => {
    console.log("Dados recebidos:", data); // Faça algo com os dados aqui
  })
  .catch((error) => {
    console.error("Erro:", error);
  });


//Criando uma Promise para setTimeout

// const waitToExecute = new Promise((resolve, reject) => {
//   const duration = 1000; 

//   if(duration < 0) {
//     reject(new Error("Erro por tempo menor que 0"));
//   }

//   setTimeout(resolve(param), duration); //Espera um segundo antes de mandar o resolve para o then
// });

// waitToExecute.then((result)=>{console.log("It’s done!" + result)});