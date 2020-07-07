<template>
  <div>
    <b-button class="my-5" variant="danger"  v-b-modal.create-course >Crear nuevo curso</b-button>
    <list-courses/>
    <create-form/>
  </div>
</template>

<script>
import CreateForm from '../components/CreateForm.vue'
import ListCourses from '../components/ListCourses.vue'

export default {
  components:{
    CreateForm,
    ListCourses
  },
}
</script>