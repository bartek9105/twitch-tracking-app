<template>
  <div id="page-header">
    <div class="d-sm-flex pt-3 pl-4 m-auto">
      <span id="white-line" class="text-white pl-4 pr-1">|</span>
      <h2 id="header-name" class="text-white pt-1">{{header_name}}</h2>
      
    </div>
    <p id="header-name" class="text-white pl-5 m-auto pb-4">{{paragraph}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    header_name: String,
    paragraph: String
  }
};
</script>

<style>
#page-header {
  background-color: #2d3748;
}
#white-line {
  font-size: 29px;
}
</style>