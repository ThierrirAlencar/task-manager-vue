<script lang="ts">
    export default {
        props:{
            title:String,
            completed:Boolean,
            description:String || null,
        }
    }
</script>

<template>
    <div :title="description" :class="['border', 'w-full', 'border-gray-300', 'h-auto', 'p-3', 'flex', 'flex-row', 'justify-start', 'items-center', 'gap-3', 'rounded-2xl', completed ? 'bg-green-300' : 'bg-sky-50']">
        <input type="checkbox" name="" id="" class="w-1/12" v-on:click="()=>{}">
        <h1 class="w-10/12">{{ title }}</h1>
        <button class="pi pi-trash w-1/12 text-red-500 text-xm cursor-pointer"></button>
    </div>
</template>

<style scoped>
  input[type="checkbox"] {
    padding: 6px;
    transform: scale(1.3);
    accent-color: oklch(72.3% 0.219 149.579); /* Change to desired color */
  }
</style>