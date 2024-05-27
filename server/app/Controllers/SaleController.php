<?php

namespace App\Controllers;

use Psr\Container\ContainerInterface;
use App\Controllers\AbstractController;
use App\Services\SaleService;

class SaleController extends AbstractController
{
    private saleService $saleService;

    public function __construct(ContainerInterface $container)
    {
        $this->saleService = new SaleService($container);
    }

    public function getAllSales($request, $response)
    {
        $products = $this->saleService->getAllSales();
        return $this->json_response($response, $products);
    }

    public function createSale($request, $response)
    {
        $body = $this->body_parser($request);
        
        $data = $this->saleService->createSale($body);
        $response = $response->withStatus(201);
        return $this->json_response($response, $data);
    }
}
