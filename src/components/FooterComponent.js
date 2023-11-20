import '../style.css'
const FooterComponent= ()=>{

    return(
        <footer>
        <div className="footer-content">
          <div className="logo">
            <img src="logopawon.png" alt="Logo" />
          </div>
          <div className="social-media">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="Instagram.png" alt="Instagram" />
              <p>@Bawang_Goreng</p>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="Tiktok.png" alt="Tiktok" />
              <p>@Bawang_Goreng</p>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="Whatsapp.png" alt="Whatsapp" />
              <p>+62-823-2378-0987</p>
            </a>
          </div>
        </div>
      </footer>
    )

}
export default FooterComponent