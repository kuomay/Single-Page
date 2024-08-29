<script setup>
import image1 from '@/assets/images/section4-card-01.jpg';
import image2 from '@/assets/images/section4-card-02.jpg';
import image3 from '@/assets/images/section4-card-01.jpg';

const getImageSrc = (index) => {
  const images = [image1, image2, image3];
  return images[index];
};

const getProductName = (index) => {
  const names = ["「龍心大悅」限量聖誕禮 ", "趴趴龍證件套：讓療癒的力量長伴你左右", "趴趴龍證件套：讓療癒的力量長伴你左右"];
  return names[index];
};

const getProductDescription = (index) => {
  const descriptions = [
    "這個寒冷的季節，讓趴趴龍帶你來一深的熱愛。月捐800元 /單筆捐款9,600元，限量100份聖誕禮送給你，贈完為止。",
    "在這個寒冷的季節，讓趴趴龍帶你 /單筆捐款9,600元，限量100份聖誕禮送給你，贈完為止。",
    "(感謝支持, 已全數贈完) 商品三描述在地特產，每一口都是對這片土地深深的熱愛。"
  ];

  // Truncate the description if it exceeds 20 characters
  const maxLength = 40;
  const description = descriptions[index];
  return description.length > maxLength 
    ? description.substring(0, maxLength) + '...' 
    : description;
};

</script>

<template>
    <section id="active" class="w-screen min-h-screen flex flex-col items-center justify-center py-20 bg-light">
      <div class="contact text-center w-full">
        <!-- 標題區域 -->
        <div class="flex flex-row items-center justify-center mb-8">
          <img class="mt-16" src="/src/assets/images/section4-title-item-01@1x.png" alt="Title Decoration Left">
          <h2 class="mx-8">活動快報</h2>
          <img class="mt-14" src="/src/assets/images/section4-title-item-04@1x.png" alt="Title Decoration Right">
        </div>
        
        <!-- Carousel 區域 -->
        <VCarousel class="carousel" height="600" hide-delimiters>
          <VCarouselItem v-for="(item, i) in 3" :key="i">
            <div class="flex flex-row justify-center items-center h-full">
              <VCard v-for="(card, j) in 3" :key="j" class="card mx-4" elevation="5">
                <div class="image-container">
                  <img :src="getImageSrc(j)" alt="Product Image" class="mx-auto mt-4" style="max-width: 100%; border-radius: 12px;">
                </div>
                <VCardText class="text-center py-6">
                  <h3 class="font-bold">{{ getProductName(j) }}</h3>
                  <p class="description">{{ getProductDescription(j) }}</p>
                </VCardText>
                <VCardActions class="text-center pb-6">
                  <VBtn color="primary" outlined class="more-btn">MORE</VBtn>
                </VCardActions>
              </VCard>
            </div>
          </VCarouselItem>
        </VCarousel>
      </div>
    </section>
  </template>
  
  <style scoped>
section {
  background: linear-gradient(to bottom, #f1f0e6, white);
    background-color: #f1f0e6;
  }

.v-carousel__controls .v-icon {
  color: red !important; /* 確保顏色變為紅色 */
  font-size: 2rem; /* 可以根據需要調整大小 */
  }

  .v-carousel__controls {
    background-color: rgba(255, 255, 255, 0.5) !important; /* 半透明背景 */
  }

  h2 {
    color: #333;
    font-size: 3.4375rem;
    text-shadow: -1px 0px 0px #c6c4ba, 2px 0px 0px rgba(251, 252, 148, 0.5);
    font-weight: 1000;
    line-height: 150%;
    margin-top: 150px;
  }

  h3 {
    color: #333;
    font-size: 1rem;
    font-weight: 800;
  }
  
  .card {
    background-color: #bebdab;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 24px;
    width: 27%;
    height: 100%;
    margin: 0 auto;
  }
  
  .description {
    color: #333;
    font-size: 1rem;
    margin-top: 8px;
    height: 50px;
  }
  
  .more-btn {
    background-color: #f1f0e6;
    padding: 8px 16px;
    font-weight: bold;
    text-transform: uppercase;
    position: relative;
    font-size: 1.125rem;
    font-family: "RubikMonoOne", sans-serif;
    line-height: 150%;
    letter-spacing: .9px;
    color: #75b4d8;
    padding: 5px 21px;
    
  }
  
  .carousel {
    width: 80%; 
    max-width: 80%;
    height: 600px;
    background-color: #f1f0e6;
    margin: 0 auto;
    margin-top: 90px
  }


  
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ede9ee;
    padding: 16px;
    border-radius: 12px;
    width: 100%;
  }

  </style>
  