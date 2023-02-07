<template>

  <v-app-bar color="primary">

    <v-spacer>

      <v-tabs
        fixed-tabs
        background-color="indigo"
        dark
      >
        <v-tab to="/">
          <h1> OO模型</h1>
        </v-tab>
        <v-tab to="/bit">
          商品分類
        </v-tab>
        <v-tab to="/event">
          最新活動
        </v-tab>
        <v-tab to="/hot">
          熱門商品
        </v-tab>
        <v-tab to="/bid">
          競標商品
        </v-tab>
      </v-tabs>

    </v-spacer>
    <v-text-field id="search">搜尋 </v-text-field>
    <v-btn v-if="!isLogin" prepend-icon="mdi-account-plus" variant="text" to="/register">註冊</v-btn>
    <v-btn v-if="!isLogin" prepend-icon="mdi-login" variant="text" to="/login">登入</v-btn>
    <v-btn v-if="isLogin" prepend-icon="mdi-cart" variant="text" to="/cart">
      <v-badge :content="cart" color="success" floating="floating">購物車</v-badge>
    </v-btn>
    <v-btn v-if="isLogin" prepend-icon="mdi-format-list-bulleted" variant="text" to="/orders">訂單</v-btn>
    <v-btn v-if="isLogin &amp;&amp; isAdmin" prepend-icon="mdi-cog" variant="text" to="/admin">管理</v-btn>
    <v-btn v-if="isLogin" prepend-icon="mdi-logout" variant="text" @click="logout">登出</v-btn>

  </v-app-bar>

  <v-main>
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-main>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-card
      color="primary lighten-1"
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const { isLogin, isAdmin, cart } = storeToRefs(user)
const { logout } = user

</script>
<script>

export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'

    ]
  }),
  methods: {
    appendIconCallback () {},
    prependIconCallback () {}
  }
}
</script>
<style>
#search{

  position:absolute;
  top:20px;

}
</style>
