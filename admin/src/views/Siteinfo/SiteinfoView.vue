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
                    <span class="text-muted fw-light">Site Info </span>Settings
                  </h4>
                </div>
              </div>
              <!-- Basic Layout & Basic with Icons -->
              <div class="row">
                <!-- Basic Layout -->
                <div class="col-md-12 col-sm-12">
                  <!-- form..  -->
                  <div>
                    <Form />
                  </div>                  
                </div>
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
import { defineComponent } from "vue";
import FooterView from "../../components/FooterView.vue";
import Topbar from "../../components/Topbar.vue";
import Form from "./Components/Form.vue";

export default defineComponent({
  components: { Topbar, FooterView, Form },

  data() {
    return {
      valueToShow: 'Hello from ParentComponent!'
    };
  },
  watch: {
    '$route.params.id': {
      // immediate: true,
      handler() {
        console.log('_id900_', this.$route.params.id);
      },
    },
  },
  methods: {
    // console.log('_myParams_', this.$route.params.id)    
  },

  mounted() {
    //mounted ...
  },

});
</script>