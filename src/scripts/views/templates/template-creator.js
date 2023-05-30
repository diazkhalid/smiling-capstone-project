/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
const createStoryItemTemplate = () => `
    <div class="col-md-6 col-lg-4 mt-2 mb-2">
        <div class="card shadow-card rad-card">
            <div class="overflow-hidden m-0" id="divImgCard">
                <img id="img-item" src="./card-img.jpg" class="img-fluid" alt="Gambar">
            </div>
            <div class="card-body text-center overflow-hidden" id="body-card">
                <h3 class="card-title"><a href="/#/detail">Penerbangan Pertama Raju</a></h3>
                <p>Seorang fotografer alam berencana menemukan kucing liar yang aneh serta bertemu dengan makhluk-makhluk lain yang mempesona.</p>
            </div>
        </div>
    </div>
`;

const createStoryItemTemplate2 = () => `
    <div class="col-md-6 col-lg-4 mt-2 mb-2">
        <div class="card shadow-card rad-card">
            <div class="overflow-hidden m-0" id="divImgCard">
                <img id="img-item" src="./card-img.jpg" class="img-fluid" alt="Gambar">
            </div>
            <div class="card-body text-center overflow-hidden" id="body-card">
                <h3 class="card-title"><a href="/#/detail">Penerbangan Pertama Raju</a></h3>
                <p>Seorang fotografer alam berencana menemukan kucing liar yang aneh serta bertemu dengan makhluk-makhluk lain yang mempesona. Seorang fotografer alam berencana menemukan kucing liar yang aneh serta bertemu dengan makhluk-makhluk lain yang mempesona.</p>
            </div>
        </div>
    </div>
`;

const createStoryDetailTemplate = () => `
    <div class="row">
        <div class="col">
            <h2>Penerbangan Pertama Raju</h2>
        </div>
    </div>
    <div class="row gap-5 gap-md-0">
        <div class="col-md-6 pe-md-4">
        <img class="img-fluid" src="./card-img.jpg" alt="" width="100%" />
        </div>
        <div class="col-md-6 ps-md-4">
        <h3>Detail Cerita</h3>
        <table class="table table-borderless table-responsive mt-3">
            <tr>
            <td>Penulis</td>
            <td>:</td>
            <td>Nandita Jayaraj</td>
            </tr>
            <tr>
            <td>Ilustrator</td>
            <td>:</td>
            <td>Upamanyu Bhattacharyya</td>
            </tr>
            <tr>
            <td>Penerbit</td>
            <td>:</td>
            <td>Pratham Books</td>
            </tr>
            <tr>
            <td>Url asli</td>
            <td>:</td>
            <td>
                <a
                href="https://storyweaver.org.in/stories/129032-penerbangan-pertama-raju"
                >Storyweaver.org.in</a
                >
            </td>
            </tr>
            <tr>
            <td>Musik</td>
            <td>:</td>
            <td>Positive Ukulele by Sokolovsky Music</td>
            </tr>
            <tr>
            <td>Hak cipta</td>
            <td>:</td>
            <td>CC BY 4.0</td>
            </tr>
        </table>
        </div>
    </div>
    <div class="row justify-content-center my-3 sticky-top">
        <div class="col-11 col-md-6 player p-0">
        <audio controls loop preload="none">
            <source src="./horde-of-geese.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="row d-flex flex-column align-items-center gap-4 mt-4">
                <div class="col text-center mb-2">
                <img
                    class="img-fluid story-picture"
                    src="./story-img.jpg"
                    alt=""
                />
                </div>
                <div class="col col-xl-9">
                <p>
                    Kapten Raju mengemudikan pesawat tempur itu tajam ke kiri,
                    sedikit saja menghindari Menara Eiffel. "Fiuh! Paris memang
                    tempat yang susah untuk terbang," pikirnya, jantungya berdegup
                    kencang. Tiba-tiba, dia mendengar bunyi dari kokpit - "TIT TIT
                    TIT" Apa itu? Apakah dia berada di wilayah musuh? Apakah mesin
                    pesawat mengalami kerusakan?
                </p>
                </div>
            </div>
            <div class="row d-flex flex-column align-items-center gap-4 mt-4">
                <div class="col text-center mb-2">
                <img
                    class="img-fluid story-picture"
                    src="./story-img2.jpg"
                    alt=""
                />
                </div>
                <div class="col col-xl-9">
                <p>
                    "TIT TIT TIT" Raju terbangun dari tidur pada saat alarm berbunyi. "Itu semua hanya sebuah mimpi", gumamnya. Tapi, tunggu. Tak ada waktu untuk kecewa. Hari ini adalah hari yang penting. "Aku akan naik pesawat untuk pertama kalinya! Amma, Aku sudah bangun!" Ibunya saat itu sedang menutup resleting koper. "Selamat pagi, Raju!" sahutnya."Ibu sangat senang untuk dapat bertemu kakakmu. Sudah berbulan-bulan sejak terakhir kali kita bertemu dengan Arya! Cepatlah bersiap-siap."
                </p>
                </div>
            </div>
        </div>
    </div>
`;

export {
  createStoryItemTemplate,
  createStoryItemTemplate2,
  createStoryDetailTemplate,
};
