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
                      placeholder="Person name!"
                      v-model="formData.name"
                      required
                    />
                  </div>
                </div>
              </div>
              <!-- <CkEditor></CkEditor> -->
              <div class="row mb-3">
                <label
                  class="col-sm-12 col-form-label"
                  for="basic-icon-default-company"
                  >Designation</label
                >
                <div class="col-sm-12">
                    <textarea 
                      v-model="formData.designation" 
                      rows="10"
                      class="form-control"
                      placeholder="Person designation!"
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
              <img v-if="formData.thumb"
                  :src="'https://file.aaatradeinternational.com/'+ formData.thumb"
                  alt="n/a"
                  class="slider-setting-img w-50 img-fluid"
              />
              <img v-else
                src="https://phicsart.com/uploads/images/top-page/menu/logo.svg"
                alt="n/a"
                class="slider-setting-img img-fluid"  style="width:30%;"
              />
              <input type="text" class="form-control" placeholder="Enter Text" v-model="formData.thumb" />
            </div>
            <!-- {{ selectedImage.thumb }} -->
            <button class="btn btn-primary btn-sm mt-3" type="button" @click="toggleUploadModal('thumb')">Select Image</button>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-body text-center">
            <div class="page-image text-center">
              <img v-if="formData.signature_thumb"
                  :src="'https://file.aaatradeinternational.com/'+ formData.signature_thumb"
                  alt="n/a"
                  class="slider-setting-img w-50 img-fluid"
              />
              <img v-else
                src="https://phicsart.com/uploads/images/top-page/menu/logo.svg"
                alt="n/a"
                class="slider-setting-img img-fluid"  style="width:30%;"
              />
              <input type="text" class="form-control" placeholder="Enter Text" v-model="formData.signature_thumb" />
            </div>
            <!-- {{ selectedImage.signature_thumb}} -->
            <button class="btn btn-primary btn-sm mt-3" type="button" @click="toggleUploadModal('signature_thumb')"> Select Image </button>
          </div>
        </div>
        <div class="card">
            <button class="btn btn-primary" type="submit">Save & Publish</button>
        </div>
      </div>
      <!-- 4 end of col -->
       <UploadModal v-if="showUploadModal.thumb" ref="uploadModalRefLogoHeader" @selectImage="image => handleSelectedImage('thumb', image)"/>
       <UploadModal v-if="showUploadModal.signature_thumb" ref="uploadModalRefLogoHeader" @selectImage="image => handleSelectedImage('signature_thumb', image)"/>
    </div>
  </form>
</template>
<script lang="ts">
import axios from '../../../../node_modules/axios/index';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import UploadModal from '@/components/UploadModal.vue';
type Field = "thumb" | "signature_thumb";

export default defineComponent({
  components: {
    UploadModal
  },
  name: "PageForm", // Rename the component to a multi-word name
  data() {
    const store = useStore();
    const token = store.state.auth.token || localStorage.getItem('token');
    return {
      store,
      token,
      itemId: '',
      pageId: '',
      logoHeader:null,
      logoFooter:null,
      selectedImage: {
       thumb: null,
       signature_thumb: null
      } as Record<Field, any>,
      showUploadModal: {
        thumb: false,
        signature_thumb: false
      } as Record<Field, boolean>,

      // siteInfoData: [],
      successReport: false,
      failedReoprt: false,
      showuploadModal: false,
      formData: {
        name: "",
        designation: "",
        thumb: "",
        signature_thumb: "",
        status: 0
      }
    }
  },
  props: {
    isDataTrue: Boolean,
    pickedFileName: String
  },

  watch: {
    '$route.params.id': {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.fetchData(newVal);
          this.itemId = newVal;
          this.pageId = newVal;
        }else{
          this.formData = {
            name: "",
            designation: "",
            thumb: "",
            signature_thumb: "",
            status: 0
          }
        }
      },
    },
  }, 
  methods: {
    async fetchData(id: number) {
      try {
        if (!this.token) {
          throw new Error('Token not found');
        }
        const response = await (axios as any).get(`https://api.aaatradeinternational.com/api/person/${id}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          }
        });
        console.log('_response', response);
        if (response.status === 200) {
          // const data = response.data;
          this.formData = response.data.data;
        }
      } catch (error) {
        console.error(error);
      }
    },

    async handleSubmit() {
      console.log("_my_form_data", this.formData);
      try {
        if (this.pageId) {
          const response = await (axios as any).put(
            'https://api.aaatradeinternational.com/api/person/' + this.pageId,
            this.formData, 
            {
              headers: {
                Authorization: `Bearer ${this.token}`,
              }
            }
          );
          if(response.status == 204 || response.status == 200) {
            console.log();
            this.successReport = true;
            setTimeout(() => { this.successReport = false; }, 3000);
            this.formData = response.data.data;
          }
          
          console.log('if block', this.formData);
        } else {
          console.log('else block', this.formData);
          const response = await (axios as any).post('https://api.aaatradeinternational.com/api/person', this.formData,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            }
          });
          if (response.status == 201) {
            // console.log('_save_success', response);
            this.formData = {
              name: "",
              designation: "",
              thumb: "",
              signature_thumb: "",
              status: 0
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

    toggleUploadModal(field: Field) {
      this.showUploadModal[field] = !this.showUploadModal[field];
    },
    handleSelectedImage(field: Field, image: any) {
      // Handle the selected image value
      this.selectedImage[field] = image;
      this.formData[field] = image;
      // Do other actions if needed
      this.showUploadModal[field] = !this.showUploadModal[field]; // Close the modal if needed
    }
  },
    mounted() {
    // Set isLoading to true when the component is mounted
    //this.handleSubmit();
  }
});
</script>