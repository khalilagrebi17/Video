<?php

namespace App\Controller;

use App\dataRep\dataRep;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class mainController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function homePage(
        #[Autowire(param: 'kernel.project_dir')] string $projectDir
    ): Response
    {
        $html = file_get_contents($projectDir . '/public/index.html');

        return new Response($html, 200, [
            'Content-Type' => 'text/html'
        ]);
    }

    #[Route('/api/movies', name: 'get_movies')]
    public function getMovies(dataRep $dataRep): Response
    {

        $movies = $dataRep->findAll();

        $result = array_map(
            fn($movie) => $movie->toArray(),
            $movies
        );

        return $this->json($result);
    }
    #[Route('/api/movies/{id}', name: 'get_movie')]
    public function getMovie(dataRep $dataRep,string $id): Response {
        $res = $dataRep->findOne((int)$id);
        return $this->json($res);
    }
}
