// GRINCH_PRANK_START
function createGrinchPrank(){
 const saved=new Map();
 const quantity=()=>[...saved.values()].reduce((sum,n)=>sum+n,0);
 function empty(bag){let removed=0;for(const [id,n] of bag){saved.set(id,(saved.get(id)||0)+n);removed+=n;}bag.clear();return removed;}
 function restore(bag){const restored=quantity();for(const [id,n] of saved)bag.set(id,(bag.get(id)||0)+n);saved.clear();return restored;}
 return{empty,restore,reset(){saved.clear();},get hasGifts(){return saved.size>0;},get quantity(){return quantity();}};
}
// GRINCH_PRANK_END
