import { useEffect } from "react";

const Loading = () => {
    useEffect(() => {
           // Ẩn loading screen sau 2 giây
            setTimeout(function() {
                document.getElementById('page-loader').classList.add('hidden');
            }, 2000);
        }, []);
    return (
        <>
            {/* <!-- Loading Screen --> */}
    <div class="page-loader" id="page-loader">
        <div class="loader-content">
            <div class="loader-logo">
                <i class="fas fa-film"></i>
            </div>
            <div class="loader-text">Đang tải MovieFlix...</div>
            <div class="loader-bar">
                <div class="loader-progress"></div>
            </div>
        </div>
    </div>
        </>
    )
};
export default Loading;
