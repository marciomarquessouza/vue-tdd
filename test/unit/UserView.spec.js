// UserView.spec.js

import { shallowMount } from '@vue/test-utils';
import UserView from '@/views/UserView';
import VUserSearchForm from '@/components/VUserSearchForm';
import VUserProfile from '@/components/VUserProfile';

describe('UserView', () => {
  it('renders the component', () => {
    // Arrange
    const wrapper = shallowMount(UserView);
    // Assert
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders main child components', () => {
    // Arramge
    const wrapper = shallowMount(UserView);
    const userSearchForm = wrapper.find(VUserSearchForm);
    const userProfile = wrapper.find(VUserProfile);
    // Assert
    expect(userSearchForm.exists()).toBe(true);
    expect(userProfile.exists()).toBe(true);
  });
});
