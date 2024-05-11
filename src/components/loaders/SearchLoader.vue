<template>
    <div class="px-6 py-4 flex justify-center w-full">
      <div class="w-[30rem]">
        <img :src="loader" alt="" />
      </div>
    </div>
  </template>
  
  <script>
  import { searching } from "../../assets/getAssets.js";
  
  export default {
    data() {
      return {
        loader: searching,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your styling here */
  </style>
  