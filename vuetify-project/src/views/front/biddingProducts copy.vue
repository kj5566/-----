<template>
  <div id="bit">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">OO模型</h1>
      </v-col>

      <v-divider></v-divider>

      <v-col cols="12"><v-select
        :items="['模型', '遊戲王卡', '公仔', '景品', '其他']"
        label="分類"
      ></v-select></v-col>

      <v-col v-for="product in products" :key="product._id" cols="9" md="6" lg="3">
        <ProductCard v-bind="product"></ProductCard>
      </v-col>

    </v-row>
  </div>

</template>

<script setup>
import { reactive } from 'vue'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import ProductCard from '@/components/ProductCard'

const products = reactive([]);

(async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>
