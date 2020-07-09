<template>
  <div>
    <b-navbar toggleable="sm" type="light" class="bg-white py-4">
      <b-container>
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <h2 style="font-weight: 700;">Portfolio</h2>
        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <li
              v-for="(nav, index) in navItems"
              :key="index"
              class="mx-4"
              @click="handleNavItemClicked(index)"
            >
              <a
                :href="`#${nav.name.toLowerCase()}`"
                class="nav-link top-nav-item"
                :style="{ color: nav.isActive ? '#000' : '#7d7d7d' }"
                >{{ nav.name
                }}<span
                  v-if="nav.isActive"
                  class="nav-item-active-indicator"
                ></span
              ></a>
            </li>
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
.top-nav-item {
  transition: all 0.5s;
  position: relative;
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #555;

  &:hover {
    color: #000;
  }
}

.nav-item-active-indicator {
  position: absolute;
  display: inline-block;
  transition: all 0.5s;
  border: 3px solid #007bff;
  background-color: #000;
  border-radius: 50%;
  left: 45%;
  bottom: 0;
}
</style>
