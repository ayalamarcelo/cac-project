let img1 = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/30b04167574805.5b3e42ef3d364.jpg";
let img2 = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e601ef67574805.5b3e42ef3e2cb.jpg";
let img3 = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e8cd9b67574805.5b3e42ef3de3b.jpg";

footer.innerHTML = `<div class="footer-content">
                    <div class="footer-left">
                    <p>&copy; 2024 All rights reserved
                    </p>
                    </div>
                    <div class="footer-right">
                    <nav>
                    <ul>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">FAQ</a></li>
                    </ul>
                    </nav>
                    </div>
                    </div>`;

book1.innerHTML = `<img src="${img1}"/>`;
book2.innerHTML = `<img src="${img2}"/>`;
book3.innerHTML = `<img src="${img3}"/>`;
