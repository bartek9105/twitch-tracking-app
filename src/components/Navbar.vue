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
              <a class="nav-link text-white" href="#">Explore</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/favs">
              <a class="nav-link text-white" href="#">Favourites</a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/profile">
              <a class="nav-link text-white" href="#">Profile</a>
            </router-link>
          </li>
          <li class="nav-item d-flex align-items-center" @click="logout">
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
  methods: {
    async logout() {
      try {
        const result = await firebase.auth().signOut();
        this.$toasted.global.success({
                    message: 'Successfully logged out'
                })
      } catch (error) {
        console.log(error);
      }
    }
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
</style>