<template>
    <div>
        <Navbar bgColor="white" color="black" comp="about" borderBottom="1px solid rgba(0, 0, 0, 0.1)"/>
        <h1 class="pt-20 px-10 md:px-20 lg:px-48 xl:px-64 2xl:px-96 text-black">About Page</h1>
    </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue';

export default {
  transitions: {
    name: "about",
    mode: "slide-right"
  },
  name: 'aboutPage',
  components: { Navbar }
}
</script>