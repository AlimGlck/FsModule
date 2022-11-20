const fs = require('fs');

fs.writeFile('employees.json','{"name": "Employee 1 Name", "salary": 2000}','utf-8',(err) => {
    if(err) console.log(err);
    console.log("Dosya başarılı bir şekilde oluşturuldu");
});

fs.readFile('employees.json','utf-8',(err,data) =>{
    if(err) console.log(err);
    console.log(data);

})

fs.writeFile("employees.json",'{"name": "Murat", "salary": 5000}',(err) => {
    if (err) console.log("Hatalı")
  console.log('Güncellendi!');

});

fs.unlink('employees.json',(err) => {
    if (err) console.log("Dosya silinemedi");
    console.log('Dosya silindi');
});
    


