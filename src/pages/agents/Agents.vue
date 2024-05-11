<template>
  <div>
    <div class="flex justify-between gap-8 flex-wrap items-center mb-6">
      <h2 class="font-semibold text-black-900 font-poppins text-2xl flex-1 py-3">
        Agents
      </h2>
      <button
        class="flex-shrink-0 btn-primary text-white font-poppins text-base font-semibold py-4 px-10"
        @click="()=>handleRouting('/agent-add')"
      >
        Create Agent
      </button>
    </div>
    <div class="w-full">
      <Searchbar :value="searchValue" :handleSearch="handleSearch"></Searchbar>
      <div class="h-[calc(100vh-140px)]">
        <AgentsTable :data="newData"></AgentsTable>
      </div>
    </div>
  </div>
</template>

<script>
import Searchbar from "../../components/shared/searchbar/Searchbar.vue";
import AgentsTable from "../../tables/AgentsTable.vue";
import Nodata from "../../components/shared/nodata/Nodata.vue";
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
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          name: "John Doe",
          email: "john.doe@example.com",
          
          role: 'admin',
          createDate: "1707210006",
        },
        {
          _id: "2",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          name: "Jane Smith",
          email: "jane.smith@example.com",
          
          role: 'admin',
          createDate: "1707210006",
        },
        {
          _id: "3",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          name: "Bob Johnson",
          email: "bob.johnson@example.com",
          
          role: 'Moderator',
          createDate: "1707210006",
        },
        {
          _id: "3",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          name: "Alice Williams",
          email: "alice.williams@example.com",
          
          role: 'Moderator',
          createDate: "1707210006",
        },
        {
          _id: "4",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          name: "Charlie Brown",
          email: "charlie.brown@example.com",
        
          role: 'Moderator',
          createDate: "1707210006",
        },
      ],
      isLoading: false,
      isError: false,
    };
  },
  components: {
    Searchbar,
    AgentsTable,
    Nodata,
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
