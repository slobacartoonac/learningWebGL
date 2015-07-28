function podloga(vertices,tcords){
	var  ai=0, bi=0;
		var ra,rb,rc,ka,kb,kc,la1,la2,la3,lb1,lb2,lb3,lc1,lc2,lc3,la,lb,lc;
		ka = [];
for(var i=0; i<51; i++) {
    ka[i] = [];
    for(var j=0; j<51; j++) {
        ka[i][j] = 0.0;
    }
}
		kb = [];
for(var i=0; i<51; i++) {
    kb[i] = [];
    for(var j=0; j<51; j++) {
        kb[i][j] = 0.0;
    }
}
		kc = [];
for(var i=0; i<51; i++) {
    kc[i] = [];
    for(var j=0; j<51; j++) {
        kc[i][j] = 0.0;
    }
}
		
	for(ai=1;ai<=50;ai++){
		for(bi=1;bi<=50;bi++){
			ra=(Math.random()*100)/10;
			if(ai<15){
				if(ai<3)
			ra=(Math.random()*100)/2;
			rb=(Math.random()*100)*Math.sin(ai*0.1)/3;
			rc=(Math.random()*100)*Math.sin(ai*0.1)/3;}
			else{
				rb=(Math.random()*100)*Math.sin(ai*0.1)/5;
				rc=(Math.random()*100)*Math.sin(ai*0.1)/5;}
			ka[ai][bi]=Math.cos(ai*0.13)*500+ra;
			//fixx until rotation of planet is planed// remove after done
			if(ka[ai][bi]>0)ka[ai][bi]=ra*5;
			kb[ai][bi]=Math.sin(bi*0.13)*500*Math.sin(ai*0.13)+rb;
			kc[ai][bi]=Math.cos(bi*0.13)*500*Math.sin(ai*0.13)+rc;
		}};
		for(ai=0;ai<=23;ai++){
		for(bi=1;bi<=47;bi++){
			if(bi>46){
				la3=ka[ai+1][1];
			lb3=kb[ai+1][1];
			lc3=kc[ai+1][1];
			la1=ka[ai][1];
			lb1=kb[ai][1];
			lc1=kc[ai][1];
			}
			else{
			la3=ka[ai+1][bi+1];
			lb3=kb[ai+1][bi+1];
			lc3=kc[ai+1][bi+1];
			la1=ka[ai][bi+1];
			lb1=kb[ai][bi+1];
			lc1=kc[ai][bi+1];}
			la2=ka[ai+1][bi];
			lb2=kb[ai+1][bi];
			lc2=kc[ai+1][bi];
			la=ka[ai][bi];
			lb=kb[ai][bi];
			lc=kc[ai][bi];
	    glTexCoord2f(0.0, 0.0,tcords);glVertex3f( lb, la,lc,vertices);				// Top1
		glTexCoord2f(1.0, 0.0,tcords);glVertex3f(lb2, la2,lc2,vertices);			// Bottom Left1
		glTexCoord2f(1.0, 1.0,tcords);glVertex3f(lb3, la3,lc3,vertices);				// Bottom Right1
	    glTexCoord2f(0.0, 0.0,tcords);glVertex3f( lb, la,lc,vertices);				// Top1
		glTexCoord2f(1.0, 1.0,tcords);glVertex3f(lb3, la3,lc3,vertices);				// Bottom Right1
		glTexCoord2f(0.0, 1.0,tcords);glVertex3f(lb1, la1,lc1,vertices);
}};
}
function glTexCoord2f(a,b,c)
	{
	c.push(a);
	c.push(b);
	}
function glVertex3f(a,b,c,d)
	{
	d.push(a);
	d.push(b);
	d.push(c);
	}
function objectProjectile(vertices, textcord){
glTexCoord2f(0.0, 0.0,textcord);glVertex3f( 0.0, 0.0, -3.0,vertices);				// Top1
		glTexCoord2f(1.0, 1.0,textcord);glVertex3f( 0.0, 1.0, 1.0,vertices);
		glTexCoord2f(0.0, 1.0,textcord);glVertex3f( -1.0, 0.0, 0.0,vertices);

		glTexCoord2f(0.0, 1.0,textcord);glVertex3f( -1.0, 0.0, 0.0,vertices);
		glTexCoord2f(1.0, 0.0,textcord);glVertex3f( 1.0, 0.0, 0.0,vertices);
		glTexCoord2f(0.0, 0.0,textcord);glVertex3f( 0.0, 1.0, 1.0,vertices);

		glTexCoord2f(0.0, 0.0,textcord);glVertex3f( 0.0, 1.0, 1.0,vertices);
		glTexCoord2f(1.0, 0.0,textcord);glVertex3f( 1.0, 0.0, 0.0,vertices);
		glTexCoord2f(0.0, 1.0,textcord);glVertex3f( 0.0, 0.0, -3.0,vertices);

		glTexCoord2f(1.0, 0.0,textcord);glVertex3f( 0.0, 0.0, -3.0,vertices);
		glTexCoord2f(0.0, 1.0,textcord);glVertex3f( -1.0, 0.0, 0.0,vertices);
		glTexCoord2f(0.0, 0.0,textcord);glVertex3f( 1.0, 0.0, 0.0,vertices);
}


