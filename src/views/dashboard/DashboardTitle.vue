<template>
  <div class="tab-pane active" id="dashboard">
    <h3>Dashboard</h3>
    <p>
      From your account dashboard. you can easily check &amp; view your

      <router-link :to="{ name: 'Orders' }">recent orders</router-link>, manage your

      <router-link :to="{ name: 'Address' }">shipping and billing addresses</router-link>
      and
      <router-link :to="{ name: 'AccountDetails' }"
        >edit your password and account details.</router-link
      >
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url(~@/assets/css/account.scss);
</style>
