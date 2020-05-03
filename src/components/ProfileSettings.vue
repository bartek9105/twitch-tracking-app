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
            @click="toggle(index, url)"
            :class="{'active': index == activeIndex}"
          />
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <button class="btn btn-info rounded-pill mb-5 px-5 shadow" @click="save">Save</button>
    </div>
    <div id="credits" class="text-center text-muted">Avatars created by studiogstock - www.freepik.com</div>
  </div>
</template>

<script>
import firebase from "firebase"
import Vue from 'vue'
let toastOptions = {
  position: 'bottom-center',
  duration: 3000
}
export default {
  
  name: "ProfileSettings",
  data() {
    return {
      urls: [],
      activeIndex: null,
      url: ""
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
    toggle: function(index, url) {
      this.activeIndex = index;
      this.url = url;
    },
    save() {
      if (this.url != "") {
        const url = this.url;
        var user = firebase.auth().currentUser;
        const uid = user.uid;
        firebase
          .database()
          .ref(`user_avatars/${uid}`)
          .set({
            avatarId: url
          }).then(function() {
              Vue.toasted.success("Avatar successfully set", toastOptions)
          }).catch(error => {
              console.log(error)
              Vue.toasted.error(error, toastOptions)
          });
      }
    }
  },

  mounted() {
    this.listAllAvatars()
  }
}
</script>

<style>
.img m-2 {
  width: 52px;
  height: 77px;
}
img.m-2:hover {
  background-color: #38b2ac;
  cursor: pointer;
}
.img.m-2.active {
  background-color: #38b2ac;
}
</style>