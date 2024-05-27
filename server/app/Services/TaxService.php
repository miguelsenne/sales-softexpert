<?php

namespace App\Services;

use App\Repositories\TaxRepository;
use Psr\Container\ContainerInterface;

class TaxService {
    private TaxRepository $taxRepository;

    public function __construct(ContainerInterface $container)
    {
        $this->taxRepository = new TaxRepository($container);
    }

    public function getTax($id) {
        return $this->taxRepository->findById($id);
    }

    public function getAllTaxes() {
        return $this->taxRepository->findAll();
    }

    public function createTax($data) {
        return $this->taxRepository->create($data);
    }
}
