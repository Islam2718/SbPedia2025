<template>
      <!-- Navbar -->
      <nav
        class="layout-navbar navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div
          class="navbar-nav-right d-flex align-items-center"
          id="navbar-collapse"
        >
          <!-- Search -->
          <div class="navbar-nav align-items-center">
            <div class="nav-item d-flex align-items-center">
              <h5 class="m-0 p-0 text-primary">:) Dahsboard</h5>
            </div>
          </div>
          <!-- /Search -->

          <ul class="navbar-nav flex-row align-items-center ms-auto">
            <!-- Place this tag where you want the button to render. -->
            <li class="nav-item lh-1 me-3">
              <a
                class="github-button"
                href="https://phicsart.com/"
                target="_blank"
                >Abdur Rahman</a
              >
            </li>

            <!-- User -->
            <li class="nav-item navbar-dropdown dropdown-user dropdown">
              <a
                class="nav-link dropdown-toggle hide-arrow"
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
              >
                <div class="avatar avatar-online">
                <img
                  src="/pos_images/profile_user.png"
                  alt="n/a"
                  class="w-px-40 h-auto rounded-circle"
                />
                </div>
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <a class="dropdown-item" href="#">
                    <div class="d-flex">
                      <div class="flex-shrink-0 me-3">
                        <div class="avatar avatar-online">
                          <img
                            src="/pos_images/profile_user.png"
                            alt="n/a"
                            class="w-px-40 h-auto rounded-circle"
                          />
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <span class="fw-semibold d-block">Abdur Rahman</span>
                        <small class="text-muted">Admin</small>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <div class="dropdown-divider"></div>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <i class="bx bx-user me-2"></i>
                    <span class="align-middle">My Profile</span>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <i class="bx bx-cog me-2"></i>
                    <span class="align-middle">Security Settings</span>
                  </a>
                </li>
                <li>
                  <div class="dropdown-divider"></div>
                </li>
                <li>
                  <button class="dropdown-item" type="submit" @click="logoutFunc">
                    <i class="bx bx-power-off me-2"></i>
                    <span class="align-middle">Log Out</span>
                  </button>
                </li>
              </ul>
            </li>
            <!--/ User -->
          </ul>
        </div>
      </nav>
      <!-- / Navbar -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from 'vuex';
import axios from '../../node_modules/axios/index';



export default defineComponent({
  name: 'TopBar',

  setup() {
    const store = useStore();

    const logoutFunc = async () => {
      try {
        const token = store.state.auth.token || localStorage.getItem('token');

        const response = await axios.post('https://api.aaatradeinternational.com/api/logout',
          {},  
          {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }            
          );

        if (response.status == 200) {
          // Clear token from local storage and Vuex store
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          // store.commit('auth/SET_TOKEN', null);
          // router.push('/');
          window.location.reload();
        }
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };

    return {
      logoutFunc,
    };
  }
});
</script>


