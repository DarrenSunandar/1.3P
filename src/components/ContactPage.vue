<template>
  <section class="contact">
    <h2>Contact Me</h2>
    <p>Address: 45 Clarke Street, Southbank, Melbourne, VIC 3006</p> 
    <p>Tel: 0411562175</p>
    <p>Email: darrenmar14@gmail.com</p>
    <br><br>

    <h3>Inquiry</h3>
    <br>
    

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <!-- Add a contact number field -->
      <div class="form-group">
        <label for="contact-number">Contact Number:</label>
        <input type="tel" id="contact-number" v-model="formData.contactNumber" required>
      </div>
      <!-- Add an additional message for clarity -->
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        contactNumber: "", // Added contact number field
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log("Form submitted:", this.formData);
    },
  },
};
</script>

<style scoped>
/* Add contact styles here */
</style>
