<template>
  <h1>Hello</h1>
  <h2>{{ message }}</h2>
  <h2>{{ name }}</h2>
</template>

<script>
export default {
  props: {
    message: String,
    name: [String, Number],
  },
};
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
