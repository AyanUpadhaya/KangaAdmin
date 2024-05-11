<template>
  <section class="h-full overflow-hidden">
    <BackPrev :title="'Create Agent'" :path="'/agents'"></BackPrev>

    <div class="max-h-[calc(100vh-180px)] overflow-auto">
      <div class="bg-white p-6 rounded-2xl">
        <form class="flex flex-col gap-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Agent Name -->
            <div class="flex-1 flex flex-col gap-2">
              <span
                class="text-sm font-poppins font-nomral text-black-medium-emp"
              >
                Agent Name
              </span>
              <input
                type="text"
                name="agentName"
                class="font-poppins text-black-900 py-3 px-4 border border-neutral-300 rounded-lg outline-none leading-6"
                placeholder="Enter agent name"
              />
            </div>

            <!-- Agent Type -->
            <div class="flex-1 flex flex-col gap-2">
              <span
                class="text-sm font-poppins font-nomral text-black-medium-emp"
              >
                Agent Type
              </span>
              <Select
                :data="agents"
                :placeholder="'Select Type'"
                :selectKey="'role'"
                :default="selectedType"
                :setSelectItem="handleSelectAgentType"
                :icon="arrowdrop"
              ></Select>
            </div>
            <!-- Agent Email -->
            <div class="flex-1 flex flex-col gap-2">
              <span
                class="text-sm font-poppins font-nomral text-black-medium-emp"
              >
                Email
              </span>
              <input
                type="email"
                name="email"
                class="font-poppins text-black-900 py-3 px-4 border border-neutral-300 rounded-lg outline-none leading-6"
                placeholder="Enter agent email"
              />
            </div>
            <!-- password -->
            <div class="flex-1 flex flex-col gap-2">
              <span
                class="text-sm font-poppins font-nomral text-black-medium-emp"
              >
                Password
              </span>
              <PasswordInput
                :placeholder="'*****'"
                :name="'password'"
                :setInputValue="handlePassword"
              ></PasswordInput>
            </div>
          </div>

          <!-- Image -->
          <div class="w-full lg:w-[48%]">
            <ImageUploader
              :handleFileChange="handleFileChange"
              :identifier="'categoryImage'"
            ></ImageUploader>
          </div>

          <!-- Buttons -->
          <div class="flex gap-6 items-center">
            <button
              for="cancelPopup"
              class="btn h-14 w-[126px] px-10 py-4 rounded-xl bg-yellow hover:bg-yellow disabled:bg-red-300 border-none text-white font-poppins text-base font-semibold cursor-pointer"
              :disabled="isLoading"
              @click="navigateToSubCategories"
            >
              Close
            </button>

            <button
              type="button"
              @click="handleSuccessModal"
              :disabled="isLoading"
              class="w-1/2 md:w-[113px] h-full disabled:bg-btndisabled btn-primary py-4 px-10 rounded-xl text-white capitalize flex justify-center items-center font-semibold text-base font-poppins"
            >
              <span
                v-if="isLoading"
                class="loading loading-dots loading-sm"
              ></span>
              <span v-else>Save</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <SuccessModal
      :handleStatus="handleSuccessModal"
      :isChecked="isSuccess"
      description="Creating agent was successfull"
      path="/agents"
    ></SuccessModal>
  </section>
</template>

<script>
import { arrowdrop } from "../assets/getAssets.js";
import ImageUploader from "../components/elements/ImageUploader.vue";
import BackPrev from "../components/shared/back/BackPrev.vue";
import SuccessModal from "../components/modals/SuccessModal.vue";
import Select from "../components/elements/Select.vue";
import PasswordInput from "../components/elements/PasswordInput.vue";
export default {
  components: {
    ImageUploader,
    BackPrev,
    SuccessModal,
    Select,
    PasswordInput,
  },
  data() {
    return {
      isSuccess: false,
      file: null,
      isFileEmpty: true,
      password: "",
      agents: [
        {
          _id: "1",
          role: 'Admin',
 
        },
        {
          _id: "2",
          role: 'Moderator',
        },
        
      ],
      isFormEdited: false,
      inputValue: "",
      isLoading: false,
      selectedType: "",
      arrowdrop
    };
  },
  // computed: {
  //   categories() {
  //     // Assuming that the categories data is obtained through Vuex
  //     return this.$store.state.categories;
  //   },
  // },
  methods: {
    handleChange(e) {
      this.inputValue = e.target.value;
      this.isFormEdited = true;
    },
    isDuplicateTag(tag) {
      return this.categoryTags.includes(tag);
    },
    handleKeyDown(e) {
      if (e.key === "Enter" && this.inputValue.trim() !== "") {
        const newTag = this.inputValue.trim();

        if (!this.isDuplicateTag(newTag)) {
          // Add the tag to the categoryTags state
          this.categoryTags = [...this.categoryTags, newTag];
          this.inputValue = "";
          this.isFormEdited = true;
        } else {
          toast.error("Duplicate tags are not allowed", {
            position: "top-right",
            duration: 2500,
            pauseOnHover: true,
            draggable: true,
            hideProgressBar: false,
            theme: "colored",
          });
        }

        e.target.value = "";
        e.preventDefault();
      }
    },
    handleCategoryNameChange(e) {
      this.categoryName = e.target.value;
      this.isFormEdited = true;
    },
    handleDelete(index) {
      // Remove the tag at the specified index from the categoryTags state
      this.categoryTags = this.categoryTags.filter((_, i) => i !== index);
      this.isFormEdited = true;
    },
    handleFileChange(file) {
      if (
        file?.type === "image/jpg" ||
        file?.type === "image/jpeg" ||
        file?.type === "image/png"
      ) {
        this.file = file;
        this.isFileEmpty = false;
        this.isFormEdited = true;
      } else {
        this.file = null;
        this.isFileEmpty = true;
        this.isFormEdited = true;
      }
    },

    handleSuccessModal(e) {
      e.preventDefault();
      this.isSuccess = true;
    },
    navigateToSubCategories() {
      this.$router.push("/agents");
    },
    handleSelectAgentType(value) {
      this.selectedType = value;
    },

    handlePassword(value) {
      this.password = value;
    },
  },
};
</script>
