<template>
    <div>

    <div class="row">
      <div class="col-12 _dp-f _fdrt-cl _alit-ct _pdbt-32px">
        <img class="_h-64px" src="~/assets/images/questionlist.png">
      </div>
    </div>


    <div v-for="(item, i) in $store.state.questions" :key="i" class="row _jtfct-ct _pdt-4px-sm _pdbt-4px" @click="$emit('onSelect', item)">
      <div v-show="!$props.selectedQuestions.has(item.id)" class="col-6">
        <div class="bio-card">
          <div class="bio-card-content">{{ item.title }}</div>
        </div>
      </div>
    </div>

    
  

    
    </div>
</template>

<script>
export default {
    props: {
      selectedQuestions: { 
        type: Set,
        default: new Set()
      }
    },

}
</script>

<style>

</style>
