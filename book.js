$("#input_book").keyup(function(){
    $("#input_book").css("background-color", "pink");
  });
  $("#input_book").keydown(function(){
    $("#input_book").css("background-color", "yellow");
  });

function Book(title,cat,price,image){
     var book={}
    book.title=title
    book.cat=cat
    book.price=price
    book.image=image
    return book
}
function BookList(){
    var bookList={}
    bookList.books=[]
    bookList.addMybook=add
    return bookList
}

var add=function(myBook){
   return this.books.push(myBook)
   updateCart();
}

    var myBook1=Book("Harry Potter","science",'14£',"harry1.jpg")
    var myBook2 =  Book("another book", "fiction", '17£', "another.jpg");
    var myBook3 =  Book("adventure", "fantasy", '14£', "adventure1.jpg");
    var myBook4 =  Book("space odyssey", "sci-fi", '14£', "space.jpg");
    var myBook5 =  Book("The journey after crown", "historical fiction", '17£', "journey.jpg");
    var myBook6 =  Book("The Great Gatsby", "Classic", '12£', "6.jpg");
    var myBook7 =  Book("Space Odyssey", "Sci-Fi", '14£', "7.jpg");
    var myBook8 =  Book("The Hobbit", "Fantasy", '15£', "9.jpg");
    var myBook9 =  Book("1984", "Dystopian", '11£', "10.jpg");

 var store = BookList()

store.addMybook(myBook1)
store.addMybook(myBook2)
store.addMybook(myBook3)
store.addMybook(myBook4)
store.addMybook(myBook5)
store.addMybook(myBook6)
store.addMybook(myBook7)
store.addMybook(myBook8)
store.addMybook(myBook9)

function each(coll, f) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                f(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                f(coll[key], key); 
          } 
    } 
}
function injectCards(array){
    each(array, function(element) {
        $('.displayBooks').append(`<div class="cards">
            <div>
                <img class="Imgs" src=${element.image} alt=""/>
            </div>
            <div class='Items'>
                <p class="infs" style="color:#74642F;">${element.title}</p>
                <p class="infs" style="color:#8A8A89;">${element.cat}</p>
                <p class="inf" style="color:#74642F;">${element.price}</p>
            </div>
            </div>`)
    })
}
injectCards(store.books)

function filter(array, predicate) {
    var acc = [];
    each(array, function(element) {
    if (predicate(element)) {
    acc.push(element);
    }
    });
    return acc;
}
function serashh(){
   var searched = $('#input_book').val()
   var arr =store.books.filter(function(e){
    return (e.title).toLowerCase() === searched.toLowerCase() })
    injectCards(arr)

}


    var cart = []

function updateCart() {
    var cartItems = $('.cart-items');
    cartItems.empty();

    var total = 0;

    cart.forEach(function (book) {
        cartItems.append(`<li>${book.title} - ${book.price}</li>`);
        total += parseFloat(book.price);
    });

    $('.total').text(`Total: ${total.toFixed(2)}£`);
}

$('.displayBooks').on('click', '.add-to-cart', function () {
    var index = $(this).data('index');
    var selectedBook = store.books[index];
    addToCart(selectedBook);
});

$('.checkout-btn').click(function () {
  
    cart = [];
    updateCart();
    alert('Thank you for your purchase!');
});

function injectCards(array) {
    $('.displayBooks').empty(); 
    each(array, function (element, index) {
        $('.displayBooks').append(`<div class="swiper-slide">
            <div class="cards">
                <div>
                    <img class="Imgs" src=${element.image} alt=""/>
                </div>
                <div class='Items'>
                    <p class="infs">${element.title}</p>
                    <p class="infs">${element.cat}</p>
                    <p class="inf">${element.price}</p>
                    <button class="add-to-cart" data-index="${index}">Add to Cart</button>
                </div>
            </div>
        </div>`);
    });
}
injectCards(store.books);



    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//