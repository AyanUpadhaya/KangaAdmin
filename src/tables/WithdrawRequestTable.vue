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
              Amount
              </th>
              <th
                class="bg-main-100 text-sm text-black-900 font-poppins font-semibold py-[18px] px-3 text-center"
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
              v-for="(withdraw, i) in currentRows"
              :key="withdraw._id"
              class="bg-white text-blackSemi"
            >
              <td class="py-3">
                {{
                  currentPage === 1 && i + 1 < 10
                    ? "0" + (rowsPerPage * (currentPage - 1) + i + 1)
                    : rowsPerPage * (currentPage - 1) + i + 1
                }}
              </td>
      
              <td class="py-3 text-black-medium-emp text-base font-normal font-poppins">
                {{
                  withdraw?.name.length > 20
                    ? withdraw?.name.slice(0, 20) + "..."
                    : withdraw?.name
                }}
              </td>
              <td class="py-3 text-black-medium-emp text-base font-normal font-poppins">
                {{
                  withdraw?.email
                }}
              </td>
              <td class="py-3 text-black-medium-emp text-base font-normal font-poppins">
                ${{
                  withdraw?.amount 
                }}
              </td>
              <td class="py-3 text-black-medium-emp text-base font-normal font-poppins  text-center">
                {{ formatTimestamp(withdraw?.createDate) }}</td>
              
              <td class="py-3  text-black-medium-emp text-base font-normal font-poppins flex justify-center">
                <button @click="()=>handleNavigate(withdraw)" class=" text-center">
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M5.20898 13H16.379L11.499 17.88C11.109 18.27 11.109 18.91 11.499 19.3C11.889 19.69 12.519 19.69 12.909 19.3L19.499 12.71C19.889 12.32 19.889 11.69 19.499 11.3L12.919 4.69997C12.529 4.30997 11.899 4.30997 11.509 4.69997C11.119 5.08997 11.119 5.71997 11.509 6.10997L16.379 11H5.20898C4.65898 11 4.20898 11.45 4.20898 12C4.20898 12.55 4.65898 13 5.20898 13Z" fill="#616161"/>
</svg></span>
                </button>
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
        withdrawId: null,
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
        this.$store.dispatch("deletewithdraw", { id: this.withdrawId });
      },
      handleNavigate(item) {
        this.$router.push(`withdraw-edit/:${item._id}`);
      },
  
      formatTimestamp(timestamp) {
        const options = { year: "numeric", month: "short", day: "numeric" };
        return new Date(timestamp * 1000).toLocaleDateString("en-US", options);
      },
      setwithdrawId(id) {
        this.withdrawId = id
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
  </style>
  