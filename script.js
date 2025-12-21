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
  },

  capacitor: {
  function: [
    "A capacitor is a passive electronic component that stores electrical energy in an electric field between two conductive plates separated by a dielectric material.",
    "It resists sudden changes in voltage rather than current, making it essential for stabilizing power supplies, filtering signals, and handling transient energy demands.",
    "Its behavior depends on capacitance value, voltage rating, circuit resistance, and configuration.",
  ],
  analogy: [
    "A capacitor is like a flexible water tank connected to a pipe.",
    "It absorbs water when pressure rises and releases it when pressure drops, smoothing fluctuations.",
  ],
  where: [
    "Capacitors are commonly used in:",
    "power supply smoothing and decoupling",
    "timing and delay circuits",
    "signal filtering",
    "energy buffering in electronic systems",
  ],
  mistake: [
    "Ignoring polarity, voltage rating, or misunderstanding series and parallel behavior.",
  ],
  recall: [
    "Stores and releases energy to stabilize voltage.",
  ]
},

led: {
  function: [
    "A LED (Light Emitting Diode) is a semiconductor device that emits light when electric current flows through it.",
    "It operates like a diode, allowing current to flow in one direction, but converts electrical energy into light instead of heat.",
    "The color of the light depends on the semiconductor material and its band gap.",
    "LEDs require current limiting, usually through a resistor, to prevent damage.",
  ],
  analogy: [
    "A LED is like a one-way door that lights up when people walk through it.",
    "If too many people try to pass at once, the door breaks unless there is a guard controlling the flow (the resistor).",
  ],
  where: [
    "Status indicators in electronic devices",
    "Displays and lighting systems",
    "Optical communication",
    "Debugging and visual feedback in circuits",
  ],
  mistake: [
    "Connecting a LED directly to a voltage source without a resistor.",
    "Reversing polarity (LEDs do not light in reverse bias).",
    "Ignoring forward voltage differences between LED colors.",
  ],
  recall: [
    "A diode that emits light and must be current-limited.",
  ]
},

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

    ${renderSection("amougs", c.function)}
    ${renderSection("Simple Analogy", c.analogy)}
    ${renderSection("Where it is common", c.where)}
    ${renderSection("Common mistakes", c.mistake)}
    ${renderSection("Quick recall", c.recall)}
  `;

  document.getElementById("description").innerHTML = html;
}
