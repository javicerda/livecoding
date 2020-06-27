<template>
    <div>
         <h1 class="my-5">Crear nuevos cursos</h1>
         <create-form/>
         <list-courses/>
    </div>
</template>

<script>
import CreateForm from '../components/CreateForm.vue'
import ListCourses from '../components/ListCourses.vue'

export default {
  components:{
    CreateForm,
    ListCourses
  }
}
</script>