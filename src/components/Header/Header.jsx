import { useEffect } from "react";
const Header = () => {
    useEffect(() => {
        // ===== HEADER SCROLL =====
        const header = document.querySelector(".header");
        window.addEventListener("scroll", () =>
          header.classList.toggle("scrolled", window.scrollY > 0) // Thêm class scrolled khi scroll xuống
        );
    }, []);
    return (
        <header>
            <div className="header">
                <div className="container-f">
                    <div className="header-container">
                        <a href="#" className="logo">
                            <i className="fas fa-film" />
                            MovieFlix
                        </a>
                        <div className="search-box" id="search-box">
                            <input
                                type="text"
                                placeholder="Tìm kiếm phim..."
                                id="search-input"
                                autoComplete="off"
                            />
                            {/* Nút xoá tìm kiếm */}
                            <span className="clear-btn" id="clear-btn">
                                <i className="fas fa-times" />
                            </span>
                            <span className="search-btn" id="search-btn">
                                <i className="fas fa-search" />
                                <i className="fa-solid fa-spinner fa-spin" />
                            </span>
                            <div className="search-results" id="search-results">
                                <div className="result-item">
                                    <span className="result-text">kết quả tìm kiếm</span>
                                    <span className="result-btn" id="delete-btn">
                                        <i className="fa-solid fa-trash" />
                                    </span>
                                </div>
                                <div className="list-result">
                                    <span className="list-text">
                                        Tình Yêu Không Thể Nói Thành Lời
                                    </span>
                                    <span className="list-btn" id="delete-list">
                                        <i className="fas fa-times" />
                                    </span>
                                </div>
                                <div className="result-item">
                                    <span className="result-text">Tìm kiếm hot nhất</span>
                                </div>
                                <div className="list-result">
                                    <span className="stt-hotnhat active">1</span>
                                    <span className="list-text">
                                        Tình Yêu Không Thể Nói Thành Lời
                                    </span>
                                </div>
                                <div className="list-result">
                                    <span className="stt-hotnhat active">2</span>
                                    <span className="list-text">Phim Hành Động Mới</span>
                                </div>
                                <div className="list-result">
                                    <span className="stt-hotnhat">3</span>
                                    <span className="list-text">Phim Tình Cảm Lãng Mạn</span>
                                </div>
                            </div>
                        </div>
                        <div className="header-actions">
                            <button>
                                <i className="fas fa-history" />
                                <span>Lịch sử xem</span>
                            </button>
                            <button>
                                <i className="fas fa-bell" />
                                <span>Thông báo</span>
                            </button>
                            <button className="login-btn">
                                <i className="fas fa-user" />
                                <span>Đăng nhập</span>
                            </button>
                        </div>
                        <button className="menu-toggle" id="menu-toggle">
                            <i className="fas fa-bars" />
                        </button>
                    </div>
                    {/* Desktop Navigation */}
                    <nav className="nav">
                        <ul className="nav-links">
                            <li>
                                <a href="#" className="active a-img">
                                    Trang chủ
                                </a>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="a-img" id="genre-btn">
                                    <span>Thể loại</span>
                                    <i className="fas fa-chevron-down" />
                                </a>
                                <div className="dropdown-content" id="dropdowncontent">
                                    <a className="" href="#">
                                        Hành động
                                    </a>
                                    <a href="#">Tình cảm</a>
                                    <a href="#">Hài hước</a>
                                    <a href="#">Kinh dị</a>
                                    <a href="#">Viễn tưởng</a>
                                    <a href="#">Hoạt hình</a>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="a-img">
                                    Phim mới
                                </a>
                            </li>
                            <li>
                                <a href="#" className="a-img">
                                    Phim bộ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="a-img">
                                    Phim lẻ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="a-img">
                                    TV Shows
                                </a>
                            </li>
                            <li>
                                <a href="#" className="a-img">
                                    Yêu thích
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className="overlay" id="overlay" />
            <nav className="nav-mobile" id="nav-mobile">
                <div className="times-btn" id="close-menu">
                    <i className="fas fa-times" />
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="#" className="active a-img">
                            Trang chủ
                        </a>
                    </li>
                    <li className="dropdown-nav">
                        <a href="#" className="a-img" id="mobile-genre-btn">
                            <span>Thể loại</span>
                            <i className="fas fa-chevron-down" />
                        </a>
                        <div className="dropdown-mobile" id="mobile-dropdowncontent">
                            <a className="" href="#">
                                Hành động
                            </a>
                            <a href="#">Tình cảm</a>
                            <a href="#">Hài hước</a>
                            <a href="#">Kinh dị</a>
                            <a href="#">Viễn tưởng</a>
                            <a href="#">Hoạt hình</a>
                        </div>
                    </li>
                    <li>
                        <a href="#" className="a-img">
                            Phim mới
                        </a>
                    </li>
                    <li>
                        <a href="#" className="a-img">
                            Phim bộ
                        </a>
                    </li>
                    <li>
                        <a href="#" className="a-img">
                            Phim lẻ
                        </a>
                    </li>
                    <li>
                        <a href="#" className="a-img">
                            TV Shows
                        </a>
                    </li>
                    <li>
                        <a href="#" className="a-img">
                            Yêu thích
                        </a>
                    </li>
                </ul>
                <div className="mobile-actions">
                    <button>
                        <i className="fas fa-history" />
                        <span>Lịch sử xem</span>
                    </button>
                    <button>
                        <i className="fas fa-bell" />
                        <span>Thông báo</span>
                    </button>
                    <button className="login-btn">
                        <i className="fas fa-user" />
                        <span>Đăng nhập</span>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;