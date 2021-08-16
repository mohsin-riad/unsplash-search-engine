<template>
    <div class="bg-gray-300 min-h-screen flex items-top justify-center">
        <div class="relative w-full max-w-lg">
            <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <div class="absolute top-8 left-24 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <router-view/> 
        </div>
    </div>
</template>

