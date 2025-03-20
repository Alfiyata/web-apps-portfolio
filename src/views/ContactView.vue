<template>
  <div class="contact-container">
    <h1>Contact Me</h1>
    
    <div class="contact-methods">
      <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <h3>Email</h3>
        <a href="mailto:your.email@example.com">your.email@example.com</a>
      </div>

      <div class="contact-item">
        <i class="fab fa-linkedin"></i>
        <h3>LinkedIn</h3>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank">
          linkedin.com/in/your-profile
        </a>
      </div>

      <div class="contact-item">
        <i class="fab fa-whatsapp"></i>
        <h3>WhatsApp</h3>
        <a href="https://wa.me/1234567890" target="_blank">
          +1 (234) 567-890
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped>
.contact-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  margin-bottom: 3rem;
  color: #2c3e50;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.contact-item {
  padding: 2rem;
  border-radius: 8px;
  background-color: #f8f9fa;
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-5px);
}

.contact-item i {
  font-size: 2.5rem;
  color: #42b883;
  margin-bottom: 1rem;
}

.contact-item h3 {
  margin: 1rem 0;
  color: #2c3e50;
}

.contact-item a {
  color: #42b883;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: #3aa876;
}
</style>
