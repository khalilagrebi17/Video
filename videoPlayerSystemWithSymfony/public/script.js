
// This function makes requests to Symfony
async function makeRequest(url, options = {}) {
    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });

        const data = await response.json();

        return {
            success: response.ok,
            data: data,
            status: response.status
        };

    } catch (error) {
        return {
            success: false,
            data: { message: error.message },
            status: 500
        };
    }
}


// This function gets all movies from Symfony
async function getAllMovies() {

    const result = await makeRequest('/api/movies');
    console.log(result.data);
    if (result.success) {

        let moveId = '';

        // This function displays the movies
        function displayMovies(movies) {

            $('#movies').empty();

            $.each(movies, function(i, object) {

                if (
                    object.title.toLowerCase().includes($('#search').val().toLowerCase()) || $('#search').val() == "") {

                    $('#movies').append(
                        "<a class='movie' id='movie-" + i + "'>" +
                        "<img src='C:/xampp/htdocs/little project/Video/pic.png' alt='video' class='demon-slayer-image'>" +
                        "<div class='movie-title'>" + object.title + "</div>" +
                        "<div class='movie-style-one'>" +
                        "<div class='movie-style-sec-line'>" +
                        "<span class='star'>★ " + object.rating + "</span>" +
                        "<span>" + object.lang + "</span>" +
                        "<span>" + object.year + "</span>" +
                        "</div>" +
                        "</div>" +
                        "</a>"
                    );
                }
            });
        }


        // Display all movies when the page loads
        displayMovies(result.data);


        // Search functionality
        $('#search').on('input', function() {
            displayMovies(result.data);
        });


        // Select a movie when clicked
        $('#movies').on('click', '.movie', function() {

            $('.movie').removeClass('movieSelected');

            $(this).addClass('movieSelected');

            moveId = $(this).attr('id');
        });


        // Hover effect
        $('#movies').on('mouseenter', '.movie', function() {
            $(this).addClass('movieSelected');
        });


        // Remove hover effect and restore selected movie
        $('#movies').on('mouseleave', '.movie', function() {

            $(this).removeClass('movieSelected');

            if (moveId !== '') {
                $('#' + moveId).addClass('movieSelected');
            }

        });

    } else {

        console.error('Failed to load movies:', result.data.message);

    }
}


// Execute when the page is ready
$(document).ready(function() {
    getAllMovies();
});
