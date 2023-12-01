import { createApp } from "vue";
import App from "~/App.vue";
import Btn from "~/components/BTn";

const app = createApp(App);
// 컴포넌트 전역등록
app.component("Btn", Btn);
app.mount("#app");
