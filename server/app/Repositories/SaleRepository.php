<?php

namespace App\Repositories;

use App\Entities\Sale;

class SaleRepository extends AbstractRepository {

    public function findAll() {
        $repository = $this->entityManager->getRepository(Sale::class);

        return $repository->findBy([], ["id" => "DESC"]);        
    }

    public function create($data) {
        $sale = new Sale();
        $sale->setProducts($data['products']);
        $sale->setTotal($data['total']);
        $sale->setTotalTaxes($data['totalTaxes']);

        $this->entityManager->persist($sale);
        $this->entityManager->flush();
        return $sale;
    }
}
