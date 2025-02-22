class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= 0 && pos < this.items.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);

    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      //I can set the 0 index because we know the array is in order
      return Math.min[0];
    }
  }

  sum() {

    const total = this.items.reduce((accumulator, value) => accumulator + value, 0);
    return total;
    if (this.items.length === []) {
      return 0;
    } else {
      let sum = 0;
      for (let i = 0; i < this.items.length; ++i) {
        sum += this.items[i];
      }
      return sum;
    }
  }

  average() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.items.length
    }
  }
}

module.exports = SortedList;