document.addEventListener('DOMContentLoaded', () => {

  const sections = [
    {
      title: "3.1 Ley de Coulomb",
      content: `<p>Formulada por Charles-Augustin de Coulomb, es la piedra angular de la electrostática y es análoga a la Ley de la Gravitación Universal de Newton.<br>
      <br>

        · Enunciado: "La fuerza de atracción o repulsión entre dos cargas puntuales en reposo es directamente proporcional al producto de las magnitudes de las cargas e inversamente proporcional al cuadrado de la distancia que las separa. Esta fuerza actúa a lo largo de la línea que une las dos cargas."<br>
      <br>
        · Expresión Matemática:<br>
      <br>
        F = k * (|q₁ * q₂|) / r²<br>
      <br>
        donde:<br>

        · F es la magnitud de la fuerza (en Newtons, N).<br>

        · q₁ y q₂ son los valores de las cargas (en Culombios, C).<br>

        · r es la distancia que las separa (en metros, m).<br>
        · k es la constante de Coulomb (k ≈ 8.9875 × 10⁹ N·m²/C²). <br>
      <br>Esta constante se relaciona con la permitividad del vacío (ε₀) mediante k = 1/(4πε₀).<br>
      <br>
        · Dirección y Sentido: La fuerza es repulsiva si las cargas son del mismo signo y atractiva si son de signos opuestos. Se expresa de forma vectorial como F₁₂ = k * (q₁ * q₂ / r²) * r̂₁₂, donde r̂₁₂ es el vector unitario que va de q₂ a q₁.
</p>`
    },
    {
      title: "3.2 Definición de Campo (Faraday)",
      content: `<p>Para evitar la problemática de la "acción a distancia", se introduce el concepto de campo. Una carga eléctrica altera las propiedades del espacio que la rodea, creando un campo eléctrico (E).<br>
      <br>

        · Definición: El campo eléctrico en un punto del espacio se define como la fuerza eléctrica por unidad de carga que experimentaría una carga de prueba positiva y pequeña (q₀) colocada en ese punto.<br>
      <br>
        E = F / q₀<br>
      <br>
        · Unidad: Newtons por Culombio (N/C) o Volts por metro (V/m).<br>
      <br>
        · Campo de una Carga Puntual: Para una carga fuente Q, el campo a una distancia r es: <br>
      <br>E = k * (Q / r²) * r̂. <br>
      <br>El campo "sale" de las cargas positivas y "entra" hacia las cargas negativas.<br>
      <br>
        · Líneas de Campo: Son una representación visual donde la tangente a la línea en cualquier punto indica la dirección del campo E. La densidad de líneas es proporcional a la magnitud del campo. Nunca se cruzan.

</p>`
    },
    {
      title: "3.3 Ley de Gauss",
      content: `<p>Formulada por Carl Friedrich Gauss, es una herramienta poderosa para calcular campos eléctricos cuando existe una alta simetría (esférica, cilíndrica, plana).<br>
      <br>

        · Enunciado: "El flujo eléctrico neto (Φ_E) a través de cualquier superficie cerrada (superficie gaussiana) es igual a la carga neta encerrada (Q_enc) dentro de la superficie, dividida por la permitividad del vacío (ε₀)."<br>
      <br>
        · Expresión Matemática:<br>
      <br>
        Φ_E = ∮ E · dA = Q_enc / ε₀<br>
      <br>
        donde ∮ E · dA es la integral de superficie del producto punto del campo eléctrico y el vector de área.<br>
      <br>
        · Aplicación: Simplifica enormemente el cálculo de E para distribuciones de carga simétricas (e.g., campo de una esfera uniformemente cargada, de un plano infinito, de un hilo infinito).
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