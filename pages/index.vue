<template>
  <section>
    <section style="margin-bottom: 9rem; padding: 0 7.5rem;">
      <b-row cols="2">
        <b-col>
          <h1 style="font-weight: 700; font-size: 3.2rem;" class="mb-3">
            Hello, developers!
          </h1>
          <p style="color: #555; line-height: 28px;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
            Tenetur commodi molestias doloribus dolor, aut<br />
            totam aliquam sint quam iusto blanditiis<br />
            atque voluptas repellendus libero est eveniet cupiditate
          </p>
          <b-button
            variant="primary"
            class="btn-get-started mt-3 px-5"
            style="padding: 0.8rem 3rem;"
            >Contact Me</b-button
          >
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/work.png')"
            style="background-color: transparent;"
            width="550"
            height="300"
          ></b-img>
        </b-col>
      </b-row>
    </section>
    <section style="padding: 0 7.5rem; margin-bottom: 20rem;">
      <div style="margin-bottom: 7rem;" class="text-center">
        <h2 style="margin-bottom: 2rem; font-weight: 700; font-size: 3rem;">
          Projects
        </h2>
        <p style="color: #555;">
          This is all my projects created by me in this month
        </p>
      </div>
      <b-row cols="4">
        <b-col v-for="i in 3" :key="i" md="4" class="mb-4 box">
          <div
            class="icon-box rounded-circle mx-auto mb-4"
            style="background-color: #f0effe; width: 70px; height: 70px;"
          >
            <svg
              width="3.8rem"
              height="3.8rem"
              style="
                display: block;
                margin: auto;
                padding: 18px 10px 10px 10px;
                color: #6776ef;
              "
              viewBox="0 0 16 16"
              class="bi bi-bucket-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.5A4.5 4.5 0 0 0 3.5 6h-1a5.5 5.5 0 1 1 11 0h-1A4.5 4.5 0 0 0 8 1.5z"
              />
              <path
                fill-rule="evenodd"
                d="M1.61 5.687A.5.5 0 0 1 2 5.5h12a.5.5 0 0 1 .488.608l-1.826 8.217a1.5 1.5 0 0 1-1.464 1.175H4.802a1.5 1.5 0 0 1-1.464-1.175L1.512 6.108a.5.5 0 0 1 .098-.42z"
              />
            </svg>
          </div>
          <h4 class="text-center" style="font-weight: 600;">Cash</h4>
          <p style="color: #555;" class="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            eius hic sunt, ipsa earum delectus
          </p>
        </b-col>
      </b-row>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

interface UserListPageState {
  email: string
}

export default Vue.extend({
  name: 'Index',
  data(): UserListPageState {
    return {
      email: '',
    }
  },
  methods: {
    handleSubmit() {
      alert(this.email)
    },
  },
})
</script>

<style lang="scss" scoped>
.btn-get-started {
  box-shadow: 0 3px 6px rgba(0, 112, 243, 0.3);

  &:hover {
    box-shadow: none;
  }
}

.box {
  transition: all 0.3s;
  padding: 3rem;
  max-width: 20.5rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  }
}
</style>
