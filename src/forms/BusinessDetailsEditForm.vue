<template>
  <div class="h-full overflow-hidden">
    <BackPrev :title="'Business Details'" :path="'/businesses'"></BackPrev>
    <div
      class="flex flex-col w-full bg-white rounded-2xl p-6 h-[calc(100%-50px)] overflow-auto"
    >
      <form class="w-full flex-1 flex flex-col gap-6">
        <!-- name and image -->
        <div>
          <!-- user image -->
          <div class="relative max-w-max">
            <div class="flex flex-col gap-6">
              <span
                class="text-xl font-bold font-poppins font-nomral text-black-medium-emp"
              >
                Business
              </span>

              <img
                :src="profileDummy"
                alt=""
                class="w-[120px] h-[120px] rounded-full bg-center object-cover"
              />
            </div>
          </div>
        </div>

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
          <!-- Website -->
          <div class="flex-1 flex flex-col gap-2">
            <span
              class="text-sm font-poppins font-nomral text-black-medium-emp"
            >
              Website
            </span>
            <input
              type="text"
              value="business.com"
              disabled
              class="font-poppins text-black-900 disabled:bg-[#eee] py-3 px-4 border border-neutral-300 rounded-lg outline-none leading-6"
            />
          </div>
          <!-- Category -->
          <div class="flex-1 flex flex-col gap-2">
            <span
              class="text-sm font-poppins font-nomral text-black-medium-emp"
            >
              Category
            </span>
            <input
              type="text"
              value="Short Video"
              disabled
              class="font-poppins text-black-900 disabled:bg-[#eee] py-3 px-4 border border-neutral-300 rounded-lg outline-none leading-6"
            />
          </div>
          <!-- S -->
          <div class="flex-1 flex flex-col gap-2">
            <span
              class="text-sm font-poppins font-nomral text-black-medium-emp"
            >
              S
            </span>
            <input
              type="text"
              value="15"
              disabled
              class="font-poppins text-black-900 disabled:bg-[#eee] py-3 px-4 border border-neutral-300 rounded-lg outline-none leading-6"
            />
          </div>
          <!-- Package -->
          <div class="flex-1 flex flex-col gap-2">
            <span
              class="text-sm font-poppins font-nomral text-black-medium-emp"
            >
              Package
            </span>
            <input
              type="text"
              value="TRIAL"
              disabled
              class="font-poppins text-black-900 disabled:bg-[#eee] py-3 px-4 border border-neutral-300 rounded-lg outline-none leading-6"
            />
          </div>
          <!-- Booking -->
          <div class="flex-1 flex flex-col gap-2">
            <span
              class="text-sm font-poppins font-nomral text-black-medium-emp"
            >
              Booking
            </span>
            <input
              type="text"
              value="352"
              disabled
              class="font-poppins text-black-900 disabled:bg-[#eee] py-3 px-4 border border-neutral-300 rounded-lg outline-none leading-6"
            />
          </div>
          <!-- Earned -->
          <div class="flex-1 flex flex-col gap-2">
            <span
              class="text-sm font-poppins font-nomral text-black-medium-emp"
            >
              Earned
            </span>
            <input
              type="text"
              value="$2500"
              disabled
              class="font-poppins text-black-900 disabled:bg-[#eee] py-3 px-4 border border-neutral-300 rounded-lg outline-none leading-6"
            />
          </div>
          <!-- Withdrawn -->
          <div class="flex-1 flex flex-col gap-2">
            <span
              class="text-sm font-poppins font-nomral text-black-medium-emp"
            >
              Withdrawn
            </span>
            <input
              type="text"
              value="$2400"
              disabled
              class="font-poppins text-black-900 disabled:bg-[#eee] py-3 px-4 border border-neutral-300 rounded-lg outline-none leading-6"
            />
          </div>
        </div>
        <div class="flex gap-6 items-center">
          <button
            class="btn h-14 w-[126px] px-10 py-4 rounded-xl bg-yellow disabled:bg-red-300 hover:bg-red-400 border-none text-white font-poppins text-base font-semibold cursor-pointer"
            @click="navigateToBusinesses"
          >
            Close
          </button>

          <button
            type="button"
            class="h-full disabled:bg-btndisabled btn-primary py-4 px-10 rounded-xl text-white capitalize flex justify-center items-center font-semibold text-base font-poppins"
          >
            <span>Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BackPrev from "../components/shared/back/BackPrev.vue";
import { profileDummy } from "../assets/getAssets.js";
export default {
  data() {
    return {
      profileDummy,
    };
  },
  components: {
    BackPrev,
  },
  methods: {
    navigateToBusinesses() {
      this.$router.push("/businesses");
    },
  },
};
</script>

<style scoped></style>
