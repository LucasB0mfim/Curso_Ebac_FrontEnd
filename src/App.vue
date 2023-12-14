<script setup>

  const insert = (number) => {
    const numbers = document.getElementById("result").innerHTML;
    document.getElementById('result').innerHTML = numbers + number;
  }

  const calculate = () => {
    const result = document.getElementById('result').innerHTML;
    if (result) {
      document.getElementById('result').innerHTML = eval(result);
    }
  }

  const clean = () => {
    document.getElementById('result').innerHTML = '';
  }

</script>

<template>
  <div id="body">
    <div class="container">
      <header>
        <h1>Calcula a dor EBAC</h1>
      </header>
      <form id="formulario">
        <div id="result"></div>
      </form>
      <section>
        <button type="button" @click="insert('7')">7</button>
        <button type="button" @click="insert('8')">8</button>
        <button type="button" @click="insert('9')">9</button>
        <button type="button" @click="insert('*')">x</button>
        <button type="button" @click="insert('4')">4</button>
        <button type="button" @click="insert('5')">5</button>
        <button type="button" @click="insert('6')">6</button>
        <button type="button" @click="insert('-')">-</button>
        <button type="button" @click="insert('1')">1</button>
        <button type="button" @click="insert('2')">2</button>
        <button type="button" @click="insert('3')">3</button>
        <button type="button" @click="insert('+')">+</button>
        <button type="button" @click="insert('0')">0</button>
        <button type="button" @click="clean('C')">C</button>
        <button id="btn" type="button" @click="calculate">=</button>
      </section>
    </div>
  </div>
</template>

<style scoped>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-align: center;
  }

  #body {
    display: flex;
    align-items: center;
    height: 100vh;
  }
  .container {
    max-width: 300px;
    width: 100%;
    height: 400px;
    margin: 0 auto;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  header {
    font-family: sans-serif;
    color: #fff;
    margin-top: 10px;
  }
  
  #formulario {
    max-width: 100%;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }

  #result {
    width: 100%;
    height: 50px;
    color: #fff;
    font-family: sans-serif;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 10px;
    font-size: 25px;
  }

  section {
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
  }

  button {
    height: 50px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: #fff;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style> 