<template>
  <h1>Hello Vue!</h1>
  <Btn />
  <Hello />
</template>

<script>
import Hello from "~/components/Hello";
export default {
  components: {
    Hello,
  },
};
</script>
