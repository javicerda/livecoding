<template>
<div class="container">
  <b-card-group deck>
    <b-card v-for="c in courses" :key="c.id" no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="c.data.imagen" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="c.data.name">
            <b-card-text>
              {{ c.data.description }}
            </b-card-text>
            <b-button variant="danger" size="sm">Ver Curso</b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-card-group>
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
