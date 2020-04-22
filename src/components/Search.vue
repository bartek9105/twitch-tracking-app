<template>
  <div class="w-100 p-3" id="search-component">
      <div class="text-white text-center mt-5 mb-3">
          <h5 class="mb-5">Search for stream, game or clip</h5>
          <div class="container-fluid">
              <div class="row justify-content-center">
                  <div class="col-12 col-sm-6 col-md-4">
                      <form class="form-container">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Enter a phrase">
                            </div>
                        </form>
                  </div>
              </div>
          </div>
        <Button>Search</Button>
      </div>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
    name: 'Search',
    components:{
        Button
    }
}
</script>

<style>
    #search-component{
        background-color: #1A202C;
        background-image: url(../assets/tic-tac-toe.svg);
    }
    .form-group input{
        border-radius: 25px;
        background-color: #EDF2F7;
    }
</style>