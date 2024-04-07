import Tag from '../../src/components/Tag'
import img from '../public/mobei12.jpg'
const Header = () => {
    return (
        <div style={{display: 'flex', }}>
            <div style={{flex:1}}>
                <div>
                    <Tag tag='Email' />：mobeigege@icloud.com
                </div>
                <div>
                    <Tag tag='WeChat' />：mobeigege
                </div>
            </div>
            <img src={img} alt="mobei" width="250" height="100%"/>
        </div>
    )
}
export default Header