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
                    <span class="text-muted fw-light">Client </span>Settings
                  </h4>
                </div>
                <div>
                  <button class="btn btn-primary mt-2" @click="toggleComponent" v-show="listShow">Add</button>
                  <button class="btn btn-primary mt-2" @click="toggleComponent" v-show="formShow">Back to List</button>
                  <!-- <router-link :to="{ name: 'Page' }" class="btn btn-primary mt-2" @click="toggleComponent" v-show="formShow"> -->
                    <!-- Back to  List
                  </router-link> -->
                </div>
              </div>
              <!-- Basic Layout & Basic with Icons -->
              <div class="row">
                <!-- Basic Layout -->
                <div class="col-md-12 col-sm-12">
                    <!-- table  -->
                    <div class="card mb-4" v-show="listShow">
                      <div class="card-body">
                        <div class="table-responsive text-nowrap">
                          <List />
                        </div>
                    </div>
                  </div>
                  <!-- form..  -->
                  <div v-show="formShow">
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
import router from "../../router";
import FooterView from "../../components/FooterView.vue";
import Topbar from "../../components/Topbar.vue";
import Form from "./Components/Form.vue";
import List from "./Components/List.vue";

export default defineComponent({
  components: { Topbar, FooterView, List, Form },

  data() {
    return {
      valueToShow: 'Hello from ParentComponent!',
      listShow: true,
      formShow: false,
    };
  },
  watch: {
    '$route.params.id': {
      // immediate: true,
      handler(newVal) {
        this.listShow = !this.listShow;
        this.formShow = !this.formShow;
      },
    },
  },
  methods: {
    toggleComponent() {
      this.listShow = !this.listShow; // Toggles the visibility
      this.formShow = !this.formShow; // Toggles the visibility
      if(this.$route.params.id){
        this.listShow = !this.listShow;
        this.formShow = !this.formShow;
        router.push({ name: "Client" });
      }
    },  
  },

  mounted() {
    //mounted ...
  },

});
</script>