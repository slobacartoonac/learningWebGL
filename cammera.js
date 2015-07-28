function Cammera(value)
{
NamedObject.call(this,value);
this.x=0;
this.y=0;
this.z=0;
this.x_rot=0;
this.y_rot=0;
this.z_rot=0;
}

Cammera.prototype=Object.create(NamedObject.prototype);
Cammera.prototype.constructor= Cammera;
Cammera.prototype.SetPosition=function(fx,fy,fz)
{
this.x=fx;
this.y=fy;
this.z=fz;
}
Cammera.prototype.SetRotation=function(fxr,fyr,fzr)
{
this.x_rot=fxr;
this.y_rot=fyr;
this.z_rot=fzr;
}