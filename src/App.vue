<template>
  <v-app>
    <v-container>
      <v-toolbar title="Application">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-navigation-drawer
        v-model="drawer"
        :location="isMobile ? 'bottom' : 'right'"
        class="bg-green-lighten-4"
        theme="dark"
        temporary
      >
        <v-list color="transparent">
          <v-list-item prepend-icon="mdi-view-dashboard">
            <router-link to="/">Home</router-link></v-list-item>
          <v-list-item prepend-icon="mdi-account-box">
            <router-link to="/menu">Menu</router-link>
          </v-list-item>
          <v-list-item prepend-icon="mdi-gavel">
            <router-link to="/itinerario">Itinerario</router-link>
          </v-list-item>
          <v-list-item prepend-icon="mdi-gavel">
            <router-link to="/gallery">Galleria</router-link>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      </v-toolbar>
    </v-container>
    <router-view />
  </v-app>
</template>      

<script>
import { defineComponent } from 'vue';
import { VApp, VAppBarNavIcon, VList, VListItem, VNavigationDrawer, VToolbar } from 'vuetify/components';
import { useDisplay } from 'vuetify';  // Importazione di useDisplay

export default defineComponent({
  name: 'App',
  components: {
    VApp,
    VToolbar,
    VAppBarNavIcon,
    VNavigationDrawer,
    VList,
    VListItem
  },
  data() {
    return {
      drawer: false
    };
  },
  setup() {
    const { mobile } = useDisplay(); // Utilizza useDisplay per ottenere l'informazione sul display
    return {
      isMobile: mobile
    };
  }
});
</script>