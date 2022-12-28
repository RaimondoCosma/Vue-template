import { reactive } from "vue";

export const store = reactive({
  difficulties: "",
  boxPosition: 0,
  isBomb: false,
  totalBox: [],
  boxNoBomb: [],
  boxBombs: [],
});
