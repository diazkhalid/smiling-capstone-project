/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
const createStoryItemTemplate = () => `
    <div class="col-md-6 col-lg-4 mt-2 mb-2">
        <div class="card shadow-card rad-card">
            <div class="overflow-hidden m-0" id="divImgCard">
                <img id="img-item" src="./card-img.jpg" class="img-fluid" alt="Gambar">
            </div>
            <div class="card-body text-center overflow-hidden" id="body-card">
                <h5 class="card-title">Penerbangan Pertama Raju</h5>
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
                <h5 class="card-title">Penerbangan Pertama Raju</h5>
                <p>Seorang fotografer alam berencana menemukan kucing liar yang aneh serta bertemu dengan makhluk-makhluk lain yang mempesona.Seorang fotografer alam berencana menemukan kucing liar yang aneh serta bertemu dengan makhluk-makhluk lain yang mempesona.</p>
            </div>
        </div>
    </div>
`;

export { createStoryItemTemplate, createStoryItemTemplate2 };
