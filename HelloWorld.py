####################################################################################################
#
# Now available: developmental python x3d.py package on PyPi for import.
#   This approach simplifies Python X3D deployment and use.
#   https://pypi.org/project/x3d
#
# Installation:
#       pip install x3d
# or
#       python -m pip install x3d
#
# Developer options for loading x3d package:
#
#    from x3d import *  # preferred approach, terser source that avoids x3d.* class prefixes
#
# or
#    import x3d         # traditional way to subclass x3d package, all classes require x3d.* prefix,
#                       # but python source is very verbose, for example x3d.Material x3d.Shape etc.
#                       # X3dToPython.xslt stylesheet insertPackagePrefix=true supports this option.
#
####################################################################################################
#print("'''")   # comment out output created by importing x3d (see below)
from x3d import *
from x3d import X3D
from IPython import HTML
#print("'''")   # comment out output created by importing x3d (see below)

#  comment preceding root node
def createScene():
    let newModel=X3D(profile='Immersive',version='3.3',
      head=head(
        children=[
        meta(content='HelloWorld.x3d',name='title'),
        meta(content='Simple X3D scene example: Hello World!',name='description'),
        meta(content='30 October 2000',name='created'),
        meta(content='31 October 2019',name='modified'),
        meta(content='Don Brutzman',name='creator'),
        meta(content='HelloWorld.tall.png',name='Image'),
        meta(content='http://en.wikipedia.org/wiki/Hello_world',name='reference'),
        meta(content='https://en.wikipedia.org/wiki/Hello#.22Hello.2C_World.22_computer_program',name='reference'),
        meta(content='https://en.wikipedia.org/wiki/"Hello,_World!"_program',name='reference'),
        meta(content='http://en.wikibooks.org/w/index.php?title=Computer_Programming/Hello_world',name='reference'),
        meta(content='http://www.HelloWorldExample.net',name='reference'),
        meta(content='http://www.web3D.org',name='reference'),
        meta(content='http://www.web3d.org/realtime-3d/news/internationalization-x3d',name='reference'),
        meta(content='http://www.web3d.org/x3d/content/examples/HelloWorld.x3d',name='reference'),
        meta(content='http://X3dGraphics.com/examples/X3dForAdvancedModeling/HelloWorldScenes',name='reference'),
        meta(content='http://X3dGraphics.com/examples/X3dForWebAuthors/Chapter01TechnicalOverview/HelloWorld.x3d',name='identifier'),
        meta(content='http://www.web3d.org/x3d/content/examples/license.html',name='license'),
        meta(content='X3D-Edit 3.3, https://savage.nps.edu/X3D-Edit',name='generator'),
        #  Alternate encodings: VRML97, X3D ClassicVRML Encoding, X3D Compressed Binary Encoding (CBE), X3DOM, JSON 
        meta(content='HelloWorld.wrl',name='reference'),
        meta(content='HelloWorld.x3dv',name='reference'),
        meta(content='HelloWorld.x3db',name='reference'),
        meta(content='HelloWorld.xhtml',name='reference'),
        meta(content='HelloWorld.json',name='reference')]),
      Scene=Scene(
        #  Example scene to illustrate X3D nodes and fields (XML elements and attributes) 
        children=[
        WorldInfo(title='Hello World!'),
        WorldInfo(title="Hello ' apostrophe 1"),
        WorldInfo(title="Hello ' apostrophe 2"),
        WorldInfo(title='Hello " quotation mark 3'),
        WorldInfo(title='Hello " quotation mark 4'),
        MetadataSet(name="items'",
          value=[
          MetadataInteger(name='one',value=[1]),
          MetadataInteger(name='two',value=[2])]),
        Group(
          children=[
          Viewpoint(DEF='ViewUpClose',centerOfRotation=(0,-1,0),description='Hello world!',position=(0,-1,7)),
          #  insert commas to test removal when converted to ttl 
          Transform(DEF='TestWhitespaceCommas',rotation=(0,1,0,3),
            children=[
            Shape(
              geometry=Sphere(),
              appearance=Appearance(
                material=Material(DEF='MaterialLightBlue',diffuseColor=(0.1,0.5,1)),
                texture=ImageTexture(DEF='ImageCloudlessEarth',url=["earth-topo.png", "earth-topo.jpg", "https://www.web3d.org/x3d/content/examples/Basic/earth-topo.png","http://www.web3d.org/x3d/content/examples/Basic/earth-topo.jpg","http://www.web3d.org/x3d/content/examples/Basic/earth-topo-small.gif"])))]),
          Transform(translation=(0,-2,0),
            children=[
            Shape(
              geometry=Text(DEF='TextMessage',string=["Hello","world!"],
                fontStyle=FontStyle(justify=["MIDDLE","MIDDLE"])),
              appearance=Appearance(
                material=Material(USE='MaterialLightBlue')))])])])
    ) # X3D model complete

    ####################################################################################################
    # Self-test diagnostics
    ####################################################################################################
    htmlcode = """
    <script type='text/javascript' charset="UTF-8" src='https://x3dom.org/release/x3dom-full.debug.js'> </script> 
    <link rel='stylesheet' type='text/css' href='https://x3dom.org/release/x3dom.css'></link> 
    <style>
     x3d {
         width:720px;
         height:720px;
         border:2px solid black;
    }
    </style>
    """

    x3dnode = htmlcode+"""
    <x3d>%s</x3d>
    <script>
    window.x3dom.reload()
    </script>
    """ % newModel.Scene.HTML5()

    HTML(x3dnode)

createScene()
