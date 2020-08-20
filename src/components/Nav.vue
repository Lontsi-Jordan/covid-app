<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand to="/"><b-img fluid src="https://img.icons8.com/nolan/64/coronavirus.png"></b-img> CovidApp</b-navbar-brand>
        
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item to="/" class="active">Acceuil</b-nav-item>
                <b-nav-item to="/global" >Global</b-nav-item>
                <b-nav-item to="/countries">Pays</b-nav-item>
                <b-nav-item to="/test">Test</b-nav-item>
              </b-navbar-nav>
        
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown text="Langue" right>
                  <b-dropdown-item href="#">EN</b-dropdown-item>
                  <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: 'Nav',
}
</script>