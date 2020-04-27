<template>
  <div class="m-auto container-fluid">
    <h3 id="avatars-header" class="text-white text-center">Choose your avatar</h3>
    <div id="predefined-avatars" class="pt-4">
      <div class="row row-cols-xl-4 mb-5 justify-content-center">
        <div class="">
          <img v-for="url in urls" :src="url" :key="url.id" class="img m-2" />
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
      urls: []
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
    changeBackgroundColor() {
        let selectedItem = document.getElementsByTagName('img')
        console.log(selectedItem)
    }
  },
  mounted() {
    this.listAllAvatars();
    this.changeBackgroundColor()
  },
  computed: {}
};
</script>

<style>
img:hover {
    background-color: teal;
}
</style>