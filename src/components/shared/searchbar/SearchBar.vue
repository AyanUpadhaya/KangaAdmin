<template>
  <div
    class="bg-white px-6 py-6 flex flex-wrap gap-y-3 items-center justify-between rounded-t-2xl"
  >
    <!-- input -->
    <div class="flex gap-6 items-center">
      <div class="relative">
        <label
          class="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2"
          for="search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.9767 14.4713H15.1867L14.9067 14.2013C16.1067 12.8013 16.7267 10.8913 16.3867 8.86133C15.9167 6.08133 13.5967 3.86133 10.7967 3.52133C6.5667 3.00133 3.0067 6.56133 3.5267 10.7913C3.8667 13.5913 6.0867 15.9113 8.8667 16.3813C10.8967 16.7213 12.8067 16.1013 14.2067 14.9013L14.4767 15.1813V15.9713L18.7267 20.2213C19.1367 20.6313 19.8067 20.6313 20.2167 20.2213C20.6267 19.8113 20.6267 19.1413 20.2167 18.7313L15.9767 14.4713ZM9.9767 14.4713C7.4867 14.4713 5.4767 12.4613 5.4767 9.97133C5.4767 7.48133 7.4867 5.47133 9.9767 5.47133C12.4667 5.47133 14.4767 7.48133 14.4767 9.97133C14.4767 12.4613 12.4667 14.4713 9.9767 14.4713Z"
              fill="#D0D0D0"
            />
          </svg>
        </label>
        <input
          id="search"
          :value="value"
          @input="(e) => handleSearch(e.target.value)"
          class="placeholder:text-[#D0D0D0] pl-8 sm:pl-11 p-3 h-[48px] xs:w-[150px] sm:w-[200px] lg:w-[400px] text-xs sm:text-sm md:text-base text-blackLow rounded-[100px] border border-neutral-300 focus:outline-none bg-white font-poppins"
          type="text"
          name="searchInput"
          placeholder="Search"
        />
      </div>
    </div>

    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: String,
    handleSearch: Function,
    path: String,
    isNotAddable: Boolean,
    isWallpaperSearchBar: Boolean,
    modalId: String,
  },
  methods: {
    emitInput(event) {
      this.$emit("update:value", event.target.value);
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
