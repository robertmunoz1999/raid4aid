<template>
	<div id="app">
        <div class="text-h5 font-weight-bold primary--text pt-4">
            <h3>Visita la web de UNIRAID: https://www.uniraid.org/</h3>
        </div>
        <div class="py-4">
                  <v-alert
                    class="font-italic text-h6 text-center"
                    border="left"
                    colored-border
                    color="#d2aa6d"
                  >
                    UNIRAID no es un rally ni una carrera de velocidad, UNIRAID es un viaje-aventura en el que los participantes deben completar 6 etapas navegando con un roadbook, y sorteando todo tipo de obstáculos, desafíos y pruebas, con el objetivo de cruzar Marruecos de norte a sur y entregar 40kg de material solidario en las aldeas del desierto.
                  </v-alert>
                </div>
        <v-row justify="space-between">
            <v-col md="5">
            <youtube fitParent=True video-id="fBWlu1XV7Pg" />
            </v-col>
            <v-col md="5">
             <youtube fitParent=True video-id="ofasOEdBDM0" />
            </v-col>
            <v-col md="5">
             <youtube fitParent=True video-id="zaleTFPwrJc" />
            </v-col>
            <v-col md="5">
              <youtube fitParent=True video-id="ackrmjyI-HU" />
            </v-col>
        </v-row> 
	</div>
</template>

<script>
	export default {
    name: 'app'
  }
</script>