<template>
  <div class="w-full h-screen overflow-hidden">
    <div class="flex items-start h-full">
      <Sidebar
        :activeLink="activeLink"
        :setActive="setActive"
        :showSidebar="showSidebar"
        :handleSideBar="handleSideBar"
      ></Sidebar>

      <div class="h-full flex-1 w-full overflow-hidden">
        <Navbar :setShowSidebar="setShowSidebar"></Navbar>
        <div className="h-[calc(100%-50px)]  bg-appbackground p-6">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/shared/navbar/Navbar.vue";
import Sidebar from "../components/shared/sidebar/Sidebar.vue";

export default {
  data() {
    return {
      activeLink: "",
      showSidebar: true,
    };
  },
  beforeRouteEnter(to, from, next) {
    const activeLink = localStorage.getItem("activepath") || "";
    next((vm) => vm.redirect(activeLink));
  },
  methods: {
    setActive(value) {
      this.activeLink = value;
      localStorage.setItem("activepath", value);
    },
    getActivePath() {
      const path = localStorage.getItem("activepath");
      this.activeLink = path || "";
    },
    beforeRouteEnter(to, from, next) {
      const activeLink = localStorage.getItem("activepath") || "";
      next((vm) => vm.redirect(activeLink));
    },
    redirect(activeLink) {
      if (activeLink !== "") {
        this.$router.push({ path: `${activeLink=='/'?'':'/'}${activeLink}` });
      }
    },
    setShowSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    handleSideBar(){
      this.showSidebar = true
    }
  },
  mounted() {
    this.getActivePath();
    this.redirect(this.activeLink);
  },
  components: { Sidebar, Navbar },
};
</script>
