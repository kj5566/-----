<template>
  <div id="event">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">OO模型</h1>
      </v-col>
      <v-col v-for="event in events" :key="event._id" cols="12" md="6" lg="3">
        <EventCard v-bind="event"></EventCard>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import EventCard from '@/components/EventCard.vue'

const events = reactive([]);

(async () => {
  try {
    const { data } = await api.get('/events')
    events.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>
