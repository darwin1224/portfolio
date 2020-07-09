<template>
  <div>
    <b-navbar toggleable="sm" type="light" class="bg-white py-4">
      <b-container>
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <h2 style="font-weight: 700;">Portfolio</h2>
        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item
              v-for="(nav, index) in navItems"
              :key="index"
              :href="`#${nav.name.toLowerCase()}`"
              style="font-family: 'Poppins', sans-serif; font-weight: 500;"
              class="top-nav-item mx-4"
              @click="handleNavItemClicked(index)"
              >{{ nav.name
              }}<span
                v-if="nav.isActive"
                class="nav-item-active-indicator"
              ></span
            ></b-nav-item>
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
  data() {
    return {
      navItems: [
        { name: 'Home', isActive: true },
        { name: 'About', isActive: false },
        { name: 'Projects', isActive: false },
        { name: 'Contact', isActive: false },
      ],
    }
  },
  methods: {
    handleNavItemClicked(index: number): void {
      this.navItems.forEach((navItem) => {
        if (navItem.isActive) navItem.isActive = false
      })
      this.navItems[index].isActive = !this.navItems[index].isActive
    },
  },
})
</script>

<style lang="scss" scoped>
.top-nav-item > a {
  transition: all 0.5s;
  position: relative;
}

.nav-item-active-indicator {
  position: absolute;
  display: inline-block;
  transition: all 0.5s;
  width: 20px;
  border: 2px solid #007bff;
  background-color: #000;
  border-radius: 200px;
  left: 32%;
  bottom: 0;
}
</style>
