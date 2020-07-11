<template>
  <section>
    <lazy-hydrate v-slot="{ hydrated }" when-visible>
      <div>
        <base-hero v-if="hydrated"></base-hero>
      </div>
    </lazy-hydrate>
    <lazy-hydrate v-slot="{ hydrated }" when-visible>
      <div>
        <base-about v-if="hydrated"></base-about>
      </div>
    </lazy-hydrate>
    <lazy-hydrate v-slot="{ hydrated }" when-visible>
      <div>
        <base-project v-if="hydrated"></base-project>
      </div>
    </lazy-hydrate>
    <lazy-hydrate v-slot="{ hydrated }" when-visible>
      <div>
        <base-contact v-if="hydrated">
          <template #form>
            <b-form name="form-contact-me" netlify>
              <input type="hidden" name="form-name" value="form-contact-me" />
              <b-form-input
                v-model="contactMeFormBody.name"
                name="name"
                class="form-input"
                placeholder="Enter Name"
              ></b-form-input>
              <b-form-input
                v-model="contactMeFormBody.email"
                name="email"
                class="form-input"
                type="email"
                placeholder="Enter Email"
              ></b-form-input>
              <b-form-input
                v-model="contactMeFormBody.phoneNumber"
                name="phone_number"
                class="form-input"
                placeholder="Enter Phone Number"
              ></b-form-input>
              <b-form-input
                v-model="contactMeFormBody.address"
                name="address"
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
          </template>
        </base-contact>
      </div>
    </lazy-hydrate>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import LazyHydrate from 'vue-lazy-hydration'

export default Vue.extend({
  name: 'Index',
  components: {
    LazyHydrate,
    BaseHero: () => import('@/components/BaseHero.vue'),
    BaseAbout: () => import('@/components/BaseAbout.vue'),
    BaseProject: () => import('@/components/BaseProject.vue'),
    BaseContact: () => import('@/components/BaseContact.vue'),
  },
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
})
</script>

<style lang="scss" scoped>
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
