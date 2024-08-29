<template>
    <section id="home" class="w-screen h-screen flex justify-center items-center overflow-hidden">
        <div class="relative w-full h-full">
        <img src="/src/assets/images/kv@1x.jpg" class="absolute top-0 left-0 w-full h-full object-fill ">
           <!-- <h1>這是一個簡單的一頁式網站範例</h1> -->
        </div>
  </section>
  </template>

  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    padding: 50px 0;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    font-size: 24px;
    color: #333;
    opacity: 0;
    animation: fadeZoomInOut 6s ease-in-out infinite;
  }
  
  @keyframes fadeZoomInOut {
    0%, 100% {
      opacity: 0;
      transform: scale(0.5) rotate(0deg);
    }
    50% {
      opacity: 1;
      transform: scale(2) rotate(360deg);
      color: #a10acf;
    }
  }
  </style>