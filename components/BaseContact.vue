<template>
  <section id="contact" style="margin-bottom: 20rem;" class="container">
    <div class="contact-header text-center">
      <h2 style="margin-bottom: 2rem; font-weight: 700; font-size: 3rem;">
        Contact
      </h2>
      <p style="color: #7d7d7d;">
        Let me know if you are interested with me
      </p>
    </div>
    <b-row>
      <b-col sm="6">
        <b-img
          src="https://res.cloudinary.com/darwin1224/image/upload/c_scale,h_300,w_500/v1594365181/message_sent_yzqicx.webp"
          alt="send_contact"
          class="sized-image contact-image"
        ></b-img>
      </b-col>
      <b-col sm="6">
        <slot name="form"></slot>
      </b-col>
    </b-row>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseContact',
})
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 576px) {
  .sized-image {
    height: 200px !important;
  }

  .contact-header {
    margin-bottom: 3rem !important;
  }

  .contact-image {
    margin-bottom: 4rem;
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

.contact-header {
  margin-bottom: 7rem;
}

.btn-get-started {
  box-shadow: 0 3px 6px rgba(0, 112, 243, 0.3);

  &:hover {
    box-shadow: none;
  }
}
</style>
