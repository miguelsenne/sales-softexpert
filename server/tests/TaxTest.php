<?php

use PHPUnit\Framework\TestCase;
use App\Services\TaxService;

class TaxTest extends TestCase
{
    public function testFindAllTaxes(): void
    {
        $taxService = $this->createMock(TaxService::class);
        $taxService->method('getAllTaxes')
            ->willReturn([
                [
                    "id" => 3,
                    "percentage" => "50.00"
                ],
                [
                    "id" => 2,
                    "percentage" => "30.00"
                ],
                [
                    "id" => 1,
                    "percentage" => "22.00"
                ]
            ]);

        $taxes = $taxService->getAllTaxes();
        $this->assertEquals(3, count($taxes));
    }

    public function testCreateTax(): void
    {
        $taxService = $this->createMock(TaxService::class);
        $taxService->expects($this->once())
            ->method('createTax')
            ->with([
                "percentage" => 80
            ]);

        $taxService->createTax([
            "percentage" => 80
        ]);
    }
}
