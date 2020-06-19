const express=require('express');
const app=express();
const nav=[
    {link:'/',name:'Home'},
    {link:'/books',name:'Books'},
    {link:'/journals',name:'Journals'},
    {link:'/publish',name:'Publish'},
    {link:'/author',name:'Authors'},
    {link:'/signUp',name:'SignUp'},
    {link:'/login',name:'Login'},
];


const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorRouter=require('./src/routes/authorRoutes')(nav);
const loginRouter=require('./src/routes/loginRoutes')(nav);
const signupRouter=require('./src/routes/signupRoutes')(nav);
const journalsRouter=require('./src/routes/journalsRoutes')(nav);
const faqRouter=express.Router();
const publishRouter=require('./src/routes/publishRoutes')(nav);



app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books', booksRouter);
app.use('/author', authorRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/journals', journalsRouter);
app.use('/faq', faqRouter);
app.use('/publish', publishRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Home'
    }
    
    );
});
    faqRouter.get('/',function(req,res){
        res.render("faq",
        {
            nav,
            title:'faq'
        }
        
        );

});







app.listen(5003);
console.log("Loading server 5003");
