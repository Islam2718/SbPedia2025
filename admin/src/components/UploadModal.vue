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
          <button class="btn btn-primary" type="button"> Select an Image ! </button>           
          <span class="mx-2">OR, </span>
          <form class="m-2">            
            <input type="file" class="form-control ml-3 btn border" ref="fileInput" @change="handleFileChange">
          </form>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="alert alert-success" role="alert" v-if="successReport">Action Success...</div>
          <!-- progress bar start  -->
          <div class="progress col-11 mx-auto mt-2 mb-4" v-if="uploadProgress !== null">
              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :style="{ width: uploadProgress + '%' }"></div>
          </div>
          <!-- progress bar end  -->
          <!-- show all image loop here  -->
          <div class="see-all">
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
        </div>
        <div class="modal-footer">
          <span v-if="selectedImage">
            <button type="button" class="btn btn-secondary mx-1">Cancel</button>
            <button type="button" class="btn btn-danger mx-1" @click="deleteFileFunc()">Delete</button>
            <button type="button" class="btn btn-primary mx-1" @click="pickedFileFunc()">Insert</button>
          </span>
          <span v-else>
            <button type="button" class="btn btn-secondary mx-1">Cancel</button>
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
import { defineComponent, onMounted, ref, getCurrentInstance  } from "vue";
import { useStore } from 'vuex';
import axios from '../../node_modules/axios/index';

export default defineComponent({
  name: 'UploadModal',

  setup(props, context) {
    const uploadProgress = ref<number | null>(null);
    const store = useStore();
    const token = store.state.auth.token || localStorage.getItem('token');
    const allFile = ref({ file_name: {} });
    const successReport = ref(false);
    const shouldShowActive= ref(false);
    const selectedImage = ref(null);
    const uploadImage = ref(null);
    const instance = getCurrentInstance();
    // get all files function
    const getAllUploadsFileFunc = async () => {
      try {
        const response = await axios.get('https://api.aaatradeinternational.com/api/files');

        if (response.status === 200) {
          // Reverse the order of the array before assigning it to allFile.value
          allFile.value = response.data.file_names;
          console.log("Reversed _allFile", allFile.value);
        }
      } catch (error) {
        console.error('Error fetching uploads:', error);
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

    // upload file function with progress bar
    const uploadFileFunc = async () => {
      try {
        const formData = new FormData();
        if (uploadImage.value) {
          formData.append('file', uploadImage.value);
        }

        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
          onUploadProgress: (progressEvent: any) => {
            // Calculate and set the upload progress
            const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
            uploadProgress.value = progress;
          },
        };

        const response = await axios.post('https://api.aaatradeinternational.com/api/upload-single', formData, config);

        if (response.status === 200) {
          console.log('response_', response.data.url);
          successReport.value = true;
          getAllUploadsFileFunc();
          selectedImage.value = response.data.url
          uploadProgress.value = null;
          setInterval(() => {
            successReport.value = false;
          }, 3000);
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        uploadProgress.value = null;
      }
    };  

    // handle file change
    const handleFileChange = (event: { target: any; }) => {
      const fileInput = event.target;
      if (fileInput.files.length > 0) {
        uploadImage.value = fileInput.files[0];
      } else {
        uploadImage.value = null;
      }
      uploadFileFunc();
    };

    const pickedFileFunc = () => {      
      if (instance) {
        instance.emit("selectImage", selectedImage.value);
        const modalButton = document.getElementById('buttonModal');
        if (modalButton) {
            modalButton.click();
        }
      }
      // console.log('_file_name', selectedImage.value);   
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
      // btnActive,
      // uploadBtn,
      // seeAllbtn,
      uploadFileFunc,
      uploadImage,
      deSelectImgFunc,
      handleFileChange,
      uploadProgress,
      pickedFileFunc
    };
  }
});
</script>