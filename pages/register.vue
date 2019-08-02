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
                v-validate="'required|alpha|min:3|max:10'"
                aria-describedby="firstNameHelp"
                placeholder="Enter your first name"
                data-vv-name="firstName"
                :class="{ 'is-invalid': submitted && errors.has('firstName') }"
              />
                          <div v-if="submitted && errors.has('firstName')" class="invalid-feedback">
              {{
              errors.first('firstName') }}
            </div>
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
                data-vv-name="email"
                :class="{ 'is-invalid': submitted && errors.has('email') }"
              />
                          <div v-if="submitted && errors.has('email')" class="invalid-feedback">
              {{
              errors.first('email') }}
            </div>
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
                v-validate="'required|alpha|min:3|max:10'"
                aria-describedby="lastNameHelp"
                placeholder="Enter your last name"
                data-vv-name="lastName"
                :class="{ 'is-invalid': submitted && errors.has('lastName') }"
              />
                          <div v-if="submitted && errors.has('lastName')" class="invalid-feedback">
              {{
              errors.first('lastName') }}
            </div>
            </div>


            <div class="form-group">
              <label for="inputBirthday1">Birthday *</label>
              <b-row>
                <b-col>
                  <input class="form-control" id="inputBirthday1" placeholder="dd" v-validate="'numeric|min_value:1|max_value:31'" data-vv-name="day" :class="{'is-invalid': submitted && errors.has('day')}"/>
                                              <div v-if="submitted && errors.has('day')" class="invalid-feedback">{{
                                errors.first('day') }}
                            </div>
                </b-col>
                <b-col>
                  <input class="form-control" id="inputBirthday2" placeholder="mm" v-validate="'numeric|min_value:1|max_value:12'" data-vv-name="month" :class="{'is-invalid': submitted && errors.has('month')}"/>
                                              <div v-if="submitted && errors.has('month')" class="invalid-feedback">{{
                                errors.first('month') }}
                            </div>
                </b-col>
                <b-col>
                  <input class="form-control" id="inputBirthday3" placeholder="yyyy" v-validate="'numeric|min_value:1900|max_value:2019'" data-vv-name="year" :class="{'is-invalid': submitted && errors.has('year')}" />
                                              <div v-if="submitted && errors.has('year')" class="invalid-feedback">{{
                                errors.first('year') }}
                            </div>
                </b-col>
              </b-row>
            </div>

            <div class="form-group">
              <label for="inputPassword1">Password *</label>
              <input
                v-validate="'required|min:6'"
                :type="password"
                class="form-control"
                id="inputPassword1"
                placeholder="Enter your password"
                data-vv-name="password"
                :class="{ 'is-invalid': submitted && errors.has('password') }"
              />
                          <div v-if="submitted && errors.has('password')" class="invalid-feedback">
              {{
              errors.first('password') }}
            </div>
            </div>


            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="check2" v-model="checked"/>
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
      selected: null,
      submitted: true,
      checked: false,
      password: "password"
    };
  },
  computed: {
    showPassword()  {
      
    }
  },
    watch: {
      checked: function() {
        if(this.checked === true) {
        this.password = "text";
      } else {
        this.password = "password";
      }

      }

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
