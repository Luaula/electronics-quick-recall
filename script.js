const components = {
  resistor: {
    function: "A resistor limits the flow of electric current in a circuit, causing a voltage drop and protecting components from excessive current.",
    analogy: "Like a funnel narrowing a hose, making it harder for water (electrons) to pass through.",
    where: "Found in virtually all electronic devices.",
    mistake: "Ignoring power rating or assuming resistors behave the same in series and parallel.",
    recall: "Limits current to protect components."
  },

  diode: {
    function: "A diode allows current to flow in only one direction by using a p–n junction.",
    analogy: "A one-way valve that lets water flow in only one direction.",
    where: "Used in rectifiers, protection circuits, and signal routing.",
    mistake: "Ignoring the forward voltage drop or reverse voltage limit.",
    recall: "Current flows in only one direction."
  },

  capacitor: {
    function: "A capacitor stores and releases electrical energy, helping stabilize voltage and filter signals.",
    analogy: "Like a small rechargeable tank that fills and empties quickly.",
    where: "Power supplies, timing circuits, signal filtering.",
    mistake: "Ignoring polarity or voltage rating.",
    recall: "Stores and releases energy."
  }
};

function showComponent(name) {
  const c = components[name];

  const html = `
    <h2>${name.charAt(0).toUpperCase() + name.slice(1)}</h2>

    <strong>Function</strong>
    <p>${c.function}</p>

    <strong>Simple Analogy</strong>
    <p>${c.analogy}</p>

    <strong>Where it is common</strong>
    <p>${c.where}</p>

    <strong>Common mistake</strong>
    <p>${c.mistake}</p>

    <strong>Quick recall</strong>
    <p>${c.recall}</p>
  `;

  document.getElementById("description").innerHTML = html;
}
