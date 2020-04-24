<template>
    <header>
        <nav class="navbar navbar-expand-md container-fluid d-flex align-items-center py-4">
            <div class="d-flex">
                <i class="fab fa-twitch h3 text-white mr-3" alt=""></i>
                <Logo/>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainmenu" aria-controls="mainmenu" aria-expanded="false">
				<span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
			</button>
		
			<div class="collapse navbar-collapse justify-content-end" id="mainmenu">
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Favourites</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Explore</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Profile</a>
                    </li>
                    <li class="nav-item d-flex align-items-center"  @click="logout">
                        <router-link to="/login">
                            <a class="nav-link text-white" href="#">Logout
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
import Logo from '@/components/Logo'
import firebase from 'firebase'

export default {
    name: 'Navbar',
    components: {
        Logo
    },
    methods: {
        async logout() {
            try {
                const result = await firebase.auth().signOut()             
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    li{
        a {
            &:hover{
                color: #117a8b !important;
                text-decoration: none;
                .logout-icon{
                    color: #117a8b !important;
                }
            }
        }
    }
    .navbar-toggler {
       .icon-bar {
            width: 50px !important;
            height: 3px !important;
        } 
    }
    .logout-icon {
        font-size: 15px;
    }
</style>