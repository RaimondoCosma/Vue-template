<script>
import { store } from "../../store";

import BoxContainer from "./box-container/BoxContainer.vue";

export default {
  name: "AppMain",
  components: {
    BoxContainer,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main>
    <BoxContainer />
  </main>
</template>

<style lang="scss" scoped>
main {
  flex-grow: 1;
  background-color: #7fffd4;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
