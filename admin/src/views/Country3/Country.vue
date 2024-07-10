<template>
  <!-- Layout wrapper -->
  <!-- <loading
    v-model:active="isLoading"
    :can-cancel="true"
    :on-cancel="onCancel"
    :is-full-page="fullPage"
  /> -->
  <div class="content-wrapper">
    <!-- <Search /> -->
    <!-- Content -->
    <div v-if="isDataTrue == true">
      <div v-if="isupdate">
        <div class="container-xxl flex-grow-1 container-p-y" v-if="iscomponent" >
          <div class="d-flex justify-content-between aling-items-center">
            <div>
              <h4 class="fw-bold py-3 mb-4">
                <span class="text-muted fw-light">Category</span>List
              </h4>
            </div>
            <div>
              <button class="btn btn-primary mt-2" @click="updateIsDataTrue">
                Add Category
              </button>
            </div>
          </div>
          <!-- Basic Layout & Basic with Icons -->
          <div class="row">
            <!-- Basic Layout -->
            <div class="col-md-12 col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <div class="table-responsive text-nowrap">
                      <List @data-emitted="receiveData"/>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- / Content -->
    <!-- Content -->
    <div class="container-xxl flex-grow-1 container-p-y" v-if="!isupdate">
      <div class="d-flex justify-content-between aling-items-center">
        <div>
          <h4 class="fw-bold py-3 mb-4">
            <span class="text-muted fw-light">Update</span>Category
          </h4>
        </div>
        <div>
          <button class="btn btn-primary mt-2" @click="showForm">
            Category List
          </button>
        </div>
      </div>

      <!-- Basic Layout & Basic with Icons -->
      <form name="">
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
                          placeholder="Category title"
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
                          placeholder="Category alias."
                        />
                      </div>
                    </div>
                  </div>
                  <CkEditor value="demo data"></CkEditor>
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
                <div class="Category-image">
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
                <div class="mb-3">
                  <label for="defaultSelect" class="form-label"
                    >Default select</label
                  >
                  <select id="defaultSelect" class="form-select">
                    <option>Default select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
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
    <!-- / Content -->
      
    <!-- Content  -->
        <!-- Button to show/hide Form component v-if="isDataTrue == true"-->

    <AddForm :isDataTrue="isDataTrue" @updateIsDataTrue="updateIsDataTrue" v-else />
    
    <!-- / Content -->
    <EditForm :received-data="receivedData|| {}" @update-is-data-true="handleUpdateDataEdit" />
    <!-- Footer -->
    <p>Received isDataTrueList in Parent Component: {{ receivedIsDataTrueList  }}</p>
    <p>Received id in Parent Component: {{ receivedId }}</p>
    <footer class="content-footer footer bg-footer-theme">
      <div
        class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column"
      >
        <div class="mb-2 mb-md-0">
          ©
          <!-- <script>
                    document.write(new Date().getFullYear());
                  </script> -->
          , made with ❤️ by
          <a
            href="https://themeselection.com"
            target="_blank"
            class="footer-link fw-bolder"
            >ThemeSelection</a
          >
        </div>
        <div>
          <a
            href="https://themeselection.com/license/"
            class="footer-link me-4"
            target="_blank"
            >License</a
          >
          <a
            href="https://themeselection.com/"
            target="_blank"
            class="footer-link me-4"
            >More Themes</a
          >

          <a
            href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
            target="_blank"
            class="footer-link me-4"
            >Documentation</a
          >

          <a
            href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
            target="_blank"
            class="footer-link me-4"
            >Support</a
          >
        </div>
      </div>
    </footer>
    <!-- / Footer -->

    <div class="content-backdrop fade"></div>
  </div>
  <!-- / Layout wrapper -->
  <!-- <div>
    <h1>Site Info</h1>
    <div class="" v-for="post in siteInfoData" :key="post.id">
      <p>ID: {{ post.id }}</p>
      <p>Title: {{ post.title }}</p>
      <p>alias: {{ post.alias }}</p>
      <p>Description: {{ post.description }}</p>
      <p>Status: {{ post.status }}</p>
      <button @click="deleteItem(post.id)" class="btn btn-danger">
        Delete
      </button>
    </div>
  </div>
  <form @submit.prevent="handleSubmit">
    <input
      v-model="formData.title"
      type="text"
      name="title"
      placeholder="Title"
      required
    />
    <input
      v-model="formData.alias"
      type="text"
      name="alias"
      placeholder="alias"
    />
    <textarea
      v-model="formData.description"
      name="description"
      placeholder="Description"
      type="text"
    ></textarea>
    <select v-model="formData.status" name="status" required>
      <option value="">-- Select Status --</option>
      <option value="1">Active</option>
      <option value="0">Inactive</option>
    </select>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form> -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import ThemMenu from "../components/Navbar.vue";
