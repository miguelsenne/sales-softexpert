<?php

use PHPUnit\Framework\TestCase;
use App\Services\ProductService;

class ProductTest extends TestCase
{

    public function testFindAllProducts(): void
    {
        $productService = $this->createMock(ProductService::class);
        $productService->method('getAllProducts')
            ->willReturn([
                [
                    "id" => 3,
                    "name" => "Product 3",
                    "price" => "200.00",
                    "type_id" => 2
                ],
                [
                    "id" => 2,
                    "name" => "Product 2",
                    "price" => "150.00",
                    "type_id" => 1
                ],
                [
                    "id" => 1,
                    "name" => "Product 1",
                    "price" => "100.00",
                    "type_id" => 1
                ]
            ]);

        $products = $productService->getAllProducts();
        $this->assertEquals(3, count($products));
    }

    public function testCreateProduct(): void
    {
        $productService = $this->createMock(ProductService::class);
        $productService->expects($this->once())
            ->method('createProduct')
            ->with([
                "name" => "Produto 3",
                "price" => 10,
                "type_id" => 1
            ]);

        $productService->createProduct([
            "name" => "Produto 3",
            "price" => 10,
            "type_id" => 1
        ]);
    }
}
