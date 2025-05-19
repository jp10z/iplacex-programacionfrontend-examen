<script setup>
import { BNavbarNav, BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavItem, BNavForm, BFormInput, BButton } from 'bootstrap-vue-next'; 
</script>

<template>
    <BNavbar toggleable="lg" variant="light">
        <BNavbarBrand href="#">Programación Front End</BNavbarBrand>
        <BNavbarToggle target="nav-collapse" />
        <BCollapse id="nav-collapse" is-nav>
          <BNavbarNav>
            <BNavItem to="/calculo-de-calificaciones" exact exact-active-class="active">Calculo de calificaciones</BNavItem>
            <BNavItem to="/formulario-de-registro" exact exact-active-class="active">Formulario de registro</BNavItem>
          </BNavbarNav>
          <BNavForm class="d-flex ms-auto">
            <BFormInput class="me-2" placeholder="Search" />
            <BButton type="submit" variant="outline-success">Busqueda</BButton>
          </BNavForm>
        </BCollapse>
      </BNavbar>
    <router-view />
</template>

<style scoped>
</style>
