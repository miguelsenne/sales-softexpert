<?php

declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class CreateSalesTable extends AbstractMigration
{
    public function change(): void
    {
        $table = $this->table('sales');
        $table->addColumn('products', 'json')
              ->addColumn('total', 'decimal', ['precision' => 10, 'scale' => 2])
              ->addColumn('totalTaxes', 'decimal', ['precision' => 10, 'scale' => 2])
              ->create();
    }
}
