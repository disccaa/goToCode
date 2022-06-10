<template>
  <div class="bg">
    <div class="mainBG">
      <div class="container">
        <div class="navBar flex">
          <div class="navBar_logo">
            <span class="s_logo">GoTo<span class="s_blue">Code</span></span>
          </div>
          <div class="navBar_nav">
            <ul class="nav_ul">
              <li class="nav_li">О нас</li>
              <li class="nav_li">Курсы</li>
              <li class="nav_li">Контакты</li>
            </ul>
          </div>
        </div>
       
      </div>
      <div class="container-xl">
         <my-line class="main_line"></my-line>
         <h1>
Учись кодингу. <br>
Войди в мир <br>
современности. <br>
         </h1>

        <my-button @click="dialogVisivle">Оставить заявку</my-button>
        
        <my-dialog v-model:show="visiblDialog"></my-dialog>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      visiblDialog: false,
    };
  },
  methods: {
    dialogVisivle() {
      this.visiblDialog = true;
    },
  },
};
</script>

<style scoped>
* {
  color:white;
}
.mainBG {
  background: url(@/assets/mainPage/MainPage.jpg);
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.bg {
     background: rgb(248, 248, 248);
}

.navBar {
  font-size: 1rem;
  justify-content: space-between;
  padding-top: 3.25rem;
  padding-bottom: 3.25rem;
  margin-bottom: 7rem;
    font-family: Inter-SemiBold;

}
.s_logo {
  color: white;
  font-size: 1.5rem;
  line-height: 27px;
}
.s_blue {
  color: rgb(88, 69, 207);
}

.nav_li {
  display: inline-block;
  font-family: SF-Medium;
  margin-left: 1rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;line-height: 1.375;    padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1.2rem;
}

.navBar_nav {
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
}
.main_line {
  margin: 0 0 3rem 0;
}
h1 {
  font-size: 6rem;
  line-height: 86%;
  font-family: Inter-ExtraBold !important;
  margin-bottom: 3rem;
}
</style>