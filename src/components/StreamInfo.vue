<template>
  <div id="single-stream-content">
    <h2 id="stream-title" class="text-white m-auto pl-5">{{this.stream.channel.status}}</h2>
    <div id="stream-info">
      <span id="game-title">
        <i class="fas fa-play-circle"></i>
        Game:{{this.stream.game}}
      </span>
      <span id="viewers">
        <i class="fas fa-chart-line text-muted pr-1 pl-2 pt-1"></i>
        {{this.stream.viewers}}viewers
      </span>
      <span id="stream-date">
        <i class="fad fa-calendar text-muted"></i>
        {{this.stream.stream_created_at}}
      </span>
      <span id="add-to-fav">
        Dodaj do ulubionych
        <i class="far fa-star text-white pl-2 pt-1"></i>
      </span>
    </div>
    <div id="streamer-info">
      <span id="green-line">|</span>
      <h4 id="about">About Streamer</h4>
      <span id="streamer-name">
        <i class="fas fa-user pr-1 pl-2 pt-1 text-muted"></i>
        Name: {{this.stream.channel.display_name}}
      </span>
      <span id="followers">
        <i class="fad fa-chart-area text-muted"></i>
        {{this.stream.channel.followers}}followers
      </span>
      <span id="channel-created">
        <i class="fad fa-calendar text-muted"></i>
        Since:{{this.stream.channel_created_at}}
      </span>
    </div>
    <div id="description">
      <span>Description:</span>
      <p>{{this.stream.channel.description}}</p>
    </div>
    <div id="stream-thumbnail">
      <img :src="this.stream.preview.large" alt="stream_thumbnail" />
    </div>
  </div>
</template>

<script>
export default {
  name: "StreamInfo",
  data() {
    return {
      id: this.$route.params.id,
      stream: this.$route.params.stream
    };
  }
};
</script>

<style>
#stream-title {
  background-color: #2d3748;
}
</style>