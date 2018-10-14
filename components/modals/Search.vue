<template>
  <div>
    <modal
      :adaptive="true"
      :width="`100%`" 
      :scrollable="true"
      height="100%"
      name="search"
      class="wrapper"
      @opened="onOpen"
    >
      <div class="_h-100pct _dp-f _alit-ct">
        <i 
          class="fal _cs-pt fa-times fa-3x _pst-asl _r-24px _t-24px" 
          @click="$store.commit('SET_SEARCH_MODAL_ACTIVE', false)"/>
        <div class="container">
          <div class="row">
            <form 
              class="col-12 _dp-f _alit-ct" 
              @submit.prevent.stop="search">
              <float-label class="_w-100pct _mgr-12px">
                <input 
                  v-validate="{required: false, min: 3}"
                  ref="input"
                  v-model="q" 
                  maxlength="30"
                  type="text"
                  class="_bgcl-tpr _fs-2 _pdbt-0px _ff-dcv"
                  placeholder="SEARCH CMDW">
              </float-label>
              <button 
                class="bio-button -pink _f-r" 
                type="submit">
                <i class="fal fa-long-arrow-right"/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  data: () => ({
    q: ''
  }),
  methods: {
    onOpen () {
      this.q = ''
      return this.$refs.input.focus()
    },
    search() {
      return this.$router.push({
        name: 'search',
        query: {
          q: this.q
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';
.wrapper {
  background: rgba($pink-400, 0.97);
}
</style>
