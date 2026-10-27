//this part will show all the movies in the json file
$.getJSON('movies.json',function(res){
    $.each(res,function(i,object){
        if(object.title.toLowerCase().includes($('#search').val().toLowerCase()) || $('#search').val()==""){
            $('#movies').append(
                "<a class='movie' id='movie-"+i+"'>"+/*I have added the (i) cuz maybe in the future i will need to access the movie by its index*/
                    "<img src='../Videos/pic.png' alt='video' class='demon-slayer-image'>"+
                    "<div class='movie-title'>"+object.title+"</div>"+
                    "<div class='movie-style-one'>"+
                        "<div class='movie-style-sec-line'>"+
                            "<span class='star'>★ "+object.rating+"</span>"+
                            "<span>"+object.Lang+"</span>"+
                            "<span>"+object.year+"</span>"+
                        "</div>"+
                    "</div>"+
                "</a>"
            );
        }
    });
});
//now the code will show only what its ritten in the search bar and if the search bar is empty it will show all the movies
$('#search').keyup(function(){
    $('#movies').empty();
    $.getJSON('movies.json',function(res){
    $.each(res,function(i,object){
        if(object.title.toLowerCase().includes($('#search').val().toLowerCase()) || $('#search').val()==""){
            $('#movies').append(
                "<a class='movie' id='movie-"+i+"'>"+/*I have added the (i) cuz maybe in the future i will need to access the movie by its index*/
                    "<img src='../Videos/pic.png' alt='video' class='demon-slayer-image'>"+
                    "<div class='movie-title'>"+object.title+"</div>"+
                    "<div class='movie-style-one'>"+
                        "<div class='movie-style-sec-line'>"+
                            "<span class='star'>★ "+object.rating+"</span>"+
                            "<span>"+object.Lang+"</span>"+
                            "<span>"+object.year+"</span>"+
                        "</div>"+
                    "</div>"+
                "</a>"
            );
        }
    });
});
});