<?php

declare(strict_types=1);

use Phinx\Seed\AbstractSeed;

class TaxesCreators extends AbstractSeed
{
    public function run(): void
    {
        $data = [
            ["percentage" => 20],
            ["percentage" => 10]
        ];

        $sales = $this->table('taxes');
        $sales->insert($data)
            ->save();
    }
}
