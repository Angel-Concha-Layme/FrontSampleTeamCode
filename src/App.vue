<template>
  <header>
    <select v-model="states.lang" class="dropdown"> <!-- menu desplegable de los lenguajes -->
      <option v-for="lang of langs" :value="lang">{{ lang }}</option>
    </select>
    <select v-model="states.theme" class="dropdown"> <!-- menu desplegable de los temas -->
      <option v-for="theme of themes" :value="theme">{{ theme }}</option>
    </select>
    <!-- boton para limpiar -->
    <button @click="states.content = ''" class="dropdown">Limpiar</button>
    <button @click="executeCode" class="execute-button">Ejecutar</button>
  </header>
  <main>
    <VAceEditor
      ref="aceRef"  
      v-model:value="states.content"
      class="vue-ace-editor"
      :lang="states.lang"
      :theme="states.theme"
      :options="editorOptions"
    />
    <div class="result-panel" v-html="formattedResult"></div>
  </main>
</template>


<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'; 
import { VAceEditor } from 'vue3-ace-editor';
import './ace-config';

const langs = ['java', 'python', 'kotlin', 'C++']; 
const themes = ['github', 'chrome', 'monokai', 'dracula', 'twilight','tomorrow_night'];
const result = ref(''); 

const states = reactive({
  lang: 'python',
  theme: 'tomorrow_night',
  content: '',
});



watch(
  () => states.lang,
  async lang => {
    states.content = (
      await { 
        java: import('./defaults/default_java.txt?raw'),
        python: import('./defaults/default_python.txt?raw'),
        kotlin: import('./defaults/default_kotlin.txt?raw'),
        'C++': import('./defaults/default_cpp.txt?raw'),
      }[lang]
    ).default;
  },
  { immediate: true },
);

const executeCode = async () => {
  try {
    // Crear el objeto JSON con los datos actuales del editor
    const data = {
      language: states.lang,
      code: states.content
    };

    // Opciones para la solicitud fetch
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    // Enviar la solicitud al servidor
    const response = await fetch('http://localhost:8080/execute', requestOptions);

    if (response.ok) {
      // Si la respuesta es exitosa, obtener y mostrar los datos
      const responseData = await response.json();
      let outputWithPrefix = responseData.output
        // Decodificar caracteres especiales
        .split('\n') // Dividir en líneas
        .map(line => `~code ]> ${line}`) // Agregar prefijo a cada línea
        .join('\n'); // Unir nuevamente con saltos de línea

        result.value = outputWithPrefix; // Mostrar salida en la interfaz de usuario
    } else {
      // Manejar respuestas no exitosas
      const errorText = await response.text();
      throw new Error(errorText);
    }
  } catch (error) {
    // Manejar errores en la solicitud o en la respuesta
    console.error('Error:', error);
    result.value = error.message; // Mostrar mensaje de error en la interfaz de usuario
  }
};

// Formatear el resultado como HTML
const formattedResult = computed(() => {
  if (!result.value) return '';
  // Envuelve el prefijo en un span para aplicar estilo y convierte \n a <br>
  return result.value
    .replace(/ {2}/g, '&nbsp;') // Reemplaza cada dos espacios por un espacio no separable
    .replace(/~code ]>/g, '<span class="prefix">🐦[~code]></span>') // Agrega el span alrededor del prefijo
    .replace(/\n/g, '<br />'); // Reemplaza los saltos de línea con <br>
});

const editorOptions = reactive({
  useWorker: true,
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true,
  fontSize: '18px' // tamaño de fuente para el editor
});

</script>

<style lang="scss">
header {
  display: flex;
  align-items: center;
  background-color: #333;
  padding: 10px;
}

.dropdown {
  margin-right: 15px;
  background-color: #555;
  color: white;
  border: none;
  font-size: 16px;
  padding: 5px 10px;
}

.execute-button {
  background-color: #444;
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  margin-left: auto;
  align-self: center;
  width: 780px;
}

.execute-button:hover {
  background-color: #555;
}

main {
  display: flex;
  margin-top: 15px;
  height: 100vh;
}

.vue-ace-editor {
  font-size: 18px;
  border: 1px solid;
  flex: 1;
}

.result-panel {
  background-color: #252525; /* Un gris oscuro típico de fondo de terminal */
  color: #dcdcdc; /* Un gris claro para el texto, común en terminales */
  padding: 15px;
  border: 1px solid #444; /* Un borde ligeramente más claro para definir el panel */
  width: 800px; /* Mantén el ancho como lo tienes */
  height: 100%; /* La altura se ajustará al contenedor padre */
  overflow-y: auto; /* Permite el desplazamiento vertical si el contenido es más largo que el contenedor */
  font-family: 'Consolas', 'Courier New', monospace; /* Fuente monoespaciada */
  white-space: pre-wrap; /* Conserva los espacios y saltos de línea, ajusta las palabras al final de la línea */
  word-break: break-all; /* Permite que las palabras largas se rompan y pasen a la siguiente línea */
  overflow-x: auto; /* Permite el desplazamiento horizontal si es necesario */
  font-size: 20px; /* Tamaño de fuente */
}

.result-panel .prefix {
  color: orange;
}


</style>
