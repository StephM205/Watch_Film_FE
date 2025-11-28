import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Watchjs from '../../assets/js/user/Watch';
import Loading from '../../components/loading/loading';
import { useEffect } from 'react';
const Watch = () => {
    Watchjs();
    useEffect(() => {
        const player = document.getElementById('main-movie-player');
        player.addEventListener('ended', () => {
            // Xử lý khi video kết thúc
            console.log('Video kết thúc');
        });
    }, []);
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
            {/* Video Player Full Width */}
            <section className="video-full-section">
                <div className="container-f">
                    <div className="video-container-full">
                        <div className="video-full-content">
                            <video className='video-full-img-video' id="main-movie-player"   >
                                <source
                                   
                                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                    type="video/mp4"
                                />
                        
                               
                            </video>
                        </div>
                        {/* Custom Controls Overlay */}
                        <div className="custom-controls-overlay" id="controls-overlay">
                            <div className="controls-top">

                                <div className="video-title-overlay">
                                    <h3>Đường Triều Quỷ Sự Lục 3 - Tập 1</h3>
                                    <p>Khởi đầu ở Trường An</p>
                                </div>
                            </div>
                            <div className="controls-center">
                                <button className="control-btn-large" id="rewind-btn">
                                    <i className="fas fa-backward" />
                                </button>
                                <button
                                    className="control-btn-large play-pause-btn"
                                    id="main-play-pause"
                                >
                                    <i className="fas fa-play" />
                                </button>
                                <button className="control-btn-large" id="forward-btn">
                                    <i className="fas fa-forward" />
                                </button>
                            </div>
                            <div className="controls-bottom">
                                <div className="progress-container">
                                    <div className="progress-content">
                                        <div className="time-display">
                                            <span id="current-time">00:00</span>
                                            <span>/</span>
                                            <span id="total-time">00:00</span>
                                        </div>
                                        <div className="controls-right">
                                            <div className='volume-wrapper'>
                                                 <div className='volume-box'>
                                                    <span id='volume-span'>100%</span>
                                                    <input
                                                    type="range"
                                                    className="volume-slider"
                                                    id="volume-slider"
                                                    min="0"
                                                    max="1"
                                                    step="0.01"/>
                                                </div>
                                                <button className="control-btn-main" id="volume-control">
                                                    <i className="fas fa-volume-up" />
                                                </button>
                                            </div>
                                            <button className="control-btn-main" id="settings-btn">
                                                <i className="fas fa-cog" />
                                            </button>
                                            <button className="control-btn-main" id="fullscreen-toggle">
                                                <i className="fas fa-expand" />
                                            </button>
                                        </div>

                                    </div>
                                    <div className="progress-bar" id="progress-bar">
                                        <div className="progress-fill" id="progress-fill" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Episode Navigation */}
                    <div className="episode-navigation-full">
                        <button className="episode-nav-btn" id="prev-episode">
                            <i className="fas fa-chevron-left" />
                            Tập trước
                        </button>
                        <div className="episode-selector-full">
                            <div className="current-episode-full">
                                <span className="episode-badge">Đang phát</span>
                                <span className="episode-number">Tập 1</span>
                                <span className="episode-title">Khởi đầu ở Trường An</span>
                            </div>
                            <div className="episode-dropdown-full" id="episode-dropdown">
                                <div className="episode-list-full">
                                    <div className="episode-item-full active">
                                        <span className="episode-num">Tập 1</span>
                                        <span className="episode-title">Khởi đầu ở Trường An</span>
                                        <span className="episode-duration">45:00</span>
                                        <i className="fas fa-play" />
                                    </div>
                                    <div className="episode-item-full" data-episode={2}>
                                        <span className="episode-num">Tập 2</span>
                                        <span className="episode-title">Bí ẩn đêm trăng</span>
                                        <span className="episode-duration">42:30</span>
                                        <i className="fas fa-play" />
                                    </div>
                                    <div className="episode-item-full" data-episode={3}>
                                        <span className="episode-num">Tập 3</span>
                                        <span className="episode-title">Cuộc điều tra bắt đầu</span>
                                        <span className="episode-duration">47:15</span>
                                        <i className="fas fa-play" />
                                    </div>
                                    <div className="episode-item-full" data-episode={4}>
                                        <span className="episode-num">Tập 4</span>
                                        <span className="episode-title">Dấu vết ma quỷ</span>
                                        <span className="episode-duration">44:20</span>
                                        <i className="fas fa-play" />
                                    </div>
                                    <div className="episode-item-full" data-episode={5}>
                                        <span className="episode-num">Tập 5</span>
                                        <span className="episode-title">Trận chiến đêm đen</span>
                                        <span className="episode-duration">46:10</span>
                                        <i className="fas fa-play" />
                                    </div>
                                    <div className="episode-item-full" data-episode={6}>
                                        <span className="episode-num">Tập 6</span>
                                        <span className="episode-title">Bí mật hoàng cung</span>
                                        <span className="episode-duration">43:25</span>
                                        <i className="fas fa-play" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="episode-nav-btn" id="next-episode">
                            Tập sau
                            <i className="fas fa-chevron-right" />
                        </button>
                    </div>
                </div>
            </section>
            {/* Content Below Video */}
            <section className="content-below-video">
                <div className="container-f">
                    <div className="content-grid">
                        {/* Left Column - Comments & Rating */}
                        <div className="content-left">
                            {/* Rating Overview */}
                            <div className="rating-section">
                                <div className="section-header">
                                    <h2 className="section-title">Đánh giá phim</h2>
                                </div>
                                <div className="rating-overview">
                                    <div className="average-rating">
                                        <div className="rating-score">8.8</div>
                                        <div className="rating-details">
                                            <div className="stars">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star-half-alt" />
                                            </div>
                                            <div className="rating-count">1,245 đánh giá</div>
                                        </div>
                                    </div>
                                    <div className="rating-bars">
                                        <div className="rating-bar">
                                            <span className="star-label">5 sao</span>
                                            <div className="bar-container">
                                                <div className="bar-fill" style={{ width: "65%" }} />
                                            </div>
                                            <span className="percentage">65%</span>
                                        </div>
                                        <div className="rating-bar">
                                            <span className="star-label">4 sao</span>
                                            <div className="bar-container">
                                                <div className="bar-fill" style={{ width: "20%" }} />
                                            </div>
                                            <span className="percentage">20%</span>
                                        </div>
                                        <div className="rating-bar">
                                            <span className="star-label">3 sao</span>
                                            <div className="bar-container">
                                                <div className="bar-fill" style={{ width: "10%" }} />
                                            </div>
                                            <span className="percentage">10%</span>
                                        </div>
                                        <div className="rating-bar">
                                            <span className="star-label">2 sao</span>
                                            <div className="bar-container">
                                                <div className="bar-fill" style={{ width: "3%" }} />
                                            </div>
                                            <span className="percentage">3%</span>
                                        </div>
                                        <div className="rating-bar">
                                            <span className="star-label">1 sao</span>
                                            <div className="bar-container">
                                                <div className="bar-fill" style={{ width: "2%" }} />
                                            </div>
                                            <span className="percentage">2%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Add Comment */}
                            <div className="add-comment-section">
                                <div className="section-header">
                                    <h2 className="section-title">Thêm đánh giá của bạn</h2>
                                </div>
                                <div className="add-comment">
                                    <div className="user-avatar">
                                        <i className="fas fa-user" />
                                    </div>
                                    <div className="comment-input-container">
                                        <div className="rating-input">
                                            <span>Đánh giá của bạn:</span>
                                            <div className="star-rating">
                                                <i className="far fa-star" data-rating={1} />
                                                <i className="far fa-star" data-rating={2} />
                                                <i className="far fa-star" data-rating={3} />
                                                <i className="far fa-star" data-rating={4} />
                                                <i className="far fa-star" data-rating={5} />
                                            </div>
                                        </div>
                                        <textarea
                                            placeholder="Chia sẻ cảm nhận của bạn về phim..."
                                            className="comment-input"
                                            defaultValue={""}
                                        />
                                        <div className="comment-actions">
                                            <button className="submit-comment-btn">Gửi đánh giá</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Comments List */}
                            <div className="comments-section">
                                <div className="section-header">
                                    <h2 className="section-title">Bình luận từ người xem</h2>
                                    <div className="sort-comments">
                                        <select className="sort-select">
                                            <option value="newest">Mới nhất</option>
                                            <option value="popular">Phổ biến nhất</option>
                                            <option value="highest">Đánh giá cao nhất</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="comments-list">
                                    <div className="comment-item">
                                        <div className="comment-header">
                                            <div className="user-info">
                                                <div className="user-avatar-small">
                                                    <i className="fas fa-user" />
                                                </div>
                                                <div className="user-details">
                                                    <span className="username">Nguyễn Văn A</span>
                                                    <div className="comment-rating">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <span>5.0</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="comment-time">2 giờ trước</span>
                                        </div>
                                        <div className="comment-content">
                                            <p>
                                                Phim hay quá! Diễn viên đóng rất tốt, cốt truyện hấp dẫn.
                                                Tập 1 đã tạo được ấn tượng mạnh với mình. Hiệu ứng hình ảnh
                                                đẹp, âm nhạc phù hợp với không khí phim.
                                            </p>
                                        </div>
                                        <div className="comment-actions">
                                            <button className="like-btn">
                                                <i className="far fa-thumbs-up" />
                                                <span>12</span>
                                            </button>
                                            <button className="reply-btn">Phản hồi</button>
                                        </div>
                                    </div>
                                    <div className="comment-item">
                                        <div className="comment-header">
                                            <div className="user-info">
                                                <div className="user-avatar-small">
                                                    <i className="fas fa-user" />
                                                </div>
                                                <div className="user-details">
                                                    <span className="username">Trần Thị B</span>
                                                    <div className="comment-rating">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="far fa-star" />
                                                        <span>4.0</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="comment-time">5 giờ trước</span>
                                        </div>
                                        <div className="comment-content">
                                            <p>
                                                Hiệu ứng hình ảnh đẹp, nhưng đôi khi nhạc nền hơi to. Hy
                                                vọng các tập sau sẽ cải thiện. Diễn viên chính đẹp trai,
                                                diễn xuất tự nhiên.
                                            </p>
                                        </div>
                                        <div className="comment-actions">
                                            <button className="like-btn">
                                                <i className="far fa-thumbs-up" />
                                                <span>8</span>
                                            </button>
                                            <button className="reply-btn">Phản hồi</button>
                                        </div>
                                    </div>
                                    <div className="comment-item">
                                        <div className="comment-header">
                                            <div className="user-info">
                                                <div className="user-avatar-small">
                                                    <i className="fas fa-user" />
                                                </div>
                                                <div className="user-details">
                                                    <span className="username">Lê Văn C</span>
                                                    <div className="comment-rating">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star-half-alt" />
                                                        <span>4.5</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="comment-time">1 ngày trước</span>
                                        </div>
                                        <div className="comment-content">
                                            <p>
                                                Phim Trung Quốc chất lượng cao! Cảnh quay đẹp, diễn viên
                                                chính đẹp trai quá 😍. Cốt truyện có nhiều điểm thú vị, mong
                                                chờ các tập tiếp theo.
                                            </p>
                                        </div>
                                        <div className="comment-actions">
                                            <button className="like-btn">
                                                <i className="far fa-thumbs-up" />
                                                <span>25</span>
                                            </button>
                                            <button className="reply-btn">Phản hồi</button>
                                        </div>
                                    </div>
                                </div>
                                <button className="load-more-comments">
                                    <i className="fas fa-chevron-down" />
                                    Xem thêm bình luận
                                </button>
                            </div>
                        </div>
                        {/* Right Column - Related Movies */}
                        <div className="content-right">
                            {/* Movie Info */}
                            <div className="movie-info-sidebar">
                                <div className="section-header">
                                    <h2 className="section-title">Thông tin phim</h2>
                                </div>
                                <div className="movie-details-sidebar">
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
                                            Hành động, Phiêu lưu, Cổ trang
                                        </span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Quốc gia:</span>
                                        <span className="detail-value">Trung Quốc</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Năm:</span>
                                        <span className="detail-value">2023</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Trạng thái:</span>
                                        <span className="detail-value">Đã hoàn thành</span>
                                    </div>
                                </div>
                            </div>
                            {/* Related Movies */}
                            <div className="related-movies">
                                <div className="section-header">
                                    <h2 className="section-title">Phim liên quan</h2>
                                    <a href="#" className="view-all-link">
                                        Xem tất cả
                                    </a>
                                </div>
                                <div className="related-movies-grid">
                                    <div className="related-movie-card">
                                        <div className="related-movie-poster">
                                            <img
                                                src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg"
                                                alt="Đường Triều Quỷ Sự Lục 2"
                                            />
                                            <div className="play-overlay">
                                                <i className="fas fa-play" />
                                            </div>
                                            <div className="movie-badge">Phần 2</div>
                                        </div>
                                        <div className="related-movie-info">
                                            <h4 className="related-movie-title">
                                                Đường Triều Quỷ Sự Lục 2
                                            </h4>
                                            <div className="related-movie-meta">
                                                <span className="rating">
                                                    <i className="fas fa-star" />
                                                    8.5
                                                </span>
                                                <span className="year">2022</span>
                                                <span className="episodes">12 tập</span>
                                            </div>
                                            <p className="movie-description">
                                                Phần tiếp theo của series đình đám với những cuộc phiêu lưu
                                                mới...
                                            </p>
                                        </div>
                                    </div>
                                    <div className="related-movie-card">
                                        <div className="related-movie-poster">
                                            <img
                                                src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg"
                                                alt="Song Trang Hoán Mệnh"
                                            />
                                            <div className="play-overlay">
                                                <i className="fas fa-play" />
                                            </div>
                                        </div>
                                        <div className="related-movie-info">
                                            <h4 className="related-movie-title">Song Trang Hoán Mệnh</h4>
                                            <div className="related-movie-meta">
                                                <span className="rating">
                                                    <i className="fas fa-star" />
                                                    8.7
                                                </span>
                                                <span className="year">2023</span>
                                                <span className="episodes">16 tập</span>
                                            </div>
                                            <p className="movie-description">
                                                Câu chuyện về hai chị em song sinh với số phận đan xen...
                                            </p>
                                        </div>
                                    </div>
                                    <div className="related-movie-card">
                                        <div className="related-movie-poster">
                                            <img
                                                src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg"
                                                alt="Mê Kế"
                                            />
                                            <div className="play-overlay">
                                                <i className="fas fa-play" />
                                            </div>
                                        </div>
                                        <div className="related-movie-info">
                                            <h4 className="related-movie-title">Mê Kế</h4>
                                            <div className="related-movie-meta">
                                                <span className="rating">
                                                    <i className="fas fa-star" />
                                                    8.3
                                                </span>
                                                <span className="year">2023</span>
                                                <span className="episodes">10 tập</span>
                                            </div>
                                            <p className="movie-description">
                                                Những âm mưu chính trị trong cung đình triều đại phong
                                                kiến...
                                            </p>
                                        </div>
                                    </div>
                                    <div className="related-movie-card">
                                        <div className="related-movie-poster">
                                            <img
                                                src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg"
                                                alt="Thiên Cổ Quyết Trần"
                                            />
                                            <div className="play-overlay">
                                                <i className="fas fa-play" />
                                            </div>
                                        </div>
                                        <div className="related-movie-info">
                                            <h4 className="related-movie-title">Thiên Cổ Quyết Trần</h4>
                                            <div className="related-movie-meta">
                                                <span className="rating">
                                                    <i className="fas fa-star" />
                                                    8.9
                                                </span>
                                                <span className="year">2023</span>
                                                <span className="episodes">20 tập</span>
                                            </div>
                                            <p className="movie-description">
                                                Cuộc chiến giữa các thế lực thần tiên trong truyền thuyết...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="settings-modal" id="settings-modal">
                <div class="settings-content">
                    <div class="settings-header">
                        <h3>Cài đặt phát</h3>
                        <button class="close-settings" id="close-settings">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="settings-options">
                        <div class="setting-option">
                            <label>Chất lượng</label>
                            <select id="quality-select">
                                <option value="auto">Tự động</option>
                                <option value="1080p">1080p</option>
                                <option value="720p">720p</option>
                                <option value="480p">480p</option>
                            </select>
                        </div>
                        <div class="setting-option">
                            <label>Tốc độ phát</label>
                            <select id="speed-select">
                                <option value="0.5">0.5x</option>
                                <option value="0.75">0.75x</option>
                                <option value="1" selected>Bình thường</option>
                                <option value="1.25">1.25x</option>
                                <option value="1.5">1.5x</option>
                                <option value="2">2x</option>
                            </select>
                        </div>
                        <div class="setting-option">
                            <label>Phụ đề</label>
                            <select id="subtitle-select">
                                <option value="none">Tắt</option>
                                <option value="vi">Tiếng Việt</option>
                                <option value="en">English</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
           


            


            <Footer />
        </>


    );
};

export default Watch;
