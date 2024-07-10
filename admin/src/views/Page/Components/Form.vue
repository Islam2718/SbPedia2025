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
                    <span class="text-muted fw-light">Page Form</span>Settings
                  </h4>
                </div>
                <div>
                  <router-link to="../../page" class="btn btn-primary mt-2" >
                     Back to List
                  </router-link>
                </div>
              </div>
              <div class="row">  
                <div class="d-flex justify-content-center align-items-center" v-if="loading" >
                  <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
                <div v-else>
                  <!-- Form Component -->
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
                              <div class="row mb-3">
                                <label
                                  class="col-sm-12 col-form-label"
                                  for="basic-icon-default-company"
                                  >Description</label
                                >                               
                                <div class="col-sm-12">
                                    <!-- <textarea 
                                       
                                      rows="9"
                                      class="form-control"
                                      placeholder="Page description!"
                                    ></textarea> -->
                                    <CkEditor v-model="formData.description" :content="formData.description"></CkEditor>
                                </div>
                              </div>
                          </div>
                        </div>
                        <!-- section  {{ formData.sections }} -->
                        <!-- <span v-if="formData.sections"> -->
                          <div v-if="formData.id">
                            <div class="card border" v-for="(section, index) in formData.sections" :key="index">
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-md-9">           
                                    <div class="row mb-2">
                                        <h4>Section  {{ index + 1 }}: {{ section.title }}</h4>
                                    </div>                             
                                  </div> 
                                  <div class="col-md-3 text-end">
                                    <button class="btn btn-primary btn-sm me-2 mt-2" @click="editSection(section, formData)"> Edit</button> 
                                    <button class="btn btn-danger btn-sm me-2 mt-2" data-bs-toggle="modal" data-bs-target="#modalSectionCenter" type="button" @click="warningSection(section)"> Delete</button>                     
                                  </div>
                                </div>                 
                                <p class="m-0">Title: {{ section.sub_title }}</p>
                                <p>Content: {{ section.content }}</p>
                                <!-- {{ section.widgets }} -->
                                <div class="row my-3 text-center">
                                  <div class="col" v-if="section.thumb">
                                    <img :src="'https://file.aaatradeinternational.com/'+ section.thumb" alt="n/a" class="slider-setting-img img-fluid" />
                                    <input type="text" class="form-control" placeholder="Thumb Image" v-model="section.thumb" />
                                  </div>
                                  <div class="col" v-if="section.banner">
                                    <img :src="'https://file.aaatradeinternational.com/'+ section.banner" alt="n/a" class="slider-setting-img img-fluid" />
                                    <input type="text" class="form-control" placeholder="Banner Image" v-model="section.banner" />
                                  </div>
                                  <div class="col" v-if="section.background">
                                    <img :src="'https://file.aaatradeinternational.com/'+ section.background" alt="n/a" class="slider-setting-img img-fluid" />
                                    <input type="text" class="form-control" placeholder="Background Image" v-model="section.background" />
                                  </div>
                                </div>                              
                                <!-- section image -->
                                <div class="row">
                                  <h4>Widget</h4>
                                  <div class="col-md-4" v-for="(widget, index) in section.widgets" :key="index">
                                    <div class="card">
                                      <div class="card-body">
                                        <h4> {{ widget.title }}</h4>
                                        <p>{{ widget.content }}</p>
                                        <p>{{ widget.event_date }}</p>
                                        <p>{{ widget.event_title }}</p>
                                        <p>{{ widget.location }}</p>
                                        <img :src="'https://file.aaatradeinternational.com/'+ widget.thumb" alt="n/a" class="slider-setting-img img-fluid" /> <br>
                                        <button class="btn btn-primary btn-sm mt-3 me-2" type="button" @click="wedgetDataEdit(section, widget)"> Edit</button>
                                        <button class="btn btn-danger btn-sm mt-3 me-2" type="button" @click="deleteWidget(widget.id)"> Delete</button>
                                      </div>                    
                                    </div>
                                  </div>
                                </div>
                                <div class="mt-3">
                                  <!-- Button trigger modal -->
                                  <button type="button" class="btn btn-primary" @click="wedgetDataAdd(section)">  
                                    + Add Widget
                                    </button>
                                </div>
                              </div>
                            </div>                          
                          </div>

                        <!-- section modal button -->
                        <!-- <div class="card my-3" v-if="formData.id">            
                            <button type="button" id="sectionReOpen" class="btn btn-primary btn-block" data-bs-toggle="modal" data-bs-target="#sectionFormModal">
                              + Add Section
                            </button>
                        </div>            -->
                        <div class="card my-3" v-if="formData.id">            
                            <button @click="addSection()" type="button" id="sectionReOpen" class="btn btn-primary btn-block">
                              + Add Section
                            </button>
                        </div>           
                        <!--------- Section Modal Start ------------>

                        

                      </div>
                      <!-- 8 end of col -->
                      <!-- <div class="col-md-4 col-sm-12">
                        <div class="card mb-4">
                          <div class="card-body text-center">
                            <div class="page-image text-center">
                              <img v-if="formData.thumb"
                                  :src="'https://file.aaatradeinternational.com/'+formData.thumb"
                                  alt="n/a"
                                  class="slider-setting-img w-50 img-fluid"
                              />
                              <input type="text" class="form-control" placeholder="Enter Text" v-model="formData.thumb" />
                            </div>
                            <button class="btn btn-primary btn-sm mt-3" type="button" @click="toggleUploadModal('thumb')"> Upload Page Thumb (jpg, png, webp) </button>
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
                              <input type="text" class="form-control" placeholder="Enter Text" v-model="formData.banner_img" />
                            </div>
                            <button class="btn btn-primary btn-sm mt-3" type="button" @click="toggleUploadModal('banner_img')"> Upload Page Banner (jpg, png, webp) </button>
                          </div>
                        </div>
                        <div class="card">
                            <button class="btn btn-primary" type="submit">Save & Publish</button>
                        </div>
                      </div> -->
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
                                class="slider-setting-img img-fluid" style="width:30%;" @click="toggleUploadModal('thumb')"
                              />
                              <input type="text" class="form-control" placeholder="Enter Text" v-model="formData.thumb" />
                            </div>
                            <!-- {{ selectedImage.thumb }} -->
                            <button class="btn btn-primary btn-sm mt-3" type="button" @click="toggleUploadModal('thumb')"> Select Image </button>
                          </div>
                        </div>                        
                        <div class="card mb-4">
                          <div class="card-body text-center">
                            <div class="page-image text-center">
                              <img v-if="formData.banner_img"
                                  :src="'https://file.aaatradeinternational.com/'+ formData.banner_img"
                                  alt="n/a"
                                  class="slider-setting-img w-50 img-fluid"
                              />              
                              <img v-else
                                src="https://phicsart.com/uploads/images/top-page/menu/logo.svg" 
                                alt="n/a"
                                class="slider-setting-img img-fluid" style="width:30%;" @click="toggleUploadModal('banner_img')"
                              />
                              <input type="text" class="form-control" placeholder="Enter Text" v-model="formData.banner_img" />
                            </div>
                            <!-- {{ selectedImage.banner_img }} -->
                            <button class="btn btn-primary btn-sm mt-3" type="button" @click="toggleUploadModal('banner_img')"> Select Image </button>
                          </div>
                        </div>                        
                      </div>
                      <UploadModal v-if="showUploadModal.thumb" ref="uploadModalRefLogoHeader" @selectImage="image => handleSelectedImage('thumb', image)"/>
                      <UploadModal v-if="showUploadModal.banner_img" ref="uploadModalRefLogoHeader" @selectImage="image => handleSelectedImage('banner_img', image)"/>
                    </div>
                    <div class="">
                      <button class="btn btn-primary" type="submit">Save & Publish</button>
                    </div>
                  </form>
                  <!-- Form Component -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- / Content -->
        <!-- / section delete modal -->
        <div class="modal fade" id="modalSectionCenter" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modalCenterTitle">Section Delete</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p class="mb-4">Are you sure you want to delete <span class="text-danger">{{ sectionFormData.title }}</span></p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" @click="deleteSection(sectionFormData.id)">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        <!-- / section delete modal -->
        <!-- / Content -->
        <FooterView />
        <div class="content-backdrop fade"></div>
      </div>
  </div>
