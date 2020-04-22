<template>
    <header>
        <nav class="navbar navbar-dark navbar-expand-md container-fluid">
            
            <div class="navbar-brand pt-5 ml-2"><i class="fab fa-twitch h3 mr-2 d-inline-block" alt="" style="float: left;"></i><Logo/></div>
            <div style="clear:both;"></div>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainmenu" aria-controls="mainmenu" aria-expanded="false">
				<span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
			</button>
		
			<div class="collapse navbar-collapse justify-content-end mr-5" id="mainmenu">
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Favourites</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Explore</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Profile</a>
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
    header{
        background-color: #2D3748;
    }
    .navbar-nav li{
        font-size: 20px;
    }
    .navbar-toggler .icon-bar{
        width: 50px !important;
        height: 3px !important;
    }
</style>