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
                Name
              </th>
              <th
                class="bg-main-100 text-sm text-black-900 font-poppins font-semibold py-[18px] px-3"
              >
                Email
              </th>
              <th
                class="bg-main-100 text-sm text-black-900 font-poppins font-semibold py-[18px] px-3"
              >
              Service Taken
              </th>
              <th
                class="bg-main-100 text-sm text-black-900 font-poppins font-semibold py-[18px] px-3"
              >
              Rating
              </th>
              <th
                class="bg-main-100 text-sm text-black-900 font-poppins font-semibold py-[18px] px-3"
              >
                Create Date
              </th>
              
            </tr>
          </thead>
  
          <tbody v-if="currentRows.length > 0">
            <tr
              v-for="(user, i) in currentRows"
              :key="user._id"
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
                <img :src="user?.image" class="w-10 h-10 rounded-md" alt="" />
              </td>
              <td class="py-3 text-black-medium-emp text-base font-normal font-poppins">
                {{
                  user?.name.length > 20
                    ? user?.name.slice(0, 20) + "..."
                    : user?.name
                }}
              </td>
              <td class="py-3 text-black-medium-emp text-base font-normal font-poppins">
                {{
                  user?.email
                }}
              </td>
              <td class="py-3 text-black-medium-emp text-base font-normal font-poppins">
                {{
                  user?.serviceTaken
                  
                }}
              </td>
              <td class="py-3 text-black-medium-emp text-base font-normal font-poppins">
                *{{
                  parseInt(user?.rating)
                  
                }}
              </td>
              <td class="py-3 text-black-medium-emp text-base font-normal font-poppins">
                {{ formatTimestamp(user?.createDate) }}
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
        userId: null,
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
        this.$store.dispatch("deleteuser", { id: this.userId });
      },
      handleNavigate(item) {
        this.$router.push(`service-user-edit/:${item._id}`);
      },
  
      formatTimestamp(timestamp) {
        const options = { year: "numeric", month: "short", day: "numeric" };
        return new Date(timestamp * 1000).toLocaleDateString("en-US", options);
      },
      setuserId(id) {
        this.userId = id
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
  