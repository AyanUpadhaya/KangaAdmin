<template>
    <div class="mb-6 max-w-max">
      <div >
        <button @click="navigateToPath" class="flex items-center gap-2 max-w-max cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M26.3883 14.66H8.82832L12.6683 10.82C13.1883 10.3 13.1883 9.46005 12.6683 8.94005C12.1483 8.42005 11.3083 8.42005 10.7883 8.94005L4.66832 15.06C4.14832 15.58 4.14832 16.42 4.66832 16.94L10.7883 23.06C11.3083 23.58 12.1483 23.58 12.6683 23.06C13.1883 22.54 13.1883 21.7 12.6683 21.18L8.82832 17.3267H26.3883C27.1217 17.3267 27.7217 16.7267 27.7217 15.9934C27.7217 15.26 27.1217 14.66 26.3883 14.66Z" fill="#212121"/>
</svg>
          <span class="text-black-900 font-semibold text-2xl font-poppins">{{ title }}</span>
        </button>
      </div>
    </div>
  </template>
  
  <script>

  
  export default {
    props: {
      path: String,
      title: String,
    },
    methods: {
      navigateToPath() {
        this.$router.push(this.path);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  