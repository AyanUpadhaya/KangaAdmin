<template>
  <div class="w-full">
    <div class="w-full">
      <template v-if="label">
        <label class="font-normal text-sm font-poppins text-black-700">{{
          label
        }}</label>
      </template>
      <div :class="{ 'mt-4': label }">
        <div class="flex flex-col">
          <!-- placeholder -->
          <div
            class="w-full h-full rounded-xl flex justify-center items-center border-[1px] border-dashed border-spacing-2 border-basecolor mb-2"
          >
            <label
              :for="`file-${identifier}`"
              class="w-full p-4 text-white text-4xl font-extrabold flex flex-col justify-center items-center gap-4 rounded-full cursor-pointer"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <g clip-path="url(#clip0_2180_92465)">
                    <path
                      d="M48.0008 5.25C48.0008 17.75 48.0008 30.25 48.0008 42.75C47.9758 42.825 47.9258 42.8875 47.9133 42.9625C47.4758 45.4375 45.7133 47.3 43.2758 47.8625C43.1008 47.9 42.9258 47.95 42.7383 48C30.2383 48 17.7383 48 5.23828 48C5.16328 47.975 5.10078 47.9375 5.02578 47.9125C2.53828 47.475 0.688281 45.7125 0.125781 43.275C0.0882813 43.1 0.0382813 42.9125 -0.0117188 42.7375C0.00078125 30.25 0.00078125 17.75 0.00078125 5.25C0.0257813 5.1625 0.0757812 5.075 0.0882813 4.9875C0.575781 2.5625 2.01328 0.9875 4.35078 0.225C4.65078 0.1375 4.95078 0.075 5.25078 0C17.7508 0 30.2508 0 42.7508 0C42.8383 0.025 42.9258 0.075 43.0133 0.0875C44.8383 0.425 46.2633 1.375 47.1633 2.9875C47.5383 3.6875 47.7258 4.4875 48.0008 5.25ZM45.0008 21.9C45.0008 21.575 45.0008 21.4125 45.0008 21.25C45.0008 16.2875 45.0008 11.3125 45.0008 6.35C45.0008 4.2125 43.7883 3 41.6758 3C29.9008 3 18.1258 3 6.33828 3C4.21328 3 3.00078 4.2125 3.00078 6.35C3.00078 18.125 3.00078 29.9 3.00078 41.6875C3.00078 41.825 3.00078 41.975 3.00078 42.1125C3.03828 43.325 3.83828 44.4 4.97578 44.825C5.25078 44.925 5.41328 44.8875 5.61328 44.65C10.7758 38.525 15.9633 32.4125 21.1258 26.3C22.0008 25.275 22.8258 25.225 23.7758 26.175C27.3008 29.7 30.8258 33.225 34.3508 36.75C36.9758 39.375 39.6133 42 42.2258 44.6375C42.4883 44.9125 42.7133 44.95 43.0508 44.8125C43.7258 44.525 44.2383 44.0875 44.6133 43.4625C44.8133 43.125 44.7883 42.9125 44.4883 42.625C39.9258 38.0875 35.3758 33.5375 30.8133 28.9875C30.6883 28.8625 30.4883 28.7875 30.3258 28.6875C33.4383 25.1875 36.4008 21.8375 39.4008 18.4875C40.0133 17.8125 40.9258 17.825 41.6008 18.4875C42.3133 19.1875 43.0133 19.9 43.7258 20.6C44.1258 21 44.5133 21.4 45.0008 21.9Z"
                      fill="#1EC96B"
                    />
                    <path
                      d="M15.0135 22.5C10.876 22.5 7.50098 19.1375 7.50098 15C7.50098 10.85 10.8635 7.5 15.0135 7.5C19.1385 7.5 22.4885 10.85 22.501 14.975C22.5135 19.1125 19.151 22.4875 15.0135 22.5Z"
                      fill="#1EC96B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2180_92465">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span
                class="font-poppins text-black-medium-emp text-sm font-normal"
              >
                Click to
                <span class="text-basecolor font-semibold">Upload Image</span>
              </span>
            </label>
            <input
              :id="`file-${identifier}`"
              type="file"
              accept="image/*"
              ref="inputRef"
              multiple
              @change="handleImageChange"
              class="hidden"
            />
          </div>

          <div class="flex flex-col gap-2">
            <template v-if="selectedImage || fileName">
              <div class="flex flex-row items-center gap-2 mb-6">
                <div
                  class="flex-shrink-0 flex flex-col justify-center items-center"
                >
                  <button type="button" @click="handleDeleteImage">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" fill="#D0D0D0"/>
</svg>
                  </button>
                </div>
                <p class="font-poppins text-base text-black-medium-emp">
                  {{ selectedImage?.name || fileName }}
                </p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  props: {
    payload: String,
    label: String,
    identifier: String,
    handleFileChange: Function,
    isUploaded: Boolean,
  },
  data() {
    return {
      selectedImage: null,
      isLoading: false,
      fileName: "",
      inputRef: ref(null),
    };
  },
  methods: {
    handleImageChange(e) {
      const file = e.target.files[0];

      // Check if a file is selected
      if (file) {
        // Check if the file type is allowed
        const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
        if (allowedTypes.includes(file.type)) {
          // Update selected image
          this.selectedImage = file;
          this.handleFileChange(file);
        } else {
          this.$refs.inputRef.value = null;
        }
      }
    },
    handleDeleteImage() {
      // Clear selected image
      this.selectedImage = null;
      this.fileName = null;
      this.handleFileChange(null);
      this.$refs.inputRef.value = null;
    },
  },
  watch: {
    payload(newPayload) {
      if (newPayload) {
        const filePath = newPayload;
        const fileName = filePath.split("/").pop(); // Extracting the filename
        const cleanedFileName = fileName.split("_").slice(1).join("_"); // Remove everything before and including the underscore
        this.fileName = cleanedFileName;
      }
    },
    isUploaded(newIsUploaded) {
      if (newIsUploaded) {
        this.handleDeleteImage();
      }
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
