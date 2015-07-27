document.onkeydown = checkKey;
var player=new Player("nonameplayer");
var labela;
var renderer=new Renderer();
function checkKey(e) {

    e = e || window.event;
	player.handleControl(e.keyCode);
    if (e.keyCode === 38) {
         labela.innerHTML=avionce.get();
    }
    else if (e.keyCode === 40) {
	var doleime=new FirmNamed("doleee");
        labela.innerHTML =doleime.get();
    }
    else if (e.keyCode === 37) {
       if(y_rot<1)
	   y_rot+=0.2;
    }
    else if (e.keyCode === 39) {
       if(y_rot>-1)
	   y_rot-=0.2;
    }
	else if (e.keyCode === 32) {
       alert("You pressed a key SPACE");
    }
	else if (e.keyCode === 27) {
       alert("You pressed a key ESC");
    }

}




var x=0;
var y=0;
var x_rot=0;
var y_rot=0;
function webGLStart(kanvas) {
    var canvas = document.getElementById(kanvas);
	var screen_width=outerWidth;
    var screen_height=outerHeight;
	canvas.onmousemove=function(e)
		{
		//x=e.clientX;
		//y=e.clientY;
		}
    initGL(canvas);
    initShaders();
    initBuffers();

    gl.clearColor(0.2, 0.2, 0.2, 1.0);
    gl.enable(gl.DEPTH_TEST);
    window.setInterval(function(){drawScene()},33);
	labela=document.getElementById("undertag");
	window.setInterval(function(){updateLabel()},500);
  }
  
var gl;
var prolaz=0;
    function initGL(canvas) {
        try {
            gl = canvas.getContext("experimental-webgl");
			function resize(){
            gl.viewportWidth = innerWidth;
            gl.viewportHeight = innerHeight;
			canvas.width= gl.viewportWidth;
			canvas.height= gl.viewportHeight;
			}
			resize();
			window.onresize=resize;
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
        var fragmentShader = getShader(gl, "shader-fs-textured");
        var vertexShader = getShader(gl, "shader-vs-textured");

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
		shaderProgram.textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");
        gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);
        shaderProgram.samplerUniform = gl.getUniformLocation(shaderProgram, "uSampler");
    }


    

   // var triangleVertexPositionBuffer;
	//var triangleVertexColorBuffer;
    function initBuffers() {
	var avionce=new Mesh("avionce");
	var avionce2=new Mesh("avionce2");
    var someRendable=new Rendable("nonamesomeRendable");
	var someRendable2=new Rendable("nonamesomeRendable2");
       // triangleVertexPositionBuffer = gl.createBuffer();
       // gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
        var vertices =  [ 
	0.0, 0.0, -3.0,
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

-0.66, 0.0, -1.0,
 -1.0, 0.0, 0.0,
 -3.0, 0.0, -1.0,

 0.66, 0.0, -1.0,
 1.0, 0.0, 0.0,
 3.0, 0.0, -1.0,

 0.5, 0.5,0.5,
 0.2, 0.1, -1.0,
1.0, 1.0, 1.0,

-0.5, 0.5,0.5,
 -0.2, 0.1, -1.0,
-1.0, 1.0, 1.0];
var vertices2 =[];
var cords2=[];
podloga(vertices2,cords2);
       avionce.SetVertices(vertices);
	   avionce2.SetVertices(vertices2);
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
		avionce2.SetColors(colors);
		avionce.SetTextureCords(colors);
		avionce2.SetTextureCords(cords2);
		avionce.SetTexture("test.gif");
		avionce2.SetTexture("test1.gif");
		someRendable2.SetPosition(0,-190,-100);
		someRendable2.SetRotation(0,1,0);
		
		someRendable.SetMeshObject(avionce);
		someRendable2.SetMeshObject(avionce2);
		//renderer.AddRenderer(someRendable);
		renderer.AddRenderer(someRendable2);
		player.AddRendable(someRendable2);
   // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    //triangleVertexColorBuffer.itemSize = 4;
   // triangleVertexColorBuffer.numItems = 24;
    }

var prolazold=0;
function updateLabel()
{
labela.innerHTML="X:"+x.toFixed(2)+"  Y:"+y.toFixed(2)+"</br>x_a:"+x_rot.toFixed(2)+"  y_a:"+y_rot.toFixed(2)+"</br>frame:"+(prolaz-prolazold)*2;
prolazold=prolaz;
}
function drawScene() 
{
	player.Update();
	renderer.RenderScene();
	prolaz++;
}