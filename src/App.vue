<script setup>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Active from './components/Active.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'  
</script>

<template>
  <div id="app">
    <Header />
    <main>
      <Home />
      <About />
      <Services />
      <Active />
      <Contact />
    </main>
    <Footer />  
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
}

main {
  margin-top: 60px;
}

section {
  /* padding: 2rem; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>