<script setup>
import { onMounted, ref } from 'vue';

const animatedElement = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animateFlip');

        entry.target.addEventListener('animationend', () => {
          entry.target.classList.remove('animateFlip');
        }, { once: true });
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(animatedElement.value);
});
</script>

<template>
  <section id="contact" class="gradient-bg flex items-center justify-center min-h-screen">
    <div ref="animatedElement" class="flex flex-col items-center justify-center text-center">
      <div class="year__contact">
        <h2 class="c-subtitle">聯絡我們</h2>
        <div class="year__contact__title mt-10">中華社會福利聯合勸募協會</div>

        <div class="year__contact__list mt-5">
          <a href="https://goo.gl/maps/vw8wxK81ckdANf6B8" rel="noopener noreferrer" target="_blank" class="list__text block mb-2">106412台北市大安區復興南路2段363號4樓</a>
          <div class="list__text mb-2">捐款專線：
            <a href="tel:02-2378-2256#9" class="text-blue-300">02-2378-2256分機9</a>
          </div>
          <div class="list__text mb-2">勸募核准字號：衛部救字第1111363394號</div>
        </div>

        <div class="flex flex-row mt-5 items-center justify-center">
          <img src="/src/assets/images/icon-fb.svg" class="transition-img mr-5 mt-5">
          <img src="/src/assets/images/icon-yt.svg" class="transition-img mr-5 mt-5">
          <img src="/src/assets/images/icon-ig.svg" class="transition-img mr-5 mt-5">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gradient-bg {
  background: linear-gradient(120deg, #ffffff, #022C52, #add8e6);
  background-size: 300% 300%;
  animation: gradientAnimation 15s ease infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.c-subtitle {
  display: inline-block;
  font-weight: 1000;
  line-height: 150%;
  letter-spacing: 2px;
  padding-bottom: 10px;
  border-bottom: 5px solid #f6c911;
  color: #fff;
  font-size: 2.375rem;
  letter-spacing: 3.8px;
}

.year__contact {
  font-size: 1.25rem;
  line-height: 150%;
  font-weight: 1000;
  letter-spacing: 1px;
  margin-bottom: 20px;
  color: #fff;
}

.transition-img {
  width: 50px; 
  height: auto; 
  transition: width 0.2s ease-in-out; 
}

.transition-img:hover {
  width: 65px; 
}

@keyframes flipIn {
  from {
    transform: rotateY(-90deg);
    opacity: 0;
  }
  to {
    transform: rotateY(0deg);
    opacity: 1;
  }
}

.animateFlip {
  animation: flipIn 2s;
}
</style>