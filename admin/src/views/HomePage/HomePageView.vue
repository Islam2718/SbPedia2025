<template>
    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        <aside
          id="layout-menu"
          class="layout-menu menu-vertical menu bg-menu-theme"
        >
          <div class="app-brand demo">
            <router-link to="/" class="app-brand-link">
              <!-- [:v] -->
              <span class="app-brand-text demo menu-text fw-bolder ms-2 text-uppercase"
                >AAA TI</span
              >
            </router-link>
          </div>
          <div class="menu-inner-shadow"></div>
          <ul class="menu-inner py-1">
            <li
              v-for="menu in menus"
              :key="menu.id"
              class="menu-item"
              :class="{ active: isActive(menu) }"
            >
              <router-link
                class="menu-link"
                :to="menu.path"
                @click="toggle(menu)"
              >
                {{ menu.title }}
                <span v-if="menu.subItems" :class="{ arrow: true }"></span>
              </router-link>
  
              <ul v-if="menu.subItems && menu.show" class="menu-sub open">
                <li
                  v-for="subItem in menu.subItems"
                  :key="subItem.id"
                  class="menu-item"
                  :class="{ active: isActive(subItem) }"
                >
                  <router-link
                    class="menu-link"
                    :class="{ active: isActive(subItem) }"
                    :to="subItem.path"
                    >{{ subItem.title }}</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </aside>
        <router-view />
        <!-- / Layout page -->
      </div>
      <!-- Overlay -->
    </div>
</template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  interface Menu {
    id: number;
    title: string;
    path: string;
    show: boolean;
    subItems?: Menu[];
  }
  
  export default defineComponent({
    name: "HomePageView",
    data() {
      return {
        menus: [
          {
            id: 1,
            title: "Dashboard",
            icon: '<i class="menu-icon tf-icons bx bx-home-circle"></i>',
            path: "/",
            show: false,
          },
          {
            id: 2,
            title: "Siteinfo",
            icon: "user-secret",
            path: "/siteinfo",
            show: false,
          },
          {
            id: 3,
            title: "Business Settings",
            icon: "user-secret",
            path: "#0",
            show: false,
            subItems: [
              {
                id: 151,
                title: "Training Center",
                icon: '<i class="menu-icon tf-icons bx bx-home-circle"></i>',
                path: "/training-center",
                show: false,
              },
              {
                id: 122,
                title: "Resume",
                icon: '<i class="menu-icon tf-icons bx bx-home-circle"></i>',
                path: "/resume",
                show: false,
              },
              {
                id: 122,
                title: "Concern",
                icon: "user-secret",
                path: "/concern",
                show: false,               
              },
              {
                id: 122,
                title: "Person",
                icon: "user-secret",
                path: "/person",
                show: false,                
              },
              {
                id: 122,
                title: "Country",
                icon: "user-secret",
                path: "/country",
                show: false,              
              },
              {
                id: 122,
                title: "Certification",
                icon: "user-secret",
                path: "/certification",
                show: false,                
              },
              {
                id: 122,
                title: "Client",
                icon: "user-secret",
                path: "/client",
                show: false,
              },
              {
                id: 122,
                title: "Company",
                icon: "user-secret",
                path: "/company",
                show: false,
              },            
            ],
          },          
          {
            id: 4,
            title: "Pages",
            icon: "user-secret",
            path: "/page",
            show: false,
          },
          {
            id: 5,
            title: "Appearence",
            icon: "user-secret",
            path: "#0",
            show: false,
            subItems: [
              {
                id: 51,
                title: "Slider Settings",
                icon: '<i class="menu-icon tf-icons bx bx-home-circle"></i>',
                path: "/slider",
                show: false,
              },
              {
                id: 52,
                title: "Widget",
                icon: '<i class="menu-icon tf-icons bx bx-home-circle"></i>',
                path: "/widget",
                show: false,
              },
              {
                id: 53,
                title: "Social Settings",
                icon: "user-secret",
                path: "/social",
                show: false,               
              }          
            ],
          },          
          {
            id: 6,
            title: "Contact Us",
            icon: "user-secret",
            path: "/contact-us",
            show: false,
          },
          {
            id: 7,
            title: "Info Gallery",
            icon: "user-secret",
            path: "/info-gallery",
            show: false,
          },
          {
            id: 8,
            title: "News",
            icon: "user-secret",
            path: "/news",
            show: false,
          },
          {
            id: 9,
            title: "Users",
            icon: "user-secret",
            path: "/user",
            show: false,
          },
          {
            id: 10,
            title: "Log Out",
            icon: "user-secret",
            path: "/",
            show: false,
          },
        ],
        isLoading: false,
        fullPage: true,
        isActiveMenu: false,
        onCancel: () => void(0),
      };
    },
    mounted() {
      // Set isLoading to true when the component is mounted
      this.showLoadingOverlay();
    },
    methods: {
      isActive(menu: Menu) {
        let active = false;
        if (menu.path === this.$route.path) {
          active = true;
        } else if (menu.subItems) {
          for (const subItem of menu.subItems) {
            if (subItem.path === this.$route.path) {
              active = true;
              break;
            }
          }
        }
        return active;
      },
      toggle(menu: Menu) {
        menu.show = !menu.show;
      },
      // toggleClass() {
      //   this.isActiveMenu = !this.isActive;
      //   const html = document.querySelector("html");
      //   if (html) {
      //     html.classList.toggle("layout-menu-expanded", this.isActiveMenu);
      //   }
      // },
      async showLoadingOverlay() {
        try {
          // show the loading overlay
          this.isLoading = true;
  
          // wait for the component to render
          await this.$nextTick();
  
          // hide the loading overlay
          this.isLoading = false;
        } catch (error) {
          console.error(error);
        }
      },
    },
  });
  </script>
  <style scoped>
  .menu-item .menu-sub {
    display: block;
  }
  .menu-link {
    position: relative;
  }
  .menu-link .arrow {
    position: absolute;
    content: "";
    height: 10px;
    width: 10px;
    border-bottom: 1px solid #697a8d;
    border-right: 1px solid #697a8d;
    right: 25px;
    top: 15px;
    transform: rotate(45deg);
  }
  @media (max-width: 1199.98px) {
    .menu-inner {
      overflow-y: scroll;
    }
  }
  .layout-wrapper:not(.layout-horizontal)
    .bg-menu-theme
    .menu-inner
    > .menu-item.active:before {
    content: "";
    position: absolute;
    right: 0;
    width: 0.25rem;
    height: 2.6845rem;
    border-radius: 0.375rem 0 0 0.375rem;
    display: none;
  }
  .menu-item.active > .menu-link.router-link-active::before {
    content: "";
    position: absolute;
    right: 0;
    width: 0.25rem;
    height: 2.6845rem;
    border-radius: 0.575rem 0.575rem 0.575rem 0.575rem;
    background-color: #696cff;
  }
  .vl-overlay .vl-background {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    background: #435971;
    opacity: 0.15;
  }
  </style>
  