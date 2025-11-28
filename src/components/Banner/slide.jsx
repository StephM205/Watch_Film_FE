const Slide = () => {
    return (
        <>
            {/* Slide 1 */}
            <div className="slide">
                <div className="slide-img-video">
                    <img
                        id="slide-image "
                        src="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg"
                        alt="Movie One"
                        className="slide-background"
                    />
                    {/* video demo */}
                    <video
                        muted=""
                        loop=""
                        width={640}
                        className="slide-background"
                        id="slide-video"
                    >
                        <source
                            src="https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className="slider-container">
                    <div className="container-f">
                        <div className="slide-overlay">
                            <div className="slide-info">
                                <div className="slide-content">
                                    <h2 className="slide-title">Big Buck Bunny</h2>
                                    <div className="slide-meta">
                                        <span className="meta-item">2024</span>
                                        <span className="meta-item">|</span>
                                        <span className="meta-item">Hoạt hình</span>
                                        <span className="meta-item">|</span>
                                        <span className="meta-item">7.8 điểm</span>
                                    </div>
                                    <div className="slide-meta">
                                        <span className="meta-item">Hành động</span>
                                        <span className="meta-item">|</span>
                                        <span className="meta-item">Phiêu lưu</span>
                                        <span className="meta-item">|</span>
                                        <span className="meta-item">Hài hước</span>
                                    </div>
                                    <div className="slide-details">
                                        <span className="age-rating">18+</span>
                                        <span className="resolution">FULL HD</span>
                                        <div className="rating">
                                            <i
                                                className="fa-solid fa-star"
                                                style={{ color: "#FFD700" }}
                                            />
                                            <span>7.8</span>
                                        </div>
                                        <span className="release-year">2024</span>
                                        <span className="episode-count">Trọn bộ 12 tập</span>
                                    </div>
                                    <div className="group-btn">
                                        <button className="more-btn">
                                            <i className="fas fa-caret-down" />
                                        </button>
                                        <div className="description-dong" id="description-dong">
                                            <p className="slide-description ">
                                                Câu chuyện kể về một chú thỏ lớn tên là Big Buck Bunny,
                                                người sống hạnh phúc trong một khu rừng yên bình cho đến
                                                khi bị ba con chuột tinh nghịch quấy rối. Với sự giúp đỡ
                                                của những người bạn mới, Big Buck Bunny quyết định đứng
                                                lên chống lại những kẻ bắt nạt và mang lại công lý cho khu
                                                rừng.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="slide-actions">
                                        <button className="action-btns">
                                            <i className="far fa-heart" />
                                        </button>
                                        <button className="action-btns">
                                            <i className="fas fa-share-alt" />
                                        </button>
                                        <button className="action-btns volume">
                                            <i className="fas fa-volume-up" />
                                        </button>
                                    </div>
                                    <div className="slide-buttons">
                                        <button className="watch-now">
                                            <i className="fas fa-play" />
                                            Xem ngay
                                        </button>
                                        <button className="more-info">
                                            <i className="fas fa-info-circle" />
                                            Xem thêm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slide 2 */}
            <div className="slide">
                <div className="slide-img-video">
                    <img
                        id="slide-image"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Sintel_Poster_Paintover_clean.jpg/500px-Sintel_Poster_Paintover_clean.jpg?20100922143638"
                        alt="Movie Two"
                        className="slide-background"
                    />
                    <video
                        muted=""
                        loop=""
                        width={640}
                        id="slide-video"
                        className="slide-background"
                    >
                        <source
                            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className="slider-container">
                    <div className="container-f">
                        <div className="slide-overlay">
                            <div className="slide-info">
                                <div className="slide-content">
                                    <h2 className="slide-title">The Last Adventure</h2>
                                    <div className="slide-meta">
                                        <span className="meta-item">2023</span>
                                        <span className="meta-item">|</span>
                                        <span className="meta-item">Hành động</span>
                                        <span className="meta-item">|</span>
                                        <span className="meta-item">8.2 điểm</span>
                                    </div>
                                    <div className="slide-meta">
                                        <span className="meta-item">Phiêu lưu</span>
                                        <span className="meta-item">|</span>
                                        <span className="meta-item">Khoa học viễn tưởng</span>
                                        <span className="meta-item">|</span>
                                        <span className="meta-item">Kịch tính</span>
                                    </div>
                                    <div className="slide-details">
                                        <span className="age-rating">16+</span>
                                        <span className="resolution">4K UHD</span>
                                        <div className="rating">
                                            <i
                                                className="fa-solid fa-star"
                                                style={{ color: "#FFD700" }}
                                            />
                                            <span>8.2</span>
                                        </div>
                                        <span className="release-year">2023</span>
                                        <span className="episode-count">Phim lẻ</span>
                                    </div>
                                    <div className=" group-btn">
                                        <button className="more-btn">
                                            <i className="fas fa-caret-down" />
                                        </button>
                                        <div className="description-dong" id="description-dong">
                                            <p className="slide-description ">
                                                Một nhóm nhà thám hiểm không gian khám phá một hành tinh
                                                mới với những bí ẩn cổ xưa và công nghệ tiên tiến. Họ phải
                                                đối mặt với những thử thách sinh tồn và khám phá sự thật
                                                về nguồn gốc của nhân loại.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="slide-actions">
                                        <button className="action-btns">
                                            <i className="far fa-heart" />
                                        </button>
                                        <button className="action-btns">
                                            <i className="fas fa-share-alt" />
                                        </button>
                                        <button className="action-btnss volume">
                                            <i className="fas fa-volume-up" />
                                        </button>
                                    </div>
                                    <div className="slide-buttons">
                                        <button className="watch-now">
                                            <i className="fas fa-play" />
                                            Xem ngay
                                        </button>
                                        <button className="more-info">
                                            <i className="fas fa-info-circle" />
                                            Xem thêm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slide 3 */}
            <div className="slide">
                <div className="slide-img-video">
                    <img
                        id="slide-image"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Elephants_Dream_cover.jpg/960px-Elephants_Dream_cover.jpg?20060831021346"
                        alt="Movie Three"
                        className="slide-background"
                    />
                    <video muted="" loop="" width={640} className="slide-background">
                        <source
                            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className="slider-container">
                    <div className="container-f">
                        <div className="slide-overlay">
                            <div className="slide-info">
                                <div className="slide-content">
                                    <h2 className="slide-title">Midnight Romance</h2>
                                    <div className="slide-meta">
                                        <span className="meta-item">2024</span>
                                        <span className="meta-item">|</span>
                                        <span className="meta-item">Tình cảm</span>
                                        <span className="meta-item">|</span>
                                        <span className="meta-item">8.5 điểm</span>
                                    </div>
                                    <div className="slide-meta">
                                        <span className="meta-item">Lãng mạn</span>
                                        <span className="meta-item">|</span>
                                        <span className="meta-item">Chính kịch</span>
                                        <span className="meta-item">|</span>
                                        <span className="meta-item">Âm nhạc</span>
                                    </div>
                                    <div className="slide-details">
                                        <span className="age-rating">13+</span>
                                        <span className="resolution">FULL HD</span>
                                        <div className="rating">
                                            <i
                                                className="fa-solid fa-star"
                                                style={{ color: "#FFD700" }}
                                            />
                                            <span>8.5</span>
                                        </div>
                                        <span className="release-year">2024</span>
                                        <span className="episode-count">8 tập</span>
                                    </div>
                                    <div className="group-btn">
                                        <button className="more-btn">
                                            <i className="fas fa-caret-down" />
                                        </button>
                                        <div className="description-dong" id="description-dong">
                                            <p className="slide-description ">
                                                Một câu chuyện tình yêu đẹp giữa một nhạc sĩ tài năng và
                                                một vũ công ballet trong bối cảnh thành phố Paris lãng
                                                mạn. Họ cùng nhau vượt qua những rào cản xã hội và theo
                                                đuổi đam mê nghệ thuật của mình.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="slide-actions">
                                        <button className="action-btns">
                                            <i className="far fa-heart" />
                                        </button>
                                        <button className="action-btns">
                                            <i className="fas fa-share-alt" />
                                        </button>
                                        <button className="action-btns volume">
                                            <i className="fas fa-volume-up" />
                                        </button>
                                    </div>
                                    <div className="slide-buttons">
                                        <button className="watch-now">
                                            <i className="fas fa-play" />
                                            Xem ngay
                                        </button>
                                        <button className="more-info">
                                            <i className="fas fa-info-circle" />
                                            Xem thêm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slide 4 */}
            <div className="slide">
                <div className="slide-img-video">
                    <img
                        id="slide-image"
                        src="https://m.media-amazon.com/images/I/81pVTlWygAL._AC_SX679_.jpg"
                        alt="Movie Four"
                        className="slide-background"
                    />
                    <video
                        muted=""
                        loop=""
                        width={640}
                        className="slide-background"
                        id="video-slide-4"
                    >
                        <source
                            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className="slider-container">
                    <div className="container-f">
                        <div className="slide-overlay">
                            <div className="slide-info">
                                <div className="slide-content">
                                    <h2 className="slide-title">Shadow Hunter</h2>
                                    <div className="slide-meta">
                                        <span className="meta-item">2023</span>
                                        <span className="meta-item">|</span>
                                        <span className="meta-item">Hành động</span>
                                        <span className="meta-item">|</span>
                                        <span className="meta-item">7.9 điểm</span>
                                    </div>
                                    <div className="slide-meta">
                                        <span className="meta-item">Giật gân</span>
                                        <span className="meta-item">|</span>
                                        <span className="meta-item">Bí ẩn</span>
                                        <span className="meta-item">|</span>
                                        <span className="meta-item">Kinh dị</span>
                                    </div>
                                    <div className="slide-details">
                                        <span className="age-rating">18+</span>
                                        <span className="resolution">FULL HD</span>
                                        <div className="rating">
                                            <i
                                                className="fa-solid fa-star"
                                                style={{ color: "#FFD700" }}
                                            />
                                            <span>7.9</span>
                                        </div>
                                        <span className="release-year">2023</span>
                                        <span className="episode-count">10 tập</span>
                                    </div>
                                    <div className="group-btn">
                                        <button className="more-btn">
                                            <i className="fas fa-caret-down" />
                                        </button>
                                        <div className="description-dong" id="description-dong">
                                            <p className="slide-description ">
                                                Một thợ săn tiền thưởng với quá khứ đen tối phải đối mặt
                                                với một tổ chức bí mật đang thao túng thế giới ngầm. Anh
                                                ta phải sử dụng mọi kỹ năng để sống sót và bảo vệ những
                                                người vô tội.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="slide-actions">
                                        <button className="action-btns">
                                            <i className="far fa-heart" />
                                        </button>
                                        <button className="action-btns">
                                            <i className="fas fa-share-alt" />
                                        </button>
                                        <button className="action-btns volume">
                                            <i className="fas fa-volume-up" />
                                        </button>
                                    </div>
                                    <div className="slide-buttons">
                                        <button className="watch-now">
                                            <i className="fas fa-play" />
                                            Xem ngay
                                        </button>
                                        <button className="more-info">
                                            <i className="fas fa-info-circle" />
                                            Xem thêm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slide 5 */}
            <div className="slide">
                <div className="slide-img-video">
                    <img
                        id="slide-image"
                        src="https://m.media-amazon.com/images/I/51YnCQvNj1L._AC_.jpg"
                        alt="Movie Five"
                        className="slide-background"
                    />
                    <video muted="" loop="" width={640} className="slide-background">
                        <source
                            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscape.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className="slider-container">
                    <div className="container-f">
                        <div className="slide-overlay">
                            <div className="slide-info">
                                <div className="slide-content">
                                    <h2 className="slide-title">Ocean Dreams</h2>
                                    <div className="slide-meta">
                                        <span className="meta-item">2024</span>
                                        <span className="meta-item">|</span>
                                        <span className="meta-item">Tài liệu</span>
                                        <span className="meta-item">|</span>
                                        <span className="meta-item">9.1 điểm</span>
                                    </div>
                                    <div className="slide-meta">
                                        <span className="meta-item">Thiên nhiên</span>
                                        <span className="meta-item">|</span>
                                        <span className="meta-item">Giáo dục</span>
                                        <span className="meta-item">|</span>
                                        <span className="meta-item">Phiêu lưu</span>
                                    </div>
                                    <div className="slide-details">
                                        <span className="age-rating">Mọi lứa tuổi</span>
                                        <span className="resolution">4K UHD</span>
                                        <div className="rating">
                                            <i
                                                className="fa-solid fa-star"
                                                style={{ color: "#FFD700" }}
                                            />
                                            <span>9.1</span>
                                        </div>
                                        <span className="release-year">2024</span>
                                        <span className="episode-count">Phim lẻ</span>
                                    </div>
                                    <div className="group-btn">
                                        <button className="more-btn">
                                            <i className="fas fa-caret-down" />
                                        </button>
                                        <div className="description-dong" id="description-dong">
                                            <p className="slide-description ">
                                                Khám phá vẻ đẹp huyền bí của đại dương qua ống kính của
                                                các nhà làm phim tài liệu hàng đầu. Từ những rạn san hô
                                                rực rỡ đến những sinh vật biển sâu kỳ lạ, bộ phim mang đến
                                                cái nhìn chân thực về thế giới dưới nước.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="slide-actions">
                                        <button className="action-btns">
                                            <i className="far fa-heart" />
                                        </button>
                                        <button className="action-btns">
                                            <i className="fas fa-share-alt" />
                                        </button>
                                        <button className="action-btns volume">
                                            <i className="fas fa-volume-up" />
                                        </button>
                                    </div>
                                    <div className="slide-buttons">
                                        <button className="watch-now">
                                            <i className="fas fa-play" />
                                            Xem ngay
                                        </button>
                                        <button className="more-info">
                                            <i className="fas fa-info-circle" />
                                            Xem thêm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};
export default Slide;
