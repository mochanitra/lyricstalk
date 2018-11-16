<template>
    <div class="_w-100pct bgcl">
        <div class="container">
            <div class="row _jtfct-ct">
                
                <div class="col-4 _jtfct-ct _pdt-32px _pdbt-2px">
                    <div class="bio-input">
                        <input type="text" placeholder="your name">
                    </div>
                </div>
                

                <div class="col-12 _dp-f _fdrt-cl _alit-ct _pdt-64px _pdbt-32px">
                    <img class="_h-256px" src="~/assets/images/playlistpic.png">
                </div>
            </div>
        
            <div class="row _jtfct-ct">
                <div class="col-12 _dp-f _fdrt-cl _alit-ct">
                    <form>
                        <div class="form-group">
                        
                            <input type="file" class="form-control-file" id="exampleFormControlFile1">
                        </div>
                    </form>

                </div>

            </div>


            <div class="row">
                <div class="col-12 _dp-f _fdrt-cl _alit-ct _pdt-32px _pdbt-64px">
                    <nuxt-link to="/copylink">
                        <img class="_h-64px" src="~/assets/images/sharequiz.png">
                    </nuxt-link>
                </div>
            </div>
        

    

        

        </div>
    </div>
</template>

<script>

</script>

<style>

.bgcl {
  background-color : #EBD7D3;
}

</style>
