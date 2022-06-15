<template>
  <div class="bg">
    <div class="container_castom">
      <h2 class="big_t text-center">Что входит в программу курса?</h2>
      <my-line></my-line>
      <div class="flex flex-wrap justify-center gap-3">
        <div class="glo" v-for="prog in program.Program" :key="prog.id">
          <div class="im">
            <img :src="host + 'assets/' + prog.img.id" alt="" />
          </div>
          <div class="title">{{ prog.title }}</div>
          <div class="desc">{{ prog.desc }}</div>
        </div>
      </div>
      <div class="btn">
        <my-button>Оставить заявку</my-button>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
export default {
  components: { MyButton },
  props: {
    program: Object,
    host: String,
  },
  setup(props) {
    // console.log(host)
  },
};
</script >

<style scoped>
.big_t {
  font-size: 3.75rem;
  line-height: 1;
  font-family: Inter-ExtraBold;
  color: white;
  margin-bottom: 3rem;
}
.bg {

  padding: 3rem 0 4rem ;
  background: rgb(17, 18, 20);
}
.line {
  width: 7rem;
  height: 0.875rem;
  background: rgb(255, 255, 255);
  margin: 0 auto 3rem;
}
.glo {
  display: flex;
  flex-direction: column;
  color: white;
  max-width: 20rem;
  width: 18rem;
  height: 20rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background: rgb(20, 21, 24);
  border-radius: 1rem;
  /* height: 5rem; */
}
.title {
  line-height: 1rem;
  font-size: 1.125rem;
  color: rgb(255, 255, 255);
  font-family: SF-Bold;
  text-align: center;
  padding-top: 2.5rem;
}
.desc {
  color: rgb(156, 163, 175);
  line-height: 1rem;
  font-size: 1rem;
  font-family: SF-Light;
  text-align: center;
  padding-top: 2rem;
}
.im {
  margin: 0 auto;
}
.btn {
  margin: 3rem auto 0;
  text-align: center;
}
</style>