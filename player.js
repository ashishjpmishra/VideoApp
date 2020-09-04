

var playlistSection = document.getElementById("playlist-section");
var playerSection = document.getElementById("player-section");

var xhttpVideo = new XMLHttpRequest();

xhttpVideo.open("get",
 "https://5efbca1c80d8170016f76869.mockapi.io/videoWatch",
  true
  );

function createVideoPlayer(dataVideo){
            // <div id="video-player">
            //      <iframe src="https://player.vimeo.com/video/190062231" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen class="thumbnail-player"></iframe>
            //      <p> 22500 views </p>
            //      <h3>Croissants | Flour and Stone </h3>
            //      <p>There is no other way but to commit wholeheartedly to a relationship with a croissant. We have all found ourselves at the mercy of its allure. Here, in another epic film by the uber talented Nathan Rodger, our Erin divulges her personal romance with The Croissant </p>
            // </div>

        var videoPlayer = document.createElement("div");
        videoPlayer.classList.add("video-player");
        var video = document.createElement("iframe");
        video.src = "https://player.vimeo.com/video/"+ dataVideo.vimeoId;
        video.frameBorder = 0;
        video.allowFullscreen;
        video.classList.add("thumbnail-player");
        var videoViews = document.createElement("p");
        videoViews.innerText = dataVideo.views + " views";
        var videoTitle = document.createElement("h3");
        videoTitle.innerText = dataVideo.title;
        var videoDescription = document.createElement("p");
        videoDescription.innerText = dataVideo.description;

        videoPlayer.appendChild(video);
        videoPlayer.appendChild(videoViews);
        videoPlayer.appendChild(videoTitle);
        videoPlayer.appendChild(videoDescription);
        
        playerSection.appendChild(videoPlayer);

        return playerSection;

}

xhttpVideo.onreadystatechange = function(){
    if(xhttpVideo.readyState === 4){
        var response = JSON.parse(xhttpVideo.responseText);
        //console.log(response)

        var position = ((window.location.search).split("=")[1])-1 ;

        createVideoPlayer((response[position]));
                          
    }
}

xhttpVideo.send();

function createVideoCard(data){
    // <div class="video-card">
    //     <img src="https://i.vimeocdn.com/video/600595198_390x220.webp" alt="" class="thumbnail">
    //     <p> video description </p>
    // </div>

    var videoCard = document.createElement("div");
    videoCard.classList.add("video-card");
    var videoLink = document.createElement("a");
    videoLink.href = "./player.html?qid=" + data.id;
    var thumbnailImage = document.createElement("img");
    thumbnailImage.src = data.thumbnail;
    thumbnailImage.classList.add("thumbnail")
    var videoTitle = document.createElement("p");
    videoTitle.innerText = data.title;
    
    videoLink.appendChild(thumbnailImage);
    videoLink.appendChild(videoTitle);
    videoCard.appendChild(videoLink);
    //console.log(videoCard)

    // videoCard.addEventListener("click", function(){
    //     window.location.assign("./player.html"+"?qid="+ data.id)
    // })
    playlistSection.appendChild(videoCard);
    // console.log(playlistSection)
    return playlistSection;

}


var xhttpPlaylist = new XMLHttpRequest();

xhttpPlaylist.open("get",
 "https://5d76bf96515d1a0014085cf9.mockapi.io/playlist",
  true
  );

xhttpPlaylist.onreadystatechange = function(){
    if(xhttpPlaylist.readyState === 4){
    var responseArr = JSON.parse(xhttpPlaylist.responseText);
    for(var i=0; i < responseArr.length; i++){

        var videoCard = createVideoCard(responseArr[i]);
        // console.log(videoCard);
        
    }

    }
}

xhttpPlaylist.send();


