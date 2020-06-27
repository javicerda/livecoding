<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">LiveCoding</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
     
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Busca tu curso aquí!"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar!</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Ingresar</em>
          </template>
          <b-dropdown-item href="#">Editar cursos</b-dropdown-item>
          <b-dropdown-item href="#" @click="logout">Cerrar sesión</b-dropdown-item>
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