<template>
  <div class="padding">
    <div class="container_castom">
      <div class="content">
        <div class="flex">
          <div class="left half">
            <div class="text mb">
              <span class="bold heith"
                >Наши достижения <br />
                за 2 года работы
              </span>
            </div>
            <p>Мы фокусируемся на качестве!</p>
            <my-line class="line"></my-line>
          </div>
          <div class="right half">
            <div class="flex column ">
              <div class="flex photo center">
                <div>
                  <img
                    class="img"
                    src="../assets/BlockFour/users.17584f0.svg"
                    alt=""
                  />
                </div>
                <div class="text_r">
                  <span class="bold size_s"> 300 </span><br />
                  Студентов
                </div>
              </div>
              <div class="flex photo center">
                <div>
                  <img
                    class="img"
                    src="../assets/BlockFour/company_settings.78e79ff.svg"
                    alt=""
                  />
                </div>
                <div class="text_r">
                  <span class="bold size_s">15</span> <br />
                  Человек в команде
                </div>
              </div>

              <div class="flex photo center">
                <div>
                  <img
                    class="img"
                    src="../assets/BlockFour/student.b3030d2.svg"
                    alt=""
                  />
                </div>
                <div class="text_r">
                  <span class="bold size_s">50 гб </span><br />
                  Учебных материалов
                </div>
              </div>
              
              <div class="flex photo center">
                <div>
                  <img
                    class="img"
                    src="../assets/BlockFour/geo.svg"
                    alt=""
                  />
                </div>
                  <div class="text_r">
                <span class="bold size_s">50</span> <br />
                Успешных выпусников
              </div>
              </div>

            
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
.center {
 margin-left: 4rem;
}
.heith {
        line-height: 100%;
}
.text_r{
    margin-left: 0.6rem;
}
.img {
  width: 40px;
  height: 54px;
}
.content {
  color: rgb(152, 152, 152);
  line-height: 26px;
  font-size: 1.125rem;
  font-size: 1rem;
  font-family: SF-Regular;
}
.column {
  flex-direction: column;
}
.half {
  width: 50%;
}
.photo {
  align-items: center;
  margin-bottom: 0.5rem;
}
.bold {
  line-height: 100%;
  color: rgb(64, 64, 86);
  font-size: 2.25rem;
  font-family: Inter-ExtraBold;
}
.padding {
  padding: 4rem;
}
.size_s {
  font-size: 1.875rem;
}
.line {
  width: 5rem;
  height: 0.5rem;

  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}
.mb {
  margin-bottom: 1.25rem;
}
</style>