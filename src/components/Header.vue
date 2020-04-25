<template>
  <div id="page-header">
    <div class="d-sm-flex pt-3 pl-3 m-auto">
      
      <h2 id="header-name" class="text-white pt-1"><span id="white-line" class="text-white pl-2 pr-1">|</span><slot name="header"></slot></h2>
    </div>
    <p id="header-para" class="text-white pl-5 m-auto pb-4"><slot name="para"></slot></p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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