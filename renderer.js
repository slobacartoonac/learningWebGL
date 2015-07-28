function Renderer()
{
this._toRender=[];
this._count=0;
}
var mvMatrix = mat4.create();
var pMatrix = mat4.create();
var cvMatrix=mat4.create();
Renderer.prototype.AddRenderer=function(render)
{
this._toRender.push(render);
this._count++;
}
Renderer.prototype.RemoveRenderer=function(render)
{
var el=null;
el=this._toRender.filter(function (el){return el.get()!==render.get()});
if(el!=null){
this._toRender=el;
	this._count--;
	console.log("removed");
	}
}




Renderer.prototype.RenderScene=function()
{
var index;
var rendering;
gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 500.0, pMatrix);
gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
mat4.identity(cvMatrix);
//mat4.rotate(cvMatrix,cammera.z_rot,[0.0,0.0,-1.0]);
	mat4.rotate(cvMatrix,cammera.y_rot,[0.0,-1.0,0.0]);	
//mat4.rotate(cvMatrix,cammera.x_rot,[-1.0,0.0,0.0]);//prolaz/30
mat4.translate(cvMatrix,[ -cammera.x, -cammera.y, -cammera.z]);//[x/120.0-2.2, -y/120.0+2.2, -5.0]

		
		
gl.uniformMatrix4fv(shaderProgram.pCMatrixUniform, false, cvMatrix);

for (index = 0; index < this._count; ++index) {
		rendering=this._toRender[index];
        mat4.identity(mvMatrix);
        
        mat4.translate(mvMatrix,[ rendering.x, rendering.y, rendering.z]);//[x/120.0-2.2, -y/120.0+2.2, -5.0]
		mat4.rotate(mvMatrix,rendering.x_rot,[1.0,0.0,0.0]);//prolaz/30
		mat4.rotate(mvMatrix,rendering.y_rot,[0.0,1.0,0.0]);
		mat4.rotate(mvMatrix,rendering.z_rot,[0.0,0.0,1.0]);
		gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);
		rendering.Draw();
		}
}
