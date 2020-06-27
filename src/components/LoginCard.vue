<template>
<div class="container">
<b-card>
  <b-form inline class="mx-auto">
    <label class="sr-only" for="inline-form-input-name">Mail</label>
    <b-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Ingresa tu correo"
      v-model="user"
    ></b-input>

    <label class="sr-only" for="inline-form-input-username">Contraseña</label>
    <b-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Password"
      v-model="password"
    ></b-input>

    <b-button variant="primary" @click="login">ingresar</b-button>
  </b-form>
</b-card>
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