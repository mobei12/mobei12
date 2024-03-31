const getUrl = (tag) => {
    switch(tag.trim().toLowerCase()) {
        case 'react':
            return 'https://img.shields.io/badge/-React-333333?style=flat&logo=react'
        case 'vue':
            return 'https://img.shields.io/badge/-Vue-333?style=flat&logo=Vue.js'
        case 'webpack':
            return 'https://img.shields.io/badge/-Webpack-333?style=flat&logo=Webpack'
        case 'node':
            return 'https://img.shields.io/badge/-Node-333?style=flat&logo=nodedotjs'
        case 'express':
            return 'https://img.shields.io/badge/-express-333?logo=express'
        case 'git':
            return 'https://img.shields.io/badge/-Git-333333?style=flat&logo=git'
        case 'javascript':
            return 'https://img.shields.io/badge/-JavaScript-333333?style=flat&logo=javascript'
        case 'html5':
            return 'https://img.shields.io/badge/-HTML5-333333?style=flat&logo=HTML5'
        case 'css':
            return 'https://img.shields.io/badge/-CSS-333333?style=flat&logo=CSS3'
        case 'typescript':
            return 'https://img.shields.io/badge/-TypeScript-333?style=flat&logo=TypeScript'
        case 'tailwindcss':
            return 'https://img.shields.io/badge/-tailwindcss-333?style=flat&logo=tailwindcss'
        case 'bootstrap':
            return 'https://img.shields.io/badge/-Bootstrap-333?style=flat&logo=Bootstrap'
        case 'vite':
            return 'https://img.shields.io/badge/-Vite-333?style=flat&logo=vite'
        case 'element':
            return 'https://img.shields.io/badge/-element-333?style=flat&logo=element'
        case 'antdesign':
            return 'https://img.shields.io/badge/-AntDesign-333?style=flat&logo=AntDesign'
        case 'echarts':
            return 'https://img.shields.io/badge/-%20ECharts-333?style=flat&logo=Apache%20ECharts'
        case 'mongodb':
            return 'https://img.shields.io/badge/-MongoDB-333?style=flat&logo=MongoDB'
        case 'subversion':
            return 'https://img.shields.io/badge/-Subversion-333?style=flat&logo=subversion'
        case 'env':
            return 'https://img.shields.io/badge/-env-333?logo=.env'
        case 'reactrouter':
            return 'https://img.shields.io/badge/-RreactRouter-333?logo=ReactRouter'
        default:
            return `https://img.shields.io/badge/-${tag}-333333?style=flat`
    }
}
const Tag = ({ tag }) => {
    const imgStyle = {
        display: 'inline-block', verticalAlign: 'middle',
        width: 'auto',
        height: '1.5em'
    }
    return(
        <img src={getUrl(tag)} alt={tag} title={tag} style={imgStyle}/>
    )
}
export default Tag