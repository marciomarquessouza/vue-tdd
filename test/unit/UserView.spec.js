import { shallowMount } from '@vue/test-utils';
import UserView from '@/views/UserView';
import VUserSearch from '@/components/VUserSearch';
import VUserProfile from '@/components/VUserProfile';

describe('UserView', () => {
  const build = () => {
    const wrapper = shallowMount(UserView, {
      data: () => ({
        user: {},
      }),
    });
    return {
      wrapper,
      userSearch: () => wrapper.find(VUserSearch),
      userProfile: () => wrapper.find(VUserProfile),
    };
  };
  it('renders correctly', () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('renders main childs', () => {
    const { userSearch, userProfile } = build();
    // Assets
    expect(userSearch().exists()).toBe(true);
    expect(userProfile().exists()).toBe(true);
  });
  it('pass a binded user prop to user profile component', () => {
    const { wrapper, userProfile } = build();
    wrapper.setData({
      user: {
        name: 'Marcio',
      },
    });
    // Assets
    expect(userProfile().vm.user).toBe(wrapper.vm.user);
  });
});
