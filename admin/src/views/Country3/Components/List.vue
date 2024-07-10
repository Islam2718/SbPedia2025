<template>
  <div>
    <table class="table card-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Registry Key</th>
          <th>Invoice Key</th>
          <th>Payment Method Id</th>
          <th>Item Name</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody class="table-border-bottom-0">
        <tr v-for="post in transactions" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.registry_key }}</td>
          <td>{{ post.invoice_key }}</td>
          <td>{{ post.payment_method_setting_id }}</td>
          <td>{{ post.item_name }}</td>
          <td>{{ post.amount }}</td>
          <td>
            <button type="button" class="me-2 btn btn-warning" @click="sendData(post.id.toString())">
              Edit
            </button>
            <button type="button" class="me-2 btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="deleteclick(post.id, post.title)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal delete modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Confirm to Delete</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Are You Sure want to delete this <strong>{{ deletevalue.title }}</strong> Page</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="myCloseButton">Close</button>
            <button type="button" class="btn btn-danger" @click="deleteItem(deletevalue.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { category, deleteData } from "@/api";
interface Post {
  id: number;
  registry_key: string;
  invoice_key: string;
  payment_method_setting_id: string;
  item_name: string;
  amount: number;
  title: string; // Assuming this property exists
}
export default defineComponent({
  name: "CategoryList", // Rename the component to a multi-word name
  data() {
    return {
      siteInfoData: [] as Post[], // Explicitly define the type as Post[]
      transactions: [] as Post[], // Explicitly define the type as Post[]
      iscomponent: true,
      isupdate: true,
      isLoading: false,
      fullPage: false,
      isdata: true,
      deletevalue: {
        id: 0,
        title: "",
      },
      isDataTrueList: true,
      id: '', // Replace with your actual ID value
    };
  },
  methods: {
    async showLoadingOverlay() {
      try {
        this.isLoading = true;
        const response = await fetch('https://payment-gtwy.azurewebsites.net/payment/payment_registry_api/transactions/123456?page=0&size=5&field=customer_contact_number&keyword=8801767432558&format=json&fbclid=IwAR0GHhe-nip0ReeW3XTcEHirQU6X15vBoDjzxLbCjaDRPUCaZxioSQRMBsk');

        if (response.status === 200) {
          const data = await response.json();
          this.transactions = data.transactions;
          this.isLoading = false;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async deleteItem(id: number) {
      try {
        await deleteData(id);
        alert("Item deleted successfully");
        const closeBtn = document.getElementById('myCloseButton');
        if (closeBtn) {
          closeBtn.click();
        }
        this.siteInfoData = this.siteInfoData.filter((item: any) => item.id !== id);
      } catch (error) {
        alert("Error occurred while deleting item");
        console.error(error);
      }
    },
    deleteclick(id: number, title: string) {
      //this.editvalue = `${title} (${icon}): ${link}`;
      this.deletevalue.id = id;
      this.deletevalue.title = title;
    },
    sendData(id: string) {
      this.$emit('data-emitted', {
        isDataTrueList: this.isDataTrueList,
        id,
      });
    },
  },
  mounted() {
    this.showLoadingOverlay();
  },
});
</script>