
import DashBoardView from '../../views/DashBoardView.vue'

export default {
  title: 'Pages/Home',
  component: DashBoardView,
};

export const Default = () => ({
  components: { DashBoardView },
  template: '<DashBoardView />',
});
