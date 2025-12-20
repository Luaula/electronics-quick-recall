function showComponent(component) {
  let text = "";

  if (component === "resistor") {
    text = "A resistor limits current in a circuit. I mainly use it to protect LEDs, control voltage levels, and avoid damaging components during tests.";
  }

  if (component === "capacitor") {
    text = "A capacitor stores and releases energy. In my projects, it helps smooth voltage, stabilize power supplies, and handle brief energy demands.";
  }

  if (component === "mosfet") {
    text = "A MOSFET works as an efficient electronic switch. I use it to control high-current loads with low-power signals, especially in motors and electromagnetic projects.";
  }

  document.getElementById("description").innerHTML = "<p>" + text + "</p>";
}
