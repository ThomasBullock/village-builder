require("./css/main.css");
require("./css/base/base.scss");

import HouseSVG from './components/house.js';

const paintColors = ["teal", "LightCoral", "Chartreuse", "BlanchedAlmond", "Tomato", "LightCyan", "Ivory", "Lavender", "LightBlue", "Grey", "Gray", "White", "LightGreen", "Sienna", "Brown"]

// Classes

class House {
  constructor(color, rooms, location = {x: 600, y: 400}) {
    this._color = color
    this.rooms = rooms
    this.location = location
  }

  get color() {
    return this._color;
  }
  set color(value) {
    if(!paintColors.includes(value)) {
      alert(`Invalid color: ${value}`)
      throw new Error(`Invalid color: ${value}`)
    }
    this._color = value;
  }


  paintHouse(color) {
    this.color = color
  }

  renderHouse() {
    const village = document.getElementById('village')
    const house = HouseSVG(this)
    const houseWrapper = document.createElement("div")
    houseWrapper.classList.add('house__wrapper')
    houseWrapper.style.position = 'absolute';
    houseWrapper.style.left = this.location.x + 'px'
    houseWrapper.style.top = this.location.y + 'px'
    console.dir(houseWrapper)
    houseWrapper.innerHTML = house;
    village.appendChild(houseWrapper)
  }
}




const house1 = new House('Tomato', 2, {x: 700, y: 100})
const house2 = new House('Lavender', 3)

house1.renderHouse()
house2.renderHouse()


console.log(house1);
console.log(house2);