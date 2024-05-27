<?php

declare(strict_types=1);

use Phinx\Seed\AbstractSeed;

class SalesCreators extends AbstractSeed
{
    public function run(): void
    {
        $data = [
            "products" => '[{"name":"teste","price":10.99,"qty":2,"type_id":1,"total":21.98,"tax":4.38},{"name":"teste 2","price":20,"qty":2,"type_id":1,"total":40,"tax":8}]',
            "total" => 61.98,
            "totalTaxes" => 12.38
        ];

        $sales = $this->table('sales');
        $sales->insert($data)
                 ->save();
    }
}
