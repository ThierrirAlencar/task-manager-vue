<script setup lang="ts">
    import { defineComponent, ref } from 'vue';
    import type { createTask as ctask } from '../api/interfaces/task';
    import { createTask } from '../api/functions/postTask';
    const emit = defineEmits(['update']);

    const title = ref('');
    const description = ref('');
    const date = ref<Date>(new Date());
    const loading = ref(false);
    const error = ref('');

    async function handleTaskCreation() {
        if (!title.value || !date.value) {
            error.value = "Campos não preenchidos";
            return;
        }

            loading.value = true;
            error.value = '';

            try {
                const newTask: ctask = {
                    title: title.value,
                    description: description.value,
                    date: date.value,
                    user_id: 1,
                };

                await createTask(newTask);

                title.value = '';
                description.value = '';
                emit('update');

            } catch (err) {
                error.value = "Erro ao criar tarefa";
                console.error(err);
            } finally {
                loading.value = false;
            }
        }

</script>

<template>
    <div class="p-2">
        <h1 class="text-black font-bold text-2xl">Selecione um dia!</h1>
        <p>Clique no calendário ao lado para escolher um dia específico da semana!</p>
    </div>
    
    <div class="flex flex-col justify-center items-start">
        <p v-if="error" class="text-red-500 mb-2">{{ error }}</p>
        
        <div class="flex w-full flex-row justify-center items-start gap-2">
            <input 
                v-model="title"
                placeholder="Nome da tarefa" 
                type="text" 
                class="w-2/3 border-dashed p-2 border-gray-400 rounded-xl bg-gray-100" 
                style="border: 1px dashed gray;"
            >
            <button 
                @click="handleTaskCreation"
                :disabled="loading"
                class="p-2 hover:bg-green-600 bg-green-500 text-white font-semibold rounded-sm cursor-pointer disabled:bg-gray-400"
            >
                {{ loading ? 'Criando...' : 'Criar Tarefa!' }}
            </button>
        </div>
        
        <div class="flex w-full flex-row justify-start items-start gap-3 mt-2 p-2">
            <input
                v-model="description"
                placeholder="descrição da tarefa" 
                type="text" 
                class="w-full border-dashed p-2 border-gray-400 rounded-xl bg-gray-100" 
                style="border: 1px dashed gray;"
            >
        </div>
        
        <!-- <div class="flex w-full flex-row justify-start items-start gap-3 mt-2 p-2">
            <input
                v-model="date"
                type="date" 
                class="w-full border-dashed p-2 border-gray-400 rounded-xl bg-gray-100" 
                style="border: 1px dashed gray;"
            >
        </div> -->
    </div>
</template>