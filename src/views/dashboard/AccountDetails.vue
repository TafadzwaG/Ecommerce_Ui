<template>
  <div class="tab-pane active" id="account-details">
    <h3>Account details</h3>
    <div class="login">
      <div class="login-form-container">
        <div class="account-login-form">
          <form action="#">
            <div class="account-input-box">
              <label>Name</label>
              <input type="text" name="first-name" v-model="name" />
              <label>Email</label>
              <input type="text" name="email-name" v-model="email" />
              <label>Password</label>
              <input type="password" name="user-password" v-model="password" />
              <label>Password Confirmation</label>
              <input
                type="password"
                name="user-password-confirmation"
                v-model="password_confirmation"
              />
            </div>
            <div class="button-box">
              <button class="btn default-btn" type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      name: "",
      email: "",
      password: null,
      password_confirmation: null,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import url(~@/assets/css/account.scss);
</style>
