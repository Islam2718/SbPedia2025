<template>
      <!-- Navbar -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" ref="modalButton" id="buttonModal" style="display: none;">
    Launch static backdrop modal
  </button>

  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
      <div class="modal-content h-100">
        <div class="modal-header">
          <!-- <h5 class="modal-title" id="modalToggleLabel">Choose an image </h5> -->
          <button class="btn" type="button" @click="seeAllbtn()" :class="{ 'btn-primary': btnActive }" > Choose File </button>
          <button class="btn" type="button" @click="uploadBtn()" :class="{ 'btn-primary': !btnActive }"> Upload File </button>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="alert alert-success" role="alert" v-if="successReport">Deleted Successfully</div>
           <!-- here  -->
           
            <div class="see-all" v-if="btnActive">
              <div class="row">
                <div class="col-md-2 col-lg-2 col-xl-2 col-6 mb-3" v-for="(file, index) in allFile" :key="index">
                  <div v-if="selectedImage == file">  
                    <div class="border card m-1" style="background: #d7d7d7;">
                      <img :src="'https://file.aaatradeinternational.com/' + file" class="img-fluid" style="width: 100%; height:130px; border:2px solid #008AD1; border-radius:3px;" @click="deSelectImgFunc(file)">
                    </div>
                  </div>
                  <div v-else>
                    <div class="border card" >
                      <img :src="'https://file.aaatradeinternational.com/' + file" alt="" class="img-fluid" style="width: 100%; height:140px; border-radius:3px;" @click="selectImgFunc(file)">
                    </div>
                  </div>
                </div>
              </div>  
            </div>
            <div class="upload"  v-else >
              <form class="row">
                <div class="m-5 col-4 mx-auto border form-group">                  
                  <input type="file" class="form-control" ref="fileInput" @change="handleFileChange">                  
                </div>                
              </form> 
              <div class="progress col-8 mx-auto">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
              </div>                         
            </div>
        </div>
        <div class="modal-footer">
          <span v-if="selectedImage">
            <button type="button" class="btn btn-danger mx-1" @click="deleteFileFunc()">Delete</button>
            <button type="button" class="btn btn-primary mx-1">Insert</button>
          </span>
          <span v-else>
            <button type="button" class="btn btn-danger mx-1" disabled>Delete</button>
            <button type="button" class="btn btn-primary mx-1" disabled>Insert</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import bootstrap from "bootstrap";
import { defineComponent, onMounted, ref } from "vue";
import { useStore } from 'vuex';
import axios from '../../node_modules/axios/index';

export default defineComponent({
  name: 'UploadModal',

  setup() {
    const store = useStore();
    const token = store.state.auth.token || localStorage.getItem('token');
    const allFile = ref({
      file_name: {},
    });
    const successReport = ref(false);
    const shouldShowActive= ref(false);
    const btnActive= ref(true);
    const selectedImage = ref(null);
    const uploadImage = ref(null);

    // Create a ref to hold the modal button element
    const getAllUploadsFileFunc = async () => {
      try {
        const response = await axios.get('https://api.aaatradeinternational.com/api/files');

        if (response.status == 200) {
          // Fix the typo here
          allFile.value = response.data.file_names;   
          console.log("_allFile", allFile.value);       
        }
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };

    const selectImgFunc = (item: any) => {
      selectedImage.value = item;
    };
    const deSelectImgFunc = (item: any) => {
      selectedImage.value = null;
    };
    // remove file from server
    const deleteFileFunc = async () => {
      try {
        const response = await axios.get('https://api.aaatradeinternational.com/api/remove-file/' + selectedImage.value,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        if (response.status === 200) {
          successReport.value = true;
          getAllUploadsFileFunc();
          setInterval(() => {
            successReport.value = false;
          }, 3000);
        }
      } catch (error) {
        console.error('Error deleting file:', error);
      }
    };
    const uploadFileFunc = async () => {
      try {      
         // Create a FormData object
          const formData = new FormData();
          
          // Append the file to the FormData object
          // Check if uploadImage.value is null
          if (uploadImage.value) {
            // Append the file to the FormData object
            formData.append('file', uploadImage.value);
          } 
          // Make the POST request with the FormData
          const response = await axios.post(
            'https://api.aaatradeinternational.com/api/upload-single',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data', // Set the content type for the file upload
                Authorization: `Bearer ${token}`,
              },
            }
          );
        if (response.status === 200) {
          successReport.value = true;
          btnActive.value = true;
          getAllUploadsFileFunc();
          setInterval(() => {
            successReport.value = false;
          }, 3000);
        }
      } catch (error) {
        console.error('Error deleting file:', error);
      }
    };  

    const uploadBtn =async () => {
      btnActive.value = false;
    }
    const seeAllbtn =async () => {
      btnActive.value = true;
    }
    const handleFileChange = (event: { target: any; }) => {
      const fileInput = event.target;
      if (fileInput.files.length > 0) {
        uploadImage.value = fileInput.files[0];
      } else {
        uploadImage.value = null;
      }
      uploadFileFunc();
    };
    onMounted(() => {
        getAllUploadsFileFunc();
        const modalButton = document.getElementById('buttonModal');
        if (modalButton) {
            modalButton.click();
        }
       
    });

    return {
      modalButton: ref(null),
      allFile, // Fix the typo here
      selectImgFunc,
      selectedImage,
      successReport,
      deleteFileFunc,
      shouldShowActive,
      btnActive,
      uploadBtn,
      seeAllbtn,
      uploadFileFunc,
      uploadImage,
      deSelectImgFunc,
      handleFileChange
    };
  }
});
</script>