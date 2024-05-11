<template>
  <section
    class="h-screen bg-whiteLow bgAuth flex flex-col items-center justify-center w-full"
  >
    <div class="flex flex-col">
      <div class="text-center mb-10">
        <h4 class="text-3xl text-primaryMain">Welcome back!</h4>
        <h1 class="text-5xl text-pureBlackColor font-bold">
          Login to continue
        </h1>
      </div>
      <div
        class="flex items-center justify-center py-12 px-10 bg-white shadow-md shadow-whiteLow rounded-lg w-[476px]"
      >
        <form class="flex flex-col w-full gap-4" @submit.prevent="login" >
          <!-- Email Address -->
          <div class="flex flex-col gap-1">
            <span class="text-blackHigh">Email</span>
            <input
              type="email"
              placeholder="Enter your email address"
              v-model="email"
              required
              class="w-full border border-slateLow rounded-lg outline-none p-4"
      
            />
          </div>
          <!-- Password -->
          <div class="flex flex-col gap-1">
            <span class="text-blackHigh">Password</span>
            <PasswordField
              :name="'password'"
              :placeholder="'Enter your password'"
              :setInputValue="handleCurrentPassword"
            ></PasswordField>
          </div>

          <button
            class="btn-primary h-[60px] py-4 normal-case mt-4 mb-6 rounded-lg bg-basecolor hover:bg-basecolor disabled:bg-btndisabled text-white font-semibold"
            type="submit"
            :disabled="isLoading"
          
          >
            <span
              v-if="isLoading"
              class="loading loading-dots loading-xs"
            ></span>
            <span v-else>Login</span>
          </button>

          <div class="text-center">
            <router-link to="/" class="text-lg font-medium">
              Forget Password?
            </router-link>
            <p class="my-3">
              Don't Have an account,
              <router-link to="/register" class="text-slate-500 font-semibold">
                Register
              </router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import PasswordField from "../../components/elements/PasswordField.vue";

export default {
  components: {
    PasswordField,
  },
  data() {
    return {
      email: "",
      password: "",
      isShowIcon:false,
      isLoading:false
    };
  },
  methods: {
    handleCurrentPassword(value) {
      this.password = value;
    },
    handleEmail(value) {
      this.email = value;
    },
    login() {
      this.$store.dispatch('auth/login', { email: this.email, password: this.password })
        .then(() => {
          this.$router.push('/');
        })
        .catch((error) => {
          console.error('Login error:', error);
        });
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
