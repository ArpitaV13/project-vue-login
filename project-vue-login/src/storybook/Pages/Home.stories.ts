import HomeView from '../../views/HomeView.vue';


export default {
    title: 'Pages/Home',
    component: HomeView,
  };
  
  export const Default = () => ({
    components: { HomeView },
    template: '<HomeView />',
  });
  