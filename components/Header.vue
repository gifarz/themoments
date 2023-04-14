<template>
    <header class="relative bg-cover bg-no-repeat bg-fixed grid grid-cols-2 text-white pl-4 pr-4 h-screen bg-sage">
        <div class="flex flex-col justify-center">
            <p class="text-5xl font-bold">This is your Moments</p>
            <p class="text-2xl">to create, save or share the Moments.</p>
            <!-- <p class="text-2xl">disini</p> -->
        </div>
        <div class="flex flex-col justify-center">
            <img 
            class="self-center" 
            src="../assets/img/vector-muslim.png" 
            alt="Vector Image" 
            width="420px" 
            height="420px"
            >
        </div>
        <div class="absolute w-full bottom-0 text-center mb-4">
            <button class="border border-white px-8 py-2 rounded-full text-white hover:bg-white hover:text-sage hover:border-none">Get Started</button>
        </div>
    </header>
</template>

<style>
    /* header {
        background: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url("../assets/img/background.jpg");
    } */
</style>
<script>
export default {
    name: "Header"
}
</script>