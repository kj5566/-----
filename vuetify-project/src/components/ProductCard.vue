<template>
  <v-card class="card-product">

    <v-img :src="image" cover="cover" height="200px"></v-img>
    <v-card-title>
      <router-link class="text-decoration-none text-primary" :to="'/products/' + _id">{{ name }}</router-link>
    </v-card-title>
    <v-card-subtitle>${{ price }}</v-card-subtitle>
    <v-card-text>
      <p class="pre">{{ description }}</p>
    </v-card-text>
    <v-card-text>
      <p>銷售數量：{{ sales }}</p>

    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" prepend-icon="mdi-cart" @click="editCart({_id, quantity: 1})">加入購物車</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

defineProps({
  /* eslint-disable */
  _id: {
    type: String,
    default: ''
  },
  /* eslint-enable */
  name: {
    type: String,
    default: ''
  },
  sales: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  sell: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: ''
  }
})

const user = useUserStore()
const { editCart } = user
</script>
