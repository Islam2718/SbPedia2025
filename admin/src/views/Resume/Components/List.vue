<template>
  <div class="alert alert-success" v-if="successStatus == 1">Status Updated Successfully !</div>
  <div class="table-responsive">
    <table class="table card-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>email</th>
          <th>phone</th>
          <th>Passport No</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody class="table-border-bottom-0">
        <tr v-for="resume in resumeData" :key="resume.id">
          <td>{{ resume.id }}</td>
          <td>{{ resume.name }}</td>
          <td>{{ resume.email }}</td>
          <td>{{ resume.phone }}</td>
          <td>{{ resume.passport_no }}</td>
          <!-- <td>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" :id="'flexSwitchCheckChecked' + resume.id" :checked="resume.status == 1 ? true : false" @click="changeStatus(resume.id)">
            </div>
          </td>           -->
          <td class="text-center">
            <!-- <router-link 
              :to="{ name: 'ResumeView', params: { id: resume.id.toString() } }"
              class="btn btn-sm btn-warning me-2"
            >Edit</router-link> -->
            <button type="button" class="me-2 btn btn-sm btn-info" 
              data-bs-toggle="modal" data-bs-target="#modalCenter"
              @click="fetchItem(resume)"
            >
              Details
            </button>
            <!-- <button type="button" class="me-2 btn btn-sm btn-danger" 
              data-bs-toggle="modal" data-bs-target="#modalCenter"
              @click="fetchItem(resume)"
            >
              Delete
            </button> -->
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Delete Confirm Modal -->
    <div class="modal fade" id="modalCenter" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header ">
            <h5 class="modal-title text-center" id="modalCenterTitle">Resume Details</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body text-left">  
            <p>Name: {{ deletevalue.name }}</p>
            <p>Phone: {{ deletevalue.phone }}</p>
            <p>Email: {{ deletevalue.email }}</p>
            <p>Age: {{ deletevalue.age }}</p>
            <p>Passport No: {{ deletevalue.passport_no }}</p>
            <p>Passport Issue: {{ deletevalue.passport_issue_date }}</p>
            <p>Passport Expire: {{ deletevalue.passport_expire_date }}</p>
            <p>Qualification: {{ deletevalue.qualification_status }}</p>
            <p>Qualification Description: {{ deletevalue.qualification_description }}</p>
            <p>Work Experience: {{ deletevalue.work_experience_status }}</p>
            <p>Experience Description: {{ deletevalue.work_experience_description }}</p>
            <p>Marital Status: {{ deletevalue.marital_status}}</p>
            <p>District: {{ deletevalue.district }}</p>
            <p>Nationality: {{ deletevalue.nationality }}</p>
            <img :src="deletevalue.cv_file"  alt="n/a" class="img-fluid">
          </div>
          <div class="modal-footer text-center justify-content-center">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <!-- <button data-bs-dismiss="modal" type="button" class="btn btn-danger" @click = "deleteItem(deletevalue.id)">Confirm</button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import axios from '../../../../node_modules/axios/index';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

interface Resume {
  id: number;
  name: string;
  email: string;
  phone: string;
  banner_img: string;
  description: string;
  slug: string;
  page_template: string;
  tags: string;
  meta_key: string;
  meta_description: string,
  status: number,
  passport_no: string,
  passport_issue_date: string,
  passport_expire_date: string,
  age: string,
  qualification_status: string,
  work_experience_status:string
  work_experience_description:string
  experience_duration:string
  marital_status:string
  nationality:string
  cv_file:string
  district:string
}
export default defineComponent({
  name: "PageList", // Rename the component to a multi-word name
  data() {    
    const store = useStore();
    const token = store.state.auth.token || localStorage.getItem('token');
    return {     
      store: store,
      token: token,

      resumeData: [] as Resume[], // Explicitly define the type as Post[]
      deletevalue: {
        id: 0,
        title: "",
        name: "",	
        email: "",
        phone: "",
        banner_img: "",
        description: "",
        slug: "",
        page_template: "",
        tags: "",
        meta_key: "",
        meta_description: "",
        status: Number,
        passport_no: "",
        passport_issue_date: "",
        passport_expire_date: "",
        age: "",
        qualification_status: "",
        qualification_description:"",
        work_experience_status: 0,
        work_experience_description: "",
        experience_duration: "",
        marital_status: "",
        nationality: "",
        cv_file: "",
        district: "",
      },
      isDataTrueList: true,
      id: '', // Replace with your actual ID value
      successStatus: 0
    };
  },
  methods: {
    async fetchAllData() {
      try {
        const response = await axios.get('https://api.aaatradeinternational.com/api/resume');
        
        if (response.status === 200) {
          console.log('_resume_response', response.data.data); 
          this.resumeData = response.data.data;
        }
      } catch (error) {
        console.error(error);
      }
    },

    async changeStatus(id: number) {
      try {
        const response = await (axios as any).get('https://api.aaatradeinternational.com/api/resume/'+id+'/status', {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        if (response.status == 200) {
          console.log('_update_success', response);
          this.fetchAllData();
          this.successStatus = 1
          setTimeout(() => {
            this.successStatus = 0
          }, 2000);
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchItem(item: any) {
      this.deletevalue = item;
      console.log("deletevalue", this.deletevalue);
    },
    async deleteItem(id: number) {
      try {
        const response = await (axios as any).delete('https://api.aaatradeinternational.com/api/resume/'+id, {
          headers: {
            'Authorization': `Bearer ${this.token}`
          }
        });

        if (response.status == 200) {
          this.fetchAllData();
          this.successStatus = 1
          setTimeout(() => {
            this.successStatus = 0
          }, 2000);
        }
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.fetchAllData();
  },
});
</script>