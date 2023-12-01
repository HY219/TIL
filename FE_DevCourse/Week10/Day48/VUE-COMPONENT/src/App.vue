<template>
  <h1>Hello Vue!</h1>
  <Btn />
  <Hello :message="msg" :name="'123'" />
  <button @click="reverseMsg">Click!</button>
</template>

<script>
import Hello from "~/components/Hello";
export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: "Hello Vue!",
    };
  },
  methods: {
    reverseMsg() {
      this.msg = this.msg.split("").reverse().join("");
    },
  },
};
</script>
