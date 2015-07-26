function Rendable(value)
{
NamedObject.call(this,value);
this.x=0;
this.y=0;
this.z=0;
this.x_rot=0;
this.y_rot=0;
this.z_rot=0;
}

Rendable.prototype=Object.create(NamedObject.prototype);
Rendable.prototype.constructor= Rendable;
Rendable.prototype.SetMeshObject=function(rendable)
{
this._rendable=rendable;
}
Rendable.prototype.SetPosition=function(fx,fy,fz)
{
this.x=fx;
this.y=fy;
this.z=fz;
}
Rendable.prototype.SetRotation=function(fxr,fyr,fzr)
{
this.x_rot=fxr;
this.y_rot=fyr;
this.z_rot=fzr;
}
Rendable.prototype.Draw=function()
{
this._rendable.Draw();
}

