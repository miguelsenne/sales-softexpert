<?php

namespace App\Controllers;

use Psr\Container\ContainerInterface;
use App\Controllers\AbstractController;
use App\Services\ProductService;

class ProductController extends AbstractController
{
    private productService $productService;

    public function __construct(ContainerInterface $container)
    {
        $this->productService = new productService($container);
    }

    public function getAllProducts($request, $response)
    {
        $products = $this->productService->getAllProducts();
        return $this->json_response($response, $products);
    }

    public function createProduct($request, $response)
    {
        $body = $this->body_parser($request);
        
        $data = $this->productService->createProduct($body);
        $response = $response->withStatus(201);
        return $this->json_response($response, $data);
    }
    
}
