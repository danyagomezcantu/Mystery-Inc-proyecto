# Plan de calidad del proyecto 

## 1.- FIABILIDAD 
La fiabilidad mide la capacidad del sistema para funcionar correctamente, aún sometida a condiciones adversas y estrés dentro del sistema 

Nuestra aplicación debe cumplir con las siguientes características:
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
*Uso de la arquitectura de microservicios para hacerla escalable

> Pruebas: 
* Conducir pruebas unitarias y pruebas sobre los módulos de autenticación y manejo de órdenes
* Pruebas de integración entre los servicios de la app, especialmente en los servicios de pagos para manejar devoluciones y errores
* End-to-end tests simulando interaccion de usuarios
* Probar la aplicación en diferentes dispositivos y sistemas operativos
* Probar la aplicación en escenarios con poca disponibilidad de internet o conexión intermitente, asegurando que no se pierdan los datos ya ingresando

>Plan de mantenimiento y actualizaciones
* Realizar actualizaciones regulares a la app, incluyendo nuevos parches de seguridad que se deben incorporar durante la noche o madrugada
* Implementar una actualización que permita a los usuarios dar feedback de los productos y del funcionamiento de la app

## 2.- PERFORMANCE O EFICIENCIA

Qué tan bien una aplicación se comporta en términos de velocidad, tiempos de respuesta, uso de recursos y escalabilidad

Nuestra aplicación debe cumplir con los siguientes indicadores: 
*Latencia de 3 segundos para interacciones críticas como poner una orden, monitoreo de pedido o confirmar método de pago
* Utilización de CPU debajo del 70% durante cargas altas para asegurar la respuesta
* Una tasa de error de menos de 2% en operaciones críticas

### Medidas a tomar 
 
> Optimizar codigo
* Asegurarnos que no haya cálculos innecesarios y optimizar algoritmos

> Implementar mecanismos de caching
* Para datos frecuentemente accesados para reducir el número de queries a la base de datos y mejorar el tiempo de respuesta

> Uso de procesamiento asíncrono
* Para que nos permita realizar operaciones múltiples de manera simultánea, de esta manera podemos manejar las notificaciones de la app

> Usar una infraestructura escalable
* Usar soluciones en la nube con arquitectura de microservicios para tener esta flexibilidad y escalabilidad

## 3.- SEGURIDAD 

Dado que manejamos pagos e información personal confidencial, la seguridad es clave para no perder la confianza de nuestros usuarios. 

Vulnerabilidades identificadas y como mitigar estos riesgos: 

>uso de correos y celulares de los usuarios
* Usar protocolos de encripción como HTTPS para asegurar los datos que se transmiten entre la app y los servidores
* Delegar en terceros la seguridad de las bases de datos con nuestro proveedor cloud
>uso de datos de tarjetas y métodos de pago, conexión con wallets
* Correr las pruebas que se piden en Google Pay y Apple Pay e implementar yellow, green y red paths
* https://developers.google.com/pay/api/android/guides/resources/test-card-suite
>no hay métodos de autenticación extras al momento de iniciar sesión
* Podemos establecer autenticación multi-factor para asegurar que sea el usuario

>Medidas adicionales
* Regularmente actualizar componentes de software y librerias para parchear vulnerabilidades conocidas
* Tener un plan de mantenimiento de la aplicación durante los periodos de inactividad (de 12 a 5 am)

