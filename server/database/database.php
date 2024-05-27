<?php

use Doctrine\ORM\ORMSetup;
use Doctrine\ORM\EntityManager;
use Doctrine\DBAL\DriverManager;

$dbConfig = [
    'driver' => 'pdo_pgsql',
    'host' => $_ENV['DB_HOST'],
    'dbname' => $_ENV['DB_NAME'],
    'user' => $_ENV['DB_USER'],
    'password' => $_ENV['DB_PASS'],
];

$config = ORMSetup::createAttributeMetadataConfiguration([__DIR__."../app/Entities"], true);
$connection = DriverManager::getConnection($dbConfig, $config);
$entityManager = new EntityManager($connection, $config);
