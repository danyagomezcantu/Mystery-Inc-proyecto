# Mystery-Inc-proyecto

## Descripción del proyecto
El objetivo de este proyecto fue crear una aplicación mediante la cual la comunidad itam pudiera hacer pedidos de bebidas y comida a la cafetería para después recogerlos, eliminando así los tiempos de espera que a veces impiden que los alumnos se alimenten sanamente por la ajetreada vida dentro de la institución. 

##Alcance del proyecto 

Se creará una aplicación disponible para iOS y Android en la cual se pueda iniciar sesión con su correo del itam, cuente con un menú de bebidas y otro de comida, una pestaña de personalización de pedido en la cual se puedan hacer comentarios de preparación, una pestaña de pagos en la cual se pueda elegir pagar con efectivo contra entrega, con billetera digital o añadir y guardar la tarjeta de crédito o débito. Asimismo, se podrán acumular puntos proporcionales al monto del pedido que después se puedan canjear por descuentos en pedidos posteriores. Tendremos una vista de administrador en la cual se puedan añadir o quitar platillos, habilitarlos o deshabilitarlos de acuerdo a disponibilidad en tiempo real, además de ver estadísticas diarias sobre el monto vendido.

##Lista de requerimientos funcionales 

###Iniciar sesión 
>*Prioridad alta*
El usuario puede iniciar sesión con su correo del itam y una contraseña.
Criterios de aceptación: Una página de login en la que se pueda crear cuenta, recuperar contraseña y tener un login alternativo para administradores de la cafeteria. 

###El personal de la cafeteria quita o añade platillos y modifica la disponibilidad en caso de que se acabe alguno. 
>*Prioridad alta*

*Casos de uso: Añadir platillo al menu*

Precondiciones:

*La persona descarga y entra a su aplicación de administrador con sus contraseñas

Postcondiciones:

*El platillo se encuentra publicado y listo para ordenarse en la aplicación de usuarios

Main flow:

El administrador tiene una pestaña para modificar menú
*En esta pestaña cuenta con tres opciones: agregar platillo, eliminar platillo y quitar disponibilidad
*selecciona la pestaña de agregar platillo
*escoge un nombre, pone una lista de ingredientes principales
*escoge un precio
*añade el platillo al menú al dar click en submit

Flujo alternativo:

*el administrador no tiene permisos para modificar el menú y debe pedirlos a través de una solicitud a la cafeteria
*el administrador no conoce todos los ingredientes y debe preguntar

###Los estudiantes personalizan sus platillos o bebidas para indicar ingredientes que no les agraden o alergias alimentarias 
>*Prioridad media*

*Caso de uso:El estudiante tiene alergias alimentarias o ciertas preferencias por lo que modifica los ingredientes base de su pedido*

Precondiciones:
*el usuario debe tener una cuenta y hacer login

Postcondiciones:

*Los platillos o bebidas quedan añadidos al carrito con las especificaciones y el pedido se entrega con ellas

Main flow:

*el estudiante inicia sesión o crea una cuenta
*el estudiante entra a la página de inicio en donde se encuentra el menú categorizado por bebidas y comidas
*revisa el menú y selecciona platillos o bebidas
*al seleccionar aparece una pantalla de personalizar pedido que es diferente de acuerdo a si es bebida o platillo y permite modificar temperatura, quitar ingredientes a través de check boxes o hacer algún comentario especial
*una vez que se personaliza aparece el botón de añadir al carrito con el total de acuerdo a los ingredientes

Flujo alternativo:

*lo que el estudiante necesita quitar del platillo no se encuentra y para ello se coloca una caja de comentarios para cosas muy específicas

