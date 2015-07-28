function Physics()
{
this._propel=[];
this._count=0;
}
Physics.prototype.AddToPropel = function (item)
{
this._propel.push(item);
this._count++;
if(this._count>10)
{
renderer.RemoveRenderer(this._propel.shift());
this._count--;

}
}

Physics.prototype.Update = function(item){
var updateing;
for (index = 0; index < this._count; ++index) {
		updateing=this._propel[index];
		updateing.x-=Math.sin(updateing.y_rot);
	    updateing.z-=Math.cos(updateing.y_rot);
		}
}