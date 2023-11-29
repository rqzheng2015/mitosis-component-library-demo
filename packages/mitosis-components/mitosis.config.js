/** @type {import('@builder.io/mitosis').MitosisConfig} */
module.exports = {
    files: 'src/**',
    targets: ['solid', 'react'],
    dest: "dist",
    options: {
        solid: {
            typescript: true,
            stylesType: 'styled-components'
        },
        react: {
            typescript: true,
            stylesType: "style-tag",
            prettier: true
        }
    }
};