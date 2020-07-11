<template>
  <section id="projects" class="container">
    <div style="margin-bottom: 7rem;" class="text-center">
      <h2 style="margin-bottom: 2rem; font-weight: 700; font-size: 3rem;">
        Projects
      </h2>
      <p style="color: #7d7d7d;">
        This is all my projects created by me along my career
      </p>
    </div>
    <b-row>
      <b-col
        v-for="(project, index) in ['Hotel MS', 'Library MS', 'Car Rental MS']"
        :key="index"
        sm="12"
        md="6"
        class="mb-4 box"
      >
        <div
          class="icon-box rounded-circle mx-auto mb-5"
          style="width: 70px; height: 70px; background-color: #f0effe;"
        >
          <svg
            width="4rem"
            height="4rem"
            style="
              display: block;
              margin: auto;
              padding: 6px 3px 3px 3px;
              color: #6776ef;
            "
            viewBox="0 0 16 16"
            class="bi bi-check"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
            />
          </svg>
        </div>
        <h4 class="text-center" style="font-weight: 600;">{{ project }}</h4>
        <p style="color: #7d7d7d;" class="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          eius hic sunt, ipsa earum delectus
        </p>
        <p
          class="text-center mt-5"
          style="
            color: #6776ef;
            font-weight: 600;
            font-family: 'Poppins', sans-serif;
          "
        >
          See More
          <span class="arrow-box"
            ><svg
              width="1.8rem"
              height="1.8rem"
              viewBox="0 0 16 16"
              class="bi bi-arrow-right-short"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"
              />
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"
              /></svg
          ></span>
        </p>
      </b-col>
    </b-row>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseProject',
})
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 992px) {
  .box {
    max-width: 100% !important;
  }
}

@media only screen and (max-width: 576px) {
  .box {
    max-width: 100% !important;
  }

  #projects {
    margin-bottom: 5rem !important;
  }
}

#projects {
  margin-bottom: 10rem;
}

.box {
  max-width: 20.5rem;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  padding: 3rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;

  .arrow-box {
    display: inline-block;
    transition: all 0.3s;
  }

  &:hover {
    border: 1px solid #6776ef;
    box-shadow: 0 60px 30px -40px rgba(22, 57, 85, 0.2);
    transform: translateY(-10px);
  }

  &:hover .arrow-box {
    transform: translateX(5px);
  }
}
</style>
