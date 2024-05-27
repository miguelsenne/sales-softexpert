<?php

namespace App\Controllers;

use Psr\Container\ContainerInterface;
use App\Controllers\AbstractController;
use App\Services\TaxService;

class TaxController extends AbstractController
{
    private taxService $taxService;

    public function __construct(ContainerInterface $container)
    {
        $this->taxService = new TaxService($container);
    }

    public function getAllTaxes($request, $response)
    {
        $taxes = $this->taxService->getAllTaxes();
        return $this->json_response($response, $taxes);
    }

    public function createTax($request, $response)
    {
        $body = $this->body_parser($request);
        
        $data = $this->taxService->createTax($body);
        $response = $response->withStatus(201);
        return $this->json_response($response, $data);
    }
}
