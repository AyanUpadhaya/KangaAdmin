<template>
  <div class="p-4 bg-white rounded-2xl shadow-softShadow">
    <!-- title -->
    <div class="flex gap-4 items-center mb-4">
      <div class="font-poppins font-normal text-base text-black-600 flex-1">
        {{ data.title }}
      </div>
      <div class="w-10 h-10 rounded-lg flex items-center justify-center" :class="data.svgBg">
        <div v-html="data.svg"></div>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <p class="text-[36px] font-bold text-neutral-black-500 font-poppins">
        {{ data.inDollars ? "$" : "" }}{{ data.number }}
      </p>

      <div class="flex items-center">
        <div class="flex items-center">
          <span class="font-semibold text-sm font-poppins text-successHigh">
            {{ data.percentage }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here, using the same class names */
</style>
