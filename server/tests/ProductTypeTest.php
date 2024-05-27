<?php

use PHPUnit\Framework\TestCase;
use App\Services\ProductTypeService;

class ProductTypeTest extends TestCase
{
    public function testFindAllProductTypes(): void
    {
        $productTypeService = $this->createMock(ProductTypeService::class);
        $productTypeService->method('getAllProductTypes')
            ->willReturn([
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
            ]);

        $productsTypes = $productTypeService->getAllProductTypes();
        $this->assertEquals(2, count($productsTypes));
    }

    public function testCreateProductType(): void
    {
        $productTypeService = $this->createMock(ProductTypeService::class);
        $productTypeService->expects($this->once())
            ->method('createProductType')
            ->with([
                "name" => "Categoria 3",
                "type_id" => 3
            ]);

        $productTypeService->createProductType([
            "name" => "Categoria 3",
            "type_id" => 3
        ]);
    }
}
