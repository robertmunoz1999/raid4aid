<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <div>
              <h2 class="text-h4 font-weight-bold">Diario</h2>

              <h4 class="text-h6">El dia a dia del proyecto</h4>
            </div>

            <v-divider class="my-4"></v-divider>

            <v-row>
              <v-col cols="12" md="6" lg="4" >
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
                      to="/Entrada1"
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
                          <v-btn color="#d2aa6d">Primera entrada </v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <div class="text-h5 font-weight-bold primary--text">
                          Necesitamos ayuda
                        </div>

                        <div class="text-body-1 py-4">
                          Una de las claves de UNIRAID (y de la mayoría de raids) es que son financiados por empresas patrocinadoras. Al ser UNIRAID un proyecto ideado...
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
              <v-col cols="12" md="6" lg="4" >
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
                      to="/Entrada2"
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
                          <v-btn color="#d2aa6d">segunda entrada </v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <div class="text-h5 font-weight-bold primary--text">
                          Tenemos "El Cohete"
                        </div>

                        <div class="text-body-1 py-4">
                          Una vez asegurados dos patrocinadores, nos hemos puesto en marcha para encontrar un coche apropiado para el proyecto. ¿Citroen C15 ? ...
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
              <v-col cols="12" md="6" lg="4" >
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
                      to="/Entrada3"
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
                          <v-btn color="#d2aa6d">tercera entrada </v-btn>
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
            <v-row>
              <v-col cols="12" md="6" lg="4" >
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
                      to="/Entrada4"
                    >
                      <v-img
                        src="../../images/llantas.png"
                        :aspect-ratio="16 / 9"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        height="200px"
                        class="elevation-2"
                        style="border-radius: 16px"
                      >
                        <v-card-text>
                          <v-btn color="#d2aa6d">cuarta entrada </v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <div class="text-h5 font-weight-bold primary--text">
                          Reparación llantas del cohete
                        </div>

                        <div class="text-body-1 py-4">
                          En uno de los últimos días de verano ambos pudimos cuadrar una fecha para seguir poniendo apunto a nuestro Cohete. Acordamos vernos en el garaje de Roberto a eso de las 5:30...
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
              <v-col cols="12" md="6" lg="4" >
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
                      to="/Entrada5"
                    >
                      <v-img
                        src="../../images/vinilado.png"
                        :aspect-ratio="16 / 9"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        height="200px"
                        class="elevation-2"
                        style="border-radius: 16px"
                      >
                        <v-card-text>
                          <v-btn color="#d2aa6d">quinta entrada </v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <div class="text-h5 font-weight-bold primary--text">
                          Primeros diseños del vinilado
                        </div>

                        <div class="text-body-1 py-4">
                          Nuestros patrocinadores quieren ver movimiento, si, ya saben que estamos con el coche, que lo estamos preparando, ¿Pero lo guapo guapo qué? ¿Dónde están los vinilos?...
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
              <v-col cols="12" md="6" lg="4" >
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
                      to="/Entrada6"
                    >
                      <v-img
                        src="../../images/catali.png"
                        :aspect-ratio="16 / 9"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        height="200px"
                        class="elevation-2"
                        style="border-radius: 16px"
                      >
                        <v-card-text>
                          <v-btn color="#d2aa6d">sexta entrada </v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <div class="text-h5 font-weight-bold primary--text">
                          Catalí                        
                        </div>
                        <div class="text-body-1 py-4">
                          Una de las claves para que el raid y el reparto de material solidario salga bien, es tener un coche que resista el trote que se le va a dar, que no es poco...
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
        </div>
      </v-col>

      <v-col>
        <div>
          <siderbar />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Category",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
  },
};
</script>
