import Tag from '../../src/components/Tag'
import img from '../public/mobei12.jpg'
const Header = () => {
    return (
        <div className=' flex  flex-col md:flex-row max-w-6xl min-h-[35vh] mt-12 sm:mt-0 justify-between'>
            <div className='flex flex-col justify-center  max-w-xl sm:max-w-3xl order-2 md:order-1'>
                <div>
                    <Tag tag='Info' />：蒋军晖/男/1992
                </div>
                <div>
                    <Tag tag='Email' />：mobeigege@icloud.com
                </div>
                <div>
                    <Tag tag='WeChat' />：DEBUG__LIFE
                </div>
            </div>
            <div className='user-img order-1 '>
                <img src={img}  alt="mobei" width="300" height="100"/>
            </div>
        </div>
    )
}
export default Header