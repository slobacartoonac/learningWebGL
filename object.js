function NamedObject(value)
{
this._name=value;
}
NamedObject.prototype.get=function ()
{
return this._name;
}
var lifeName = new NamedObject("stagod");
lifeName.get();

function FirmNamed(value)
{
	NamedObject.call(this,value);
}
FirmNamed.prototype= Object.create(NamedObject.prototype);
FirmNamed.prototype.constructor = FirmNamed;
FirmNamed.prototype.get=function ()
{
	return NamedObject.prototype.get.call(this)+"!!";
};

function Mesh(value)
{
NamedObject.call(this,value);
}
Mesh.prototype=Object.create(NamedObject.prototype);
Mesh.prototype.constructor= Mesh;
Mesh.prototype.Draw=function()
{
				
        gl.bindBuffer(gl.ARRAY_BUFFER, this.triangleVertexPositionBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, this.triangleVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
		
		
		 gl.bindBuffer(gl.ARRAY_BUFFER, this.triangleVertexTextureCoordBuffer);
         gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, this.triangleVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);
		
		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, this.texture);
		gl.uniform1i(shaderProgram.samplerUniform, 0);
		
		
		gl.bindBuffer(gl.ARRAY_BUFFER, this.triangleVertexColorBuffer);
		gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, this.triangleVertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
        gl.drawArrays(gl.TRIANGLES, 0, this.triangleVertexPositionBuffer.numItems);
}
Mesh.prototype.SetVertices=function(vertices)
{
this.triangleVertexPositionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.triangleVertexPositionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        this.triangleVertexPositionBuffer.itemSize = 3;
        this.triangleVertexPositionBuffer.numItems = vertices.length/3;
		return this.triangleVertexPositionBuffer;
}
Mesh.prototype.SetColors=function(colors)
{
this.triangleVertexColorBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.triangleVertexColorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
        this.triangleVertexColorBuffer.itemSize = 4;
        this.triangleVertexColorBuffer.numItems = colors.length/4;
		return this.triangleVertexColorBuffer;
}
Mesh.prototype.SetTexture=function(file)
{
this.texture = gl.createTexture();
    this.texture .image = new Image();
	this.delegare=createDelegate(handleLoadedTexture,this)
    this.texture .image.onload = this.delegare;
    this.texture.image.src = file;
}

Mesh.prototype.SetTextureCords=function(cords)
{
this.triangleVertexTextureCoordBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.triangleVertexTextureCoordBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cords), gl.STATIC_DRAW);
        this.triangleVertexTextureCoordBuffer.itemSize = 2;
        this.triangleVertexTextureCoordBuffer.numItems = cords.length/2;
		return this.triangleVertexTextureCoordBuffer;
}



