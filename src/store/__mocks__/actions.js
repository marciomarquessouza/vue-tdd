import userFixture from '../../../test/unit/fixture/user';

export default {
  SEARCH_USER: jest.fn().mockResolvedValue(userFixture),
};
