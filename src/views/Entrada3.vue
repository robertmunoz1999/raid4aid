<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <v-card flat color="transparent">
              <v-img
                src="../../images/lavado4.png"
                :aspect-ratio="16 / 9"
                gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                style="border-radius: 16px"
              ></v-img>

              <v-card-text>
                <div>
                  <v-btn color="#d2aa6d">El proyecto</v-btn>
                </div>

                <div class="text-h4 font-weight-bold primary--text pt-4">
                  <h4>Tercera entrada del diario.</h4>
                </div>

                <div class="text-body-1 py-4">
                  Una de las primeras cosas que teníamos que hacer es limpiar el cohete, ya que estaba bastante sucio y solo ir montado ya te dejaba mancha,
                </div>
                 <div class="text-body-1 py-4">
                  Lo primero que hicimos fue retirar las planchas de plástico del maletero, que estaban rotas, y aspirar todo el polvo, arena y piedras que había                
                </div>
                <div class="d-flex align-center justify-space-between">
                </div>

                <div class="my-4">
                    <v-card>
                      <v-img
                        src="../../images/maletero1.png"
                        :aspect-ratio="18 / 12"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                      ></v-img>
                    </v-card>
                </div>
                <div class="my-4">
                    <v-card>
                      <v-img
                        src="../../images/maletero2.png"
                        :aspect-ratio="18 / 12"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                      ></v-img>
                    </v-card>
                </div>
                <div class="my-4">
                    <v-card>
                      <v-img
                        src="../../images/maletero3.png"
                        :aspect-ratio="18 / 12"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                      ></v-img>
                    </v-card>
                </div>
                <div class="text-body-1 py-4">
                  Después le dimos un lavado exterior para quitar algunas manchas que tenía:
                </div>

                <div class="my-4">
                  <v-row>
                    <v-col cols="6">
                      <v-card>
                        <v-img
                          src="../../images/lavado1.png"
                          :aspect-ratio="16 / 9"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        ></v-img>
                      </v-card>
                    </v-col>

                    <v-col cols="6">
                      <v-card>
                        <v-img
                          src="../../images/lavado2.png"
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
                        src="../../images/lavado3.png"
                        :aspect-ratio="18 / 12"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                      ></v-img>
                    </v-card>
                </div>
                <div class="my-4">
                    <v-card>
                      <v-img
                        src="../../images/lavado4.png"
                        :aspect-ratio="18 / 12"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                      ></v-img>
                    </v-card>
                </div>


                <div class="text-body-1 py-4">
                  Y finalmente nos pusimos con el interior de la parte delantera, con ayuda de Juan Carlos, que se dedica a limpiar tapicerías:
                </div>

                <div class="my-4">
                    <v-card>
                      <v-img
                        src="../../images/aspirado1.png"
                        :aspect-ratio="18 / 12"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                      ></v-img>
                    </v-card>
                </div>
                <div class="my-4">
                    <v-card>
                      <v-img
                        src="../../images/aspirado2.png"
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
                          src="../../images/aspirado3.png"
                          :aspect-ratio="16 / 9"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        ></v-img>
                      </v-card>
                    </v-col>

                    <v-col cols="6">
                      <v-card>
                        <v-img
                          src="../../images/aspirado4.png"
                          :aspect-ratio="16 / 9"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        ></v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>

                <div class="text-body-1 py-4">
                  Una vez limpio, colocamos unas alfombrillas nuevas.
                </div>

                <div class="text-body-1 py-4">
                 El coche quedó muy limpio, aunque por los años que tiene (y que las fotos no hacen justicia), no lo parece tanto, pero ahora está mucho mejor que como estaba.
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
