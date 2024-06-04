const songs = [
    { name: "Grand Escape", artist: "RADWIMPS", src: "https://www.youtube.com/embed/epQGR34yiTY?enablejsapi=1" },
    { name: "Suzume", artist: "RADWIMPS,Toaka", src: "https://www.youtube.com/embed/Xs0Lxif1u9E?enablejsapi=1" },
    { name: "Be a flower", artist: "Ryokuoushoku Shakai", src: "https://www.youtube.com/embed/v-WcMQbXbKY?enablejsapi=1" },
    { name: "Yasashisano Riyuu", artist: "ChouCho", src: "https://www.youtube.com/embed/0hJiMN4Csjw?enablejsapi=1" },
    { name: "Hitobashi", artist: "Mai Fuchigami", src: "https://www.youtube.com/embed/fCpacv1cNZk?enablejsapi=1" },
    { name: "I Really Want to Stay At Your House", artist: "Rosa Walton", src: "https://www.youtube.com/embed/KvMY1uzSC1E?enablejsapi=1" },
    { name: "Ambivalent", artist: "Uru", src: "https://www.youtube.com/embed/e_pdE__o5D8?enablejsapi=1" },
    { name: "Color", artist: "yama", src: "https://www.youtube.com/embed/E9Dru15yq9w?enablejsapi=1" },
    { name: "The Asterisk War", artist: "Shiena Nishizawa", src: "https://www.youtube.com/embed/N34lqkWl9s4?enablejsapi=1" },
    { name: "Avid", artist: "SawanoHiroyuki[nZk],mizuki", src: "https://www.youtube.com/embed/YGOX7Tj0dMY?enablejsapi=1" },
    { name: "LEveL", artist: "SawanoHiroyuki[nZk],TOMORROW X TOGETHER", src: "https://www.youtube.com/embed/Jsc6bPHe4tM?enablejsapi=1" },
  
    { name: "Chu,Tayousei.", artist: "ano", src: "https://www.youtube.com/embed/-lec--FlSJ4?enablejsapi=1" },
    { name: "Seisyun Complex", artist: "Kessoku Band", src: "https://www.youtube.com/embed/qpi9YXaChHI?enablejsapi=1" },
    { name: "New Genesis", artist: "Ado", src: "https://www.youtube.com/embed/1FliVTcX8bQ?enablejsapi=1" },
    { name: "FREEDOM", artist: "Ado", src: "https://www.youtube.com/embed/hgyGhu49sGc?enablejsapi=1" },
    { name: "Again", artist: "Yui", src: "https://www.youtube.com/embed/hgyGhu49sGc?enablejsapi=1" },
  ];
  
  const songList = document.getElementById('songList');
  let num = 1;
  songs.forEach(song => {
    const modalId = `staticBackdrop${num}`;
    const div = document.createElement('div');
    div.classList.add('col-6', 'col-md-3', 'd-flex', 'justify-content-center', 'align-items-center', 'mb-3');
    div.innerHTML = `
        <a href="#" class="cardShadow" style="position: relative; display: inline-block;" data-bs-toggle="modal" data-bs-target="#staticBackdrop${num}">
            <img src="/img/Card.png" alt="card background" class="img-fluid" />
            <div class="cardStyle text-center ">
                <h3>${song.name}</h3>
                <h6 class="fontCrimsonRegular" style="color: #46423f">${song.artist}</h6>
                </div>
        </a>
        <div class="modal fade" id="${modalId}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content modalCustom">
                    <div class="modal-header modalHeader2">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div id="youtubeVideo" class="modal-body d-flex justify-content-center">
                        <iframe class=ytStyle src="${song.src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    `;
    num++;
    songList.appendChild(div);
  
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const closeButtons = document.querySelectorAll('.btn-close');
    closeButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            const modalBody = this.closest('.modal-content').querySelector('.modal-body');
            const iframe = modalBody.querySelector('iframe.ytStyle');
            if (iframe) {
                iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            }
        });
    });
  });