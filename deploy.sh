#!/bin/bash

echo "🔨 Buildando projeto..."
npm run build

echo "🧹 Limpando pasta do servidor..."
sudo rm -rf /var/www/frontend/*

echo "📦 Copiando arquivos..."
sudo cp -r dist/* /var/www/frontend/

echo "🔒 Ajustando permissões..."
sudo chown -R www-data:www-data /var/www/frontend

echo "🚀 Deploy concluído!"