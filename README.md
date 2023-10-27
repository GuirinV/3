# Proyecto: El consultorio de Víctor

---

## Página web para un consultorio médico privado

<p>
Desarrollo de un sitio web para el Dr. Víctor Cortéz Pérez
</p>
---------------------------------
<p><u>Descripci&oacute;n del Proyecto</u>:&nbsp;</p>

<p>Este proyecto consiste en la creacion de un sitio web para un consultorio privado. La idea surgio de una necesidad real y actual convocada por un medico.</p>

<p>La idea en general es que el sitio dea de facil acceso para los usuarios contando con las posibilidades de acceder a traves de un celular como asi tambien de una tablet y necesariamente de una pc; todos estos dispositivos muy utilizados en la actualidad.</p>

<p>Tambien en cuanto a la visualizacion de la pagina, nos aferramos a que tenga relacion con la tematica del sitio y que la misma sea agradable.</p>

<p>&nbsp;</p>

<p><u>Estado del proyecto</u>: En Progreso</p>

<p>&nbsp;</p>

<p><u>Tecnolog&iacute;as utilizadas</u>:</p>

<ul>
	<li>HTML</li>
	<li>CSS</li>
	<li>JavaScript</li>
	<li>El consumo de API se hizo desde:&nbsp;<a href="https://jsonplaceholder.typicode.com/users">https://jsonplaceholder.typicode.com/users</a></li>
</ul>

<p><u>Personas Contribuyentes</u>:</p>

<ul>
	<li>Guirin, Veronica</li>
	<li>Saavedra,&nbsp;Mateo</li>
	<li>Ruiz,&nbsp;Javier</li>
	<li>Zarantonello,&nbsp;Angelina</li>
</ul>

### HTML

<p>El presente proyecto cuenta con 7 páginas html:</p>
- index es la página principal o landing page, contiene un navegador en la parte superior derecha del header que nos permite acceder a:
	- pacientes.html (autogestión)
	- contacto.html
	- quienes_somos.html
- Cabe mencionar que  la página principal (index.html) se adapta a 3 dispositivos: laptop, tablet y celular.
- En pacientes.html (autogestión) se encuentra un formulario de inicio de sesión con validación mediante JavaScript. 
	- Si iniciamos sesión ingresamos a dashboard.html, donde se utilizó la API antes mencionada.
	- Si en cambio damos click a ¿Perdiste tu contraseña? ingresamos a perdistecontraseña.html que contiene un formulario para ingresar el correo electrónico.
	- ¿No tienes cuenta? registrate, nos lleva a registrarse.html que contiene un formulario de registro. 
- En contacto.html encontramos un formulario de contacto.
- En quienes_somos.html podemos encontrar una breve presentación del profesional a quien va dirigido el sitio web.

### CSS

---

<p>A continuaci&oacute;n se detallan las principales caracteristicas y estilos definidos en el archivo Style.css</p>

<p>Fuentes</p>

<p>Se importa la fuente &quot;Montserrat&quot; de Google Fonts y la establece como la fuente predeterminada para todo el contenido de la pagina.</p>

<p>@import url(&#39;https://fonts.googleapis.com/css2?family=Montserrat&amp;display=swap&#39;);</p>

<p>font-family: &#39;Montserrat&#39;, sans-serif;</p>

<p>Variables de Color</p>

<p>Se definen variables de color personalizadas en el selector :root para facilitar el mantenimiento y la coherencia de la paleta de colores en toda la pagina</p>

<p>:root{<br />
&nbsp;/*Paleta de colores*/<br />
--azul-oscuro: #23518C;<br />
--azul-claro: #2C6CBF;<br />
--celeste: #80B2F2;<br />
--gris: #BFBFBD;<br />
--blanco: #FBFBFB;<br />
--rojo: #FBC899;<br />
}</p>

<p>Estilos Generales</p>

<p>Se establecen estilos generales para los elementos de la pagina como el margen y el padding a cero, y el modelo de caja se configura como border-box</p>

<p>* {<br />
&nbsp; &nbsp; margin: 0;<br />
&nbsp; &nbsp; padding: 0;<br />
&nbsp; &nbsp; box-sizing: border-box;<br />
}</p>

<p>Estilos para el Cuerpo de la Pagina</p>

<p>body {<br />
&nbsp; &nbsp; background-color: white;<br />
}<br />
<br />
Estilos para encabezados<br />
Tama&ntilde;o de fuente y el fondo</p>

<p>main div h1 {<br />
&nbsp; &nbsp; background-color: var(--blanco);<br />
&nbsp; &nbsp; height: 10vh;<br />
&nbsp; &nbsp; color: black;<br />
&nbsp; &nbsp; text-align: center;<br />
&nbsp; &nbsp; font-size: 4vh;<br />
&nbsp; &nbsp; padding-top: 3.5vh;<br />
}<br />
<br />
Estilos para un control deslizante de imagenes</p>

<p>.slider {<br />
&nbsp; &nbsp; width: 100%;<br />
&nbsp; &nbsp; height: 100%;<br />
&nbsp; &nbsp; overflow: hidden;<br />
}</p>

<p>/* Otros estilos relacionados con el slider */</p>

<p>@keyframes switch {<br />
&nbsp; &nbsp; /* Definici&oacute;n de las animaciones */<br />
}<br />
<br />
Estilo para Botones</p>

<p>Incluyendo tama&ntilde;o y colores.<br />
.botones {<br />
&nbsp; &nbsp; height: 30vh;<br />
&nbsp; &nbsp; width: 100%;<br />
&nbsp; &nbsp; background-color: var(--blanco);<br />
&nbsp; &nbsp; /* Otros estilos para botones */<br />
}<br />
<br />
Estilos para especialidades<br />
&nbsp;</p>

<p>.especialidad_container {<br />
&nbsp; &nbsp; /* Estilos para el contenedor de especialidades */<br />
}</p>

<p>/* Estilos para elementos individuales de especialidad */<br />
<br />
Estilo para la seccion de Ubicacion</p>

<p>.fondo_ubicacion {<br />
&nbsp; &nbsp; /* Estilos para el fondo de la secci&oacute;n de ubicaci&oacute;n */<br />
}</p>

<p>/* Estilos para elementos de mapa y enlaces */<br />
<br />
<br />
Pregunta de los medios<br />
Se definen reglas de estilo especificas para diferentes tama&ntilde;os de pantalla, como para dispositivos moviles y tabletas</p>

<p>@media screen and (max-width: 700px) {<br />
&nbsp; &nbsp; /* Estilos espec&iacute;ficos para pantallas de ancho m&aacute;ximo de 700px */<br />
}</p>

<p>@media screen and (min-width: 700px) and (max-width: 1000px) {<br />
&nbsp; &nbsp; /* Estilos espec&iacute;ficos para pantallas de ancho entre 700px y 1000px */<br />
}<br />
&nbsp;</p>

<p>Estilos adicionales<br />
Se aplican a contenedores y formularios, asi como se establecen estilos responsivos para diferentes tama&ntilde;os de pantalla.&nbsp;</p>
