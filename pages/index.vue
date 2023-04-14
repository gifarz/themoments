<template>
  <div>
    <Navbar @menuOpen="menuOpen" :bgColor="bgColor" color="white" comp="home" borderBottom="1px solid rgba(255, 255, 255, 0.1)"/>
    <Header />
    <Feature />
    <Celebration />
    <Content />
    <Footer />

    <ArrowUp @refArrowUp="refScrollUp" :backToTop="backToTop"/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import Feature from '../components/Feature.vue';
import Celebration from '../components/Celebration.vue';
import Content from '../components/Content.vue';
import ArrowUp from '../components/ArrowUp.vue';
import Footer from '../components/Footer.vue';

export default {
    name: "IndexPage",
    components: { Navbar, Header, Content },
    data(){
      return {
        color: "white",
        refScrollTop: "",
        openMenu: false,
        bgColor: "",
      }
    },
    beforeMount(){
      window.scrollTo(0, 0);
    },
    mounted() {
      const refScrollUp = this.refScrollTop
      const documentBody = document.body
      
      window.addEventListener('scroll', function(){

        const bottomPage = Math.max(documentBody.scrollHeight, documentBody.offsetHeight ,refScrollUp.scrollHeight, refScrollUp.clientHeight)
        const innerHeight = window.innerHeight
        const fixHeight = bottomPage-innerHeight-1

        switch(true){
          case(window.scrollY > fixHeight):
            return refScrollUp.style.display = 'none'
          case(window.scrollY > 20):
            return refScrollUp.style.display = 'inline-block'
          default:
            return refScrollUp.style.display = 'none'
        }
      })
    },
    methods: {
      backToTop(){
        window.scrollTo({ top: 0, behavior: 'smooth' })
      },
      refScrollUp(newData){
        this.refScrollTop = newData
      },
      menuOpen(newData){
        this.openMenu = newData

        if(this.openMenu == true){
          this.bgColor = "white"
        } else {
          this.bgColor = "transparent"
        }
      }
    }
}
</script>
