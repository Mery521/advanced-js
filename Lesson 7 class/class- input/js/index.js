
class Input {

  constructor({ sizes, placeholder}) {
    const input = document.createElement("input");
   input.placeholder = placeholder;

    input.classList.add("inp");
    if (sizes in this.sizes) {
      input.classList.add(this.sizes[sizes]);
    } else {
      console.error(`The ${sizes} isn't in sizes`);
    }
    this.input = input;
    this.placeholder = pl
    this.sizes;
  }
   
  get sizes() {
    return {
      small: "inp-small",
      middle: "inp-middle",
      large: "inp-large",
    };
  }
  insertTo(elOrSctr) {
    const parentElement =
      typeof elOrSctr === "string"
        ? document.querySelector(elOrSctr) /* selector */
        : elOrSctr; /* element */
    parentElement.append(this.input);
  }

}
const ToggleMode = new Input({
  placeholder: 'first',
  sizes: "small",
});
const ToggleMode2 = new Input({
  sizes: "small",
});

ToggleMode.insertTo(document.body);
ToggleMode2.insertTo(document.body);


