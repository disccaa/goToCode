<template>
<go-to-code-vue></go-to-code-vue>
<block-two></block-two>
</template>

<script>
import GoToCodeVue from './components/GoToCode.vue';
import BlockTwo from './components/BlockTwo.vue'
export default {
  components: {
    GoToCodeVue,
    BlockTwo
  },

 
};
</script>

<style>
@import "./assets/css/tailwind.css";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  color: white;
}
.container {
  width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.flex {
  display: flex;
}
.container-xl {
   width: 1280px;
  margin: 0 auto;
}
ul {
  text-decoration: none;
  list-style-type: none;
}

.blue {
  color: rgb(64, 64, 86);

}
.darck_blue {
  color: rgb(88, 69, 207);
}

</style>