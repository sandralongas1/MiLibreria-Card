# MiLibreria-Card
  Este código define un componente interactivo de tarjeta 3D, donde puedes personalizar los textos de la parte frontal y reversa, y al hacer clic en la tarjeta, esta se gira para mostrar el reverso.


# Tarjeta Interactiva (Web Component)
  Este proyecto define un componente personalizado de tarjeta 3D interactiva utilizando Web Components. El componente permite mostrar una tarjeta con un lado frontal y reverso, que puede ser girada con un clic.

# Características
  Frontal y reverso: Puedes definir contenido para ambos lados de la tarjeta (título, subtítulo, y descripción).
  Efecto 3D: La tarjeta tiene un efecto visual de giro 3D que se activa al hacer clic en ella.
  Imagen personalizable: Puedes incluir una imagen en el frente de la tarjeta mediante un atributo.
  Estilo personalizable: El componente utiliza un shadow DOM, lo que permite mantener el estilo y el contenido encapsulados sin interferir con el resto de la página.
# Instalación
  Descarga o incluye el archivo Card-SL.js en tu proyecto.
  Si usas un proyecto basado en módulos, puedes importar el archivo JavaScript de la siguiente manera:
  
  <script src="ruta/a/librerias/Card-SL.js" defer></script>
  Si no estás usando módulos, simplemente incluye el archivo en tu HTML antes de cerrar la etiqueta </body>.

# Uso del Componente
  El componente personalizado <mi-card> se puede usar en cualquier parte de tu HTML. A continuación se muestra un ejemplo de cómo integrarlo:
    Ejemplo de uso:
  
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tarjeta Interactiva</title>
        <script src="librerias/Card-SL.js" defer></script>
    </head>
    <body>
        <mi-card 
            tituloF="Flamencos" 
            tituloR="Flamencos en su hábitat natural" 
            subtituloF="Aves elegantes" 
            subtituloR="Descripción detallada" 
            descripcionF="Los flamencos son conocidos por su color rosado y sus largas patas." 
            descripcionR="Los flamencos habitan en humedales y áreas con agua salada, siendo un símbolo de equilibrio y belleza en la naturaleza."
            imagen="img/ponTufoto.jpg">  
        </mi-card>
    </body>
    </html>

# Atributos Personalizados
  Puedes personalizar los siguientes atributos del componente:
  
  - tituloF (opcional): Título que aparece en el frente de la tarjeta.
  - subtituloF (opcional): Subtítulo que aparece en el frente de la tarjeta.
  - descripcionF (opcional): Descripción que aparece en el frente de la tarjeta. Si no se define, este elemento será ocultado.
  - tituloR (opcional): Título que aparece en el reverso de la tarjeta. Si no se define, este elemento será ocultado.
  - subtituloR (opcional): Subtítulo que aparece en el reverso de la tarjeta. Si no se define, este elemento será ocultado.
  - descripcionR (opcional): Descripción que aparece en el reverso de la tarjeta.
  - imagen (opcional): Ruta de la imagen que aparece en el frente de la tarjeta. Si no se define, se mostrará una imagen por defecto.
    Ejemplo con atributos vacíos:
    <mi-card 
        tituloF="Flamencos" 
        tituloR="" 
        subtituloF="Aves elegantes" 
        subtituloR="" 
        descripcionF="" 
        descripcionR="Los flamencos, con su color rosado, son símbolos de elegancia y equilibrio en la naturaleza."
        imagen="img/ponTufoto.jpg">
    </mi-card>
# Efecto de Giro
  Al hacer clic sobre la tarjeta, se activará el efecto de giro, mostrando el reverso de la tarjeta. 
  Puedes definir los textos y el contenido para el reverso de la tarjeta a través de los atributos como tituloR, subtituloR y descripcionR.

# Estilos
  El componente está diseñado con un shadow DOM que encapsula su estilo y contenido. Los estilos básicos incluyen:

- Efectos de sombra y bordes redondeados para una apariencia moderna y limpia.
- Gradientes de fondo tanto para el frente como para el reverso de la tarjeta.
- Animación de rotación en el eje Y, que crea un efecto 3D al hacer clic.

# Modificación de Estilos
  Aunque el estilo está encapsulado, puedes sobrescribir las reglas CSS a nivel global usando la propiedad ::part o añadiendo clases adicionales si es necesario. Por ejemplo:
  mi-card::part(card-front) {
      background: lightblue;
  }
  # Compatibilidad
  Este componente es compatible con los principales navegadores modernos que soportan Web Components (Chrome, Firefox, Safari, Edge). Asegúrate de que tu navegador sea compatible antes de usar el componente.
