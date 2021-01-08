const app = new Vue({
  el: '#app',
  data: {
    books: [
      {id: 1, name: '《算法导论》', date: '2006-9', price: 85.00, count: 1},
      {id: 2, name: '《UNIX编程艺术》', date: '2006-2', price: 59.00, count: 1},
      {id: 3, name: '《编程珠玑》', date: '2008-10', price: 39.00, count: 1},
      {id: 4, name: '《代码大全》', date: '2006-3', price: 128.00, count: 1},
    ]
  },
  computed: {
    totalPrice() {
      // let total = 0;
      // for(let book of this.books)
      //   total += (book.price * book.count);
      // return total;
      return this.books.reduce((pre, book)=>{
        return pre + (book.price * book.count);
      }, 0);
    }
  },
  filters: {
    finalPrice(price){
      return '￥' + price.toFixed(2);
    }
  },
  methods: {
    decrement(index){
      if(this.books[index].count > 1)
        this.books[index].count--;
    },
    increment(index){
      this.books[index].count++;
    },
    remove(index) {
      this.books.splice(index,1);
    }
  },
});