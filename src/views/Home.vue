<template>
  <div class="home">
    <hero-section/>
    <h1 class="my-5">Cursos</h1>
    <course-card/>
  </div>
</template>

<script>
// @ is an alias to /src
import CourseCard from '@/components/CourseCard.vue'
import HeroSection from '@/components/HeroSection.vue'

export default {
  name: 'Home',
  components: {
    CourseCard,
    HeroSection
  }
}
</script>
