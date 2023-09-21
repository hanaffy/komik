import './kominfoStyle.css'
import '../style.css'

import { IconContext } from 'react-icons';
import { AiFillStar } from 'react-icons/ai'

const KominfoTools = () => {
    return (
        <section className='komikinfo width'>
            <div className="komikinfo-wrapper">
                <div className="komikinfo-content">
                    <div className="komikinfo-cover-background">
                        <img className='komikinfo-background' src={require('../assets/hotCover/after.jpeg')} alt="..." />
                        <p className='komikinfo-background-color'></p>
                    </div>
                    <div className="komikinfo-cover-thumbnail">
                        <img className='komikinfo-thumbnail' src={require('../assets/hotCover/after.jpeg')} alt="..." />
                    </div>
                    <div className="komikinfo-deskription">
                        <h2 className='komikinfo-judul'>The World After Fall</h2>
                        <div className="komikinfo-info">
                            <ul className='komikinfo-ul'>
                                <li className='komikinfo-list'>Released</li>
                                <li className='komikinfo-list'>Status</li>
                                <li className='komikinfo-list'>Total Chapter</li>
                                <li className='komikinfo-list'>Author</li>
                                <li className='komikinfo-list'>Type</li>
                                <li className='komikinfo-list'>Rating</li>
                                <li className='komikinfo-list'>Latest Update</li>
                            </ul>
                            <ul className='komikinfo-ul'>
                                <li className='komikinfo-list'>: 2023</li>
                                <li className='komikinfo-list'>: OnGoing</li>
                                <li className='komikinfo-list'>: ?</li>
                                <li className='komikinfo-list'>: Minamoto</li>
                                <li className='komikinfo-list'>: Manhwa</li>
                                <li className='komikinfo-list'>: 8.9
                                    <IconContext.Provider value={{ color: "rgb(224, 202, 5)" }} >
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </IconContext.Provider>
                                </li>
                                <li className='komikinfo-list'>: 07/08/2023</li>
                            </ul>
                            <div className="komikinfo-genre">
                                <p className='komikinfo-genre-list'>Action</p>
                                <p className='komikinfo-genre-list'>Adventure</p>
                                <p className='komikinfo-genre-list'>Fantasy</p>
                                <p className='komikinfo-genre-list'>Shounen</p>
                                <p className='komikinfo-genre-list'>Magic</p>
                                <p className='komikinfo-genre-list'>Supranatural</p>
                            </div>
                            <div className="komikinfo-bookmark">
                                <p>Bookmark</p>
                            </div>
                            <div className='komikinfo-feedback'>
                                <p className='komikinfo-url'>copy-url</p>
                            </div>
                        </div>
                    </div>
                    <div className="komikinfo-sinopsis">
                        <h3 className='komikinfo-sinopsis-h3'>Sinopsis</h3>
                        <p className='komikinfo-sinopsis-p'>Umat manusia tiba-tiba di-summon untuk menjadi “Walker”,
                            dan mereka harus menyelesaikan semua lantai yang ada di dalam tower untuk menyelamatkan dunia. Lalu,
                            “Regression Stone” muncul. Kini para Walker dapat “kembali” ke masa lalu.
                            Dan perlahan… semuanya meninggalkan masa kini. Harapan terakhir umat manusia, “Carpe Diem”,
                            dibentuk oleh orang-orang yang menolak untuk mengabaikan dunia. Tapi begitu Walker terakhir mencapai lantai 100,
                            dia tidak lagi tahu lagi apa yang harus dia percaya.
                            Ini adalah cerita dari satu-satunya manusia yang tidak melakukan regresi,
                            meski yang lainnya telah kembali ke masa lalu.</p>
                    </div>
                    <div className="komikinfo-contact">
                        <button className='komikinfo-contact-btn komikinfo-contact-btn-instagram'>Instagram</button>
                        <button className='komikinfo-contact-btn komikinfo-contact-btn-facebook'>Facebook</button>
                        <button className='komikinfo-contact-btn komikinfo-contact-btn-whatsapp'>Whatsapp</button>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default KominfoTools;