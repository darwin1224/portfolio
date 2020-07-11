<template>
  <div>
    <b-navbar toggleable="sm" type="light" class="bg-white py-4">
      <b-container>
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <h2 style="font-weight: 700;">Darwin</h2>
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
  position: relative;
  display: inline-block;
  color: #555;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  transition: all 0.5s;

  &:hover {
    color: #000;
  }
}

.nav-item-active-indicator {
  position: absolute;
  bottom: 0;
  left: 45%;
  display: inline-block;
  background-color: #000;
  border: 3px solid #007bff;
  border-radius: 50%;
  transition: all 0.5s;
}
</style>
