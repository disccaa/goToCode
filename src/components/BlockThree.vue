<template>
  <div>
    <div class="wrapper">
      <div class="flex column">
        <div class="first_block">
          <div class="flex bl3">
            <img
              class="m"
              src="../assets/BlockThree/message.7453cdb.svg"
              alt=""
            />
            <p class="text">
              -Кто <span class="blue">мы?</span> <br />
              -Мы команда разработчиков,<br />
              помогающие ученикам вступить в мир IT!
            </p>
          </div>
        </div>
        <my-line class="line"></my-line>
        <div class="second_block">
          <p class="t_small">
            Мы поощряем стремление становиться профессионалами в сфере
            программирования! Мы не только обучаем, но также подготавливаем к
            будущему трудоустройству!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  padding-top: 12rem;
  padding-bottom: 12rem;
  background-image: url(../assets/BlockThree/why-us.8097bb6.svg);
}
.column {
  flex-direction: column;
  justify-content: center;
  /* justify-items: center; */
  align-items: center;
}
.line {
  width: 5rem;
  height: 0.5rem;
  margin: 0 auto;
  margin-bottom: 1.25rem;
}
.bl3 {
margin-bottom: 2rem;
}
.text {
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: rgb(64, 64, 86);
  font-family: Inter-ExtraBold;
  margin-left: 1rem;
  
}
.blue {
  color: rgb(88, 69, 207);
}
.t_small {
  color: rgb(152, 152, 152);
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: SF-Regular;
  max-width: 33rem;
}
</style>