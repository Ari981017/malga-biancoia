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
            <v-btn text @click="scrollTo('home')">Home</v-btn>
          </v-list-item>
          <v-list-item prepend-icon="mdi-view-dashboard">
            <v-btn text @click="scrollTo('menu')">Menu</v-btn>
          </v-list-item>
          <v-list-item prepend-icon="mdi-view-dashboard">
            <v-btn text @click="scrollTo('walk')">Itinerario</v-btn>
          </v-list-item>
          <v-list-item prepend-icon="mdi-view-dashboard">
            <v-btn text @click="scrollTo('gallery')">Galleria</v-btn>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      </v-toolbar>
    </v-container>
    <v-container>
        <InfoSection />
        <MenuSection />
        <ItinerarioSection />
        <GalleriaSection />
      </v-container>
  </v-app>
</template>      

<script>
import { defineComponent } from 'vue';
import { VApp, VAppBarNavIcon, VList, VListItem, VNavigationDrawer, VToolbar } from 'vuetify/components';
import { useDisplay } from 'vuetify';
import InfoSection from './components/InfoSection.vue';
import MenuSection from './components/MenuSection.vue';
import ItinerarioSection from './components/ItinerarioSection.vue';
import GalleriaSection from './components/GalleriaSection.vue';

export default defineComponent({
  name: 'App',
  components: {
    VApp,
    VToolbar,
    VAppBarNavIcon,
    VNavigationDrawer,
    VList,
    VListItem,
    InfoSection,
    MenuSection,
    ItinerarioSection,
    GalleriaSection
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
  },
  methods: {
    scrollTo(sectionId) {
      this.drawer = false;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
});
</script>