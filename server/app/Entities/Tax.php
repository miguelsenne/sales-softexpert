<?php

namespace App\Entities;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: "taxes")]
class Tax {
    #[ORM\Id]
    #[ORM\Column(type: 'integer')]
    #[ORM\GeneratedValue]
    public $id;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 2)]
    public $percentage;

    public function getId() {
        return $this->id;
    }

    public function getPercentage() {
        return $this->percentage;
    }

    public function setPercentage($percentage) {
        $this->percentage = $percentage;
    }
}
