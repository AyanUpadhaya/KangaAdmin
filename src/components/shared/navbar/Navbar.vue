<template>
  <div class="navbar py-4 px-6 bg-white">
    <div class="flex-1">
      <button class="" @click="setShowSidebar">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
            fill="#212121"
          />
        </svg>
      </button>
    </div>

    <div className="hidden lg:block lg:mr-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="22"
        viewBox="0 0 2 22"
        fill="none"
      >
        <path d="M1 0.5L0.999999 21.5" stroke="#E0E0E0" strokeLinecap="round" />
      </svg>
    </div>

    <div class="flex-none gap-2 flex items-start">
      <div class="dropdown dropdown-end">
        <label
          tabindex="0"
          class="flex items-center gap-3 cursor-pointer"
          @click="setShowMenu(true)"
        >
          <div class="w-10 h-10 rounded-full">
            <img v-if="profile.isLoading" :src="circle" />
            <img v-else :src="boy" class="w-10 h-10 rounded-full" />
          </div>
          <div class="flex gap-3 items-center">
            <div class="flex flex-col">
              <h5
                class="font-poppins text-sm font-semibold text-black-900 leading-5"
              >
                {{ profile.isLoading ? "..." : profile?.name || "" }}
              </h5>
              <p
                class="font-poppins text-sm font-normal text-black-600 leading-5 capitalize"
              >
                {{
                  profile.isLoading ? "..." : profile?.name ? "Super Admin" : ""
                }}
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.8751 9.00002L11.9951 12.88L8.1151 9.00002C7.7251 8.61002 7.0951 8.61002 6.7051 9.00002C6.3151 9.39002 6.3151 10.02 6.7051 10.41L11.2951 15C11.6851 15.39 12.3151 15.39 12.7051 15L17.2951 10.41C17.6851 10.02 17.6851 9.39002 17.2951 9.00002C16.9051 8.62002 16.2651 8.61002 15.8751 9.00002Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </label>
        <ul
          tabindex="0"
          class="mt-3 z-[1] p-4 shadow dropdown-content bg-base-100 w-[200px] rounded-lg"
          v-if="showMenu"
        >
          <li class="w-full py-3 px-4 border-b border-b-neutral-300">
            <router-link
              to="/profile"
              class="bg-transparent py-2 flex gap-4"
              @click="setShowMenu(false)"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.5 8C15.5 9.93386 13.9339 11.5 12 11.5C10.0661 11.5 8.5 9.93386 8.5 8C8.5 6.06614 10.0661 4.5 12 4.5C13.9339 4.5 15.5 6.06614 15.5 8ZM4.5 18C4.5 17.5186 4.73716 17.06 5.21364 16.6202C5.69352 16.1773 6.38208 15.7882 7.18469 15.4666C8.79071 14.8233 10.7275 14.5 12 14.5C13.2725 14.5 15.2093 14.8233 16.8153 15.4666C17.6179 15.7882 18.3065 16.1773 18.7864 16.6202C19.2628 17.06 19.5 17.5186 19.5 18V19C19.5 19.2739 19.2739 19.5 19 19.5H5C4.72614 19.5 4.5 19.2739 4.5 19V18Z"
                    fill="black"
                    stroke="#1B1B1B"
                  />
                </svg>
              </span>
              <span class="text-base text-black-900 font-poppins">
                My Profile
              </span>
            </router-link>
          </li>
          <li class="w-full py-3 px-4">
            <label
              class="bg-transparent py-2 flex gap-4 cursor-pointer"
              @click="logout"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5.10425 5H11.1042C11.6542 5 12.1042 4.55 12.1042 4C12.1042 3.45 11.6542 3 11.1042 3H5.10425C4.00425 3 3.10425 3.9 3.10425 5V19C3.10425 20.1 4.00425 21 5.10425 21H11.1042C11.6542 21 12.1042 20.55 12.1042 20C12.1042 19.45 11.6542 19 11.1042 19H5.10425V5Z"
                    fill="#FF5252"
                  />
                  <path
                    d="M20.7542 11.65L17.9642 8.86C17.6442 8.54 17.1042 8.76 17.1042 9.21V11H10.1042C9.55425 11 9.10425 11.45 9.10425 12C9.10425 12.55 9.55425 13 10.1042 13H17.1042V14.79C17.1042 15.24 17.6442 15.46 17.9542 15.14L20.7442 12.35C20.9442 12.16 20.9442 11.84 20.7542 11.65Z"
                    fill="#FF5252"
                  />
                </svg>
              </span>
              <span class="text-base font-poppins text-error-200">
                Log Out
              </span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { profileDummy,boy,circle } from "../../../assets/getAssets.js";
export default {
  data() {
    return {
      showMenu: false,
      profile: {
        isLoading: false,
        name: "John Doe", // Replace with actual data
        img: "path/to/profile/image.jpg", // Replace with actual data
      },
      profileDummy,
      boy,
      circle
    };
  },
  methods: {
    setShowMenu(value) {
      this.showMenu = value;
    },
    handleLocalstore(param) {
      // Implement your logic for handling local store
    },
    handleLoggingOutModal() {
      // Implement your logic for handling logging out modal
    },
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
  props: {
    setShowSidebar: Function,
  },
};
</script>

<style scoped></style>
