<template>
    <div class="group">
        <svg @click="backToTop" width="3em" height="3em" viewBox="0 0 24 24" class="arrow_up hidden fixed z-50 bottom-0 right-0 m-4 rounded-full border border-white bg-sage group-hover:border-sage group-hover:bg-white group-hover:cursor-pointer" ref="arrowUp">
            <path class="group-hover:fill-sage" fill="white" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41z"></path>
        </svg>
    </div>
</template>

<style>
    /* .arrow_up {
        background-color: rgb(187, 167, 162);
    } */
    /* .arrow_up:hover {
        cursor: pointer;
        background-color: white;
        border: 1px solid rgb(187, 167, 162);
    }
    .arrow_up:hover path {
        fill: rgb(187, 167, 162);
    } */
</style>

<script>
export default {
    name: "ArrowUp",
    props: ["backToTop"],
    data(){
        return {
            refArrowUp: "arrowUp"
        }
    },
    mounted(){
        this.$emit("refArrowUp", this.$refs.arrowUp)
    }
}
</script>