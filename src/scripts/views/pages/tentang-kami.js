const TentangKami = {
  async render() {
    console.log('render');
    return `
      <div class="container-fluid pt-4 pb-5">
        <div class="container">
          <h2>Tentang</h2>
          <div class="clearfix pt-4">
            <img
              src="story-img.jpg"
              class="col-md-5 img-fluid rounded mx-auto d-block"
              width="100%"
              height="100%"
            />
            <p class="my-3">
              Smiling Merupakan sebuah aplikasi cerita yang dibuat oleh 4 orang peserta dicoding cycle 4 yang betujuan agar anak-anak dan orang tua bisa membangun hubungan yang lebih baik dan harmonis, agar hubungan orang tua dan anak tidak menjadi longgar dikarenakan pada saat ini anak-anak lebih asik sendiri dengan kesibukannya sendiri ketimbang orang tuanya.
            </p>
          </div>
        </div>
      </div>
      <div class="container-fluid pt-5 pb-5 ">
        <div class="container text-center">
          <h2> Team </h2>
          <div class="row pt-4 gx-4 gy-4">
          <div class="col-md-6 col-lg-3 mt-2 mb-2">
    <div class="card shadow-card rad-card">
        <div class="overflow-hidden m-0" id="divImgCard">
            <img id="img-item" src="./user2.png" class="img-fluid" alt="Gambar">
        </div>
        <div class="card-body text-center overflow-hidden" id="body-card">
            <h3 class="card-title">Nama</h3>
            <p>Deskripsi</p>
        </div>
    </div>
  </div>
          <div class="col-md-6 col-lg-3 mt-2 mb-2">
    <div class="card shadow-card rad-card">
        <div class="overflow-hidden m-0" id="divImgCard">
            <img id="img-item" src="./user2.png" class="img-fluid" alt="Gambar">
        </div>
        <div class="card-body text-center overflow-hidden" id="body-card">
            <h3 class="card-title">Nama</h3>
            <p>Deskripsi</p>
        </div>
    </div>
  </div>
          <div class="col-md-6 col-lg-3 mt-2 mb-2">
    <div class="card shadow-card rad-card">
        <div class="overflow-hidden m-0" id="divImgCard">
            <img id="img-item" src="./user.png" class="img-fluid" alt="Gambar">
        </div>
        <div class="card-body text-center overflow-hidden" id="body-card">
            <h3 class="card-title">Nama</h3>
            <p>Deskripsi</p>
        </div>
    </div>
  </div>
                  <div class="col-md-6 col-lg-3 mt-2 mb-2">
            <div class="card shadow-card rad-card">
                <div class="overflow-hidden m-0" id="divImgCard">
                    <img id="img-item" src="./user.png" class="img-fluid" alt="Gambar">
                </div>
                <div class="card-body text-center overflow-hidden" id="body-card">
                    <h3 class="card-title">Nama</h3>
                    <p>Deskripsi</p>
                </div>
  
            </div>
          </div>
  
          </div>
  
          
  </div>
        </div>
  
      </div>
        `;
  },
  async afterRender() {
    console.log('after render');
  },
};

export default TentangKami;
