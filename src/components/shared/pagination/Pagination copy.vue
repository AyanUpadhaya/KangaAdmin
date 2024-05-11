<template>
    <section class="flex items-center justify-end gap-4 text-darkHigh w-full flex-nowrap whitespace-nowrap py-4">
      <div class="flex items-center gap-2">
        <p class="font-semibold text-sm sm:text-base">Item per page :</p>
        <div class="dropdown dropdown-top dropdown-end">
          <label
            tabindex="3"
            class="rounded-lg px-2 py-2 border border-blackLow cursor-pointer flex items-center"
          >
            {{ rowsPerPage }} &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5.83398 7.91669L10.0007 12.0834L14.1673 7.91669H5.83398Z"
                fill="#6C6C6C"
              />
            </svg>
          </label>
          <ul
            tabindex="3"
            class="dropdown-content menu p-1 mt-2 m-0.5 shadow bg-white rounded-md"
          >
            <li>
              <p @click="handleItemsPerPage(10)" class="py-1">
                10
              </p>
            </li>
            <hr class="text-disabledColor opacity-10" />
            <li>
              <p @click="handleItemsPerPage(25)" class="py-1">
                25
              </p>
            </li>
            <hr class="text-disabledColor opacity-10" />
            <li>
              <p @click="handleItemsPerPage(50)" class="py-1">
                50
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p>
          {{ currentPage }} - {{ Math.min(rowsPerPage * currentPage, totalRows) }} of {{ totalRows }}
        </p>
      </div>
      <div class="flex items-center gap-3">
        <button type="button" @click="handleDecrement">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.7049 16.59L11.1249 12L15.7049 7.41L14.2949 6L8.29492 12L14.2949 18L15.7049 16.59Z"
              fill="#474747"
            />
          </svg>
        </button>
        <button type="button" @click="handleIncrement">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8.29492 16.59L12.8749 12L8.29492 7.41L9.70492 6L15.7049 12L9.70492 18L8.29492 16.59Z"
              fill="#474747"
            />
          </svg>
        </button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: Number,
      setCurrentPage: Function,
      rowsPerPage: Number,
      setRowsPerPage: Function,
      totalRows: Number,
    },
    methods: {
      handleIncrement() {
        if (this.currentPage * this.rowsPerPage >= this.totalRows) {
          return;
        } else {
          this.setCurrentPage((prev) => prev + 1);
        }
      },
      handleDecrement() {
        if (this.currentPage <= 1) {
          return;
        } else {
          this.setCurrentPage((prev) => prev - 1);
        }
      },
      handleItemsPerPage(value) {
        this.setCurrentPage(1);
        this.setRowsPerPage(value);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  