<template>
    <div class="container">
        <b-card bg-variant="light">
            <b-form-group>

                <label for="input-small" :value="currentCourse.data.name">Nombre</label>
                <b-form-input id="input-small" size="sm" placeholder="Nombre del curso"
                @input="updateName"></b-form-input>

                <label for="input-small" :value="currentCourse.data.description">Descripción</label>
                <b-form-input id="input-small" size="sm" placeholder="Describe el curso"
                @input="updateDescription"></b-form-input>

                <label for="input-small" :value="currentCourse.data.imagen">Imagen</label>
                <b-form-input id="input-small" size="sm" placeholder="Agrega un link a una imagen referente al curso"
                @input="updateImagen"></b-form-input>

                <b-button class="my-5" variant="danger" @click="submitForm">Crear</b-button>

            </b-form-group>
        </b-card>
    </div>
</template><script>
import { mapState, mapActions } from 'vuex'
export default {
    methods:{
        ...mapActions([ 'updateName', 'updateDescription', 'updateImagen', 'postCourse', 'updateCourse']),
        submitForm(){
          if(this.currentCourse.id) {
            // si tiene id, llama a la función que actualiza los datos
            this.updateCourse(this.currentCourse.id)
          } else {
            this.postCourse()
          }
       
        }
    },
    computed:{
        ...mapState([ 'currentCourse' ])
    },
}
</script>