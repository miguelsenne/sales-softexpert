<?php

namespace App\Entities;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: "sales")]
class Sale {
    #[ORM\Id]
    #[ORM\Column(type: 'integer')]
    #[ORM\GeneratedValue]
    public $id;

    #[ORM\Column(type: 'json', precision: 10, scale: 2)]
    public $products;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 2)]
    public $total;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 2)]
    public $totalTaxes;

    public function getId() {
        return $this->id;
    }

    public function products() {
        return $this->products;
    }

    public function setProducts($products) {
        $this->products = $products;
    }

    public function getTotal() {
        return $this->total;
    }

    public function setTotal($total) {
        $this->total = $total;
    }

    public function getTotalTaxes() {
        return $this->totalTaxes;
    }
    
    public function setTotalTaxes($totalTaxes) {
        $this->totalTaxes = $totalTaxes;
    }
}
