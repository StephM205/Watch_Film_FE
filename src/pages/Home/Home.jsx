import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Homejs from '../../assets/js/user/Home';
import Loading from '../../components/loading/loading';


const Home = () => {
  Homejs();
  return (
    <>
      <Loading />
      <Header />
      <Banner />
      <section className="section-updated">
        <div className="container-f">
          <div className="section-border">
            <div className="section-header">
              <h2 className="section-title">Phim mới cập nhật</h2>
              <div className="view-all-container">
                <a href="#" className="view-all-btn">
                  <span className="view-all-text">Xem tất cả</span>
                  <span className="material-icons">
                    <i className="fas fa-chevron-right" />
                  </span>
                </a>
              </div>
            </div>
            <div className="movie-grid">
              {/* Movie Cards */}
              <div className="movie-card" id="movie-card">
                <div className="movie-content">
                  <div className="movie-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                  </div>
                  <div className="movie-info">
                    <h3 className="movies-titles">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                  </div>
                </div>
                <div className="movie-hover-wrapper">
                  <div className="movie-hover-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                    <div className="movie-hover-icon">
                      <i className="fas fa-play" />
                    </div>
                  </div>
                  <div className="movie-hover-info">
                    <h3 className="movie-h3">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                    <div className="movie-hover-meta">
                      <span className="release">2023</span>
                      <span className="rating-hover release">
                        <i className="fas fa-star" />
                        <span className="rating-count">8.8(21)</span>
                      </span>
                      <span className="release">12/12 tập</span>
                    </div>
                    <div className="movie-hover-genres">
                      <span>hành động</span>
                      <span>Action</span>
                      <span>Adventure</span>
                    </div>
                    <p className="movie-description">
                      Đường Triều Quỷ Sự Lục 3 - Trường An là phim hành động Trung
                      Quốc được directed bởi đạo diễn Phạm Ngọc Sơn. Phim được phát
                      hành vào tháng 1 năm 2023.
                    </p>
                    <div className="movie-hover-buttons">
                      <a href="/detail" className="more-info-btn">
                        Xem ngay
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Thêm các movie-card khác ở đây */}
              {/* Movie Cards */}
              <div className="movie-card" id="movie-card">
                <div className="movie-content">
                  <div className="movie-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                  </div>
                  <div className="movie-info">
                    <h3 className="movies-title">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                  </div>
                </div>
                <div className="movie-hover-wrapper">
                  <div className="movie-hover-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                    <div className="movie-hover-icon">
                      <i className="fas fa-play" />
                    </div>
                  </div>
                  <div className="movie-hover-info">
                    <h3 className="movie-h3">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                    <div className="movie-hover-meta">
                      <span className="release">2023</span>
                      <span className="rating-hover release">
                        <i className="fas fa-star" />
                        <span className="rating-count">8.8(21)</span>
                      </span>
                      <span className="release">12/12 tập</span>
                    </div>
                    <div className="movie-hover-genres">
                      <span>hành động</span>
                      <span>Action</span>
                      <span>Adventure</span>
                    </div>
                    <p className="movie-description">
                      Đường Triều Quỷ Sự Lục 3 - Trường An là phim hành động Trung
                      Quốc được directed bởi đạo diễn Phạm Ngọc Sơn. Phim được phát
                      hành vào tháng 1 năm 2023.
                    </p>
                    <div className="movie-hover-buttons">
                      <a href="/detail" className="more-info-btn">
                        Xem ngay
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Movie Cards */}
              <div className="movie-card" id="movie-card">
                <div className="movie-content">
                  <div className="movie-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                  </div>
                  <div className="movie-info">
                    <h3 className="movies-title">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                  </div>
                </div>
                <div className="movie-hover-wrapper">
                  <div className="movie-hover-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                    <div className="movie-hover-icon">
                      <i className="fas fa-play" />
                    </div>
                  </div>
                  <div className="movie-hover-info">
                    <h3 className="movie-h3">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                    <div className="movie-hover-meta">
                      <span className="release">2023</span>
                      <span className="rating-hover release">
                        <i className="fas fa-star" />
                        <span className="rating-count">8.8(21)</span>
                      </span>
                      <span className="release">12/12 tập</span>
                    </div>
                    <div className="movie-hover-genres">
                      <span>hành động</span>
                      <span>Action</span>
                      <span>Adventure</span>
                    </div>
                    <p className="movie-description">
                      Đường Triều Quỷ Sự Lục 3 - Trường An là phim hành động Trung
                      Quốc được directed bởi đạo diễn Phạm Ngọc Sơn. Phim được phát
                      hành vào tháng 1 năm 2023.
                    </p>
                    <div className="movie-hover-buttons">
                      <a href="#" className="more-info-btn">
                        Xem Thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Movie Cards */}
              <div className="movie-card" id="movie-card">
                <div className="movie-content">
                  <div className="movie-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                  </div>
                  <div className="movie-info">
                    <h3 className="movies-title">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                  </div>
                </div>
                <div className="movie-hover-wrapper">
                  <div className="movie-hover-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                    <div className="movie-hover-icon">
                      <i className="fas fa-play" />
                    </div>
                  </div>
                  <div className="movie-hover-info">
                    <h3 className="movie-h3">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                    <div className="movie-hover-meta">
                      <span className="release">2023</span>
                      <span className="rating-hover release">
                        <i className="fas fa-star" />
                        <span className="rating-count">8.8(21)</span>
                      </span>
                      <span className="release">12/12 tập</span>
                    </div>
                    <div className="movie-hover-genres">
                      <span>hành động</span>
                      <span>Action</span>
                      <span>Adventure</span>
                    </div>
                    <p className="movie-description">
                      Đường Triều Quỷ Sự Lục 3 - Trường An là phim hành động Trung
                      Quốc được directed bởi đạo diễn Phạm Ngọc Sơn. Phim được phát
                      hành vào tháng 1 năm 2023.
                    </p>
                    <div className="movie-hover-buttons">
                      <a href="#" className="more-info-btn">
                        Xem Thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Movie Cards */}
              <div className="movie-card" id="movie-card">
                <div className="movie-content">
                  <div className="movie-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                  </div>
                  <div className="movie-info">
                    <h3 className="movies-title">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                  </div>
                </div>
                <div className="movie-hover-wrapper">
                  <div className="movie-hover-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                    <div className="movie-hover-icon">
                      <i className="fas fa-play" />
                    </div>
                  </div>
                  <div className="movie-hover-info">
                    <h3 className="movie-h3">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                    <div className="movie-hover-meta">
                      <span className="release">2023</span>
                      <span className="rating-hover release">
                        <i className="fas fa-star" />
                        <span className="rating-count">8.8(21)</span>
                      </span>
                      <span className="release">12/12 tập</span>
                    </div>
                    <div className="movie-hover-genres">
                      <span>hành động</span>
                      <span>Action</span>
                      <span>Adventure</span>
                    </div>
                    <p className="movie-description">
                      Đường Triều Quỷ Sự Lục 3 - Trường An là phim hành động Trung
                      Quốc được directed bởi đạo diễn Phạm Ngọc Sơn. Phim được phát
                      hành vào tháng 1 năm 2023.
                    </p>
                    <div className="movie-hover-buttons">
                      <a href="#" className="more-info-btn">
                        Xem Thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Movie Cards */}
              <div className="movie-card" id="movie-card">
                <div className="movie-content">
                  <div className="movie-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                  </div>
                  <div className="movie-info">
                    <h3 className="movies-title">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                  </div>
                </div>
                <div className="movie-hover-wrapper">
                  <div className="movie-hover-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                    <div className="movie-hover-icon">
                      <i className="fas fa-play" />
                    </div>
                  </div>
                  <div className="movie-hover-info">
                    <h3 className="movie-h3">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                    <div className="movie-hover-meta">
                      <span className="release">2023</span>
                      <span className="rating-hover release">
                        <i className="fas fa-star" />
                        <span className="rating-count">8.8(21)</span>
                      </span>
                      <span className="release">12/12 tập</span>
                    </div>
                    <div className="movie-hover-genres">
                      <span>hành động</span>
                      <span>Action</span>
                      <span>Adventure</span>
                    </div>
                    <p className="movie-description">
                      Đường Triều Quỷ Sự Lục 3 - Trường An là phim hành động Trung
                      Quốc được directed bởi đạo diễn Phạm Ngọc Sơn. Phim được phát
                      hành vào tháng 1 năm 2023.
                    </p>
                    <div className="movie-hover-buttons">
                      <a href="#" className="more-info-btn">
                        Xem Thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Movie Cards */}
              <div className="movie-card" id="movie-card">
                <div className="movie-content">
                  <div className="movie-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                  </div>
                  <div className="movie-info">
                    <h3 className="movies-title">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                  </div>
                </div>
                <div className="movie-hover-wrapper">
                  <div className="movie-hover-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                    <div className="movie-hover-icon">
                      <i className="fas fa-play" />
                    </div>
                  </div>
                  <div className="movie-hover-info">
                    <h3 className="movie-h3">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                    <div className="movie-hover-meta">
                      <span className="release">2023</span>
                      <span className="rating-hover release">
                        <i className="fas fa-star" />
                        <span className="rating-count">8.8(21)</span>
                      </span>
                      <span className="release">12/12 tập</span>
                    </div>
                    <div className="movie-hover-genres">
                      <span>hành động</span>
                      <span>Action</span>
                      <span>Adventure</span>
                    </div>
                    <p className="movie-description">
                      Đường Triều Quỷ Sự Lục 3 - Trường An là phim hành động Trung
                      Quốc được directed bởi đạo diễn Phạm Ngọc Sơn. Phim được phát
                      hành vào tháng 1 năm 2023.
                    </p>
                    <div className="movie-hover-buttons">
                      <a href="#" className="more-info-btn">
                        Xem Thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Movie Cards */}
              <div className="movie-card" id="movie-card">
                <div className="movie-content">
                  <div className="movie-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                  </div>
                  <div className="movie-info">
                    <h3 className="movies-title">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                  </div>
                </div>
                <div className="movie-hover-wrapper">
                  <div className="movie-hover-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                    <div className="movie-hover-icon">
                      <i className="fas fa-play" />
                    </div>
                  </div>
                  <div className="movie-hover-info">
                    <h3 className="movie-h3">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                    <div className="movie-hover-meta">
                      <span className="release">2023</span>
                      <span className="rating-hover release">
                        <i className="fas fa-star" />
                        <span className="rating-count">8.8(21)</span>
                      </span>
                      <span className="release">12/12 tập</span>
                    </div>
                    <div className="movie-hover-genres">
                      <span>hành động</span>
                      <span>Action</span>
                      <span>Adventure</span>
                    </div>
                    <p className="movie-description">
                      Đường Triều Quỷ Sự Lục 3 - Trường An là phim hành động Trung
                      Quốc được directed bởi đạo diễn Phạm Ngọc Sơn. Phim được phát
                      hành vào tháng 1 năm 2023.
                    </p>
                    <div className="movie-hover-buttons">
                      <a href="#" className="more-info-btn">
                        Xem Thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Movie Cards */}
              <div className="movie-card" id="movie-card">
                <div className="movie-content">
                  <div className="movie-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                  </div>
                  <div className="movie-info">
                    <h3 className="movies-title">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                  </div>
                </div>
                <div className="movie-hover-wrapper">
                  <div className="movie-hover-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                    <div className="movie-hover-icon">
                      <i className="fas fa-play" />
                    </div>
                  </div>
                  <div className="movie-hover-info">
                    <h3 className="movie-h3">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                    <div className="movie-hover-meta">
                      <span className="release">2023</span>
                      <span className="rating-hover release">
                        <i className="fas fa-star" />
                        <span className="rating-count">8.8(21)</span>
                      </span>
                      <span className="release">12/12 tập</span>
                    </div>
                    <div className="movie-hover-genres">
                      <span>hành động</span>
                      <span>Action</span>
                      <span>Adventure</span>
                    </div>
                    <p className="movie-description">
                      Đường Triều Quỷ Sự Lục 3 - Trường An là phim hành động Trung
                      Quốc được directed bởi đạo diễn Phạm Ngọc Sơn. Phim được phát
                      hành vào tháng 1 năm 2023.
                    </p>
                    <div className="movie-hover-buttons">
                      <a href="#" className="more-info-btn">
                        Xem Thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="slide-btn-left">
              <i className="fas fa-chevron-left" />
            </button>
            <button className="slide-btn-right">
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>
      </section>

      {/* toàn mục video phim */}
      <section className="Section-video">
        <div className="container-f">
          <div className="Section-grid">
            <ul>
              <li>
                <i className="fa-solid fa-film" />
                <a href=""> Toàn bộ mục thể loại video</a>
              </li>
              <li>
                <a href=""> tình cảm</a>
              </li>
              <li>
                <a href=""> hoạt hình</a>
              </li>
              <li>
                <a href=""> hành động</a>
              </li>
              <li>
                <a href=""> phiêu lưu</a>
              </li>
              <li>
                <a href=""> kinh dị</a>
              </li>
              <li>
                <a href="">Trung Quốc</a>
              </li>
              <li>
                <a href="">Hoa Kỳ</a>
              </li>
              <li>
                <a href=""> Hàn</a>
              </li>
              <li>
                <a href=""> Việt Nam</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Lịch sử xem phim */}
      <section className="section-history  ">
        <div className="container-f">
          <div className="content-history">
            <div className="section-header">
              <h2 className="section-title">Lịch sử xem phim</h2>
              <div className="view-all-container">
                <a href="#" className="view-all">
                  <span className="view-all-text">Xem tất cả</span>
                  <span className="material-icons">
                    <i className="fas fa-chevron-right" />
                  </span>
                </a>
              </div>
            </div>
            <div className="history-grid">
              {/* Movie Cards */}
              <div className="history-card">
                <div className="history-content">
                  <div className="history-img">
                    <img
                      src="https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                      alt="Movie 1"
                    />
                    {/* xem tiếp  */}
                    <a href="" className="play-history">
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <div className="history-info">
                    <h3 className="history-title">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Phần phim banner demo */}
      <section className="banner-phim">
        <div className="container-f">
          <div className="banner-demo-content">
            <div className="banner-demo-img">
              <img
                src="https://ads-cdn.fptplay.net/static/banner/2025/11/10_691197876b8e9200011a0918.jpg"
                alt="Movie 1"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Phần phim mới */}
      <section className="section-div" id="section-updated">
        <div className="container-f">
          <div className="section-border">
            <div className="section-header">
              <h2 className="section-title">Phim mới cập nhật</h2>
              <div className="view-all-container">
                <a href="#" className="view-all">
                  <span className="view-all-text">Xem tất cả</span>
                  <span className="material-icons">
                    <i className="fas fa-chevron-right" />
                  </span>
                </a>
              </div>
            </div>
            <div className="movie-grid">
              {/* Movie Cards */}
              <div className="movie-card" id="movie-card">
                <div className="movie-content">
                  <div className="movie-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                  </div>
                  <div className="movie-info">
                    <h3 className="movies-title">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                  </div>
                </div>
                <div className="movie-hover-wrapper">
                  <div className="movie-hover-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                    <div className="movie-hover-icon">
                      <i className="fas fa-play" />
                    </div>
                  </div>
                  <div className="movie-hover-info">
                    <h3 className="movie-h3">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                    <div className="movie-hover-meta">
                      <span className="release">2023</span>
                      <span className="rating-hover release">
                        <i className="fas fa-star" />
                        <span className="rating-count">8.8(21)</span>
                      </span>
                      <span className="release">12/12 tập</span>
                    </div>
                    <div className="movie-hover-genres">
                      <span>hành động</span>
                      <span>Action</span>
                      <span>Adventure</span>
                    </div>
                    <p className="movie-description">
                      Đường Triều Quỷ Sự Lục 3 - Trường An là phim hành động Trung
                      Quốc được directed bởi đạo diễn Phạm Ngọc Sơn. Phim được phát
                      hành vào tháng 1 năm 2023.
                    </p>
                    <div className="movie-hover-buttons">
                      <a href="#" className="more-info-btn">
                        Xem Thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Thêm các movie-card khác ở đây */}
              {/* Movie Cards */}
              <div className="movie-card" id="movie-card">
                <div className="movie-content">
                  <div className="movie-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                  </div>
                  <div className="movie-info">
                    <h3 className="movies-title">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                  </div>
                </div>
                <div className="movie-hover-wrapper">
                  <div className="movie-hover-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                    <div className="movie-hover-icon">
                      <i className="fas fa-play" />
                    </div>
                  </div>
                  <div className="movie-hover-info">
                    <h3 className="movie-h3">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                    <div className="movie-hover-meta">
                      <span className="release">2023</span>
                      <span className="rating-hover release">
                        <i className="fas fa-star" />
                        <span className="rating-count">8.8(21)</span>
                      </span>
                      <span className="release">12/12 tập</span>
                    </div>
                    <div className="movie-hover-genres">
                      <span>hành động</span>
                      <span>Action</span>
                      <span>Adventure</span>
                    </div>
                    <p className="movie-description">
                      Đường Triều Quỷ Sự Lục 3 - Trường An là phim hành động Trung
                      Quốc được directed bởi đạo diễn Phạm Ngọc Sơn. Phim được phát
                      hành vào tháng 1 năm 2023.
                    </p>
                    <div className="movie-hover-buttons">
                      <a href="#" className="more-info-btn">
                        Xem Thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Movie Cards */}
              <div className="movie-card" id="movie-card">
                <div className="movie-content">
                  <div className="movie-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                  </div>
                  <div className="movie-info">
                    <h3 className="movies-title">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                  </div>
                </div>
                <div className="movie-hover-wrapper">
                  <div className="movie-hover-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                    <div className="movie-hover-icon">
                      <i className="fas fa-play" />
                    </div>
                  </div>
                  <div className="movie-hover-info">
                    <h3 className="movie-h3">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                    <div className="movie-hover-meta">
                      <span className="release">2023</span>
                      <span className="rating-hover release">
                        <i className="fas fa-star" />
                        <span className="rating-count">8.8(21)</span>
                      </span>
                      <span className="release">12/12 tập</span>
                    </div>
                    <div className="movie-hover-genres">
                      <span>hành động</span>
                      <span>Action</span>
                      <span>Adventure</span>
                    </div>
                    <p className="movie-description">
                      Đường Triều Quỷ Sự Lục 3 - Trường An là phim hành động Trung
                      Quốc được directed bởi đạo diễn Phạm Ngọc Sơn. Phim được phát
                      hành vào tháng 1 năm 2023.
                    </p>
                    <div className="movie-hover-buttons">
                      <a href="#" className="more-info-btn">
                        Xem Thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Movie Cards */}
              <div className="movie-card" id="movie-card">
                <div className="movie-content">
                  <div className="movie-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                  </div>
                  <div className="movie-info">
                    <h3 className="movies-title">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                  </div>
                </div>
                <div className="movie-hover-wrapper">
                  <div className="movie-hover-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                    <div className="movie-hover-icon">
                      <i className="fas fa-play" />
                    </div>
                  </div>
                  <div className="movie-hover-info">
                    <h3 className="movie-h3">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                    <div className="movie-hover-meta">
                      <span className="release">2023</span>
                      <span className="rating-hover release">
                        <i className="fas fa-star" />
                        <span className="rating-count">8.8(21)</span>
                      </span>
                      <span className="release">12/12 tập</span>
                    </div>
                    <div className="movie-hover-genres">
                      <span>hành động</span>
                      <span>Action</span>
                      <span>Adventure</span>
                    </div>
                    <p className="movie-description">
                      Đường Triều Quỷ Sự Lục 3 - Trường An là phim hành động Trung
                      Quốc được directed bởi đạo diễn Phạm Ngọc Sơn. Phim được phát
                      hành vào tháng 1 năm 2023.
                    </p>
                    <div className="movie-hover-buttons">
                      <a href="#" className="more-info-btn">
                        Xem Thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Movie Cards */}
              <div className="movie-card" id="movie-card">
                <div className="movie-content">
                  <div className="movie-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                  </div>
                  <div className="movie-info">
                    <h3 className="movies-title">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                  </div>
                </div>
                <div className="movie-hover-wrapper">
                  <div className="movie-hover-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                    <div className="movie-hover-icon">
                      <i className="fas fa-play" />
                    </div>
                  </div>
                  <div className="movie-hover-info">
                    <h3 className="movie-h3">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                    <div className="movie-hover-meta">
                      <span className="release">2023</span>
                      <span className="rating-hover release">
                        <i className="fas fa-star" />
                        <span className="rating-count">8.8(21)</span>
                      </span>
                      <span className="release">12/12 tập</span>
                    </div>
                    <div className="movie-hover-genres">
                      <span>hành động</span>
                      <span>Action</span>
                      <span>Adventure</span>
                    </div>
                    <p className="movie-description">
                      Đường Triều Quỷ Sự Lục 3 - Trường An là phim hành động Trung
                      Quốc được directed bởi đạo diễn Phạm Ngọc Sơn. Phim được phát
                      hành vào tháng 1 năm 2023.
                    </p>
                    <div className="movie-hover-buttons">
                      <a href="#" className="more-info-btn">
                        Xem Thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Movie Cards */}
              <div className="movie-card" id="movie-card">
                <div className="movie-content">
                  <div className="movie-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                  </div>
                  <div className="movie-info">
                    <h3 className="movies-title">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                  </div>
                </div>
                <div className="movie-hover-wrapper">
                  <div className="movie-hover-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                    <div className="movie-hover-icon">
                      <i className="fas fa-play" />
                    </div>
                  </div>
                  <div className="movie-hover-info">
                    <h3 className="movie-h3">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                    <div className="movie-hover-meta">
                      <span className="release">2023</span>
                      <span className="rating-hover release">
                        <i className="fas fa-star" />
                        <span className="rating-count">8.8(21)</span>
                      </span>
                      <span className="release">12/12 tập</span>
                    </div>
                    <div className="movie-hover-genres">
                      <span>hành động</span>
                      <span>Action</span>
                      <span>Adventure</span>
                    </div>
                    <p className="movie-description">
                      Đường Triều Quỷ Sự Lục 3 - Trường An là phim hành động Trung
                      Quốc được directed bởi đạo diễn Phạm Ngọc Sơn. Phim được phát
                      hành vào tháng 1 năm 2023.
                    </p>
                    <div className="movie-hover-buttons">
                      <a href="#" className="more-info-btn">
                        Xem Thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Movie Cards */}
              <div className="movie-card" id="movie-card">
                <div className="movie-content">
                  <div className="movie-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                  </div>
                  <div className="movie-info">
                    <h3 className="movies-title">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                  </div>
                </div>
                <div className="movie-hover-wrapper">
                  <div className="movie-hover-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                    <div className="movie-hover-icon">
                      <i className="fas fa-play" />
                    </div>
                  </div>
                  <div className="movie-hover-info">
                    <h3 className="movie-h3">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                    <div className="movie-hover-meta">
                      <span className="release">2023</span>
                      <span className="rating-hover release">
                        <i className="fas fa-star" />
                        <span className="rating-count">8.8(21)</span>
                      </span>
                      <span className="release">12/12 tập</span>
                    </div>
                    <div className="movie-hover-genres">
                      <span>hành động</span>
                      <span>Action</span>
                      <span>Adventure</span>
                    </div>
                    <p className="movie-description">
                      Đường Triều Quỷ Sự Lục 3 - Trường An là phim hành động Trung
                      Quốc được directed bởi đạo diễn Phạm Ngọc Sơn. Phim được phát
                      hành vào tháng 1 năm 2023.
                    </p>
                    <div className="movie-hover-buttons">
                      <a href="#" className="more-info-btn">
                        Xem Thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Movie Cards */}
              <div className="movie-card" id="movie-card">
                <div className="movie-content">
                  <div className="movie-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                  </div>
                  <div className="movie-info">
                    <h3 className="movies-titles">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                  </div>
                </div>
                <div className="movie-hover-wrapper">
                  <div className="movie-hover-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                    <div className="movie-hover-icon">
                      <i className="fas fa-play" />
                    </div>
                  </div>
                  <div className="movie-hover-info">
                    <h3 className="movie-h3">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                    <div className="movie-hover-meta">
                      <span className="release">2023</span>
                      <span className="rating-hover release">
                        <i className="fas fa-star" />
                        <span className="rating-count">8.8(21)</span>
                      </span>
                      <span className="release">12/12 tập</span>
                    </div>
                    <div className="movie-hover-genres">
                      <span>hành động</span>
                      <span>Action</span>
                      <span>Adventure</span>
                    </div>
                    <p className="movie-description">
                      Đường Triều Quỷ Sự Lục 3 - Trường An là phim hành động Trung
                      Quốc được directed bởi đạo diễn Phạm Ngọc Sơn. Phim được phát
                      hành vào tháng 1 năm 2023.
                    </p>
                    <div className="movie-hover-buttons">
                      <a href="#" className="more-info-btn">
                        Xem Thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Movie Cards */}
              <div className="movie-card" id="movie-card">
                <div className="movie-content">
                  <div className="movie-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                  </div>
                  <div className="movie-info">
                    <h3 className="movies-titles">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                  </div>
                </div>
                <div className="movie-hover-wrapper">
                  <div className="movie-hover-img">
                    <img
                      src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg?w=300&c=0"
                      alt="Movie 1"
                    />
                    <div className="movie-hover-icon">
                      <i className="fas fa-play" />
                    </div>
                  </div>
                  <div className="movie-hover-info">
                    <h3 className="movie-h3">
                      Đường Triều Quỷ Sự Lục 3 - Trường An Phim Trung Quốc
                    </h3>
                    <div className="movie-hover-meta">
                      <span className="release">2023</span>
                      <span className="rating-hover release">
                        <i className="fas fa-star" />
                        <span className="rating-count">8.8(21)</span>
                      </span>
                      <span className="release">12/12 tập</span>
                    </div>
                    <div className="movie-hover-genres">
                      <span>hành động</span>
                      <span>Action</span>
                      <span>Adventure</span>
                    </div>
                    <p className="movie-description">
                      Đường Triều Quỷ Sự Lục 3 - Trường An là phim hành động Trung
                      Quốc được directed bởi đạo diễn Phạm Ngọc Sơn. Phim được phát
                      hành vào tháng 1 năm 2023.
                    </p>
                    <div className="movie-hover-buttons">
                      <a href="#" className="more-info-btn">
                        Xem Thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="slide-btn-left">
              <i className="fas fa-chevron-left" />
            </button>
            <button className="slide-btn-right">
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>


  );
};

export default Home;