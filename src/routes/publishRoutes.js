const express=require('express');
const publishRouter=express.Router();
function router(nav)
{
    publishRouter.get('/',function(req,res){
    res.render("publish", {
        nav,
        title:'Add a new book',
        
    });
});



return publishRouter;
}
module.exports=router;