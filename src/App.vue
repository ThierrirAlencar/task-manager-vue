<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { getAll } from './api/functions/getAllTasks';
  import Header from './components/Header.vue';
  import TaskItem from './components/TaskItem.vue';
  import TaskForm from "./components/taskForm.vue"
  import type { task } from './api/interfaces/task';

  const months = ["Janeiro","Fevereiro","Abril","Maio","Junho","Julho","Agosto","Setembro","Novembro","Dezembro"]
  const date = new Date();


  const tasks = ref<task[]>([]);
  const loading = ref(true);
  async function fetchTasks() {
    try {
      const data = await getAll(1);
      tasks.value = data.map(e=>{
        return{
          date:new Date(e.date),
          description:e.description,
          title:e.title,
          id:e.id,
          user_id:e.user_id
        }
      });
      console.log(data);
      } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      loading.value = false;
    }
  }
  onMounted(
    async () => {
      await fetchTasks();
  });
</script>

<template>
  <Header></Header>

  <main class="w-full h-auto p-5 flex flex-col justify-center items-center">
    <div class=" w-3/4 h-auto p-3 flex justify-center  gap-4 flex-row">
      <div class="w-1/2 bg-sky-50 p-4 rounded-sm">
        <div class="flex flex-col justify-center items-start">
            <h1 class="text-black font-bold text-2xl ">{{months[date.getMonth()]}} - {{date.getFullYear()}}</h1>
            <p>Suas tarefas do mês de {{months[date.getMonth()]}}!</p>
        </div>
      </div>
      
      <div class="w-1/3 bg-sky-50 h-auto p-4 rounded-sm">
        <TaskForm
          v-bind="tasks"
          @update="fetchTasks()"
        ></TaskForm>
        <hr class="p-5 mt-10 text-gray-200">

        <!-- Area de Tarefas pós scan (esses elementos serão gerados a partir do consumo da api! ) -->
        <div class="flex flex-col justify-center items-start gap-y-5">
          <div>
            <h1 class="text-black font-bold text-2xl ">Lista de tarefas!</h1>
            <p class="">Suas tarefas do dia {{ date.getDay() }} de {{ months[date.getMonth()] }} de {{ date.getFullYear() }} !</p>
          </div>
          <ul class="w-full"  v-for="task in tasks">
            <TaskItem     
              :key="task.id"
              v-bind="task"
              @delete="(id) => tasks = tasks.filter(t => t.id !== id)"
              :completed=false :id=task.id :title=task.title :description=task.description>
            </TaskItem>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>


