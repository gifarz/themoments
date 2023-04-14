<template>
  <div>
    <nav :style="navStyle" class="fixed w-full flex justify-between text-white py-4 z-10 px-10
    md:px-20 lg:px-48 xl:px-64 2xl:px-96" ref="nav">
        <p class="text-2xl w-1/2">
          <nuxt-link class="font-cinzel font-bold" to="/">TheMoments</nuxt-link>
        </p>
        <div class="md:hidden">
          <svg @click="handleMenu" width="32" height="32" viewBox="0 0 24 24"><path ref="menu" :fill="color" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/></svg>
        </div>

        <li class="hidden md:flex justify-between list-none w-1/2" ref="listsNav">
          <ul>
            <nuxt-link class="story" to="/our-story">Our Stories</nuxt-link>
          </ul>
          <ul> 
            <nuxt-link class="celebration" to="/celebration">Celebration</nuxt-link>
          </ul>
          <ul>
            <nuxt-link class="galery" to="/galery">Galery</nuxt-link>
          </ul>
          <ul>
              <nuxt-link class="about" to="/about-us">About Us</nuxt-link>
          </ul>
        </li>
    </nav>

    <li class="menu_nav hidden fixed w-full z-10 mt-16 text-center list-none" ref="menuNav">
      <ul class="py-4 story bg-slate-100">
        <nuxt-link class="block" to="/our-story">Our Stories</nuxt-link>
      </ul>
      <ul class="py-4 celebration bg-white"> 
        <nuxt-link class="block" to="/celebration">Celebration</nuxt-link>
      </ul>
      <ul class="py-4 galery bg-slate-100">
        <nuxt-link class="block" to="/galery">Galery</nuxt-link>
      </ul>
      <ul class="py-4 about bg-white">
          <nuxt-link class="block" to="/about-us">About Us</nuxt-link>
      </ul>
    </li>
  </div>
</template>

<style>
  ul {
    font-size: 14px;
  }

  .story:nth-child(1):hover,
  .celebration:nth-child(1):hover,
  .galery:nth-child(1):hover,
  .about:nth-child(1):hover {
    padding-bottom: 10px;
    border-bottom: 1px solid v-bind(colorProps);
  }

</style>

<script>
export default {
  name: 'Navbar',
  props: ['bgColor', 'color', 'comp', 'borderBottom'],
  computed: {
    navStyle(){
      return {
        'background-color': this.bgColor,
        'color': this.colorProps,
        'borderBottom': this.borderBottom
      }
    },
  },
  data(){
    return {
      colorProps: this.color,
      bgColorUpdated: "",
      openMenu: false
    }
  },
  mounted() {
    const refNav = this.$refs.nav
    const menuNav = this.$refs.menuNav
    const iconMenu = this.$refs.menu
    
    window.addEventListener('resize', function(){
        if(window.screen.width >= 768){
          menuNav.style.display = 'none'
        }
    })

    if(this.comp == 'home'){
      window.addEventListener('scroll', () => {
          if(window.scrollY > 20){
            refNav.style.backgroundColor = 'white'
            refNav.style.color = 'black'
            refNav.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)'
            iconMenu.style.fill = 'black'

            window.screen.width >= 768 ? this.colorProps = 'black' : this.colorProps = 'white'

          } else {

            if(this.openMenu === true){
              refNav.style.color = 'black'
              refNav.style.backgroundColor ='white'
              iconMenu.style.fill = 'black'
            } else {
              refNav.style.color = 'white'
              refNav.style.backgroundColor ='transparent'
              refNav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)'
              iconMenu.style.fill = 'white'
              this.colorProps = 'white'
            }
          }
        })

    } else {
      document.getElementsByClassName(`${this.comp}`)[0].style.borderBottom = '1px solid black'
      document.getElementsByClassName(`${this.comp}`)[0].style.paddingBottom = '10px'
    }
    
  },
  methods: {
    handleMenu(){
      this.openMenu = !this.openMenu
      this.$emit("menuOpen", this.openMenu)

      if(this.openMenu){
        this.$refs.menuNav.style.display = 'block'
        if(this.comp != 'home'){
          document.getElementsByClassName(`${this.comp}`)[1].style.backgroundColor = '#83A580'
          document.getElementsByClassName(`${this.comp}`)[1].style.color = 'white'
        }

        this.$refs.nav.style.backgroundColor = 'white'
        this.$refs.nav.style.color = 'black'
        this.$refs.menu.style.fill = 'black'
      } else {
        this.$refs.menuNav.style.display = 'none'
        this.$refs.nav.style.backgroundColor = 'transparent'
        this.$refs.nav.style.color = 'white'
        this.$refs.menu.style.fill = 'white'
      }
      
    },
  }
}
</script>