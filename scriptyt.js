document.addEventListener('DOMContentLoaded', function() {
    var key = 'AIzaSyA9Z8-BMij4Tmb09DLTh8VVQdrb92Cg_wE'; // Coloca tu clave de API de YouTube aquí
    var channelId = 'UCqcaTlGMZLmEbLKwoeNrwXA'; // Id de el canal de la Utnortecoahuila en YouTube
    var cantVideos = 3; //Cantidad de videos que mostrara

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${cantVideos}&order=viewCount&type=video&channelId=${channelId}&key=${key}`)
        .then(response => response.json())
        .then(data => {
            if (data.items) {
                var videoItems = data.items;
                var output = '';
                videoItems.forEach(video => {
                    output += `
                        <div class="card mb-3">
                            <img src="${video.snippet.thumbnails.medium.url}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${video.snippet.title}</h5>
                                <p class="card-text">${video.snippet.description}</p>
                                <a href="https://www.youtube.com/watch?v=${video.id.videoId}" class="btn btn-primary">Ver Video</a>
                            </div>
                        </div>
                    `;
                });
                document.getElementById('videos').innerHTML = output;
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

