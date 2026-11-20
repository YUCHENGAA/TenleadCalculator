<template>
  <div class="tenlead-calculator">
    <h3>Tenlead Calculator</h3>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const inputValue = ref(0);
const result = ref(null);

const calculate = () => {
  // Replace this with your actual calculation logic
  result.value = inputValue.value * 10;
};
</script>

<style scoped>
.tenlead-calculator {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.tenlead-calculator h1 {
  text-align: center;
  margin-bottom: 20px;
}

.tenlead-calculator form {
  display: flex;
  flex-direction: column;
}

.tenlead-calculator form div {
  margin-bottom: 15px;
}

.tenlead-calculator form label {
  margin-bottom: 5px;
  font-weight: bold;
}

.tenlead-calculator form input {
  padding: 8px;
  font-size: 16px;
}

.tenlead-calculator button {
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.tenlead-calculator button:hover {
  background-color: #0056b3;
}
</style>
