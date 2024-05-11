<template>
  <section
    class="h-screen bgAuth bg-whiteLow flex flex-col items-center justify-center w-full"
  >
    <div class="flex flex-col">
      <div class="text-center mb-10">
        <h4 class="text-3xl text-primaryMain">Welcome back!</h4>
        <h1 class="text-5xl text-pureBlackColor font-bold">
          Register to continue
        </h1>
      </div>
      <div
        class="flex items-center justify-center py-4 px-10 bg-white shadow-md shadow-whiteLow rounded-lg w-[476px]"
      >
        <form class="flex flex-col w-full gap-4" @submit.prevent="handleSignup">
          <div class="flex flex-col gap-1">
            <span class="text-blackHigh">Username</span>
            <input
              type="text"
              placeholder="Enter your username"
              required
              name="username"
              class="w-full border border-slateLow rounded-lg outline-none p-4"
            />
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-blackHigh">Full Name</span>
            <input
              type="text"
              placeholder="Enter your full name"
              required
              name="name"
              class="w-full border border-slateLow rounded-lg outline-none p-4"
            />
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-blackHigh">Email</span>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              name="email"
              class="w-full border border-slateLow rounded-lg outline-none p-4"
            />
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-blackHigh">Password</span>
            <div>
              <PasswordField
                :name="'password'"
                :placeholder="'Enter your password'"
                :setInputValue="handleCurrentPassword"
              ></PasswordField>
              <p v-if="isStrong" class="text-xs text-fadeColor mt-1">
                Must contain more than 7 characters with uppercase, lowercase,
                symbol, and number
              </p>
            </div>
          </div>

          <div class="flex flex-col">
            <button
              class="btn-primary focus:outline-none h-[60px] py-4 normal-case mt-4 mb-6 rounded-lg bg-basecolor hover:bg-basecolor disabled:bg-btndisabled text-white font-semibold"
              type="submit"
              :disabled="isLoading"
            >
              <span
                v-if="isLoading"
                class="loading loading-dots loading-xs"
              ></span>
              <span v-else>Register</span>
            </button>
            <div class="text-center">
              Already Have an account
              <router-link to="/login" class="text-slate-500 font-semibold">
                Login
              </router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import PasswordField from "../../components/elements/PasswordField.vue";

export default {
  data() {
    return {
      isLoading: false,
      isShowPassword: true,
      password: "",
      isShowIcon: false,
      isStrong: false,
    };
  },
  components: {
    PasswordField,
  },
  methods: {
    setIsShowPassword(value) {
      this.password = value;
    },
    showPassword() {
      //show password logic
    },
    handleCurrentPassword(value) {
      this.password = value;
    },
  },
};
</script>

<style scoped>
.bgAuth{
  background-image: url('../../assets/images/bg.png') ;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
}
</style>
