<?php

namespace App\Services;

use App\Repositories\ProductTypeRepository;
use App\Repositories\SaleRepository;
use App\Repositories\TaxRepository;
use Psr\Container\ContainerInterface;

class SaleService {
    private SaleRepository $saleRepository;
    private TaxRepository $taxRepository;
    private productTypeRepository $productTypeRepository;

    public function __construct(ContainerInterface $container)
    {
        $this->saleRepository = new SaleRepository($container);
        $this->productTypeRepository = new ProductTypeRepository($container);
        $this->taxRepository = new TaxRepository($container);
    }

    public function getAllSales() {
        return $this->saleRepository->findAll();
    }

    public function createSale($data) {
        $data['products'] = array_map([$this, 'calcTotalItem'], $data['products']);
        $data['products'] = array_map([$this, 'calcTax'], $data['products']);
        $data['total'] = array_reduce($data['products'], [$this, 'calcTotalSale'], 0);
        $data['totalTaxes'] = array_reduce($data['products'], [$this, 'calcTotalTax'], 0);
        return $this->saleRepository->create($data);
    }

    public function calcTotalItem($product) {
        $price = $product['price'];
        $qty = $product['qty'];
        $product['total'] = $price * $qty;
        return $product;
    }

    public function calcTotalSale($total, $product) {
        return $total + $product["total"];
    }

    public function calcTax($product) {
        $total = $product['total'];
        $productType = $this->productTypeRepository->findById($product['type_id']);
        $tax = $this->taxRepository->findById($productType->tax_id);
        $tax = $tax->percentage; 
        $product['tax'] = $total * $tax / 100;
        return $product;
    }

    public function calcTotalTax($totalTax, $product) {
        return $totalTax + $product['tax'];        
    }
}
