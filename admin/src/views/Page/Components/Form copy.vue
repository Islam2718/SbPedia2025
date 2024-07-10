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
                      placeholder="Page name!"
                      v-model="formData.name"
                      required
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
                      placeholder="Page title!"
                      v-model="formData.title"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="row mb-3">
                <label class="col-sm-12 col-form-label" for="basic-icon-default-fullname">Slug</label>
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
                      placeholder="Page slug!"
                      v-model="formData.slug"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="row mb-3">
                <label class="col-sm-12 col-form-label" for="basic-icon-default-fullname">Template</label>
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
                      placeholder="Page template!"
                      v-model="formData.page_template"
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
                  >Description</label
                >
                <div class="col-sm-12">
                    <textarea 
                      v-model="formData.description" 
                      rows="9"
                      class="form-control"
                      placeholder="Page description!"
                    ></textarea>
                </div>
              </div>
          </div>
        </div>
        <!-- section  {{ formData.sections }} -->
        <!-- <span v-if="formData.sections"> -->
          <div class="card border" v-for="(section, index) in sectionArray" :key="index">
            <div class="card-header">
              <h5 class="card-title">Section {{ index + 1 }}: {{ section.title }}</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-9">
                  <div class="row mb-2">
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
                            placeholder="Title !"
                            v-model="formData.sections[index].title"
                            required
                          />
                        </div>
                      </div>
                  </div>            
                  <div class="row mb-2">
                      <label class="col-sm-12 col-form-label" for="basic-icon-default-fullname">Sub Title</label>
                      <div class="col-sm-12">
                        <!-- {{ section[index].sub_title }} -->
                        {{ section.sub_title }}
                      </div>
                  </div>                             
                </div> 
                <div class="col-md-3">
                  ///3333 
                </div>
              </div> 
            </div>
          </div>
        <!-- </span> -->
        <!-- section -->

        <!-- page content end -->
        
        <!-- widget modal button -->
        <div class="card my-3">            
            <button type="button" class="btn btn-primary btn-block" data-bs-toggle="modal" data-bs-target="#widgetModal">
              +Add Widget
            </button>            
        </div>           
        <!-- Modal -->
        <div class="modal fade" id="widgetModal" tabindex="-1" aria-labelledby="widgetModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
              <form name="" @submit.prevent="handleSubmitWidget">              
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Widgets</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
          <!-- widget form  -->
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
                            placeholder="Widget title!"
                            v-model="formDataWidget.title"
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
                            placeholder="Widget location!"
                            v-model="formDataWidget.location"
                            required
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
                          <textarea 
                            v-model="formDataWidget.content" 
                            rows="10"
                            class="form-control"
                            placeholder="Widget content!"
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
                        :src="'https://file.aaatradeinternational.com/'+formDataWidget.thumb"
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
                  <button class="btn btn-primary btn-sm mt-3" type="button" @click="showuploadModal = !showuploadModal"> Select Image </button>
                </div>
              </div>
            </div>
            <UploadModal v-if="showuploadModal" @selectImage="handleSelectedImage" /> 
            <!-- 4 end of col -->
          </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </form>              
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
                  :src="'https://file.aaatradeinternational.com/'+formData.thumb"
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
            <button class="btn btn-primary btn-sm mt-3" type="button" @click="toggleUploadModal('thumb')"> Select Image </button>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-body text-center">
            <div class="page-image text-center">
              <img v-if="formData.banner_img"
                  :src="'https://file.aaatradeinternational.com/'+formData.banner_img"
                  alt="n/a"
                  class="slider-setting-img w-50 img-fluid"
              />
              <img v-else
                src="https://phicsart.com/uploads/images/top-page/menu/logo.svg"
                alt="n/a"
                class="slider-setting-img img-fluid"  style="width:30%;"
              />
              <input type="text" class="form-control" placeholder="Enter Text" v-model="formData.banner_img" />
            </div>
            <button class="btn btn-primary btn-sm mt-3" type="button" @click="toggleUploadModal('banner_img')"> Select Image </button>
          </div>
        </div>

        <div class="card">
            <button class="btn btn-primary" type="submit">Save & Publish</button>
        </div>
      </div>
      <UploadModal v-if="showUploadModal.thumb" ref="uploadModalRefLogoHeader" @selectImage="image => handleSelectedImage('thumb', image)"/>
      <UploadModal v-if="showUploadModal.banner_img" ref="uploadModalRefLogoHeader" @selectImage="image => handleSelectedImage('banner_img', image)"/>
    </div>
  </form>
</template>
<script lang="ts">
import axios from '../../../../node_modules/axios/index';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import UploadModal from '@/components/UploadModal.vue';
type Field = "thumb" | "banner_img";

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
      itemId: '',
      pageId: '',
      selectedImage: {
        thumb: null,
        banner_img: null,
      } as Record<Field, any>,
      showUploadModal: {
        thumb: false,
        banner_img: false,
      } as Record<Field, boolean>,
      siteInfoData: [],
      successReport: false,
      failedReoprt: false,
      showuploadModal: false,
      formData: {
        id: Number,
        name: "",
        title: "",
        description: "",
        thumb: "",
        banner_img: "",
        slug: "",
        page_template: "",
        tags: "",  
        meta_key: "",
        meta_description: "",
        status: 0
      },
      sectionArray: [{
        title: '',
        sub_title:'',
        content: '',
        thumb: '',
        banner: '',
        background: '',
        status: 0
      }]      
    }
  },
  props: {
    isDataTrue: Boolean
  },

  watch: {
    '$route.params.id': {
      // immediate: true,
      handler(newVal) {
        if (newVal) {
          this.fetchData(newVal);
          this.pageId = newVal;
        }else{
          this.formData = {
            id: Number,
            name: "",
            title: "",
            description: "",
            thumb: "",
            banner_img: "",
            slug: "",
            page_template: "",
            tags: "",  
            meta_key: "",
            meta_description: "",
            status: 0
          };
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
            'https://api.aaatradeinternational.com/api/page/' + this.pageId,
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
          const response = await (axios as any).post('https://api.aaatradeinternational.com/api/page', this.formData, {
            headers: {
              Authorization: `Bearer ${this.token}`,
            }
          });
          if (response.status == 201) {
            // console.log('_save_success', response);
            this.formData = {
              id: Number,
              name: "",
              title: "",
              description: "",
              thumb: "",
              banner_img: "",
              slug: "",
              page_template: "",
              tags: "",  
              meta_key: "",
              meta_description: "",
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

    async fetchData(id: number) {
      try {
        if (!this.token) {
          throw new Error('Token not found');
        }
        const response = await (axios as any).get(`https://api.aaatradeinternational.com/api/page/${id}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        console.log('_page_data_by_ID_', response);
        if (response.status === 200) {
          const data = response.data;
          this.formData = data.data;
          this.sectionArray = data.data.sections;
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
    }
  },
    mounted() {
    // Set isLoading to true when the component is mounted
    //this.handleSubmit();
  }
});
</script>