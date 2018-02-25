class Sorter {
  constructor() {
    this.array = [];
    this.compare = (left, right) => left - right;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    let sortedArray = [];
    indices.sort(
      (left, right) => left - right
    );
    for (let i = 0; i < indices.length; i++){
      sortedArray.push(this.array[indices[i]]);
    }
    sortedArray.sort(this.compare);
    for (let j = 0; j < indices.length; j++){
      this.array[indices[j]] = sortedArray[j];
    } 
  }

  setComparator(compareFunction) {
    this.compare = compareFunction;
  }
}

module.exports = Sorter;