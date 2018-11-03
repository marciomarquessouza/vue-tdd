<template>
  <div>
    <h1>Hello World</h1>
    <user-search />
    <user-profile />
  </div>
</template>

<script>

import VUserProfile from '@/components/VUserProfile';
import VUserSearch from '@/components/VUserSearch';

export default {
  name: 'UserView',
  components: {
    'user-profile': VUserProfile,
    'user-search': VUserSearch,
  },
};
</script>
