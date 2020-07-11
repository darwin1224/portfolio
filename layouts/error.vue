<template>
  <main class="wrapper">
    <b-img :src="errorImage" alt="page_not_found" class="error-image"></b-img>
    <h2 class="error-message">
      {{ statusCode === 404 ? message : 'Oops! Something went wrong' }}
    </h2>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Error',
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    statusCode(): number {
      return (this.error && this.error.statusCode) || 500
    },
    message(): string {
      return this.error && this.error.message
    },
    errorImage(): string {
      if (this.statusCode === 404) {
        return 'https://res.cloudinary.com/darwin1224/image/upload/c_scale,h_300,w_500/v1594463652/page_not_found.webp'
      } else {
        return 'https://res.cloudinary.com/darwin1224/image/upload/c_scale,h_300,w_500/v1594464235/internal_server_error.webp'
      }
    },
  },
  head() {
    return {
      title:
        this.error && this.error.statusCode === 404
          ? 'Page not found'
          : this.error.message,
    }
  },
})
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 576px) {
  .error-image {
    width: 250px;
  }

  .error-message {
    font-size: 1.4rem;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
}

.error-image {
  margin-top: -2rem;
  margin-bottom: 3rem;
}

.error-message {
  font-weight: 700;
}
</style>
