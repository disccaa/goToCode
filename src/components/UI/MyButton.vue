<template>
 <button class="btn">
  <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
    z-index: 1;
    color: #fff;
    transition: ease-out 0.3s;
    background: #5845cf;
    box-shadow: 0px 10px 30px rgb(56 29 219 / 20%);
    border-radius: 8px;
    line-height: 20px;
    position: relative;
    outline: none;
    width: 15rem;
    height: 3.5rem;
    font-size: 1.25rem;
    border: 0px ;
}
.btn:hover {
    color: #5845cf;
    cursor: pointer;
    background: #fff;
}
</style>