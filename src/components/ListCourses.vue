<template>
    <div>
        <h1 class="my-5">Lista de cursos</h1>
            <template>
            <thead>
                <tr>
                <th class="text-left">Nombre</th>
                <th class="text-left">Descripción</th>
                <th class="text-left">Imagen</th>
                <th class="text-left">Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="c in courses" :key="c.id">
                <td>{{ c.data.name }}</td>
                <td>{{ c.data.description }}</td>
                <td>{{ c.data.imagen }}</td>
                <td> 
                <b-button @click="editCourse(c.id)" variant="info" size="sm">Editar</b-button>
                <b-button @click="removeCourse(c.id)" variant="danger" size="sm">Eliminar</b-button>                    
                </td>
                </tr>
            </tbody>
            </template>
   
    </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions([ 'setCourses', 'deleteCourse', 'setCurrentCourse']),
        removeCourse(id){
            let confirmation = confirm('¿Estás seguro que deseas eliminar este Curso?')
            if (confirmation) {
                this.deleteCourse(id)
            }
        },
        editCourse(id){
        this.setCurrentCourse(id)
        //desplegar el formulario con el juguete actual
        
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