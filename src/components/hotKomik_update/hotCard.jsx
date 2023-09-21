import '../style.css'
import './hotStyle.css';

import { IconContext } from 'react-icons';
import { AiFillStar } from "react-icons/ai"


const HotCard = () => {

    const drag = () => {
        const slider = document.getElementById('slider');

        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        })
        slider.addEventListener('mouseleave', () => {
            isDown = false;
        })
        slider.addEventListener('mouseup', () => {
            isDown = false;
        })
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = x - startX;
            slider.scrollLeft = scrollLeft - walk;
        })
    }

    return (
        <>
            <section className="width">
                <h4 className='for'>HOT KOMIK UPDATE</h4>
                <div onLoad={ drag } id='slider' className="hotKomik-wrapper">
                    <div className="hotKomik-card">
                        <p className='hotKomik-imageHover'></p>
                        <img className='hotKomik-flag' src={require('../assets/flag/koreanFlag.png')} alt="" />
                        <p className='hotKomik-manhwa'>MANHWA</p>
                        <img className='hotKomik-mainImg' src={require('../assets/hotCover/after.jpeg')} alt="..." />
                        <p className='hotKomik-judul'>The World After Fall</p>
                        <p className='hotKomik-chapter'>ch.00</p>
                        <span className='hotKomik-star'>
                            <IconContext.Provider value={{ color: "rgb(224, 202, 5)" }} >
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </IconContext.Provider>
                        </span>
                        <label className='hotKomik-label'>9.9</label>
                    </div>
                    <div className="hotKomik-card">
                        <p className='hotKomik-imageHover'></p>
                        <img className='hotKomik-flag' src={require('../assets/flag/koreanFlag.png')} alt="" />
                        <p className='hotKomik-manhwa'>MANHWA</p>
                        <img className='hotKomik-mainImg' src={require('../assets/hotCover/heavenly.jpg')} alt="..." />
                        <p className='hotKomik-judul'>The Heavenly Demon Can't LIve a Normal Life</p>
                        <p className='hotKomik-chapter'>ch.00</p>
                        <span className='hotKomik-star'>
                            <IconContext.Provider value={{ color: "rgb(224, 202, 5)" }} >
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </IconContext.Provider>
                        </span>
                        <label className='hotKomik-label'>9.9</label>
                    </div>
                    <div className="hotKomik-card">
                        <p className='hotKomik-imageHover'></p>
                        <img className='hotKomik-flag' src={require('../assets/flag/koreanFlag.png')} alt="" />
                        <p className='hotKomik-manhwa'>MANHWA</p>
                        <img className='hotKomik-mainImg' src={require('../assets/hotCover/lackey.jpg')} alt="..." />
                        <p className='hotKomik-judul'>I'm Really Not The Demon God's Lackey</p>
                        <p className='hotKomik-chapter'>ch.00</p>
                        <span className='hotKomik-star'>
                            <IconContext.Provider value={{ color: "rgb(224, 202, 5)" }} >
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </IconContext.Provider>
                        </span>
                        <label className='hotKomik-label'>9.9</label>
                    </div>
                    <div className="hotKomik-card">
                        <p className='hotKomik-imageHover'></p>
                        <img className='hotKomik-flag' src={require('../assets/flag/koreanFlag.png')} alt="" />
                        <p className='hotKomik-manhwa'>MANHWA</p>
                        <img className='hotKomik-mainImg' src={require('../assets/hotCover/mercenery.jpg')} alt="..." />
                        <p className='hotKomik-judul'>Mercenary Enrollment</p>
                        <p className='hotKomik-chapter'>ch.00</p>
                        <span className='hotKomik-star'>
                            <IconContext.Provider value={{ color: "rgb(224, 202, 5)" }} >
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </IconContext.Provider>
                        </span>
                        <label className='hotKomik-label'>9.9</label>
                    </div>
                    <div className="hotKomik-card">
                        <p className='hotKomik-imageHover'></p>
                        <img className='hotKomik-flag' src={require('../assets/flag/koreanFlag.png')} alt="" />
                        <p className='hotKomik-manhwa'>MANHWA</p>
                        <img className='hotKomik-mainImg' src={require('../assets/hotCover/mount-hua.png')} alt="..." />
                        <p className='hotKomik-judul'>Return of the Flowery Mountain Sect</p>
                        <p className='hotKomik-chapter'>ch.00</p>
                        <span className='hotKomik-star'>
                            <IconContext.Provider value={{ color: "rgb(224, 202, 5)" }} >
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </IconContext.Provider>
                        </span>
                        <label className='hotKomik-label'>9.9</label>
                    </div>
                    <div className="hotKomik-card">
                        <p className='hotKomik-imageHover'></p>
                        <img className='hotKomik-flag' src={require('../assets/flag/koreanFlag.png')} alt="" />
                        <p className='hotKomik-manhwa'>MANHWA</p>
                        <img className='hotKomik-mainImg' src={require('../assets/hotCover/pick.jpg')} alt="..." />
                        <p className='hotKomik-judul'>Pick Me Up, Infinite Gacha</p>
                        <p className='hotKomik-chapter'>ch.00</p>
                        <span className='hotKomik-star'>
                            <IconContext.Provider value={{ color: "rgb(224, 202, 5)" }} >
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </IconContext.Provider>
                        </span>
                        <label className='hotKomik-label'>9.9</label>
                    </div>
                    <div className="hotKomik-card">
                        <p className='hotKomik-imageHover'></p>
                        <img className='hotKomik-flag' src={require('../assets/flag/koreanFlag.png')} alt="" />
                        <p className='hotKomik-manhwa'>MANHWA</p>
                        <img className='hotKomik-mainImg' src={require('../assets/hotCover/rich.jpg')} alt="..." />
                        <p className='hotKomik-judul'>The Youngest Son Of A Rich Family (Rebirn Rich)</p>
                        <p className='hotKomik-chapter'>ch.00</p>
                        <span className='hotKomik-star'>
                            <IconContext.Provider value={{ color: "rgb(224, 202, 5)" }} >
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </IconContext.Provider>
                        </span>
                        <label className='hotKomik-label'>9.9</label>
                    </div>
                    <div className="hotKomik-card">
                        <p className='hotKomik-imageHover'></p>
                        <img className='hotKomik-flag' src={require('../assets/flag/koreanFlag.png')} alt="" />
                        <p className='hotKomik-manhwa'>MANHWA</p>
                        <img className='hotKomik-mainImg' src={require('../assets/hotCover/solev.jpg')} alt="..." />
                        <p className='hotKomik-judul'>Solo Leveling</p>
                        <p className='hotKomik-chapter'>ch.00</p>
                        <span className='hotKomik-star'>
                            <IconContext.Provider value={{ color: "rgb(224, 202, 5)" }} >
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </IconContext.Provider>
                        </span>
                        <label className='hotKomik-label'>9.9</label>
                    </div>
                    <div className="hotKomik-card">
                        <p className='hotKomik-imageHover'></p>
                        <img className='hotKomik-flag' src={require('../assets/flag/koreanFlag.png')} alt="" />
                        <p className='hotKomik-manhwa'>MANHWA</p>
                        <img className='hotKomik-mainImg' src={require('../assets/hotCover/tyrant.jpg')} alt="..." />
                        <p className='hotKomik-judul'>I Become the Tyrant of a Defense Game</p>
                        <p className='hotKomik-chapter'>ch.00</p>
                        <span className='hotKomik-star'>
                            <IconContext.Provider value={{ color: "rgb(224, 202, 5)" }} >
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </IconContext.Provider>
                        </span>
                        <label className='hotKomik-label'>9.9</label>
                    </div>
                    <div className="hotKomik-card">
                        <p className='hotKomik-imageHover'></p>
                        <img className='hotKomik-flag' src={require('../assets/flag/koreanFlag.png')} alt="" />
                        <p className='hotKomik-manhwa'>MANHWA</p>
                        <img className='hotKomik-mainImg' src={require('../assets/hotCover/villain.png')} alt="..." />
                        <p className='hotKomik-judul'>The Villain Of Destiny</p>
                        <p className='hotKomik-chapter'>ch.00</p>
                        <span className='hotKomik-star'>
                            <IconContext.Provider value={{ color: "rgb(224, 202, 5)" }} >
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </IconContext.Provider>
                        </span>
                        <label className='hotKomik-label'>9.9</label>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HotCard;