#!/bin/bash

echo "Desplegando la aplicación React a producción..."

# Aquí puedes añadir comandos para desplegar a tu servidor en la nube
# Ejemplo para AWS:
# aws s3 sync build/ s3://my-bucket --delete
# aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"

echo "Despliegue de la aplicación React completado."
