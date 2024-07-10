<template>
  <div class="table-responsive">
    <table class="table card-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Message</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody class="table-border-bottom-0">
        <tr v-for="contactUs in contactUsData" :key="contactUs.id">
          <td>{{ contactUs.id }}</td>
          <td>{{ contactUs.name }}</td>
          <td>{{ contactUs.message }}</td>
          <td class="text-center">
            <!-- <router-link 
              :to="{ name: 'ContactUs', params: { id: contactUs.id.toString() } }"
              class="btn btn-sm btn-warning me-2"
            >Edit</router-link> -->
            <button type="button" class="me-2 btn btn-sm btn-danger" 
              data-bs-toggle="modal" data-bs-target="#modalCenter"
              @click="fetchItem(contactUs)"
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

interface ContactUs {
  id: number;
  name: string;
  message: string;
  title: string;
  thumb: string;
  banner_img: string;
  description: string;
  slug: string;
  page_template: string;
  tags: string;
  meta_key: string;
  meta_description: string;
  status: 0
}
export default defineComponent({
  name: "PageList", // Rename the component to a multi-word name
  data() {
    return {
      contactUsData: [] as ContactUs[], // Explicitly define the type as Post[]

      deletevalue: {
        id: 0,
        title: "",
        name: "",	
      },
      isDataTrueList: true,
      id: '', // Replace with your actual ID value
    };
  },
  methods: {
    async getAllContactUs() {
      try {
        const response = await fetch('https://api.aaatradeinternational.com/api/contact');

        if (response.status === 200) {
          const data = await response.json();
          this.contactUsData = data.data;
          console.log('_contactUsData_', this.contactUsData);
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
        const response = await (axios as any).delete('https://api.aaatradeinternational.com/api/contact/'+id);

        if (response.status == 200) {
          console.log('_delete_success', response);
          this.getAllContactUs();
        }
      } catch (error) {
        console.error(error);
      }
    },

    sendData(id: string) {
      this.$emit('data-emitted', {
        isDataTrueList: this.isDataTrueList,
        id,
      });
    },
  },
  mounted() {
    this.getAllContactUs();
  },
});
</script>