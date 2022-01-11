<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <v-card flat color="transparent">
              <v-img
                src="../../images/Patrocinadores.png"
                :aspect-ratio="16 / 9"
                gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                style="border-radius: 16px"
              ></v-img>

              <v-card-text>
                <div>
                  <v-btn color="#d2aa6d">Diario de abordo</v-btn>
                </div>

                <div class="text-h5 font-weight-bold primary--text pt-4">
                  <h4>Primera entrada  de abordo</h4>
                </div>
                <div class="text-body-1 py-4">
                  Una de las claves de <b>UNIRAID</b> (y de la mayoría de raids) es que son financiados por <b>empresas patrocinadoras</b>. Al ser UNIRAID un proyecto ideado para universitarios, toma más peso esta forma de financiación. Es por ello que nos pusimos a buscar, a llamar, a enviar correos... La verdad que era la primera vez que hacíamos algo similar (y muy probablemente no lo hicimos de la manera más eficiente) porque al final nuestros patrocinadores han sido los más cercanos y evidentes (y los que teníamos delante de la cara pero no veíamos). 
                </div>
                <div class="d-flex align-center justify-space-between">
                </div>

                <div class="text-h5 font-weight-bold primary--text pt-4">
                  <h4>Nuestros patrocinadores</h4>
                </div>
                <div class="text-h5 font-weight-bold primary--text pt-4">
                  <h5>Universidad politécnica de Madrid</h5>
                </div>

                <div class="py-4">
                  <v-alert
                    class="font-italic text-h6 text-center"
                    border="left"
                    colored-border
                    color="#d2aa6d"
                  >
                    La Universidad Politécnica de Madrid (UPM) es una universidad pública con sede en la Ciudad Universitaria de Madrid (España) y con instalaciones en varias ubicaciones de Madrid (Ciudad Universitaria, Campus Sur en Vallecas, entre otras) y Boadilla del Monte.
                  </v-alert>
                </div>
                
                <div class="text-h5 font-weight-bold primary--text pt-4">
                  <h5>GOI</h5>
                </div>

                <div class="py-4">
                  <v-alert
                    class="font-italic text-h6 text-center"
                    border="left"
                    colored-border
                    color="#d2aa6d"
                  >
                    GOI es el primer operador logístico multi-servicio con posibilidad de brindar tanto transporte de mercancías por carretera por toda Europa, como de la entrega de Última Milla de paquetería, incluso si se trata de voluminoso.
                  </v-alert>
                </div>

                <div class="my-4">
                  <v-row>
                    <v-col cols="6">
                      <v-card>
                        <v-img
                          src="../../images/upm.jpeg"
                          :aspect-ratio="16 / 9"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        ></v-img>
                      </v-card>
                    </v-col>

                    <v-col cols="6">
                      <v-card>
                        <v-img
                          src="https://live.staticflickr.com/65535/49723349948_6f114a1782_k.jpg"
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
                        src="../../images/goi.jpeg"
                        :aspect-ratio="18 / 12"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                      ></v-img>
                    </v-card>
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
