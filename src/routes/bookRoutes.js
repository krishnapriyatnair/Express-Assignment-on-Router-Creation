const express=require('express');
const booksRouter=express.Router();
function router(nav)
{ 
var books=[{
    genre:'Popular Books',
    img:"popularbooks.png",
    link:'https://www.bookbub.com/genres/bestsellers'
},
{
    genre:'Classic Books',
    img:"classic books.jpg",
    link:'https://www.goodreads.com/genres/classics'

},
{
    genre:"Childern's Books",
    img:"children.png",
    link:'https://www.bookbub.com/genres/young-readers/children-s'

},

{
    genre:"Science Books",
    img:"science.jpg",
    link:'https://www.bookbub.com/genres/general-nonfiction/science'

},
{
    genre:"Business Books",
    img:"businessbooks.png",
    link:'https://www.bookbub.com/genres/general-nonfiction/business'

},
{
    genre:"Fiction Books",
    img:"fiction.jpg",
    link:'https://www.bookbub.com/ebook-deals/science-fiction-ebooks'

}

];

booksRouter.get('/',function(req,res){
    res.render("books", {
        nav,
        title:'Library',
        books
    });
});
booksRouter.get('/:i',function(req,res){
   const id= req.params.i
    
    res.render('book', {
        nav,
        title:'Library',
        book:books[id]        
    });
});
return booksRouter;
}
module.exports=router;