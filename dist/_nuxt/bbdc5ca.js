(window.webpackJsonp=window.webpackJsonp||[]).push([[9,8],{256:function(t,e,o){var content=o(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(104).default)("3aeef316",content,!0,{sourceMap:!1})},257:function(t,e,o){"use strict";o.r(e);o(258);var l=o(1),n={name:"Navbar",props:["bgColor","color","comp","borderBottom"],computed:{navStyle:function(){return{"background-color":this.bgColor,color:this.colorProps,borderBottom:this.borderBottom}}},data:function(){return{colorProps:this.color,bgColorUpdated:"",openMenu:!1}},mounted:function(){var t=this,e=this.$refs.nav,o=this.$refs.menuNav,l=this.$refs.menu;window.addEventListener("resize",(function(){window.screen.width>=768&&(o.style.display="none")})),"home"==this.comp?window.addEventListener("scroll",(function(){window.scrollY>20?(e.style.backgroundColor="white",e.style.color="black",e.style.borderBottom="1px solid rgba(0, 0, 0, 0.1)",l.style.fill="black",window.screen.width>=768?t.colorProps="black":t.colorProps="white"):!0===t.openMenu?(e.style.color="black",e.style.backgroundColor="white",l.style.fill="black"):(e.style.color="white",e.style.backgroundColor="transparent",e.style.borderBottom="1px solid rgba(255, 255, 255, 0.1)",l.style.fill="white",t.colorProps="white")})):(document.getElementsByClassName("".concat(this.comp))[0].style.borderBottom="1px solid black",document.getElementsByClassName("".concat(this.comp))[0].style.paddingBottom="10px")},methods:{handleMenu:function(){this.openMenu=!this.openMenu,this.$emit("menuOpen",this.openMenu),this.openMenu?(this.$refs.menuNav.style.display="block","home"!=this.comp&&(document.getElementsByClassName("".concat(this.comp))[1].style.backgroundColor="#83A580",document.getElementsByClassName("".concat(this.comp))[1].style.color="white"),this.$refs.nav.style.backgroundColor="white",this.$refs.nav.style.color="black",this.$refs.menu.style.fill="black"):(this.$refs.menuNav.style.display="none",this.$refs.nav.style.backgroundColor="transparent",this.$refs.nav.style.color="white",this.$refs.menu.style.fill="white")}}},r=function(){Object(l.b)((function(t,e){return{"5d69c6ce":t.colorProps}}))},c=n.setup;n.setup=c?function(t,e){return r(),c(t,e)}:r;var d=n,h=(o(260),o(43)),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("nav",{ref:"nav",staticClass:"fixed w-full flex justify-between text-white py-4 z-10 px-10 md:px-20 lg:px-48 xl:px-64 2xl:px-96",style:t.navStyle},[e("p",{staticClass:"text-2xl w-1/2"},[e("nuxt-link",{staticClass:"font-cinzel font-bold",attrs:{to:"/"}},[t._v("TheMoments")])],1),t._v(" "),e("div",{staticClass:"md:hidden"},[e("svg",{attrs:{width:"32",height:"32",viewBox:"0 0 24 24"},on:{click:t.handleMenu}},[e("path",{ref:"menu",attrs:{fill:t.color,d:"M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"}})])]),t._v(" "),e("li",{ref:"listsNav",staticClass:"hidden md:flex justify-between list-none w-1/2"},[e("ul",[e("nuxt-link",{staticClass:"story",attrs:{to:"/our-story"}},[t._v("Our Stories")])],1),t._v(" "),e("ul",[e("nuxt-link",{staticClass:"celebration",attrs:{to:"/celebration"}},[t._v("Celebration")])],1),t._v(" "),e("ul",[e("nuxt-link",{staticClass:"galery",attrs:{to:"/galery"}},[t._v("Galery")])],1),t._v(" "),e("ul",[e("nuxt-link",{staticClass:"about",attrs:{to:"/about-us"}},[t._v("About Us")])],1)])]),t._v(" "),e("li",{ref:"menuNav",staticClass:"menu_nav hidden fixed w-full z-10 mt-16 text-center list-none"},[e("ul",{staticClass:"py-4 story bg-slate-100"},[e("nuxt-link",{staticClass:"block",attrs:{to:"/our-story"}},[t._v("Our Stories")])],1),t._v(" "),e("ul",{staticClass:"py-4 celebration bg-white"},[e("nuxt-link",{staticClass:"block",attrs:{to:"/celebration"}},[t._v("Celebration")])],1),t._v(" "),e("ul",{staticClass:"py-4 galery bg-slate-100"},[e("nuxt-link",{staticClass:"block",attrs:{to:"/galery"}},[t._v("Galery")])],1),t._v(" "),e("ul",{staticClass:"py-4 about bg-white"},[e("nuxt-link",{staticClass:"block",attrs:{to:"/about-us"}},[t._v("About Us")])],1)])])}),[],!1,null,null,null);e.default=component.exports},258:function(t,e,o){var l=o(2),n=o(259),r=o(129);l({target:"Array",proto:!0},{fill:n}),r("fill")},259:function(t,e,o){"use strict";var l=o(23),n=o(76),r=o(26);t.exports=function(t){for(var e=l(this),o=r(e),c=arguments.length,d=n(c>1?arguments[1]:void 0,o),h=c>2?arguments[2]:void 0,v=void 0===h?o:n(h,o);v>d;)e[d++]=t;return e}},260:function(t,e,o){"use strict";o(256)},261:function(t,e,o){var l=o(103)((function(i){return i[1]}));l.push([t.i,"ul{font-size:14px}.about:first-child:hover,.celebration:first-child:hover,.galery:first-child:hover,.story:first-child:hover{padding-bottom:10px;border-bottom:1px solid var(--5d69c6ce)}",""]),l.locals={},t.exports=l},279:function(t,e,o){"use strict";o.r(e);var l={transitions:{name:"about",mode:"slide-right"},name:"aboutPage",components:{Navbar:o(257).default}},n=o(43),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("Navbar",{attrs:{bgColor:"white",color:"black",comp:"about",borderBottom:"1px solid rgba(0, 0, 0, 0.1)"}}),t._v(" "),e("h1",{staticClass:"pt-20 px-10 md:px-20 lg:px-48 xl:px-64 2xl:px-96 text-black"},[t._v("About Page")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:o(257).default})}}]);