<template>
  <div>
    <h1>{{ user.name }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      required: true,
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
