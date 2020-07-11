<template>
  <section id="about" class="container">
    <div class="about-header text-center">
      <h2 style="margin-bottom: 2rem; font-weight: 700; font-size: 3rem;">
        About Me
      </h2>
      <p style="color: #7d7d7d;">
        This is my personality
      </p>
    </div>
    <b-row>
      <b-col class="about-image" sm="6">
        <b-img
          class="sized-image"
          src="https://res.cloudinary.com/darwin1224/image/upload/v1594365171/code_w8qsqr.webp"
          alt="code"
          style="
            background-color: transparent;
            box-shadow: 0 7px 22px rgba(0, 0, 0, 0.18);
          "
        ></b-img>
      </b-col>
      <b-col sm="6" class="about-body">
        <h1 class="about-me-text mb-3">
          I'm passionate about coding!
        </h1>
        <p style="color: #7d7d7d; line-height: 28px;">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
          Tenetur commodi molestias doloribus dolor, aut<br />
          totam aliquam sint quam iusto blanditiis<br />
          atque voluptas repellendus libero est eveniet cupiditate
        </p>
      </b-col>
    </b-row>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseAbout',
})
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 576px) {
  .sized-image {
    height: 200px !important;
  }

  #about {
    margin-bottom: 5rem !important;
  }

  .about-image {
    margin-bottom: 4rem;
  }
  .about-header {
    margin-bottom: 3rem !important;
  }

  .about-body {
    width: 100% !important;
    text-align: center !important;
  }

  .about-me-text {
    font-size: 1.8rem !important;
  }
}

.sized-image {
  width: 100%;
  min-width: 300px;
  height: 300px;
  min-height: 200px;
}

#about {
  margin-bottom: 10rem;
}

.about-header {
  margin-bottom: 7rem;
}

.about-body {
  width: 100px;
  text-align: right;
}

.about-me-text {
  font-weight: 700;
  font-size: 2rem;
}
</style>
