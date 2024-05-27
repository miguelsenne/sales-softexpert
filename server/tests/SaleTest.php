<?php

use PHPUnit\Framework\TestCase;
use App\Services\SaleService;

class SaleTest extends TestCase
{
    public function testFindAllSales(): void
    {
        $saleService = $this->createMock(SaleService::class);
        $saleService->method('getAllSales')
            ->willReturn([
                [
                    "id" => 1,
                    "products" => [
                        [
                            "name" => "teste",
                            "price" => 20,
                            "qty" => 2,
                            "type_id" => 1,
                            "total" => 40,
                            "tax" => 8.8
                        ],
                        [
                            "name" => "teste 2",
                            "price" => 189.9,
                            "qty" => 2,
                            "type_id" => 1,
                            "total" => 379.8,
                            "tax" => 83.55
                        ]
                    ],
                    "total" => "419.80",
                    "totalTaxes" => "92.36"
                ]
            ]);

        $sales = $saleService->getAllSales();
        $this->assertEquals(1, count($sales));
    }

    public function testCreateSale(): void
    {
        $saleService = $this->createMock(SaleService::class);
        $saleService->expects($this->once())
            ->method('createSale')
            ->with([
                "products" => [
                    [
                        "name" => "Product",
                        "price" => 20,
                        "qty" => 2,
                        "type_id" => 2
                    ],
                    [
                        "name" => "Product 2",
                        "price" => 89.9,
                        "qty" => 2,
                        "type_id" => 1
                    ]
                ]
            ]);

        $saleService->createSale([
            "products" => [
                [
                    "name" => "Product",
                    "price" => 20,
                    "qty" => 2,
                    "type_id" => 2
                ],
                [
                    "name" => "Product 2",
                    "price" => 89.9,
                    "qty" => 2,
                    "type_id" => 1
                ]
            ]
        ]);
    }
}
