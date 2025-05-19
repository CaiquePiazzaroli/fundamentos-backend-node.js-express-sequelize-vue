<template>
    <div id="container">
      <!-- Exemplo v-if -->
      <h1 v-if="count.title.length == 0">{{ count.default }}</h1>
      <h1 v-else >{{ count.title }}</h1>
  
      <!-- Exemplo v-on -->
      <p>Contagem atual: {{ count.number }}</p>
      <button v-on:click="incrementaCount">Incrementar</button>
  
      <!-- Exemplo v-model -->
      <br><span>Altere o título da pagina</span>
      <input type="text" v-model="count.title">
  
      <!-- Exemplo v-bind -->
       <br>
      <img width="450px" v-bind:src="imggato" alt="Img gato">
  
      <!-- Exemplo V-for -->
       <ul>
        <li v-for="item in listaMsgs">{{ item.msg }}</li>
       </ul>
    </div>
  </template>
  
  <script setup>
    const count = ref(
      {
        default: "----- Defina um titulo -------",
        title: "Contando com mvvm nuxt",
        number: 10
      }
    );
  
    const imggato = ref("https://cdn2.thecatapi.com/images/Vkc_4BECE.jpg");
  
    const listaMsgs = ref(
      [
        { msg: "Mensagem 1"},
        { msg: "Mensagem 2"},
        { msg: "Mensagem 3"},
        { msg: "Mensagem 4"},
        { msg: "Mensagem 5"},
      ]
    )
      

    onMounted(() => {
        window.alert("Carregouuu")
    })
  
    //ViewModel: Manipula estado de cout
    function incrementaCount() {
      //count++; Cuidado nao fazer!!
      count.value.number++;
    }
  </script>
  
  <style scoped>
    #container h1 {
      color: blueviolet;
    }
  </style>
  