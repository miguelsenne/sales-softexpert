<?php

declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class CreateProductTypesTable extends AbstractMigration
{
    public function change(): void
    {
        $table = $this->table('product_types');
        $table->addColumn('name', 'string', ['limit' => 255])
              ->addColumn('tax_id', 'integer')
              ->addForeignKey('tax_id', 'taxes', 'id', ['delete' => 'CASCADE', 'update' => 'NO_ACTION'])
              ->create();
    }
}
