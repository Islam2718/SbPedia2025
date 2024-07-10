<template>
    <div class="alert alert-success" v-if="successStatus == 1">Status Updated Successfully !</div>  
  <div class="table-responsive">
    <table class="table card-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <!-- <th>Thumb</th> -->
          <th>Status</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody class="table-border-bottom-0">
        <tr v-for="concern in concernData" :key="concern.id">
          <td>{{ concern.id }}</td>
          <td>{{ concern.title.substring(0,50) }}</td>
          <td>{{ concern.description.substring(0,50) }}</td>
          <!-- <th>{{ concern.thumb}}</th> -->
          <th>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" :id="'status' + concern.id" :checked="concern.status == 1 ? true : false" @click="changeStatus(concern.id)">
            </div>
          </th>
          <td class="text-center">
            <router-link 
              :to="{ name: 'concern-view', params: { id: concern.id.toString() } }"
              class="btn btn-sm btn-warning me-2"
            >Edit</router-link>
            <button type="button" class="me-2 btn btn-sm btn-danger" 
              data-bs-toggle="modal" data-bs-target="#modalCenter"
              @click="fetchItem(concern)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Delete Confirm Modal -->
    <div class="modal fade" id="modalCenter" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header ">
            <h5 class="modal-title text-center" id="modalCenterTitle">Delete Confirmation !</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body text-center">  
            <i class="bx bx-bell bx-lg text-danger mb-3 d-inline-block"></i>      
            <p>Are You Sure to Delete This Items?</p>
          </div>
          <div class="modal-footer text-center justify-content-center">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button data-bs-dismiss="modal" type="button" class="btn btn-danger" @click = "deleteItem(deletevalue.id)">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

interface concern {
  id: number;
  title: string;
  description: string;
  thumb: string;
  status: number;
}
export default defineComponent({
  name: "PageList", // Rename the component to a multi-word name
  data() {
    const store = useStore();
    const token = store.state.auth.token || localStorage.getItem('token');

    return {   
      token: token,

      concernData: [] as concern[], // Explicitly define the type as Post[]

      deletevalue: {
        id: 0,
        title: "",
        name: "",	
      },
      isDataTrueList: true,
      id: '', // Replace with your actual ID value
      successStatus: 0,
    };
  },
  methods: {
    async fetchAllData() {
      try {
        const response = await fetch('https://api.aaatradeinternational.com/api/our-concern');

        if (response.status === 200) {
          const data = await response.json();
          this.concernData = data.data;
          // console.log('_concernData_', this.concernData);
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchItem(item: any) {
      this.deletevalue = item;
      // console.log("deletevalue", this.deletevalue);
    },
    async deleteItem(id: number) {
      try {
        const response = await (axios as any).delete('https://api.aaatradeinternational.com/api/our-concern/'+id, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });

        if (response.status == 200) {
          // console.log('_delete_success', response);
          this.fetchAllData();
        }
      } catch (error) {
        console.error(error);
      }
    },

    // changeStatus function 
    async changeStatus(id: number) {
      try {
        const response = await (axios as any).get('https://api.aaatradeinternational.com/api/our-concern/'+id+'/status', {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        if (response.status == 200) {
          // console.log('_update_success', response);
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

  },
  mounted() {
    this.fetchAllData();
  },
});
</script>