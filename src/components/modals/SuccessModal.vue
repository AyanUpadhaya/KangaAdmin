<template>
    <section>
      <input
        type="checkbox"
        id="successPopUp"
        class="modal-toggle"
        :checked="isChecked"
        @change="handleToggleChange"
      />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-[640px] p-10 rounded-3xl">
          <div class="w-full mb-[26px]">
            <img :src="successImage" alt="" class="w-[240px] h-[240px] mx-auto" />
          </div>
          <div class="text-center w-full mb-[26px]">
            <h4 class="text-4xl font-bold text-basecolor font-poppins">Success</h4>
            <p class="text-2xl text-black-600 font-normal font-poppins mt-2">
              {{ description }}
            </p>
          </div>
          <div class="modal-action flex items-center justify-center gap-6 w-full">
            <label
              for="successPopUp"
              class="btn-primary py-4 px-10 text-base font-poppins font-semibold"
              :data-hs-overlay="modalClose || ''"
              @click="handleClose"
            >
              Understood
            </label>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, watch } from "vue";
  import { successImage } from "../../assets/getAssets"; // Adjust the import path based on your project structure
  
  export default {
    props: {
      handleStatus: Function,
      modalClose: String,
      description: String,
      isChecked: Boolean,
      path: String,
    },
    data() {
      return {
        successImage: successImage,
      };
    },
    watch: {
      isChecked: "handleToggleChange",
    },
    methods: {
      handleClose() {
        this.$router.push(this.path);
      },
      handleToggleChange() {
        // If needed, you can handle additional logic when the toggle changes
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  