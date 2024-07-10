<template>  
   <div class="alert alert-success" v-if="successReport==true">Data Saved Successfully</div>
  <form name="" @submit.prevent="handleSubmit">
    <div class="row">
      <!-- Basic Layout -->
      <div class="col-md-8 col-sm-12">
        <div class="card mb-4">
          <div class="card-body">
              <div class="row mb-3">
                <label class="col-sm-12 col-form-label" for="basic-icon-default-fullname">Name</label>
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
                      placeholder="User name!"
                      v-model="formData.name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <label class="col-sm-12 col-form-label" for="basic-icon-default-fullname">Email</label>
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
                      placeholder="User email!"
                      v-model="formData.email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <label class="col-sm-12 col-form-label" for="basic-icon-default-fullname">Phone</label>
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
                      placeholder="Phone!"
                      v-model="formData.phone"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <label class="col-sm-12 col-form-label" for="basic-icon-default-fullname">Firstname</label>
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
                      placeholder="User firstname!"
                      v-model="formData.firstname"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <label class="col-sm-12 col-form-label" for="basic-icon-default-fullname">Last Name</label>
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
                      placeholder="User Lastname !"
                      v-model="formData.lastname"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <label class="col-sm-12 col-form-label" for="basic-icon-default-fullname">Type</label>
                <div class="col-sm-12">
                  <div class="input-group input-group-merge">
                    <span
                      id="basic-icon-default-fullname2"
                      class="input-group-text"
                      ><i class="bx bx-buildings"></i
                    ></span>
                    <select class="form-select" v-model="formData.type" >
                      <!-- select type -->
                      <option value="">-- Select User Type --</option>
                      <option value="USER">User</option>
                      <option value="ADMIN">Admin</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <!-- 8 end of col -->
      <div class="col-md-4 col-sm-12">
        <div class="card mb-4">
          <div class="card-body text-center">
            <div class="page-image text-center">
              <img v-if="formData.profile_img"
                  :src="'https://file.aaatradeinternational.com/'+ formData.profile_img"
                  alt="n/a"
                  class="slider-setting-img w-50 img-fluid"
              />
              <img v-else
                src="https://phicsart.com/uploads/images/top-page/menu/logo.svg"
                alt="n/a"
                class="slider-setting-img img-fluid"  style="width:30%;"
              />
              <input type="text" class="form-control" placeholder="Enter Text" v-model="formData.profile_img" />
            </div>
            
            <!-- <button class="btn btn-primary btn-sm mt-3" type="button" @click="toggleUploadModal" @setProfile_img="setProfile_img"> Select Image 100</button> -->
            <button class="btn btn-primary btn-sm mt-3" type="button" @click="toggleUploadModal"> Select Image </button>
          </div>
        </div>
        <div class="card">
            <button class="btn btn-primary" type="submit">Save & Publish</button>
        </div>
      </div>
      <UploadModal v-if="showuploadModal" @selectImage="handleSelectedImage" />
      <!-- 4 end of col -->
    </div>
  </form>
</template>
<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import UploadModal from '@/components/UploadModal.vue';

export default defineComponent({
  components:{
    UploadModal
  },
  name: "PageForm", // Rename the component to a multi-word name
  data() {
    const store = useStore();
    const token = store.state.auth.token || localStorage.getItem('token');
    return {
      store,
      token,
      pageId: '',
      selectedImage: null,
      // siteInfoData: [],
      successReport: false,
      failedReoprt: false,
      showuploadModal: false,
      formData: {
        id: Number,
        name: "",
        email: "",
        email_verified_at: "",
        phone: "",
        firstname: "",
        lastname: "",
        profile_img: "",
        type: "",
        facebook: null,
        google: null,
        status: 0,
        password: "123456",
        password_confirmation: "123456",
      },
    }
  },
  props: {
    isDataTrue: Boolean,
    pickedFileName: String,
  },

  watch: {    
    '$route.params.id': {
      // immediate: true,
      handler(newVal) {
        console.log('_id900_', newVal);
        if (newVal) {
          this.fetchData(newVal);
          this.pageId = newVal;
        }else{
          this.formData = {
            id: Number,
            name: "",
            email: "",
            email_verified_at: "",
            phone: "",
            firstname: "",
            lastname: "",
            profile_img: "",
            type: "",
            facebook: null,
            google: null,
            status: 0,
            password: "123456",
            password_confirmation: "123456",
          }
        }
      },
    },

  },

  methods: {
    async handleSubmit() {
      console.log("_my_form_data", this.formData);
      try {
        if (this.pageId) {
          const response = await (axios as any).put(
            'https://api.aaatradeinternational.com/api/user/' + this.pageId,
            this.formData, 
            {
              headers: {
                Authorization: `Bearer ${this.token}`,
              }
            }
          );
          if
          (response.status == 204 || response.status == 200) {
            console.log();
            this.successReport = true;
            setTimeout(() => { this.successReport = false; }, 3000);
          }
        } else {
          const response = await (axios as any).post('https://api.aaatradeinternational.com/api/user', this.formData, {
            headers: {
              Authorization: `Bearer ${this.token}`,
            }
          });
          if (response.status == 201) {
            // console.log('_save_success', response);
            this.formData = {
              id: Number,
              name: "",
              email: "",
              email_verified_at: "",
              phone: "",
              firstname: "",
              lastname: "",
              profile_img: "",
              type: "",
              facebook: null,
              google: null,
              status: 0,
              password: "123456",
              password_confirmation: "123456",
            };

            this.successReport = true;
            setTimeout(() => { this.successReport = false; }, 3000);
          }
        }
      } catch (error) {
        console.error(error);
      }
      // this.successReport = false;
    },
    async fetchData(id: number) {
      try {
        if (!this.token) {
          throw new Error('Token not found');
        }
        const response = await (axios as any).get(`https://api.aaatradeinternational.com/api/user/${id}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        console.log('_page_data_by_ID_', response);
        if (response.status === 200) {
          const data = response.data;
          this.formData = data.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    toggleUploadModal() {      
      this.showuploadModal = !this.showuploadModal;
      // this.formData.profile_img = this.pickedFileName;
      console.log('_setImage_', this.pickedFileName);
    },
    async handleSelectedImage( image: any) {
      // Handle the selected image value
      this.selectedImage = image;
      this.formData.profile_img = image;
      this.showuploadModal = !this.showuploadModal;// Close the modal if needed
    },
  },
    mounted() {
      console.log('_setImage_', this.pickedFileName);
    // Set isLoading to true when the component is mounted
    //this.handleSubmit();
  }
});
</script>