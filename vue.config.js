// const AvResources =  require('@authvia/web-components').AuthviaResources;
// vue.config.js
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
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