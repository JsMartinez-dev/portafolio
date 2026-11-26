# FlashBid | Subastas en tiempo real

- [Repositorio en GitHub](https://github.com/JsMartinez-dev/FlashBid)
- [Video del demo en YouTube](https://www.youtube.com/watch?v=FhAbjOKOKME)

## Descripción para el portafolio

FlashBid es una aplicación web de subastas en tiempo real con créditos virtuales. Los usuarios pueden publicar artículos, explorar el catálogo y seguir las pujas y la cuenta regresiva desde el detalle de cada subasta. El sistema reserva los créditos de quien lidera, los libera si otra persona supera su oferta y liquida la subasta automáticamente al finalizar. Cada usuario puede consultar el saldo, los movimientos y las subastas que ganó.

El proyecto nació para explorar cómo coordinar actualizaciones en tiempo real y mantener saldos consistentes cuando varias personas pujan por el mismo artículo. Combina WebSockets para comunicar cambios con transacciones en DynamoDB para registrar las pujas y actualizar las reservas de créditos.

## Stack tecnológico

| Área | Tecnologías y uso |
| --- | --- |
| Frontend | React, TypeScript y Vite. |
| Backend | Python y FastAPI para la API de desarrollo, la autenticación y el servicio WebSocket. |
| Datos | Amazon DynamoDB con diseño de tabla única (*Single Table Design*) para usuarios, subastas, pujas y movimientos. |
| Tiempo real y caché | Redis para la caché del detalle, la publicación de eventos y el seguimiento de vencimientos. WebSockets para avisar al navegador sobre cambios en la subasta. |
| Infraestructura | AWS Lambda y API Gateway definidos con AWS CDK. Docker Compose permite ejecutar el entorno con DynamoDB Local o emular los servicios de AWS con LocalStack. |
