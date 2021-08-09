<template>
  <div class="login">

    <h2 class="login-header">わんこチャット</h2>

    <form class="login-container">
      <p><input type="email" placeholder="Email" /></p>
      <p><input type="password" placeholder="Password" /></p>
      <!-- <p><input type="submit" value="Log in" /></p> -->
      <p><router-link type="submit" :to="{ name: 'chat'}">ログインだわん</router-link></p>
    </form>
  </div>
</template>

<style scoped>
/**
 * 01/28/2016
 * This pen is years old, and watching at the code after all
 * those years made me fall from my chair, so I:
 * - changed all IDs to classes
 * - converted all units to pixels and em units
 * - changed all global elements to classes or children of
 *   .login
 * - cleaned the syntax to be more consistent
 * - added a lot of spaces that I so hard tried to avoid
 *   a few years ago
 *   (because it's cool to not use them)
 * - and probably something else that I can't remember anymore
 *
 * I sticked to the same philosophy, meaning:
 * - the design is almost the same
 * - only pure HTML and CSS
 * - no frameworks, preprocessors or resets
 */

/* 'Open Sans' font from Google Fonts */
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);

body {
  background: #456;
  font-family: 'Open Sans', sans-serif;
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
