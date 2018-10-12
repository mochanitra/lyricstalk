<template>
  <div>
    <a :href="path">
      <div 
        :class="`_bdcl-${buttonColorClass}`" 
        class="_bdw-1px _dp-f _jtfct-ct _alit-ct _h-36px _pdt-4px _cs-pt">
        <span 
          :class="`_cl-${buttonColorClass}`" 
          class="_ff-dcv _fs-5 _ttf-upc _lh-100pct">{{ title }}</span>
        <i 
          :class="`${icon} _cl-${buttonColorClass}`" 
          class="_pdl-8px"/>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: 'Title',
      type: String
    },
    buttonColorClass: {
      default: 'blue',
      type: String
    },
    icon: {
      default: 'fal fa-long-arrow-right',
      type: String
    },
    path: {
      default: '/',
      type: String
    }
  }
}
</script>



