<template>
    <!-- Layout container -->
    <div class="layout-page">
      <Topbar />
      <!-- Content wrapper -->
      <div class="content-wrapper">
        <!-- Content -->
        <div class="px-4 flex-grow-1 container-p-y">
          <div class="row">
            <div class="col-lg-8 mb-4 order-0">
              <div class="card">
                <div class="d-flex align-items-end row">
                  <div class="col-sm-7">
                    <div class="card-body">
                      <h5 class="card-title text-primary">
                        Package Information 🎉
                      </h5>
                      <p class="mb-4">
                      <span class="fw-bold">90</span> Days Remaining...
                      </p>

                      <a
                        href="javascript:;"
                        class="btn btn-sm btn-outline-primary"
                        >Update Package</a
                      >
                    </div>
                  </div>
                  <div class="col-sm-5 text-center text-sm-left">
                    <div class="card-body pb-0 px-0 px-md-4">
                      <img
                        src="/assets/img/illustrations/man-with-laptop-light.png"
                        height="140"
                        alt="View Badge User"
                        data-app-dark-img="illustrations/man-with-laptop-dark.png"
                        data-app-light-img="illustrations/man-with-laptop-light.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 order-1">
              <div class="row">
                <div class="col-lg-6 col-md-12 col-6 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <div
                        class="card-title d-flex align-items-start justify-content-between"
                      >
                        <div class="avatar flex-shrink-0">
                          <img
                            src="/assets/img/icons/unicons/chart-success.png"
                            alt="chart success"
                            class="rounded"
                          />
                        </div>
                        <div class="dropdown">
                          <button
                            class="btn p-0"
                            type="button"
                            id="cardOpt3"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="cardOpt3"
                          >
                            <a class="dropdown-item" href="javascript:void(0);"
                              >View More</a
                            >
                            <a class="dropdown-item" href="javascript:void(0);"
                              >Delete</a
                            >
                          </div>
                        </div>
                      </div>
                      <span class="fw-semibold d-block mb-1">Profit</span>
                      <h3 class="card-title mb-2">$12,628</h3>
                      <small class="text-success fw-semibold"
                        ><i class="bx bx-up-arrow-alt"></i> +72.80%</small
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12 col-6 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <div
                        class="card-title d-flex align-items-start justify-content-between"
                      >
                        <div class="avatar flex-shrink-0">
                          <img
                            src="/assets/img/icons/unicons/wallet-info.png"
                            alt="Credit Card"
                            class="rounded"
                          />
                        </div>
                        <div class="dropdown">
                          <button
                            class="btn p-0"
                            type="button"
                            id="cardOpt6"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="cardOpt6"
                          >
                            <a class="dropdown-item" href="javascript:void(0);"
                              >View More</a
                            >
                            <a class="dropdown-item" href="javascript:void(0);"
                              >Delete</a
                            >
                          </div>
                        </div>
                      </div>
                      <span>Sales</span>
                      <h3 class="card-title text-nowrap mb-1">$4,679</h3>
                      <small class="text-success fw-semibold"
                        ><i class="bx bx-up-arrow-alt"></i> +28.42%</small
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Total Revenue -->
            <div class="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
              <div class="card">
                <div class="row row-bordered g-0">
                  <div class="col-md-8">
                    <h5 class="card-header m-0 me-2 pb-3">Total Revenue</h5>
                    <div id="totalRevenueChart" class="px-2"></div>
                  </div>
                  <div class="col-md-4">
                    <div class="card-body">
                      <div class="text-center">
                        <div class="dropdown">
                          <button
                            class="btn btn-sm btn-outline-primary dropdown-toggle"
                            type="button"
                            id="growthReportId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            2022
                          </button>
                          <div
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="growthReportId"
                          >
                            <a class="dropdown-item" href="javascript:void(0);"
                              >2021</a
                            >
                            <a class="dropdown-item" href="javascript:void(0);"
                              >2020</a
                            >
                            <a class="dropdown-item" href="javascript:void(0);"
                              >2019</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="growthChart"></div>
                    <div class="text-center fw-semibold pt-3 mb-2">
                      62% Company Growth
                    </div>

                    <div
                      class="d-flex px-xxl-4 px-lg-2 p-4 gap-xxl-3 gap-lg-1 gap-3 justify-content-between"
                    >
                      <div class="d-flex">
                        <div class="me-2">
                          <span class="badge bg-label-primary p-2"
                            ><i class="bx bx-dollar text-primary"></i
                          ></span>
                        </div>
                        <div class="d-flex flex-column">
                          <small>2022</small>
                          <h6 class="mb-0">$32.5k</h6>
                        </div>
                      </div>
                      <div class="d-flex">
                        <div class="me-2">
                          <span class="badge bg-label-info p-2"
                            ><i class="bx bx-wallet text-info"></i
                          ></span>
                        </div>
                        <div class="d-flex flex-column">
                          <small>2021</small>
                          <h6 class="mb-0">$41.2k</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--/ Total Revenue -->
            <div class="col-12 col-md-8 col-lg-4 order-3 order-md-2">
              <div class="row">
                <div class="col-6 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <div
                        class="card-title d-flex align-items-start justify-content-between"
                      >
                        <div class="avatar flex-shrink-0">
                          <img
                            src="/assets/img/icons/unicons/paypal.png"
                            alt="Credit Card"
                            class="rounded"
                          />
                        </div>
                        <div class="dropdown">
                          <button
                            class="btn p-0"
                            type="button"
                            id="cardOpt4"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="cardOpt4"
                          >
                            <a class="dropdown-item" href="javascript:void(0);"
                              >View More</a
                            >
                            <a class="dropdown-item" href="javascript:void(0);"
                              >Delete</a
                            >
                          </div>
                        </div>
                      </div>
                      <span class="d-block mb-1">Payments</span>
                      <h3 class="card-title text-nowrap mb-2">$2,456</h3>
                      <small class="text-danger fw-semibold"
                        ><i class="bx bx-down-arrow-alt"></i> -14.82%</small
                      >
                    </div>
                  </div>
                </div>
                <div class="col-6 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <div
                        class="card-title d-flex align-items-start justify-content-between"
                      >
                        <div class="avatar flex-shrink-0">
                          <img
                            src="/assets/img/icons/unicons/cc-primary.png"
                            alt="Credit Card"
                            class="rounded"
                          />
                        </div>
                        <div class="dropdown">
                          <button
                            class="btn p-0"
                            type="button"
                            id="cardOpt1"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div class="dropdown-menu" aria-labelledby="cardOpt1">
                            <a class="dropdown-item" href="javascript:void(0);"
                              >View More</a
                            >
                            <a class="dropdown-item" href="javascript:void(0);"
                              >Delete</a
                            >
                          </div>
                        </div>
                      </div>
                      <span class="fw-semibold d-block mb-1">Transactions</span>
                      <h3 class="card-title mb-2">$14,857</h3>
                      <small class="text-success fw-semibold"
                        ><i class="bx bx-up-arrow-alt"></i> +28.14%</small
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- / Content -->
        <FooterView />
      </div>
      <!-- Content wrapper -->
  </div>
