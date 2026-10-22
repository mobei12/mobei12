import Tag from '../../src/components/Tag'
import img from '../public/mobei12.png'
const Header = () => {
    return (
        <div className='cv-header rp-not-doc'>
            <div className='cv-header__avatar'>
                <img src={img} alt="mobei" width="140" height="140"/>
            </div>
            <div className='cv-header__body'>
                <ul className='cv-header__list'>
                    <li><Tag tag='Info' />：蒋军晖/男</li>
                    <li><Tag tag='Email' />：mobeigege@icloud.com</li>
                    <li><Tag tag='WeChat' />：DEBUG__LIFE</li>
                </ul>
            </div>
        </div>
    )
}
export default Header
