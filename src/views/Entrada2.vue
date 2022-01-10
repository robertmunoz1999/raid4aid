<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <v-card flat color="transparent">
              <v-img
                src="../../images/banner.png"
                :aspect-ratio="16 / 9"
                gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                style="border-radius: 16px"
              ></v-img>

              <v-card-text>
                <div>
                  <v-btn color="#d2aa6d">El proyecto</v-btn>
                </div>

                <div class="text-h4 font-weight-bold primary--text pt-4">
                  <h4>Tenemos "El Cohete"</h4>
                </div>

                <div class="text-h5 font-weight-bold primary--text pt-4">
                  <h4>Segunda entrada del diario.</h4>
                </div>

                <div class="text-body-1 py-4">
                  Una vez asegurados dos patrocinadores, nos hemos puesto en marcha para encontrar un coche apropiado para el proyecto.
                  ¿Citroen C15? ¿Seat marbella? ¿Peugeot 205? ¿Renault 4? Las opciones eran muchísimas (la mayoría de ellas muy buenas), pero la mejor y la que más nos gustaba era el <b>Seat Marbella</b>, un coche icónico de las décadas los 80 y 90, así como uno de los modelos más valorados en el  mundillo.
                  Y sí, encontramos una unidad que nos gustó:
                </div>
                <div class="my-4">
                    <v-card>
                      <v-img
                        src="../../images/marbella1.png"
                        :aspect-ratio="18 / 12"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                      ></v-img>
                    </v-card>
                </div>

                <div class="my-4">
                  <v-row>
                    <v-col cols="6">
                      <v-card>
                        <v-img
                          src="../../images/marbella2.png"
                          :aspect-ratio="16 / 9"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        ></v-img>
                      </v-card>
                    </v-col>

                    <v-col cols="6">
                      <v-card>
                        <v-img
                          src="../../images/marbella3.png"
                          :aspect-ratio="16 / 9"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        ></v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
                <div class="d-flex align-center justify-space-between">
                </div>
                <div class="text-body-1 py-4">
                  Este es un Seat Marbella de 1989 de 40 caballos, un coche con años y con mucho trabajo por delante.
                </div>

                <div class="text-h5 font-weight-bold primary--text pt-4">
                  <h4>¿Por qué "el cohete"?</h4>
                </div>

                <div class="text-body-1 py-4">
                  Es este un un Seat Marbella de 1989 de 40 caballos, un coche con años y con mucho trabajo por delante.
                  En GOI (uno de nuestros principales sponsors) se suele hacer referencia a la empresa como "El Cohete", pero nunca sabíamos donde estaba ese cohete. Pues aquí está, ya ha llegado, lo tenemos en forma de SEAT Marbella.
                </div>
                <v-divider class="my-8"></v-divider>

              </v-card-text>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Category",
  components: {
    
  }
};
</script>
