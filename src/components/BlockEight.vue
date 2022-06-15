<template>
  <div class="bg">
    <div class="container_castom">
      <div class="flex">
        <div class="left"></div>
        <div class="right">
          <div class="flex about">
            <div class="star">
              <img src="../assets/BlockSeven/star.svg" alt="star" />
            </div>
            <div class="cours">Наш курс</div>
          </div>

          <div class="js">
            <h3 class="js">
              Java Script <br />
              <span class="darck_blue"> course</span>
            </h3>
          </div>
          <div class="flex curs">
            <div class="pic1 pic">
              <div class="flex justify-center">
                <img src="../assets/BlockEight/clock.svg" alt="" />
              </div>
              <p class="t_white decs">Время:</p>
              <p class="decs darck_blue">2 раза в неделю по 2 часа</p>
            </div>
            <div class="pic2 pic">
              <div class="flex justify-center">
                <img src="../assets/BlockEight/clock2.svg" alt="" />
              </div>
              <p class="t_white decs">Длительность:</p>
              <p class="decs darck_blue">6 месяцев:</p>
            </div>
            <div class="pic3 pic">
              <div class="flex justify-center">
                <img src="../assets/BlockEight/group.4ab612a.svg" alt="" />
              </div>
              <p class="t_white decs">Cтудентов</p>
              <p class="decs darck_blue">в группе 10-15:</p>
            </div>
            <div class="pic4 pic">
              <div class="flex justify-center">
                <img src="../assets/BlockEight/stonks.svg" alt="" />
              </div>
              <p class="t_white decs">Начало:</p>
              <p class="decs darck_blue">15 сентября</p>
            </div>
            <div class="pic5 pic">
              <div class="flex justify-center">
                <img src="../assets/BlockEight/cash.svg" alt="" />
              </div>
              <p class="t_white decs">Цена за курс:</p>
              <p class="decs darck_blue">35 тыс. тг / мес:</p>
            </div>
            <div class="pic6 pic">
              <div class="flex justify-center">
                <img src="../assets/BlockEight/online.3c8a7d1.svg" alt="" />
              </div>
              <p class="t_white decs">Формат:</p>
              <p class="decs darck_blue">Online-обучение</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg {
  background: rgb(17, 18, 20);
}
.right {
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
  /* flex-grow: 1; */
  width: 50%;
}
.left {
  background-image: url(../assets/BlockEight/Course1.53ad987.svg);
  background-repeat: no-repeat;
  margin-top: 8rem;
  width: 50%;
  height: 500px;
  background-size: 80%;
}
.cours {
  color: white;
  margin-left: 0.5rem;
  line-height: 1.5rem;
  font-size: 1.3rem;
  font-family: SF-Bold;
}
.star {
  width: 16px;
  height: 16px;
}
.about {
  align-items: center;
  width: 100%;
  justify-content: center;
}
.js {
  line-height: 2rem;
  font-size: 2.25rem;
  font-family: Inter-Bold;
  /* margin-bottom: 1.5rem; */
  margin: 1.5rem auto 3rem;
  color: white;

  text-align: center;
}
.decs {
  font-size: 0.75rem;
  line-height: 1rem;
  font-family: SF-Semibold;
  text-align: center;
}

.t_white {
  color: white;
}
.curs {
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.pic {
  background: rgb(20, 21, 24);
  height: 5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.5rem;
  width: 9rem;
}
</style>