<?php

namespace App\Controllers;

use Psr\Container\ContainerInterface;
use App\Controllers\AbstractController;
use App\Services\ProductTypeService;

class ProductTypeController extends AbstractController
{
    private productTypeService $productTypeService;

    public function __construct(ContainerInterface $container)
    {
        $this->productTypeService = new ProductTypeService($container);
    }

    public function getAllProductTypes($request, $response)
    {
        $products = $this->productTypeService->getAllProductTypes();
        return $this->json_response($response, $products);
    }

    public function createProductType($request, $response)
    {
        $body = $this->body_parser($request);
        
        $data = $this->productTypeService->createProductType($body);
        $response = $response->withStatus(201);
        return $this->json_response($response, $data);
    }
}
