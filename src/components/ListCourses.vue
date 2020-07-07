<template>
  <div class="container"> 
      <h1 class="my-2">Lista de cursos</h1>
        <b-table-simple class="mt-3">
          <template>
            <thead>
                <tr>
                <th class="text-left">Nombre</th>
                <th class="text-left">Descripción</th>
                <th class="text-left">Imagen</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="c in courses" :key="c.id">
                <td>{{ c.data.name }}</td>
                <td>{{ c.data.description}}</td>
                <td><img :src="c.data.imagen"></td>
                <td> 
                <b-button @click="editCourse(c.id)" variant="info"
                size="sm"><b-icon icon="pen"></b-icon></b-button>
                </td>
                <td> 
                <b-button @click="removeCourse(c.id)" variant="danger"
                size="sm"><b-icon icon="trash"></b-icon></b-button>                    
                </td>
                </tr>
            </tbody>
          </template>
        </b-table-simple>              
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions([ 'setCourses', 'deleteCourse', 'setCurrentCourse', 'displayCourseForm']),
        removeCourse(id){
            let confirmation = confirm('¿Estás seguro que deseas eliminar este Curso?')
            if (confirmation) {
                this.deleteCourse(id)
            }
        },
        editCourse(id){
            this.displayCourseForm()
            this.setCurrentCourse(id)
        
        }
    },
    computed:{
        ...mapState([ 'courses' ])
    },
    created() {
        this.setCourses()
        
    }
    //acción que me debuelva la lista ordenada.
}
</script>

<style scoped>
img{
    height: 9vh;
}
</style>