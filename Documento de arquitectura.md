Hola Mundo XD

# Documento de arquitectura

![Documento de Arquitectura](https://github.com/0m4r1nIX2002/Mystery-Inc-proyecto/blob/patch-4/arquitectura1.jpg?raw=true)

Decidimos hacer este proyecto con arquitectura de microservicios ya que es la que más se acopla a las necesidades de la aplicación.
En primer lugar, debido a la flexibilidad que nos da, ya que podemos configurar partes específicas de la aplicación según sea necesario sin necesidad de dejar fuera de línea toda la aplicación. Esto nos ayuda a adaptarnos a las demandas cambiantes de un número constante de usuarios. Esta arquitectura nos facilita la tolerancia a fallos; pues, en caso de uno, no se afectan los demás servicios. Y, según nuestro diseño, existen alternativas entre los microservicios por lo que no significaría una ruptura en la aplicación y mantendría la funcionalidad de la aplicación. Finalmente, el mantenimiento y las actualizaciones se simplificarían.

En comparación:
-La arquitectura por capas tiene una agilidad y un despliegue muy bajos. Por lo que, cambiar algo significaría modificar cada capa (aunque es fácil aprender a modificarla). De igual forma, hay que organizar bien cada capa para que funcione correctamente el sistema. Esto dificultaría el uso y mantenimiento de la aplicación tanto de usuarios como de administradores.
-La arquitectura por eventos requiere, como su nombre lo indica, que exista algún cambio del estado inicial para que pueda funcionar. El evento podrían ser las diversas combinaciones que se pueden dar en el menú; sin embargo, las demás acciones estarían faltando. Los principales beneficios que encontramos sobre la aquitectura por eventos es la independencia en los sistemas, y que microservicios tiene módulos con componentes autónomos. Del otro lado, la arquitectura por eventos puede volverse compleja por su naturaleza con muchas interconexiones; por lo que microservicios facilita la identifiación de problemas. (Además, hay muchas cosas que se tiene que probar).
-La principal diferencia con microkernel es que un fallo en el kernel central puede tener consecuencias graves para los módulos conectados al kernel principal, pues todos los demás depende de él para poder funcionar. Esto dificulta el mantenimiento y la posibilidad de hacer mejoras constantes a la aplicación al vernos restringidos a los módulos con funcionalidades más básicas que no están directamente conectados al kernel principal.
-La "Space Base Arquitecture" no funciona para nuestro propósito debido a que, por medio de su unidad de procesamiento, recibe la información de una forma y la entrega diferente. En nuestro caso, queremos mantener la misma información (los pagos, costos, pedidos) a lo largo de todo el proceso para asegurar que se entrega cada orden como el cliente la pidió.
