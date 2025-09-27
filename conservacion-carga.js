document.addEventListener('DOMContentLoaded', () => {

  const sections = [
    {
      title: "2.1 Principio de Superposición",
      content: `<p><h3>Principio de Superposición</h3><br>
      <br>
        El principio de superposición establece que la influencia total que varias cargas ejercen en un punto del espacio es la suma vectorial de las influencias que cada carga produciría por separado, suponiendo que las demás no están presentes.<br>
      <br>

        En otras palabras, la presencia de una carga no altera el efecto que otra carga produce sobre un punto o sobre una tercera carga: las contribuciones se suman linealmente.<br>
      <br>

        <h3>1. Fundamento Físico</h3><br>
      <br>

        <h3>Linealidad de la Ley de Coulomb:</h3><br>
      <br>
        La fuerza entre dos cargas puntuales es proporcional a <br>
      <br>
        𝑞
        1
        𝑞
        2
        q
        1
        	​

        q
        2
        	​
<br>
      <br>
         e inversamente proporcional a <br>
      <br>
        𝑟
        2
        r
        2
        .<br>
      <br>
        Esa relación no depende de otras cargas cercanas, siempre que el medio (permitividad del espacio) no cambie.<br>
      <br>

        Como la ecuación de la fuerza eléctrica es lineal, podemos aplicar suma vectorial sin introducir términos de interacción cruzada.<br>
      <br>

        <h3>2. Enunciado Formal</h3><br>
      <br>

        Si hay <br>
      <br>
        𝑛<br>
      <br>
        n cargas puntuales <br>
      <br>
        𝑞
        1
        ,
        𝑞
        2
        ,
        …
        ,
        𝑞
        𝑛
        q
        1
            ​

        ,q
        2
            ​

        ,…,q
        n
            ​
<br>
      <br>
        en reposo, la fuerza neta sobre una carga de prueba <br>
      <br>
        𝑞
        0
        q
        0
            ​
<br>
      <br>
        situada en el punto<br>
      <br> 
        𝑟<br>
      <br>
        r es:<br>
      <br>

        𝐹
        (
        𝑟
        )
        =
        ∑
        𝑖
        =
        1
        𝑛
        𝐹
        𝑖<br>
      <br>
        F(r)=
        i=1
        ∑
        n
            ​

        F
        i
            ​

<br>
      <br>
        donde cada <br>
      <br>
        𝐹
        𝑖
        F
        i
            ​
<br>
      <br>
        es la fuerza que la carga <br>
      <br>
        𝑞
        𝑖
        q
        i
            ​
<br>
      <br>
        ejercería sola:<br>
      <br>

        𝐹
        𝑖
        =
        𝑘
         
        𝑞
        0
        𝑞
        𝑖
        ∣
        𝑟
        −
        𝑟
        𝑖
        ∣
        2
         
        𝑟
        ^
        𝑖
        F
        i
            ​

        =k<br>
      <br>
        ∣r−r
        i
            ​

        ∣
        2
        q
        0
            ​

        q
        i
            ​

            ​

        r
        ^
        i
            ​

<br>
      <br>
        El campo eléctrico también obedece este principio:<br>
      <br>

        𝐸
        (
        𝑟
        )
        =
        ∑
        𝑖
        =
        1
        𝑛
        𝐸
        𝑖<br>
      <br>
        E(r)=
        i=1
        ∑
        n
            ​

        E
        i
            ​

<br>
      <br>
        ya que <br>
      <br>
        𝐸
        𝑖
        =
        𝐹
        𝑖
        /
        𝑞
        0
        E
        i
            ​

        =F
        i
            ​

        /q
        0
            ​

        .<br>
      <br>

        <h3>3. Consecuencias Importantes</h3><br>
      <br>

        Independencia: Cada carga contribuye con un campo que no depende de la existencia de las otras.<br>
      <br>

        Linealidad: El resultado es una suma vectorial, lo que significa que hay que considerar magnitud y dirección.
        Las componentes en los ejes x, y, z se suman por separado.<br>
      <br>

        Campos continuos: Para distribuciones continuas de carga, la suma se reemplaza por una integral:<br>
      <br>

        𝐸
        (
        𝑟
        )
        =
        1
        4
        𝜋
        𝜀
        0
        ∫
        𝜌
        (
        𝑟
        ′
        )
        (
        𝑟
        −
        𝑟
        ′
        )
        ∣
        𝑟
        −
        𝑟
        ′
        ∣
        3
        𝑑
        𝑉
        ′<br>
      <br>
        E(r)=
        4πε
        0
            ​

        1
            ​

        ∫
        ∣r−r
        ′
        ∣
        3
        ρ(r
        ′
        )(r−r
        ′
        )
            ​

        dV
        ′
<br>
      <br>
        donde <br>
      <br>
        𝜌
        (
        𝑟
        ′
        )
        ρ(r
        ′
        ) es la densidad de carga.<br>
      <br>

        <h3>4. Ejemplos Prácticos</h3><br>
      <br>

        a) Tres cargas en línea<br>
      <br>
        Imagina dos cargas fijas <br>
      <br>
        +
        𝑞
        +q y 
        −
        𝑞
        −q y una carga de prueba en el punto medio.<br>
      <br>
        La fuerza neta es la diferencia de las fuerzas de cada una, calculada individualmente.
        Si están a la misma distancia, la fuerza neta se dirige hacia la carga negativa.<br>
      <br>

        b) Campo de una placa cargada<br>
      <br>
        Una lámina infinita con densidad superficial <br>
      <br>
        𝜎
        σ puede pensarse como un conjunto infinito de cargas puntuales.<br>
      <br>
        Aplicando superposición e integrando, se obtiene un campo constante <br>
      <br>
        𝐸
        =
        𝜎
        /
        (
        2
        𝜀
        0
        )
        E=σ/(2ε
        0
            ​

        ).<br>
      <br>

        c) Distribución esférica<br>
      <br>
        Para una esfera uniformemente cargada, cada elemento de volumen contribuye.<br>
      <br>
        La integración, gracias a la simetría y la superposición, lleva al resultado de la Ley de Gauss.<br>
      <br>

        <h3>5. Limitaciones y Precauciones</h3><br>
      <br>

        Medios no lineales: En materiales donde la permitividad depende del campo (por ejemplo, algunos cristales o plasmas), la relación deja de ser estrictamente lineal y la superposición puede fallar.<br>
      <br>

        Campos muy intensos: En regímenes de altísima energía (electrodinámica cuántica), aparecen efectos que requieren correcciones cuánticas.<br>
      <br>

        <h3>6. Importancia</h3><br>
      <br>

        El principio de superposición es la herramienta que permite:<br>
      <br>

        Calcular campos eléctricos en geometrías complejas.<br>
      <br>

        Resolver problemas de equilibrio de cargas.<br>
      <br>

        Desarrollar la teoría de circuitos y la ecuación de Poisson.<br>
      <br>

        Sin este principio, sería imposible descomponer un problema en contribuciones simples y resolverlo por integración.</p>`
    },
    {
      title: "2.2 Potencial y Energía Potencial",
      content: `<p><h3>Energía Potencial Eléctrica (U):</h3><br>
      <br>
       Una configuración de cargas tiene una energía potencial asociada, que es el trabajo necesario para ensamblar ese sistema trayendo las cargas desde el infinito. Para dos cargas: <br>
      <br>U = k * (q₁ * q₂) / r.<br>
      <br>
     <h3>· Potencial Eléctrico (V):</h3> <br>
      <br>Es la energía potencial por unidad de carga. <br>
      <br>V = U / q₀.<br>
      <br> Mide el "potencial" que tiene un punto en el espacio para realizar trabajo sobre una carga. Su unidad es el Voltio (V) = Joule/Culombio (J/C).<br>
      <br>
    <h3>· Diferencia de Potencial (Voltaje):</h3> <br>
      <br>ΔV = V_B - V_A = - ∫_A^B E · dl. <br>
      <br>El campo eléctrico apunta en la dirección de mayor a menor potencial. Una carga positiva acelera hacia regiones de menor potencial.

</p>`
    },
    {
      title: "2.3 Relación con la Física Moderna",
      content: `<p>
        La electrostática es la base sobre la que se construyen áreas más avanzadas:<br>
        <br>

        · Electrodinámica: Estudia los campos eléctricos y magnéticos variables en el tiempo y las ondas electromagnéticas (luz, radio, microondas).<br>
        <br>
        · Física del Estado Sólido: La interacción electrostática (Ley de Coulomb) es fundamental para entender la estructura de los átomos, el enlace químico, la formación de cristales y las propiedades de los semiconductores, que son la base de los transistores y microchips.<br>
        <br>
        · Mecánica Cuántica: La ecuación de Schrödinger para el átomo de hidrógeno resuelve el problema del electrón moviéndose en el potencial electrostático central del protón (V(r) ∝ 1/r).

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