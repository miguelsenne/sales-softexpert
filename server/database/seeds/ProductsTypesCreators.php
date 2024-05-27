<?php

declare(strict_types=1);

use Phinx\Seed\AbstractSeed;

class ProductsTypesCreators extends AbstractSeed
{
    public function run(): void
    {
        $data = [
            [
                "id" => 2,
                "name" => "Categoria 2",
                "tax_id" => 2
            ],
            [
                "id" => 1,
                "name" => "Categoria 1",
                "tax_id" => 1
            ]
        ];

        $productsTypes = $this->table('product_types');
        $productsTypes->insert($data)
                 ->save();
    }
}
