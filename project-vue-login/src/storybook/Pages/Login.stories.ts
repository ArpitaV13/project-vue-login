// Login.stories.ts
import LoginView from '../../views/LoginView.vue'

export default {
  title: 'Pages/Login',
  component: LoginView,
};

export const Default = () => ({
  components: { LoginView },
  template: '<LoginView />',
});
