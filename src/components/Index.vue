<template>
    <div class="bg-gray-300 ">
        <div class="min-h-screen flex items-top justify-center">
            <div class="relative w-full max-w-full">
                <div class="fixed top-0 -left-4 transform scale-150 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
                <div class="fixed top-8 left-24 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
                <div class="fixed top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
                <router-view/> 
            </div>
        </div>
        <footer class="p-2 w-full max-w-md mx-auto">
            <div class="text-gray-500 text-center font-thin font-sans text-sm"> <small> Developed By </small><a href="https://github.com/mohsin-riad" class=" font-semibold text-gray-400 "> Mohsin Riad </a> </div>
        </footer>
    </div>
</template>

