import { shallowMount } from '@vue/test-utils';
import UserView from '@/views/UserView';
import VUserSearch from '@/components/VUserSearch';
import VUserProfile from '@/components/VUserProfile';

describe('UserView', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(UserView);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders main childs', () => {
    const wrapper = shallowMount(UserView);
    const UserSearch = wrapper.find(VUserSearch);
    const UserProfile = wrapper.find(VUserProfile);
    // Assets
    expect(UserSearch.exists()).toBe(true);
    expect(UserProfile.exists()).toBe(true);
  });
});
