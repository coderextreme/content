var java = require('java');
java.asyncOptions = {
  asyncSuffix: undefined,     // Don't generate node-style methods taking callbacks
  syncSuffix: "",              // Sync methods use the base name(!!)
  promiseSuffix: "Promise",   // Generate methods returning promises, using the suffix Promise.
  promisify: require('util').promisify, // Needs Node.js version 8 or greater, see comment below
  ifReadOnlySuffix: "_alt"
};
var autoclass = require('./X3Dautoclass');

// Javadoc annotations follow, see below for source.
/**
 * <p> F-16, The Fighting Falcon, Turkish Air Force (TUAF), Turkey. </p>
 <p> Related links: <a href="../../../../AircraftFixedWing/F16-FightingFalcon-Turkey/F16.java">F16.java</a> source, <a href="../../../../AircraftFixedWing/F16-FightingFalcon-Turkey/F16Index.html" target="_top">F16 catalog page</a>, <a href="https://www.web3d.org/x3d/content/examples/X3dResources.html" target="_blank">X3D Resources</a>, <a href="https://www.web3d.org/x3d/content/examples/X3dSceneAuthoringHints.html" target="_blank">X3D Scene Authoring Hints</a> and <a href="https://www.web3d.org/x3d/content/X3dTooltips.html" target="_blank">X3D Tooltips</a>. </p>
	<table style="color:black; border:0px solid; border-spacing:10px 0px;" summary="Scene Metadata">
		<tr style="background-color:silver; border-color:silver;">
			<td style="text-align:center; padding:10px 0px;"><i>meta tags</i></td>
			<td style="text-align:left;   padding:10px 0px;">&nbsp; Document Metadata </td>
		</tr>

		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> title </i> </td>
			<td> <a href="../../../../AircraftFixedWing/F16-FightingFalcon-Turkey/F16.x3d">F16.x3d</a> </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> description </i> </td>
			<td> F-16, The Fighting Falcon, Turkish Air Force (TUAF), Turkey </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> creator </i> </td>
			<td> Murat ONDER, LTJG, Turkish Navy </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> creator </i> </td>
			<td> The coordinates of the main body (Except landing gears, nose antenna, flag, weapons, missile holders, cockpit, cockpit seat and fuel tanks) are mostly similar to the model of Soji Yamakawa and used with permission. </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> created </i> </td>
			<td> 13 July 2003 </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> modified </i> </td>
			<td> 27 November 2015 </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> reference </i> </td>
			<td> <a href="http://www.fas.org/man/dod-101/sys/ac/f-16.htm" target="_blank">http://www.fas.org/man/dod-101/sys/ac/f-16.htm</a> </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> permission </i> </td>
			<td> Here is a copy of the permission for the usage of the main hull; -----Original Message----- From: Soji Yamakawa [mailto:soji@andrew.cmu.edu] Sent: Tuesday, September 16, 2003 8:00 PM To: Onder, Murat TUR Subject: Re: VRML model points usage permission Sure. No problem. Soji ----- Original Message ----- From: "Murat Onder" &lt;monder@nps.navy.mil&gt; To: &lt;Soji_Yamakawa@cmu.edu&gt;; &lt;PEB01130@nifty.ne.jp&gt; Sent: Monday, September 15, 2003 3:50 PM Subject: VRML model points usage permission Hi Sir, I&amp;apos;m a MS student in Naval Postgraduate School. I'm making a model of Turkish F-16 for my project in a VRML course. For the main hull of the F-16, I want to use the coordinate points of your VRML model since I think that model represents well enough F-16. This is going to be only a student project and will not be used for any commercial purposes. Of course I'll make the citation and put the reference links to your page in the meta files of x3d file. I'd like to know if you can give permission to use those points in my model. V/R, Murat Onder LTJG, TU NAVY </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> reference </i> </td>
			<td> The landing gears are taken from the Savage Archive, from F18 Blue Angel, then modified and re-animated. </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> drawing </i> </td>
			<td> "Drawing.jpg" "../../../Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/Drawing.jpg" "<a href="https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/Drawing.jpg%22" target="_blank">https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/Drawing.jpg"</a> </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> Image </i> </td>
			<td> "FrontView.jpg" "FrontView2.jpg" "Missiles.jpg" "../../../Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/FrontView.jpg" "<a href="https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/FrontView.jpg%22" target="_blank">https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/FrontView.jpg"</a> "../../../Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/FrontView2.jpg" "https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/FrontView2.jpg" "../../../Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/Missiles.jpg" "https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/Missiles.jpg" </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> identifier </i> </td>
			<td> <a href="https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/F16.x3d" target="_blank">https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/F16.x3d</a> </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> subject </i> </td>
			<td> F16, F-16, Fighting Falcon </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> generator </i> </td>
			<td> X3D-Edit 3.3, <a href="https://savage.nps.edu/X3D-Edit" target="_blank">https://savage.nps.edu/X3D-Edit</a> </td>
		</tr>
		<tr>
			<td style="text-align:right; vertical-align: text-top;"> <i> license </i> </td>
			<td> <a href="../../../../AircraftFixedWing/F16-FightingFalcon-Turkey/../../license.html">../../license.html</a> </td>
		</tr>
		<tr style="background-color:silver; border-color:silver;">
			<td style="text-align:center;" colspan="2">  &nbsp; </td>
		</tr>
	</table>

	<p>
		This program uses the
		<a href="https://www.web3d.org/specifications/java/X3DJSAIL.html" target="_blank">X3D Java Scene Access Interface Library (X3DJSAIL)</a>.
		It has been produced using the 
		<a href="https://www.web3d.org/x3d/stylesheets/X3dToNodeJS.xslt" target="_blank">X3dToNodeJS.xslt</a>
		stylesheet to create NodeJS source code from an <code>.x3d</code> scene.
	</p>

	* @author Murat ONDER, LTJG, Turkish Navy
	* @author The coordinates of the main body (Except landing gears, nose antenna, flag, weapons, missile holders, cockpit, cockpit seat and fuel tanks) are mostly similar to the model of Soji Yamakawa and used with permission.
 */

function F16
  /** Default constructor to create this object. */
  ()
  {
    /** The initialized model object, created within initialize() method. */
    this.x3dModel = {};
    this.initialize();
    return this;
  }
