# x3d.py package 4.0.64.4 loaded, have fun with X3D Graphics!
print("<!--")
from x3d import *
print("-->")
import json
model = (
X3D(profile="Immersive", version="3.0", 
head=head(
children=[
meta(name="title", content="GridXZ_20x20Fixed.x3d"),
meta(name="creator", content="MV4204 class"),
meta(name="created", content="3 September 2000"),
meta(name="modified", content="30 March 2016"),
meta(name="reference", content="GridXY_20x20Fixed.x3d"),
meta(name="reference", content="GridYZ_20x20Fixed.x3d"),
meta(name="description", content="Line grid authoring tool to enable precise visual measurement of objects in 3D space - fixed position. Oriented along XZ plane, size 20m by 20m, default block size 1m by 1m."),
meta(name="identifier", content="https://savage.nps.edu/Savage/Tools/Authoring/GridXZ_20x20Fixed.x3d"),
meta(name="generator", content="X3D-Edit 3.2, https://savage.nps.edu/X3D-Edit"),
meta(name="license", content="../../license.html"),
meta(name="translated", content="02 September 2023"),
meta(name="generator", content="X3dToJson.xslt, https://www.web3d.org/x3d/stylesheets/X3dToJson.html"),
meta(name="reference", content="X3D JSON encoding: https://www.web3d.org/wiki/index.php/X3D_JSON_Encoding")
]), 
Scene=Scene(children=[
Viewpoint(description="XZ horizontal grid, perpendicular to Y axis (seen from 0 10 25)", orientation=((1,0,0,-0.4)), position=((0,10,25))),
Transform(DEF="GridLocation", children=[
Group(children=[
Shape(DEF="LinesAlignedAlongZ", 
geometry=
IndexedLineSet(colorIndex=[1,0,0,0,0,2,0,0,0,0,1,0,0,0,0,2,0,0,0,0,1], colorPerVertex=False, coordIndex=[1,22,-1,2,23,-1,3,24,-1,4,25,-1,5,26,-1,6,27,-1,7,28,-1,8,29,-1,9,30,-1,10,31,-1,11,32,-1,12,33,-1,13,34,-1,14,35,-1,15,36,-1,16,37,-1,17,38,-1,18,39,-1,19,40,-1,20,41,-1,21,42,-1], 
coord=
Coordinate(DEF="EndPoints", point=[(0,0,0),(-10,0,10),(-9,0,10),(-8,0,10),(-7,0,10),(-6,0,10),(-5,0,10),(-4,0,10),(-3,0,10),(-2,0,10),(-1,0,10),(0,0,10),(1,0,10),(2,0,10),(3,0,10),(4,0,10),(5,0,10),(6,0,10),(7,0,10),(8,0,10),(9,0,10),(10,0,10),(-10,0,-10),(-9,0,-10),(-8,0,-10),(-7,0,-10),(-6,0,-10),(-5,0,-10),(-4,0,-10),(-3,0,-10),(-2,0,-10),(-1,0,-10),(0,0,-10),(1,0,-10),(2,0,-10),(3,0,-10),(4,0,-10),(5,0,-10),(6,0,-10),(7,0,-10),(8,0,-10),(9,0,-10),(10,0,-10)]), 
color=(
Color(color=[(0.4,0.4,0.4),(0.8,0.2,0),(0.4,0.1,0.05)])))),
Transform(DEF="LinesAlignedAlongX", rotation=((0,1,0,1.57079)), children=[
Shape(USE="LinesAlignedAlongZ")]),
Transform(translation=((0,-0.5,0)), children=[
Billboard(children=[
Shape(
geometry=
Text(DEF="CenterTextNode", string=["origin"], 
fontStyle=
FontStyle(DEF="FS4", justify=["MIDDLE","MIDDLE"], size=0.4)), 
appearance=
Appearance(DEF="DefaultAppearance", 
material=
Material()))])]),
Transform(translation=((10,-0.5,10)), children=[
Billboard(children=[
Shape(
geometry=
Text(string=["10 0 10"], 
fontStyle=
FontStyle(USE="FS4")), 
appearance=
Appearance(USE="DefaultAppearance"))])]),
Transform(translation=((10,-0.5,-10)), children=[
Billboard(children=[
Shape(
geometry=
Text(string=["10 0 -10"], 
fontStyle=
FontStyle(USE="FS4")), 
appearance=
Appearance(USE="DefaultAppearance"))])]),
Transform(translation=((-10,-0.5,10)), children=[
Billboard(children=[
Shape(
geometry=
Text(string=["-10 0 10"], 
fontStyle=
FontStyle(USE="FS4")), 
appearance=
Appearance(USE="DefaultAppearance"))])]),
Transform(translation=((-10,-0.5,-10)), children=[
Billboard(children=[
Shape(
geometry=
Text(string=["-10 0 -10"], 
fontStyle=
FontStyle(USE="FS4")), 
appearance=
Appearance(USE="DefaultAppearance"))])])])])])))
output = model.JSON()
json.loads(output)
