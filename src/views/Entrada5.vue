<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <v-card flat color="transparent">
              <v-img
                src="../../images/vinilado.png"
                :aspect-ratio="16 / 9"
                gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                style="border-radius: 16px"
              ></v-img>

              <v-card-text>
                <div>
                  <v-btn color="#d2aa6d">quinta entrada</v-btn>
                </div>

                <div class="text-h4 font-weight-bold primary--text pt-4">
                  <h4>Primeros diseños del vinilado</h4>
                </div>

                <div class="text-h5 font-weight-bold primary--text pt-4">
                  <h4>Quinta entrada del diario.</h4>
                </div>

                <div class="text-body-1 py-4">
                  Nuestros patrocinadores quieren ver movimiento, si, ya saben que estamos con el coche, que lo estamos preparando, ¿Pero lo guapo guapo qué? ¿Dónde están los vinilos?
                </div>
                <div class="text-body-1 py-4">
                  Vinilar un coche es una tarea bastante complicada, sobretodo si el estampado no es uniforme, es decir, si tiene un diseño concreto, y no es un color plano o una cenefa.
                </div>
                
                <div class="text-body-1 py-4">
                  Nosotros tenemos que contar con 3 cosas:
                  <ol>
                    <li>Debe ser lo más barato posible</li>
                    <li>Debemos poderlo colocar nosotros </li>
                    <li>Debe ser muuy chulo</li>
                  </ol>
                </div>

                <div class="text-body-1 py-4">
                  Es por ello que nos pusimos manos a la obra, bueno, en realidad nosotros no, sino Rafael Albaladejo, el director creativo de GOI.
                </div>
              
              <div class="text-body-1 py-4">
                  Hicimos unos primeros bocetos:
                </div>

                  <div class="my-4">
                    <v-card>
                      <v-img
                        src="../../images/vinilo1.png"
                        :aspect-ratio="18 / 12"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                      ></v-img>
                    </v-card>

                <div class="text-body-1 py-4">
                  Si bien estaba muy chulo, había mucho hueco en blanco, no aprovechaba la ventana trasera, y no era muy racing, la verdad que nosotros buscabamos algo un poco más agresivo, más 4x4, más de rally...
                </div>

                <div class="text-body-1 py-4">
                  Yaiza, la CEO de GOI también hizo algunos apuntes y dió algunas ideas a Rafa, así que la segunda versión quedó así:
                 </div>
                </div>
                  <div class="my-4">
                    <v-card>
                      <v-img
                        src="../../images/vinilo2.png"
                        :aspect-ratio="18 / 12"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                      ></v-img>
                    </v-card>
                </div>

                <div class="text-body-1 py-4">
                  Aún queda por hacer bastante, ya que falta la parte delantera, el capó delantero, el maletero, etc. Pero por ahora vamos poco a poco y seguimos con la mecánica.
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
