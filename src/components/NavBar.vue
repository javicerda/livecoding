<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">LiveCoding</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
     
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Ingresar</em>
          </template>
          <b-dropdown-item href="/crear">Editar cursos</b-dropdown-item>
          <b-dropdown-item href="/login" @click="logout">Cerrar sesión</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import Firebase from 'firebase'
export default {
    methods:{
        logout(){
            Firebase.auth().signOut().then(()=> {
                this.$router.push('/login')
            })
        }
    }
}
</script>