<template>
    <div class="layout-page">
      <Topbar :propValue="valueToShow"/>
      <div class="content-wrapper">
        <!-- Content -->
        <div class="px-4 flex-grow-1 container-p-y">
          <div class="row">
            <div class="container-xxl flex-grow-1 container-p-y">
              <div class="d-flex justify-content-between aling-items-center">
                <div>
                  <h4 class="fw-bold py-3 mb-4">
                    <span class="text-muted fw-light">Page Form Section Widget </span>Settings
                  </h4>
                </div>
                <div>
                  <button to="../form" @click="fromBackFunc()" class="btn btn-primary mt-2" >
                     Back to Form 
                  </button>
                </div>
              </div>
              <div class="d-flex justify-content-center align-items-center" v-if="loading" >
                  <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              <div class="row" v-else>  
                  <!-- Form Component -->
                  <div class="alert alert-success" v-if="successReport==true">Data Saved Successfully</div> 
                  <form name="" @submit.prevent="handleSubmit">
                    <div class="row">
                      <!-- Basic Layout -->
                      <div class="col-md-8 col-sm-12">
                        <div class="card mb-4">
                          <div class="card-body">
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
                                      placeholder="Page name!"
                                      v-model="formData.title"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row mb-3">
                                <label class="col-sm-12 col-form-label" for="basic-icon-default-fullname">Location</label>
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
                                      placeholder="Page title!"
                                      v-model="formData.location"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row mb-3">
                                <label class="col-sm-12 col-form-label" for="basic-icon-default-fullname">Event Date</label>
                                <div class="col-sm-12">
                                  <div class="input-group input-group-merge">
                                    <span
                                      id="basic-icon-default-fullname2"
                                      class="input-group-text"
                                      ><i class="bx bx-buildings"></i
                                    ></span>
                                    <input
                                      type="date"
                                      class="form-control"
                                      id="basic-icon-default-fullname"
                                      placeholder="Page title!"
                                      v-model="formData.event_date"                                      
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row mb-3">
                                <label class="col-sm-12 col-form-label" for="basic-icon-default-fullname">Event Title</label>
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
                                      placeholder="Page title!"
                                      v-model="formData.event_title"                                      
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row mb-3">
                                <label
                                  class="col-sm-12 col-form-label"
                                  for="basic-icon-default-company"
                                  >Content</label
                                >                               
                                <div class="col-sm-12">
                                    <!-- <textarea                                        
                                      rows="9"
                                      class="form-control"
                                      placeholder="Page description!"
                                      v-model="formData.content"
                                    ></textarea> -->
                                    <CkEditor v-model="formData.content" :content="formData.content"></CkEditor>
                                </div>
                              </div>
                              <!-- <CkEditor></CkEditor> -->
                          </div>                          
                        </div>
                        <div class="">
                            <button type="submit" class="btn btn-primary">Save Change</button>
                          </div>
                        <!-- section  {{ formData.sections }} -->
                        <!-- <span v-if="formData.sections"> -->
                        <!-- section modal button -->   
                      </div>
                      <!-- 8 end of col -->
                      <div class="col-md-4 col-sm-12">
                        <div class="row ">
                          <div class="col-md-12 mx-auto">
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
                                    class="slider-setting-img img-fluid" style="width:30%;" @click="toggleUploadModal('thumb')"
                                  />
                                  <input type="text" class="form-control" placeholder="Enter Text" v-model="formData.thumb" />
                                </div>
                                <!-- {{ selectedImage.thumb }} -->
                                <button class="btn btn-primary btn-sm mt-3" type="button" @click="toggleUploadModal('thumb')"> Select Image </button>
                              </div>
                            </div>   
                          </div>
                        </div>   
                      </div>
                      <UploadModal v-if="showUploadModal.thumb" ref="uploadModalRefLogoHeader" @selectImage="image => handleSelectedImage('thumb', image)"/>
                    </div>
                    <!-- / Content -->
                  </form>
                  <!-- Form Component -->
              </div>
            </div>
          </div>
        </div>
        <!-- / Content -->
        <FooterView />
        <div class="content-backdrop fade"></div>
      </div>
  </div>
</template>
<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import UploadModal from '@/components/UploadModal.vue';
import FooterView from "../../../components/FooterView.vue";
import Topbar from "../../../components/Topbar.vue";
import CkEditor from '@/components/Ckeditor.vue';
type Field = "thumb" ;

export default defineComponent({
  components:{
    UploadModal,
    FooterView,
    Topbar,
    CkEditor
  },
  name: "PageWidgetForm", // Rename the component to a multi-word name
  data() {
    const store = useStore();
    const token = store.state.auth.token || localStorage.getItem('token');
    const store_id = store.state.auth.id || localStorage.getItem('id');
    return {
      store,
      token,
      itemId: '',
      pageId: '',
      storeId: store_id,
      valueToShow: 'Hello from ParentComponent!',
      selectedImage: {
        thumb: null,
      } as Record<Field, any>,
      showUploadModal: {
        thumb: false,
      } as Record<Field, boolean>,
      siteInfoData: [],
      successReport: false,
      failedReoprt: false,
      showuploadModal: false,
      loading: false,
      formData: {
        id : null,
        title: '',
        content: '',
        thumb: '',
        location: '',
        event_date: '',
        event_title: '',
        status: 1,
        section_id: null
      },          
    }
  },
  props: {
    isDataTrue: Boolean
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.fetchData(newVal);
          this.pageId = newVal;
        }else{
          this.formData = {
            id : null,
            title: '',
            content: '',
            event_date: '',
            event_title: '',
            thumb: '',
            location: '',
            status: 1,
            section_id: null
        };
        }
      },
    },
  },

  methods: {
    async fetchData(id: number) {
      try {
        this.loading = true;
        if (!this.token) {
          throw new Error('Token not found');
        }
        const response = await (axios as any).get(`https://api.aaatradeinternational.com/api/widget/${id}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        console.log('_page_data_by_ID_', response);
        if (response.status === 200) {
          this.formData = response.data.data;
          this.loading = false;
        }
      } catch (error) {
        console.error(error);
        this.loading = false;
      }
    },
    async handleSubmit() {
      console.log("_my_form_data", this.formData);
      try {
        if (this.pageId) {
          this.formData.section_id = this.storeId;
          const response = await (axios as any).put(
            'https://api.aaatradeinternational.com/api/widget/' + this.pageId,
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
          this.formData.section_id = this.storeId;
          const response = await (axios as any).post('https://api.aaatradeinternational.com/api/widget', this.formData, {
            headers: {
              Authorization: `Bearer ${this.token}`,
            }
          });
          if (response.status == 201) {
            this.formData = {
              id : null,
              title: '',
              content: '',
              event_date: '',
              event_title: '',
              thumb: '',
              location: '',
              status: 1,
              section_id: this.storeId
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
   async toggleUploadModal(field: Field) {
      this.showUploadModal[field] = !this.showUploadModal[field];
    },

   async handleSelectedImage(field: Field, image: any) {
      // Handle the selected image value
      this.selectedImage[field] = image;
      this.formData[field] = image;
      // Do other actions if needed
      this.showUploadModal[field] = !this.showUploadModal[field]; // Close the modal if needed
    },

    async fromBackFunc(){
      this.$router.go(-1);
    }
  },
    mounted() {
    // Set isLoading to true when the component is mounted
    console.log('__sectionFormData', this.storeId);
  }
});


</script>