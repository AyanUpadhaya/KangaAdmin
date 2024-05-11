<template>
  <section class="h-full overflow-hidden">
    <BackPrev :title="'Edit Category'" :path="'/service-category'"></BackPrev>

    <div class="max-h-[calc(100vh-180px)] overflow-auto">
      <div class="bg-white p-6 rounded-2xl">
        <form class="flex flex-col gap-8">
          <div class="grid grid-cols-1 gap-8">
            <!-- Category Name -->
            <div class="flex-1 flex flex-col gap-2">
              <span class="text-sm font-poppins font-nomral text-black-medium-emp">
                Category Name
              </span>
              <input
                type="text"
                name="categoryName"
                v-model="categoryName"
                class="font-poppins py-3 px-4 border border-neutral-300 rounded-lg outline-none leading-6 text-black-900"
                placeholder="Enter category name"
                @input="handleCategoryNameChange"
              />
            </div>
          </div>

          <!-- Image -->
          <div class="max-w-full md:max-w-[48%]">
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
              @click="navigateToCategories"
            >
              Close
            </button>

            <button
              type="button"
              @click="handleSuccessModal"
              :disabled="isLoading"
              class="  h-full  disabled:bg-btndisabled btn-primary py-4 px-10 rounded-xl text-white capitalize flex justify-center items-center font-semibold text-base font-poppins"
            >
              <span
                v-if="isLoading"
                class="loading loading-dots loading-sm"
              ></span>
              <span v-else>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <SuccessModal
      :handleStatus="handleSuccessModal"
      :isChecked="isSuccess"
      description="Category was updated successfully"
      path="/service-category"
    ></SuccessModal>
  </section>
</template>

<script>
import ImageUploader from "../components/elements/ImageUploader.vue";
import BackPrev from "../components/shared/back/BackPrev.vue";
import SuccessModal from "../components/modals/SuccessModal.vue";

export default {
  components: {
    ImageUploader,
    BackPrev,
    SuccessModal,
  },
  data() {
    return {
      isSuccess: false,
      file: null,
      isFileEmpty: true,
      categoryTags: [],
      categoryName: "",
      isFormEdited: false,
      inputValue: "",
      isLoading: false,
    };
  },
  computed: {
    categories() {
      // Assuming that the categories data is obtained through Vuex
      return this.$store.state.categories;
    },
  },
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
    navigateToCategories() {
      this.$router.push("/service-category");
    },
  },
};
</script>
