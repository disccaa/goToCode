<template>
  <div class="bg">
    <div class="container_castom">
      <my-line class="line"></my-line>
      <h2 class="h">
        Часто задаваемые <span class="darck_blue"> вопросы</span>
      </h2>
      <p class="before">
        Прежде чем обратиться к нам с вопросом, посмотрите ниже. Может вы
        найдете ответы на свои вопросы и не только!
      </p>
      <my-acordiom v-bind:accordion="acordi"></my-acordiom>
    </div>
    <!-- <p>{{acordi}}</p> -->
  </div>
</template>

<script>
export default {
  props: {
    acord: Object,
  },
  setup(props) {
    console.log(props.acord.Acordion)
    return {
      acordi: props.acord.Acordion,
    
    };
  },
};
</script>

<style scoped>
.bg {
  padding-top: 10rem;
  padding-bottom: 10rem;
  background-image: url(../assets/BlockThree/why-us.8097bb6.svg);
  
}
.line {
  margin: 0 auto;
  background: rgb(64, 64, 86);
  width: 5rem;
  height: 0.375rem;
}
.h {
  color: rgb(64, 64, 86);
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-family: Inter-ExtraBold;
  text-align: center;
  margin-top: 1.25rem;
}
.before {
  color: rgb(102, 102, 102);
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-family: SF-Light;
  text-align: center;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
}
.content {
  color: rgb(102, 102, 102);
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-family: SF-Light;
}
</style>