<template>  
  <div class="alert alert-success" v-if="successReport==true">Updated Successfully !</div>  
  <form name="" @submit.prevent="handleSubmit()">
    <div class="row">
      <!-- Basic Layout -->
      <div class="col-md-8 col-sm-12">
        <div class="card mb-4">
          <div class="card-body">
              <div class="row mb-3">
                <label class="col-sm-12 col-form-label" for="basic-icon-default-company">Name</label>
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
                      placeholder="Enter site name."
                      v-model="formData.name"
                    />
                  </div>
                </div>
              </div>            
              <div class="row mb-3">
                <label class="col-sm-12 col-form-label" for="basic-icon-default-fullname">Title</label>
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
                      placeholder="Enter site title."
                      v-model="formData.title"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <label class="col-sm-12 col-form-label" for="basic-icon-default-company" >Description</label>
                <div class="col-sm-12">
                    <textarea 
                      v-model="formData.description" 
                      rows="3"
                      class="form-control"
                      placeholder="Enter site description."
                    ></textarea>
                </div>
              </div>
              <div class="row mb-3">
                <label class="col-sm-12 col-form-label" for="basic-icon-default-company" >Map</label>
                <div class="col-sm-12">
                    <textarea 
                      v-model="formData.map_html" 
                      rows="2"
                      class="form-control"
                      placeholder="Google Map Embaded Code."
                    ></textarea>
                </div>
              </div>

              <div class="row mb-3">
                <label class="col-sm-12 col-form-label" for="basic-icon-default-fullname">Web Url</label>
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
                      placeholder="e.g - info@example.com"
                      v-model="formData.web_url"
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
                      placeholder="e.g - info@example.com"
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
                      placeholder="e.g - +880 123 456 789"
                      v-model="formData.phone"
                      required
                    />
                  </div>
                </div>
              </div>   
              <div class="row mb-3">
                <label class="col-sm-12 col-form-label" for="basic-icon-default-company" >Address</label>
                <div class="col-sm-12">
                    <textarea 
                      v-model="formData.address" 
                      rows="2"
                      class="form-control"
                      placeholder="Enter site address."
                    ></textarea>
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
              <img v-if="formData.logo_header"
                  :src="'https://file.aaatradeinternational.com/'+ formData.logo_header"
                  alt="n/a"
                  class="slider-setting-img w-50 img-fluid"
              />   
              <img v-else
                src="https://phicsart.com/uploads/images/top-page/menu/logo.svg"
                alt="n/a"
                class="slider-setting-img img-fluid"  style="width:30%;"
              /> 
              <input type="text" class="form-control" placeholder="Enter Text" v-model="formData.logo_header" 
              />
            </div>
            {{ selectedImage.logo_header }} 
            <button class="btn btn-primary btn-sm mt-3" type="button" @click="toggleUploadModal('logo_header')"> Select Image </button>
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-body text-center">
            <div class="page-image text-center">
              <img v-if="formData.logo_footer"
                  :src="'https://file.aaatradeinternational.com/'+formData.logo_footer"
                  alt="n/a"
                  class="slider-setting-img w-50 img-fluid"
              />
              <img v-else
                src="https://phicsart.com/uploads/images/top-page/menu/logo.svg"
                alt="n/a"
                class="slider-setting-img img-fluid"  style="width:30%;"
              />
              <input type="text" class="form-control" placeholder="Enter Text" v-model="formData.logo_footer" />
            </div>
            <!-- {{ selectedImage.logo_footer }} -->
            <button class="btn btn-primary btn-sm mt-3" type="button" @click="toggleUploadModal('logo_footer')"> Select Image </button>
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-body text-center">
            <div class="page-image text-center">
              <img v-if="formData.icon"
                  :src="'https://file.aaatradeinternational.com/'+ formData.icon"
                  alt="n/a"
                  class="slider-setting-img w-50 img-fluid"
              />              
              <img v-else
                src="https://phicsart.com/uploads/images/top-page/menu/logo.svg" 
                alt="n/a"
                class="slider-setting-img img-fluid" style="width:30%;" @click="toggleUploadModal('icon')"
              />
              <input type="text" class="form-control" placeholder="Enter Text" v-model="formData.icon" />
            </div>
            <!-- {{ selectedImage.icon }} -->
            <button class="btn btn-primary btn-sm mt-3" type="button" @click="toggleUploadModal('icon')"> Select Image </button>
          </div>
        </div>
        <div class="card">
            <button class="btn btn-primary" type="submit">Save & Publish</button>
        </div>
      </div>
      <!-- Render the UploadModal instances -->
    <UploadModal v-if="showUploadModal.logo_header" ref="uploadModalRefLogoHeader" @selectImage="image => handleSelectedImage('logo_header', image)"/>
    <UploadModal v-if="showUploadModal.logo_footer" ref="uploadModalRefLogoHeader" @selectImage="image => handleSelectedImage('logo_footer', image)"/>
    <UploadModal v-if="showUploadModal.icon" ref="uploadModalRefLogoHeader" @selectImage="image => handleSelectedImage('icon', image)"/>
      <!-- 4 end of col -->
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import axios from '../../../../node_modules/axios/index';
import { useStore } from 'vuex';
import UploadModal from '@/components/UploadModal.vue';
type Field = "logo_header" | "logo_footer" | "icon";
export default defineComponent({
  components: {
    UploadModal,
  },
  name: "site_info",
  
  data() {
    const store = useStore();
    const token = store.state.auth.token || localStorage.getItem('token');
    return {
      store,
      token,
      pickedFileNames: this.pickedFileName,
      uploadedImageUrl: '',
      selectedImage: {
        logo_header: null,
        logo_footer: null,
        icon: null,
      } as Record<Field, any>,
      showUploadModal: {
        logo_header: false,
        logo_footer: false,
        icon: false,
      } as Record<Field, boolean>,
      // siteInfoData: [],
      successReport: false,
      failedReoprt: false,
      siteId: 1,
      logoHeader:null,
      logoFooter:null,
      formData: {
        name: "",
        title: "",
        description: "",
        logo_header: "",
        logo_footer: "",
        icon: "",
        map_html: "",
        email: "",
        phone: "",
        address: "",
        web_url: "",
      }
    }
  },
  watch: {
    token() {
      this.fetchData();
    },
    logoHeader: function () {
      // let test = this.formData.logo_header = '500';
      console.log('logo_header', this.formData.logo_header = '500');
    }
  },
  props: {
    isDataTrue: Boolean,
    pickedFileName: String,
  },
  methods: {
    async fetchData() {
      try {
        if (!this.token) {
          throw new Error('Token not found');
        }
        const response = await axios.get('https://api.aaatradeinternational.com/api/site-info/1');
        if (response.status === 200) {
          this.formData = response.data.data;
        }
      } catch (error) {
        console.error(error);
      }
    },

    async handleSubmit() {
      try {
          const response = await (axios as any).put('https://api.aaatradeinternational.com/api/site-info/1', this.formData, {
            headers: {
              Authorization: `Bearer ${this.token}`,
            }
          });
          if (response.status == 200 || response.status == 204) {
            this.successReport = true;
            setTimeout(() => { this.successReport = false; }, 3000);
          }
      } catch (error) {
        console.error(error);
      }
    },
   
    toggleUploadModal(field: Field) {
      this.showUploadModal[field] = !this.showUploadModal[field];
    },
    handleSelectedImage(field: Field, image: any) {
      // Handle the selected image value
      this.selectedImage[field] = image;
      this.formData[field] = image;
      // Do other actions if needed
      this.showUploadModal[field] = !this.showUploadModal[field]; // Close the modal if needed
    },
  },
  mounted() {
    this.fetchData();
    // this.logoHeader;
    this.formData.logo_header = '599';
  }
});
</script>