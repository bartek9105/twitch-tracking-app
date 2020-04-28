<template>
  <div class="w-100 p-3" id="search-component">
    <div class="text-white text-center mt-5 mb-3">
      <div class="d-flex justify-content-center">
        <h5 class="mb-5 pt-1">Search for:</h5>
        <div class="pl-2 dropdown">
          <button
            class="btn btn-info dropdown-toggle"
            type="button"
            id="search-dropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Wybierz</button>
          <div class="dropdown-menu" aria-labelledby="search-dropdown">
            <a href="#" class="dropdown-item">Game</a>
            <a href="#" class="dropdown-item">Stream</a>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-6 col-md-4">
            <form class="form-container">
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Enter a phrase" />
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
import Button from "@/components/Button";

export default {
  name: "Search",
  components: {
    Button
  }
};
</script>

<style>
#search-component {
  background-color: #1a202c;
  background-image: url(../assets/tic-tac-toe.svg);
}
.form-group input {
  border-radius: 25px;
  background-color: #edf2f7;
}
</style>