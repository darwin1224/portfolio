<template>
  <section>
    <section style="margin-bottom: 9rem;" class="container">
      <b-row cols="2">
        <b-col>
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
        <b-col>
          <b-img
            :src="require('@/assets/work.png')"
            alt="work_illustration"
            style="background-color: transparent;"
            width="550"
            height="300"
          ></b-img>
        </b-col>
      </b-row>
    </section>
    <section id="about" style="margin-bottom: 10rem;" class="container">
      <div style="margin-bottom: 7rem;" class="text-center">
        <h2 style="margin-bottom: 2rem; font-weight: 700; font-size: 3rem;">
          About Me
        </h2>
        <p style="color: #7d7d7d;">
          This is my personality
        </p>
      </div>
      <b-row cols="2">
        <b-col style="width: 100px;">
          <b-img
            :src="require('@/assets/code.png')"
            alt="code"
            style="
              background-color: transparent;
              box-shadow: 0 7px 22px rgba(0, 0, 0, 0.18);
            "
            width="500"
            height="300"
          ></b-img>
        </b-col>
        <b-col style="width: 100px;" class="text-right">
          <h1 style="font-weight: 700; font-size: 2rem;" class="mb-3">
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
    <section id="projects" style="margin-bottom: 10rem;" class="container">
      <div style="margin-bottom: 7rem;" class="text-center">
        <h2 style="margin-bottom: 2rem; font-weight: 700; font-size: 3rem;">
          Projects
        </h2>
        <p style="color: #7d7d7d;">
          This is all my projects created by me along my career
        </p>
      </div>
      <b-row cols="4">
        <b-col
          v-for="(project, index) in [
            'Hotel MS',
            'Library MS',
            'Car Rental MS',
          ]"
          :key="index"
          md="4"
          class="mb-4 box"
        >
          <div
            class="icon-box rounded-circle mx-auto mb-5"
            style="background-color: #f0effe; width: 70px; height: 70px;"
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
    <section id="contact" style="margin-bottom: 20rem;" class="container">
      <div style="margin-bottom: 7rem;" class="text-center">
        <h2 style="margin-bottom: 2rem; font-weight: 700; font-size: 3rem;">
          Contact
        </h2>
        <p style="color: #7d7d7d;">
          Let me know if you are interested with me
        </p>
      </div>
      <b-row cols="2">
        <b-col>
          <b-img
            :src="require('@/assets/message_sent.png')"
            alt="send_contact"
            style="background-color: transparent;"
            width="500"
            height="300"
          ></b-img>
        </b-col>
        <b-col>
          <b-form @submit.prevent="handleSubmit">
            <b-form-input
              v-model="contactMeFormBody.name"
              class="form-input"
              placeholder="Enter Name"
            ></b-form-input>
            <b-form-input
              v-model="contactMeFormBody.email"
              class="form-input"
              type="email"
              placeholder="Enter Email"
            ></b-form-input>
            <b-form-input
              v-model="contactMeFormBody.phoneNumber"
              class="form-input"
              placeholder="Enter Phone Number"
            ></b-form-input>
            <b-form-input
              v-model="contactMeFormBody.address"
              class="form-input"
              placeholder="Enter Address"
            ></b-form-input>
            <b-button
              type="submit"
              variant="primary"
              class="btn-get-started mt-3 px-5"
              style="padding: 0.8rem 3rem;"
              >Contact Me</b-button
            >
          </b-form>
        </b-col>
      </b-row>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Index',
  data() {
    return {
      contactMeFormBody: {
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      ;(this as any).$bvToast.toast(
        "Thank you for submitting your credential. You will be notified soon if i'm interested.",
        {
          title: 'Thank you for your feedback!',
          variant: 'info',
          // solid: true,
        }
      )
      for (const key in this.contactMeFormBody) {
        ;(this.contactMeFormBody as any)[key] = ''
      }
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
  border: 1px solid #ccc;
  cursor: pointer;

  .arrow-box {
    display: inline-block;
    transition: all 0.3s;
  }

  &:hover {
    border: 1px solid #6776ef;
    transform: translateY(-10px);
    box-shadow: 0 60px 30px -40px rgba(22, 57, 85, 0.2);
  }

  &:hover .arrow-box {
    transform: translateX(5px);
  }
}

::placeholder {
  color: #9e9e9e;
}

.form-input {
  margin-bottom: 1.7rem;
  padding: 1.7rem 2rem;
  background-color: #f5f5f5;
  border: none;
  // border-radius: 10px;
}
</style>
