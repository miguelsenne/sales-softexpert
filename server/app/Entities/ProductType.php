<?php

namespace App\Entities;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: 'product_types')]
class ProductType {
    #[ORM\Id]
    #[ORM\Column(type: 'integer')]
    #[ORM\GeneratedValue]
    public $id;

    #[ORM\Column(type: 'string', length: 255)]
    public $name;

    #[ORM\ManyToOne(targetEntity: Tax::class, inversedBy: 'children')]
    protected $tax;

    #[ORM\Column(type: 'integer', name: 'tax_id', nullable: false)]
    public $tax_id;

    public function getId() {
        return $this->id;
    }

    public function getName() {
        return $this->name;
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function getTax()  {
        return $this->tax;
    }

    public function setTax(Tax $tax) {
        $this->tax = $tax;
    }

    public function getTaxId() {
        return $this->name;
    }

    public function setTaxId($tax_id) {
        $this->tax_id = $tax_id;
    }
}
