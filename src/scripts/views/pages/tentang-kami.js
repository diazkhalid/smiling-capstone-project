const TentangKami = {
  async render() {
    console.log('render');
    return `
      <div class="container-fluid jumbotron2 pb-4">
        <div class="container ">
          <h2 class="text-center">Tentang</h2>
          <div class="clearfix pt-4">
            <img
              src="story-img.jpg"
              class="col-md-5 img-fluid rounded mx-auto d-block"
              width="100%"
              height="100%"
            />
            <p class="my-3 text-center">
              Smiling Merupakan sebuah aplikasi cerita yang dibuat oleh 4 orang peserta dicoding cycle 4 yang betujuan agar anak-anak dan orang tua bisa membangun hubungan yang lebih baik dan harmonis, agar hubungan orang tua dan anak tidak menjadi longgar dikarenakan pada saat ini anak-anak lebih asik sendiri dengan kesibukannya sendiri ketimbang orang tuanya.
            </p>
          </div>
        </div>
      </div>
      <section class="py-5 navbar-color">
        <div class="container-lg py-4">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <p class=" fs-5"> Apakah kamu memiliki projek lain</p>
                    <h2 class="fs-1 mb-4"> Saya bersedia Membantu mu</h2>
                    <a href="" class="btn btn-outline-danger">Hire Me</a>
                </div>
            </div>
        </div>
      </section>
      <div class="container-fluid pt-5 pb-5 ">
          <div class="container-sm text-center">
              <h2 class="text-center"> Team </h2>
                  <div class="row pt-5 gx-2 gy-4">
                  <div class="col-md-6 col-lg-3 mt-2 mb-2">
                      <div class="card shadow-card rad-card">
                          <div class="overflow-hidden" id="divImgCard">
                              <img id="img-item" src="./cowok2.jpeg" class="img-fluid" alt="Gambar">
                          </div>
                          <div class="card-body text-center" col-sm-3 id="body-card">
                          <h3 class="card-title">Fahru Alfarizi H.P</h3>
                          <div class="row my-3">
                              <a href="" class="social text-decoration-none text-primary"><i class='fab fa-linkedin fa-lg' style='color:#1e90ff'></i> Linkedin </a>
                              <a href="" class="social text-decoration-none text-dark"><i class='fab fa-github fa-lg' style='color:#1e272e'></i> Github </a>
                              <a href="" class="social text-decoration-none text-danger"><i class='fab fa-instagram fa-lg' style='color:#ff3f34'></i> Instagram </a>
                          </div>
                      </div>
                      </div>
                  </div>
                  <div class="col-md-6 col-lg-3 mt-2 mb-2">
                      <div class="card shadow-card rad-card">
                          <div class="overflow-hidden m-0" id="divImgCard">
                              <img id="img-item" src="./cowok2.jpeg" class="img-fluid" alt="Gambar">
                          </div>
                          <div class="card-body text-center" col-sm-3 id="body-card">
                          <h3 class="card-title">Adi Sukma Meta</h3>
                          <div class="row my-3">
                              <a href="" class="social text-decoration-none text-primary"><i class='fab fa-linkedin fa-lg' style='color:#1e90ff'></i> Linkedin </a>
                              <a href="" class="social text-decoration-none text-dark"><i class='fab fa-github fa-lg' style='color:#1e272e'></i> Github </a>
                              <a href="" class="social text-decoration-none text-danger"><i class='fab fa-instagram fa-lg' style='color:#ff3f34'></i> Instagram </a>
                          </div>
                      </div>
                      </div>
                  </div>
                  <div class="col-md-6 col-lg-3 mt-2 mb-2">
                      <div class="card shadow-card rad-card">
                          <div class="overflow-hidden m-0" id="divImgCard">
                              <img id="img-item" src="./cowok2.jpeg" class="img-fluid" alt="Gambar">
                          </div>
                          <div class="card-body text-center" col-sm-3 id="body-card">
                          <h3 class="card-title">Diaz Khalid Ananda</h3>
                          <div class="row my-3">
                              <a href="" class="social text-decoration-none text-primary"><i class='fab fa-linkedin fa-lg' style='color:#1e90ff'></i> Linkedin </a>
                              <a href="" class="social text-decoration-none text-dark"><i class='fab fa-github fa-lg' style='color:#1e272e'></i> Github </a>
                              <a href="" class="social text-decoration-none text-danger"><i class='fab fa-instagram fa-lg' style='color:#ff3f34'></i> Instagram </a>
                          </div>
                      </div>
                      </div>
                  </div>
                  <div class="col-md-6 col-lg-3 mt-2 mb-2">
                      <div class="card shadow-card rad-card">
                          <div class="overflow-hidden m-0" id="divImgCard">
                              <img id="img-item" src="./cowok2.jpeg" class="img-fluid" alt="Gambar">
                          </div>
                          <div class="card-body text-center" col-sm-3 id="body-card">
                          <h3 class="card-title">Ngurah Oka Devara</h3>
                          <div class="row my-3">
                              <a href="" class="social text-decoration-none text-primary"><i class='fab fa-linkedin fa-lg' style='color:#1e90ff'></i> Linkedin </a>
                              <a href="" class="social text-decoration-none text-dark"><i class='fab fa-github fa-lg' style='color:#1e272e'></i> Github </a>
                              <a href="" class="social text-decoration-none text-danger"><i class='fab fa-instagram fa-lg' style='color:#ff3f34'></i> Instagram </a>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
            </div>
        </div>
        <section id="team class="team section-bg" ">
        <div class="container">
            <div class="section-title">
                <h2> Team </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, culpa.</p>
            </div>

            <div class="row">
                <!-- pertama -->
                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                    <div class="member">
                        <div class="member-img">
                            <img src="./hero_img-xs.jpg" class="img-fluid" alt="">

                            <div class="social">
                                <a href="" class="social text-decoration-none text-primary"><i class='fab fa-linkedin fa-lg'></i> Linkedin </a>
                                <a href="" class="social text-decoration-none text-dark"><i class='fab fa-github fa-lg'></i> Github </a>
                                <a href="" class="social text-decoration-none text-danger"><i class='fab fa-instagram fa-lg'></i> Instagram </a>
                            </div>
                        </div>
                        <div class="member-info">
                            <h4> Walter white</h4>
                            <span> chef executive </span>
                        </div> 
                    </div>
                </div>

                <!-- kedua -->
                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                    <div class="member" data-aos="fade-up" data-aos-delay="100" >
                        <div class="member-img">
                            <img src="./hero_img-xs.jpg" class="img-fluid" alt="">

                            <div class="sosial">
                                <a href="" class="social text-decoration-none text-primary"><i class='fab fa-linkedin fa-lg'></i> Linkedin </a>
                                <a href="" class="social text-decoration-none text-dark"><i class='fab fa-github fa-lg'></i> Github </a>
                                <a href="" class="social text-decoration-none text-danger"><i class='fab fa-instagram fa-lg'></i> Instagram </a>
                            </div>
                        </div>
                        <div class="member-info">
                            <h4> Walter white</h4>
                            <span> chef executive </span>
                        </div> 
                    </div>
                </div>

                <!-- ketiga -->
                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                    <div class="member" data-aos="fade-up" data-aos-delay="100" >
                        <div class="member-img">
                            <img src="./hero_img-xs.jpg" class="img-fluid" alt="">

                            <div class="sosial">
                                <a href="" class="social text-decoration-none text-primary"><i class='fab fa-linkedin fa-lg'></i> Linkedin </a>
                                <a href="" class="social text-decoration-none text-dark"><i class='fab fa-github fa-lg'></i> Github </a>
                                <a href="" class="social text-decoration-none text-danger"><i class='fab fa-instagram fa-lg'></i> Instagram </a>
                            </div>
                        </div>
                        <div class="member-info">
                            <h4> Walter white</h4>
                            <span> chef executive </span>
                        </div> 
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="100" >
                    <div class="member-img">
                        <img src="./hero_img-xs.jpg" class="img-fluid" alt="">

                        <div class="sosial">
                            <a href="" class="social text-decoration-none text-primary"><i class='fab fa-linkedin fa-lg'></i> Linkedin </a>
                            <a href="" class="social text-decoration-none text-dark"><i class='fab fa-github fa-lg'></i> Github </a>
                            <a href="" class="social text-decoration-none text-danger"><i class='fab fa-instagram fa-lg'></i> Instagram </a>
                        </div>
                    </div>
                    <div class="member-info">
                        <h4> Walter white</h4>
                        <span> chef executive </span>
                    </div> 
                </div>
            </div>
            </div>
        </div>
    </section>
        `;
  },
  async afterRender() {
    console.log('after render');
  },
};

export default TentangKami;
