<template>
  <div class="flex items-center border border-neutral-300 h-auto  rounded-[15px] xl:rounded-lg gap-2 p-4">
    <input
      :type="isTypeText ? 'text' : 'password'"
      class=" outline-none bg-transparent w-full text-base font-normal  leading-[normal]"
      v-model="value"
      v-bind="$attrs"
      
    />
    <button type="button"  v-if="isShowIcon" @click="toggleType">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" v-if="!isTypeText">
  <path d="M12 6.4699C14.76 6.4699 17 8.7099 17 11.4699C17 11.9799 16.9 12.4699 16.76 12.9299L19.82 15.9899C21.21 14.7599 22.31 13.2199 23 11.4599C21.27 7.0799 17 3.9699 12 3.9699C10.73 3.9699 9.51 4.1699 8.36 4.5399L10.53 6.7099C11 6.5699 11.49 6.4699 12 6.4699ZM2.71 3.1299C2.32 3.5199 2.32 4.1499 2.71 4.5399L4.68 6.5099C3.06 7.7999 1.77 9.4999 1 11.4699C2.73 15.8599 7 18.9699 12 18.9699C13.52 18.9699 14.97 18.6699 16.31 18.1499L19.03 20.8699C19.42 21.2599 20.05 21.2599 20.44 20.8699C20.83 20.4799 20.83 19.8499 20.44 19.4599L4.13 3.1299C3.74 2.7399 3.1 2.7399 2.71 3.1299ZM12 16.4699C9.24 16.4699 7 14.2299 7 11.4699C7 10.6999 7.18 9.9699 7.49 9.3299L9.06 10.8999C9.03 11.0799 9 11.2699 9 11.4699C9 13.1299 10.34 14.4699 12 14.4699C12.2 14.4699 12.38 14.4399 12.57 14.3999L14.14 15.9699C13.49 16.2899 12.77 16.4699 12 16.4699ZM14.97 11.1399C14.82 9.7399 13.72 8.6499 12.33 8.4999L14.97 11.1399Z" fill="#212121"/>
</svg>
      

    
<svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="#212121"/>
</svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    setInputValue: Function,
  },
  data() {
    return {
      value: "",
      isTypeText: false,
      isShowIcon: false,
    };
  },

  watch: {
    value(newVal) {
      this.setInputValue(newVal);
      if (newVal?.trim()?.length > 0) {
        this.isShowIcon = true;
      } else {
        this.isShowIcon = false;
      }
    },
  },

  methods: {
    toggleType() {
      this.isTypeText = !this.isTypeText;
    },
    resetValue() {
      this.value = "";
    },
  },
};
</script>
