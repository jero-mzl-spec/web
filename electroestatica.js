document.addEventListener('DOMContentLoaded', () => {

  const sections = [
    {
      title: "1.1 Introducción y Bases Conceptuales",
      content: `<p>La Electrostática es la rama de la física que estudia los fenómenos asociados a las cargas eléctricas en reposo. Su estudio sienta las bases para comprender toda la teoría electromagnética.<br>
      <br>
      Base Física: La Carga Eléctrica<br>
      <br>
      · Naturaleza: La carga eléctrica es una propiedad fundamental de la materia, tal como la masa. Existen dos tipos: positiva (protón) y negativa (electrón).<br>
      <br>
      · Cuantización: La carga está cuantizada. La carga elemental (e) es la del electrón (e ≈ -1.602 × 10⁻¹⁹ C) o del protón (+e). Toda carga observable es un múltiplo entero de esta carga elemental.<br>
      <br>
      · Ley de Conservación: La carga eléctrica neta de un sistema aislado se conserva. No se crea ni se destruye, solo se transfiere.<br>
      <br>
      · Unidad: La unidad de carga en el Sistema Internacional (SI) es el Culombio (C).</p>`
    },
    {
      title: "1.2 Historia y Experimentos",
      content: `<p>· Antigüedad: Los griegos (Tales de Mileto, ~600 a.C.) observaron que el ámbar (ἤλεκτρον, ēlektron) frotado atraía pequeños objetos. Fenómeno curioso sin explicación.<br>
      <br>
      · Siglos XVI-XVII: William Gilbert (1544-1603) realiza un estudio sistemático de la "electricidad" (término que acuña a partir del griego) y diferencia los fenómenos eléctricos de los magnéticos.<br>
      <br>
      · Siglo XVIII:<br>
      <br>
      · Stephen Gray (1729): Descubre la conducción eléctrica, diferenciando entre conductores y aislantes.<br>
      <br>
      · Charles Du Fay (1733): Propone la existencia de dos tipos de "fluido eléctrico" (vítreo y resinoso).<br>
      <br>
      · Benjamin Franklin (1747-1752): Postula la teoría del fluido único. Define los conceptos de carga positiva y negativa. Inventa el pararrayos, demostrando la naturaleza eléctrica de los rayos con su famoso experimento de la cometa (extremadamente peligroso, no replicar).<br>
      <br>
      · Joseph Priestley (1766) y Henry Cavendish (1771): Sugieren, basándose en experimentos con cascarones esféricos, que la fuerza eléctrica sigue una ley del inverso del cuadrado, análoga a la gravedad de Newton.<br>
      <br>
      · Charles-Augustin de Coulomb (1785): Confirma experimentalmente con su balanza de torsión la ley que lleva su nombre, estableciendo la electrostática como una ciencia matemática precisa.<br>
      <br>
      · Siglo XIX:<br>
      <br>
      · Siméon Denis Poisson y Carl Friedrich Gauss: Desarrollan el formalismo matemático avanzado (ley de Gauss, ecuación de Poisson).<br>
      <br>
      · Michael Faraday (1791-1867): Introduce el concepto fundamental de campo y de líneas de fuerza, visualizándolas con sus  experimentos de "patrones de limaduras". Trabaja extensamente en la inducción electromagnética, uniendo electricidad y magnetismo.<br>
      <br>
      · Síntesis Final (1873): James Clerk Maxwell publica su Tratado sobre Electricidad y Magnetismo, unificando la electricidad, el magnetismo y la óptica en una sola teoría: el electromagnetismo. Las leyes de la electrostática se convierten en un caso particular de sus célebres ecuaciones.
</p>`
    },
    {
      title: "1.3 Materiales y Comportamiento",
      content: `<p>La manera en que un material responde a la presencia de cargas eléctricas o a un campo eléctrico aplicado depende de la movilidad de sus portadores de carga y de la estructura atómica o molecular. Por eso distinguimos principalmente conductores y aislantes (dieléctricos), aunque en la práctica existen materiales intermedios (semiconductores) que no trataremos aquí.<br>
      <br>
      Conductores<br>
      <br>
      Estructura y portadores libres<br>
      <br>
      En los metales, los electrones de valencia forman lo que se conoce como “gas de electrones libres” o mar de electrones.<br>
      <br>
      Estos electrones no están fuertemente ligados a un núcleo en particular, lo que les permite moverse con gran libertad a través de la red cristalina metálica.<br>
      <br>

      Equilibrio electrostático<br>
      <br>

      Si se coloca un conductor en un campo eléctrico externo, los electrones libres se desplazan rápidamente hasta que el campo interno total se anula.<br>
      <br>

      El resultado es que el campo eléctrico en el interior de un conductor en equilibrio electrostático es cero.<br>
      <br>

      Esta redistribución ocurre en tiempos extremadamente cortos (del orden de nanosegundos).<br>
      <br>

      Distribución de la carga<br>
      <br>

      Toda la carga neta de un conductor aislado reside en su superficie externa.<br>
      <br>

      La densidad de carga superficial no es uniforme: se concentra más en las zonas de radio de curvatura pequeño (puntas o aristas).<br>
      <br>

      Este principio es clave en el diseño de pararrayos y en el fenómeno de la corona eléctrica.<br>
      <br>

      Potencial constante<br>
      <br>

      Como no existe campo interno, cualquier punto del volumen conductor está al mismo potencial eléctrico.<br>
      <br>

      Se dice que el conductor es una superficie equipotencial, por lo que mover una carga dentro de él no requiere trabajo.<br>
      <br>

      Ejemplos y aplicaciones<br>
      <br>

      Metales como cobre, aluminio, plata.<br>
      <br>

      Cables eléctricos, blindajes contra campos eléctricos, jaula de Faraday (una estructura conductora que bloquea campos externos).<br>
      <br>

      Aislantes o Dieléctricos<br>
      <br>

      Movilidad restringida de las cargas<br>
      <br>

      En materiales dieléctricos los electrones están fuertemente ligados a sus núcleos.<br>
      <br>

      No hay electrones libres que puedan desplazarse grandes distancias, por lo que no pueden conducir corriente eléctrica de forma significativa.<br>
      <br>

      Polarización eléctrica<br>
      <br>
      Cuando se aplica un campo eléctrico externo:<br>
      <br>

      Polarización electrónica: las nubes de electrones en cada átomo se deforman ligeramente, desplazándose en dirección opuesta al campo.<br>
      <br>

      Polarización orientacional: en moléculas polares (como el agua) los dipolos permanentes se reorientan alineándose con el campo.<br>
      <br>

      El resultado es un campo inducido interno que reduce el campo neto dentro del material.<br>
      <br>

      Constante dieléctrica (permitividad relativa κ)<br>
      <br>

      Mide cuánto disminuye el campo eléctrico en el interior del material comparado con el vacío.<br>
      <br>

      Una constante dieléctrica alta indica gran capacidad de almacenamiento de energía eléctrica (importante en capacitores).<br>
      <br>

      Comportamiento ante altas tensiones<br>
      <br>

      Si el campo aplicado supera un cierto valor crítico (campo de ruptura), incluso un dieléctrico puede volverse conductor: se produce una descarga eléctrica o ruptura dieléctrica, como el arco eléctrico en el aire o el fallo de un aislante.<br>
      <br>

      Ejemplos y aplicaciones<br>
      <br>

      Vidrio, porcelana, plásticos, aceites aislantes, mica.<br>
      <br>

      Usados en recubrimientos de cables, capacitores, aisladores de líneas de alta tensión.<br>
      <br>

      Relación entre ambos en sistemas electrostáticos<br>
      <br>

      Cuando un conductor y un dieléctrico se combinan, por ejemplo en un capacitor, el dieléctrico incrementa la capacitancia porque permite un campo más débil para la misma carga, almacenando más energía.<br>
      <br>

      En fenómenos naturales como una tormenta eléctrica, el aire actúa como dieléctrico hasta que la diferencia de potencial es tan grande que ocurre la ruptura (el rayo).</p>`
    },
    {
      title: "1.4 Aplicaciones Tecnológicas",
      content: `<p>La electrostática no es solo una teoría abstracta; tiene innumerables aplicaciones prácticas:<br>
      <br>
      1. Fotocopiadoras e Impresoras Láser: Utilizan la atracción electrostática. Un tambor fotosensible se carga uniformemente. Un láser "descarga" selectivamente las áreas que formarán la imagen. El tóner (polvo con carga opuesta) se adhiere solo a las áreas cargadas y luego se transfiere electrostáticamente al papel.<br>
      <br>
      2. Filtros de Aire (Precipitadores Electrostáticos): Empleados en fábricas y centrales térmicas. Los gases de escape pasan por una serie de electrodos que cargan las partículas de humo. Estas son luego atraídas por placas con carga opuesta, limpiando el aire.<br>
      <br>
      3. Pintura Electrostática: Las gotas de pintura se cargan eléctricamente al ser rociadas. El objeto a pintar (como la carrocería de un coche) se conecta a tierra (carga opuesta). Esto hace que la pintura se adhiera de manera uniforme, incluso en zonas de difícil acceso, reduciendo el desperdicio.<br>
      <br>
      4. Generadores de Alto Voltaje (Generador de Van de Graaff): Acelera partículas cargadas para experimentos de física nuclear. También es un demostrador clásico de los efectos de la carga en conductores.<br>
      <br>
      5. Dispositivos Electrónicos (Capacitores): Un capacitor almacena energía en forma de campo eléctrico entre sus placas. Son componentes esenciales en casi todos los circuitos electrónicos (teléfonos, computadoras, fuentes de alimentación) para filtrar señales, almacenar energía temporalmente y estabilizar voltajes.<br>
      <br>
      6. Investigación Científica: Aceleradores de partículas como el LHC (Gran Colisionador de Hadrones) utilizan potentes campos eléctricos para acelerar partículas subatómicas a velocidades cercanas a la de la luz.<br>
      <br>
      7. Biología y Medicina: Técnicas como la electroforesis separan moléculas (como ADN o proteínas) según su carga y tamaño usando un campo eléctrico.
</p>`
    }
  ];

  const allowMultipleOpen = false;


  document.querySelectorAll('.accordion').forEach( (accordionEl) => {

    sections.forEach( (sec, idx) => {
      const item = document.createElement('div');
      item.className = 'accordion-item';


      const headerId = `${accordionEl.id}-header-${idx}`;
      const panelId  = `${accordionEl.id}-panel-${idx}`;

      const button = document.createElement('button');
      button.className = 'accordion-header';
      button.setAttribute('aria-expanded','false');
      button.setAttribute('aria-controls', panelId);
      button.id = headerId;
      button.type = 'button';


      const titleSpan = document.createElement('span');
      titleSpan.className = 'accordion-title';
      titleSpan.innerHTML = sec.title;


      const icon = document.createElement('span');
      icon.className = 'accordion-icon';
      icon.innerHTML = '▼'; 

      button.appendChild(titleSpan);
      button.appendChild(icon);


      const panel = document.createElement('div');
      panel.className = 'accordion-panel';
      panel.id = panelId;
      panel.setAttribute('role','region');
      panel.setAttribute('aria-labelledby', headerId);

      const panelInner = document.createElement('div');
      panelInner.className = 'accordion-panel-content';
      panelInner.innerHTML = sec.content;

      panel.appendChild(panelInner);

      item.appendChild(button);
      item.appendChild(panel);
      accordionEl.appendChild(item);



      button.addEventListener('click', () => {
        const isOpen = button.getAttribute('aria-expanded') === 'true';
        if (isOpen) {
          closePanel(button, panel);
        } else {
          if (!allowMultipleOpen) {

            accordionEl.querySelectorAll('.accordion-header[aria-expanded="true"]').forEach(h => {
              const otherPanel = document.getElementById(h.getAttribute('aria-controls'));
              closePanel(h, otherPanel);
            });
          }
          openPanel(button, panel);
        }
      });


      button.addEventListener('keydown', (ev) => {
        const key = ev.key;
        const headers = Array.from(accordionEl.querySelectorAll('.accordion-header'));
        const currentIndex = headers.indexOf(button);

        if (key === 'ArrowDown') {
          ev.preventDefault();
          const next = headers[(currentIndex + 1) % headers.length];
          next.focus();
        } else if (key === 'ArrowUp') {
          ev.preventDefault();
          const prev = headers[(currentIndex - 1 + headers.length) % headers.length];
          prev.focus();
        } else if (key === 'Home') {
          ev.preventDefault();
          headers[0].focus();
        } else if (key === 'End') {
          ev.preventDefault();
          headers[headers.length - 1].focus();
        } else if (key === 'Enter' || key === ' ') {
          ev.preventDefault();
          button.click();
        }
      });

    }); 
  }); 


  function openPanel(button, panel) {
    button.setAttribute('aria-expanded','true');
    panel.style.maxHeight = panel.scrollHeight + 'px';
  }
  function closePanel(button, panel) {
    button.setAttribute('aria-expanded','false');
    panel.style.maxHeight = null;
  }

  
});