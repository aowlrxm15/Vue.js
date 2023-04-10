<template>
  <h4>FormResult2</h4>
  <p>
    name : {{ user.name }}<br />
    age : {{ user.age }}<br />
    addr : {{ user.addr }}<br />
  </p>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const user = route.params;
</script>
<style scoped></style>
