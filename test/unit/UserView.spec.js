import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import UserView from '@/views/UserView';
import VUserSearch from '@/components/VUserSearch';
import VUserProfile from '@/components/VUserProfile';
import initialState from '@/store/state';
import actions from '@/store/actions';
import userFixture from './fixture/user';

jest.mock('@/store/actions');

const localVue = createLocalVue();
localVue.use(Vuex);

describe('UserView', () => {
  let state;

  const build = () => {
    const wrapper = shallowMount(UserView, {
      localVue,
      store: new Vuex.Store({ state, actions }),
    });
    return {
      wrapper,
      userSearch: () => wrapper.find(VUserSearch),
      userProfile: () => wrapper.find(VUserProfile),
    };
  };

  beforeEach(() => {
    jest.resetAllMocks();
    state = { ...initialState };
  });

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
    state.user = userFixture;
    const { userProfile } = build();
    // Assets
    expect(userProfile().vm.user).toBe(state.user);
  });
  it('searchers for a user when received "submited"', () => {
    const expectedUser = 'Marcio';
    const { userSearch } = build();
    // act
    userSearch().vm.$emit('submitted', expectedUser);
    // assert
    expect(actions.SEARCH_USER).toHaveBeenCalled();
    expect(actions.SEARCH_USER.mock.calls[0][1]).toEqual({ userName: expectedUser });
  });
});
