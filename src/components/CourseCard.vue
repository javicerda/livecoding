<template>
  <div class="container">
    <b-row no-gutters>
      <b-col lg="6" md="12" v-for="c in courses" :key="c.id">
        <b-card no-body columns style="max-width: 540px;">
            <b-row no-gutters>
              <b-col sm="12" md="6">
                  <b-card-img :src="c.data.imagen" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col sm="12" md="6">
                <b-card-body :title="c.data.name">
                  <b-card-text>
                    {{ c.data.description }}
                  </b-card-text>
                    <b-button variant="danger" size="sm">Ver Curso</b-button>
                    <b-card-text class="small text-muted mt-3">No necesitas conocimientos previos</b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
      </b-col>    
    </b-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
   methods: {
        ...mapActions([ 'setCourses' ])
  },
  computed:{
        ...mapState([ 'courses' ])
    },
  created() {
        this.setCourses()
        
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
