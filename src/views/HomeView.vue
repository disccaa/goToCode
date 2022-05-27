<template>
  <div class="mainPage">
    <div class="container"></div>
  </div>
</template>

<script>
import { useQuery } from '@urql/vue';

export default {
  setup() {
    const result = useQuery({
      query: `
        {
          todos_ {
            id
            title
          }
        }
      `
    });

    return {
      fetching: result.fetching,
      data: result.data,
      error: result.error,
    };
  }
};
</script>

<style scoped >
.mainPage {
  width: 100%;
  height: 100vh;
  background-image: url('../assets/mainPage/MainPage.jpg');
  background-repeat:no-repeat ;
  background-size: cover;
  position: relative;
}

</style>