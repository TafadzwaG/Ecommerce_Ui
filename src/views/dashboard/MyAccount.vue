<template>
  <div class="main-content-wrap section-ptb my-account-page">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="account-dashboard">
            <upper-info> </upper-info>
            <div class="row">
              <div class="col-md-12 col-lg-2">
                <!-- Nav tabs -->
                <ul role="tablist" class="">
                  <li>
                    <router-link
                      class="nav-link tab-link"
                      :to="{ name: 'DashboardTitle' }"
                      >Dashboard</router-link
                    >
                  </li>
                  <li>
                    <router-link class="nav-link tab-link" :to="{ name: 'Orders' }"
                      >Orders</router-link
                    >
                  </li>

                  <li>
                    <router-link class="nav-link tab-link" :to="{ name: 'Address' }"
                      >Addresses</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      class="nav-link tab-link"
                      :to="{ name: 'AccountDetails' }"
                      >Account details</router-link
                    >
                  </li>
                </ul>
              </div>

              <div class="col-md-12 col-lg-10">
                <div class="tab-content dashboard-content">
                  <router-view></router-view>
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
import { mapGetters } from "vuex";
import UpperInfo from "@/components/dashboard/UpperInfo.vue";
export default {
  components: {
    UpperInfo,
  },
  data: () => {},
  computed: {
    ...mapGetters([""]),
  },
  mounted() {
    this.$router.push({ name: "DashboardTitle" });
  },
  methods: {
    async logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/");
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(~@/assets/css/account.scss);
</style>
