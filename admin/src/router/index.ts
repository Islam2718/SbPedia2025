import CertificationView from '@/views/Certification/CertificationView.vue';
import Client from '@/views/Client/ClientView.vue';
import Compnay from '@/views/Company/CompanyView.vue';
import Concern from '@/views/Concern/ConcernView.vue';
import ContactUs from '@/views/ContactUs/ContactUsView.vue';
import Country from '@/views/Country/CountryView.vue';
import DashboardView from '@/views/Dashboard/DashboardView.vue';
import InfoGallery from '@/views/InfoGallery/InfoGalleryView.vue';
import News from '@/views/News/NewsView.vue';
import PageView from '@/views/Page/PageView.vue';
import PageForm from '@/views/Page/Components/Form.vue';
import PageSectionForm from '@/views/Page/Components/SectionForm.vue';
import PageWidgetForm from '@/views/Page/Components/WidgetForm.vue';
import PersonView from '@/views/Person/PersonView.vue';
import Resume from '@/views/Resume/ResumeView.vue';
import Siteinfo from '@/views/Siteinfo/SiteinfoView.vue';
import SliderView from '@/views/Slider/SliderView.vue';
import Social from '@/views/Social/SocialView.vue';
import TrainingCenter from '@/views/TrainingCenter/TrainingCenter.vue';
import User from '@/views/User/UserView.vue';
import Widget from '@/views/Widget/WidgetView.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardView,
  },
  {
    path: '/siteinfo',
    name: 'Site Info',
    component: Siteinfo,
    meta: { showSpinner: true }
  },
  {
    path: '/certification/:id?',
    name: 'CertificationView',
    component: CertificationView,
    meta: { showSpinner: true }
  },
  {
    path: '/client/:id?',
    name: 'Client',
    component: Client,
    meta: { showSpinner: true }
  },
  {
    path: '/company/:id?',
    name: 'Company-View',
    component: Compnay,
    meta: { showSpinner: true }
  },
  {
    path: '/concern/:id?',
    name: 'concern-view',
    component: Concern,
    meta: { showSpinner: true }
  },
  {
    path: '/contact-us/:id?',
    name: 'ContactUs',
    component: ContactUs,
    meta: { showSpinner: true }
  },
  {
    path: '/country/:id?',
    name: 'Country',
    component: Country,
    meta: { showSpinner: true }
  },
  {
    path: '/info-gallery/:id?',
    name: 'InfoGallery',
    component: InfoGallery,
    meta: { showSpinner: true }
  },
  {
    path: '/news/:id?',
    name: 'News',
    component: News,
    meta: { showSpinner: true }
  },
  {
    path: '/page/:id?',
    name: 'Page',
    component: PageView,
    meta: { showSpinner: true }
  },
  {
    path: '/page/form/:id?',
    name: 'PageForm',
    component: PageForm,
    meta: { showSpinner: true }
  },
  {
    path: '/page/form/section/:id?',
    name: 'PageSectionForm',
    component: PageSectionForm,
    meta: { showSpinner: true }
  },
  {
    path: '/page/form/widget/:id?',
    name: 'PageWidgetForm',
    component: PageWidgetForm,
    meta: { showSpinner: true }
  },
  {
    path: '/person/:id?',
    name: 'PersonView',
    component: PersonView,
    meta: { showSpinner: true }
  },
  {
    path: '/resume/:id?',
    name: 'ResumeView',
    component: Resume,
    meta: { showSpinner: true }
  },
  {
    path: '/slider/:id?',
    name: 'Slider',
    component: SliderView,
    meta: { showSpinner: true }
  },
  {
    path: '/social/:id?',
    name: 'Social',
    component: Social,
    meta: { showSpinner: true }
  },
  {
    path: '/training-center/:id?',
    name: 'training-center',
    component: TrainingCenter,
    meta: { showSpinner: true }
  },
  {
    path: '/widget/:id?',
    name: 'Widget',
    component: Widget,
    meta: { showSpinner: true }
  },
  {
    path: '/user/:id?',
    name: 'User',
    component: User,
    meta: { showSpinner: true }
  },
];
// This is a navigation guard to restrict access to the /dashboard route

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
