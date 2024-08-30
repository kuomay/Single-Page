<template>
  <section id="services" class="w-screen min-h-screen flex flex-col items-center justify-center py-20">
    <div class="services">
      <div class="flex flex-row">
        <div><img src="/src/assets/images/section3-title-man@1x.png"></div>
        <div class="ml-5 mr-5"><h2 class="shadow-text">聯合勸募是誰 ?</h2></div>
        <div><img class="mt-16" src="/src/assets/images/section3-title-woman@1x.png"></div>
      </div>
    </div>
    <div class="box-border h-auto w-full max-w-[1560px] pt-[50px] pr-[50px] pb-[50px] pl-[50px] p-4 border-transparent border-4 mt-16 bg-[#e9e7dc] rounded-[50px]">
      <div class="flex flex-col items-center justify-center">
        <div class="flex flex-row mb-8 mt-16">
          <div class="mr-16">
            <h3 class="mb-4 typewriter">將捐款公開透明刻在骨子裡</h3>
            <p class="text-xl mt-10">聯合勸募的成立源於一起社會上的詐騙事件，為了打<br>造一個讓大眾能放心託付捐款的平台，聯合勸募因此<br>應運而生，清清楚楚明明白白是我們的核心理念，是<br>永不變心的初衷。</p>
          </div>
          <div>
            <img src="/src/assets/images/who-item-01@1x.png">
          </div>
        </div>

        <div class="flex flex-row mt-16 mb-8">
          <div class="mr-16">
            <img src="/src/assets/images/who-item-02@1x.png">
          </div>
          <div>
            <h3 class="mb-4 typewriter">資源不該掌握在少數單位手中</h3>
            <p class="text-xl mt-10">上萬家公益組織，愛心資源卻過分集中，前3大組織<br>募款所得是聯合勸募10倍以上，但聯合勸募資源是直<br>接捐注400家中小型社福單位，越有資源越容易獲得<br>關注，長期下來大者恆大，地方性社福組織卻有心無<br>力。</p>
        </div>
        </div>

        <div class="flex flex-row mb-8 mt-16">
          <div class="mr-16">
            <h3 class="mb-4 typewriter">一筆搞定！你關心的助人議題</h3>
            <p class="text-xl mt-10">聯合勸募的成立源於一起社會上的詐騙事件，為了打<br>造一個讓大眾能放心託付捐款的平台，聯合勸募因此<br>應運而生，清清楚楚明明白白是我們的核心理念，是<br>永不變心的初衷。</p>
          </div>
          <div>
            <img src="/src/assets/images/who-item-03@1x.png">
          </div>
        </div>

        <div class="flex flex-row mt-16 mb-8">
          <div class="mr-16">
            <img src="/src/assets/images/who-item-04@1x.png">
          </div>
          <div>
            <h3 class="mb-4 typewriter">專業才能把好事做好</h3>
            <p class="text-xl mt-10">上萬家公益組織，愛心資源卻過分集中，前3大組織<br>募款所得是聯合勸募10倍以上，但聯合勸募資源是直<br>接捐注400家中小型社福單位，越有資源越容易獲得<br>關注，長期下來大者恆大，地方性社福組織卻有心無<br>力。</p>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #f1f0e6;
}

h2 {
  color: #333;
  font-size: 3.4375rem;
  text-shadow: -1px 0px 0px #c6c4ba, 2px 0px 0px rgba(251, 252, 148, .5);
  font-weight: 1000;
  line-height: 150%;
  margin-top: 150px;
}

p {
  font-weight: 800;
  letter-spacing: 1.1px;
  line-height: 1.8; 
}

.services {
  position: relative;
  top: 88px;
}

.box-border {
  background-color: #e9e7dc;
  border-radius: 50px;
}

h3 {
  color: #333;
  position: relative;
  font-size: 2.375rem;
  font-weight: 1000;
  font-family: "Noto Sans TC", sans-serif;
  letter-spacing: 1.1px;
  overflow: hidden; /* 確保文字在動畫期間不超出容器 */
  white-space: nowrap; /* 防止文字自動換行 */
  border-right: .15em solid; /* 創建光標效果 */
  animation: typing 4s steps(30) infinite, blink-caret .75s step-end infinite; /* 添加打字和閃爍動畫 */
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: #333; }
}

h3::after {
  content: '';
  position: absolute;
  bottom: -16px;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #3bb1e6;
}

.shadow-text {
  animation: shadow-move 6s infinite alternate ease-in-out;
}

@keyframes shadow-move {
  0% {
    text-shadow: 0px 0px 15px rgba(0, 128, 255, 0.6), 0px 0px 25px rgba(0, 128, 255, 0.4), 0px 0px 40px rgba(0, 128, 255, 0.2);
  }
  25% {
    text-shadow: -10px -10px 20px rgba(255, 105, 180, 0.6), 10px 10px 30px rgba(255, 105, 180, 0.4);
  }
  50% {
    text-shadow: -8px 8px 20px rgba(144, 238, 144, 0.6), 8px -8px 30px rgba(0, 255, 127, 0.4);
  }
  75% {
    text-shadow: 10px -10px 20px rgba(255, 165, 0, 0.6), -10px 10px 30px rgba(255, 215, 0, 0.4);
  }
  100% {
    text-shadow: 15px 15px 30px rgba(0, 0, 128, 0.7), -15px -15px 40px rgba(75, 0, 130, 0.5);
  }
}
</style>
