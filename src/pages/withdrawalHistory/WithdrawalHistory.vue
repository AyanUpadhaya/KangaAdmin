<template>
  <SearchLoader v-if="isLoading"></SearchLoader>
  <SomethingWrong v-else-if="!isLoading && isError"></SomethingWrong>
  <Nodata v-else-if="!isLoading && !isError && data.length === 0"></Nodata>
  <div v-else>
    <div class="flex justify-between gap-8 flex-wrap items-center mb-6">
      <h2
        class="font-semibold text-black-900 font-poppins text-2xl flex-1 py-3"
      >
        Withdrawal History
      </h2>
    </div>
    <div class="w-full">
      <Searchbar :value="searchValue" :handleSearch="handleSearch"></Searchbar>
      <div class="h-[calc(100vh-140px)]">
        <WithdrawHistoryTable :data="newData"></WithdrawHistoryTable>
      </div>
    </div>
  </div>
</template>

<script>
import Searchbar from "../../components/shared/searchbar/Searchbar.vue";
import WithdrawHistoryTable from "../../tables/WithdrawHistoryTable.vue";
import Nodata from "../../components/shared/nodata/Nodata.vue";
import SearchLoader from "../../components/loaders/SearchLoader.vue";
import SomethingWrong from "../../components/shared/ui/SomethingWrong/SomethingWrong.vue";
export default {
  data() {
    return {
      isAscending: false,
      tagName: "",
      showMenu: true,
      searchValue: "",
      categories: null,
      data: [
        {
          _id: "1",
          name: "John Doe",
          email: "john.doe@example.com",
          category: "Web Development",
          rating: 4.5,
          package: "starter",
          website: "business.com",
          earned: 2500,
          withdrawn: 2400,
          booking: 352,
          amount: 215,
          createDate: "1707210006",
        },
        {
          _id: "2",

          name: "Jane Smith",
          email: "jane.smith@example.com",
          category: "Graphic Design",
          rating: 5.0,
          package: "starter",
          website: "business.com",
          earned: 2500,
          withdrawn: 2400,
          booking: 352,
          amount: 215,
          createDate: "1707210006",
        },
        {
          _id: "3",

          name: "Bob Johnson",
          email: "bob.johnson@example.com",
          category: "Mobile App Development",
          rating: 4.0,
          package: "intermediate",
          website: "business.com",
          earned: 2500,
          withdrawn: 2400,
          booking: 352,
          amount: 215,
          createDate: "1707210006",
        },
        {
          _id: "3",

          name: "Alice Williams",
          email: "alice.williams@example.com",
          category: "SEO Optimization",
          rating: 4.8,
          package: "starter",
          website: "business.com",
          earned: 2500,
          withdrawn: 2400,
          booking: 352,
          amount: 215,
          createDate: "1707210006",
        },
        {
          _id: "4",

          name: "Charlie Brown",
          email: "charlie.brown@example.com",
          category: "Social Media Marketing",
          rating: 3.5,
          package: "intermediate",
          website: "business.com",
          earned: 2500,
          withdrawn: 2400,
          booking: 352,
          amount: 215,
          createDate: "1707210006",
        },
      ],
      isLoading: false,
      isError: false,
    };
  },
  components: {
    Searchbar,
    WithdrawHistoryTable,
    Nodata,
    SearchLoader,
    SomethingWrong
  },
  computed: {
    newData() {
      return [...this.data].sort(this.sortByTime).filter(this.filterBySearch);
    },
  },
  methods: {
    onChange(e) {
      const value = e.target.value;
      this.searchValue = value;
    },
    sortByTime(a, b) {
      if (this.isAscending) {
        return a.createDate - b.createDate;
      } else {
        return b.createDate - a.createDate;
      }
    },
    filterBySearch(data) {
      if (this.searchValue.trim().length > 0) {
        return data?.name
          ?.toLowerCase()
          .includes(this.searchValue?.toLowerCase());
      } else {
        return data;
      }
    },

    handleSearch(value) {
      this.searchValue = value;
    },
    handleRouting(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped></style>
