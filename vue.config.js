// const AvResources =  require('@authvia/web-components').AuthviaResources;
// vue.config.js
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
const path = require('path');
module.exports = {
    configureWebpack: {
        externals: {
            ["@authvia/web-components"]: {
                root: "AV",
                amd: "@authvia/web-components",
                commonjs: "@authvia/web-components",
                commonjs2: "@authvia/web-components",
                umd: "AV",
                umd2: "AV",
                global: "AV"
            }
        },

    },
    chainWebpack: config => {
        config.devtool('source-map'),
            config.module
                .rule('vue')
                .use('vue-loader')
                .tap(options => ({
                    ...options,
                    compilerOptions: {
                        // treat any tag that starts with av- as custom elements
                        isCustomElement: tag => tag.startsWith('av-')
                        // Load SFC without the .ce.vue postfix
                        // customElement: true
                    }
                }))
    }
}