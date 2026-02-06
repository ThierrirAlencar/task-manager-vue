<script setup lang="ts">
  import Header from './components/Header.vue';
  import TaskItem from './components/TaskItem.vue';

  const months = ["Janeiro","Fevereiro","Abril","Maio","Junho","Julho","Agosto","Setembro","Novembro","Dezembro"]
  const date = new Date();

</script>

<template>
  <Header></Header>

  <main class="w-full h-auto p-5 flex flex-col justify-center items-center">
    <div class=" w-3/4 h-auto p-3 flex justify-center  gap-4 flex-row">
      <div class="w-1/2 bg-sky-50 p-4">
        <div class="flex flex-col justify-center items-start">
            <h1 class="text-black font-bold text-2xl ">{{months[date.getMonth()]}} - {{date.getFullYear()}}</h1>
            <p>Suas tarefas do mês de {{months[date.getMonth()]}}!</p>
        </div>
      </div>
    
      <div class="w-1/3 bg-sky-50 h-auto p-4">
        <div class="p-2">
          <h1 class="text-black font-bold text-2xl ">Selecione um dia!</h1>
          <p >Clique no calendário ao lado para escolher um dia específico da semana!</p>
        </div>
        <form class="flex flex-col justify-center items-start">
          <div class="flex w-full flex-row justify-center items-start gap-2 ">
            <input placeholder="Nome da tarefa" type="text" class="w-2/3 border-dashed p-2 border-gray-400 rounded-xl bg-gray-100" style="border: 1px dashed gray;">
            <button class="p-2 bg-green-500 text-white font-semibold rounded-sm cursor-pointer">Criar Tarefa!</button>
          </div>
          <div class="flex w-full flex-row justify-start items-start gap-3 mt-2 p-2">
            <input placeholder="descrição da tarefa" type="text" class="w-full border-dashed p-2 border-gray-400 rounded-xl bg-gray-100" style="border: 1px dashed gray;">
          </div>
        </form>
        <hr class="p-5 mt-10 text-gray-200">

        <!-- Area de Tarefas pós scan (esses elementos serão gerados a partir do consumo da api! ) -->
        <div class="flex flex-col justify-center items-start gap-y-5">
          <TaskItem title="Matar um gato"></TaskItem>
          <TaskItem title="Fazer Feijão"></TaskItem>
        </div>
      </div>
    </div>
  </main>
</template>


