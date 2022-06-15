<template>
  <div class="accordion" id="accordionExample">
    <div
      class="accordion-item bg-white border border-gray-200 pad"
      v-for="a in accordion"
      :key="a.id"
    >
      <h2 class="accordion-header mb-0" :id="'heading' + a.id">
        <button
          class="
            accordion-button
            collapsed
            relative
            flex
            items-center
            w-full
            py-4
            px-5
            text-base text-gray-800 text-left
            bg-white
            border-0
            rounded-none
            transition
            focus:outline-none
          "
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#' + 'collapse' + a.id"
          aria-expanded="false"
          :aria-controls="'collapse' + a.id"
        >
          {{ a.head }}
        </button>
      </h2>
      <div
        :id="'collapse' + a.id"
        class="accordion-collapse collapse"
        :aria-labelledby="'heading' + a.id"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body py-4 px-5 bod">
          {{ a.body }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-acordiom",
  props: {
    accordion: Object,
  },
};
</script>

<style scoped>
.pad {
  margin-bottom: 1rem;
}
.accordion-header {
}

.text-base {
  font-size: 1.2rem;
  line-height: 100%;
  color: rgb(61, 61, 61);

  font-family: SF-Regular;
}
.bod {
      font-family: SF-Light;color: rgb(134, 134, 134);transition: all .1s linear;font-size: 1rem;
    line-height: 1.5rem;
}
.accordion-button:not(.collapsed) {
      color: rgb(88, 69, 207);
}
</style>