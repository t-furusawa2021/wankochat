<template>
    <b-navbar class="navbar" toggleable="lg" type="dark" variant="warning">
        <b-navbar-brand to='/'>WankoChat</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item @click="logout()">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    methods: {
        logout() {
        axios
            console.log('test');
            axios
            .post("api/logout", {
            })
            .then((response) => {
                console.log(response);
                localStorage.removeItem("auth");
                this.$router.push('login');
            })
            .catch((error) => {
                this.errors = error.response.data.errors;
            });
        },
    }
};
</script>
