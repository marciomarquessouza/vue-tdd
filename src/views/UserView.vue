<template>
  <div>
    <h1>Hello World</h1>
    <user-search />
    <user-profile :user="user"/>
  </div>
</template>

<script>

import VUserProfile from '@/components/VUserProfile';
import VUserSearch from '@/components/VUserSearch';

export default {
  name: 'UserView',
  data() {
    return {
      user: {
        name: 'Marcio',
      },
    };
  },
  components: {
    'user-profile': VUserProfile,
    'user-search': VUserSearch,
  },
};
</script>
