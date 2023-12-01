<template>
  <h1>Hello</h1>
  <h2>{{ message }}</h2>
</template>

<script>
export default {
  props: ['message']
}
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
