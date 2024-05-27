# Guia de Configuração - Aplicação de teste SoftExpert

Este guia fornece instruções sobre como configurar e executar a aplicação de teste SoftExpert.

## Pré-requisitos

Antes de prosseguir, certifique-se de ter instalado em seu sistema:

- Docker: [Instruções de instalação](https://docs.docker.com/get-docker/)
- Docker Compose: [Instruções de instalação](https://docs.docker.com/compose/install/)

## Configuração

### Servidor (Backend)

1. Abra um terminal.
2. Navegue até o diretório do servidor:
    ```bash
    cd server
    ```
3. Execute o seguinte comando para iniciar o backend:
    ```bash
    docker-compose up -d
    ```

 Após a inicialização bem-sucedida, execute os seguintes comandos para gerar as migrações e as seeds:

4. Execute o seguinte comando para gerar as migrations:
    ```bash
    docker-compose exec backend php vendor/bin/phinx migrate
    ```

5. Execute os seguintes comandos para gerar as seeds:
    ```bash
    docker-compose exec backend php vendor/bin/phinx seed:run -s TaxesCreators
    docker-compose exec backend php vendor/bin/phinx seed:run -s ProductsTypesCreators
    docker-compose exec backend php vendor/bin/phinx seed:run -s ProductsCreators
    docker-compose exec backend php vendor/bin/phinx seed:run -s SalesCreators
    ```

O backend estará acessível em `http://localhost:8080`.

### Aplicação (Frontend)

1. Abra um novo terminal.
2. Navegue até o diretório do aplicativo:
    ```bash
    cd app
    ```
3. Execute o seguinte comando para iniciar a aplicação:
    ```bash
    docker-compose up -d
    ```

A aplicação estará acessível em `http://localhost:3000`.