<template>
<div class="container">
<b-card>
  <b-form inline class="py-3">
    <label class="sr-only" for="inline-form-input-name">Mail</label>
    <b-input
      id="inline-form-input-name"
      placeholder="Ingresa tu correo"
      v-model="user"
      class="ml-5"
    ></b-input>

    <label class="sr-only" for="inline-form-input-username">Contraseña</label>
    <b-input
      id="inline-form-input-name"
      placeholder="Password"
      type="password"
      v-model="password"
      class="ml-5"
    ></b-input>

    <b-form-checkbox class="ml-5">Recordar mi usuario</b-form-checkbox>

    <b-button class="ml-5" variant="danger" @click="login">ingresar</b-button>
  </b-form>
</b-card>
<b-button class="mt-5" variant="dark" href="/">Volver al Home</b-button>
</div>
</template>

<script>import Firebase from 'firebase'
export default {
  name: 'App',
  data: () => ({
    user:'',
    password: '',
  }),
  methods:{
    login(){
      Firebase.auth().signInWithEmailAndPassword(this.user, this.password)
      .then(()=>{
        this.$router.push('/')
        alert (`Bienvenido ${this.user}`)
      }) .catch(() =>{
        alert ('NOOOOOO')
      })
    }
  }
};
</script>