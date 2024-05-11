<template>
  <div class="h-full overflow-hidden">
    <BackPrev
      :title="'Withdraw Details'"
      :path="'/withdraw-history'"
    ></BackPrev>
    <div class="h-[calc(100%-50px)] overflow-auto">
      <div class="flex flex-col w-full bg-white rounded-2xl p-6 overflow-auto">
        <form class="w-full flex-1 flex flex-col gap-6">
          <!-- form -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Business Name -->
            <div class="flex-1 flex flex-col gap-2">
              <span
                class="text-sm font-poppins font-nomral text-black-medium-emp"
              >
                Business Name
              </span>
              <input
                type="text"
                value="Mahee"
                disabled
                class="font-poppins text-black-900 disabled:bg-[#eee] py-3 px-4 border border-neutral-300 rounded-lg outline-none leading-6"
              />
            </div>
            <!-- Email-->
            <div class="flex-1 flex flex-col gap-2">
              <span
                class="text-sm font-poppins font-nomral text-black-medium-emp"
              >
                Email
              </span>
              <input
                type="email"
                value="mahimakhtum@gmail.com"
                disabled
                class="font-poppins text-black-900 disabled:bg-[#eee] py-3 px-4 border border-neutral-300 rounded-lg outline-none leading-6"
              />
            </div>
            <!-- Phone Number -->
            <div class="flex-1 flex flex-col gap-2">
              <span
                class="text-sm font-poppins font-nomral text-black-medium-emp"
              >
                Phone Number
              </span>
              <input
                type="text"
                value="+1 312-393-2634"
                disabled
                class="font-poppins text-black-900 disabled:bg-[#eee] py-3 px-4 border border-neutral-300 rounded-lg outline-none leading-6"
              />
            </div>
            <!-- amount -->
            <div class="flex-1 flex flex-col gap-2">
              <span
                class="text-sm font-poppins font-nomral text-black-medium-emp"
              >
                Amount
              </span>
              <input
                type="text"
                value="$250"
                disabled
                class="font-poppins text-black-900 disabled:bg-[#eee] py-3 px-4 border border-neutral-300 rounded-lg outline-none leading-6"
              />
            </div>
            <!-- Account Holder Name -->
            <div class="flex-1 flex flex-col gap-2">
              <span
                class="text-sm font-poppins font-nomral text-black-medium-emp"
              >
                Account Holder Name
              </span>
              <input
                type="text"
                value="Kanga LLC"
                disabled
                class="font-poppins text-black-900 disabled:bg-[#eee] py-3 px-4 border border-neutral-300 rounded-lg outline-none leading-6"
              />
            </div>
            <!-- Account Number -->
            <div class="flex-1 flex flex-col gap-2">
              <span
                class="text-sm font-poppins font-nomral text-black-medium-emp"
              >
                Account Number
              </span>
              <input
                type="text"
                value="2541 5844 6352 1145"
                disabled
                class="font-poppins text-black-900 disabled:bg-[#eee] py-3 px-4 border border-neutral-300 rounded-lg outline-none leading-6"
              />
            </div>
            <!-- Account Type -->
            <div class="flex-1 flex flex-col gap-2">
              <span
                class="text-sm font-poppins font-nomral text-black-medium-emp"
              >
                Account Type
              </span>
              <input
                type="text"
                value="SAVINGS"
                disabled
                class="font-poppins text-black-900 disabled:bg-[#eee] py-3 px-4 border border-neutral-300 rounded-lg outline-none leading-6"
              />
            </div>
            <!-- Bank Name -->
            <div class="flex-1 flex flex-col gap-2">
              <span
                class="text-sm font-poppins font-nomral text-black-medium-emp"
              >
                Bank Name
              </span>
              <input
                type="text"
                value="Banks of America"
                disabled
                class="font-poppins text-black-900 disabled:bg-[#eee] py-3 px-4 border border-neutral-300 rounded-lg outline-none leading-6"
              />
            </div>
            <!-- Routing Number / SWIFT Number/BIC -->
            <div class="flex-1 flex flex-col gap-2">
              <span
                class="text-sm font-poppins font-nomral text-black-medium-emp"
              >
                Routing Number / SWIFT Number/BIC
              </span>
              <input
                type="text"
                value="SSDGFR"
                disabled
                class="font-poppins text-black-900 disabled:bg-[#eee] py-3 px-4 border border-neutral-300 rounded-lg outline-none leading-6"
              />
            </div>
            <!-- Status -->
            <div class="flex-1 flex flex-col gap-2">
              <span
                class="text-sm font-poppins font-nomral text-black-medium-emp"
              >
                Status
              </span>
              <input
                type="text"
                value="Completed"
                disabled
                class="font-poppins text-black-900 disabled:bg-[#eee] py-3 px-4 border border-neutral-300 rounded-lg outline-none leading-6"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BackPrev from "../components/shared/back/BackPrev.vue";
import { profileDummy } from "../assets/getAssets.js";
import { arrowdrop } from "../assets/getAssets.js";
import Select from "../components/elements/Select.vue";
export default {
  data() {
    return {
      profileDummy,
      arrowdrop,
      selectedStatus: "",
      statusData: [
        {
          _id: "1",
          status: "Processing ",
        },
        {
          _id: "2",
          status: "Completed",
        },
      ],
    };
  },
  components: {
    BackPrev,
    Select,
  },
  methods: {
    navigateToWithDrawHistory() {
      this.$router.push("/withdraw-history");
    },
    handleSelectedStatus(value) {
      this.selectedStatus = value;
    },
  },
};
</script>

<style scoped></style>
