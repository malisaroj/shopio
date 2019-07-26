<template>
  <div class="footer">
    <div class="container footer-container">
      <div class="row">
        <div class="col-xl-3 col-lg-3">
          <div class="footer-logo">
            <div>
              <a href="#">
                <img src="../assets/images/Logo.png" alt="Logo" />
              </a>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>

        <div class="col-xl-6 col-lg-6">
          <div class="row">
            <div v-for="(item, index) in footerMenu" :key="index" class="col">
              <h5 class="menu-title">{{ item.title }}</h5>
              <ul class="footer-menu">
                <li v-for="(i, j) in item.menuItem" :key="j" class="menu-item">
                  <a :href="i.link">{{ i.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-3">
          <div class>
            <h5 class="menu-title">Subscribe</h5>
            <div class="d-flex">
              <input type="email" name="email" id="email" placeholder="Your email Address" />
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid copyright-container">
      <div class="row justify-content-center align-items-center">
        <div class="copyright">Copyright 2016. All Rights Reserved</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerMenu: [
        {
          title: "Policy Info",
          menuItem: [
            { name: "Privacy policy", link: "#" },
            { name: "Terms of Sale", link: "#" },
            { name: "Terms of Use", link: "#" },
            { name: "Report Abuse & Takedown Policy", link: "#" },
            { name: "CSR Policy", link: "#" }
          ]
        },
        {
          title: "Company",
          menuItem: [
            { name: "About Us", link: "#" },
            { name: "Blog", link: "#" },
            { name: "Sitemap", link: "#" },
            { name: "FAQ", link: "#" },
            { name: "Contact Us", link: "#" }
          ]
        },
        {
          title: "Business",
          menuItem: [
            { name: "Sell on Shopio", link: "#" },
            { name: "Advertise on Shopio", link: "#" },
            { name: "Media Enquiries", link: "#" },
            { name: "Be an Affiliate", link: "#" },
            { name: "Deal of the Day", link: "#" }
          ]
        }
      ]
    };
  }
};
</script>

<style>
.footer {
  background-color: #fff;
}

.footer-container {
  padding: 50px 0;
  max-width: 100%;
}

.menu-title {
  font-size: 16px;
  font-weight: 400;
  color: rgb(0, 0, 0);
  line-height: 1.125em;
  text-align: left;
  text-transform: uppercase;
}

p {
  font-weight: 300;
  color: rgb(160, 160, 160);
  text-align: left;
  font-size: 12px;
  line-height: 1.5em;
}

.footer-menu {
  list-style: none;
  padding: 0;
}

.menu-item a {
  text-decoration: none;
  font-size: 12px;
  font-weight: 400;
  color: rgb(160, 160, 160);
  line-height: 1.833em;
  text-align: left;
}

#email {
  width: 200px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 25px 0px rgba(180, 190, 221, 0.5);
  height: 50px;
  z-index: 212;
}

button {
  width: 100px;
  height: 50px;
  background-color: rgb(51, 51, 51);
  color: #fff;
}

.copyright {
  font-size: 12px;
  color: rgb(160, 160, 160);
  line-height: 1.5em;
  font-weight: 400;
  text-align: center;
  padding: 20px 0;
}

.copyright-container {
  background-color: #f4f5f9;
}

.footer-logo {
  display: flex;
}

.footer-logo>div{
  align-items:center;
}
</style>
