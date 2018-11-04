<script>
import { mapState } from 'vuex';
import VUserProfile from '@/components/VUserProfile';
import VUserSearch from '@/components/VUserSearch';

export default {
  name: 'UserView',
  components: {
    'user-profile': VUserProfile,
    'user-search': VUserSearch,
  },
  methods: {
    searchUser(userName) {
      this.$store.dispatch('SEARCH_USER',{ userName });
    },
  },
  computed: {
    ...mapState({
      user: 'user',
    }),
  },
};
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <user-search @submitted="searchUser"/>
    <user-profile :user="user"/>
  </div>
</template>
