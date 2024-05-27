<?php

namespace App\Controllers;

use Psr\Http\Message\RequestInterface;

abstract class AbstractController
{
    public function json_response($response, $data)
    {
        $json = json_encode($data);

        $response->getBody()->write($json);
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function body_parser(RequestInterface $request)
    {
        $body = $request->getBody()->getContents();
        return json_decode($body, true);
    }
}
