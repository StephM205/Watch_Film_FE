

const Footer = () => {



  return (

  <footer className="footer">
    <div className="container-f">
      <div className="footer-content">
        <div className="logo-footer">
          <h3 className="footer-title">
            công Công ty Cổ phần web lậu <i className="fas fa-film" />
            MovieFlix
          </h3>
          <a href="#" className="logo">
            <i className="fas fa-film" />
            MovieFlix
          </a>
          <div className="footer-logo">
            <img
              src="https://images.fptplay53.net/media/photo/2025/08/13/dmca_1755080854752.png"
              alt=""
            />
            <img
              src="https://images.fptplay53.net/media/photo/2025/08/13/logosalenoti_1755080854748.png"
              alt=""
            />
          </div>
        </div>
        <div className="footer-column">
          <h3>Giới thiệu</h3>
          <ul>
            <li>
              <a href="#">Về chúng tôi</a>
            </li>
            <li>
              <a href="#">Thông tin liên hệ</a>
            </li>
            <li>
              <a href="#">Tuyển dụng</a>
            </li>
            <li>
              <a href="#">Quyền riêng tư</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Hỗ trợ</h3>
          <ul>
            <li>
              <a href="#">Trung tâm trợ giúp</a>
            </li>
            <li>
              <a href="#">Điều khoản sử dụng</a>
            </li>
            <li>
              <a href="#">Chính sách bảo mật</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Tài khoản</h3>
          <ul>
            <li>
              <a href="#">Tài khoản của tôi</a>
            </li>
            <li>
              <a href="#">Đăng ký thành viên</a>
            </li>
            <li>
              <a href="#">Ưu đãi đặc biệt</a>
            </li>
            <li>
              <a href="#">Phương thức thanh toán</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Liên hệ</h3>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt" /> 123 Đường ABC, Quận 1,
              TP.HCM
            </li>
            <li>
              <i className="fas fa-phone" /> +84 123 456 789
            </li>
            <li>
              <i className="fas fa-envelope" /> support@movieflix.com
            </li>
          </ul>
          <div className="social-links" >
            {/* icon mũ tên  */}
            <div className="social-item-container">
              <div className="social-item">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </div>
              <div className="social-item">
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </div>
              <div className="social-item">
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="social-item">
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
         
           <div className="icon-links" >
            <div className="icon-item-container">
              <div className="icon-item">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </div>
              <div className="icon-item">
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </div>
              <div className="icon-item">
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="icon-item">
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
             <div className="click-top">
                  <i className="fas fa-arrow-up" />
              </div>  
          </div>
        </div>
        
      </div>
      <div className="copyright">
        <p>© 2023 MovieFlix. Tất cả các quyền được bảo lưu.</p>
      </div>
    </div>
  </footer>


  );
};

export default Footer;