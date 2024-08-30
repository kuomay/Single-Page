<script setup>

</script>

<template>
  <section id="about" class="about__content w-screen min-h-screen flex flex-col items-center justify-center py-20">
    <div class="about__container w-full max-w-7xl px-4">
      <!-- Top Section -->
      <div class="about__top flex flex-col items-center justify-center w-full">
        <h3 class="bounce-text mt-16">
          <span class="mr-1">愛</span>
          <span class="mr-1">別</span>
          <span class="mr-1">按</span>
          <span class="mr-1">下</span>
          <span class="mr-1">暫</span>
          <span class="mr-1"> 停</span>
          <span class="mr-1">鍵</span>
        </h3>
        <p class="c-text text-center mt-4">
          在關鍵時刻<br />
          你我，沒有按下暫停鍵<br />
          讓愛 持續運轉<br />
          因此他們的人生故事有了不同的結局
        </p>
        <div class="video-container">
          <iframe src="https://www.youtube.com/embed/_KM14Ii2NVg?si=_GvKiBdhFKaqDgLM" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="about__bottom flex flex-col items-center justify-center mt-8 mb-16">
        <h3 class="c-subtitle">愛心定存</h3>
        <p class="c-text text-center">
          讓愛，走入單親弱勢的家庭，為哈哈式喔好點一盞生日燭光<br />
          在因疾病失去視力的朋友旁，陪他重新學習生活的一切<br />
          陪在獨居長者旁，在身體不適時能即時援助<br />
          你的捐助 讓這些美好時刻能持續發生
        </p>
        <img src="/src/assets/images/section2-people@1x.png" class="mt-16">
      </div>

      <div>
        <img src="/src/assets/images/section2-support.svg" class="mt-16">
      </div>
    </div>
  </section>
</template>

<style scoped>

.about__content {
  background: linear-gradient(180deg, rgba(2, 44, 82, 0) 0%, #022C52 2.33%, #022C52 108.23%);
  position: relative;
  margin-top: -50px;
}

.about__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.c-text {
  color: #fff;
  font-weight: 800;
  line-height: 190%;
  font-size: 1.5rem;
}

.video-container {
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;

}

.video-container iframe {
  width: 100%;
  height: 650px; 
  max-width: 1000px;
  margin-top: 30px;
}

.c-subtitle {
  font-size: 2.375rem;
  letter-spacing: 2px;
  color: #fff;
  font-weight: 700;
  line-height: 150%;
  padding-bottom: 10px;
  border-bottom: 5px solid #f6c911;
  margin-bottom: 30px;
  text-align: center;
  display: inline-block;
}

.bounce-text {
  font-size: 2.375rem; 
  letter-spacing: 2px; 
  color: #fff; 
  font-weight: 700; 
  line-height: 150%; 
  text-align: center; 
  display: inline-block;
  position: relative;
  border-bottom: 5px solid #f6c911;
}

.bounce-text span {
  display: inline-block;
  position: relative;
  transition: transform 0.3s cubic-bezier(0.25, 1.5, 0.5, 1);
}

/* 每個字的顏色設計 */
.bounce-text span:nth-child(1) {
  color: #ff5733;
}
.bounce-text span:nth-child(2) {
  color: #33ff57;
}
.bounce-text span:nth-child(3) {
  color: #3357ff;
}
.bounce-text span:nth-child(4) {
  color: #ff33a6;
}
.bounce-text span:nth-child(5) {
  color: #f1c40f;
}
.bounce-text span:nth-child(6) {
  color: #8e44ad;
}
.bounce-text span:nth-child(7) {
  color: #2ecc71;
}
.bounce-text span:nth-child(8) {
  color: #e67e22;
}
.bounce-text span:nth-child(9) {
  color: #3498db;
}

.bounce-text span:hover {
  transform: translateY(-20px) scale(1.1);
}

@media (max-width: 640px) {
  .c-subtitle {
    font-size: 1.8rem;
  }
  
  .video-container iframe {
    height: 56.25vw; 
  }
}

@media (max-width: 1024px) {
  .video-container {
    max-width: 90vw;
  }
  
  .video-container iframe {
    height: 50.625vw;
  }
}
</style>