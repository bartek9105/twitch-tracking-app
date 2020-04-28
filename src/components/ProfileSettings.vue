<template>
  <div class="m-auto container-fluid">
    <h3 id="avatars-header" class="text-white text-center">Choose your avatar</h3>
    <div id="predefined-avatars" class="pt-4 pb-4">
      <div class="row justify-content-center">
          <div class="col-xl-3 col-md-5 ml-md-3 ml-lg-5 ml-1">
        <img
          v-for="(url, index) in urls"
          :key="url.id"
          :src="url"
          :id="url"
          class="img m-2"
          @click="toggle(index)"
          :class="{'active': index == activeIndex}"
        />
        </div>
      </div>
    </div>
    <div class="row pb-5 justify-content-center">
      <button class="btn btn-info rounded-pill mb-5 px-5 shadow">Save</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "ProfileSettings",
  data() {
    return {
      urls: [],
      activeIndex: null
    };
  },
  methods: {
    listAllAvatars() {
      var storage = firebase.storage();
      var storageRef = storage.ref();
      var urls = [];
      storageRef
        .listAll()
        .then(function(res) {
          res.prefixes.forEach(function(folderRef) {});
          res.items.forEach(function(itemRef) {
            itemRef.getDownloadURL().then(function(url) {
              urls.push(url);
            });
          });
        })
        .catch(function(error) {
          console.log(error);
        });
      return (this.urls = urls);
    },
    toggle: function(index) {
      this.activeIndex = index;
    }
  },
  mounted() {
    this.listAllAvatars();
  },
  computed: {}
};
</script>

<style>
img {
    width: 52px;
    height: 77px;
}
img:hover {
  background-color: #38b2ac;
}
.active {
  background-color: #38b2ac;
}
</style>