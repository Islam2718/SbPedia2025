<template>
      <!-- <loading
    v-model:active="isLoading"
    :can-cancel="true"
    :on-cancel="onCancel"
    :is-full-page="fullPage"
  /> -->
    
     <div class="container-xxl flex-grow-1 container-p-y" v-if="isDataTrue == false">
      <p>hello this is category {{isDataTrue}}</p>
      <div class="d-flex justify-content-between aling-items-center">
        <div>
          <h4 class="fw-bold py-3 mb-4">
            <span class="text-muted fw-light">Add</span>Category
          </h4>
        </div>
        <div>

          <button class="btn btn-primary mt-2" @click="updateIsDataTrue">
            Category List
          </button>
        </div>
      </div>
<!-- <p>Child Component - isDataTrue: {{ isDataTrue }}</p> -->
      <!-- Basic Layout & Basic with Icons -->
      <form name="" @submit.prevent="handleSubmit">
        <div class="row">
          <!-- Basic Layout -->
          <div class="col-md-8 col-sm-12">
            <div class="card">
              <div class="card-body">
                <div class="card-body">
                  <div class="row mb-3">
                    <label
                      class="col-sm-12 col-form-label"
                      for="basic-icon-default-fullname"
                      >Category Title</label
                    >
                    <div class="col-sm-12">
                      <div class="input-group input-group-merge">
                        <span
                          id="basic-icon-default-fullname2"
                          class="input-group-text"
                          ><i class="bx bx-buildings"></i
                        ></span>
                        <input
                          type="text"
                          class="form-control"
                          id="basic-icon-default-fullname"
                          placeholder="Page title"
                          v-model="formData.title"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label
                      class="col-sm-12 col-form-label"
                      for="basic-icon-default-company"
                      >Ulr/Slug
                    </label>
                    <div class="col-sm-12">
                      <div class="input-group input-group-merge">
                        <span
                          id="basic-icon-default-company2"
                          class="input-group-text"
                          ><i class="bx bx-buildings"></i
                        ></span>
                        <input
                          type="text"
                          id="basic-icon-default-company"
                          class="form-control"
                          placeholder="Page alias."
                          v-model="formData.alias"
                        />
                      </div>
                    </div>
                  </div>
                  <CkEditor></CkEditor>
                  <div class="row mb-3">
                    <label
                      class="col-sm-12 col-form-label"
                      for="basic-icon-default-company"
                      >SEO</label
                    >
                    <div class="col-sm-12">
                      <div class="input-group input-group-merge">
                        <span
                          id="basic-icon-default-company2"
                          class="input-group-text"
                          ><i class="bx bx-buildings"></i
                        ></span>
                        <input
                          type="text"
                          id="basic-icon-default-company"
                          class="form-control"
                          placeholder="Site Slogan/Description !"
                          v-model="formData.description"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label
                      class="col-sm-12 form-label"
                      for="basic-icon-default-phone"
                      >Meta Description</label
                    >
                    <div class="col-sm-12">
                      <div class="input-group input-group-merge">
                        <span
                          id="basic-icon-default-company2"
                          class="input-group-text"
                          ><i class="bx bx-buildings"></i
                        ></span>
                        <input
                          type="text"
                          id="basic-icon-default-phone"
                          class="form-control phone-mask"
                          placeholder="Site Slogan/Description !"
                          v-model="formData.meta"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label
                      class="col-sm-12 col-form-label"
                      for="basic-icon-default-email"
                      >Meta Schema</label
                    >
                    <div class="col-sm-12">
                      <div class="input-group input-group-merge">
                        <span class="input-group-text"
                          ><i class="bx bx-envelope"></i
                        ></span>
                        <input
                          type="text"
                          id="basic-icon-default-email"
                          class="form-control"
                          placeholder="Enter Schema !"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="card">
              <div class="card-body">
                <div class="page-image">
                  <img
                    src="https://www.imageeditexpert.com/uploads/images/about/about.png"
                    alt="n/a"
                    class="slider-setting-img"
                  />
                </div>
                <div class="mb-3">
                  <label for="formFile" class="form-label">Image Choose</label>
                  <input class="form-control" type="file" id="formFile" />
                </div>
                <div class="row justify-content-end">
                  <div class="col-sm-12">
                    <button type="submit" class="btn btn-primary">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { category, createData } from "@/api";
export default defineComponent({
  name: "CategoryForm", // Rename the component to a multi-word name
    data() {
        return {
            siteInfoData: [],
            iscomponent: true,
            isupdate: true,
            isLoading: false,
            fullPage: false,
            isdata: true,
            formData: {
            title: "",
            alias: "",
            description: "",
            meta_des: "",
            meta: "", 
            },
            
        }
    },
  props: {
    isDataTrue: Boolean
  },
  methods: {
    async handleSubmit() {
      console.log("_my_form_data", this.formData);
      try {
        // show the loading overlay
        this.isLoading = true;
        // Create data
        console.log("_formData", this.formData);
        // const payload = ref()
        // payload.value = ...formData

        const response = await createData(this.formData);
        console.log("_response_cat_save", response);
        alert("Data created successfully");

        // Reload siteInfoData with updated data
        this.siteInfoData = await category();
        console.log("return responce");
        console.log(this.siteInfoData);
        // Clear form data
        this.formData.title = "";
        this.formData.description = "";
        this.formData.alias = "";
        this.formData.meta_des = "";
        this.formData.meta = "";
        // hide the loading overlay
        this.isLoading = false;
      } catch (error) {
        alert("Error occurred while submitting data");
        console.error(error);
      }
    },
    updateIsDataTrue() {
      // Modify the prop value and emit an event to return the modified value to the parent
      const modifiedValue = !this.isDataTrue;
      this.$emit('update-isDataTrue', modifiedValue);
      console.log(modifiedValue)
    }
  },
mounted() {
    // Set isLoading to true when the component is mounted
    //this.handleSubmit();
  },
})
</script>