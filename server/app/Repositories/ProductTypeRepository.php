<?php

namespace App\Repositories;

use Doctrine\ORM\EntityManagerInterface;
use App\Entities\ProductType;
use App\Entities\Tax;

class ProductTypeRepository extends AbstractRepository {

    public function findById($id) {
        $repository = $this->entityManager->getRepository(ProductType::class);
        return $repository->find($id);
    }

    public function findAll() {
        $repository = $this->entityManager->getRepository(ProductType::class);

        return $repository->findBy([], ["id" => "DESC"]);
    }

    public function create($data) {
        $tax_id = $this->entityManager->find(Tax::class, $data['tax_id']);

        $product_type = new ProductType();
        $product_type->setName($data['name']);
        $product_type->setTax($tax_id);
        $product_type->setTaxId($data['tax_id']);

        $this->entityManager->persist($product_type);
        $this->entityManager->flush();
        return $product_type;
    }
}
