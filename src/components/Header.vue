<script setup>
const scrollTo = (id) => {
  const element = document.getElementById(id)
  element.scrollIntoView({ behavior: 'smooth' })
}

const navItems = [
  { id: 'home', text: '首頁' },
  { id: 'about', text: '關於我們' },
  { id: 'services', text: '聯合勸募是誰' },
  { id: 'active', text: '活動快報' },
  { id: 'contact', text: '聯繫我們' },
  { id: 'roadmap', text: '10年的改變之路' }
]
</script>

<template>
  <header class="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-200 h-20">
    <div class="container mx-auto px-4 mt-3">
      <div class="flex justify-between items-center py-2">
        <div class="flex items-center">
          <img src="/src/assets/images/logo_color (1).png" alt="Logo" class="h-12">
        </div>
        <nav>
          <ul class="flex space-x-4">
            <li v-for="(item, index) in navItems" :key="index">
              <a @click="scrollTo(item.id)" 
                 :href="`#${item.id}`" 
                 style="color: #23698c;"
                 class="text-xl font-black hover:text-gray-800 transition duration-300 py-2 px-4 rounded-full relative group">
                {{ item.text }}
                <span class="absolute inset-0 bg-blue-100 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 -z-1"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.group {
  isolation: isolate;
}
.-z-1 {
  z-index: -1;
}
</style>