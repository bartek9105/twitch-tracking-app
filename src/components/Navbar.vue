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
		
			<div class="collapse navbar-collapse justify-content-end mr-5" id="mainmenu">
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Explore</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Favourites</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Profile</a>
                    </li>
                </ul>
            </div>

        </nav>
    </header>
</template>

<script>
import Logo from '@/components/Logo'

export default {
    name: 'Navbar',
    components:{
        Logo
    }
}
</script>

<style>
    .navbar-nav li{
        font-size: 20px;
    }
    .navbar-toggler .icon-bar{
        width: 50px !important;
        height: 3px !important;
    }
    ul.nav a:hover{
        color: #38B2AC !important;
    }
</style>