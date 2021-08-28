<template>
    <div class="login">
        <b-card bg-variant="warning" text-variant="white" header="わんこチャット" class="text-center">
            <b-card-text>
                <b-form-group>
                    <b-form-input v-model="email" type="email" placeholder="Email" />
                    <span v-if="errors.email">
                        {{ errors.email[0] }}
                    </span>
                </b-form-group>
                <b-form-group>
                    <b-form-input v-model="password" type="password" placeholder="Password" />
                    <span v-if="errors.password">
                        {{ errors.password[0] }}
                    </span>
                </b-form-group>
                <b-button class="bg-primary" @click="login()">ログインだわん</b-button>
            </b-card-text>
        </b-card>
    </div>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    login() {
      axios
        .get("/sanctum/csrf-cookie",  { withCredentials: true })
        .then((response) => {
            console.log('test');
            axios
            .post("api/login", {
                email: this.email,
                password: this.password,
            })
            .then((response) => {
                console.log(response);
                localStorage.setItem("auth", "true");
                this.$router.push('chat');
            })
            .catch((error) => {
                this.errors = error.response.data.errors;
            });
        })
        .catch((error) => {
          alert(error.response.data.errors);
        });
    },
  },
};
</script>

<style scoped>
    .login {
    width: 400px;
    margin: 16px auto;
    font-size: 16px;
    }
</style>
