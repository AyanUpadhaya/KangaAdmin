<template>
  <div
    className="h-[calc(100%-150px)] flex flex-col justify-between bg-white px-6 pb-0 rounded-b-2xl"
  >
    <div
      className=" h-full overflow-x-auto  border border-neutral-300 rounded-[10px]"
    >
      <table className="table w-full table-pin-rows table-pin-cols ">
        <thead class="rounded-t-2xl">
          <tr class="font-bold text-3xl text-blackHigh">
            <th
              class="bg-main-100 text-sm text-black-900 font-poppins font-semibold py-[18px] px-3"
            >
              Serial
            </th>
            <th
              class="bg-main-100 text-sm text-black-900 font-poppins font-semibold py-[18px] px-3"
            >
              Image
            </th>
            <th
              class="bg-main-100 text-sm text-black-900 font-poppins font-semibold py-[18px] px-3"
            >
              Category Name
            </th>
            <th
              class="bg-main-100 text-sm text-black-900 font-poppins font-semibold py-[18px] px-3"
            >
              Create Date
            </th>
            <th
              class="bg-main-100 text-sm text-black-900 font-poppins font-semibold py-[18px] px-3 text-center"
            >
              Actions
            </th>
          </tr>
        </thead>

        <tbody v-if="currentRows.length > 0">
          <tr
            v-for="(category, i) in currentRows"
            :key="category._id"
            class="bg-white text-blackSemi"
          >
            <td class="py-3">
              {{
                currentPage === 1 && i + 1 < 10
                  ? "0" + (rowsPerPage * (currentPage - 1) + i + 1)
                  : rowsPerPage * (currentPage - 1) + i + 1
              }}
            </td>
            <td class="py-3">
              <img :src="category?.image" class="w-10 h-10 rounded-md" alt="" />
            </td>
            <td class="py-3 text-black-medium-emp text-base font-normal font-poppins">
              {{
                category?.categoryName.length > 16
                  ? category?.categoryName.slice(0, 16) + "..."
                  : category?.categoryName
              }}
            </td>
            <td class="py-3 text-black-medium-emp text-base font-normal font-poppins">
              {{ formatTimestamp(category?.createDate) }}
            </td>
            <td
              class="py-4 text-black-medium-emp text-base font-normal font-poppins flex items-center justify-center gap-2"
            >
              <button type="button" @click="handleNavigate(category)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 23.0013H4C2.9 23.0013 2 22.1013 2 21.0013C2 19.9013 2.9 19.0013 4 19.0013H20C21.1 19.0013 22 19.9013 22 21.0013C22 22.1013 21.1 23.0013 20 23.0013ZM13.06 4.19128L16.81 7.94128L8.04 16.7113C7.86 16.9013 7.6 17.0013 7.34 17.0013H5C4.45 17.0013 4 16.5513 4 16.0013V13.6613C4 13.3913 4.11 13.1413 4.29 12.9513L13.06 4.19128ZM17.88 6.87128L14.13 3.12128L15.96 1.29128C16.35 0.901279 16.98 0.901279 17.37 1.29128L19.71 3.63128C20.1 4.02128 20.1 4.65128 19.71 5.04128L17.88 6.87128Z" fill="#F2C963"/>
</svg>
              </button>
              <label
                @click="() => setCategoryId(category._id)"
                class="cursor-pointer"
                for="confirmationPopup"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V9C18 7.9 17.1 7 16 7H8C6.9 7 6 7.9 6 9V19ZM18 4H15.5L14.79 3.29C14.61 3.11 14.35 3 14.09 3H9.91C9.65 3 9.39 3.11 9.21 3.29L8.5 4H6C5.45 4 5 4.45 5 5C5 5.55 5.45 6 6 6H18C18.55 6 19 5.55 19 5C19 4.45 18.55 4 18 4Z" fill="#FF6B6B"/>
</svg>
              </label>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr className="border-0">
            <td colSpan="10">
              <Nodata></Nodata>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="w-full">
      <Pagination
        :currentPage="currentPage"
        :setCurrentPage="handleSetCurrentPage"
        :rowsPerPage="rowsPerPage"
        :setRowsPerPage="handleSetRowsPerPage"
        :totalRows="data?.length"
      ></Pagination>
      <!-- <ConfirmationModal
      :handleStatus="handleDelete"
      ></ConfirmationModal> -->
      <ConfirmationModal
      ></ConfirmationModal>
    </div>
  </div>
</template>

<script>
import Pagination from "../components/shared/pagination/Pagination.vue";
import Nodata from "../components/shared/nodata/Nodata.vue";
import ConfirmationModal from "../components/modals/ConfirmationModal.vue"
export default {
  props: {
    data: Array,
    setIsAscending: Function,
  },
  data() {
    return {
      currentPage: 1,
      rowsPerPage: 10,
      categoryId: null,
    };
  },
  computed: {
    indexOfLastRow() {
      return this.currentPage * this.rowsPerPage;
    },
    indexOfFirstRow() {
      return this.indexOfLastRow - this.rowsPerPage;
    },
    currentRows() {
      return this.data?.slice(this.indexOfFirstRow, this.indexOfLastRow);
    },
  },
  methods: {
    handleSetRowsPerPage(value) {
      this.rowsPerPage = value;
    },
    handleSetCurrentPage(value) {
      this.currentPage = value;
    },
    handleDelete() {
      this.$store.dispatch("deleteCategory", { id: this.categoryId });
    },
    handleNavigate(item) {
      this.$router.push(`service-category-edit/:${item._id}`);
    },

    formatTimestamp(timestamp) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(timestamp * 1000).toLocaleDateString("en-US", options);
    },
    setCategoryId(id) {
      this.categoryId = id
    },
  },
  components: {
    Pagination,
    Nodata,
    ConfirmationModal
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
