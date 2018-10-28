<template>
  <nuxt-link 
    :to="localePath({
      name: 'favorites'
    })" 
    class="_dp-ilb">
    <span class="fa-stack _fs-5 _fs-6-md">
      <i class="fas fa-fw fa-circle fa-stack-2x _cl-red"/>
      <i class="fal fa-fw fa-heart fa-stack-1x fa-inverse"/>
    </span>
  </nuxt-link>
</template>
