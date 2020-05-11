let Goods = require('../models/goodsModel.js')

exports.read = function(req, res) {
  Goods.getAllGoods(function(err, goods) {
    if (err) throw err;
      //console.log('res', goods);
    //res.send(goods);  --json
    res.render('goods',{
    	new: false,
    	goods,
    	title: "Goods"
    })
  });
};

exports.readOne = function(req, res) {

  Goods.getOneGood(req.params.goodId, function(err, goods) {
    if (err) throw err;

   //console.log(JSON.parse(JSON.stringify(goods.name)))
   res.render('good',{
    	goods,
    	title: goods[0].name
    })
  });
};



exports.create = function(req, res) {
  //handles null error 
	if(!req.body.good|| !req.body.status){//
	    res.status(400).send({ error:true, message: 'Please provide good/status' });
	}else{
		const newGood= new Goods(req.body.good);
		Goods.createGood(newGood, (err, good)=> {
		  if (err){res.send(err);}
		  //console.log(good)
		  res.redirect('/goods/'+good);
		});
	}
};