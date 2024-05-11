<template>
  <section
    class="flex items-center justify-end gap-6 text-darkHigh w-full flex-nowrap whitespace-nowrap py-4"
  >
    <!-- Entries Text -->
    <p class="text-black-600 font-poppins text-sm">
      Showing {{ (currentPage - 1) * rowsPerPage + 1 }} to
      {{ Math.min(rowsPerPage * currentPage, totalRows) }} from
      {{ totalRows }} entries
    </p>
    <section class="flex items-center gap-2">
      <button class="p-[6px]" v-if="currentPage > 1" @click="setCurrentPage(1)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M12.1901 11.5262C12.4501 11.2662 12.4501 10.8462 12.1901 10.5862L9.61006 7.9995L12.1967 5.41283C12.4567 5.15283 12.4567 4.73283 12.1967 4.47283C11.9367 4.21283 11.5167 4.21283 11.2567 4.47283L8.19673 7.53283C7.93673 7.79283 7.93673 8.21283 8.19673 8.47283L11.2567 11.5328C11.5101 11.7862 11.9301 11.7862 12.1901 11.5262Z"
            fill="#757575"
          />
          <path
            d="M7.79673 11.5262C8.05673 11.2662 8.05673 10.8462 7.79673 10.5862L5.21673 7.9995L7.8034 5.41283C8.0634 5.15283 8.0634 4.73283 7.8034 4.47283C7.5434 4.21283 7.1234 4.21283 6.8634 4.47283L3.8034 7.53283C3.5434 7.79283 3.5434 8.21283 3.8034 8.47283L6.8634 11.5328C7.11673 11.7862 7.53673 11.7862 7.79673 11.5262Z"
            fill="#757575"
          />
        </svg>
      </button>
      <button class="p-[6px]" v-if="currentPage > 1" @click="handleDecrement">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M10.0002 4.4699C9.74018 4.2099 9.32018 4.2099 9.06018 4.4699L6.00018 7.5299C5.74018 7.7899 5.74018 8.2099 6.00018 8.4699L9.06018 11.5299C9.32018 11.7899 9.74018 11.7899 10.0002 11.5299C10.2602 11.2699 10.2602 10.8499 10.0002 10.5899L7.41351 7.99657L10.0002 5.4099C10.2602 5.1499 10.2535 4.72324 10.0002 4.4699Z"
            fill="#757575"
          />
        </svg>
      </button>

      <div v-for="pageNumber in Math.min(totalPages, 5)">
        <button
          @click="setCurrentPage(pageNumber)"
          class="font-poppins text-sm font-semibold leading-5 flex justify-center items-center gap-1 w-8 h-8 p-[6px] rounded-lg duration-200"
          :class="{
            'pagination-button': currentPage == pageNumber,
            'pagination-button-transparent': currentPage !== pageNumber,
          }"
          :key="pageNumber"
        >
          {{ pageNumber }}
        </button>
      </div>

      <button
        class="p-[6px]"
        v-if="currentPage < totalPages"
        @click="handleIncrement"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M6.00018 4.47367C5.74018 4.73367 5.74018 5.15367 6.00018 5.41367L8.58684 8.00034L6.00018 10.587C5.74018 10.847 5.74018 11.267 6.00018 11.527C6.26018 11.787 6.68018 11.787 6.94018 11.527L10.0002 8.46701C10.2602 8.20701 10.2602 7.78701 10.0002 7.52701L6.94018 4.46701C6.68684 4.21367 6.26018 4.21367 6.00018 4.47367Z"
            fill="#757575"
          />
        </svg>
      </button>
      <button
        v-if="currentPage < totalPages"
        @click="setCurrentPage(totalPages)"
        class="p-[6px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3.8034 4.47367C3.5434 4.73367 3.5434 5.15367 3.8034 5.41367L6.39006 8.00034L3.8034 10.587C3.5434 10.847 3.5434 11.267 3.8034 11.527C4.0634 11.787 4.4834 11.787 4.7434 11.527L7.8034 8.46701C8.0634 8.20701 8.0634 7.78701 7.8034 7.52701L4.75006 4.47367C4.49006 4.21367 4.0634 4.21367 3.8034 4.47367Z"
            fill="#757575"
          />
          <path
            d="M8.19673 4.47367C7.93673 4.73367 7.93673 5.15367 8.19673 5.41367L10.7834 8.00034L8.19673 10.587C7.93673 10.847 7.93673 11.267 8.19673 11.527C8.45673 11.787 8.87673 11.787 9.13673 11.527L12.1967 8.46701C12.4567 8.20701 12.4567 7.78701 12.1967 7.52701L9.13673 4.46701C8.8834 4.21367 8.45673 4.21367 8.19673 4.47367Z"
            fill="#757575"
          />
        </svg>
      </button>
    </section>
    <div class="flex items-center gap-2">
      <!-- <p class="font-semibold text-sm sm:text-base">Item per page :</p> -->
      <div class="dropdown dropdown-top dropdown-end">
        <label
          tabindex="3"
          class="rounded-full pl-4 pr-3 py-2 border border-black-600 cursor-pointer flex items-center gap-2 font-poppins text-sm text-black-600 font-semibold"
        >
          {{ rowsPerPage }}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M7.5299 10.0001L4.4699 6.94007C4.2099 6.68007 4.2099 6.26007 4.4699 6.00007C4.7299 5.74007 5.1499 5.74007 5.4099 6.00007L8.00323 8.58674L10.5899 6.00007C10.8499 5.74007 11.2699 5.74007 11.5299 6.00007C11.7899 6.26007 11.7899 6.68007 11.5299 6.94007L8.4699 10.0001C8.21657 10.2601 7.7899 10.2601 7.5299 10.0001Z" fill="#757575"/>
</svg>
        </label>
        <ul
          tabindex="3"
          class="dropdown-content menu p-1 mt-2 m-0.5 mr-2 shadow bg-white rounded-md "
        >
          <li>
            <p @click="handleItemsPerPage(10)" class="py-1">10</p>
          </li>
          <hr class="text-disabledColor opacity-10" />
          <li>
            <p @click="handleItemsPerPage(25)" class="py-1">25</p>
          </li>
          <hr class="text-disabledColor opacity-10" />
          <li>
            <p @click="handleItemsPerPage(50)" class="py-1">50</p>
          </li>
        </ul>
      </div>
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
  computed: {
    totalPages() {
      return Math.ceil(this.totalRows / this.rowsPerPage);
    },
  },
  methods: {
    handleIncrement() {
      if (this.currentPage * this.rowsPerPage >= this.totalRows) {
        return;
      } else {
        this.setCurrentPage(this.currentPage + 1);
      }
    },
    handleDecrement() {
      if (this.currentPage <= 1) {
        return;
      } else {
        this.setCurrentPage(this.currentPage - 1);
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
.pagination-button {
  background: #424242;
  color: white;
  cursor: pointer;
 
}
.pagination-button-transparent {
  color: #757575;
  cursor: pointer;
}
.pagination-button-transparent:hover{
  background: #797777;
  color: #fff;
}
</style>
