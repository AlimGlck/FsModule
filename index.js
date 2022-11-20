const fs = require('fs');

setTimeout(() => {fs.writeFile('employees.json','{"name": "Employee 1 Name", "salary": 2000}','utf-8',(err) => {
    if(err) console.log(err);
    console.log("Dosya başarılı bir şekilde oluşturuldu");
})},1000);


setTimeout(() => {fs.readFile('employees.json','utf-8',(err,data) =>{
    if(err) console.log(err);
    console.log(data);

})},3000);


setTimeout(() => {fs.writeFile("employees.json",'{"name": "Murat", "salary": 5000}',(err) => {
    if (err) console.log("Hatalı")
  console.log('Güncellendi!');

})},5000);

setTimeout(() => {fs.unlink('employees.json',(err) => {
    if (err) console.log("Dosya silinemedi");
    console.log('Dosya silindi');
})},7000);


    


