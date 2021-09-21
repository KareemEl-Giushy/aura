<template>
  <v-content class="ma-0">
    <Pricing :data="allPackages"/>
      <v-container fluid class="pa-0" v-if="loader">
        <v-row justify="center" align="center" class="py-3" :class="this.$vuetify.theme.dark == true?'black':''">
          <v-col md="12" lg="10" xs="12" class="pt-3 card-top-margin"  >
            <v-container fluid class="">
                <v-row >
                    <v-col md="2" lg="2" sm="3" cols="6" v-for="i in 6" :key="i">
                          <v-sheet
                              :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                              class=""
                          >
                              <v-skeleton-loader
                              class="mx-auto"
                              max-width="300"
                              type="card"
                              ></v-skeleton-loader>
                          </v-sheet>
                      </v-col>
                </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid class="pa-0" v-if="!loader && notFound && allPackages.length <=0" >
        <v-row justify="center" align="center" class="py-3" :class="this.$vuetify.theme.dark == true?'black':''">
          <v-col md="12" lg="12" sm="12" cols="12" class="text-center">
          <v-img
            :src="require('@/assets/img/svg/DataNotFound.svg')"
            :lazy-src="require('@/assets/img/svg/DataNotFound.svg')"
            width="15%"
            style="border-radius:8px;margin-left:auto;margin-right:auto"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <h2 class="google-font">Packcages Not Found</h2>
        </v-col>
        </v-row>
      </v-container>
  </v-content>
</template>

<script>
import service from '@/services/appservices'

export default {
    name: 'Packages',
    components: {
      Pricing: () => import('../components/packages/Pricing.vue'),
    },
    data() {
      return {
        notFound: false,
        loader: true,
        ErrorMsg: '',
        allPackages: [],
      }
    },
    mounted() {
      this.getAllPackages();
    },
    methods: {
      getAllPackages () {
        service.getPackages().then(res => {
          if(res.success == true) {
            this.allPackages = res.data;
            this.notFound = false;
            this.loader = false;
          }else {
            this.notFound = true;
            this.loader = false;
          }
        }).catch(e => {
          this.loader = false
          this.notFound = true
          this.ErrorMsg = e
        });
      },
    }
}
</script>


<style>

</style>