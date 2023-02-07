<template>
  <v-card class="card-event">

    <v-img :src="image" cover="cover" height="200px"></v-img>
    <v-card-title>
      <router-link class="text-decoration-none text-primary" :to="'/events/' + _id">{{ name }}</router-link>
    </v-card-title>
    <v-card-text>
      <p>{{ description }}</p>
    </v-card-text>
    <v-card-text>

    </v-card-text>

  </v-card>
</template>

<script setup>

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
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  }

})

</script>
