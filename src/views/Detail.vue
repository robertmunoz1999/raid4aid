<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <v-card flat color="transparent">
              <v-img
                src="https://live.staticflickr.com/65535/49723888066_54785097cf_k.jpg"
                :aspect-ratio="16 / 9"
                gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                style="border-radius: 16px"
              ></v-img>

              <v-card-text>
                <div>
                  <v-btn color="#d2aa6d">El proyecto</v-btn>
                </div>

                <div class="text-h4 font-weight-bold primary--text pt-4">
                  <h4>¿Qué es el proyecto raid4aid?</h4>
                </div>

                <div class="text-h5 font-weight-bold primary--text pt-4">
                  <h4>¿Quienes somos?</h4>
                </div>

                <div class="text-body-1 py-4">
                  Somos <b>Roberto y Pablo</b>, estudiantes de ingeniería (informática y telecomunicaciones, respectivamente), dos apasionados de la aventura y de los <b>nuevos proyectos</b> que llevar a cabo. Somos además monitores voluntarios de un grupo de tiempo libre llamado <b>CAL</b>. Y  tenemos cierta experiencia en asuntos solidarios: fuimos los coordinadores de <b>CoronavirusMakers</b> de Arganzuela, hemos estado en el Hospital 12 de Octubre acompañando a personas que están solas, etc. Queremos correr un <b>raid</b>, una disciplina del automovilismo que se disputa campo a través. No obstante, no queremos hacer una cualquiera: queremos participar en <a href="http://uniraid.org" >Uniraid 2022</a>, que además de la <b>aventura</b>, también tiene un importante punto de <b>solidaridad</b>.
                </div>
                <div class="d-flex align-center justify-space-between">
                </div>

                <div class="text-h5 font-weight-bold primary--text pt-4">
                  <h4>¿Qué es uniraid?</h4>
                </div>

                <div class="text-body-1 py-4">
                  Uniraid es un proyecto que junta el <b>oluntariado</b> con el mundo del <b>motor</b>. No es, en cambio, una carrera de velocidad: el objetivo de Uniraid es completar un <b>viaje-aventura</b> a lo largo del <b>desierto de Marruecos</b> entregando <b>material solidario</b> a las aldeas de estas aisladas zonas. 
                  Los requisitos para participar son:
                  <ol>
                    <li>Llevar un vehículo con <b>más de 20 años</b> con motor de origen, tracción 4x2.</li>
                    <li>Ser estudiante </li>
                    <li>Llevar <b>40kg o más</b> de material solidario para la beneficencia</li>
                  </ol>
                </div>

                <div class="py-4">
                  <v-alert
                    class="font-italic text-h6 text-center"
                    border="left"
                    colored-border
                    color="#d2aa6d"
                  >
                    UNIRAID es una gran aventura humana y solidaria para estudiantes con espíritu emprendedor de entre 18 y 28 años.
                  </v-alert>
                </div>

                <div class="text-h5 primary--text font-weight-bold">
                  ¿Qué necesitamos?
                  <p class="text-body-1 py-4">
                    El problema que tenemos es que, al ser estudiantes, <b>no tenemos poder adquisitivo</b> para costear todos los gastos.
                    Una de las claves sobre las que se cimenta esta iniciativa son los <b>sponsors o patrocinadores:</b> la propia organización UNIRAID <b>recomienda</b> a los participantes ésta forma de financiación. 
                    Es aquí es donde necesitamos <b>vuestra ayuda.</b> Para nosotros esto marcará la diferencia entre poder realizar el proyecto o no conseguirlo.
                    Las empresas que colaboren podrán poner su granito de arena para mejorar el mundo. Además, este proyecto es una interesante alternativa de <b>publicidad</b> para la empresa (ver <b>"A qué nos comprometemos"</b>).
                  </p>
                </div>

                <div class="my-4">
                  <v-row>
                    <v-col cols="6">
                      <v-card>
                        <v-img
                          src="https://live.staticflickr.com/65535/49724200132_565376954c_k.jpg"
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

                <div class="text-h5 primary--text font-weight-bold">
                  ¿Cómo podéis ayudarnos?
                  <div class="text-subtitle-1 primary--text font-weight-medium mt-5">
                    <ul>
                      <li class="my-2">
                        Financiando los principales gastos: 
                      </li>
                      <ul>
                        <li class="my-3">Cálculo estimado de coste total: 5000€</li>
                        <li class="my-3">Enlace presupuesto completo: <a href="https://docs.google.com/spreadsheets/d/1AXRx5L6P-YcrrbdnsxZhBflEBvIBs6V1wPN-dqNSItk/edit#gid=0">Presupuesto</a></li>
                      </ul>
                      <li class="my-2">
                        Donando material para la beneficencia: ya sea material escolar, juguetes, herramientas, pequeñas placas solares con luz... (quedamos pendientes de lo que nos indique UNIRAID que se necesita con más urgencia)
                      </li>
                      <li class="my-2">
                        Ayudando con la compra de un vehículo o donando uno antiguo (más de 20 años). 
                      </li>
                      <ul>
                        <li class="my-3">Nos sirve cualquier vehículo que tenga ITV y funcione correctamente (y que tenga más de 20 años).</li>
                        <li class="my-3">Actualmente estamos barajando varias alternativas de vehículo entorno a los 500-1000€.</li>
                        <li class="my-3">Modelos de referencia: Citroen C15, Seat Marbella, Fiat Panda, Renault Clio, Ford Fiesta, Peugeot 205, etc.</li>
                        <li class="my-3">Nosotros tenemos mirado varias opciones, pero no podemos comprarlo aún (no tenemos dinero para asumir todos los gastos que supone)</li>
                      </ul>
                      <li class="my-2">
                        Preparando el vehículo, si eres un taller (nosotros podemos hacer modificaciones básicas pero no tenemos el conocimiento ni la capacidad monetaria para hacer algunas otras).
                      </li>
                      <ul>
                        <li class="my-3">Instalación de ruedas aptas para off-road, cubrecarter, baca, etc.</li>
                        <li class="my-3">Donación de repuestos (ruedas...).</li>
                        <li class="my-3">Cualquier otra modificación que sea positiva para el desarrollo del raid</li>
                      </ul>
                    </ul>
                  </div>
                </div>
                <div class="text-h5 primary--text font-weight-bold">
                  ¿A qué nos comprometemos?
                  <p class="text-body-1 py-4">
                    <ul>
                      <li>Colocar en la chapa del coche el logo de la empresa colaboradora (el tamaño y el lugar del mismo dependerá de la cantidad aportada).</li>
                      <li>El sponsor aparecerá en los medios. Algunos medios en los que Uniraid ha salido son: TVE, Teledeporte, Telecinco, Navarra TV, TVM y muchos otros. Todos: <a href="http://www.uniraid.org/wp-content/uploads/CLIPING_UniRaid_2017.pdf">http://www.uniraid.org/wp-content/uploads/CLIPING_UniRaid_2017.pdf</a></li>
                      <li>Zonas de sponsor</li>
                    </ul>
                  </p>
                </div>
                  <div class="my-4">
                    <v-card>
                      <v-img
                        src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F23e1249d-7071-4970-aee5-26594d42668b%2FImagen-1.jpg?table=block&id=180c1d41-da76-45ca-9db5-82b5c5cae5c3&spaceId=01dc4cf4-90e2-4375-ba12-df7ff306144a&width=2000&userId=f47cdf6c-5905-4f4d-a7a4-c085de89249d&cache=v2"
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

                <div>
                  <v-row justify="space-between">
                    <v-col cols="12" md="6" lg="4">
                      <div class="d-flex align-center">
                        <div>
                          <v-icon>mdi-arrow-left</v-icon>
                        </div>

                        <div class="text-h6 primary--text pl-2">
                          <div class="text-subtitle-1">Previous Post</div>Photos of Jeep models that will change
                          your mood
                        </div>
                      </div>
                    </v-col>

                    <v-col cols="12" md="6" lg="4">
                      <div class="d-flex align-center text-right">
                        <div class="text-h6 primary--text pr-2">
                          <div class="text-subtitle-1">Next Post</div>What do I need to know to start learning
                          JavaScript?
                        </div>

                        <div>
                          <v-icon>mdi-arrow-right</v-icon>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
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
