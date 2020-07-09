<template>
  <div>
    <b-navbar toggleable="sm" type="light" class="bg-white py-4">
      <b-container>
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <h2 style="font-weight: 700;">Portfolio</h2>
        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item
              href="#"
              style="font-family: 'Poppins', sans-serif; font-weight: 500;"
              class="mx-4"
              >About</b-nav-item
            >
            <b-nav-item
              href="#"
              style="font-family: 'Poppins', sans-serif; font-weight: 500;"
              class="mx-4"
              >Projects</b-nav-item
            >
            <b-nav-item
              href="#"
              style="font-family: 'Poppins', sans-serif; font-weight: 500;"
              class="mx-4"
              >Contact</b-nav-item
            >
            <b-nav-item
              href="#"
              style="font-family: 'Poppins', sans-serif; font-weight: 500;"
              class="mx-4"
              >Support</b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <main style="margin-top: 4rem;">
      <nuxt></nuxt>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Default',
})
</script>
