<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item v-for="(item, i) in items" :key="i" link class="mb-2" :to="item.route">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="subtitle-2 font-weight-black">
              {{
              item.title
              }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- 订阅者们 -->
        <!-- <v-subheader class="mt-4 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list>
          <v-list-item v-for="item in items2" :key="item.text" link>
            <v-list-item-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt />
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </v-list>-->
        <!-- 其他 -->
        <!-- <v-list-item class="mt-4" link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Browse Channels</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Manage Subscriptions</v-list-item-title>
        </v-list-item>-->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="secondary" dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-icon class="mx-3" large>mdi-flower-outline</v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">三维编织模拟系统</span>
      </v-toolbar-title>
      <v-spacer />
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on">主题</v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in themes"
            :key="index"
            @click="$vuetify.theme.dark = item.dark"
          >
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text href="https://github.com/ScarboroughCoral/electron-vue-demo" target="_blank">
        <span class="mr-2">GitHub</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import items from '@/config/menuConfig';
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items,
    themes: [
      {
        dark: true,
        text: '夜间'
      },
      {
        dark: false,
        text: '白天'
      }
    ]
    // ===================订阅者模拟数据============================
    // items2: [
    //   { picture: 28, text: "Joseph" },
    //   { picture: 38, text: "Apple" },
    //   { picture: 48, text: "Xbox Ahoy" },
    //   { picture: 58, text: "Nokia" },
    //   { picture: 78, text: "MKBHD" }
    // ]
  }),
  created() {
    // 读取缓存主题

    this.$vuetify.theme.dark = localStorage.getItem('dark') === 'true';
  },
  beforeDestroy() {
    // 保存当前主题
    localStorage.setItem('dark', this.$vuetify.theme.dark.toString());
  }
};
</script>
