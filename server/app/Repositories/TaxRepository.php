<?php

namespace App\Repositories;

use App\Entities\Tax;

class TaxRepository extends AbstractRepository {
    
    public function findById($id) {
        $repository = $this->entityManager->getRepository(Tax::class);
        return $repository->find($id);
    }

    public function findAll() {
        $repository = $this->entityManager->getRepository(Tax::class);

        return $repository->findBy([], ["id" => "DESC"]);        
    }

    public function create($data) {
        $tax = new Tax();
        $tax->setPercentage($data['percentage']);

        $this->entityManager->persist($tax);
        $this->entityManager->flush();
        return $tax;
    }
}
