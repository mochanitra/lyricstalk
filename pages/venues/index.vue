<template>
  <no-ssr>
    <div class="_w-100pct">
      <div class="container">
        <div class="row">
          <!-- Venues Map -->
          <div 
            id="gMap" 
            class="col-12 col-md-8 _mgbt-24px _mgbt-0px-md">
            <GmapMap
              :center="{lat:18.7890055, lng:98.9871237 }"
              :zoom="15"
              map-type-id="terrain"
              style="width: 100%; height: 700px"
            >
              <gmap-info-window 
                :options="infoOptions"
                :position="infoWindowPos" 
                :opened="infoWinOpen" 
                class="gmap-info-window" 
                @closeclick="infoWinOpen=false">
                <div v-html="infoContent"/>
              </gmap-info-window>
              <GmapMarker
                v-for="(m, index) in _markers"
                :key="index"
                :position="m.position"
                :clickable="true"
                :icon="`https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red${index+1}.png`"
                @click="toggleInfoWindow(m,index)"
              />
            </GmapMap>
          </div>
          <!-- Venues List -->
          <div class="col-12 col-md-4 _mgbt-24px _mgbt-0px-md">
            <div class="venues-list">
              <div 
                v-for="(v, i) in _markers"
                :key="i"
                class="venue-box _dp-f _mgv-24px _cs-pt"
                @click="toggleInfoWindow(v,i)">
                <div class="marker-icon _tal-ct _f-1 _fs-7 _cl-white _mgr-12px">{{ i+1 }}</div>
                <div class="venue-info _f-7 _pdr-12px">
                  <h6 class="_cl-blue-400 _fs-5 _fw-700 _mgbt-8px">{{ v.title }}</h6>
                  <div 
                    class="_cl-blue-400 _fs-6 _lh-125pct" 
                    v-html="v.address"/>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </no-ssr>

</template>

<script>
export default {
  data: () => ({
    markers: [],
    place: null,
    // infoImage: '',
    // infoTitle: '',
    // infoAddress: '',
    infoContent: '',
    infoWindowPos: null,
    infoWinOpen: false,
    currentMidx: null,
    //optional: offset infowindow so it visually sits nicely on top of our marker
    infoOptions: {
      pixelOffset: {
        width: 0,
        height: -35
      }
    }
  }),
  computed: {
    _vunues () {
      return this.$store.state.venues
    },
    _markers () {
      const v = this.$store.state.venues
      return v.map(a => {
        return {
          position: {
            lat: +a.acf.location.latitude,
            lng: +a.acf.location.longitude,
          },
          title: a.title.rendered,
          address: a.acf.address,
        }
      })
    }
  },
  methods: {
    toggleInfoWindow: function(marker, idx) {
      // this.$scrollTo('#gMap', 500)
      this.infoWindowPos = marker.position;
      this.infoContent = this.getInfoWindowContent(marker);

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    getInfoWindowContent: function (marker) {
      return (
        `<div class="info-box _pdl-24px _pdt-16px _pdbt-8px">
          <div class="info-image _pdv-12px">
            <div style="background:url('https://placeimg.com/640/480/any')" class="_w-100pct _h-128px"></div>
          </div>
          <h6 class="_f-kn _fs-6 _fw-700 _cl-blue-400 _mgbt-8px">
            ${marker.title}
            </h6>
          <div class="_f-kn _fs-7 _fw-300 _cl-blue-400 _lh-125pct">
            ${marker.address}
          </div>
        </div>`
      )
    }
  } 
}
</script>


<style lang="scss" scoped>
.venues-list {
  max-height: 700px;
  height: 100%;
  overflow: scroll;
  font-weight: 400;
}
.marker-icon {
  height: auto;
  background: url('~/assets/images/marker.svg');
  background-size: 28px auto;
  background-repeat: no-repeat;
  background-position-x: center;
  /* display: flex;
  justify-content: center;
  align-items: flex-start; */
  padding-top: 8px;
}
</style>
