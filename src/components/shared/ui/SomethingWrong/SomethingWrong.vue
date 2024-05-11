<template>
    <section class="w-full h-full flex items-center justify-center">
      <div>
        <div class="flex flex-col items-center justify-center gap-6 sm:gap-10">
          <div class="w-full max-w-[640px] mx-auto">
            <img :src="wrong" alt="" class="w-full" />
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold">
            Something Went Wrong
          </h2>
          <button
            type="button"
            class=" hidden btn rounded-full bg-primaryMainLight hover:bg-primaryMainLight border-secondaryColor hover:border-primaryMainLight text-whiteHigh w-full max-w-max normal-case font-normal"
            @click="handleReloadClick"
          >
            Reload Page
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { wrong } from "../../../../assets/getAssets.js";
  
  export default {
    data() {
      return {
        wrong
      };
    },
    methods: {
      handleReloadClick() {
        window.location.reload();
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styling here */
  </style>
  