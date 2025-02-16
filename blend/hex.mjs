import { Box3 } from 'x_ite';
import { fs } from 'node:fs';
import { path } from 'node:path';


function getRandomColor() {
    return new SFColor(Math.random(), Math.random(), Math.random());
}

function readNestedFileSystem(dirPath, ext) {
  const files = fs.readdirSync(dirPath);
  const result = [];

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      result.push(...readNestedFileSystem(filePath, ext));
    } else {
      const fileExt = path.extname(file);
      if (fileExt.toLowerCase() === ext) {
      	result.push(filePath);
      }
    }
  });

  return result;
}

function getBBox (inlineNode)
{
   return inlineNode .getValue () .getBBox (new Browser.Box3 ());
}

function printBBox (inlineNode)
{
   const bbox = getBBox (inlineNode);
   return bbox;
}

async function waitForInlineToBeLoaded(url)
{
   const inlineNode = Browser .currentScene .createNode("Inline");

   inlineNode.url = [url];
   inlineNode.global = false;
   await inlineNode .getValue() .requestImmediateLoad();
   let bbox = printBBox(inlineNode);
   console.log(bbox.size, bbox.center);
   return inlineNode;
}

function generateShapes(targetDirectory, targetExtension) {
    var shapeContainer = Browser.currentScene.getNamedNode('shapeContainer');
    const files = readNestedFileSystem(targetDirectory, targetExtension);

    for (var i = 0; i < files.length; i++) {
	var shape = Browser.currentScene.createNode('Shape');

	var geometry = Browser.currentScene.createNode('IndexedFaceSet');
	geometry.solid = false;
	geometry.coordIndex = new MFInt32(0, 1, 2, 3, 4, 5, -1);
	geometry.creaseAngle = 3.14;

	var coordinate = Browser.currentScene.createNode('Coordinate');
	coordinate.point = new MFFloat(-2, 0, 0, -1, 1.732, 0, 1, 1.732, 0, 2, 0, 0, 1, -1.732, 0, -1, -1.732, 0);

	geometry.coord = coordinate;
	var appearance = Browser.currentScene.createNode('Appearance');
	var material = Browser.currentScene.createNode('Material');
	material.diffuseColor = getRandomColor();
	appearance.material = material;

	shape.geometry = geometry;
	shape.appearance = appearance;

	var transform = Browser.currentScene.createNode('Transform');
	transform.rotation = new SFRotation(1, 0, 0, Math.PI / 2);
	transform.translation.x = i % 13 - 5;
	transform.translation.y = 0;
	transform.translation.z = i / 13 - 5;
	/*
	transform.translation.x = Math.random() * 20 - 10;
	transform.translation.y = Math.random() * 20 - 10;
	transform.translation.z = Math.random() * 20 - 10;
	*/
	let file = files[i].replaceAll('\\','/');
	var anchor = Browser.currentScene.createNode('Anchor');
	anchor.url = [file];
	anchor.children.push(shape);

    	// if (i >= 3 && i < 43) {
    	if ((i >= 3 && i < 33) || (i > 34 && i < 43) || (i > 45 && i < 60)) {
		console.log(file);
		var inline = waitForInlineToBeLoaded(file);
		transform.scale.x = 0.275 / inline.bboxSize[0];
		transform.scale.y = 0.275 / inline.bboxSize[1];
		transform.scale.z = 0.275 / inline.bboxSize[2];
		anchor.children.push(inline);
	} else {
		transform.scale.x = 0.275;
		transform.scale.y = 0.275;
		transform.scale.z = 0.275;
	}

	transform.children.push(anchor);

	shapeContainer.children.push(transform);
    }
}
function initialize() {
    const targetDirectory = '../../glTF-Sample-Models/2.0/';
    const targetExtension = '.x3dj';
    generateShapes(targetDirectory, targetExtension);
}
