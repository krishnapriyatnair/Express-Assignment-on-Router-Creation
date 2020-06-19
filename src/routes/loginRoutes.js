
const express=require('express');
const loginRouter=express.Router();

function router(nav)
{ 
var caro=[{
    
    img:"pr_library.jpg",
    des:'At your figure tips'
},
{
    
    img:"kindle.jpg",
    des:'Read Anywhere at Anytime'

},
{
    img:"booksopen.jpg",
    des:'Discover the world of books'
}

];

loginRouter.get('/',function(req,res){
    res.render("login", {
        nav,
        title:'Login',
        caro
    });
});




return loginRouter;
}


module.exports=router;

