const TentangKami = {
  async render() {
    console.log('render');
    return `

      <div class="container-fluid pb-4 mb-5 my-3">
        <div class="container jumbotron2 ">
          <h2 class="text-center" data-aos="fade-down-right" data-aos-delay="100">Smiling</h2>
          <div class="clearfix pt-2">
            <img
              src="hero_img.jpg"
              class="col-md-8 col-lg-6 img-fluid rounded mx-auto d-block shadow-lg mb-4 bg-body rounded"
              data-aos="zoom-out-down"
              data-aos-delay="100"
            />
            <p class="my-3 text-center fs-3 col-md-12" data-aos="fade-down" data-aos-delay="200">
            Aplikasi Smiling (Stories for Family Bonding) dibangun sebagai solusi pemanfaatan gawai untuk memudahkan bonding keluarga sekaligus menarik perhatian anak. Aplikasi ini berisi cerita anak yang disertai media ilustrasi dan musik latar, sehingga orang tua dan anak bisa berinteraksi melalui aktivitas membaca bersama.
            </p>
          </div>
        </div>
      </div>
      <section class="py-3 navbar-color">
        <div class="container-lg py-4">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center" data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-duration="1000">
                    <p class=" fs-5"> Apakah Anda Memiliki Pertanyaan? </p>
                    <h2 class="fs-1 mb-4"> Silahkan Hubungi Kami </h2>
                    <a href="#team" class="btn btn-outline-dark px-5 py-2">Kontak</a>
                </div>
            </div>
        </div>
      </section>
      <div class="">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffe76a" fill-opacity="1" d="M0,224L40,197.3C80,171,160,117,240,101.3C320,85,400,107,480,133.3C560,160,640,192,720,202.7C800,213,880,203,960,170.7C1040,139,1120,85,1200,85.3C1280,85,1360,139,1400,165.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
      </div>
      
        <div class="container-lg py-4 mt-0">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="text-center " data-aos="fade-down" data-aos-delay="100">
                        <h2 class="fw-bold mb-4 ">Sumber</h2>
                    </div>
                </div>
            </div>
            <div class="row" >
                <div class="col-md-6 col-lg-4 col-sm-6 d-flex justify-content-center" data-aos="fade-up" >
                    <div class="portofolio-item" data-aos="zoom-in-down" data-aos-delay="200">
                        <img src="./storyy.png" alt="portofolio item" class="shadow-lg mb-2 bg-body rounded img-thumbnail">
        
                        <h3 class="text-capitalize fs-3 my-2"> StoryWeaver </h3>
                        <p class="mb-4"><a href="https://storyweaver.org.in/student" class="text-danger text-decoration-none fs-4" target="_blank">Demo</a></p>
                        
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-sm-6 d-flex justify-content-center">
                    <div class="portofolio-item" data-aos="zoom-in-up" data-aos-delay="300">
                        <img src="./story2.png" alt="portofolio item" class="shadow-lg mb-2 bg-body rounded img-thumbnail">
                        
                        <h3 class="text-capitalize fs-3 my-2 card-"> Storial </h3>
                        <p class="mb-4"><a href="https://www.storial.co/" class="text-danger text-decoration-none fs-4" target="_blank">Demo</a></p>
                        
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-sm-6 d-flex justify-content-center">
                    <div class="portofolio-item " data-aos="zoom-in-right" data-aos-delay="400">
                        <img src="./freestock.png" alt="portofolio item" class="shadow-lg mb-2 bg-body rounded img-thumbnail">
                        
                        <h3 class="text-capitalize fs-3 my-2"> Free-Stock-Music </h3>
                        <p class="mb-4 "><a href="https://www.free-stock-music.com/" class="text-danger text-decoration-none fs-4" target="_blank">Demo</a></p>
                        
                    </div>
                </div>
            </div>
        </div>
    
    <section id="team" class="team section-bg">
        <div class="container">
            <div class="text-center py-2" data-aos="fade-down" data-aos-delay="100">
                <h2 class="py-2 text-dark fw-bold" id="testing">Team</h2>
                <p class="text-dark fs-5"> Pengembang Aplikasi Smiling yang merupakan peserta SIB cycle 4.</p>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 d-flex align-items-stretch d-flex justify-content-center">
                    <div class="member " data-aos="fade-up" data-aos-delay="150">
                        <div class="member-img">
                            <img src="./fahru.jpg" class="img-fluid shadow-lg mb-2 bg-body rounded " alt="">

                            <!-- Sosial Meddia -->
                            <div class="social">
                                <a href="https://instagram.com/_fahp19?igshid=MzRlODBiNWFlZA==" target="blank"><i class='fab fa-instagram' style='font-size:25px;background-image: linear-gradient(to right top, #0652dd, #8c3cc8, #c017a9, #de0084, #ec005e, #f2065c, #f70d5a, #fd1457, #ff227a, #ff399e, #ff51c0, #f368e0);'></i></a>
                                <a href="https://github.com/fahrual" target="blank"><i class='fab fa-github' style='font-size:25px'></i></a>
                                <a href="https://www.linkedin.com/in/fahru-alfarizi-hananza-putrawan-94379b26a/" target="blank"><i class='fab fa-linkedin' style='font-size:24px;background-image: linear-gradient(to left top, #ffffff, #e0dffe, #b9c2fe, #85a8ff, #1e90ff);'></i></a>
                            </div>
                        </div>
                        <!-- Info -->
                        <div class="member-info">
                            <h4> Fahru Alfarizi </h4>
                            <span> Front end Developer </span> 
                        </div>
                    </div>
                </div>

                <!-- Member 2  -->
                <div class="col-lg-3 col-md-6 d-flex align-items-stretch d-flex justify-content-center">
                    <div class="member" data-aos="fade-up" data-aos-delay="300">
                        <div class="member-img">
                            <img src="./diaz.jpg" class="img-fluid shadow-lg mb-2 bg-body rounded " alt="" >

                            <!-- Sosial Meddia -->
                            <div class="social">
                                <a href="https://www.instagram.com/diaz_kaaa/ arah" target="blank"><i class='fab fa-instagram' style='font-size:25px;background-image: linear-gradient(to right top, #0652dd, #8c3cc8, #c017a9, #de0084, #ec005e, #f2065c, #f70d5a, #fd1457, #ff227a, #ff399e, #ff51c0, #f368e0);'></i></a>
                                <a href="https://github.com/diazkhalid" target="blank"><i class='fab fa-github' style='font-size:25px;'></i></a>
                                <a href="https://www.linkedin.com/in/diaz-khalid-ananda-5a135a267/" target="blank"><i class='fab fa-linkedin' style='font-size:24px;background-image: linear-gradient(to left top, #ffffff, #e0dffe, #b9c2fe, #85a8ff, #1e90ff);'></i></a>
                            </div>
                        </div>
                        <!-- Info -->
                        <div class="member-info">
                            <h4> Diaz Khalid </h4>
                            <span> Back End Developer </span>
                        </div>
                    </div>
                </div>
                
                <!-- Member 3 -->
                <div class="col-lg-3 col-md-6 d-flex align-items-stretch d-flex justify-content-center">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="./oka.jpg" class="img-fluid shadow-lg mb-2 bg-body rounded " alt="">

                            <!-- Sosial Meddia -->
                            <div class="social">
                                <a href="https://instagram.com/okadevara?igshid=OGQ5ZDc2ODk2ZA==" target="blank"><i class='fab fa-instagram' style='font-size:25px;background-image: linear-gradient(to right top, #0652dd, #8c3cc8, #c017a9, #de0084, #ec005e, #f2065c, #f70d5a, #fd1457, #ff227a, #ff399e, #ff51c0, #f368e0);'></i></a>
                                <a href="https://github.com/okadevara" target="blank"><i class='fab fa-github' style='font-size:25px'></i></a>
                                <a href="https://www.linkedin.com/in/okadevara/" target="blank"><i class='fab fa-linkedin' style='font-size:24px;background-image: linear-gradient(to left top, #ffffff, #e0dffe, #b9c2fe, #85a8ff, #1e90ff);'></i></a>
                            </div>
                        </div>
                        <!-- Info -->
                        <div class="member-info">
                            <h4> Oka Devara </h4>
                            <span> Front End Developer </span>
                        </div>
                    </div>
                </div>
                <!-- Member 4 -->
                <div class="col-lg-3 col-md-6 d-flex align-items-stretch d-flex justify-content-center">
                    <div class="member" data-aos="fade-up" data-aos-delay="500">
                        <div class="member-img">
                            <img src="./adi.png" class="img-fluid shadow-lg mb-2 bg-body rounded " alt="">

                            <!-- Sosial Meddia -->
                            <div class="social">
                                <a href="https://instagram.com/adisukma02?igshid=MzNlNGNkZWQ4Mg==" target="blank"><i class='fab fa-instagram' style='font-size:25px;background-image: linear-gradient(to right top, #0652dd, #8c3cc8, #c017a9, #de0084, #ec005e, #f2065c, #f70d5a, #fd1457, #ff227a, #ff399e, #ff51c0, #f368e0);'></i></a>
                                <a href="https://github.com/RacThug" target="blank"><i class='fab fa-github' style='font-size:25px'></i></a>
                                <a href="https://www.linkedin.com/in/adi-sukma-a5485b176/" target="blank"><i class='fab fa-linkedin' style='font-size:24px;background-image: linear-gradient(to left top, #ffffff, #e0dffe, #b9c2fe, #85a8ff, #1e90ff);'></i></a>
                            </div>
                        </div>
                        <!-- Info -->
                        <div class="member-info">
                            <h4> Adi Sukma </h4>
                            <span> Back End Developer </span>
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
