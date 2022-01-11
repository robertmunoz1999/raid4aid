<template>
    <div class="my-4">
        <v-col v-for="i in 21" :key="i">
            <v-card>
                <v-img
                    :src="require(`../../images/raid4aid/raid4aid${i-1}.jpg`)"
                    :aspect-ratio="18 / 12"
                    gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                ></v-img>
            </v-card>
        </v-col>    
    </div>
    
</template>

<script>
export default {
  name: "FotosRaid",
  components: {

  },
};
</script>

<style>

</style>