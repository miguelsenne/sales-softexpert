<?php

use Slim\App;
use App\Controllers\ProductController;
use App\Controllers\ProductTypeController;
use App\Controllers\SaleController;
use App\Controllers\TaxController;

return function (App $app) {
    $app->get('/products', [ProductController::class, 'getAllProducts']);
    $app->post('/products', [ProductController::class, 'createProduct']);
    $app->get('/productsType', [ProductTypeController::class, 'getAllProductTypes']);
    $app->post('/productsType', [ProductTypeController::class, 'createProductType']);
    $app->get('/sales', [SaleController::class, 'getAllSales']);
    $app->post('/sales', [SaleController::class, 'createSale']);
    $app->get('/tax', [TaxController::class, 'getAllTaxes']);
    $app->post('/tax', [TaxController::class, 'createTax']);
};
