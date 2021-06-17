<template>
  <article>
    <header class="tabs">
      <ul>
        <li v-for="tab in tabs" :key="tab.props.title">
          <div
            class="nav-item"
            @click.prevent="selectedIndex = tab.props.title"
            :class="tab.props.title === selectedIndex && 'active'"
          >
            {{ tab.props.title }}
          </div>
        </li>
      </ul>
    </header>
    <section class="tabs-details">
      <slot></slot>
    </section>
  </article>
</template>
<script>
import { onBeforeMount, onMounted, onBeforeUpdate, provide, reactive, toRefs } from "vue";

const isTab = (node) => node.type.name === "Tab";
const isFragment = (node) =>
  typeof node.type == "symbol" && node.type.description == "Fragment";
const hasTabs = (node) => node.children && children.length && node.children.some(isTab);
const isTabParent = (node) => isFragment(node) && hasTabs(node);

export default {
  name: "Tabs",

  setup(_, { slots }) {
    const state = reactive({
      selectedIndex: null,
      tabs: [],
      count: 0,
    });

    provide("TabsProvider", state);

    const selectedTab = (i) => {
      state.selectedIndex = i;
    };

    const update = () => {
      if (slots.default) {
        state.tabs = slots
          .default()
          .filter((node) => isTab(node) || isTabParent(node))
          .flatMap((node) => (isTabParent(node) ? node.children : node));
      }
    };

    onBeforeMount(() => update());
    onBeforeUpdate(() => update());

    onMounted(() => {
      selectedTab(0);
    });
  },
};
</script>
<style lang="scss" scoped>
.tabs {
  margin: 1rem 0;
}

.tabs-details {
}
ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;

  padding: 0;
  list-style: none;

  li {
    // margin-right: 40px;
  }

  .nav-item {
    background: #1b1d2152;
    height: 40px;
    text-align: center;

    h3 {
      margin-top: 14px;
      font-size: 19px;
      font-family: "Nunito" sans-serif;
      font-weight: 200;
      margin-left: 5px;
      padding-top: 10px;
      color: red;
    }
    &:hover {
      color: #13dbbd96;
    }

    &.is-active {
      border-bottom: 3px solid #13dbbd96;
    }
  }
}
</style>
