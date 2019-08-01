<template>
  <section class="container">
    <a href="#">Back</a>
    <hr />
    <h4>Create an account</h4>
    <small>Please fill in the form below:</small>
    <form>
      <b-container fluid>
        <b-row>
          <b-col cols-6>
            <div class="form-group">
              <label for="inputFirstName1">First Name *</label>
              <input
                type="text"
                class="form-control"
                id="inputFirstName1"
                aria-describedby="firstNameHelp"
                placeholder="Enter your first name"
              />
            </div>

            <div class="form-group">
              <label for="inputGender1">Gender *</label>
              <b-form-select v-model="selected">
                <option :value="null">Please select an option</option>
                <option value="a">Male</option>
                <option value="b">Female</option>
              </b-form-select>
            </div>
            <div class="form-group">
              <label for="inputEmail1">Email Address *</label>
              <input
                v-validate="'required|email'"
                type="email"
                class="form-control"
                id="inputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label for>I WANT TO RECEIVE OFFERS BY E-MAIL</label>
              <small>
                Yes, sign me up for THE ICONIC News and get a $20 voucher for your next purchase.
                You'll receive sales alerts, exclusive offers and the latest on styles & trends.
              </small>
              <b-form-group>
                <b-form-radio-group v-model="selected" plain name="plain-inline"></b-form-radio-group>
              </b-form-group>
            </div>

            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="check1" />
              <label class="form-check-label" for="check1">Keep Me Logged in</label>
            </div>

            <div>
              <b-button id="create-btn">Create My Account</b-button>
            </div>
          </b-col>

          <b-col cols-6>
            <div class="form-group">
              <label for="inputLastName1">Last Name *</label>
              <input
                type="text"
                class="form-control"
                id="inputLastName1"
                aria-describedby="lastNameHelp"
                placeholder="Enter your last name"
              />
            </div>

            <div class="form-group">
              <label for="inputBirthday1">Birthday *</label>
              <b-row>
                <b-col>
                  <input type="number" class="form-control" id="inputBirthday1" placeholder="dd" />
                </b-col>
                <b-col>
                  <input type="number" class="form-control" id="inputBirthday2" placeholder="mm" />
                </b-col>
                <b-col>
                  <input type="number" class="form-control" id="inputBirthday3" placeholder="yyyy" />
                </b-col>
              </b-row>
            </div>

            <div class="form-group">
              <label for="inputPassword1">Password *</label>
              <input
                v-validate="'required|min:6'"
                type="password"
                class="form-control"
                id="inputPassword1"
                placeholder="Enter your password"
              />
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="check2" />
              <label class="form-check-label" for="check2">Show Password</label>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </form>
  </section>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

export default {
  data() {
    return {
      selected: null
    };
  }
};
</script>

<style scoped>
label {
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
}

input {
  border-radius: 0;
}

#create-btn {
  border-radius: 0;
  border-color: #42abc8;
  color: #fff;
  background-color: #42abc8;
  width: 400px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 13px;
}
</style>
