class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        nav {
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color:  #0a0a23;
          margin-top:-370px;
          width: 1500px;
          padding: 30px 100px;
        }
        nav ul li{
            list-style: none;
            display: inline-block;
            padding: 10px 20px;
        }
        nav ul li a{
            color: #f4f4fa;
            position: relative;
            padding: 5px 0;
        }
        nav ul li a:hover{
            color: #fd4766;
        }
        nav ul li a:after{
            content: "";
            position: absolute;
            left: 0;
            width: 0;
            height: 3px;
            background: #fd4766;
            transition: .3s;
            bottom: 0;
        }
        nav ul li a:hover:after{
            width: 100%;
      
        .logo{
            max-height: 100px;
            max-width: 170px;
            margin-top: 10px;
        }
      </style>
      <header>
        <nav>
        <img src="images/1.jpg" class="logo">
          <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="product.html">Product</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact Me</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);
 // refrence-https://www.w3schools.com/
    // reference-https://www.codewithharry.com/
    //material reference-https://en.m.wikipedia.org/wiki/Category:Products_introduced_in_1990