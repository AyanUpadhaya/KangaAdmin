<template>
  <div class="relative select-none" ref="customSelect">
    <!-- default select  -->
    <div
      class="rounded-lg outline-none text-sm md:text-base flex items-center justify-between cursor-pointer"
      @click="toggleMenu"
      :class="
        selectedValue
          ? 'text-black-900 font-medium font-poppins'
          : 'text-disable'
      "
    >
      <span class="ellipsis">{{
        selectedValue
          ? selectedValue
          : placeholderValue
          ? placeholderValue
          : "Select item"
      }}</span>
      <img
        :src="icon"
        alt=""
        v-if="icon"
        class="w-5 h-5 md:w-6 md:h-6 duration-300"
        :class="isShowMenu ? '-rotate-180' : 'rotate-0'"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        class="w-5 h-5 md:w-6 md:h-6 duration-300"
        :class="isShowMenu ? '-rotate-180' : 'rotate-0'"
        v-else
      >
        <path
          d="M2.88508 6.9484C2.39508 7.4384 2.39508 8.2284 2.88508 8.7184L11.2951 17.1284C11.6851 17.5184 12.3151 17.5184 12.7051 17.1284L21.1151 8.7184C21.6051 8.2284 21.6051 7.4384 21.1151 6.9484C20.6251 6.4584 19.8351 6.4584 19.3451 6.9484L12.0051 14.2884L4.65508 6.9384C4.16508 6.4584 3.37508 6.4584 2.88508 6.9484Z"
          fill="#212121"
        />
      </svg>
    </div>
    <div
      class="overflow-hidden absolute w-full duration-200 z-50"
      ref="menuRef"
      :style="{
        maxHeight: isShowMenu ? '256px' : '0',
      }"
    >
      <div
        class="bg-white border border-t-0 left-0 rounded-lg max-h-64 overflow-auto custom-select"
      >
        <div class="py-2 px-4 text-gray-300">
          {{ placeholderValue }}
        </div>
        <div
          v-for="(item, index) in data"
          :key="index"
          class="py-2 px-4 hover:bg-gray-100 cursor-pointer duration-200 text-black-600"
          :class="
            checkActiveSelect(item[selectKey])
              ? 'bg-gray-100'
              : 'bg-transparent'
          "
          @click="() => handleSelect(item)"
        >
          {{ item[selectKey] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    selectKey: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    default: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Select Item",
    },
    icon: String,
    setSelectItem: Function,
  },
  data() {
    return {
      placeholderValue: "",
      isShowMenu: false,
      selectedValue: "",
    };
  },
  watch: {
    default(newValue) {
      this.setValues();
    },
  },
  mounted() {
    this.menuRef = this.$refs.menuRef;
    this.menuRef = this.$refs.customSelect;
    this.setValues();
    document.addEventListener("click", this.toggleDropdown);
  },
  methods: {
    toggleMenu() {
      this.isShowMenu = !this.isShowMenu;
    },
    checkActiveSelect(checkValue) {
      if (
        this.selectedValue &&
        checkValue &&
        this.selectedValue === checkValue
      ) {
        return true;
      } else {
        return false;
      }
    },
    handleSelect(selectValue) {
      const check = this.value ? this.value : this.selectKey;
      this.selectedValue = selectValue[this.selectKey];
      this.isShowMenu = false;
      this.setSelectItem(selectValue[check]);
    },
    toggleDropdown() {
      const dropdown = this.$el;
      if (!dropdown?.contains(event.target)) {
        this.isShowMenu = false;
      }
    },
    setValues() {
      this.placeholderValue = this.placeholder || "Select item";
      if (this.default) {
        const check = this.value ? this.value : this.selectKey;
        const findObj = this.data.find((item) => item[check] == this.default);
        if (findObj) {
          this.selectedValue = findObj[this.selectKey];
          this.setSelectItem(findObj[check]);
        }
      }
    },
    resetValue() {
      this.placeholderValue = "";
      this.isShowMenu = false;
      this.selectedValue = "";
    },
  },
  destroyed() {
    document.removeEventListener("click", this.toggleDropdown);
  },
};
</script>

<style>
.custom-select {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.custom-select::-webkit-scrollbar {
  width: 0;
}
</style>
