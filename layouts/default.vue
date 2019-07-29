<template>
    <div>
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <b-col md="2" class="d-flex align-items-center">
                    <a class="navbar-brand" href="#">Shopio</a>
                    <div class="category-menu">
                        <button @click.prevent="showCat">
                            <span class="navbar-toggler-icon"></span></button>
                        <div class="categories-list" v-if="categoryies">
                            <b-nav vertical class="">
                                <b-nav-item active>Active</b-nav-item>
                                <b-nav-item>Link</b-nav-item>
                                <b-nav-item>Another Link</b-nav-item>
                                <b-nav-item disabled>Disabled</b-nav-item>
                            </b-nav>
                        </div>
                    </div>
                </b-col>
                <b-col md="7">
                    <div class="searchBar">
                        <input type="text" placeholder="Search products & brands" name="searchField"
                               class="form-control"></div>
                </b-col>
                <b-col md="3" class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/">Download App</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/form">Sign up / Login</nuxt-link>
                        </li>
                    </ul>
                </b-col>
            </nav>
        </div>
        <nuxt/>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                categoryies: false
            }
        },
        methods: {
            showCat: function () {
                this.categoryies = !this.categoryies;
            }
        }
    }
</script>
<style>
    * {
        outline: none !important;
    }

    html {
        font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    body {
        background: #f4f5f9;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
    }

    .button--green {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #3b8070;
        color: #3b8070;
        text-decoration: none;
        padding: 10px 30px;
    }

    .button--green:hover {
        color: #fff;
        background-color: #3b8070;
    }

    .button--grey {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #35495e;
        color: #35495e;
        text-decoration: none;
        padding: 10px 30px;
        margin-left: 15px;
    }

    .button--grey:hover {
        color: #fff;
        background-color: #35495e;
    }

    .categories-list {
        background: #fff;
        padding: 15px;
        min-width: 220px;
        position: absolute;
        top: 55px;
        left: 0;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.06);
        z-index: 10;
    }

    .category-menu button {
        background: none;
        border: none;
        width: 50px;
    }

    .category-menu {
        position: relative;
    }

    .category-menu span.navbar-toggler-icon {
        cursor: pointer;
    }

    .categories-list:before {
        content: " ";
        position: absolute;
        height: 0;
        width: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 15px solid #fff;
        top: -11px;
        z-index: 99;
        left: 4px;
    }

    nav.navbar.navbar-expand-lg.navbar-light.bg-light {
        background: none !important;
        padding: 20px 15px;
    }

    .searchBar input {
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 0px 25px 0px rgba(226, 233, 255, 0.35);
        height: 50px;
        z-index: 14;
        border: none;
        border-radius: 2px;
    }

    .categories-list ul li a:hover {
        padding-left: 19px;

    }
    .categories-list ul li a.active {
        color: #000;

    }
    .categories-list ul li a {
        color: #666;
        font-size: 14px;
        -webkit-transition: all 0.4s;
        -moz-transition: all 0.4s;
        -ms-transition: all 0.4s;
        -o-transition: all 0.4s;
        transition: all 0.4s;
    }
</style>
