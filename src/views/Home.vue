<template>
  <div>
    <div>
      <v-card to="detail">
        <v-img
          src="https://live.staticflickr.com/65535/49723888066_54785097cf_k.jpg"
          gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
          :aspect-ratio="16 / 9"
          height="500px"
          dark
        >
          <v-card-text class="fill-height d-flex align-end">
            <v-row class="flex-column">
              <v-col>
                <v-btn color="#d2aa6d" to="category">Travel</v-btn>
              </v-col>
              <v-col cols="12" md="10" lg="8" xl="7">
                <h2 class="text-h3 py-3" style="line-height: 1.2">
                  Proyecto Raid4Aid
                </h2>
              </v-col>
              <v-col class="d-flex align-center">
                <v-avatar class="elevation-4" color="#d2aa6d">
                  <v-icon large>mdi-feather</v-icon>
                </v-avatar>

                <div class="text-h6 pl-2">Roberto Muñoz - 6/10/2021</div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-img>
      </v-card>
    </div>

    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div class="pt-16">
            <h2 class="text-h4 font-weight-bold pb-4">Sigue el proyecto:</h2>

            <v-row>
              <v-col cols="12" md="6" lg="4">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="50"
                  close-delay="50"
                >
                  <div>
                    <v-card
                      flat
                      :color="hover ? 'white' : 'transparent'"
                      :elevation="hover ? 12 : 0"
                      hover
                      to="Entrada1"
                    >
                      <v-img
                        src="../../images/Patrocinadores.png"
                        :aspect-ratio="16 / 9"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        height="200px"
                        class="elevation-2"
                        style="border-radius: 16px"
                      >
                        <v-card-text>
                          <v-btn color="#d2aa6d" to="category">DIARIO</v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <div class="text-h5 font-weight-bold primary--text">
                          Necesitamos ayuda
                        </div>

                        <div class="text-body-1 py-4">
                          Primera entrada  de abordo.
                          Una de las claves de UNIRAID (y de la mayoría de raids) es que son financiados por empresas ...
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="#d2aa6d" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2">Roberto Muñoz · 9 Jan 2022</div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="50"
                  close-delay="50"
                >
                  <div>
                    <v-card
                      flat
                      :color="hover ? 'white' : 'transparent'"
                      :elevation="hover ? 12 : 0"
                      hover
                      to="/entrada2"
                    >
                      <v-img
                        src="../../images/cohete.png"
                        :aspect-ratio="16 / 9"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        height="200px"
                        class="elevation-2"
                        style="border-radius: 16px"
                      >
                        <v-card-text>
                          <v-btn color="#d2aa6d" to="category">DIARIO</v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <div class="text-h5 font-weight-bold primary--text">
                          Tenemos "El Cohete"
                        </div>

                        <div class="text-body-1 py-4">
                          Segunda entrada . Una vez asegurados dos patrocinadores, nos hemos puesto en marcha para encontrar un coche apropiado para el proyecto...
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="#d2aa6d" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2">Roberto Muñoz </div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="50"
                  close-delay="50"
                >
                  <div>
                    <v-card
                      flat
                      :color="hover ? 'white' : 'transparent'"
                      :elevation="hover ? 12 : 0"
                      hover
                      to="/entrada3"
                    >
                      <v-img
                        src="../../images/limpieza.png"
                        :aspect-ratio="16 / 9"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        height="200px"
                        class="elevation-2"
                        style="border-radius: 16px"
                      >
                        <v-card-text>
                          <v-btn color="#d2aa6d" to="category">DIARIO</v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <div class="text-h5 font-weight-bold primary--text">
                          Limpieza del cohete
                        </div>

                        <div class="text-body-1 py-4">
                          Tercera entrada . Una de las primeras cosas que teníamos que hacer es limpiar el cohete, ya que estaba bastante sucio y solo ir montado ya te dejaba mancha...
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="#d2aa6d" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2">Roberto Muñoz </div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>
            </v-row>
            
          </div>

          <div class="pt-16">
            <h2 class="text-h4 font-weight-bold pb-4">Videos y fotos: </h2>

            <v-row>
              <v-col cols="6" lg="4">
                <v-card flat dark to="/fotos">
                  <v-img
                    src="../../images/banner1.jpeg"
                    :aspect-ratio="16 / 9"
                    gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                    height="600px"
                    class="elevation-2 fill-height"
                  >
                    <div
                      class="d-flex flex-column justify-space-between fill-height"
                    >
                      <v-card-text>
                        <v-btn color="#d2aa6d">UNIRAID fotos</v-btn>
                      </v-card-text>

                      <v-card-text>
                        <div
                          class="text-h5 py-3 font-weight-bold"
                          style="line-height: 1.2"
                        >
                          Mira todas las fotos de UNIRAID en flickr
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="#d2aa6d" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2">Roberto Muñoz · 9 Jan 2022</div>
                        </div>
                      </v-card-text>
                    </div>
                  </v-img>
                </v-card>
              </v-col>
              <v-col cols="6" lg="4">
                <v-card flat dark to="/fotosraid">
                  <v-img
                    src="../../images/fiesta.jpg"
                    :aspect-ratio="16 / 9"
                    gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                    height="600px"
                    class="elevation-2 fill-height"
                  >
                    <div
                      class="d-flex flex-column justify-space-between fill-height"
                    >
                      <v-card-text>
                        <v-btn color="#d2aa6d">Fotos raid4aid</v-btn>
                      </v-card-text>

                      <v-card-text>
                        <div
                          class="text-h5 py-3 font-weight-bold"
                          style="line-height: 1.2"
                        >
                          Nuestras fotos de Raid4Aid
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="#d2aa6d" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2">Roberto Muñoz · 9 Jan 2022</div>
                        </div>
                      </v-card-text>
                    </div>
                  </v-img>
                </v-card>
              </v-col>
              <v-col cols="6" lg="4">
                <v-card flat dark to="/videos">
                  <v-img
                    src="../../images/videos.jpeg"
                    :aspect-ratio="16 / 9"
                    gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                    height="600px"
                    class="elevation-2 fill-height"
                  >
                    <div
                      class="d-flex flex-column justify-space-between fill-height"
                    >
                      <v-card-text>
                        <v-btn color="#d2aa6d">Videos</v-btn>
                      </v-card-text>

                      <v-card-text>
                        <div
                          class="text-h5 py-3 font-weight-bold"
                          style="line-height: 1.2"
                        >
                          Mira los videos que acabamos de subir
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="#d2aa6d" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2">Roberto Muñoz · 9 Jan 2022</div>
                        </div>
                      </v-card-text>
                    </div>
                  </v-img>
                </v-card>
              </v-col>
              
            </v-row>
          </div>

        </div>
      </v-col>

      <v-col>
        <div class="pt-16">
          <siderbar />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
  },
};
</script>
