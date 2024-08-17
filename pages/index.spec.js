import { shallowMount } from '@vue/test-utils';
import IndexPage from '~/pages/index.vue';
import Navbar from '~/components/Navbar.vue';

describe('IndexPage.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(IndexPage, {
      stubs: {
        Navbar: true,
      },
    });
  });

  it('renders the Navbar component', () => {
    expect(wrapper.findComponent(Navbar).exists()).toBe(true);
  });
});
