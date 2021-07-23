<template>
  <div class="top-nav">
    <div class="conta">
      <ul class="top-navigation">
        <li>
          <router-link class="level-top" :to="{ name: 'Home' }"> Home </router-link>
        </li>
        <li>
          <router-link class="level-top" :to="{ name: 'ShopList' }">Shop</router-link>
        </li>

        <li>
          <router-link class="level-top" :to="{ name: 'Products' }">Products</router-link>
        </li>
        <li>
          <router-link class="level-top" :to="{ name: 'Faq' }">Faqs</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.ulmenu-block-right * {
  height: 100%;
}
.conta {
  margin-left: 10rem;
  margin-right: 10rem;
}
.top-nav {
  border-top: 1.5px solid #f4f4f4;
}
.level-top {
  box-sizing: border-box;
  color: rgb(34, 37, 41);
  text-decoration: none;
  background-color: transparent;
  display: block;
  outline: none;
  margin: 0px;
  font-size: 12px;
  text-transform: uppercase;
  padding: 18.5px 22px 20.5px 0px;
  font-weight: 500;
  letter-spacing: -0.3px;
  line-height: 1;
  position: relative;
  padding-top: 18px;
  padding-bottom: 18px;
  font-family: Poppins;
  font-style: normal;
}
</style>