</template>
<script lang="ts">
import axios from '../../../../node_modules/axios/index';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import CkEditor from '@/components/Ckeditor.vue';
import UploadModal from '@/components/UploadModal.vue';
import FooterView from "../../../components/FooterView.vue";
import Topbar from "../../../components/Topbar.vue";
import router from '@/router';
type Field = "thumb" | "banner_img" ;

export default defineComponent({
  components:{
    UploadModal,
    FooterView,
    Topbar,
    CkEditor
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
      loading: false,
      valueToShow: 'Hello from ParentComponent!',
      selectedImage: {
        thumb: null,
        banner_img: null,
      } as Record<Field, any>,
      showUploadModal: {
        thumb: false,
        banner_img: false,
      } as Record<Field, boolean>,
      // showSectionuploadModal: {
      //   thumb: false,
      //   banner_img: false,
      // } as Record<Field, boolean>,
      siteInfoData: [],
      successReport: false,
      failedReoprt: false,
      showuploadModal: false,
      showsectionuploadModal: false,
      formData: {
        id: null,
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
        status: 0,
        sections: [{
          id: null,
          page_id: null,
          title: '',
          sub_title: '',
          content: '',
          thumb: '',
          banner: '',
          background: '',
          status:0,
          widgets: [
            {
            id : null,
            title: '',
            content: '',
            thumb: '',
            location: '',
            event_date: '',
            event_title: '',
            status: 1,
            section_id: null
            }
          ],
        }],
      },
      sectionFormData: {
        id: null,
        page_id: null,
        title: '',
        sub_title: '',
        content: '',
        thumb: '',
        banner: '',
        background: '',
        status:0,
      },
      widgetFormData: {
        id : null,
        title: '',
        content: '',
        thumb: '',
        location: '',
        event_date: '',
        event_title: '',
        status: '1',
        section_id: null,
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
            id: null,
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
            status: 0,
            sections: [{
              id: null,
              page_id: null,
              title: '',
              sub_title: '',
              content: '',
              thumb: '',
              banner: '',
              background: '',
              status:0,
              widgets: [
                {
                  id : null,
                  title: '',
                  content: '',
                  thumb: '',
                  location: '',
                  event_date: '',
                  event_title: '',
                  status: 0,
                  section_id: null
                }
              ]
            }]
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
            this.formData = {
              id: null,
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
              status: 0  ,
              sections: [
                {
                  id: null,
                  page_id: null,
                  title: '',
                  sub_title: '',
                  content: '',
                  thumb: '',
                  banner: '',
                  background: '',
                  status:0,
                  widgets: [
                    {
                      id : null,
                      title: '',
                      content: '',
                      thumb: '',
                      location: '',
                      event_date: '',
                      event_title: '',
                      status: 0,
                      section_id: null
                    }
                  ]
                }
              ]
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
    async editSection(object: any, formData: any) {
      console.log('editSection', object);
      // this.sectionFormData = object;
      // console.log('__sectionFormData', this.sectionFormData);
      if (this.formData.id) {
        this.store.commit('auth/SET_ID', formData.id);  
        localStorage.setItem('id', formData.id);
      }
      router.push({ name: 'PageSectionForm', params: { id: object.id } });
    },
    async fetchData(id: number) {
      try {
        this.loading = true;
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
          this.formData = response.data.data;
          this.sectionFormData = response.data.data.sections;
          this.loading = false;
        }
      } catch (error) {
        this.loading = false;
        console.error(error);
      }
    },
   async toggleUploadModal(field: Field) {
      this.showUploadModal[field] = !this.showUploadModal[field];
    },
// Change from showUploadModal to showSectionuploadModal
    // async toggleSectionUploadModal(field: Field) {
    //   this.showSectionuploadModal[field] = !this.showSectionuploadModal[field];
    // },
    handleSelectedImage(field: Field, image: any) {
      // Handle the selected image value
      this.selectedImage[field] = image;
      this.formData[field] = image;
      // Do other actions if needed
      this.showUploadModal[field] = !this.showUploadModal[field]; // Close the modal if needed
    },
    async handleSectionSelectedImage(field: Field, id: any, image: any) {
      // Change from formData.sections[id] to formData.sections[id].thumb
      this.formData.sections[id].thumb = image;
      // Do other actions if needed
      //this.showSectionuploadModal[field] = !this.showSectionuploadModal[field]; // Close the modal if needed
    },
    async wedgetDataAdd(item: any) {
      // this.widgetFormData.section_id = item.id.toString();
      // this.widgetFormData.title = '';
      // this.widgetFormData.content = '';
      // this.widgetFormData.event_date = '';
      // this.widgetFormData.event_title = '';
      // this.widgetFormData.location = '';
      if (this.formData.id) {
        this.store.commit('auth/SET_ID', item.id);  
        localStorage.setItem('id', item.id);
      }
      router.push({ name: "PageWidgetForm"});
    },
    async wedgetDataEdit(item: any, widget: any) {
      // this.widgetFormData.id = item.id;
      // this.widgetFormData = item;
      // console.log('__widgetFormData_', this.widgetFormData);
      if (this.formData.id) {
        this.store.commit('auth/SET_ID', item.id);  
        localStorage.setItem('id', item.id);
      }
      router.push({ name: "PageWidgetForm", params: { id: widget.id }});
    },
    async changeStatus(id: any) {
      try {
        const response = await (axios as any).get('https://api.aaatradeinternational.com/api/widget/'+id+'/status', {
          headers: {
            Authorization: `Bearer ${this.token}`,
          }
        })
        if (response.status == 200) {
          console.log('_update_success', response);
          window.location.reload()
          // this.successStatus = 1
          setTimeout(() => {
            // this.successStatus = 0
          }, 2000);
        }
      }
      catch (error) {
        console.error(error);
      }
    },
    async deleteWidget(id: any) {
      try {
        const response = await (axios as any).delete('https://api.aaatradeinternational.com/api/widget/'+id, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          }
        })
        if (response.status == 200) {
          console.log('_delete_success', response);
          this.fetchData;
          window.location.reload()
        }
      }
      catch (error) {
        console.error(error);
      }
    },
    async deleteSection(id: any) {
      try {
        const response = await (axios as any).delete('https://api.aaatradeinternational.com/api/section/'+id, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          }
        })
        if (response.status == 200) {
          console.log('_delete_success', response);
          this.fetchData;
          window.location.reload()
        }
      }
      catch (error) {
        console.error(error);
      }
    },
    async warningSection(item: any) {
      this.sectionFormData = item;
    },
    async addSection() { 
      if (this.formData.id) {
        this.store.commit('auth/SET_ID', this.formData.id);  
        localStorage.setItem('id', this.formData.id);
      }
      router.push({ name: "PageSectionForm"});
    }
  },
    mounted() {
    // Set isLoading to true when the component is mounted
    //this.handleSubmit();
    // section_modal   
  }
});


</script>