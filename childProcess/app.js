const cp=require('child_process');
const express=require('express');
const multer=require('multer');
const path=require('path');
const bodyParser=require('body-parser');
const fs=require('fs');

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');

const checkFile=(file,cb)=>{
    console.log(file.filename);
    if(path.extname(file.originalname)==='html')
        cb(null,true);
    else
        cb("Select an Html File only");
}

const storage=multer.diskStorage({
    destination:path.join(__dirname+"/public/uploads"),
    filename:(req,file,cb)=>{
        cb(null,(file.fieldname+Date.now()+path.extname(file.originalname)));
    }
})
const uploader=multer({storage:storage}).single('file');

app.get("/",(req,res)=>{
    res.render("page");
})

app.post('/upload',(req,res)=>{
    // console.log("yes");
    // console.log(req.file);
    uploader(req,res,(err)=>{
        // console.log(req.file);
        if(err){
            res.render("page",{msg:err})
        }
        else{
            if(req.file===undefined){
                res.render('page',{msg:"Select a html file"});
            }
            else{
                try{
                    cp.execFileSync("touch /home/abhinav/Desktop/result.jsx");
                }catch(err){}
                const c=(String)(convert(req.file.path));
                console.log(c);
                if(c==0){
                    res.download("/home/abhinav/Desktop/result.jsx");
                    cp.exec("rm /home/abhinav/Desktop/result.jsx");
                }
                else
                    res.render("page",{msg:c});
            }
        }
    }
)})

const convert=(file)=>{
    const data=fs.readFileSync(file,{encoding:'utf8'});
    fs.writeFileSync("/home/abhinav/Desktop/test.html",data);
    try{
    const conversion=cp.execFileSync('./a.out',{encoding:"utf8"});
       console.log(conversion);
       if(conversion==0)
       console.log("yes");

       return conversion;
    }
    catch(err){
        return err.stdout;
    }
}


app.listen(3000);

//asynchronous exec command
// const process=cp.exec("ls");
// process.stdout.on("data",data=>console.log(data));

//Synchronous exec Command
// const stdout=cp.execSync("ls",{encoding:"UTF-8"});
// console.log(stdout);
// console.log(process.argv[2]);
// try{
// const c=cp.execFileSync("./a.out",{encoding:'utf8'},(error,stdout,stderr)=>{console.log(stdout)});
// console.log(c);
// }catch(err){
//     console.log(err);
// }
// console.log("now");
