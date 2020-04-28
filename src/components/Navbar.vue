<template>
  <header>
    <nav class="navbar navbar-expand-md container-fluid d-flex align-items-center py-4">
      <div class="d-flex">
        <i class="fab fa-twitch h3 text-white mr-3" alt></i>
        <Logo />
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mainmenu"
        aria-controls="mainmenu"
        aria-expanded="false"
      >
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="mainmenu">
        <ul class="nav justify-content-end">
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
                <span class="text-white-50 pl-4">{{ email }}</span>
              </a>
            </router-link>
          </li>
          <div class="bg-secondary rounded-circle pl-2 pr-2 pt-1 pb-1 mb-2">
            <img id="profile-avatar" class :src="url[0]" alt="profile-avatar" />
          </div>
          <li class="nav-item d-flex align-items-center mb-2" @click="logout">
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
      url: ""
    };
  },
  methods: {
    async logout() {
      try {
        const result = await firebase.auth().signOut();
        this.$toasted.global.success({
          message: "Successfully logged out"
        });
      } catch (error) {
        console.log(error);
      }
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