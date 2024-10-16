<template>
  <v-container fluid class="d-flex align-center justify-center" style="min-height: 100vh;">
    <v-row class="d-flex align-center justify-center">
      <!-- Colonna immagine -->
      <v-col cols="12" md="6" class="text-center">
        <v-img
          :src="require('@/assets/malga.jpeg')"
          alt="Malga Biancoia"
        ></v-img>
      </v-col>

      <!-- Colonna testo -->
      <v-col cols="12" md="6" class="d-flex flex-column justify-center" style="padding-top: 32px; padding-bottom: 32px;">
        <h1 class="text-center display-3">Chi siamo</h1>
        <p class="text-center" style="font-size: clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.268), 17px);">
          La nostra azienda agricola a conduzione familiare, attiva da generazioni, nel 2023 ha deciso di prendere in gestione l’agriturismo Malga Biancoia. 
          Questa scelta nasce dal desiderio di condividere la nostra passione e le nostre esperienze con un pubblico più ampio, offrendo un luogo dove 
          tradizione e innovazione si incontrano. A Malga Biancoia, non solo potrai immergerti nella bellezza della natura circostante, ma avrai anche 
          l’opportunità di assaporare i nostri formaggi artigianali, frutto di una lunga tradizione casearia. Vieni a trovarci per vivere un’esperienza 
          autentica, dove la genuinità dei nostri prodotti incontra l’ospitalità familiare.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import { VCol, VContainer, VImg, VRow } from 'vuetify/components';

export default defineComponent({
  name: 'InfoPage',
  components: {
    VContainer,
    VImg,
    VCol,
    VRow
  },
  methods: {
    checkScroll() {
      const body = document.body;
      if (body.scrollHeight <= window.innerHeight) {
        body.classList.add('no-scroll');
      } else {
        body.classList.remove('no-scroll');
      }
    }
  },
  mounted() {
    this.checkScroll();
    window.addEventListener('resize', this.checkScroll);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScroll);
  }
});
</script>

<style>
.no-scroll {
  overflow: hidden;
}
</style>
