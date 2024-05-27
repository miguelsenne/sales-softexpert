<?php

namespace App\Services;

use App\Repositories\ProductTypeRepository;
use Psr\Container\ContainerInterface;

class ProductTypeService {
    private  ProductTypeRepository $productTypeRepository;

    public function __construct(ContainerInterface $container)
    {
        $this->productTypeRepository = new ProductTypeRepository($container);
    }

    public function getAllProductTypes() {
        return $this->productTypeRepository->findAll();
    }

    public function createProductType($data) {
        return $this->productTypeRepository->create($data);
    }
}
