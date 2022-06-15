<template>
<div class="two"></div>
  <div class="bg">
    <div class="container_castom">
      <my-line class="line_block_two"></my-line>
      <h2>
        <span class="blue"> Попробуй себя в разных </span>
        <br />
        <span class="darck_blue">направлениях</span>
      </h2>
      <div class="flex flex_wrap products">
        <div class="product" v-for="p in products.Products" :key="p.id">
          <div class="img flex "><img :src="host + 'assets/' + p.img.id" alt="" /></div>
          <p class="color_black p_title">{{ p.title }}</p>
          <p class="p_desc color_grey">{{ p.description }}</p>

          <!-- <p>{{p.img}}</p> -->
          <!-- <p>{{host+'assets/'+p.img.id}}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: Object,
    host: String,
  },
  setup(props) {
    // console.log(host)
  },
};
</script>

<style scoped>
.line_block_two {
  background: rgb(64, 64, 86);
  width: 5rem;
  height: 0.5rem;
  margin: 0 auto 1.2rem;
}
h2 {
  font-size: 48px;
  line-height: 100%;
  text-align: center;
  font-family: Inter-ExtraBold;
  margin-bottom: 5rem;
}
.p_title {
  font-size: 1.5rem;
  line-height: 2rem;
  font-family: Inter-SemiBold;
  margin-bottom: 1.25rem;
}
.p_desc {
      font-size: 1rem;
    line-height: 1.5rem;
   font-family: SF-Regular;
}

.product img {
  width: 3.5rem;
  margin-bottom: 1rem;
}
.bg{
      background: rgb(248, 248, 248);
}
.product {
  text-align: center;
  width: 32%;
  padding: 0 1rem;
}
.products {

  /* justify-content: space-between; */
  justify-content: center;
gap: 1rem
}

.two {
  height: 8rem;
  background: rgb(248, 248, 248);
}
div.img {
 justify-content: center;
}
</style>