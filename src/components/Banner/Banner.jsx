import Slide from "./slide";
const Banner = () => {
    return (
        <section className="banner" id="banner">
            <div className="banner-slider">
                <Slide />
                <div className="slide-thumbs-dots-container">
                    <div className="slide-thumbs">
                        <div className="thumbs-img">
                            <div className="thumb active" id="thumb" data-slide={0}>
                                <img
                                    src="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg"
                                    alt="Thumb 1"
                                />
                            </div>
                            <div className="thumb" id="thumb" data-slide={1}>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Sintel_Poster_Paintover_clean.jpg/500px-Sintel_Poster_Paintover_clean.jpg?20100922143638"
                                    alt="Thumb 2"
                                />
                            </div>
                            <div className="thumb" id="thumb" data-slide={2}>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Elephants_Dream_cover.jpg/960px-Elephants_Dream_cover.jpg?20060831021346"
                                    alt="Thumb 3"
                                />
                            </div>
                            <div className="thumb" id="thumb" data-slide={3}>
                                <img
                                    src="https://m.media-amazon.com/images/I/81pVTlWygAL._AC_SX679_.jpg"
                                    alt="Thumb 4"
                                />
                            </div>
                            <div className="thumb" id="thumb" data-slide={4}>
                                <img
                                    src="https://m.media-amazon.com/images/I/51YnCQvNj1L._AC_.jpg"
                                    alt="Thumb 5"
                                />
                            </div>
                        </div>
                        <div className="thumbs-dots">
                            <span className="dot active" id="dot" data-slide={0} />
                            <span className="dot" id="dot" data-slide={1} />
                            <span className="dot" id="dot" data-slide={2} />
                            <span className="dot" id="dot" data-slide={3} />
                            <span className="dot" id="dot" data-slide={4} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
