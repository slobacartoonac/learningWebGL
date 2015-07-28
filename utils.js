function handleLoadedTexture() {
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.texture.image);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.bindTexture(gl.TEXTURE_2D, null);
  }
 function createDelegate(func, target) {
    return function() { 
        return func.apply(target, arguments);
    };
}
function VNormalise(inp){
		var length = Math.sqrt(inp.x*inp.x+inp.y*inp.y);
		inp.x=inp.x/length;
		inp.y=inp.y/length;
}