<template>
  <div id="page-header" class="d-none d-lg-block">
    <div class="d-sm-flex pt-3 pl-4 m-auto">
      <span id="vertical-line" class="pl-4 pr-1">|</span>
      <h2 id="header-name" class="pt-1"><slot name="header"></slot></h2>
    </div>
    <p id="header-para" class="text-white-50 pl-5 m-auto pb-4"><slot name="para"></slot></p>
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
#vertical-line {
  font-size: 29px;
  color: #38B2AC;
}
#header-name {
  color: #38B2AC;
}
</style>