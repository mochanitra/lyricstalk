<template>
  <div>
    <div class="_mgbt-24px">
      <div 
        :class="{'no-line': !hasLine}" 
        class="_ttf-upc _fs-7 _pdr-2px partner-heading">{{ heading }}</div>
    </div>
    <div class="partner-list">
      <div 
        v-for="(p,i) in partners" 
        :key="i" 
        class="partner-logo _mgbt-16px _mgbt-16px-md"
      >
        <img 
          v-lazy="p.image" 
          class="_w-100pct _h-at">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      default: 'Title',
      type: String
    },
    partners: {
      default: () => [],
      type: Array
    },
    hasLine: {
      default: true,
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';

.partner-heading:not(.no-line) {
  display: table;
  white-space: nowrap;
  overflow: hidden;

  &:after {
    content: '';
    display: table-cell;
    position: relative;
    top: 0;
    bottom: 0;
    left: 4px;
    width: 100%;
    border-bottom: 1px solid $blue-400;
  }
}

.partner-list {
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: $md) {
    flex-wrap: wrap;
  }
}
.partner-logo {
  padding-right: 32px;
  &:last-child {
    padding-right: 0;
  }
}
</style>




