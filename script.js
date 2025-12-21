const components = {
  resistor: {
    function: [
      "A resistor is a passive electronic component that opposes the flow of electric current.",
      "When inserted into a circuit, it limits current and causes a voltage drop across its terminals, following Ohm's Law (V = IR).",
      "By controlling current and voltage levels, resistors protect sensitive components and define circuit behavior.",
      "Resistors dissipate electrical energy as heat, which is why their power rating (in watts) matters.",
      "Their resistance value is typically indicated by color bands or printed markings."
    ],
    analogy: [
      "A resistor is like a funnel connecting a wide hose to a narrower one.",
      "Water still flows, but its rate is limited.",
      "In a circuit, electrons still move, but the resistor controls how much current passes."
    ],
    where: [
      "Current limiting (e.g., LEDs)",
      "Voltage dividers",
      "Pull-up and pull-down networks",
      "Biasing active components",
      "Signal conditioning"
    ],
    mistake: [
      "Ignoring the power rating.",
      "Assuming resistors behave the same in series and parallel."
    ],
    recall: [
      "Limits current to protect components."
    ]
  },

  diode: {
    function: [
      "A diode is a semiconductor component that allows current to flow in one direction only.",
      "It uses a p-n junction to block current when reverse-biased.",
      "Diodes are essential for controlling current direction in circuits."
    ],
    analogy: [
      "Like a one-way valve in a pipe.",
      "Water flows forward, but backward pressure closes the valve."
    ],
    where: [
      "Rectifiers (AC to DC conversion)",
      "Reverse polarity protection",
      "Flyback protection in inductive loads",
      "Signal routing"
    ],
    mistake: [
      "Ignoring forward voltage drop.",
      "Exceeding reverse voltage ratings."
    ],
    recall: [
      "Current flows in one direction."
    ]
  }
};

function renderSection(title, items) {
  return `
    <strong>${title}</strong>
    ${items.map(text => `<p>${text}</p>`).join("")}
  `;
}

function showComponent(name) {
  const c = components[name];

  const html = `
    <h2>${name.charAt(0).toUpperCase() + name.slice(1)}</h2>

    ${renderSection("Function", c.function)}
    ${renderSection("Simple Analogy", c.analogy)}
    ${renderSection("Where it is common", c.where)}
    ${renderSection("Common mistakes", c.mistake)}
    ${renderSection("Quick recall", c.recall)}
  `;

  document.getElementById("description").innerHTML = html;
}
