<template>
  <div>
    <b-modal hide-footer id="create-course" 
    :title=" !!currentCourse.id ? 'Actualizar' : 'Crear nuevo curso' ">
      <p class="small text-muted">Ingresa los datos para crear un nuevo curso</p>
        <b-form-group>
              <label class="mt-3" for="input-small" :value="currentCourse.data.name">Nombre</label>
              <b-form-input id="input-small" size="sm" placeholder="Nombre del curso"
              @input="updateName"></b-form-input>

              <label class="mt-3" for="input-small" :value="currentCourse.data.description">Descripción</label>
              <b-form-input id="input-small" size="sm" placeholder="Describe el curso"
              @input="updateDescription"></b-form-input>

              <label class="mt-3" for="input-small" :value="currentCourse.data.imagen">Imagen</label>
              <b-form-input id="input-small" size="sm" placeholder="Agrega un link a una imagen referente al curso"
              @input="updateImagen"></b-form-input>

              <b-button class="my-5" variant="danger" @click="submitForm">{{ !!currentCourse.id ? 'Actualizar' : 'Crear' }}</b-button>

        </b-form-group>
    </b-modal>
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
    ...mapState(['currentCourse' ])
  },
}
</script>