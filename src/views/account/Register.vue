<template>
  <div class="register-container">
    <account-crumb :current_location="'Create Account'" :title="'Create Account'">
    </account-crumb>
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto mb-4">
          <div class="form-box">
            <h3 class="legend">Register</h3>
            <div class="content">
              <ul class="form-list">
                <li class="">
                  <label for="FirstName" class="hidden-label"
                    ><span>Name</span><em>*</em></label
                  >
                  <input
                    type="text"
                    name="customer[first_name]"
                    id="FirstName"
                    class="input-full"
                    autocapitalize="words"
                    autofocus=""
                    required=""
                    v-model="name"
                  />
                </li>

                <li>
                  <label for="Email" class="hidden-label css_inspector_current"
                    ><span>Email</span><em>*</em></label
                  >
                  <input
                    type="email"
                    name="customer[email]"
                    id="Email"
                    class="input-full"
                    autocorrect="off"
                    autocapitalize="off"
                    required=""
                    v-model="email"
                  />
                </li>
                <li>
                  <label for="CreatePassword" class="hidden-label"
                    ><span>Password</span><em>*</em></label
                  >
                  <input
                    type="password"
                    class="input-full"
                    required=""
                    v-model="password"
                  />
                </li>
                <li>
                  <label for="CreatePasswordConfirmation" class="hidden-label"
                    ><span>Password Confirmation</span><em>*</em></label
                  >
                  <input
                    type="password"
                    class="input-full"
                    required=""
                    v-model="password_confirmation"
                  />
                </li>

                <base-loader v-if="isLoading"> </base-loader>
                <li v-else class="mb-lg-0">
                  <p class="required">
                    <router-link class="already-have-account" :to="{ name: 'Login' }"
                      >Already have an account ?</router-link
                    >
                  </p>
                  <button
                    title="Submit"
                    class="btn btn-dark w-100"
                    @click.prevent="signup"
                  >
                    <span type="submit">Register</span>
                  </button>
                </li>
              </ul>
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
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
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
    async signup() {
      this.formIsValid = true;
      if (this.email === "" || !this.email.includes("@") || this.password.length < 6) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;

      const signUpDetails = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };

      try {
        await this.$store.dispatch("signUp", signUpDetails);
        console.log("User SignIn Successfully..");
        this.$router.replace("/");
      } catch (error) {
        this.isLoading = false;
        this.error = error.message || "Failed to signup";
      }

      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.already-have-account {
  box-sizing: border-box;
  color: rgb(34, 37, 41);
  text-decoration: none;
  background-color: transparent;
  margin: 0px;
  padding: 0px;
  font-weight: 600;
  visibility: visible;
}
.register-container {
  margin-top: 2rem;
}
</style>
