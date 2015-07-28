function Player(value)
{
NamedObject.call(this,value);
this._helth=0;
this._items=[];
speed=0;
this.projmesh=null;
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

Player.prototype.setCammera=function(ccammera)
{
this.cammera=ccammera;
}


Player.prototype.Update=function (time)
{
var updateing=this._rendable;
	updateing.y_rot+=updateing.z_rot/50;
	//cammera.y_rot=updateing.y_rot;
	updateing.x-=Math.sin(updateing.y_rot)/3;
	updateing.z-=Math.cos(updateing.y_rot)/3;
	
	var raz = {x:updateing.x-cammera.x,y: updateing.z-cammera.z}
    		
    VNormalise(raz);
    cammera.x=updateing.x-raz.x*10;
    cammera.z=updateing.z-raz.y*10;
    		
    cammera.y_rot=-Math.atan2(raz.y, raz.x)-Math.PI/2;
	
	
	
	//cammera.x=updateing.x+Math.sin(updateing.y_rot)*10;
	//cammera.z=updateing.z+Math.cos(updateing.y_rot)*10;
	
}
Player.prototype.handleControl=function(code)
{
//2=='2' //true
//2==='2'//false
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
	var projvert=[];
	var projtext=[];
	if(this.projmesh===null){
	this.projmesh=new Mesh("projectile");
	objectProjectile(projvert,projtext);
    this.projmesh.SetVertices(projvert);
	this.projmesh.SetColors(projtext);
	this.projmesh.SetTextureCords(projtext);
	this.projmesh.SetTexture("test1.gif");
	}
	var projRendable=new Rendable("projectilerendable");
	projRendable.SetMeshObject(this.projmesh);
	projRendable.SetPosition(this._rendable.x,this._rendable.y,this._rendable.z);
	projRendable.SetRotation(this._rendable.x_rot,this._rendable.y_rot,this._rendable.z_rot);
	renderer.AddRenderer(projRendable);
      // alert("You pressed a key SPACE");
    }
	else if (code === 27) {
      // alert("You pressed a key ESC");
    }
}


