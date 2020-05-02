<template>
  <footer>
    <div id="footer" class="text-center text-muted pt-4 pb-4">
      <span id="footer-text">Powered by Twitch API 2020</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
  #footer {
    background-color: #1a202c;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
  }
  #footer-text {
    font-size: 15px;
  }
</style>