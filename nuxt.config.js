const pkg = require('./package')
const webpack = require("webpack");


module.exports = {
    mode: 'universal',
    server: {
        port: 8000, // default: 3000
        host: '127.0.0.1', // default: localhost
    },

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            // { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.3/css/bootstrap.min.css' }
            {rel:'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400&display=swap'},
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},

    /*
    ** Global CSS
    */
    css: [
        "~/node_modules/bootstrap/dist/css/bootstrap.css",
        /* "~/assets/css/main.css" */
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        "~plugins/bootstrap.js",
        "~plugins/star-ratings.js",
        "~plugins/api.js",
        {src: 'plugins/owl.js', ssr: false}, // Only works on client side
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [,
        // Doc: https://bootstrap-vue.js.org/docs/
        'bootstrap-vue/nuxt'
    ],
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        vendor: ["jquery", "bootstrap"],
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery'
            })
        ],
        extend(config, {isDev, isClient, isServer}) {
            if (isDev && isClient) {
                // expose jquery to global
                config.module.rules.push({
                    test: require.resolve('jquery'),
                    use: [{
                        loader: 'expose-loader',
                        options: '$'
                    }]
                })
            }

        }
    }
}
