// RegisterPage.stories.js or RegisterPage.stories.ts
import RegisterView from '../../views/RegisterView.vue';

export default {
  title: 'Pages/Register',
  component: RegisterView,
};

export const Default = () => ({
  components: { RegisterView },
  template: '<RegisterView />',
});
