<script setup>
import { ref, computed } from 'vue'

const model = ref(0)
const items = ref([
  { title: 'Card 1', content: 'Content for Card 1', color: 'primary' },
  { title: 'Card 2', content: 'Content for Card 2', color: 'secondary' },
  { title: 'Card 3', content: 'Content for Card 3', color: 'yellow darken-2' },
  { title: 'Card 4', content: 'Content for Card 4', color: 'red' },
  { title: 'Card 5', content: 'Content for Card 5', color: 'orange' },
  { title: 'Card 6', content: 'Content for Card 6', color: 'green' },
  { title: 'Card 7', content: 'Content for Card 7', color: 'blue' },
  { title: 'Card 8', content: 'Content for Card 8', color: 'purple' },
])

const maxModel = computed(() => Math.ceil(items.value.length / 3) - 1)

const decreaseModel = () => {
  model.value = Math.max(model.value - 1, 0)
}

const increaseModel = () => {
  model.value = Math.min(model.value + 1, maxModel.value)
}
</script>

<template>
  <div>
    <div class="d-flex justify-space-around align-center py-4">
      <v-btn
        icon="mdi-minus"
        variant="text"
        @click="decreaseModel"
      ></v-btn>
      {{ model }}
      <v-btn
        icon="mdi-plus"
        variant="text"
        @click="increaseModel"
      ></v-btn>
    </div>
    <v-carousel v-model="model" show-arrows prev-icon="mdi-chevron-left"
    next-icon="mdi-chevron-right">
      <v-carousel-item
        v-for="n in Math.ceil(items.length / 3)"
        :key="n"
        :value="n - 1"
      >
        <v-container>
          <v-row>
            <v-col
              v-for="item in items.slice((n-1)*3, n*3)"
              :key="item.title"
              cols="12"
              md="4"
            >
              <v-card
                :color="item.color"
                height="200"
              >
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card-text>{{ item.content }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

