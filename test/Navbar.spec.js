import { shallowMount } from '@vue/test-utils';
import VueScrollTo from 'vue-scrollto';
import Navbar from '~/components/Navbar.vue';

describe('Navbar.vue', () => {
  let wrapper;
  const categories = [
    {
      id: 1,
      name: 'About Me',
      href: '#aboutme',
      scrollToId: 'aboutme',
    },
    {
      id: 2,
      name: 'Experience',
      href: '#experience',
      scrollToId: 'experience',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#projects',
      scrollToId: 'projects',
    },
  ];

  beforeEach(() => {
    VueScrollTo.scrollTo = jest.fn();

    wrapper = shallowMount(Navbar, {
      propsData: {
        categories,
      },
    });
  });

  it('renders the navbar', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders main text', () => {
    const mainText = wrapper.find('span');
    expect(mainText.exists()).toBe(true);
    expect(mainText.text()).toBe('Samuel Sohn');
  });

  it('renders buttons for each section', () => {
    const buttons = wrapper.findAll('a');
    const categoriesData = wrapper.vm.categories;
    expect(buttons.length).toBe(categoriesData.length);
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
    expect(VueScrollTo.scrollTo).toHaveBeenCalledWith(
      categoriesData[0].href,
      500,
      expect.objectContaining({
        easing: 'ease-in-out',
        offset: -44,
      })
    );
  });
});
