const spanStyle = {
    borderRadius: '0.20rem',
    padding: '0.2rem 0.375rem',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    color: '#fff',
}
const getStyle = (tag) => {
    switch(tag.trim().toLowerCase()) {
        case 'react':
            return Object.assign({}, spanStyle, { backgroundColor: '#0D6D8C' })
        case 'vue':
            return Object.assign({}, spanStyle, { backgroundColor: '#42d392' })
        case 'webpack':
            return Object.assign({}, spanStyle, { backgroundColor: '#8ED1FC' })
        case 'node':
            return Object.assign({}, spanStyle, { backgroundColor: '#026E00' })
        case 'express':
            return Object.assign({}, spanStyle, { backgroundColor: '#E04E39' })
        case 'git':
            return Object.assign({}, spanStyle, { backgroundColor: '#0D1117' })
        case 'javascript':
            return Object.assign({}, spanStyle, { backgroundColor: '#F7DF1E' })
        default:
            return Object.assign({}, spanStyle, { border: '1px solid #ccc' })
    }
}
const Tag = ({ tag }) => {
    return(
        <span className="tag" style={getStyle(tag)}>{tag}</span>
    )
}
export default Tag