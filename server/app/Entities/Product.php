<?php

namespace App\Entities;

use Doctrine\ORM\Mapping as ORM;
use App\Entities\ProductType;

#[ORM\Entity]
#[ORM\Table(name: 'products')]
class Product {
    #[ORM\Id]
    #[ORM\Column(type: 'integer')]
    #[ORM\GeneratedValue]
    public $id;

    #[ORM\Column(type: 'string', length: 255)]
    public $name;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 2)]
    public $price;

    #[ORM\ManyToOne(targetEntity: ProductType::class, inversedBy: 'children')]
    protected $type;

    #[ORM\Column(type: 'integer', name: 'type_id', nullable: false)]
    public $type_id;


    public function getId() {
        return $this->id;
    }

    public function getName() {
        return $this->name;
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function getPrice() {
        return $this->price;
    }

    public function setPrice($price) {
        $this->price = $price;
    }

    public function getType()  {
        return $this->type;
    }

    public function setType(ProductType $type) {
        $this->type = $type;
    }

    public function getTypeId() {
        $this->type_id;
    }

    public function setTypeId($type_id) {
        return $this->type_id = $type_id;
    }
}
