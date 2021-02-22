let lastY, lastX;

class Button {

  constructor({ label, type = "primary", sizes }) {
    const button = document.createElement("button");
    button.innerText = label;

    // --- adding className
    button.classList.add("btn");
    if (type in this.types) {
      button.classList.add(this.types[type]);
    } else {
      console.error(`The ${type} is not in types`);
    }
    // --- adding className
    button.classList.add("btn");
    if (sizes in this.sizes) {
      button.classList.add(this.sizes[sizes]);
    } else {
      console.error(`The ${sizes} isn't in sizes`);
    }

    // --- initialize properties
    this.button = button;
    this.label = label;
    this.type = type;
    this.sizes;
    // --- adding events
    button.addEventListener("mousemove", this.mouseHandler);
    button.addEventListener("mouseleave", this.mouseLeaveHandler);
  }

  mouseHandler(e) {
    lastY = e.offsetY;
    lastX = e.offsetX;
    e.target.style.setProperty("--x", `${e.offsetX}px`);
    e.target.style.setProperty("--y", `${e.offsetY}px`);
  }

  mouseLeaveHandler(e) {
    const { height, width } = e.target.getBoundingClientRect();
    const centerY = height / 2;
    const centerX = width / 2;
    const diffY = centerY - lastY;
    const diffX = centerX - lastX;
    let i = 0;
    function move() {
      if (i <= 1) {
        i += 0.01;
        const newI = easeOutExpo(i);
        e.target.style.setProperty("--x", `${lastX + diffX * newI}px`);
        e.target.style.setProperty("--y", `${lastY + diffY * newI}px`);
        window.requestAnimationFrame(move);
      } else {
        // code to be executed when animation finishes
      }
    }

    function easeOutExpo(x) {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x); // 0.75
    }
    window.requestAnimationFrame(move);
  }

  get types() {
    return {
      brand: "btn-brand",
      primary: "btn-primary",
      tertiary: "btn-tertiary",
      secondary: "btn-secondary",
      promotion: "btn-promotion",
    };
  }
  get sizes() {
    return {
      small: "btn-small",
      middle: "btn-middle",
      large: "btn-large",
    };
  }
  insertTo(elOrSctr) {
    const parentElement =
      typeof elOrSctr === "string"
        ? document.querySelector(elOrSctr) /* selector */
        : elOrSctr; /* element */
    parentElement.append(this.button);
  }

}

const ToggleMode = new Button({
  label: "Button",
  type: "promotion",
  sizes: "small",
});
const ToggleMod1 = new Button({
  label: "Button",
  type: "brand",
  sizes: "middle",
});
const ToggleMod2 = new Button({
  label: "Button",
  type: "tertiary",
  sizes: "large",
});


ToggleMode.insertTo(document.body);
ToggleMod1.insertTo(document.body);
ToggleMod2.insertTo(document.body);


ToggleMode.button.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
