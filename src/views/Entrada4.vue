<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <v-card flat color="transparent">
              <v-img
                src="../../images/marbellallantas.png"
                :aspect-ratio="16 / 9"
                gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                style="border-radius: 16px"
              ></v-img>

              <v-card-text>
                <div>
                  <v-btn color="#d2aa6d">CUARTA ENTRADA</v-btn>
                </div>

                <div class="text-h4 font-weight-bold primary--text pt-4">
                  <h4>Reparación llantas del cohete</h4>
                </div>

                <div class="text-h5 font-weight-bold primary--text pt-4">
                  <h4>Cuarta entrada del diario de abordo. </h4>
                </div>

                <div class="text-body-1 py-4">
                  En uno de los últimos días de verano ambos pudimos cuadrar una fecha para seguir poniendo apunto a nuestro Cohete. Acordamos vernos en el garaje de Roberto a eso de las 5:30. No sabíamos que se nos venían cuatro largas horas de meticuloso tratado de las llantas.
                </div>
                <div class="text-body-1 py-4">
                  Primero, empezamos por limpiar la gran cantidad de basura que había acumulada en las ruedas después de tantos años de suciedad: frotamos, frotamos y frotamos. Utilizamos también antioxidantes para librarnos de ese dichoso color rojizo que tan mala impresión da, así como líquido limpia-chimeneas (hay que apañarse con lo que se tiene).
                </div>
                <div class="d-flex align-center justify-space-between">
                </div>
                <div class="my-4">
                  <v-row>
                    <v-col cols="6">
                      <v-card>
                        <v-img
                          src="../../images/llantas1.png"
                          :aspect-ratio="16 / 9"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        ></v-img>
                      </v-card>
                    </v-col>

                    <v-col cols="6">
                      <v-card>
                        <v-img
                          src="../../images/llantas2.png"
                          :aspect-ratio="16 / 9"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        ></v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
                <div class="text-body-1 py-4">
                 Después de sucesivas capas de agua y jabón, ambos concluimos que podíamos empezar el proceso de lijado. Bajo el ardiente sol del mes de septiembre nos peleamos con las tediosas llantas durante algo más de una hora (con la gran ayuda del papel lija), hasta que finalmente llegó la hora de pintar.
                </div>
                <div class="my-4">
                  <v-row>
                    <v-col cols="6">
                      <v-card>
                        <v-img
                          src="../../images/llantas3.png"
                          :aspect-ratio="16 / 9"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        ></v-img>
                      </v-card>
                    </v-col>

                    <v-col cols="6">
                      <v-card>
                        <v-img
                          src="../../images/llantas4.png"
                          :aspect-ratio="16 / 9"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        ></v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>

                  <div class="my-4">
                    <v-card>
                      <v-img
                        src="../../images/llantas5.png"
                        :aspect-ratio="18 / 12"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                      ></v-img>
                    </v-card>
                </div>

                <div class="text-body-1 py-4">
                  Decidimos utilizar el color blanco por su simpleza y estética. Tras tapar las zonas sensibles con esparadrapos (o en su defecto, con una baraja española), espolvoreamos la pintura en sucesivas capas mediante una técnica que recién habíamos aprendido en Internet. Aquí tenéis el resultado final:                
                </div>

                <div class="my-4">
                    <v-card>
                      <v-img
                        src="../../images/llantas6.png"
                        :aspect-ratio="18 / 12"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                      ></v-img>
                    </v-card>
                </div>

                <div class="text-body-1 py-4">
                Si bien no es perfecto, estamos muy contentos con el resultado, creemos que las llantas es una de las piezas clave para la estética de un coche, y consideramos todo un acierto el color blanco.               
                </div>

                <div class="text-body-1 py-4">
                En resumen, con materiales que teníamos por casa y un bote de spray, hemos recuperado aquellas llantas de los años 80 que tantas carreteras y caminos habían recorrido durante tantos años.             
                </div>
                <v-divider class="my-8"></v-divider>

                <div class="my-8">
                  <div class="d-flex align-center">
                    <v-avatar color="#d2aa6d" size="128">
                      <v-icon dark size="100">mdi-feather</v-icon>
                    </v-avatar>

                    <div class="pl-4">
                      <div class="text-h5 primary--text font-weight-bold">
                        Escrito por
                        <span class="accent--text">Roberto Muñoz</span>
                      </div>

                      <div class="text-subtitle-1 my-2">
                        Participante de uniraid y desarrollador de la web.
                      </div>

                      <div class="text-subtitle-1">
                        Conectémonos >
                        <v-btn icon>
                          <v-icon>mdi-twitter</v-icon>
                        </v-btn>

                        <v-btn icon>
                          <v-icon>mdi-instagram</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </div>
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
