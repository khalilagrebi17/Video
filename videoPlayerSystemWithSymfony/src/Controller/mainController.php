<?php

namespace App\Controller;

use App\dataRep\dataRep;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class mainController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function homePage(dataRep $dataRep): Response
    {
        $data = $dataRep->findAll();
        $dataCount = count($data);

        $myData = [];

        if (!empty($data)) {
            $myData = $data[array_rand($data)];
        }
        return $this->render('main/homepage.html.twig', [
            'data' => $data,
            'dataCount' => $dataCount,
            'myData' => $myData
        ]);
    }
}
