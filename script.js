var videoContainer = document.getElementById("video-container")

var xhttp = new XMLHttpRequest();

xhttp.open("get", "https://5efbca1c80d8170016f76869.mockapi.io/videoApp", true);

function createVideoCard(data){
        // <div class="video-card">
        //    <a> <img src="https://i.vimeocdn.com/video/600595198_390x220.webp" alt="" class="thumbnail">
        //     <p> video description </p> </a>
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

        videoContainer.appendChild(videoCard);
        videoLink.appendChild(thumbnailImage);
        videoLink.appendChild(videoTitle);
        videoCard.appendChild(videoLink);

        // videoCard.addEventListener("click", function(){
        //     window.location.assign("./player.html"+"?qid="+ data.id)
        // })

        return videoContainer;

}

xhttp.onreadystatechange = function(){
    if(xhttp.readyState === 4){
    var responseArr = JSON.parse(xhttp.responseText);
    for(var i=0; i < responseArr.length; i++){

        createVideoCard(responseArr[i]);

    }

    }
}

xhttp.send();




