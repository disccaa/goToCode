<template>
  <div class="empty bg"></div>
  <div class="bg">
    <div class="container_castom">
      <my-line class="line"></my-line>
      <h2>Почему стоит выбрать <span class="darck_blue"> нас?</span></h2>
      <div class="flex left">
        <div class="img pic1"></div>
        <div class="t_left">
          <p class="size_m">
            Много <span class="darck_blue"> интересных</span> проектов
          </p>
          <p class="content">
            Вы будете разрабатывать ботов для соц. сетей, сайты, игры,
            проектировать базы данных. За счет чего поймете какая сфера IT вам
            интересна.
          </p>
        </div>
      </div>

      <div class="flex right">
        <div class="t_right">
          <p class="size_m">
            <span class="darck_blue"> Дружелюбная</span> атмосфера
          </p>
          <p class="content">
            Вы познакомитесь и сможете общаться со многими учителями и людьми с
            общими интересами и целями в любое время.
          </p>
        </div>
        <div class="img pic2"></div>
      </div>

      <div class="flex left">
        <div class="img pic3"></div>
        <div class="t_left ml">
          <p class="size_m">
            Много <span class="darck_blue"> интересных</span> проектов
          </p>
          <p class="content">
            Вы будете разрабатывать ботов для соц. сетей, сайты, игры,
            проектировать базы данных. За счет чего поймете какая сфера IT вам
            интересна.
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
.t_right {
  margin-bottom: 20rem;
}
.pic1 {
  margin-top: 9rem;
  background-image: url(../assets/BlockFive/Frame.2d4a588.png);
}
.pic2 {
  background-image: url(../assets/BlockFive/Group2.bbde665.svg);
}
.pic3 {
    background-image: url(../assets/BlockFive/Group3.0713cc2.png);
}

.right {
  align-content: flex-start;
}

.empty {
  height: 8rem;
}
.bg {
  background: rgb(248, 248, 248);
}
.line {
  background: rgb(64, 64, 86);
  width: 4rem;
  margin: 0 auto;
  height: 0.5rem;
  margin-bottom: 1.25rem;
}
h2 {
  line-height: 100%;
  color: rgb(64, 64, 86);
  line-height: 100%;
  margin-bottom: 4rem;
  text-align: center;
  font-size: 1.875rem;
  font-family: Inter-ExtraBold;
}
.wrap {
  flex-wrap: wrap;
}
.content {
  color: rgb(152, 152, 152);
  line-height: 26px;
  font-size: 1.125rem;
  font-size: 1rem;
  font-family: SF-Regular;
}
.size_m {
  line-height: 100%;
  color: rgb(64, 64, 86);
  line-height: 100%;
  font-size: 1.5rem;
  font-family: Inter-ExtraBold;
  margin-bottom: 1.25rem;
}
.img {
  background-repeat: no-repeat;
  background-size: contain;
  width: 522px;
  height: 430px;
}
.flex {
  justify-content: space-between;
}
.t_left {
  margin-bottom: 10rem;
  justify-content: center;
  align-self: center;
}
.ml{
    margin-left: 3rem;
}
</style>