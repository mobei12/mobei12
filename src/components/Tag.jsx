const tagS = {
    'react': 'react',
    'vue': 'Vue.js',
    'webpack': 'Webpack',
    'node': 'nodedotjs',
    'express': 'express',
    'git': 'git',
    'javascript': 'javascript',
    'html5': 'HTML5',
    'css': 'CSS3',
    'typescript': 'TypeScript',
    'tailwindcss': 'tailwindcss',
    'bootstrap': 'Bootstrap',
    'vite': 'vite',
    'element': 'element',
    'antdesign': 'AntDesign',
    'echarts': 'Apache%20ECharts',
    'mongodb': 'MongoDB',
    'subversion': 'subversion',
    'env': '.env',
    'centos': 'Centos',
    'linux': 'Linux',
    'eslint': 'eslint',
    'reactrouter': 'reactrouter'
};

/**
 * @description 根据输入的标签生成URL。
 *
 * @param {string} tag - 要生成URL的标签。
 * @return {string} 根据标签生成的URL。
 * @notice  请注意，标签名称不区分大小写,tagS需要在线查找 https://shields.io/badges
 */
const getUrl = (tag) => {
    const logoVal = tagS[tag.trim().toLowerCase()]
    if(!logoVal) {
        return `https://img.shields.io/badge/-${tag}-333?style=flat`
    }else {
        return `https://img.shields.io/badge/-${tag}-333?logo=${logoVal}`
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