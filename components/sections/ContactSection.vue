<template>
  <section id="contact" class="contact">
    <!-- section card -->
    <div class="contact-card">
      <div class="card-subcontainer">
        <div class="card-title">{{ sectionTitle }}</div>
        <div class="card-main-text">
          {{ formMainText
          }}<span
            class="card-main-text-email"
            @click="onClickFormMainTextEmail"
            >{{ formMainTextEmail }}</span
          >
        </div>
      </div>
      <div class="card-subcontainer">
        <form class="contact-form" @submit.prevent="sendForm">
          <!-- name -->
          <input
            id="name"
            v-model="formData.name"
            class="form-input"
            type="text"
            placeholder="Insert your name here"
            required
          />
          <!-- email -->
          <input
            id="email"
            v-model="formData.email"
            class="form-input"
            type="email"
            placeholder="Insert your email here"
            required
          />
          <!-- message -->
          <textarea
            id="message"
            v-model="formData.message"
            class="form-textarea"
            placeholder="Please let me know your thoughts!"
            required
          ></textarea>
          <!-- submit button -->
          <button
            type="submit"
            class="submit-btn"
            :class="`${isFormDataValid ? 'valid' : ''}`"
          >
            <img
              v-show="!isFormDataValid"
              src="icon-send.svg"
              height="16"
              width="16"
            />
            <img
              v-show="isFormDataValid"
              src="icon-send__colored.svg"
              height="16"
              width="16"
            />
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
// libraries
import { send } from 'emailjs-com';

// data variables
import { navbarData, CATEGORIES_INDEX_CONTACT } from '~/data/navbar';
import { contactData, emailjsData } from '~/data/sections/contact';

export default {
  name: 'ContactComponent',
  data() {
    return {
      // EmailJS data variables
      serviceId: emailjsData.SERVICE_ID,
      templateId: emailjsData.TEMPLATE_ID,
      userId: emailjsData.USER_ID,
      // component data variables
      sectionTitle: navbarData.categories[CATEGORIES_INDEX_CONTACT].name,
      formMainText: contactData.formMainText,
      formMainTextEmail: contactData.formMainTextEmail,
      // form data variables
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  computed: {
    isFormDataValid() {
      return (
        this.formData.name !== '' &&
        this.formData.email !== '' &&
        this.formData.message !== ''
      );
    },
  },
  methods: {
    onClickFormMainTextEmail() {
      navigator.clipboard.writeText(this.formMainTextEmail);

      alert(`"${this.formMainTextEmail}" has been copied to the clipboard!`);
    },
    sendForm() {
      const templateParams = {
        user_name: this.formData.name,
        user_email: this.formData.email,
        message: this.formData.message,
      };

      // DOCS: https://www.emailjs.com/docs/rest-api/send/
      send(this.serviceId, this.templateId, templateParams, this.userId)
        .then(() => {
          alert('Your message has been sent!');
        })
        .catch(() => {
          alert('Error: message failed to send.');
        });

      // Reset form fields after submission
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~/styles/sections/_ContactSection.sass'
</style>
