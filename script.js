$.getJSON('movies.json',function(res){
    $.each(res,function(i,object){
        $('#movies').append("<div class='movie'><table><tr><td colspan='3' class='movie-style-one'>"+object.title+"</td></tr><tr><td class='movie-style-one'><span class='star'>★ </span>"+object.rating+"</td>"+"<td>"+object.Lang+"</td><td>"+object.year+"</td></tr></table></div>");
    });
});