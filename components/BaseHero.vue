<template>
  <section style="margin-bottom: 9rem;" class="container">
    <b-row class="hero-section">
      <b-col sm="6" md="6" lg="6" class="hero-section-body">
        <h1 style="font-weight: 700; font-size: 3.2rem;" class="mb-3">
          Hello, developers!
        </h1>
        <p style="color: #7d7d7d; line-height: 28px;">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
          Tenetur commodi molestias doloribus dolor, aut<br />
          totam aliquam sint quam iusto blanditiis<br />
          atque voluptas repellendus libero est eveniet cupiditate
        </p>
        <b-button
          href="#contact"
          variant="primary"
          class="btn-get-started mt-3 px-5"
          style="padding: 0.8rem 3rem;"
          >Contact Me</b-button
        >
      </b-col>
      <b-col sm="6" md="6" lg="6">
        <b-img
          class="sized-image"
          src="https://res.cloudinary.com/darwin1224/image/upload/c_scale,h_300,w_500/v1594365182/work_f8irso.webp"
          alt="work_illustration"
        ></b-img>
      </b-col>
    </b-row>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseHero',
})
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 576px) {
  .sized-image {
    height: 200px !important;
  }

  .hero-section {
    flex-direction: column-reverse;
  }

  .hero-section-body {
    text-align: center;

    h1 {
      font-size: 2.5rem !important;
    }
  }

  .btn-get-started {
    width: 100%;
  }
}

.sized-image {
  width: 100%;
  min-width: 300px;
  height: 300px;
  min-height: 200px;
}

.btn-get-started {
  box-shadow: 0 3px 6px rgba(0, 112, 243, 0.3);

  &:hover {
    box-shadow: none;
  }
}
</style>
