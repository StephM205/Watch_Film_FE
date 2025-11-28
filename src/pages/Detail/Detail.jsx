import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Detailjs from '../../assets/js/user/Detail';  
import Loading from '../../components/loading/loading';



const Detail = () => {
    Detailjs();
    return (
        <>
            <Loading />

            <Header />
            <section className="breadcrumb">
                <div className="container-f">
                    <div className="breadcrumb-content">
                        <a href="">Trang chủ</a>
                        <i className="fas fa-chevron-right" />
                        <a href="#">Phim bộ</a>
                        <i className="fas fa-chevron-right" />
                        <span>Đường Triều Quỷ Sự Lục 3 - Trường An</span>
                    </div>
                </div>
            </section>
            {/* Movie Detail Section */}
            <section className="movie-detail">
                <div className="container-f">
                    <div className="detail-content">
                        <div className="detail-poster">
                            <div className="poster-img">
                                <img
                                    className="slide-img"
                                    src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg"
                                    alt="Đường Triều Quỷ Sự Lục 3 - Trường An"
                                />
                                <video muted="" loop="" className="slide-img" id="slide-video">
                                    <source
                                        src="https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </div>
                            <div className="poster-actions">
                                <button className="action-btn">
                                    <i className="fas fa-play" />
                                    Xem ngay
                                </button>
                                <button className="heart-btn favorite-btn">
                                    <i className="far fa-heart" />
                                    Yêu thích
                                </button>
                                <button className="share-btn">
                                    <i className="fas fa-share-alt" />
                                    Chia sẻ
                                </button>
                            </div>
                        </div>
                        <div className="detail-info">
                            <h1 className="movie-title">
                                Đường Triều Quỷ Sự Lục 3 - Trường An
                            </h1>
                            <div className="movie-meta">
                                <span className="meta-item">2023</span>
                                <span className="meta-item">|</span>
                                <span className="meta-item">Trung Quốc</span>
                                <span className="meta-item">|</span>
                                <span className="meta-item">12 tập</span>
                                <span className="meta-item">|</span>
                                <span className="meta-item rating">
                                    <i className="fas fa-star" />
                                    8.8/10
                                </span>
                            </div>
                            <div className="movie-tags">
                                <span className="tag">Hành động</span>
                                <span className="tag">Phiêu lưu</span>
                                <span className="tag">Cổ trang</span>
                                <span className="tag">Thần bí</span>
                            </div>
                            <div className="movie-description">
                                <p>
                                    Đường Triều Quỷ Sự Lục 3 - Trường An tiếp tục cuộc phiêu lưu của
                                    các nhân vật chính trong việc điều tra những vụ án kỳ bí liên
                                    quan đến ma quỷ và thế lực hắc ám. Bối cảnh chính của phần này
                                    là kinh đô Trường An huyền bí, nơi những âm mưu đen tối đang dần
                                    được hé lộ.
                                </p>
                                <p>
                                    Với sự kết hợp giữa yếu tố lịch sử, thần bí và hành động, bộ
                                    phim hứa hẹn mang đến cho khán giả những trải nghiệm hồi hộp,
                                    gay cấn không kém các phần trước.
                                </p>
                            </div>
                            <div className="movie-details">
                                <div className="detail-item">
                                    <span className="detail-label">Đạo diễn:</span>
                                    <span className="detail-value">Phạm Ngọc Sơn</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Diễn viên:</span>
                                    <span className="detail-value">
                                        Lý Dịch Phong, Dương Mịch, Trương Nghệ Hưng
                                    </span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Thể loại:</span>
                                    <span className="detail-value">
                                        Hành động, Phiêu lưu, Cổ trang, Thần bí
                                    </span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Quốc gia:</span>
                                    <span className="detail-value">Trung Quốc</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Năm sản xuất:</span>
                                    <span className="detail-value">2023</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Trạng thái:</span>
                                    <span className="detail-value">Đã hoàn thành</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Episode Section */}
            <section className="episode-section">
                <div className="container-f">
                    <div className="section-header">
                        <h2 className="section-title">Danh sách tập phim</h2>
                    </div>
                    <div className="episode-grid">
                        <div className="episode-card active">
                            <div className="episode-number">Tập 1</div>
                            <div className="episode-title">Khởi đầu ở Trường An</div>
                            <div className="episode-duration">45 phút</div>
                            <button title="Xem tập 1" className="episode-play-btn">
                                <i className="fas fa-play" />
                            </button>
                        </div>
                        <div className="episode-card">
                            <div className="episode-number">Tập 2</div>
                            <div className="episode-title">Bí ẩn đêm trăng</div>
                            <div className="episode-duration">42 phút</div>
                            <button title="Xem tập 2" className="episode-play-btn">
                                <i className="fas fa-play" />
                            </button>
                        </div>
                        <div className="episode-card">
                            <div className="episode-number">Tập 3</div>
                            <div className="episode-title">Cuộc điều tra bắt đầu</div>
                            <div className="episode-duration">47 phút</div>
                            <button title="Xem tập 3" className="episode-play-btn">
                                <i className="fas fa-play" />
                            </button>
                        </div>
                        <div className="episode-card">
                            <div className="episode-number">Tập 4</div>
                            <div className="episode-title">Dấu vết ma quỷ</div>
                            <div className="episode-duration">44 phút</div>
                            <button title="Xem tập 4" className="episode-play-btn">
                                <i className="fas fa-play" />
                            </button>
                        </div>
                        <div className="episode-card">
                            <div className="episode-number">Tập 5</div>
                            <div className="episode-title">Trận chiến đêm đen</div>
                            <div className="episode-duration">46 phút</div>
                            <button title="Xem tập 5" className="episode-play-btn">
                                <i className="fas fa-play" />
                            </button>
                        </div>
                        <div className="episode-card">
                            <div className="episode-number">Tập 6</div>
                            <div className="episode-title">Bí mật hoàng cung</div>
                            <div className="episode-duration">43 phút</div>
                            <button title="Xem tập 6" className="episode-play-btn">
                                <i className="fas fa-play" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Related Movies */}
            <section className="related-section">
                <div className="container-f">
                    <div className="section-header">
                        <h2 className="section-title">Phim liên quan</h2>
                        <div className="view-all-container">
                            <a href="#" className="view-all">
                                <span className="view-all-text">Xem tất cả</span>
                                <span className="material-icons">
                                    <i className="fas fa-chevron-right" />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="related-grid">
                        {/* Related Cards */}
                        <div className="related-card">
                            <div className="related-content">
                                <div className="related-img">
                                    <img
                                        src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg"
                                        alt="Đường Triều Quỷ Sự Lục 2"
                                    />
                                    <div className="related-overlay">
                                        <button className="play-overlay-btn">
                                            <i className="fas fa-play" />
                                        </button>
                                    </div>
                                </div>
                                <div className="related-info">
                                    <h3 className="related-title">Đường Triều Quỷ Sự Lục 2</h3>
                                    <div className="related-meta">
                                        <span>2022</span>
                                        <span>Trung Quốc</span>
                                        <span className="rating">
                                            <i className="fas fa-star" />
                                            8.5/10
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="related-card">
                            <div className="related-content">
                                <div className="related-img">
                                    <img
                                        src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg"
                                        alt="Song Trang Hoán Mệnh"
                                    />
                                    <div className="related-overlay">
                                        <button className="play-overlay-btn">
                                            <i className="fas fa-play" />
                                        </button>
                                    </div>
                                </div>
                                <div className="related-info">
                                    <h3 className="related-title">Song Trang Hoán Mệnh</h3>
                                    <div className="related-meta">
                                        <span>2024</span>
                                        <span>Trung Quốc</span>
                                        <span className="rating">
                                            <i className="fas fa-star" />
                                            8.2/10
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="related-card">
                            <div className="related-content">
                                <div className="related-img">
                                    <img
                                        src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg"
                                        alt="Mê Kế"
                                    />
                                    <div className="related-overlay">
                                        <button className="play-overlay-btn">
                                            <i className="fas fa-play" />
                                        </button>
                                    </div>
                                </div>
                                <div className="related-info">
                                    <h3 className="related-title">Mê Kế</h3>
                                    <div className="related-meta">
                                        <span>2023</span>
                                        <span>Trung Quốc</span>
                                        <span className="rating">
                                            <i className="fas fa-star" />
                                            7.9/10
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="related-card">
                            <div className="related-content">
                                <div className="related-img">
                                    <img
                                        src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg"
                                        alt="Thiên Cổ Quyết Trần"
                                    />
                                    <div className="related-overlay">
                                        <button className="play-overlay-btn">
                                            <i className="fas fa-play" />
                                        </button>
                                    </div>
                                </div>
                                <div className="related-info">
                                    <h3 className="related-title">Thiên Cổ Quyết Trần</h3>
                                    <div className="related-meta">
                                        <span>2024</span>
                                        <span>Trung Quốc</span>
                                        <span className="rating">
                                            <i className="fas fa-star" />
                                            8.1/10
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="related-card">
                            <div className="related-content">
                                <div className="related-img">
                                    <img
                                        src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg"
                                        alt="Cổ Kiếm Kỳ Đàm"
                                    />
                                    <div className="related-overlay">
                                        <button className="play-overlay-btn">
                                            <i className="fas fa-play" />
                                        </button>
                                    </div>
                                </div>
                                <div className="related-info">
                                    <h3 className="related-title">Cổ Kiếm Kỳ Đàm</h3>
                                    <div className="related-meta">
                                        <span>2023</span>
                                        <span>Trung Quốc</span>
                                        <span className="rating">
                                            <i className="fas fa-star" />
                                            8.0/10
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    );
};

export default Detail;