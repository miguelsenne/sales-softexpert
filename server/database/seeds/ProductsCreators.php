<?php

declare(strict_types=1);

use Phinx\Seed\AbstractSeed;

class ProductsCreators extends AbstractSeed
{
    public function run(): void
    {
        $data = [
            [
                'name' => 'Produto 1',
                'price' => 10.99,
                'type_id' => 1,
            ],
            [
                'name' => 'Produto 2',
                'price' => 20.50,
                'type_id' => 2,
            ],
        ];

        $products = $this->table('products');
        $products->insert($data)
                 ->save();
    }
}
