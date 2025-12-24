const components = {
  button: {
  function: [
    "A button or switch is an input component that allows a user to open or close an electrical circuit.",
    "When pressed or toggled, it changes the circuit state by allowing or interrupting current flow.",
    "Buttons are typically momentary, while switches usually maintain their state until changed.",
    "They translate human action into an electrical signal that a circuit or microcontroller can interpret."
  ],
  analogy: [
    "A button is like a doorbell: it only works while you press it.",
    "A switch is like a light switch at home: it stays on or off until you change it."
  ],
  where: [
    "User input interfaces",
    "Microcontroller projects",
    "Control panels and appliances",
    "Mode selection and system activation"
  ],
  mistake: [
    "Ignoring contact bounce, causing multiple unintended signals.",
    "Forgetting to use pull-up or pull-down resistors.",
    "Assuming all buttons behave the same (momentary vs latching)."
  ],
  recall: [
    "Transforms human action into an electrical signal."
  ]
},

bjt: {
  function: [
    "A BJT (Bipolar Junction Transistor) is an active semiconductor device used to amplify or switch electronic signals.",
    "It operates by using a small current at the base terminal to control a much larger current flowing between collector and emitter.",
    "This makes the BJT a current-controlled device, unlike voltage-controlled transistors.",
    "BJTs are commonly used in amplification stages, signal processing, and low-to-medium power switching.",
    "Their behavior depends on biasing conditions, current gain (β or hFE), and operating region."
  ],
  analogy: [
    "A BJT is like a valve controlled by how hard you push it.",
    "A small push (base current) allows a much larger flow to pass through.",
    "The harder you push, the more flow is allowed."
  ],
  where: [
    "Signal amplification (audio amplifiers, sensors)",
    "Analog circuits",
    "Switching low-power loads",
    "Oscillators and waveform generators",
    "Educational and foundational electronics"
  ],
  mistake: [
    "Assuming the base does not draw current.",
    "Improper biasing leading to cutoff or saturation.",
    "Using a BJT where a MOSFET would be more efficient."
  ],
  recall: [
    "Small base current controls a larger current."
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

  inductor: {
  function: [
    "An inductor is a passive electronic component that stores energy in a magnetic field when current flows through it.",
    "It resists sudden changes in current rather than voltage, opposing rapid increases or decreases in current flow.",
    "This behavior makes inductors essential in power regulation, filtering, and energy transfer systems."
  ],
  analogy: [
    "An inductor is like a heavy flywheel in a mechanical system.",
    "It resists sudden changes in speed, keeping motion smooth and continuous.",
    "In a circuit, current cannot change instantly because the inductor pushes back."
  ],
  where: [
    "Switch-mode power supplies",
    "Filters (low-pass, high-pass, LC circuits)",
    "Energy storage in converters (buck, boost)",
    "Electromagnets, motors, and relays"
  ],
  mistake: [
    "Ignoring flyback voltage when switching inductive loads.",
    "Assuming inductors behave the same as resistors.",
    "Neglecting core saturation and current limits."
  ],
  recall: [
    "Resists changes in current by storing energy magnetically."
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

mosfet: {
  function: [
    "A MOSFET is a semiconductor device used to control the flow of current using an electric field.",
    "Instead of controlling current directly, it uses a small voltage at the gate to switch or regulate a much larger current between drain and source.",
    "MOSFETs are commonly used as electronic switches or amplifiers, especially in power and high-current applications.",
    "Their behavior depends on the type (N-channel or P-channel), threshold voltage, and operating region."
  ],
  analogy: [
    "A MOSFET is like a valve controlled by a remote lever.",
    "A small movement of the lever (gate voltage) opens or closes a large water flow (drain-source current).",
    "The lever itself does not carry the water, it only controls the valve."
  ],
  where: [
    "Motor and solenoid control",
    "Power supplies and voltage regulators",
    "Electromagnetic projects",
    "Switching high-current loads with low-power signals"
  ],
  mistake: [
    "Assuming any MOSFET works with logic-level voltages.",
    "Ignoring heat dissipation and power losses.",
    "Wiring the MOSFET incorrectly (gate, drain, and source confusion).",
    "Forgetting flyback protection when driving inductive loads."
  ],
  recall: [
    "A voltage-controlled switch for high-current loads."
  ]
},

relay: {
  function: [
    "A relay is an electromechanical switch that uses an electromagnet to open or close electrical contacts.",
    "When current flows through the coil, it creates a magnetic field that physically moves a switch.",
    "Relays allow a low-power circuit to safely control a high-power or high-voltage circuit.",
    "They provide electrical isolation between the control side and the load side."
  ],
  analogy: [
    "A relay is like pressing a physical light switch using a magnet instead of your finger.",
    "A small electrical signal pulls the switch, which turns a completely separate circuit on or off."
  ],
  where: [
    "Controlling high-voltage or high-current loads",
    "Industrial automation and control panels",
    "Protective switching and safety systems",
    "Situations where electrical isolation is required"
  ],
  mistake: [
    "Forgetting to add a flyback diode across the relay coil.",
    "Driving the relay directly from a microcontroller pin without proper current handling.",
    "Assuming relays switch instantly (mechanical delay exists)."
  ],
  recall: [
    "A magnet-controlled switch with electrical isolation."
  ]
},

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
