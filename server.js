const express=require('express');
const app=express();
app.use(express.json());
let students=[
    {id:1,name:"John",age:20},
    {id:2,name:"Jane",age:22},];

app.get('/students',(req,res)=>{
    res.send(students);
});

app.post('/students',(req,res)=>{
    const student={id:students.length+1,...req.body};
    students.push(student);
    res.send(student);
});

app.delete('/students/:id',(req,res)=>{
    const id=Number(req.params.id);
    const index=students.findIndex(s=>s.id===id);
    if(index===-1)return res.send({message:"Student not found"});
    students.splice(index,1);
    res.send({message:"Student deleted successfully"});
});

app.put('/students/:id',(req,res)=>{
    const id=Number(req.params.id);
    const index=students.findIndex(s=>s.id===id);
    if(index===-1)return res.send({message:"Student not found"});
    students[index]={id,...req.body};
    res.send(students[index],{message:"Student updated successfully"});
});

app.listen(3000,'0.0.0.0',()=>{
    console.log("Server is running on port 3000");
});
