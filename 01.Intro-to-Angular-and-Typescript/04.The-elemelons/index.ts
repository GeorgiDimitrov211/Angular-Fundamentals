function elemelons() {

  abstract class Melon {

    elementType: string;
    elements: Array < string > ;
    public weight: number;
    public melonSort: string;
    elementIndex: number;

    constructor(weight, melonSort) {
      this.weight = weight;
      this.melonSort = melonSort;
      this.elementIndex = this.weight * this.melonSort.length;
    }

    stringify() {
      console.log(`Element: ${this.elementType}`)
      console.log(`Sort: ${this.melonSort}`)
      console.log(`Element Index: ${this.elementIndex}`)
    }

  }

  class Watermelon extends Melon {

    elementType: string = 'Water'

    constructor(weight: number, melonSort: string) {

      super(weight, melonSort);

    }
  }

  class Firemelon extends Melon {

    elementType: string = 'Fire'

    constructor(weight: number, melonSort: string) {

      super(weight, melonSort);
      
    }
  }


  class Airmelon extends Melon {

    elementType: string = 'Air'

    constructor(weight: number, melonSort: string) {

      super(weight, melonSort);
      
    }
  }

  class Earthmelon extends Melon {

    elementType: string = 'Earth'

    constructor(weight: number, melonSort: string) {

      super(weight, melonSort);
      
    }
  }

  class Melolemonmelon extends Melon {

    elements = ['Water', 'Fire', 'Air', 'Earth']

    constructor(weight: number, melonSort: string){

      super(weight, melonSort);

    }

    morph() {
      this.elementType = this.elements.shift();

        this.stringify()

      this.elements.push(this.elementType);
    }

  }

  let watermelon: Watermelon = new Watermelon(10, 'small')
  watermelon.stringify()

  let firemelon: Firemelon = new Firemelon(10, 'big')
  firemelon.stringify()
  
  let melolemonmelon: Melolemonmelon = new Melolemonmelon(12.5, 'Kingsize')
  melolemonmelon.morph();
  melolemonmelon.morph();
  melolemonmelon.morph();
  melolemonmelon.morph();
  melolemonmelon.morph();


}

elemelons()