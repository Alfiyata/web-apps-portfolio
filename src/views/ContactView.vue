<template>
  <div class="contact-container">
    <h1 class="mt-20 text-3xl">Contact Me</h1>
    
    <div class="contact-methods">
      <div data-aos="fade-right" class="contact-item">
        <img src="@/assets/images/gmail-logo.png" alt="Gmail" class="contact-logo"/>
        <h3>Email</h3>
        <button
          @click="copyEmail"
          style="background:none;border:none;cursor:pointer;padding:0;font:inherit;color:#42b883;"
        >
          alfiyata99@gmail.com
        </button>
      </div>

      <div data-aos="fade-left" class="contact-item">
        <img src="@/assets/images/linkedin-logo.png" alt="LinkedIn" class="contact-logo"/>
        <h3>LinkedIn</h3>
        <a href="http://www.linkedin.com/in/alfiyata-86a6b11b1" target="_blank">
          Alfiyata
        </a>
      </div>

      <div data-aos="fade-right" class="contact-item">
        <img src="@/assets/images/whatsapp-logo.png" alt="WhatsApp" class="contact-logo"/>
        <h3>WhatsApp</h3>
        <a href="https://wa.me/089518976601" target="_blank">
          +62 89518976601
        </a>
      </div>
      <div data-aos="fade-left" class="contact-item">
        <img src="@/assets/images/github-logo.png" alt="WhatsApp" class="contact-logo"/>
        <h3>Github</h3>
        <a href="https://github.com/Alfiyata" target="_blank">
          Alfiyata
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const copyEmail = (): void => {
  const email = 'alfiyata99@gmail.com'
  navigator.clipboard.writeText(email)
    .then(() => {
      alert('Email copied to clipboard!')
    })
    .catch(err => {
      console.error('Failed to copy email: ', err)
    })
}

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
  transform: translateY(-10px);
}

.contact-logo {
  width: 2.5rem;
  height: 2.5rem;
  margin-bottom: 1rem;
  object-fit: contain;
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
