<template>
  <div>
    <div class="mainBG">
      <div class="container">
        <div class="navBar flex">
          <div class="navBar_logo"><span class="s_logo">GoTo<span class="s_blue">Code</span></span>
          </div>
          <div class="navBar_nav">
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
        <my-button @click="dialogVisivle">Оставить заявку</my-button>
        <my-dialog v-model:show="visiblDialog" ></my-dialog>
      </div>
    </div>
  </div>
</template>

<script>

export default {
 
  data() {
    return {
      visiblDialog: false,
    }
  },
  methods: {
    dialogVisivle() {
      this.visiblDialog = true ;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
.container {
  width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.flex {
  display: flex;
}

ul {
  text-decoration: none;
  list-style-type: none;
}


.mainBG {
  background: url(@/assets/mainPage/MainPage.jpg);
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}


.navBar {
  font-size:  1rem;
}
.s_logo {
  color: white;
  font-size:  1.5rem;
  line-height: 27px;
}
.s_blue {
  color: rgb(88, 69, 207);
}



</style>