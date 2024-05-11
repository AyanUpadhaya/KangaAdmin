<template>
    <div class="p-[36.13px] rounded-[24px] bg-white">
      <div class="flex justify-between gap-[36px] items-center flex-wrap mb-[36px] ">
        <div class="font-semibold font-poppins text-black-900 text-base flex-1 ">
          Businesses Joined
        </div>
        <div class="flex-shrink-0 flex gap-[6px] items-center py-3 ">
          <span class="text-black-600 font-poppins">Showing: </span>
          <DaySelect
            :data="daysData"
            :selectKey="'value'"
            :default="selectedDay"
            :setSelectItem="handleDaySelection"
            :icon="arrowdrop"
          ></DaySelect>
        </div>
      </div>
      <div class="w-full">
        <BusinessesLinechart />
      </div>
    </div>
</template>

<script>
import { arrowdrop } from "../../../assets/getAssets.js";
import BusinessesLinechart from "../../charts/BusinessesLinechart.vue";
import DaySelect from "../../../components/elements/DaySelect.vue";

export default {
  data() {
    return {
     
      daysData: [
        { value: "Last 7 Days" },
        { value: "Last 30 Days" },
        { value: "Last 90 Days" },
      ],
      selectedDay: "Last 7 Days",

      arrowdrop,
    };
  },
  methods: {
    handleDaySelection(value) {
      this.selectedDay = value;
    },
  },
  components: {
    DaySelect,
    BusinessesLinechart,
  },
};
</script>