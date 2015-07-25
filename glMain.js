document.onkeydown = checkKey;
var avionce=new RendableObject("avionce");
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode === 38) {
        document.getElementById("undertag").innerHTML =avionce.get();
    }
    else if (e.keyCode === 40) {
	var doleime=new FirmNamed("doleee");
        document.getElementById("undertag").innerHTML =doleime.get();
    }
    else if (e.keyCode === 37) {
       alert("You pressed a key LEFT");
    }
    else if (e.keyCode === 39) {
       alert("You pressed a key RIGHT");
    }
	else if (e.keyCode === 32) {
       alert("You pressed a key SPACE");
    }
	else if (e.keyCode === 27) {
       alert("You pressed a key ESC");
    }

}




var x=250;
var y=250;
function webGLStart(kanvas) {
    var canvas = document.getElementById(kanvas);
	canvas.onmousemove=function(e)
		{
		x=e.clientX;
		y=e.clientY;
		}
    initGL(canvas);
    initShaders();
    initBuffers();

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);
    window.setInterval(function(){drawScene()},33);
  }
var gl;
var prolaz=0;
    function initGL(canvas) {
        try {
            gl = canvas.getContext("experimental-webgl");
            gl.viewportWidth = canvas.width;
            gl.viewportHeight = canvas.height;
        } catch (e) {
        }
        if (!gl) {
            alert("Could not initialise WebGL, sorry :-(");
        }
    }


    function getShader(gl, id) {
        var shaderScript = document.getElementById(id);
        if (!shaderScript) {
            return null;
        }

        var str = "";
        var k = shaderScript.firstChild;
        while (k) {
            if (k.nodeType == 3) {
                str += k.textContent;
            }
            k = k.nextSibling;
        }

        var shader;
        if (shaderScript.type == "x-shader/x-fragment") {
            shader = gl.createShader(gl.FRAGMENT_SHADER);
        } else if (shaderScript.type == "x-shader/x-vertex") {
            shader = gl.createShader(gl.VERTEX_SHADER);
        } else {
            return null;
        }

        gl.shaderSource(shader, str);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert(gl.getShaderInfoLog(shader));
            return null;
        }

        return shader;
    }


    var shaderProgram;

    function initShaders() {
        var fragmentShader = getShader(gl, "shader-fs-colored");
        var vertexShader = getShader(gl, "shader-vs-colored");

        shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);

        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            alert("Could not initialise shaders");
        }

        gl.useProgram(shaderProgram);

        shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
        gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
		shaderProgram.vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
        gl.enableVertexAttribArray(shaderProgram.vertexColorAttribute);
        shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
        shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
    }


    var mvMatrix = mat4.create();
    var pMatrix = mat4.create();

    function setMatrixUniforms() {
        gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
        gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);
    }



    var triangleVertexPositionBuffer;
	var triangleVertexColorBuffer;
    function initBuffers() {
       // triangleVertexPositionBuffer = gl.createBuffer();
       // gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
        var vertices =  [ 0.0, 0.0, -3.0,
 0.0, 1.0, 1.0,
 -1.0, 0.0, 0.0,

 -1.0, 0.0, 0.0,
1.0, 0.0, 0.0,
0.0, 1.0, 1.0,

0.0, 1.0, 1.0,
1.0, 0.0, 0.0,
0.0, 0.0, -3.0,

0.0, 0.0, -3.0,
-1.0, 0.0, 0.0,
1.0, 0.0, 0.0,

 0.0, 0.0, -1.0,
 -1.0, 0.0, 0.0,
 -3.0, 0.0, -1.0,

 0.0, 0.0, -1.0,
 1.0, 0.0, 0.0,
 3.0, 0.0, -1.0,

 0.5, 0.5,0.5,
 0.2, 0.1, -1.0,
1.0, 1.0, 1.0,

-0.5, 0.5,0.5,
 -0.2, 0.1, -1.0,
-1.0, 1.0, 1.0];
       avionce.SetVertices(vertices);
       // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
       // triangleVertexPositionBuffer.itemSize = 3;
        //triangleVertexPositionBuffer.numItems = 24;
		//triangleVertexColorBuffer = gl.createBuffer();
		//gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexColorBuffer);
		var colors = [
			1.0, 0.0, 0.0, 1.0,
			0.0, 1.0, 0.0, 1.0,
			0.0, 0.0, 1.0, 1.0,
			0.0, 0.0, 1.0, 1.0,
			
			1.0, 0.0, 0.0, 1.0,
			0.0, 1.0, 0.0, 1.0,
			0.0, 0.0, 1.0, 1.0,
			0.0, 0.0, 1.0, 1.0,
			
			1.0, 0.0, 0.0, 1.0,
			0.0, 1.0, 0.0, 1.0,
			0.0, 0.0, 1.0, 1.0,
			0.0, 0.0, 1.0, 1.0,
			
			1.0, 0.0, 0.0, 1.0,
			0.0, 1.0, 0.0, 1.0,
			0.0, 0.0, 1.0, 1.0,
			0.0, 0.0, 1.0, 1.0,
			
			1.0, 0.0, 0.0, 1.0,
			0.0, 1.0, 0.0, 1.0,
			0.0, 0.0, 1.0, 1.0,
			0.0, 0.0, 1.0, 1.0,
			
			1.0, 0.0, 0.0, 1.0,
			0.0, 1.0, 0.0, 1.0,
			0.0, 0.0, 1.0, 1.0,
			0.0, 0.0, 1.0, 1.0
		];
		avionce.SetColors(colors);
   // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    //triangleVertexColorBuffer.itemSize = 4;
   // triangleVertexColorBuffer.numItems = 24;
    }


    function drawScene() {
	prolaz++;
        gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);

        mat4.identity(mvMatrix);
        
        mat4.translate(mvMatrix,[ 0, 0, -13.0]);//[x/120.0-2.2, -y/120.0+2.2, -5.0]
		mat4.rotate(mvMatrix,x/60.0,[0.0,1.0,0.0]);//prolaz/30
		mat4.rotate(mvMatrix,y/60.0,[0.0,0.0,1.0]);
		setMatrixUniforms();
		avionce.Draw();
		mat4.identity(mvMatrix);
		mat4.translate(mvMatrix,[ -4.0, -2.0, -12.0]);
		mat4.rotate(mvMatrix,prolaz/30.0,[0.0,1.0,0.0]);
		setMatrixUniforms();
		avionce.Draw();
		mat4.identity(mvMatrix);
		mat4.translate(mvMatrix,[ 4.0, -2.0, -12.0]);
		mat4.rotate(mvMatrix,-prolaz/35.0,[0.0,1.0,0.0]);
		setMatrixUniforms();
		avionce.Draw();
        //gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
        //gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, triangleVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
		//gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexColorBuffer);
		//gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, triangleVertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
        
        //gl.drawArrays(gl.TRIANGLES, 0, triangleVertexPositionBuffer.numItems);
    }