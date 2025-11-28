import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Categoryjs from '../../assets/js/user/Category';
import Loading from '../../components/loading/loading';

const Category = () => {
    Categoryjs();
    return (
        <>
            <Loading />
            <Header />
             <section className="category-breadcrumb">
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
            {/* Category Header */}
            <section className="category-header">
                <div className="container-f">
                    <div className="category-info">
                        <h1 className="category-title">Phim Hành Động</h1>
                        <p className="category-description">
                            Khám phá những bộ phim hành động gay cấn, đầy kịch tính với những pha
                            đánh đấm mãn nhãn và các cảnh quay ngoạn mục.
                        </p>
                        <div className="category-stats">
                            <div className="stat-item">
                                <span className="stat-number">1,245</span>
                                <span className="stat-label">Phim</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">8.2</span>
                                <span className="stat-label">Điểm trung bình</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">2024</span>
                                <span className="stat-label">Năm mới nhất</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Filter and Sort Section */}
            <section className="category-filter-section">
                <div className="container-f">
                    <div className="filter-container">
                        {/* Filter Toggle for Mobile */}
                        <div className="filter-toggle">
                            <button className="filter-toggle-btn" id="filter-toggle">
                                <i className="fas fa-filter" />
                                Bộ lọc
                                <span className="filter-count">3</span>
                            </button>
                        </div>
                        {/* Sort Options */}
                        <div className="sort-options">
                            <div className="sort-group">
                                <label>Sắp xếp theo:</label>
                                <select className="sort-select" id="sort-select">
                                    <option value="popular">Phổ biến nhất</option>
                                    <option value="newest">Mới nhất</option>
                                    <option value="rating">Điểm cao nhất</option>
                                    <option value="year">Năm sản xuất</option>
                                    <option value="name">Tên A-Z</option>
                                </select>
                            </div>
                          
                        </div>
                        {/* Active Filters */}
                        <div className="active-filters">
                            <span className="active-filters-label">Bộ lọc đang áp dụng:</span>
                            <div className="filter-tags">
                                <div className="filter-tag">
                                    <span>Hành động</span>
                                    <button className="remove-filter">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                                <div className="filter-tag">
                                    <span>2020-2024</span>
                                    <button className="remove-filter">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                                <div className="filter-tag">
                                    <span>Trung Quốc</span>
                                    <button className="remove-filter">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                                <button className="clear-all-filters">Xóa tất cả</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Main Content */}
            <main className="category-main">
                <div className="container-f">
                    <div className="category-layout">
                        {/* Filters Sidebar */}
                        <aside className="filters-sidebar" id="filters-sidebar">
                            <div className="filters-header">
                                <h3>Bộ lọc</h3>
                                <button className="close-filters" id="close-filters">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                            {/* Genre Filter */}
                            <div className="filter-group">
                                <div className="filter-header">
                                    <h4>Thể loại</h4>
                                    <button className="toggle-filter">
                                        <i className="fas fa-chevron-down" />
                                    </button>
                                </div>
                                <div className="filter-content">
                                    <div className="filter-option">
                                        <input type="checkbox" id="action" defaultChecked="" />
                                        <label htmlFor="action">Hành động</label>
                                        <span className="option-count">(324)</span>
                                    </div>
                                    <div className="filter-option">
                                        <input type="checkbox" id="adventure" />
                                        <label htmlFor="adventure">Phiêu lưu</label>
                                        <span className="option-count">(156)</span>
                                    </div>
                                    <div className="filter-option">
                                        <input type="checkbox" id="scifi" />
                                        <label htmlFor="scifi">Khoa học viễn tưởng</label>
                                        <span className="option-count">(89)</span>
                                    </div>
                                    <div className="filter-option">
                                        <input type="checkbox" id="fantasy" />
                                        <label htmlFor="fantasy">Fantasy</label>
                                        <span className="option-count">(67)</span>
                                    </div>
                                    <div className="filter-option">
                                        <input type="checkbox" id="thriller" />
                                        <label htmlFor="thriller">Giật gân</label>
                                        <span className="option-count">(143)</span>
                                    </div>
                                </div>
                            </div>
                            {/* Year Filter */}
                            <div className="filter-group">
                                <div className="filter-header">
                                    <h4>Năm sản xuất</h4>
                                    <button className="toggle-filter">
                                        <i className="fas fa-chevron-down" />
                                    </button>
                                </div>
                                <div className="filter-content">
                                    <div className="year-range">
                                        <div className="range-inputs">
                                            <div className="number-wrap">
                                                <input type="number" id="year-from" min="1990" max="2024" defaultValue="2020" />
                                                <div className="spinner">
                                                    <div className="up">▲</div>
                                                    <div className="down">▼</div>
                                                </div>
                                            </div>
                                            <span>đến</span>
                                            <div className="number-wrap">
                                                <input type="number" id="year-to" min="1990" max="2024" defaultValue="2024" />
                                                <div className="spinner">
                                                    <div className="up">▲</div>
                                                    <div className="down">▼</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="year-presets">
                                        <button className="year-preset" data-years="2023-2024">
                                            2023-2024
                                        </button>
                                        <button className="year-preset" data-years="2020-2022">
                                            2020-2022
                                        </button>
                                        <button className="year-preset" data-years="2015-2019">
                                            2015-2019
                                        </button>
                                        <button className="year-preset" data-years="2010-2014">
                                            2010-2014
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Country Filter */}
                            <div className="filter-group">
                                <div className="filter-header">
                                    <h4>Quốc gia</h4>
                                    <button className="toggle-filter">
                                        <i className="fas fa-chevron-down" />
                                    </button>
                                </div>
                                <div className="filter-content">
                                    <div className="filter-option">
                                        <input type="checkbox" id="china" defaultChecked="" />
                                        <label htmlFor="china">Trung Quốc</label>
                                        <span className="option-count">(245)</span>
                                    </div>
                                    <div className="filter-option">
                                        <input type="checkbox" id="korea" />
                                        <label htmlFor="korea">Hàn Quốc</label>
                                        <span className="option-count">(189)</span>
                                    </div>
                                    <div className="filter-option">
                                        <input type="checkbox" id="usa" />
                                        <label htmlFor="usa">Mỹ</label>
                                        <span className="option-count">(167)</span>
                                    </div>
                                    <div className="filter-option">
                                        <input type="checkbox" id="vietnam" />
                                        <label htmlFor="vietnam">Việt Nam</label>
                                        <span className="option-count">(56)</span>
                                    </div>
                                    <div className="filter-option">
                                        <input type="checkbox" id="thailand" />
                                        <label htmlFor="thailand">Thái Lan</label>
                                        <span className="option-count">(34)</span>
                                    </div>
                                </div>
                            </div>
                            {/* Rating Filter */}
                            <div className="filter-group">
                                <div className="filter-header">
                                    <h4>Đánh giá</h4>
                                    <button className="toggle-filter">
                                        <i className="fas fa-chevron-down" />
                                    </button>
                                </div>
                                <div className="filter-content">
                                    <div className="rating-filter">
                                        <div className="rating-options">
                                            <div className="rating-option">
                                                <input
                                                    type="radio"
                                                    id="rating-all"
                                                    name="rating"
                                                    defaultChecked=""
                                                />
                                                <label htmlFor="rating-all">Tất cả</label>
                                            </div>
                                            <div className="rating-option">
                                                <input type="radio" id="rating-9" name="rating" />
                                                <label htmlFor="rating-9">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    9.0+
                                                </label>
                                            </div>
                                            <div className="rating-option">
                                                <input type="radio" id="rating-8" name="rating" />
                                                <label htmlFor="rating-8">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star-half-alt" />
                                                    8.0+
                                                </label>
                                            </div>
                                            <div className="rating-option">
                                                <input type="radio" id="rating-7" name="rating" />
                                                <label htmlFor="rating-7">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="far fa-star" />
                                                    7.0+
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Status Filter */}
                            <div className="filter-group">
                                <div className="filter-header">
                                    <h4>Trạng thái</h4>
                                    <button className="toggle-filter">
                                        <i className="fas fa-chevron-down" />
                                    </button>
                                </div>
                                <div className="filter-content">
                                    <div className="filter-option">
                                        <input type="checkbox" id="completed" defaultChecked="" />
                                        <label htmlFor="completed">Đã hoàn thành</label>
                                        <span className="option-count">(456)</span>
                                    </div>
                                    <div className="filter-option">
                                        <input type="checkbox" id="ongoing" />
                                        <label htmlFor="ongoing">Đang phát hành</label>
                                        <span className="option-count">(78)</span>
                                    </div>
                                    <div className="filter-option">
                                        <input type="checkbox" id="upcoming" />
                                        <label htmlFor="upcoming">Sắp chiếu</label>
                                        <span className="option-count">(23)</span>
                                    </div>
                                </div>
                            </div>
                            {/* Filter Actions */}
                            <div className="filter-actions">
                                <button className="apply-filters">Áp dụng bộ lọc</button>
                                <button className="reset-filters">Đặt lại</button>
                            </div>
                        </aside>
                        {/* Films Grid */}
                        <div className="films-container">
                            <section className="film-grid-section">
                                <div className="film-grid">
                                    {/* Film Cards */}
                                    <div className="film-card">
                                        <div className="film-content">
                                            <div className="film-img">
                                                <img
                                                    src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg"
                                                    alt="Đường Triều Quỷ Sự Lục 3"
                                                />
                                            </div>
                                            <div className="film-info">
                                                <h3 className="films-title">
                                                    Đường Triều Quỷ Sự Lục 3 - Trường An
                                                </h3>
                                                <div className="film-meta">
                                                    <span className="film-year">2023</span>
                                                    <span className="film-rating">
                                                        <i className="fas fa-star" />
                                                        8.8
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="film-hover-wrapper">
                                            <div className="film-hover-img">
                                                <img
                                                    src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg"
                                                    alt="Đường Triều Quỷ Sự Lục 3"
                                                />
                                                <div className="film-hover-icon">
                                                    <i className="fas fa-play" />
                                                </div>
                                            </div>
                                            <div className="film-hover-info">
                                                <h3 className="film-h3">
                                                    Đường Triều Quỷ Sự Lục 3 - Trường An
                                                </h3>
                                                <div className="film-hover-meta">
                                                    <span className="release">2023</span>
                                                    <span className="rating-hover release">
                                                        <i className="fas fa-star" />
                                                        <span className="rating-count">8.8(21)</span>
                                                    </span>
                                                    <span className="release">12/12 tập</span>
                                                </div>
                                                <div className="film-hover-genres">
                                                    <span>hành động</span>
                                                    <span>cổ trang</span>
                                                    <span>phiêu lưu</span>
                                                </div>
                                                <p className="film-description">
                                                    Cuộc phiêu lưu điều tra những vụ án kỳ bí liên quan đến ma
                                                    quỷ và thế lực hắc ám tại kinh đô Trường An thời nhà
                                                    Đường.
                                                </p>
                                                <div className="film-hover-buttons">
                                                    <a href="/detail" className="more-info-btn">
                                                        Xem ngay
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Film Cards */}
                                    <div className="film-card">
                                        <div className="film-content">
                                            <div className="film-img">
                                                <img
                                                    src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg"
                                                    alt="Đường Triều Quỷ Sự Lục 3"
                                                />
                                            </div>
                                            <div className="film-info">
                                                <h3 className="films-title">
                                                    Đường Triều Quỷ Sự Lục 3 - Trường An
                                                </h3>
                                                <div className="film-meta">
                                                    <span className="film-year">2023</span>
                                                    <span className="film-rating">
                                                        <i className="fas fa-star" />
                                                        8.8
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="film-hover-wrapper">
                                            <div className="film-hover-img">
                                                <img
                                                    src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg"
                                                    alt="Đường Triều Quỷ Sự Lục 3"
                                                />
                                                <div className="film-hover-icon">
                                                    <i className="fas fa-play" />
                                                </div>
                                            </div>
                                            <div className="film-hover-info">
                                                <h3 className="film-h3">
                                                    Đường Triều Quỷ Sự Lục 3 - Trường An
                                                </h3>
                                                <div className="film-hover-meta">
                                                    <span className="release">2023</span>
                                                    <span className="rating-hover release">
                                                        <i className="fas fa-star" />
                                                        <span className="rating-count">8.8(21)</span>
                                                    </span>
                                                    <span className="release">12/12 tập</span>
                                                </div>
                                                <div className="film-hover-genres">
                                                    <span>hành động</span>
                                                    <span>cổ trang</span>
                                                    <span>phiêu lưu</span>
                                                </div>
                                                <p className="film-description">
                                                    Cuộc phiêu lưu điều tra những vụ án kỳ bí liên quan đến ma
                                                    quỷ và thế lực hắc ám tại kinh đô Trường An thời nhà
                                                    Đường.
                                                </p>
                                                <div className="film-hover-buttons">
                                                    <a href="/detail" className="more-info-btn">
                                                        Xem ngay
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Film Cards */}
                                    <div className="film-card">
                                        <div className="film-content">
                                            <div className="film-img">
                                                <img
                                                    src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg"
                                                    alt="Đường Triều Quỷ Sự Lục 3"
                                                />
                                            </div>
                                            <div className="film-info">
                                                <h3 className="films-title">
                                                    Đường Triều Quỷ Sự Lục 3 - Trường An
                                                </h3>
                                                <div className="film-meta">
                                                    <span className="film-year">2023</span>
                                                    <span className="film-rating">
                                                        <i className="fas fa-star" />
                                                        8.8
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="film-hover-wrapper">
                                            <div className="film-hover-img">
                                                <img
                                                    src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg"
                                                    alt="Đường Triều Quỷ Sự Lục 3"
                                                />
                                                <div className="film-hover-icon">
                                                    <i className="fas fa-play" />
                                                </div>
                                            </div>
                                            <div className="film-hover-info">
                                                <h3 className="film-h3">
                                                    Đường Triều Quỷ Sự Lục 3 - Trường An
                                                </h3>
                                                <div className="film-hover-meta">
                                                    <span className="release">2023</span>
                                                    <span className="rating-hover release">
                                                        <i className="fas fa-star" />
                                                        <span className="rating-count">8.8(21)</span>
                                                    </span>
                                                    <span className="release">12/12 tập</span>
                                                </div>
                                                <div className="film-hover-genres">
                                                    <span>hành động</span>
                                                    <span>cổ trang</span>
                                                    <span>phiêu lưu</span>
                                                </div>
                                                <p className="film-description">
                                                    Cuộc phiêu lưu điều tra những vụ án kỳ bí liên quan đến ma
                                                    quỷ và thế lực hắc ám tại kinh đô Trường An thời nhà
                                                    Đường.
                                                </p>
                                                <div className="film-hover-buttons">
                                                    <a href="/detail" className="more-info-btn">
                                                        Xem ngay
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Film Cards */}
                                    <div className="film-card">
                                        <div className="film-content">
                                            <div className="film-img">
                                                <img
                                                    src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg"
                                                    alt="Đường Triều Quỷ Sự Lục 3"
                                                />
                                            </div>
                                            <div className="film-info">
                                                <h3 className="films-title">
                                                    Đường Triều Quỷ Sự Lục 3 - Trường An
                                                </h3>
                                                <div className="film-meta">
                                                    <span className="film-year">2023</span>
                                                    <span className="film-rating">
                                                        <i className="fas fa-star" />
                                                        8.8
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="film-hover-wrapper">
                                            <div className="film-hover-img">
                                                <img
                                                    src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg"
                                                    alt="Đường Triều Quỷ Sự Lục 3"
                                                />
                                                <div className="film-hover-icon">
                                                    <i className="fas fa-play" />
                                                </div>
                                            </div>
                                            <div className="film-hover-info">
                                                <h3 className="film-h3">
                                                    Đường Triều Quỷ Sự Lục 3 - Trường An
                                                </h3>
                                                <div className="film-hover-meta">
                                                    <span className="release">2023</span>
                                                    <span className="rating-hover release">
                                                        <i className="fas fa-star" />
                                                        <span className="rating-count">8.8(21)</span>
                                                    </span>
                                                    <span className="release">12/12 tập</span>
                                                </div>
                                                <div className="film-hover-genres">
                                                    <span>hành động</span>
                                                    <span>cổ trang</span>
                                                    <span>phiêu lưu</span>
                                                </div>
                                                <p className="film-description">
                                                    Cuộc phiêu lưu điều tra những vụ án kỳ bí liên quan đến ma
                                                    quỷ và thế lực hắc ám tại kinh đô Trường An thời nhà
                                                    Đường.
                                                </p>
                                                <div className="film-hover-buttons">
                                                    <a href="/detail" className="more-info-btn">
                                                        Xem ngay
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Film Cards */}
                                    <div className="film-card">
                                        <div className="film-content">
                                            <div className="film-img">
                                                <img
                                                    src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg"
                                                    alt="Đường Triều Quỷ Sự Lục 3"
                                                />
                                            </div>
                                            <div className="film-info">
                                                <h3 className="films-title">
                                                    Đường Triều Quỷ Sự Lục 3 - Trường An
                                                </h3>
                                                <div className="film-meta">
                                                    <span className="film-year">2023</span>
                                                    <span className="film-rating">
                                                        <i className="fas fa-star" />
                                                        8.8
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="film-hover-wrapper">
                                            <div className="film-hover-img">
                                                <img
                                                    src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg"
                                                    alt="Đường Triều Quỷ Sự Lục 3"
                                                />
                                                <div className="film-hover-icon">
                                                    <i className="fas fa-play" />
                                                </div>
                                            </div>
                                            <div className="film-hover-info">
                                                <h3 className="film-h3">
                                                    Đường Triều Quỷ Sự Lục 3 - Trường An
                                                </h3>
                                                <div className="film-hover-meta">
                                                    <span className="release">2023</span>
                                                    <span className="rating-hover release">
                                                        <i className="fas fa-star" />
                                                        <span className="rating-count">8.8(21)</span>
                                                    </span>
                                                    <span className="release">12/12 tập</span>
                                                </div>
                                                <div className="film-hover-genres">
                                                    <span>hành động</span>
                                                    <span>cổ trang</span>
                                                    <span>phiêu lưu</span>
                                                </div>
                                                <p className="film-description">
                                                    Cuộc phiêu lưu điều tra những vụ án kỳ bí liên quan đến ma
                                                    quỷ và thế lực hắc ám tại kinh đô Trường An thời nhà
                                                    Đường.
                                                </p>
                                                <div className="film-hover-buttons">
                                                    <a href="/detail" className="more-info-btn">
                                                        Xem ngay
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Film Cards */}
                                    <div className="film-card">
                                        <div className="film-content">
                                            <div className="film-img">
                                                <img
                                                    src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg"
                                                    alt="Đường Triều Quỷ Sự Lục 3"
                                                />
                                            </div>
                                            <div className="film-info">
                                                <h3 className="films-title">
                                                    Đường Triều Quỷ Sự Lục 3 - Trường An
                                                </h3>
                                                <div className="film-meta">
                                                    <span className="film-year">2023</span>
                                                    <span className="film-rating">
                                                        <i className="fas fa-star" />
                                                        8.8
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="film-hover-wrapper">
                                            <div className="film-hover-img">
                                                <img
                                                    src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg"
                                                    alt="Đường Triều Quỷ Sự Lục 3"
                                                />
                                                <div className="film-hover-icon">
                                                    <i className="fas fa-play" />
                                                </div>
                                            </div>
                                            <div className="film-hover-info">
                                                <h3 className="film-h3">
                                                    Đường Triều Quỷ Sự Lục 3 - Trường An
                                                </h3>
                                                <div className="film-hover-meta">
                                                    <span className="release">2023</span>
                                                    <span className="rating-hover release">
                                                        <i className="fas fa-star" />
                                                        <span className="rating-count">8.8(21)</span>
                                                    </span>
                                                    <span className="release">12/12 tập</span>
                                                </div>
                                                <div className="film-hover-genres">
                                                    <span>hành động</span>
                                                    <span>cổ trang</span>
                                                    <span>phiêu lưu</span>
                                                </div>
                                                <p className="film-description">
                                                    Cuộc phiêu lưu điều tra những vụ án kỳ bí liên quan đến ma
                                                    quỷ và thế lực hắc ám tại kinh đô Trường An thời nhà
                                                    Đường.
                                                </p>
                                                <div className="film-hover-buttons">
                                                    <a href="/detail" className="more-info-btn">
                                                        Xem ngay
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Film Cards */}
                                    <div className="film-card">
                                        <div className="film-content">
                                            <div className="film-img">
                                                <img
                                                    src="https://images.fptplay53.net/media/OTT/VOD/2025/01/08/me-ke-fpt-play-1736304516620_Portrait_origin.jpg"
                                                    alt="Đường Triều Quỷ Sự Lục 3"
                                                />
                                            </div>
                                            <div className="film-info">
                                                <h3 className="films-title">
                                                    Đường Triều Quỷ Sự Lục 3 - Trường An
                                                </h3>
                                                <div className="film-meta">
                                                    <span className="film-year">2023</span>
                                                    <span className="film-rating">
                                                        <i className="fas fa-star" />
                                                        8.8
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="film-hover-wrapper">
                                            <div className="film-hover-img">
                                                <img
                                                    src="https://images.fptplay53.net/media/OTT/VOD/2025/10/27/song-trang-hoan-menh-fpt-play-1761556279485_Portrait_origin.jpg"
                                                    alt="Đường Triều Quỷ Sự Lục 3"
                                                />
                                                <div className="film-hover-icon">
                                                    <i className="fas fa-play" />
                                                </div>
                                            </div>
                                            <div className="film-hover-info">
                                                <h3 className="film-h3">
                                                    Đường Triều Quỷ Sự Lục 3 - Trường An
                                                </h3>
                                                <div className="film-hover-meta">
                                                    <span className="release">2023</span>
                                                    <span className="rating-hover release">
                                                        <i className="fas fa-star" />
                                                        <span className="rating-count">8.8(21)</span>
                                                    </span>
                                                    <span className="release">12/12 tập</span>
                                                </div>
                                                <div className="film-hover-genres">
                                                    <span>hành động</span>
                                                    <span>cổ trang</span>
                                                    <span>phiêu lưu</span>
                                                </div>
                                                <p className="film-description">
                                                    Cuộc phiêu lưu điều tra những vụ án kỳ bí liên quan đến ma
                                                    quỷ và thế lực hắc ám tại kinh đô Trường An thời nhà
                                                    Đường.
                                                </p>
                                                <div className="film-hover-buttons">
                                                    <a href="/detail" className="more-info-btn">
                                                        Xem ngay
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Load More */}
                            <div className="load-more-section">
                                <div className="pagination">
                                    <button className="page-btn next-btn">
                                        <i className="fas fa-chevron-left" />
                                    </button>
                                    <button className="page-btn active">1</button>
                                    <button className="page-btn">2</button>
                                    <button className="page-btn">3</button>
                                    <button className="page-btn">4</button>
                                    <button className="page-btn next-btn">
                                        <i className="fas fa-chevron-right" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
};
export default Category;