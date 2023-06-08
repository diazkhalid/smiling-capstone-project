const TentangKami = {
  async render() {
    console.log('render');
    return `

      <div class="container-fluid jumbotron3 pb-4 mb-5 my-3">
        <div class="container jumbotron1 ">
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
      <section class="py-5 navbar-color">
        <div class="container-lg py-4">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center" data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-duration="1000">
                    <p class=" fs-5"> Apakah Anda Memiliki Pertanyaan? </p>
                    <h2 class="fs-1 mb-4"> Silahkan Hubungi Kami </h2>
                    <a href="#pindah" class="btn btn-outline-dark px-5 py-2">Kontak</a>
                </div>
            </div>
        </div>
      </section>
      <div class="">
      <svg id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(250.816, 214.009, 71.733, 1)" offset="0%"></stop><stop stop-color="rgba(255, 222.774, 21.094, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,98L120,155.2C240,212,480,327,720,334.8C960,343,1200,245,1440,236.8C1680,229,1920,310,2160,302.2C2400,294,2640,196,2880,204.2C3120,212,3360,327,3600,367.5C3840,408,4080,376,4320,334.8C4560,294,4800,245,5040,196C5280,147,5520,98,5760,73.5C6000,49,6240,49,6480,81.7C6720,114,6960,180,7200,212.3C7440,245,7680,245,7920,236.8C8160,229,8400,212,8640,245C8880,278,9120,359,9360,326.7C9600,294,9840,147,10080,89.8C10320,33,10560,65,10800,65.3C11040,65,11280,33,11520,32.7C11760,33,12000,65,12240,114.3C12480,163,12720,229,12960,236.8C13200,245,13440,196,13680,147C13920,98,14160,49,14400,49C14640,49,14880,98,15120,171.5C15360,245,15600,343,15840,375.7C16080,408,16320,376,16560,318.5C16800,261,17040,180,17160,138.8L17280,98L17280,490L17160,490C17040,490,16800,490,16560,490C16320,490,16080,490,15840,490C15600,490,15360,490,15120,490C14880,490,14640,490,14400,490C14160,490,13920,490,13680,490C13440,490,13200,490,12960,490C12720,490,12480,490,12240,490C12000,490,11760,490,11520,490C11280,490,11040,490,10800,490C10560,490,10320,490,10080,490C9840,490,9600,490,9360,490C9120,490,8880,490,8640,490C8400,490,8160,490,7920,490C7680,490,7440,490,7200,490C6960,490,6720,490,6480,490C6240,490,6000,490,5760,490C5520,490,5280,490,5040,490C4800,490,4560,490,4320,490C4080,490,3840,490,3600,490C3360,490,3120,490,2880,490C2640,490,2400,490,2160,490C1920,490,1680,490,1440,490C1200,490,960,490,720,490C480,490,240,490,120,490L0,490Z"></path></svg>
      </div>
      
        <div class="container-lg py-4 mt-0">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="text-center " data-aos="fade-down" data-aos-delay="100">
                        <h2 class="fw-bold mb-4 ">Sumber Lainnya</h2>
                    </div>
                </div>
            </div>
            <div class="row" >
                <div class="col-md-6 col-lg-4 col-sm-6 d-flex justify-content-center" data-aos="fade-up" >
                    <div class="portofolio-item" data-aos="fade-right" data-aos-delay="200">
                        <img src="./storyy.png" alt="portofolio item" class="shadow-lg mb-2 bg-body rounded img-thumbnail">
        
                        <h3 class="text-capitalize fs-3 my-2"> StoryWeaver </h3>
                        <p class="mb-4"><a href="https://storyweaver.org.in/student" class="text-danger text-decoration-none fs-4" target="_blank">Demo</a></p>
                        
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-sm-6 d-flex justify-content-center">
                    <div class="portofolio-item" data-aos="fade-left" data-aos-delay="300">
                        <img src="./story2.png" alt="portofolio item" class="shadow-lg mb-2 bg-body rounded img-thumbnail">
                        
                        <h3 class="text-capitalize fs-3 my-2 card-"> Storial </h3>
                        <p class="mb-4"><a href="https://www.storial.co/" class="text-danger text-decoration-none fs-4" target="_blank">Demo</a></p>
                        
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-sm-6 d-flex justify-content-center">
                    <div class="portofolio-item " data-aos="fade-up" data-aos-delay="400">
                        <img src="./freestock.png" alt="portofolio item" class="shadow-lg mb-2 bg-body rounded img-thumbnail">
                        
                        <h3 class="text-capitalize fs-3 my-2"> Free-Stock-Music </h3>
                        <p class="mb-4 "><a href="https://www.free-stock-music.com/" class="text-danger text-decoration-none fs-4" target="_blank">Demo</a></p>
                        
                    </div>
                </div>
            </div>
        </div>
    
    <section id="team" class="team section-bg">
        <div class="container" id="pindah">
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
