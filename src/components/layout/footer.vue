<template>
  <div>
    <v-footer color="primary" dark app absolute>
      <v-container>
        <v-row align="start">
          <v-col cols="12" md="3">
            <h4 class="text-h5 font-weight-bold">
              
              Raid4Aid
            </h4>
            <p class="text-body-1">
              El proyecto de raid con un componente solidario llevado a cabo por dos universitarios. 
            </p>
          </v-col>

          <v-col cols="12" md="3">
            <v-list flat color="transparent">
              <v-subheader class="text-h6">Otros</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="(item, i) in heroui"
                  :key="i"
                  :href="item.href"
                  dense
                  target="_black"
                >
                  <v-list-item-content>
                    <v-list-item-title
                      class="text-body-1"
                      v-text="item.text"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <v-img
                src="../../../images/Patrocinadores.png"
                :aspect-ratio="16 / 9"
                gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                style="border-radius: 16px"
              ></v-img>
        </v-row>

        <div class="text-center mt-6">
          Copyright &copy;
          <a
            class="white--text"
            href="https://heroui.net"
            target="_blank"
            rel="noopener noreferrer"
            >HreoUI</a
          >
          {{ new Date().getFullYear() }}. All rights reserved.
        </div>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    heroui: [
      {
        text: "Github",
        href: "https://github.com/robertmunoz1999/raid4aid",
      },
    ],
    shock: [
      {
        text: "Download",
        href: "https://github.com/AGDholo/giraffe",
      },
      {
        text: "Issues",
        href: "https://github.com/AGDholo/giraffe/issues",
      },
      {
        text: "LICENSE",
        href: "https://github.com/AGDholo/giraffe/blob/master/LICENSE",
      },
    ],
  }),
};
</script>
