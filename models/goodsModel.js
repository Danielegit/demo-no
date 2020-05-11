const {conn} = require('../core/connect')


// const Goods = (good) => {
//   this.good = good;
//   this.status = good.status;
// }

const Goods = class{

	constructor(obj) {

	    this.name = obj.name;
	    this.price= obj.price;
    // this.status = good.status;
  }
}
//https://www.codementor.io/@julieisip/learn-rest-api-using-express-js-and-mysql-db-ldflyx8g2

Goods.getAllGoods = function (result) {
    conn.query("Select * from goods", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
           //console.log('goods : ', res);  
           result(null, res);
        }
    });   
};

Goods.getOneGood = function (goodId,result) {

    conn.query("Select * from goods where id =?",goodId,  (err, res)=>{
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
           //console.log('goods : ', res);  
           result(null, res);
        }
    });   
};

Goods.createGood = function (newGood, result) {    
        conn.query("INSERT INTO goods set ?", newGood, (err, res)=> {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    //console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};



module.exports = Goods
