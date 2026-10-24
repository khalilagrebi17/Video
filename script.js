$.getJSON('movies.json',function(res){
    $.each(res,function(i,object){
        $('#movies').append(
            "<div class='movie'>"+
                "<img src='../Videos/pic.png' alt='video' class='demon-slayer-image'>"+
                "<div class='movie-title'>"+object.title+"</div>"+
                "<div class='movie-style-one'>"+
                    "<div class='movie-style-sec-line'>"+
                        "<span class='star'>★ "+object.rating+"</span>"+
                        "<span>"+object.Lang+"</span>"+
                        "<span>"+object.year+"</span>"+
                    "</div>"+
                "</div>"+
            "</div>"
        );
    });
});