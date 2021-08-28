<template>
  <div class="login">
    <h2 class="login-header">わんこチャット</h2>
    <p><input v-model="email" type="email" placeholder="Email" /></p>
    <span v-if="errors.email">
    {{ errors.email[0] }}
    </span>
    <p><input v-model="password" type="password" placeholder="Password" /></p>
    <span v-if="errors.password">
    {{ errors.password[0] }}
    </span>
    <p><button type="button" @click="login()">ログインだわん</button></p>
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
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);

body {
  background: #456;
  font-family: "Open Sans", sans-serif;
}

.login {
  width: 400px;
  margin: 16px auto;
  font-size: 16px;
}

/* Reset top and bottom margins from certain elements */
.login-header,
.login p {
  margin-top: 0;
  margin-bottom: 0;
}

.login-header {
  background: #ffc107;
  padding: 20px;
  font-size: 1.4em;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
}

.login-container {
  background: #ebebeb;
  padding: 12px;
}

/* Every row inside .login-container is defined with p tags */
.login p {
  padding: 12px;
}

.login input {
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  padding: 16px;
  outline: 0;
  font-family: inherit;
  font-size: 0.95em;
}

.login a {
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  padding: 16px;
  outline: 0;
  font-family: inherit;
  font-size: 0.95em;
}

.login input[type="email"],
.login input[type="password"] {
  background: #fff;
  border-color: #bbb;
  color: #555;
}

/* Text fields' focus effect */
.login input[type="email"]:focus,
.login input[type="password"]:focus {
  border-color: #888;
}

.login a[type="submit"] {
  background: #ffc107;
  border-color: transparent;
  color: #fff;
  cursor: pointer;
  text-align: center;
}

.login a[type="submit"]:hover {
  background: #ffc107;
}

/* Buttons' focus effect */
.login a[type="submit"]:focus {
  border-color: #ffc107;
}
</style>
