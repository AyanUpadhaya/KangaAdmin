<template>
    <section>
      <input
        type="checkbox"
        id="confirmationPopup"
        class="modal-toggle"
      />
      <div id="confirmationPopup" class="modal">
        <div class="modal-box w-11/12 max-w-[640px] p-10 rounded-3xl">
          <div class="w-full mb-[26px]">
            <img :src="closegif" alt="" class="w-[240px] h-[240px] mx-auto" />
          </div>
  
          <div class="text-center w-full mb-[26px]">
            <h4 class="text-errorColor text-4xl font-bold font-poppins text-yellow-status">Delete</h4>
            <p class="text-2xl text-black-600 mt-2 font-poppins">
              Are you sure?
            </p>
          </div>
          <div class="modal-action flex items-center justify-center gap-6 w-full">
            <label
              for="confirmationPopup"
              class="btn bg-basecolor hover:bg-basecolor text-white text-base font-semibold font-poppins w-full max-w-[200px] rounded-xl py-4 px-10 h-full border-none"
              :data-hs-overlay="modalClose || ''"
            >
              No, Thanks
            </label>
            <label
              for="confirmationPopup"
              class="btn bg-yellow hover:bg-yellow text-white text-base font-semibold font-poppins w-full max-w-[200px] rounded-xl py-4 px-10 h-full border-none"
              :data-hs-overlay="modalClose || ''"
              @click="handleStatus"
            >
              Yes, Delete
            </label>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { closegif } from "../../assets/getAssets"; // Adjust the import path based on your project structure
  
  export default {
    props: {
      handleStatus: Function,
      modalClose: String,
      title: String,
    },
    data() {
      return {
        closegif: closegif,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  