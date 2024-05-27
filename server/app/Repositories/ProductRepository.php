<?php

namespace App\Repositories;

use App\Entities\Product;
use App\Repositories\AbstractRepository;
use App\Entities\ProductType;

class ProductRepository extends AbstractRepository {

    public function findAll() {
        $repository = $this->entityManager->getRepository(Product::class);

        return $repository->findBy([], ["id" => "DESC"]);        
    }

    public function create($data) {
        $productType = $this->entityManager->find(ProductType::class, $data['type_id']);

        $product = new Product();
        $product->setName($data['name']);
        $product->setPrice($data['price']);
        $product->setType($productType);
        $product->setTypeId($data['type_id']);
 
        $this->entityManager->persist($product);
        $this->entityManager->flush();
        return $product;
    }
}