// import Search from "../components/Search.vue";
import List from "./Components/List.vue";
import AddForm from "./Components/Form.vue";
import EditForm from "./Components/EditForm.vue";
import { category, createData, updateData, deleteData } from "@/api";
// import { formToJSON } from "../../../node_modules/axios/index";

export default defineComponent({
  components: { List, AddForm, EditForm },
  name: "category_setting",
  data() {
    return {
      siteInfoData: [],
      formData: {
        title: "",
        alias: "",
        description: "",
        meta_des: "",
        meta: "",
      },
      pageList: [
        {
          id: 1,
          title: "Communication",
          key: "589",
          template: "#contact_us",
        },
        {
          id: 2,
          title: "Privacy",
          key: "589",
          template: "#contact_us",
        },
        {
          id: 3,
          title: "About Us",
          key: "589",
          template: "#contact_us",
        },
        {
          id: 4,
          title: "Terms Conditon",
          key: "589",
          template: "#contact_us",
        },
      ],
      deletevalue: {
        id: "",
        title: "",
      },
      iscomponent: true,
      isupdate: true,
      isLoading: false,
      fullPage: true,
      isdata: true,
      isDataTrue: true, // Data you want to pass
      receivedData: null,
      isDataTrueList: Boolean,
      receivedIsDataTrueList: Boolean,
      receivedId: null,
      isFormVisible: false,
    };
  },

  async created() {
    // show the loading overlay
    this.isdata = true;
    this.siteInfoData = await category();
    //console.log(this.siteInfoData);
    // hide the loading overlay
    this.isdata = false;
  },

  methods: {
    // async deleteData(id: string) {
    //   if (confirm("Are you sure you want to delete this item?")) {
    //     try {
    //       await deleteData(parseInt(id));
    //       alert("Data deleted successfully");
    //       // Reload page to get updated data
    //       location.reload();
    //     } catch (error) {
    //       alert("Error occurred while deleting data");
    //       console.error(error);
    //     }
    //   }
    // },

    updateIsDataTrue() {
      this.isDataTrue = !this.isDataTrue;
      console.log(this.isDataTrue)
    },
    chageUpdaegt(alldata: any) {
      this.isupdate = !this.isupdate;
      console.log(alldata);
    },
    showForm() {
      // Define the functionality of the showForm method here
      // For example, you can toggle a boolean property to show or hide the form
      // Replace 'isFormVisible' with the appropriate boolean property in your component
      this.isFormVisible = !this.isFormVisible;
    },
    async showLoadingOverlay() {
      try {
        // show the loading overlay
        this.isLoading = true;

        // wait for the component to render
        await this.$nextTick();

        // hide the loading overlay
        this.isLoading = false;
      } catch (error) {
        console.error(error);
      }
    },
    receiveData(data: null) {
      this.receivedData = data;
      console.log(data);
    },
    handleUpdateDataEdit(data: any) {
      this.receivedIsDataTrueList = data.isDataTrueList;
      this.receivedId = data.id;
      console.log(this.receivedIsDataTrueList, this.receivedId);
    },

  },

  mounted() {
    // Set isLoading to true when the component is mounted
    //this.showLoadingOverlay();
  },

});
</script>