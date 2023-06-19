<template>
  <nav class="navbar navbar-expand-lg bg-warning p-2">
    
    <div class="container-fluid">

      <router-link to="/" class="navbar-brand"><i class="bi bi-car-front-fill"></i> ParkScape</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span> 
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" :class="{ active: $route.path === '/' }" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/marcas" :class="{ active: $route.path === '/marcas' }" class="nav-link">Marcas</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/modelos" :class="{ active: $route.path === '/modelos' }" class="nav-link">Modelos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/condutores" :class="{ active: $route.path === '/condutores' }" class="nav-link">Condutores</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/veiculos" :class="{ active: $route.path === '/veiculos' }" class="nav-link">Veiculos</router-link>
          </li>
        </ul>
      </div>
    </div>

  </nav>

  <div class="container" data-bs-theme="dark">
    <router-view/>
  </div>

</template>

<style lang="scss">
  body{
    background-color: rgb(33, 32, 32);
  }

  nav {
    --bs-navbar-active-color: white !important;
  }
  .table-striped > tbody > tr:nth-of-type(odd) > * {
    --bs-table-striped-bg: rgb(33, 32, 32);
  }
  .nav-link:hover{
    color: #fff;
  }

  .btn:hover {
    color: #fff;
  }

  label {
    color: #fff;
  }
</style>

<!-- <script lang="ts">
import { onMounted } from 'vue';

export default {
  mounted() {
    onMounted(() => {
      document.body.setAttribute('data-bs-theme', 'dark');
    });
  }
}
</script> -->