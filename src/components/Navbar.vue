<template>
  <header>
    <nav class="navbar navbar-expand-md container-fluid d-flex align-items-center py-4">
      <router-link to="/">
        <div class="d-flex">
          <i class="fab fa-twitch h3 text-white mr-3" alt></i>
          <Logo />
        </div>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mainmenu"
        aria-controls="mainmenu"
        aria-expanded="false"
        key="expand_more"
        @click="toggled = !toggled"
      >
        <i v-if="toggled==false" class="fas fa-bars text-white"></i>
        <i v-if="toggled==true" class="fas fa-times text-white"></i>
      </button>
      <div class="collapse navbar-collapse text-right justify-content-md-end mt-4" id="mainmenu">
        <div id="profile-mobile" class="justify-content-end text-left d-md-none d-flex mb-4">
          <span class="text-white pt-1">{{email}}</span>
          <div style="width: 2.5rem" v-if="url.length > 0" class="bg-secondary rounded-circle pl-2 pr-2 pt-1 pb-1 mb-2 ml-3">
            <img id="profile-avatar" :src="url[0]" alt="profile-avatar" />
          </div>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/">
              <a class="nav-link text-white" :class="{'active': '/' == page}" href="#">Explore</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/favs">
              <a
                class="nav-link text-white"
                :class="{'active': '/favs' == page}"
                href="#"
              >Favourites</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/profile">
              <a class="nav-link text-white" :class="{'active': '/profile' == page}" href="#">
                Profile
                <span class="text-white-50 pl-2 d-none d-md-inline">{{ email }}</span>
              </a>
            </router-link>
          </li>
          <div v-if="url.length > 0" class="bg-secondary rounded-circle pl-2 pr-2 pt-1 pb-1 mb-2 mr-3 d-none d-md-block">
            <img id="profile-avatar" class :src="url[0]" alt="profile-avatar" />
          </div>
          <li class="nav-item d-flex align-items-center justify-content-end mb-2" @click="logout">
            <router-link to="/login">
              <a class="nav-link text-white" href="#">
                Logout
                <i class="fas logout-icon fa-sign-out-alt text-white ml-1"></i>
              </a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import Logo from "@/components/Logo";
import firebase from "firebase";

export default {
  name: "Navbar",
  components: {
    Logo
  },
  data() {
    return {
      page: this.$route.path,
      email: "",
      url: "",
      toggled: false
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    getUserData() {
      var user = firebase.auth().currentUser;
      const email = user.email;
      const uid = user.uid;
      var arr = [];
      firebase
        .database()
        .ref(`user_avatars/${uid}`)
        .once("value")
        .then(function(snapshot) {
          var item = snapshot.val().avatarId;
          arr.push(item);
        })
        .catch(error => {
          console.log(error);
        });
      this.email = email;
      this.url = arr;
    }
  },
  mounted() {
    this.getUserData();
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
li {
  a {
    &:hover {
      color: #38b2ac !important;
      text-decoration: none;
      .logout-icon {
        color: #38b2ac !important;
      }
    }
  }
}
.navbar {
  background-color: #2d3748;
}
.navbar-toggler .icon-bar {
  width: 50px !important;
  height: 3px !important;
}
.logout-icon {
  font-size: 15px;
}
a .active {
  color: #38b2ac !important;
}
#profile-avatar {
  width: 21px;
  height: 30px;
}
</style>