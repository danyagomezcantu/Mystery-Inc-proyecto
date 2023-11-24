# Plan de calidad del proyecto 

## 1.- FIABILIDAD 
La fiabilidad mide la capacidad del sistema para funcionar correctamente, aún sometida a condiciones adversas y estrés dentro del sistema 

Nuestra aplicación debe cumplir con las siguientes características 
* Disponibilidad del 99.5% durante el horario laboral de la cafeteria
* Robusticidad: que es la capacidad de manejar datos inválidos o periodos de alto uso sin fallar u ocasionar errores 
* Resiliente: que se pueda recuperar en menos de 10 minutos después de una caída para disminuir la pérdida de ingresos 

### Medidas a tomar

> Manejo de errores específicos: 
* pestaña de recuperar contraseña en caso de olvidarla en el login
* En una versión posterior establecer un sistema de cancelación de pedidos, mensajería y contacto automatizado entre administrador y usuarios, por el momento errores en pedido se manejaran a través de proveer al administrador el contacto del usuario, por si especificó un cambio en comentarios que no se puede realizar 
* En el primer prototipo se estableció una interacción entre pantallas, pero se debe abrir la posibilidad de saltar a la pantalla de personalización sin pasar automáticamente a la pantalla de pago
* Asegurar que el carrito de compras se mantenga así se salga el usuario de la app
* Asegurar que los puntos solo se resten hasta el momento que se complete la transacción y el pago 

> Manejo de carga: 
* Usar servidores redundantes y técnicas de balanceo de carga para distribuir el tráfico de manera uniforme, asegurando que un punto de falla no arruine el sistema completo

> Pruebas: 
* Conducir pruebas unitarias y pruebas sobre los módulos de autenticación y manejo de órdenes
* Pruebas de integración entre los servicios de la app, especialmente en los servicios de pagos para manejar devoluciones y errores
* End-to-end tests simulando interaccion de usuarios
* Probar la aplicación en diferentes dispositivos y sistemas operativos
* Probar la aplicación en escenarios con poca disponibilidad de internet o conexión intermitente, asegurando que no se pierdan los datos ya ingresando
  





