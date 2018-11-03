import { shallowMount } from '@vue/test-utils';
import UserView from '@/views/UserView';
import VUserSearch from '@/components/VUserSearch';
import VUserProfile from '@/components/VUserProfile';

const build = () => {
  const wrapper = shallowMount(UserView);
  return {
    wrapper,
    userSearch: () => wrapper.find(VUserSearch),
    userProfile: () => wrapper.find(VUserProfile),
  };
};

describe('UserView', () => {
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
});
