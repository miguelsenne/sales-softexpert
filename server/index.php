<?php

global $entityManager;

use DI\Container;
use Slim\Factory\AppFactory;
use Tuupola\Middleware\CorsMiddleware;

require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$container = new Container();
AppFactory::setContainer($container);

require __DIR__ . '/database/database.php';

$container->set(\Doctrine\ORM\EntityManager::class, $entityManager);

$app = AppFactory::create();

$app->add(new \Tuupola\Middleware\CorsMiddleware([
    "origin" => ["*"],
    "methods" => ["GET", "POST", "PUT", "PATCH", "DELETE"],
    "headers.allow" => ["Authorization", "If-Match", "If-Unmodified-Since", "Cache-Control", "content-type"],
    "headers.expose" => ["Authorization", "Etag"],
    "credentials" => true,
    "cache" => 60,
]));

(require __DIR__ . '/app/routes.php')($app);

$app->run();
