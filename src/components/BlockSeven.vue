<template>
  <div class="container_castom">
    <div class="flex main">
      <div class="left">
        <p class="t_white">> $ npm install move.js</p>
        <p class="t_green">Everything is installed</p>
        <p class="t_white">> $ gulp</p>
        <p class="t_green">
          scss watching <br />
          LiveReload started <br />
          Opening localhost:7000 <br />
        </p>
        <p class="t_white">> $ drawillusion</p>
        <p class="t_green">
          scss watching <br />
          LiveReload started <br />
          Opening localhost:3000 <br />
        </p>
        <p class="t_white">> $ filset</p>
        <p class="t_green">$ Everything is installed</p>
        <p class="t_white">> $ designstack</p>
        <p class="t_green">Everything is installed</p>
        <p class="t_white">> $ that’s it</p>
        <p class="t_green">Yup, that’s it</p>
      </div>
      <div class="right">
        <h2>
          Невероятный <span class="darck_blue">буст</span> для твоего скилла!
        </h2>
        <p class="content">
          Наши курсы предлагают вам освоить и улучшить знания в области
          программирования, стать хорошим и востребованным специалистом, который
          будет уверен в своих навыках и умениях.
        </p>
        <div class="flex r_bl">
          <div class="r_left flex">
            <img src="../assets/BlockSeven/star.svg" alt="" />
            <p class="yellow">4.2 / 5</p>
            <div class="content sm">Средняя оценка</div>
          </div>
          <div class="r_right flex">
            <img src="../assets/BlockSeven/comment.svg" alt="" />
            <p class="bl">150</p>
            <div class="content sm">Положительных отзывов</div>
          </div>
        </div>
        <my-button class="btn">Оставить заявку </my-button>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
export default {
  components: { MyButton },
};
</script>

<style scoped>
.main{
  justify-content: center;
  padding-top: 4rem;
  margin-bottom: 4rem;
}
.t_white {
  color: rgb(255, 255, 255);
  font-size: 0.85rem;
  line-height: 1rem;

  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
}

h2 {
  line-height: 2.5rem;
  color: rgb(64, 64, 86);

  margin-bottom: 0.4rem;
  text-align: center;
  font-size: 2.5rem;
  font-family: Inter-ExtraBold;
}

.t_green {
  color: rgb(47, 158, 120);
  font-size: 0.75rem;
  line-height: 1rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  margin-bottom: 2rem;
}
.content {
  color: rgb(152, 152, 152);
  /* line-height: 26px; */
  font-size: 1.125rem;
  font-size: 1rem;
  font-family: SF-Regular;
  padding-left: 1.3rem;
  margin-bottom: 1.4rem;
}
.left {
  background: #111827;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  height: 500px;
  width: 40%;
  border-radius: 1rem;
}
.right {
  width: 40%;
  margin-left: 1rem;
}
.btn {
  margin-left: 1rem;
}
.r_bl {
  margin-left: 1rem;
  align-items: flex-start;
}
.yellow {
  font-size: 1.5rem;
  line-height: 2rem;
  color: rgb(255, 174, 18);
  font-family: Inter-Bold;
  padding-left: 0.5rem;
  padding-top: 0.25rem;
}
.bl {
  font-size: 1.5rem;
  line-height: 2rem;
  color: rgb(64, 117, 255);
  font-family: Inter-Bold;
  padding-left: 0.5rem;
  padding-top: 0.25rem;
}
.r_left {
  align-self: center;
  width: 47%;
  flex-wrap: wrap;
}
.r_right {

  width: 47%;
  flex-wrap: wrap;
}
.r_left img {
  width: 31px;
  height: 31px;
}

.sm {
  font-size: 0.8rem;
}
</style>