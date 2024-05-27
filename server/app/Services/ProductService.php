<?php

namespace App\Services;

use App\Repositories\ProductRepository;
use App\Services\AbstractService;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ProductService {
    private  ProductRepository $productRepository;

    public function __construct(ContainerInterface $container)
    {
        $this->productRepository = new ProductRepository($container);
    }
    
    public function getAllProducts() {
        $json = $this->productRepository->findAll();
        return $json;
    }

    public function createProduct($data) {
        return $this->productRepository->create($data);
    }
}