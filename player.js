function Player(value)
{
NamedObject.call(this,value);
this._helth=0;
this._items=[];
speed=0;
}

Player.prototype=Object.create(NamedObject.prototype);
Player.prototype.constructor= Player;
Player.prototype.Start=function ()
{
this._helth=100;
};
Player.prototype.Die=function ()
{
this._helth=0;
this._items.length = 0;
};
Player.prototype.TakeItem=function (item)
{
this._items.push(item);
};
Player.prototype.AddRendable=function (prendable)
{
this._rendable=prendable;
}
Player.prototype.Update=function (time)
{
var updateing=this._rendable;
	updateing.y_rot+=updateing.z_rot/33;
	updateing.x-=Math.sin(updateing.y_rot)/20;
	updateing.z-=Math.cos(updateing.y_rot)/20;
}
Player.prototype.handleControl=function(code)
{
if (code === 38) {
	//gore
    }
    else if (code === 40) {
	//"doleee");

    }
    else if (code === 37) {
       if(this._rendable.z_rot<1)
	   this._rendable.z_rot+=0.2;
    }
    else if (code === 39) {
       if(this._rendable.z_rot>-1)
	   this._rendable.z_rot-=0.2;
    }
	else if (code === 32) {
      // alert("You pressed a key SPACE");
    }
	else if (code === 27) {
      // alert("You pressed a key ESC");
    }
}


