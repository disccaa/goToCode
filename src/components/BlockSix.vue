<template>
  <div class="bg">
    <div class="container_castom">
      <h2>Чему вы научитесь <span class="darck_blue"> с нами:</span></h2>
      <my-line class="line"></my-line>
      <div class="flex">

        <div class=" block">
          <div class="img">
              <img src="../assets/BlockSix/js.3709021.svg" alt="js">
          </div>
          <div class="text">
            <p class="size_m">Работа с JavaScript</p>
            <p class="content">
              Вы научитесь разрабатывать программы, используя JavaScript
            </p>
          </div>
        </div>

         <div class=" block">
          <div class="img">
              <img src="../assets/BlockSix/api.bce0322.svg" alt="js">
          </div>
          <div class="text">
            <p class="size_m">Базы данных SQL</p>
            <p class="content">
              Вы научитесь создавать и организовывать большие данные
            </p>
          </div>
        </div>

         <div class=" block">
          <div class="img">
              <img src="../assets/BlockSix/transit.7c4e8b1.svg" alt="js">
          </div>
          <div class="text">
            <p class="size_m">Деплой на Хостинг</p>
            <p class="content">
              Вы научитесь работать с серверами и хостингами.
            </p>
          </div>
        </div>

         <div class=" block">
          <div class="img">
              <img src="../assets/BlockSix/vscode.ea8e47b.svg" alt="js">
          </div>
          <div class="text">
            <p class="size_m">Front-end</p>
            <p class="content">
             Вы научитесь проектировать дизайн сайта
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script >

<style scoped>
.flex{
       gap: 2rem;
    flex-wrap: wrap;
}
h2 {
  line-height: 100%;
  color: rgb(64, 64, 86);
  line-height: 100%;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.875rem;
  font-family: Inter-ExtraBold;
}
.content {
  color: rgb(152, 152, 152);
  line-height: 26px;
  font-size: 1.125rem;
  font-size: 1rem;
  font-family: SF-Regular;
}

.line {
  background: rgb(64, 64, 86);
  width: 4rem;
  margin: 0 auto 4rem;
  height: 0.5rem;
}
.bg {
  background-image: url(../assets/BlockThree/why-us.8097bb6.svg);
  padding-bottom: 10rem;
}

.size_m {
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: rgb(64, 64, 86);
  font-family: Inter-Bold;
}
.block{

    width: 48%;
    display: flex;
    align-items: center;
}
</style>