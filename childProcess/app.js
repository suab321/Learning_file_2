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

function checkFile(file){
    console.log(path.extname(file.originalname));
    return new Promise((reslove,reject)=>{
        if(path.extname(file.originalname)==='.html')
            reslove(1);
        else
            reslove(0);
    })
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
    uploader(req,res,async(err)=>{
        const d=await checkFile(req.file);
        console.log(d);
        if(d===0){
            res.render("page",{msg:"Cmon cant you upload a html file"});
            cp.exec(`rm ${req.file.path}`);
            return;
        }
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
                    try{
                    res.download("/home/abhinav/Desktop/result.jsx");
                    }catch(err){res.render("page",{msg:"error there is some error in file"})}
                }
                else
                    res.render("page",{msg:c});

                // try{
                //     cp.exec("rm /home/abhinav/Desktop/result.jsx");

                // }catch(err){console.log(err)};
            }
        }
        cp.exec(`rm ${req.file.path}`);
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
