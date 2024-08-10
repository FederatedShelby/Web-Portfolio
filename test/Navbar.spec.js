import { shallowMount } from '@vue/test-utils';
import VueScrollTo from 'vue-scrollto';
import Navbar from '~/components/Navbar.vue';

jest.mock('vue-scrollto', function scrollTo() {
  return jest.fn();
});

describe('Navbar.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Navbar);
  });

  it('renders the navbar', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the profile image', () => {
    const profileImg = wrapper.find('img');
    expect(profileImg.exists()).toBe(true);
    expect(profileImg.attributes('src')).toBe('Shelby_profile_image.jpeg');
  });

  it('renders main text', () => {
    const mainText = wrapper.find('span');
    expect(mainText.exists()).toBe(true);
    expect(mainText.text()).toBe('Seong Kyu Sohn | Portfolio');
  });

  it('renders buttons for each section', () => {
    const buttons = wrapper.findAll('a');
    const categoriesData = wrapper.vm.categories;
    expect(buttons.length).toBe(categoriesData.length - 1);
    buttons.wrappers.forEach((button, bIndex) => {
      const category = categoriesData[bIndex];
      expect(button.text()).toBe(category.name);
      expect(button.attributes('href')).toBe(category.href);
    });
  });

  it('calls scrollTo when a section button is clicked', async () => {
    const buttons = wrapper.findAll('a');
    const firstButton = buttons.at(0);
    const categoriesData = wrapper.vm.categories;
    await firstButton.trigger('click');
    expect(VueScrollTo).toHaveBeenCalledWith(
      categoriesData[0].href,
      500,
      expect.objectContaining({
        easing: 'ease-in-out',
      })
    );
  });
});
