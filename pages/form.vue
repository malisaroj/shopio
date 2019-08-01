<template>
  <section class="container">
    <h4>Login</h4>
    <b-container-fluid>
      <b-row>
        <b-col cols="6">
          <form>
            <b-row>
              <b-col>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email Address *</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email address"
                  />
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1">Keep Me Logged in</label>
                </div>
              </b-col>
              <b-col>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password *</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter your password"
                  />
                </div>
                <div>
                  <b-button id="login-button" block variant="primary">Login</b-button>
                </div>
                <div class="forgot-link">
                  <a href="#">
                    <small>Forgot your password?</small>
                  </a>
                </div>
              </b-col>
            </b-row>
          </form>
        </b-col>
        <b-col cols="3"></b-col>
        <b-col cols="3">
          <h4 class="h4">Not yet registered?</h4>
          <p>You can speed up the checkout, register various delivery addresses, and track your orders!</p>
          <b-button id="register-button" block variant="primary">Create New Account</b-button>
        </b-col>
      </b-row>
    </b-container-fluid>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

#register-button {
  color: #007bff;
  border-color: #007bff;
  border-radius: 0;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 13px;
  background-color: #fff;
}

#login-button {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 13px;
  background-color: #42abc8;
  border-color: #42abc8;
  border-radius: 0;
}

.forgot-link {
  text-align: center;
}

.forgot-link a {
  color: #000;
  font-size: 15px;
}

label {
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
}

.h4 {
  font-size: 15px;
  font-weight: 700;
}

p {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-style: normal;
  letter-spacing: 0.01875em;
}
</style>
