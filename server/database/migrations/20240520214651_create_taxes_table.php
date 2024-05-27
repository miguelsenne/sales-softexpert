<?php

declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class CreateTaxesTable extends AbstractMigration
{
    public function change(): void
    {
        $table = $this->table('taxes');
        $table->addColumn('percentage', 'decimal', ['precision' => 10, 'scale' => 2])
              ->create();
    }
}
