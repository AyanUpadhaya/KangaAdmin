<template>
  <SearchLoader v-if="isLoading"></SearchLoader>
  <SomethingWrong v-else-if="!isLoading && isError"></SomethingWrong>
  <Nodata v-else-if="!isLoading && !isError && data.length === 0"></Nodata>
  <div class="" v-else>
    <div class="flex justify-between gap-8 flex-wrap items-center mb-6">
      <h2
        class="font-semibold text-black-900 font-poppins text-2xl flex-1 py-3"
      >
        Category
      </h2>
      <button
        class="flex-shrink-0 btn-primary text-white font-poppins text-base font-semibold py-4 px-10"
        @click="() => handleRouting('/service-category-add')"
      >
        Create Category
      </button>
    </div>
    <div class="w-full">
      <Searchbar :value="searchValue" :handleSearch="handleSearch"></Searchbar>
      <div class="h-[calc(100vh-140px)]">
        <ServiceCategoriesTable :data="newData"></ServiceCategoriesTable>
      </div>
    </div>
  </div>
</template>

<script>
import Searchbar from "../../components/shared/searchbar/Searchbar.vue";
import ServiceCategoriesTable from "../../tables/ServiceCategoriesTable.vue";
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
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Italian Cuisine",
          createDate: "1707210006",
        },
        {
          _id: "2",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Mexican Delights",
          createDate: "1707210006",
        },
        {
          _id: "3",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Sushi Selection",
          createDate: "1707210006",
        },
        {
          _id: "4",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Vegetarian Bliss",
          createDate: "1707210006",
        },
        {
          _id: "5",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Dessert Delights",
          createDate: "1707210006",
        },
        {
          _id: "6",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Italian Cuisine",
          createDate: "1707210006",
        },
        {
          _id: "7",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Mexican Delights",
          createDate: "1707210006",
        },
        {
          _id: "8",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Sushi Selection",
          createDate: "1707210006",
        },
        {
          _id: "9",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Vegetarian Bliss",
          createDate: "1707210006",
        },
        {
          _id: "10",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Dessert Delights",
          createDate: "1707210006",
        },
        {
          _id: "11",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Dessert Delights",
          createDate: "1707210006",
        },
        {
          _id: "12",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Italian Cuisine",
          createDate: "1707210006",
        },
        {
          _id: "13",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Mexican Delights",
          createDate: "1707210006",
        },
        {
          _id: "14",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Sushi Selection",
          createDate: "1707210006",
        },
        {
          _id: "15",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Vegetarian Bliss",
          createDate: "1707210006",
        },
        {
          _id: "16",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Dessert Delights",
          createDate: "1707210006",
        },

        {
          _id: "17",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Italian Cuisine",
          createDate: "1707210006",
        },
        {
          _id: "18",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Mexican Delights",
          createDate: "1707210006",
        },
        {
          _id: "19",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Sushi Selection",
          createDate: "1707210006",
        },
        {
          _id: "20",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Vegetarian Bliss",
          createDate: "1707210006",
        },
        {
          _id: "21",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Dessert Delights",
          createDate: "1707210006",
        },
        {
          _id: "22",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Italian Cuisine",
          createDate: "1707210006",
        },
        {
          _id: "23",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Mexican Delights",
          createDate: "1707210006",
        },
        {
          _id: "24",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Sushi Selection",
          createDate: "1707210006",
        },
        {
          _id: "25",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Vegetarian Bliss",
          createDate: "1707210006",
        },
        {
          _id: "26",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Dessert Delights",
          createDate: "1707210006",
        },
        {
          _id: "27",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Dessert Delights",
          createDate: "1707210006",
        },
        {
          _id: "28",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Italian Cuisine",
          createDate: "1707210006",
        },
        {
          _id: "29",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Mexican Delights",
          createDate: "1707210006",
        },
        {
          _id: "30",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Sushi Selection",
          createDate: "1707210006",
        },
        {
          _id: "31",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Vegetarian Bliss",
          createDate: "1707210006",
        },
        {
          _id: "32",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Dessert Delights",
          createDate: "1707210006",
        },

        {
          _id: "33",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Italian Cuisine",
          createDate: "1707210006",
        },
        {
          _id: "34",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Mexican Delights",
          createDate: "1707210006",
        },
        {
          _id: "35",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Sushi Selection",
          createDate: "1707210006",
        },
        {
          _id: "36",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Vegetarian Bliss",
          createDate: "1707210006",
        },
        {
          _id: "37",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Dessert Delights",
          createDate: "1707210006",
        },
        {
          _id: "38",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Italian Cuisine",
          createDate: "1707210006",
        },
        {
          _id: "39",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Mexican Delights",
          createDate: "1707210006",
        },
        {
          _id: "40",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Sushi Selection",
          createDate: "1707210006",
        },
        {
          _id: "41",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Vegetarian Bliss",
          createDate: "1707210006",
        },
        {
          _id: "42",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Dessert Delights",
          createDate: "1707210006",
        },
        {
          _id: "43",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Dessert Delights",
          createDate: "1707210006",
        },
        {
          _id: "44",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Italian Cuisine",
          createDate: "1707210006",
        },
        {
          _id: "45",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Mexican Delights",
          createDate: "1707210006",
        },
        {
          _id: "46",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Sushi Selection",
          createDate: "1707210006",
        },
        {
          _id: "17",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Vegetarian Bliss",
          createDate: "1707210006",
        },
        {
          _id: "48",
          image:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          categoryName: "Dessert Delights",
          createDate: "1707210006",
        },
      ],
      isLoading: false,
      isError: false,
    };
  },
  components: {
    Searchbar,
    ServiceCategoriesTable,
    Nodata,
    SearchLoader,
    SomethingWrong,
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
        return data?.categoryName
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
