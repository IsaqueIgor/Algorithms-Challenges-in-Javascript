function hashStringToInt(s, tableSize) {
  let hash = 17; //Choose Prime numbers

  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableSize;
  }

  return hash;
}

class HashTable {
  table = new Array(3); //Large data to avoid colision, choose prime numbers
  numItems = 0;

  resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashStringToInt(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  };

  setItem = (key, value) => {
    this.numItems++;
    const loadFactor = this.numItems / this.table.length;

    if (loadFactor > 0.8) {
      console.log('resize happening');
      this.resize();
    }
    const idx = hashStringToInt(key, this.table.length);
    //AVOID COLISION: Chaining
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  };

  getItem = (key) => {
    const idx = hashStringToInt(key, this.table.length);
    if (!this.table[idx]) {
      return null;
    }

    //Worst case O(n)
    return this.table[idx].find((x) => x[0] === key)[1];
  };
}

const myTable = new HashTable();

myTable.setItem('FirstName', 'bob');
myTable.setItem('LastName', 'bobby');
myTable.setItem('age', 13);
myTable.setItem('dob', '13/01/2007');
console.log(myTable.getItem('FirstName'));
console.log(myTable.getItem('LastName'));
