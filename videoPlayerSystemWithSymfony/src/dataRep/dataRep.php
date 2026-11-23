<?php

namespace App\dataRep;

class dataRep
{
    public function findAll(): array
    {
        $json = file_get_contents(__DIR__ . '/movies.json');
        $movies = json_decode($json, true);
        $result = [];
        foreach ($movies as $movie) {
            $result[] = new data(
                $movie['id'],
                $movie['title'],
                $movie['genre'],
                $movie['year'],
                $movie['rating'],
                $movie['description'],
                $movie['lang'],
                $movie['source']
            );
        }
        return $result;
    }
    public function findOne(int $id): ?data
    {
        $json = file_get_contents(__DIR__ . '/movies.json');
        $movies = json_decode($json, true);

        foreach ($movies as $movie) {
            if ($movie['id'] === $id) {
                return new data(
                    $movie['id'],
                    $movie['title'],
                    $movie['genre'],
                    $movie['year'],
                    $movie['rating'],
                    $movie['description'],
                    $movie['lang'],
                    $movie['source']
                );
            }
        }
    return null;
    }
}
