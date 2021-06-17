<template>
  <div class="login-container">
    <account-crumb :current_location="'Login'" :title="'Account Login'"> </account-crumb>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 main-content" style="order: 2">
          <div class="account-login-register">
            <div class="login_content">
              <div class="registered-users">
                <div id="CustomerLoginForm" class="form-vertical">
                  <div class="row">
                    <div class="col-md-6 mx-auto mb-4">
                      <div class="form-box">
                        <h3 class="font-weight-bold mb-2 login-account">Login</h3>
                        <div class="content">
                          <form id="customer_login" accept-charset="UTF-8">
                            <input type="hidden" name="form_type" /><input
                              type="hidden"
                              name="utf8"
                              value="✓"
                            />
                            <ul class="form-list">
                              <li>
                                <label for="CustomerEmail" class="hidden-label"
                                  ><span>Email Address</span><em>*</em></label
                                >
                                <input
                                  type="email"
                                  autofocus
                                  required
                                  class="input-full"
                                  v-model="email"
                                />
                              </li>
                              <li>
                                <label for="CustomerPassword" class="hidden-label"
                                  ><span>Password</span><em>*</em></label
                                >
                                <input
                                  class="input-full"
                                  type="password"
                                  required
                                  v-model="password"
                                />
                              </li>
                              <li class="mb-4">
                                <a href="#recover" class="RecoverPassword"
                                  >Forgot your password?</a
                                >
                              </li>

                              <base-loader v-if="isLoading"> </base-loader>
                              <li v-if="!isLoading" class="mb-4">
                                <button
                                  type="submit"
                                  class="btn w-100 btn-dark"
                                  title="Log in"
                                  @click.prevent="signin"
                                >
                                  <span class="login-account">Log in</span>
                                </button>
                              </li>
                              <li v-if="!isLoading" class="mb-lg-0">
                                <router-link
                                  type="button"
                                  title="Create an
                                            Account"
                                  class="btn w-100 btn-dark"
                                  :to="{ name: 'Register' }"
                                >
                                  <span class="create-account">Create an Account</span>
                                </router-link>
                              </li>
                            </ul>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountCrumb from "@/components/ui/AccountCrumb.vue";
import BaseLoader from "@/components/ui/BaseLoader.vue";
export default {
  components: {
    AccountCrumb,
    BaseLoader,
  },
  data() {
    return {
      email: "",
      password: "",
      formIsValid: false,
      isLoading: false,
      error: null,
    };
  },
  computed: {
    getToken() {
      return this.$store.getters.token;
    },
  },
  methods: {
    async signin() {
      this.formIsValid = true;
      if (this.email === "" || !this.email.includes("@") || this.password.length < 6) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;

      const signInDetails = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch("signIn", signInDetails);
        console.log("User SignIn Successfully..");

        this.$router.replace("/products");
      } catch (error) {
        this.isLoading = false;
        this.error = error.message || "Failed to Signin";
      }

      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.login-account,
.create-account {
  font-size: 17px !important;
}
.create-account {
  color: #fff !important;
}

.RecoverPassword {
  box-sizing: border-box;
  color: rgb(34, 37, 41);
  text-decoration: none;
  background-color: transparent;
  margin: 0px;
  padding: 0px;
  font-weight: 600;
  visibility: visible;
}
.login-container {
  margin-top: 2rem;
}
</style>