F16.prototype = {
  /** Create and initialize the X3D model. */
  initialize : function ()
  {

	/** Large attribute array: Coordinate DEF='coordinates' point field, scene-graph level=7, element #19, 621 total numbers made up of 207 3-tuple values */
	this.coordinates_7_19_point = new autoclass.MFVec3f() /* splitting up long array to improve readability */
	.append(new autoclass.MFVec3f(java.newArray("float", [-0.32,0.36,-4.91,-0.38,0.43,-4.21,0.0,0.6,-4.2,0.0,0.5,-4.9,-0.5,0.0,-4.9,-0.6,0.0,-4.2,1.0,0.0,5.8,1.0,0.0,5.3,2.8,-0.4,6.3,2.8,-0.4,6.61])))
	.append(new autoclass.MFVec3f(java.newArray("float", [0.31,-0.36,-4.9,0.4,-0.35,-4.2,0.0,-0.4,-4.2,0.0,-0.4,-4.9,-0.31,-0.36,-4.9,-0.4,-0.35,-4.2,0.5,0.0,-4.9,0.6,0.0,-4.2,0.32,0.36,-4.91,0.38,0.43,-4.21])))
	.append(new autoclass.MFVec3f(java.newArray("float", [-1.0,0.0,5.8,-1.0,0.0,5.3,-2.8,-0.4,6.3,-2.8,-0.4,6.61,0.0,-0.1,-7.0,-0.31,-0.36,-4.9,-0.5,0.0,-4.9,0.0,-0.1,-7.0,0.0,-0.4,-4.9,0.31,-0.36,-4.9])))
	.append(new autoclass.MFVec3f(java.newArray("float", [0.5,0.0,-4.9,0.32,0.36,-4.91,-0.27,0.93,-3.51,0.0,1.1,-3.6,-0.33,0.5,-3.41,-0.34,0.9,-1.73,0.0,0.9,-1.0,0.0,1.1,-1.8,-0.38,0.64,-1.68,0.34,0.9,-1.73])))
	.append(new autoclass.MFVec3f(java.newArray("float", [0.0,0.9,-1.0,0.38,0.64,-1.68,0.34,0.9,-1.73,0.27,0.93,-3.51,0.33,0.5,-3.41,0.0,1.3,-2.8,0.45,1.02,-2.68,0.38,0.64,-1.68,0.53,0.5,-2.56,-0.53,0.5,-2.56])))
	.append(new autoclass.MFVec3f(java.newArray("float", [-0.45,1.02,-2.68,-0.53,0.75,0.0,-0.56,0.66,2.8,0.0,0.7,2.8,0.0,0.8,0.0,-1.1,0.3,0.0,-1.0,0.3,2.8,-0.37,0.57,4.9,0.0,0.59,4.9,-0.7,0.3,4.9])))
	.append(new autoclass.MFVec3f(java.newArray("float", [-0.7,0.3,4.9,-0.7,0.0,7.0,-0.5,0.49,7.0,-0.5,0.49,7.0,0.0,0.7,7.0,-1.4,0.0,0.0,-1.4,0.0,3.9,-1.4,0.0,3.9,-1.0,0.0,3.9,-1.0,0.3,2.8])))
	.append(new autoclass.MFVec3f(java.newArray("float", [-1.0,0.3,4.9,-0.59,0.65,-0.77,-0.8,0.3,-0.6,-1.4,0.0,-0.7,-1.0,-0.1,2.8,-0.7,-0.7,-2.5,-0.5,-0.9,-2.5,-0.5,-0.9,-0.6,-0.7,-0.7,-0.6,0.0,-1.0,-2.5])))
	.append(new autoclass.MFVec3f(java.newArray("float", [0.0,-1.0,-0.6,-0.72,-0.12,-2.5,-0.8,-0.3,-2.5,-0.8,-0.3,-0.6,-0.8,-0.3,-2.5,-0.8,-0.3,-0.6,-1.4,0.0,0.0,-1.4,0.0,-0.7,-0.7,-0.1,4.9,-1.0,-0.1,4.9])))
	.append(new autoclass.MFVec3f(java.newArray("float", [-0.5,-0.9,4.9,-0.7,-0.7,4.9,0.0,-1.0,4.9,-0.7,-0.1,4.9,-0.5,-0.5,7.0,-0.7,0.0,7.0,0.0,-0.7,7.0,-1.0,0.0,7.4,-2.8,-0.4,7.1,-2.57,-0.32,7.42])))
	.append(new autoclass.MFVec3f(java.newArray("float", [-4.9,0.1,4.0,-5.1,0.1,4.0,-5.1,-0.1,4.0,-4.9,-0.1,4.0,-5.1,0.1,1.6,-5.1,-0.1,1.6,-4.9,0.1,2.8,-4.9,-0.1,2.8,-0.58,-0.83,3.6,-0.72,-1.4,3.9])))
	.append(new autoclass.MFVec3f(java.newArray("float", [-0.69,-1.32,4.9,-0.58,-0.83,4.9,0.58,-0.83,3.6,0.72,-1.4,3.9,0.69,-1.32,4.9,0.58,-0.83,4.9,4.9,-0.1,2.8,5.1,-0.1,1.6,5.1,-0.1,4.0,4.9,-0.1,4.0])))
	.append(new autoclass.MFVec3f(java.newArray("float", [-0.8,0.0,-2.5,4.9,0.1,4.0,5.1,0.1,4.0,5.1,0.1,1.6,4.9,0.1,2.8,0.59,0.65,-0.77,0.8,0.3,-0.6,0.8,0.0,-2.5,-0.8,0.0,-2.5,0.8,-0.3,-0.6])))
	.append(new autoclass.MFVec3f(java.newArray("float", [0.72,-0.12,-2.5,0.8,0.0,-2.5,1.0,0.0,7.4,2.8,-0.4,7.1,2.57,-0.32,7.42,-0.7,0.0,7.4,0.5,-0.9,4.9,0.7,-0.7,4.9,0.5,-0.5,7.0,-4.9,0.0,2.8])))
	.append(new autoclass.MFVec3f(java.newArray("float", [-4.9,0.0,3.9,0.7,-0.1,4.9,0.7,0.0,7.0,1.4,0.0,0.0,4.9,0.0,2.8,4.9,0.0,3.9,1.4,0.0,3.9,1.4,0.0,-0.7,1.4,0.0,-0.7,0.7,-0.7,-0.6])))
	.append(new autoclass.MFVec3f(java.newArray("float", [0.8,-0.3,-0.6,0.5,-0.9,-0.6,1.0,-0.1,4.9,1.0,0.3,4.9,0.7,0.0,7.4,0.7,0.3,4.9,0.7,-0.1,4.9,0.56,0.66,2.8,0.53,0.75,0.0,1.0,0.3,2.8])))
	.append(new autoclass.MFVec3f(java.newArray("float", [1.1,0.3,0.0,0.37,0.57,4.9,0.7,0.3,4.9,0.5,0.49,7.0,0.7,0.0,7.0,0.5,0.49,7.0,1.4,0.0,3.9,1.4,0.0,0.0,1.0,0.3,2.8,1.0,0.0,3.9])))
	.append(new autoclass.MFVec3f(java.newArray("float", [1.0,-0.1,2.8,0.5,-0.9,-2.5,0.7,-0.7,-2.5,0.8,-0.3,-2.5,0.8,-0.3,-2.5,1.0,0.3,3.9,0.59,0.65,-0.77,0.0,0.7,2.8,0.0,1.4,4.5,0.0,0.59,4.9])))
	.append(new autoclass.MFVec3f(java.newArray("float", [0.0,3.5,6.8,0.0,3.5,8.1,0.0,1.4,7.3,0.0,0.7,7.0,0.0,0.7,7.3,-1.0,0.3,3.9,0.0,0.35,7.7,-0.25,0.24,7.7,-0.35,0.0,7.7,-0.25,-0.25,7.7])))
	.append(new autoclass.MFVec3f(java.newArray("float", [0.0,-0.35,7.7,0.25,-0.25,7.7,0.35,0.0,7.7,0.25,0.24,7.7,0.0,-0.2,-2.5,0.7,-0.7,-2.5,0.5,-0.9,-2.5,0.0,-1.0,-2.5,-0.5,-0.9,-2.5,-0.7,-0.7,-2.5])))
	.append(new autoclass.MFVec3f(java.newArray("float", [0.0,-0.2,-2.5,-0.72,-0.12,-2.5,0.72,-0.12,-2.5,0.25,0.24,7.7,0.35,0.0,7.7,-0.35,0.0,7.7,-0.25,0.24,7.7])));

	/** Large attribute array: Normal DEF='normalVector' vector field, scene-graph level=7, element #20, 396 total numbers made up of 132 3-tuple values */
	this.normalVector_7_20_vector = new autoclass.MFVec3f() /* splitting up long array to improve readability */
	.append(new autoclass.MFVec3f(java.newArray("float", [-0.68,0.714,-0.166,-0.689,0.721,-0.072,0.0,0.965,-0.26,0.0,0.985,-0.175,-0.99,-0.016,-0.138,-0.999,-0.022,-0.037,0.567,-0.819,-0.093,0.561,-0.828,0.0,0.0,-1.0,0.0,0.0,-0.997,-0.071])))
	.append(new autoclass.MFVec3f(java.newArray("float", [-0.567,-0.819,-0.093,-0.561,-0.828,0.0,0.99,-0.016,-0.138,0.999,-0.022,-0.037,0.68,0.714,-0.166,0.689,0.721,-0.072,-0.351,0.889,-0.294,-0.868,-0.459,-0.19,-0.13,-0.982,-0.14,0.13,-0.982,-0.14])))
	.append(new autoclass.MFVec3f(java.newArray("float", [0.868,-0.459,-0.19,0.872,0.431,-0.231,-0.834,0.445,-0.327,0.0,0.929,-0.369,-0.88,0.401,-0.256,-0.799,0.577,0.169,-0.58,0.798,0.164,0.0,0.998,0.065,-0.862,0.486,0.146,0.886,0.219,0.408])))
	.append(new autoclass.MFVec3f(java.newArray("float", [0.799,0.577,0.169,0.834,0.445,-0.327,0.88,0.401,-0.256,-0.0,0.995,-0.096,0.842,0.534,-0.08,0.862,0.486,0.146,0.833,0.549,-0.073,-0.833,0.549,-0.073,-0.842,0.534,-0.08,-0.485,0.87,-0.089])))
	.append(new autoclass.MFVec3f(java.newArray("float", [-0.37,0.929,0.0,0.0,1.0,0.0,-0.0,1.0,-0.01,-0.592,0.796,-0.125,-0.573,0.818,0.05,-0.37,0.929,-0.01,0.0,1.0,-0.025,-0.487,0.873,0.036,-0.923,0.381,0.05,-0.683,0.704,0.195])))
	.append(new autoclass.MFVec3f(java.newArray("float", [0.0,0.99,0.14,-0.707,0.707,0.0,-0.385,0.912,0.141,0.0,0.966,0.259,-0.563,0.826,-0.037,-0.661,0.738,-0.138,-0.521,0.846,-0.115,0.0,-0.996,0.09,-0.773,-0.436,-0.461,-0.42,-0.781,-0.463])))
	.append(new autoclass.MFVec3f(java.newArray("float", [-0.474,-0.881,0.0,-0.871,-0.492,0.0,0.0,-0.891,-0.455,-0.917,0.399,0.0,-0.881,0.074,-0.467,-0.902,-0.429,-0.039,-0.09,-0.995,0.05,-0.451,-0.892,0.0,-0.28,-0.959,0.04,-0.468,-0.878,0.097])))
	.append(new autoclass.MFVec3f(java.newArray("float", [-0.877,-0.474,0.085,0.0,-0.997,0.072,-0.693,-0.72,0.045,-0.79,-0.562,0.244,-0.968,0.003,0.25,0.0,-0.966,0.257,0.0,0.0,1.0,-1.0,0.0,0.0,0.987,0.0,-0.16,1.0,0.0,0.0])))
	.append(new autoclass.MFVec3f(java.newArray("float", [-0.831,-0.551,-0.08,0.563,0.826,-0.037,0.661,0.738,-0.138,0.998,-0.037,-0.049,-0.987,0.0,-0.16,-0.998,-0.037,-0.049,0.831,-0.551,-0.08,0.0,-0.999,0.04,0.0,0.993,0.12,0.468,-0.878,0.097])))
	.append(new autoclass.MFVec3f(java.newArray("float", [0.877,-0.474,0.085,0.79,-0.562,0.244,-0.419,-0.897,-0.14,0.693,-0.72,0.045,0.968,0.003,0.25,0.521,0.846,-0.115,0.419,-0.897,-0.14,0.871,-0.492,0.0,0.902,-0.429,-0.039,0.474,-0.881,0.0])))
	.append(new autoclass.MFVec3f(java.newArray("float", [0.37,0.929,0.0,0.485,0.87,-0.089,0.573,0.818,0.05,0.592,0.796,-0.125,0.37,0.929,-0.01,0.487,0.873,0.036,0.923,0.381,0.05,0.683,0.704,0.195,0.385,0.912,0.141,0.707,0.707,0.0])))
	.append(new autoclass.MFVec3f(java.newArray("float", [0.42,-0.781,-0.463,0.773,-0.436,-0.461,0.917,0.399,0.0,0.881,0.074,-0.467,0.09,-0.995,0.05,0.451,-0.892,0.0,0.28,-0.959,0.04,0.42,0.901,-0.11,0.0,0.666,0.746,-0.481,0.468,0.741])))
	.append(new autoclass.MFVec3f(java.newArray("float", [-0.674,0.0,0.738,-0.475,-0.475,0.741,0.0,-0.674,0.738,0.475,-0.475,0.741,0.674,0.0,0.738,0.481,0.468,0.741,0.0,0.0,-1.0,0.0,-0.893,-0.45,-0.901,-0.224,-0.372,0.901,-0.224,-0.372])))
	.append(new autoclass.MFVec3f(java.newArray("float", [0.841,0.34,0.421,-0.841,0.34,0.421])));

	/** Large attribute array: IndexedFaceSet coordIndex field, scene-graph level=6, element #25, 72 total numbers */
	this.IndexedFaceSet_6_25_coordIndex = new autoclass.MFInt32(java.newArray("int", [2,32,33,-1,34,32,2,-1,35,36,37,-1,38,36,35,-1,39,40,41,-1,37,36,42,-1,2,43,44,-1,33,43,2,-1,45,37,42,46,-1,46,42,47,48,-1,33,45,46,43,-1,43,46,48,44,-1,34,49,50,32,-1,32,50,45,33,-1,49,38,35,50,-1,50,35,37,45,-1]));

	/** Large attribute array: IndexedFaceSet normalIndex field, scene-graph level=6, element #25, 72 total numbers */
	this.IndexedFaceSet_6_25_normalIndex = new autoclass.MFInt32(java.newArray("int", [2,22,23,-1,24,22,2,-1,25,26,27,-1,28,26,25,-1,29,29,29,-1,27,26,30,-1,2,31,32,-1,23,31,2,-1,33,27,30,34,-1,34,30,35,36,-1,23,33,34,31,-1,31,34,36,32,-1,24,37,38,22,-1,22,38,33,23,-1,37,28,25,38,-1,38,25,27,33,-1]));

	/** Large attribute array: IndexedFaceSet coordIndex field, scene-graph level=6, element #31, 482 total numbers */
	this.IndexedFaceSet_6_31_coordIndex = new autoclass.MFInt32(java.newArray("int", [51,52,53,54,-1,55,56,52,51,-1,52,57,58,53,-1,56,59,57,52,-1,60,61,62,-1,57,59,63,-1,57,63,64,-1,58,57,64,-1,56,55,65,66,-1,67,68,69,-1,69,70,60,-1,71,54,36,-1,51,54,71,-1,72,51,71,-1,55,51,72,-1,72,73,55,-1,65,55,73,-1,68,67,74,-1,75,76,77,78,-1,76,79,80,77,-1,81,82,83,-1,84,75,78,85,-1,83,74,67,-1,67,86,87,83,-1,74,88,89,-1,88,74,83,-1,78,77,90,91,-1,77,80,92,90,-1,85,91,93,-1,85,78,91,-1,94,95,93,-1,94,93,91,-1,91,96,94,-1,96,91,90,-1,90,92,96,-1,100,101,102,103,-1,101,104,105,102,-1,104,106,107,105,-1,106,100,103,107,-1,106,104,101,100,-1,103,102,105,107,-1,116,117,118,119,-1,120,81,83,-1,121,122,123,124,-1,116,119,121,124,-1,48,125,126,127,-1,117,116,124,123,-1,128,72,71,49,-1,118,117,123,122,-1,119,118,122,121,-1,129,130,131,-1,89,88,135,97,-1,60,70,97,135,-1,70,89,97,-1,96,92,136,-1,136,137,96,-1,138,96,137,-1,120,83,87,-1,128,73,72,-1,137,141,138,-1,141,142,138,-1,126,147,127,-1,148,129,131,-1,137,149,150,-1,141,137,150,-1,136,92,80,151,-1,137,136,151,149,-1,132,152,153,-1,154,132,153,155,-1,132,154,156,152,-1,54,53,157,158,-1,158,157,159,160,-1,53,58,161,157,-1,157,161,162,159,-1,163,164,155,-1,165,162,161,-1,64,165,161,-1,64,161,58,-1,166,167,160,159,-1,168,169,146,-1,155,153,168,-1,36,54,125,-1,125,54,158,-1,125,158,126,-1,126,158,160,-1,160,147,126,-1,147,160,167,-1,170,146,169,-1,149,151,171,172,-1,151,80,79,171,-1,129,173,130,-1,150,149,172,174,-1,146,170,129,-1,129,148,143,146,-1,152,156,170,-1,129,170,156,-1,156,154,164,-1,154,155,164,-1,168,175,169,-1,175,153,152,169,-1,152,170,169,-1,48,47,125,-1,41,40,176,-1,71,38,49,-1,71,36,38,-1,61,135,88,-1,61,60,135,-1,68,185,69,-1,68,74,89,-1,68,89,70,185,-1]));

	/** Large attribute array: IndexedFaceSet normalIndex field, scene-graph level=6, element #31, 482 total numbers */
	this.IndexedFaceSet_6_31_normalIndex = new autoclass.MFInt32(java.newArray("int", [39,40,41,42,-1,43,44,40,39,-1,40,45,46,41,-1,44,47,45,40,-1,48,48,48,-1,45,47,49,-1,45,49,50,-1,46,45,50,-1,44,43,51,52,-1,53,53,53,-1,41,41,41,-1,54,42,26,-1,39,42,54,-1,55,39,54,-1,43,39,55,-1,55,56,43,-1,51,43,56,-1,57,57,57,-1,58,59,60,61,-1,59,62,8,60,-1,63,63,63,-1,64,58,61,65,-1,66,66,66,-1,67,67,67,67,-1,8,8,8,-1,68,68,68,-1,61,60,69,70,-1,60,8,71,69,-1,65,70,72,-1,65,61,70,-1,73,74,72,-1,73,72,70,-1,70,75,73,-1,75,70,69,-1,69,71,75,-1,76,76,76,76,-1,77,77,77,77,-1,78,78,78,78,-1,79,79,79,79,-1,41,41,41,41,-1,8,8,8,8,-1,8,8,8,8,-1,80,80,80,-1,41,41,41,41,-1,77,77,77,77,-1,36,81,82,83,-1,84,84,84,84,-1,85,55,54,37,-1,79,79,79,79,-1,76,76,76,76,-1,86,86,86,-1,87,87,87,87,-1,88,88,88,88,-1,77,77,77,-1,75,71,89,-1,89,90,75,-1,91,75,90,-1,92,92,92,-1,85,56,55,-1,90,93,91,-1,93,94,91,-1,82,95,83,-1,96,96,96,-1,90,97,98,-1,93,90,98,-1,89,71,8,99,-1,90,89,99,97,-1,79,79,79,-1,88,88,88,88,-1,87,87,87,87,-1,42,41,100,101,-1,101,100,102,103,-1,41,46,104,100,-1,100,104,105,102,-1,106,106,106,-1,107,105,104,-1,50,107,104,-1,50,104,46,-1,108,109,103,102,-1,53,53,53,-1,41,41,41,-1,26,42,81,-1,81,42,101,-1,81,101,82,-1,82,101,103,-1,103,95,82,-1,95,103,109,-1,57,57,57,-1,97,99,110,111,-1,99,8,62,110,-1,112,112,112,-1,98,97,111,113,-1,114,114,114,-1,115,115,115,115,-1,8,8,8,-1,116,116,116,-1,77,77,77,-1,77,77,77,-1,79,79,79,-1,79,79,79,79,-1,79,79,79,-1,36,35,81,-1,117,117,117,-1,54,28,37,-1,54,26,28,-1,79,79,79,-1,79,79,79,-1,77,77,77,-1,77,77,77,-1,77,77,77,77,-1]));

	/** Large attribute array: IndexedFaceSet coordIndex field, scene-graph level=6, element #49, 46 total numbers */
	this.IndexedFaceSet_6_49_coordIndex = new autoclass.MFInt32(java.newArray("int", [12,200,201,15,-1,19,48,127,17,-1,15,201,128,5,-1,17,127,202,11,-1,11,202,200,12,-1,5,128,49,1,-1,48,19,44,-1,19,2,44,-1,34,1,49,-1,34,2,1,-1]));

	/** Large attribute array: IndexedFaceSet normalIndex field, scene-graph level=6, element #49, 46 total numbers */
	this.IndexedFaceSet_6_49_normalIndex = new autoclass.MFInt32(java.newArray("int", [8,127,128,11,-1,15,36,83,13,-1,11,128,85,5,-1,13,83,129,7,-1,7,129,127,8,-1,5,85,37,1,-1,36,15,32,-1,15,2,32,-1,24,1,37,-1,24,2,1,-1]));

	/** Large attribute array: IndexedFaceSet coordIndex field, scene-graph level=6, element #55, 40 total numbers */
	this.IndexedFaceSet_6_55_coordIndex = new autoclass.MFInt32(java.newArray("int", [64,186,193,165,-1,203,204,164,163,-1,192,191,138,142,-1,191,190,96,138,-1,94,96,190,189,-1,95,94,189,188,-1,63,187,186,64,-1,62,61,205,206,-1]));

	/** Large attribute array: IndexedFaceSet normalIndex field, scene-graph level=6, element #55, 40 total numbers */
	this.IndexedFaceSet_6_55_normalIndex = new autoclass.MFInt32(java.newArray("int", [50,118,125,107,-1,130,130,130,130,-1,124,123,91,94,-1,123,122,75,91,-1,73,75,122,121,-1,74,73,121,120,-1,49,119,118,50,-1,131,131,131,131,-1]));

	/** Large attribute array: IndexedFaceSet coordIndex field, scene-graph level=6, element #61, 144 total numbers */
	this.IndexedFaceSet_6_61_coordIndex = new autoclass.MFInt32(java.newArray("int", [6,7,8,9,-1,9,8,7,6,-1,20,21,22,23,-1,23,22,21,20,-1,97,20,23,98,99,-1,99,98,23,20,97,-1,108,109,110,111,-1,111,110,109,108,-1,112,113,114,115,-1,115,114,113,112,-1,132,6,9,133,134,-1,134,133,9,6,132,-1,86,139,140,67,-1,67,140,139,86,-1,143,144,145,146,-1,146,145,144,143,-1,177,178,179,-1,179,178,177,-1,178,180,181,182,183,179,-1,179,183,182,181,180,178,-1,182,184,183,-1,183,184,182,-1,177,178,179,-1,179,178,177,-1,178,180,181,182,183,179,-1,179,183,182,181,180,178,-1,182,184,183,-1,183,184,182,-1]));

	/** Large attribute array: IndexedFaceSet normalIndex field, scene-graph level=6, element #61, 40 total numbers */
	this.IndexedFaceSet_6_61_normalIndex = new autoclass.MFInt32(java.newArray("int", [50,118,125,107,-1,130,130,130,130,-1,124,123,91,94,-1,123,122,75,91,-1,73,75,122,121,-1,74,73,121,120,-1,49,119,118,50,-1,131,131,131,131,-1]));

	/** Large attribute array: IndexedFaceSet coordIndex field, scene-graph level=6, element #67, 40 total numbers */
	this.IndexedFaceSet_6_67_coordIndex = new autoclass.MFInt32(java.newArray("int", [0,1,2,3,-1,4,5,1,0,-1,10,11,12,13,-1,14,15,5,4,-1,13,12,15,14,-1,16,17,11,10,-1,18,19,17,16,-1,3,2,19,18,-1]));
  this.x3dModel = (new autoclass.X3D()).setProfile("Immersive").setVersion("3.0")
  .setHead((new autoclass.head())
    .addMeta((new autoclass.meta()).setName("title").setContent("F16.x3d"))
    .addMeta((new autoclass.meta()).setName("description").setContent("F-16, The Fighting Falcon, Turkish Air Force (TUAF), Turkey"))
    .addMeta((new autoclass.meta()).setName("creator").setContent("Murat ONDER, LTJG, Turkish Navy"))
    .addMeta((new autoclass.meta()).setName("creator").setContent("The coordinates of the main body (Except landing gears, nose antenna, flag, weapons, missile holders, cockpit, cockpit seat and fuel tanks) are mostly similar to the model of Soji Yamakawa and used with permission."))
    .addMeta((new autoclass.meta()).setName("created").setContent("13 July 2003"))
    .addMeta((new autoclass.meta()).setName("modified").setContent("27 November 2015"))
    .addMeta((new autoclass.meta()).setName("reference").setContent("http://www.fas.org/man/dod-101/sys/ac/f-16.htm"))
    .addMeta((new autoclass.meta()).setName("permission").setContent("Here is a copy of the permission for the usage of the main hull; -----Original Message----- From: Soji Yamakawa [mailto:soji@andrew.cmu.edu] Sent: Tuesday, September 16, 2003 8:00 PM To: Onder, Murat TUR Subject: Re: VRML model points usage permission Sure. No problem. Soji ----- Original Message ----- From: \"Murat Onder\" <monder@nps.navy.mil> To: <Soji_Yamakawa@cmu.edu>; <PEB01130@nifty.ne.jp> Sent: Monday, September 15, 2003 3:50 PM Subject: VRML model points usage permission Hi Sir, I&apos;m a MS student in Naval Postgraduate School. I'm making a model of Turkish F-16 for my project in a VRML course. For the main hull of the F-16, I want to use the coordinate points of your VRML model since I think that model represents well enough F-16. This is going to be only a student project and will not be used for any commercial purposes. Of course I'll make the citation and put the reference links to your page in the meta files of x3d file. I'd like to know if you can give permission to use those points in my model. V/R, Murat Onder LTJG, TU NAVY"))
    .addMeta((new autoclass.meta()).setName("reference").setContent("The landing gears are taken from the Savage Archive, from F18 Blue Angel, then modified and re-animated."))
    .addMeta((new autoclass.meta()).setName("drawing").setContent("\"Drawing.jpg\" \"../../../Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/Drawing.jpg\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/Drawing.jpg\""))
    .addMeta((new autoclass.meta()).setName("Image").setContent("\"FrontView.jpg\" \"FrontView2.jpg\" \"Missiles.jpg\" \"../../../Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/FrontView.jpg\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/FrontView.jpg\" \"../../../Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/FrontView2.jpg\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/FrontView2.jpg\" \"../../../Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/Missiles.jpg\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/Missiles.jpg\""))
    .addMeta((new autoclass.meta()).setName("identifier").setContent("https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/F16.x3d"))
    .addMeta((new autoclass.meta()).setName("subject").setContent("F16, F-16, Fighting Falcon"))
    .addMeta((new autoclass.meta()).setName("generator").setContent("X3D-Edit 3.3, https://savage.nps.edu/X3D-Edit"))
    .addMeta((new autoclass.meta()).setName("license").setContent("../../license.html")))
  .setScene((new autoclass.Scene())
    .addChild((new autoclass.Transform("F16Transform"))
      .addChild((new autoclass.Transform("MainFrameTransform")).setScale(3.0,3.0,3.0)
        .addChild((new autoclass.Shape("Nose"))
          .setAppearance((new autoclass.Appearance())
            .setMaterial((new autoclass.Material()).setDiffuseColor(.25,.25,.25)))
          .setGeometry((new autoclass.IndexedFaceSet()).setCreaseAngle(0.5).setSolid(false).setCoordIndex(java.newArray("int", [24,0,3,-1,4,0,24,-1,25,26,27,-1,28,25,27,-1,27,29,28,-1,27,30,29,-1,27,31,30,-1,3,18,24,-1])).setNormalIndex(java.newArray("int", [16,0,3,-1,4,0,16,-1,17,17,17,-1,18,18,18,-1,19,19,19,-1,20,20,20,-1,21,21,21,-1,3,14,16,-1]))
            .setCoord((new autoclass.Coordinate("coordinates")).setPoint(this.coordinates_7_19_point))
            .setNormal((new autoclass.Normal("normalVector")).setVector(this.normalVector_7_20_vector))))
        .addChild((new autoclass.Shape("Canopy"))
          .setAppearance((new autoclass.Appearance())
            .setMaterial((new autoclass.Material()).setDiffuseColor(.25,.25,.25).setTransparency(0.8)))
          .setGeometry((new autoclass.IndexedFaceSet()).setCreaseAngle(0.5).setSolid(false).setCoordIndex(this.IndexedFaceSet_6_25_coordIndex).setNormalIndex(this.IndexedFaceSet_6_25_normalIndex)
            .setCoord((new autoclass.Coordinate()))
            .setNormal((new autoclass.Normal()))))
        .addChild((new autoclass.Shape("MainBodyAndWingEdges"))
          .setAppearance((new autoclass.Appearance())
            .setMaterial((new autoclass.Material()).setDiffuseColor(.1796,.1914,.2382)))
          .setGeometry((new autoclass.IndexedFaceSet()).setCreaseAngle(0.5).setSolid(false).setCoordIndex(this.IndexedFaceSet_6_31_coordIndex).setNormalIndex(this.IndexedFaceSet_6_31_normalIndex)
            .setCoord((new autoclass.Coordinate()))
            .setNormal((new autoclass.Normal()))))
        .addChild((new autoclass.Shape("ExhaustExitFlatPanel"))
          .setAppearance((new autoclass.Appearance())
            .setMaterial((new autoclass.Material()).setDiffuseColor(.5,.5,.5)))
          .setGeometry((new autoclass.IndexedFaceSet()).setCreaseAngle(0.5).setSolid(false).setCoordIndex(java.newArray("int", [186,187,188,189,190,-1,190,191,192,193,186,-1])).setNormalIndex(java.newArray("int", [118,119,120,121,122,-1,122,123,124,125,118,-1]))
            .setCoord((new autoclass.Coordinate()))
            .setNormal((new autoclass.Normal()))))
        .addChild((new autoclass.Shape("ExhaustEntranceFrontBottomPart"))
          .setAppearance((new autoclass.Appearance())
            .setMaterial((new autoclass.Material()).setDiffuseColor(.2304,.2304,.2304)))
          .setGeometry((new autoclass.IndexedFaceSet()).setCreaseAngle(0.5).setSolid(false).setCoordIndex(java.newArray("int", [194,130,173,195,196,197,-1,197,198,199,82,81,194,-1])).setNormalIndex(java.newArray("int", [126,126,126,126,126,126,-1,126,126,126,126,126,126,-1]))
            .setCoord((new autoclass.Coordinate()))
            .setNormal((new autoclass.Normal()))))
        .addChild((new autoclass.Shape("ThirdPartFromNoseUnderCanopy"))
          .setAppearance((new autoclass.Appearance())
            .setMaterial((new autoclass.Material()).setDiffuseColor(.6,.6,.6)))
          .setGeometry((new autoclass.IndexedFaceSet()).setCreaseAngle(0.5).setSolid(false).setCoordIndex(this.IndexedFaceSet_6_49_coordIndex).setNormalIndex(this.IndexedFaceSet_6_49_normalIndex)
            .setCoord((new autoclass.Coordinate()))
            .setNormal((new autoclass.Normal()))))
        .addChild((new autoclass.Shape("RearExhaustExitPartLastPartOfMainBody"))
          .setAppearance((new autoclass.Appearance())
            .setMaterial((new autoclass.Material()).setDiffuseColor(.37,.37,.37).setShininess(.5)))
          .setGeometry((new autoclass.IndexedFaceSet()).setCreaseAngle(0.5).setSolid(false).setCoordIndex(this.IndexedFaceSet_6_55_coordIndex).setNormalIndex(this.IndexedFaceSet_6_55_normalIndex)
            .setCoord((new autoclass.Coordinate()))
            .setNormal((new autoclass.Normal()))))
        .addChild((new autoclass.Shape("WingsAndTail"))
          .setAppearance((new autoclass.Appearance())
            .setMaterial((new autoclass.Material()).setEmissiveColor(.1796,.1914,.2382)))
          .setGeometry((new autoclass.IndexedFaceSet()).setColorPerVertex(false).setCreaseAngle(0.5).setSolid(false).setCoordIndex(this.IndexedFaceSet_6_61_coordIndex).setNormalIndex(this.IndexedFaceSet_6_61_normalIndex)
            .setCoord((new autoclass.Coordinate()))
            .setNormal((new autoclass.Normal()))))
        .addChild((new autoclass.Shape("SecondPartAfterNose"))
          .setAppearance((new autoclass.Appearance())
            .setMaterial((new autoclass.Material()).setDiffuseColor(.6,.6,.6)))
          .setGeometry((new autoclass.IndexedFaceSet()).setCreaseAngle(0.5).setSolid(false).setCoordIndex(this.IndexedFaceSet_6_67_coordIndex).setNormalIndex(java.newArray("int", [0,1,2,3,-1,4,5,1,0,-1,6,7,8,9,-1,10,11,5,4,-1,9,8,11,10,-1,12,13,7,6,-1,14,15,13,12,-1,3,2,15,14,-1]))
            .setCoord((new autoclass.Coordinate()))
            .setNormal((new autoclass.Normal())))))
      .addChild((new autoclass.Transform("CockpitTransform")).setRotation(1.0,0.0,0.0,-0.1).setScale(0.045,0.045,0.045).setTranslation(0.0,1.0,-10.0)
        .addChild((new autoclass.Inline()).setUrl(new autoclass.MFString("\"Cockpit.x3d\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/Cockpit.x3d\" \"Cockpit.wrl\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/Cockpit.wrl\""))))
      .addChild((new autoclass.Transform("SeatTransform")).setRotation(-1.0,0.0,0.0,-0.1).setScale(0.9,0.9,0.9).setTranslation(0.0,0.0,-8.3)
        .addChild((new autoclass.Inline()).setUrl(new autoclass.MFString("\"Seat.x3d\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/Seat.x3d\" \"Seat.wrl\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/Seat.wrl\""))))
      .addChild((new autoclass.Transform("FrontWheelTransform")).setCenter(0.0,2.5,0.0).setRotation(-1.0,0.0,0.0,1.92).setTranslation(0.7,-5.2,-6.5)
        .addComments(" Front wheel is taken from the Savage Library, modified and re-animated.(from F18 Blue Angel) ")
        .addChild((new autoclass.Inline()).setUrl(new autoclass.MFString("\"FrontWheel.x3d\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/FrontWheel.x3d\" \"FrontWheel.wrl\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/FrontWheel.wrl\""))))
      .addChild((new autoclass.Transform("RearLeftWheelTransform")).setCenter(0.0,2.5,0.0).setRotation(1.0,0.0,1.0,1.92).setTranslation(-2.95,-5.0,7.0)
        .addComments(" Rear wheels are taken from the Savage Library and re-animated (from F18 Blue Angel) ")
        .addChild((new autoclass.Inline()).setUrl(new autoclass.MFString("\"RearLeftWheel.x3d\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/RearLeftWheel.x3d\" \"RearLeftWheel.wrl\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/RearLeftWheel.wrl\""))))
      .addChild((new autoclass.Transform("RearRightWheelTransform")).setCenter(0.0,2.5,0.0).setRotation(-1.0,0.0,-1.0,1.92).setTranslation(2.95,-5.0,7.0)
        .addComments(" Rear wheels are taken from the Savage Library and re-animated (from F18 Blue Angel) ")
        .addChild((new autoclass.Inline()).setUrl(new autoclass.MFString("\"RearRightWheel.x3d\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/RearRightWheel.x3d\" \"RearRightWheel.wrl\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/RearRightWheel.wrl\""))))
      .addChild((new autoclass.Transform("CockpitButtonsTransform"))
        .addChild((new autoclass.Transform("UpButtonTransform")).setRotation(1.0,0.0,0.0,1.57).setScale(.008,.008,.008).setTranslation(-0.95,1.05,-10.0)
          .addChild((new autoclass.Shape())
            .setGeometry((new autoclass.Cylinder()).setHeight(1).setRadius(4))
            .setAppearance((new autoclass.Appearance())
              .setMaterial((new autoclass.Material()).setDiffuseColor(1.0,0.0,0.0).setShininess(.8))))
          .addChild((new autoclass.TouchSensor("TouchSensorUp")).setDescription("click for gears up")))
        .addChild((new autoclass.Transform("DownButtonTransform")).setRotation(1.0,0.0,0.0,1.57).setScale(.008,.008,.008).setTranslation(-0.83,1.05,-10.0)
          .addChild((new autoclass.Shape())
            .setGeometry((new autoclass.Cylinder()).setHeight(1).setRadius(4))
            .setAppearance((new autoclass.Appearance())
              .setMaterial((new autoclass.Material()).setDiffuseColor(1.0,1.0,0.0).setShininess(.8))))
          .addChild((new autoclass.TouchSensor("TouchSensorDown")).setDescription("click for gears down")))
        .addChild((new autoclass.Transform("GearUpTextTransform")).setScale(.06,.06,.06).setTranslation(-.65,1.55,-10.0)
          .addChild((new autoclass.Shape())
            .setGeometry((new autoclass.Text()).setString(new autoclass.MFString("\"RED Button\" \"Gear Up\"")))
            .setAppearance((new autoclass.Appearance())
              .setMaterial((new autoclass.Material()).setDiffuseColor(1.0,0.0,0.0)))))
        .addChild((new autoclass.Transform("GearDownTextTransform")).setScale(.06,.06,.06).setTranslation(-.65,1.35,-10.0)
          .addChild((new autoclass.Shape())
            .setGeometry((new autoclass.Text()).setLength(java.newArray("float", [5.5])).setString(new autoclass.MFString("\"YELLOW Button\" \"Gear Down\"")))
            .setAppearance((new autoclass.Appearance())
              .setMaterial((new autoclass.Material()).setDiffuseColor(1.0,1.0,0.0)))))
        .addChild((new autoclass.Transform("FireButtonTransform")).setRotation(1.0,0.0,0.0,1.57).setScale(.008,.008,.008).setTranslation(.52,1.6,-10.0)
          .addChild((new autoclass.Shape())
            .setGeometry((new autoclass.Cylinder()).setHeight(1).setRadius(4))
            .setAppearance((new autoclass.Appearance())
              .setMaterial((new autoclass.Material()).setDiffuseColor(0.0,.75,.18).setShininess(.8))))
          .addChild((new autoclass.TouchSensor("FireSensor")).setDescription("click to fire")))
        .addChild((new autoclass.Transform("FireTextTransform")).setScale(.06,.06,.06).setTranslation(.36,1.5,-10.0)
          .addChild((new autoclass.Shape())
            .setGeometry((new autoclass.Text()).setString(new autoclass.MFString("\"Target Locked\" \"      FIRE!..\" \"(Green Button)\"")))
            .setAppearance((new autoclass.Appearance())
              .setMaterial((new autoclass.Material()).setDiffuseColor(0.0,.75,.18))))))
      .addChild((new autoclass.Viewpoint()).setDescription("F16 Close Look-up").setOrientation(-0.559,-0.827,-0.057,1.3534).setPosition(-28.7,19.9,17.4))
      .addChild((new autoclass.Viewpoint()).setDescription("Cockpit").setOrientation(-1.0,0.0,0.0,0.1249).setPosition(0.0,1.5,-7.9))
      .addChild((new autoclass.Viewpoint("LandingGearAnimationView")).setDescription("Landing Gear Animation View").setOrientation(-0.003,1.0,-0.012,2.5741).setPosition(16.1,-5.8,-24.6))
      .addChild((new autoclass.Viewpoint()).setDescription("Cockpit Left View").setOrientation(-0.276,-0.922,-0.271,1.2338).setPosition(-6.7,6.1,-3.9))
      .addChild((new autoclass.Viewpoint()).setDescription("F-16 Front View").setOrientation(-0.007,0.995,0.102,3.1152).setPosition(-0.1,13.4,-65.0))
      .addChild((new autoclass.Viewpoint()).setDescription("Cockpit Target View").setOrientation(-0.834,-0.523,-0.176,0.0875).setPosition(0.0,2.4,-7.9))
      .addChild((new autoclass.Transform("NoseAntennaTransform")).setRotation(1.0,0.0,0.0,1.57).setTranslation(0.0,-.275,-21.0)
        .addChild((new autoclass.Shape())
          .setGeometry((new autoclass.Cylinder()).setRadius(.05))
          .setAppearance((new autoclass.Appearance())
            .setMaterial((new autoclass.Material()).setDiffuseColor(.5,.5,.5).setShininess(.5))))))
    .addChild((new autoclass.TimeSensor("WheelUp")).setCycleInterval(8))
    .addChild((new autoclass.OrientationInterpolator("GearUpInterpolator")).setKey(java.newArray("float", [0.0,0.5,1.0])).setKeyValue(new autoclass.MFRotation(java.newArray("float", [1.0,0.0,0.0,0.0,1.0,0.0,0.0,-0.79,1.0,0.0,0.0,-1.92]))))
    .addChild((new autoclass.ROUTE()).setFromNode("TouchSensorUp").setFromField("touchTime").setToNode("WheelUp").setToField("set_startTime"))
    .addChild((new autoclass.ROUTE()).setFromNode("WheelUp").setFromField("fraction_changed").setToNode("GearUpInterpolator").setToField("set_fraction"))
    .addChild((new autoclass.ROUTE()).setFromNode("GearUpInterpolator").setFromField("value_changed").setToNode("FrontWheelTransform").setToField("set_rotation"))
    .addChild((new autoclass.TimeSensor("WheelDown")).setCycleInterval(8))
    .addChild((new autoclass.OrientationInterpolator("GearDownInterpolator")).setKey(java.newArray("float", [0.0,0.5,1.0])).setKeyValue(new autoclass.MFRotation(java.newArray("float", [1.0,0.0,0.0,-1.92,1.0,0.0,0.0,-0.79,1.0,0.0,0.0,0.0]))))
    .addChild((new autoclass.ROUTE()).setFromNode("TouchSensorDown").setFromField("touchTime").setToNode("WheelDown").setToField("set_startTime"))
    .addChild((new autoclass.ROUTE()).setFromNode("WheelDown").setFromField("fraction_changed").setToNode("GearDownInterpolator").setToField("set_fraction"))
    .addChild((new autoclass.ROUTE()).setFromNode("GearDownInterpolator").setFromField("value_changed").setToNode("FrontWheelTransform").setToField("set_rotation"))
    .addComments(" Animation commands for Rear Right Wheel Starts ")
    .addChild((new autoclass.TimeSensor("RRearUp1")).setCycleInterval(8))
    .addChild((new autoclass.TimeSensor("RRearDown1")).setCycleInterval(8))
    .addChild((new autoclass.OrientationInterpolator("RRearInterUp1")).setKey(java.newArray("float", [0.0,0.5,1.0])).setKeyValue(new autoclass.MFRotation(java.newArray("float", [-1.0,0.0,-1.0,0.0,-1.0,0.0,-1.0,0.44,-1.0,0.0,-1.0,1.92]))))
    .addChild((new autoclass.OrientationInterpolator("RRearInterDown1")).setKey(java.newArray("float", [0.0,0.5,1.0])).setKeyValue(new autoclass.MFRotation(java.newArray("float", [-1.0,0.0,-1.0,1.92,-1.0,0.0,-1.0,0.44,-1.0,0.0,-1.0,0.0]))))
    .addChild((new autoclass.ROUTE()).setFromNode("TouchSensorDown").setFromField("touchTime").setToNode("RRearDown1").setToField("set_startTime"))
    .addChild((new autoclass.ROUTE()).setFromNode("TouchSensorUp").setFromField("touchTime").setToNode("RRearUp1").setToField("set_startTime"))
    .addChild((new autoclass.ROUTE()).setFromNode("RRearDown1").setFromField("fraction_changed").setToNode("RRearInterDown1").setToField("set_fraction"))
    .addChild((new autoclass.ROUTE()).setFromNode("RRearUp1").setFromField("fraction_changed").setToNode("RRearInterUp1").setToField("set_fraction"))
    .addChild((new autoclass.ROUTE()).setFromNode("RRearInterDown1").setFromField("value_changed").setToNode("RearRightWheelTransform").setToField("set_rotation"))
    .addChild((new autoclass.ROUTE()).setFromNode("RRearInterUp1").setFromField("value_changed").setToNode("RearRightWheelTransform").setToField("set_rotation"))
    .addComments(" Animation commands for Rear Left Wheel ")
    .addChild((new autoclass.TimeSensor("LRearUp1")).setCycleInterval(8))
    .addChild((new autoclass.TimeSensor("LRearDown1")).setCycleInterval(8))
    .addChild((new autoclass.OrientationInterpolator("LRearInterUp1")).setKey(java.newArray("float", [0.0,0.5,1.0])).setKeyValue(new autoclass.MFRotation(java.newArray("float", [1.0,0.0,1.0,0.0,1.0,0.0,1.0,0.44,1.0,0.0,1.0,1.92]))))
    .addChild((new autoclass.OrientationInterpolator("LRearInterDown1")).setKey(java.newArray("float", [0.0,0.5,1.0])).setKeyValue(new autoclass.MFRotation(java.newArray("float", [1.0,0.0,1.0,1.92,1.0,0.0,1.0,0.44,1.0,0.0,1.0,0.0]))))
    .addChild((new autoclass.ROUTE()).setFromNode("TouchSensorDown").setFromField("touchTime").setToNode("LRearDown1").setToField("set_startTime"))
    .addChild((new autoclass.ROUTE()).setFromNode("TouchSensorUp").setFromField("touchTime").setToNode("LRearUp1").setToField("set_startTime"))
    .addChild((new autoclass.ROUTE()).setFromNode("LRearDown1").setFromField("fraction_changed").setToNode("LRearInterDown1").setToField("set_fraction"))
    .addChild((new autoclass.ROUTE()).setFromNode("LRearUp1").setFromField("fraction_changed").setToNode("LRearInterUp1").setToField("set_fraction"))
    .addChild((new autoclass.ROUTE()).setFromNode("LRearInterDown1").setFromField("value_changed").setToNode("RearLeftWheelTransform").setToField("set_rotation"))
    .addChild((new autoclass.ROUTE()).setFromNode("LRearInterUp1").setFromField("value_changed").setToNode("RearLeftWheelTransform").setToField("set_rotation"))
    .addChild((new autoclass.Background()).setGroundAngle(java.newArray("float", [1.309,1.570796])).setGroundColor(new autoclass.MFColor(java.newArray("float", [0.0,0.3,.7,0.0,0.35,0.75,0.0,0.4,0.8]))).setSkyAngle(java.newArray("float", [1.309,1.571])).setSkyColor(new autoclass.MFColor(java.newArray("float", [0.0,0.3,0.8,0.0,0.5,1.0,1.0,1.0,1.0]))))
    .addChild((new autoclass.Transform("RightmostAmraamTransform")).setRotation(-1.0,0.0,0.0,1.57).setScale(1.4,1.4,1.4).setTranslation(15.65,0.0,4.5)
      .addChild((new autoclass.Inline("Amraam")).setUrl(new autoclass.MFString("\"../../Weapons/Missiles/Amraam.x3d\" \"https://savage.nps.edu/Savage/Weapons/Missiles/Amraam.x3d\" \"../../Weapons/Missiles/Amraam.wrl\" \"https://savage.nps.edu/Savage/Weapons/Missiles/Amraam.wrl\""))))
    .addChild((new autoclass.Transform("LeftmostAmraamTransform")).setRotation(-1.0,0.0,0.0,1.57).setScale(1.4,1.4,1.4).setTranslation(-15.65,0.0,4.5)
      .addChild((new autoclass.Inline())))
    .addChild((new autoclass.Transform("SidewinderHolderTransformRight")).setRotation(0.0,1.0,0.0,1.57).setScale(6.0,3.0,3.0).setTranslation(9.0,-1.125,8.0)
      .addChild((new autoclass.Inline("SidewinderHolder")).setUrl(new autoclass.MFString("\"SidewinderHolder.x3d\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/SidewinderHolder.x3d\" \"SidewinderHolder.wrl\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/SidewinderHolder.wrl\""))))
    .addChild((new autoclass.Transform("SidewinderHolderTransformLeft")).setRotation(0.0,1.0,0.0,1.57).setScale(6.0,3.0,3.0).setTranslation(-8.45,-1.125,8.0)
      .addChild((new autoclass.Inline())))
    .addChild((new autoclass.Transform("TurkishFlagTransformLeft")).setRotation(0.0,-1.0,0.0,1.57).setScale(.3,.25,.3).setTranslation(-.01,8.0,19.5)
      .addChild((new autoclass.Inline()).setUrl(new autoclass.MFString("\"TurkishFlagLeft.x3d\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/TurkishFlagLeft.x3d\" \"TurkishFlagLeft.wrl\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/TurkishFlagLeft.wrl\""))))
    .addChild((new autoclass.Transform("TurkishFlagTransformRight")).setRotation(0.0,1.0,0.0,1.57).setScale(.3,.25,.3).setTranslation(.01,8.0,20.5)
      .addChild((new autoclass.Inline()).setUrl(new autoclass.MFString("\"TurkishFlagRight.x3d\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/TurkishFlagRight.x3d\" \"TurkishFlagRight.wrl\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/TurkishFlagRight.wrl\""))))
    .addChild((new autoclass.Transform("AmraamHolderTransformLeft")).setTranslation(-12.0,-.176,10.7)
      .addChild((new autoclass.Inline("AmraamHolder")).setUrl(new autoclass.MFString("\"AmraamHolder.x3d\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/AmraamHolder.x3d\" \"AmraamHolder.wrl\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/AmraamHolder.wrl\""))))
    .addChild((new autoclass.Transform("AmraamHolderTransformRight")).setTranslation(12.0,-.176,10.7)
      .addChild((new autoclass.Inline())))
    .addChild((new autoclass.Transform("AmraamInnerTransformRight")).setRotation(-1.0,0.0,0.0,1.57).setScale(1.4,1.4,1.4).setTranslation(12.0,-1.6,4.5)
      .addChild((new autoclass.Inline())))
    .addChild((new autoclass.Transform("AmraamInnerTransformLeft")).setRotation(-1.0,0.0,0.0,1.57).setScale(1.4,1.4,1.4).setTranslation(-12.0,-1.6,4.5)
      .addChild((new autoclass.Inline())))
    .addChild((new autoclass.Transform("SidewinderTransformLeft")).setRotation(-1.0,0.0,0.0,1.57).setScale(1.6,1.6,1.6).setTranslation(-8.7,-2.0,3.5)
      .addChild((new autoclass.Inline("Sidewinder")).setUrl(new autoclass.MFString("\"../../Weapons/Missiles/Sidewinder.x3d\" \"https://savage.nps.edu/Savage/Weapons/Missiles/Sidewinder.x3d\" \"../../Weapons/Missiles/Sidewinder.wrl\" \"https://savage.nps.edu/Savage/Weapons/Missiles/Sidewinder.wrl\""))))
    .addChild((new autoclass.Transform("SidewinderTransformRight")).setRotation(-1.0,0.0,0.0,1.57).setScale(1.6,1.6,1.6).setTranslation(8.7,-2.0,3.5)
      .addChild((new autoclass.Inline())))
    .addChild((new autoclass.Transform("FuelTankHolderTransformLeft")).setRotation(0.0,1.0,0.0,1.57).setScale(1.5,1.5,1.5).setTranslation(-4.8,-1.125,6.0)
      .addChild((new autoclass.Inline("FuelTankHolder")).setUrl(new autoclass.MFString("\"FuelTankHolder.x3d\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/FuelTankHolder.x3d\" \"FuelTankHolder.wrl\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/FuelTankHolder.wrl\""))))
    .addChild((new autoclass.Transform("FuelTankHolderTransformRight")).setRotation(0.0,1.0,0.0,1.57).setScale(1.5,1.5,1.5).setTranslation(5.3,-1.125,6.0)
      .addChild((new autoclass.Inline())))
    .addChild((new autoclass.Transform("FuelTankTransformRight")).setRotation(-1.0,0.0,0.0,1.57).setScale(1.5,1.5,1.5).setTranslation(5.0,-2.85,5.5)
      .addChild((new autoclass.Inline("FuelTank")).setUrl(new autoclass.MFString("\"FuelTank.x3d\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/FuelTank.x3d\" \"FuelTank.wrl\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/FuelTank.wrl\""))))
    .addChild((new autoclass.Transform("FuelTankTransformLeft")).setRotation(-1.0,0.0,0.0,1.57).setScale(1.5,1.5,1.5).setTranslation(-5.0,-2.85,5.5)
      .addChild((new autoclass.Inline())))
    .addChild((new autoclass.Transform("InlineCoverOfPlaneTansform"))
      .addChild((new autoclass.Shape())
        .setGeometry((new autoclass.Box()).setSize(4.15,.1,20.0))
        .setAppearance((new autoclass.Appearance())
          .setMaterial((new autoclass.Material()).setDiffuseColor(.25,.25,.25)))))
    .addChild((new autoclass.Transform("TargetHelicopterTransform")).setTranslation(16.0,-50.0,-500.0)
      .addChild((new autoclass.Inline()).setUrl(new autoclass.MFString("\"Target.x3d\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/Target.x3d\" \"Target.wrl\" \"https://savage.nps.edu/Savage/AircraftFixedWing/F16-FightingFalcon-Turkey/Target.wrl\""))))
    .addChild((new autoclass.TimeSensor("FireClock")).setCycleInterval(8))
    .addChild((new autoclass.PositionInterpolator("MissilePath")).setKey(java.newArray("float", [0.0,.1,1.0])).setKeyValue(new autoclass.MFVec3f(java.newArray("float", [-15.65,0.0,4.5,-15.65,-2.0,4.5,16.0,-50.0,-500.0]))))
    .addChild((new autoclass.ROUTE()).setFromNode("FireSensor").setFromField("touchTime").setToNode("FireClock").setToField("set_startTime"))
    .addChild((new autoclass.ROUTE()).setFromNode("FireClock").setFromField("fraction_changed").setToNode("MissilePath").setToField("set_fraction"))
    .addChild((new autoclass.ROUTE()).setFromNode("MissilePath").setFromField("value_changed").setToNode("LeftmostAmraamTransform").setToField("set_translation"))
    .addChild((new autoclass.Viewpoint("MissileLaunchView")).setDescription("Missile Fire View").setOrientation(0.094,-0.994,0.057,1.1716).setPosition(-344.3,-142.8,-27.7))
    .addChild((new autoclass.ROUTE()).setFromNode("FireSensor").setFromField("isActive").setToNode("MissileLaunchView").setToField("set_bind"))
    .addComments(" TODO fix type, add filter "));
  },
  // end of initialize() method


  /** Provide a shallow copy of the X3D model.
   * @return F16 model
   */
  getX3dModel : function()
  {	  
	  return this.x3dModel;
  },
  
  /** Indicate X3DJSAIL validation results for this X3D model.
   * @return validation results plus exception information, if any
   */
  validateSelf : function()
  {
	var validationResult = "";
	var  exceptionResult = "";
	try
	{
		this.initialize();
		
		if ((this.getX3dModel() == null) || (this.getX3dModel().getHead() == null))
		{
			validationResult = "empty scene, nothing to validate. " + this.x3dModel.validate();
			return validationResult;
		}
		validationResult += this.x3dModel.validate(); // walk entire tree to validate correctness
	}
	catch (e)
	{
		exceptionResult = e; // report exception failures, if any
	}
	if  (exceptionResult === "" && validationResult === "")
	     return "success";
	else
	{
		var returnMessage = "";
		if  (exceptionResult !== "" && validationResult !== "")
			returnMessage += "\n*** ";
		returnMessage += exceptionResult;
		if  (exceptionResult === "" && validationResult !== "")
			returnMessage = "\n" + returnMessage; // skip line before meta tags, etc.
		returnMessage += validationResult;
		return returnMessage;
	}
  },
    /** Default main() method provided for test purposes.
     * @param argv input parameters
     */
    main : function (argv)
    {
		var testObject = new F16();
		console.log ("F16 execution self-validation test results: " + testObject.validateSelf());
	}
}
new F16().main();