</template>
<script lang="ts">
import router from '@/router';
import { defineComponent, onMounted, ref } from 'vue';
import { useStore } from 'vuex'; // Import useStore from Vuex
import axios from '../../../node_modules/axios/index';
import FooterView from "../../components/FooterView.vue";
import Topbar from '../../components/Topbar.vue';

// const companyName = ref('');
// const companyEmail = ref('');
// const companyPhone = ref('');
// const companyAddress = ref('');
export default defineComponent({
  name: 'DashboardVue',
  components: {Topbar, FooterView},
  data() {
    return {
    };
  },
  methods: {},

  async created() {
    // show the loading overlay
  },

  setup() {
    const isToggled = ref(false);
    const simulateAuthentication = () => {
      // Replace this with your actual authentication logic
      // Example: authenticated.value = true;
    };
 const toggleClass = () => {
      isToggled.value = !isToggled.value;
      const html = document.querySelector('html');
      if (html) {
        html.classList.toggle('layout-menu-expanded', isToggled.value);
      }
    };
    const storeInstance = useStore();

    // Function to show the modal

   
    const logout = async () => {
      try {
        const token = storeInstance.state.auth.token || localStorage.getItem('token');
            if (!token) {
              throw new Error('Token not found');
            }
        // Call the logout API    
          console.log('_token', token);
          const response = await axios.post('https://pos-api.phicsart.com/api/logout',
          {},  
          {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }            
          );

        console.log('_', response);



        if (response.status === 200) {
          // Logout successful
          // Clear user-related data from Vuex store and local storage
          storeInstance.commit('auth/CLEAR_USER_DATA');
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
          localStorage.removeItem('companyId');

          // Redirect to the login page or perform any other necessary actions
          // Example: router.push('/login');
          router.push('/');
        } else {
          // Logout API returned an unexpected status code
          console.error('Logout failed:', response.statusText);
        }
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };

    onMounted(async () => {
      simulateAuthentication(); // Simulate the authentication check
      // await getSiteInfo(); // Retrieve site info
      const authToken = storeInstance.state.auth.token;
      console.log('Authentication Token:', authToken);      
    });

    return {
      isToggled,
      simulateAuthentication,
      // getSiteInfo,
      toggleClass,
      logout,
    };
  },
});
</script>


<style scoped>
.dashboard {
  text-align: center;
}
</style>

