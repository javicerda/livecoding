<template>
    <div>
        <hero-section/>
        <h1 class="my-5">Ingreso</h1>
        <login-card/>
    </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
import LoginCard from '../components/LoginCard.vue'


export default {
  components:{
    HeroSection,
    LoginCard,
  }
}
</script>