#include "C:/x3d-code/www.web3d.org/x3d/languages/c/Concretes.h"
void main(int argc, char ** argv) {
Browser browser = X3D.getBrowser();
X3D X3D0;
X3D0.profile = "Immersive";
X3D0.version = "4.0";
head head1 = createNode("head");
meta meta2 = createNode("meta");
meta2.name = "title";
meta2.content = "DiamondManLOA0.x3d";
head1.meta = new MFNode();

head1.meta[0] = meta2;

meta meta3 = createNode("meta");
meta3.name = "description";
meta3.content = "HAnim skeletal structure for Level of Action (LOA) zero, with one diamond at the base node for the structure. HumanoidRoot only, so this is the minimum legal HAnim humanoid.";
head1.meta[1] = meta3;

meta meta4 = createNode("meta");
meta4.name = "creator";
meta4.content = "Matthew T. Beitler";
head1.meta[2] = meta4;

meta meta5 = createNode("meta");
meta5.name = "translator";
meta5.content = "Joel S. Pawloski";
head1.meta[3] = meta5;

meta meta6 = createNode("meta");
meta6.name = "created";
meta6.content = "12 November 2001";
head1.meta[4] = meta6;

meta meta7 = createNode("meta");
meta7.name = "modified";
meta7.content = "Thu, 14 Dec 2023 22:20:20 GMT";
head1.meta[5] = meta7;

meta meta8 = createNode("meta");
meta8.name = "motto";
meta8.content = "(a) \"Diamonds are a girl's best friend.\" (b) \"Gosh, it sure is chilly in here.\"";
head1.meta[6] = meta8;

meta meta9 = createNode("meta");
meta9.name = "reference";
meta9.content = "HAnim 2.0 specification, Appendix A: Nominal human body dimensions and levels of articulation (LOAs)";
head1.meta[7] = meta9;

meta meta10 = createNode("meta");
meta10.name = "reference";
meta10.content = "https://www.web3d.org/documents/specifications/19774-1/V2.0/HAnim/BodyDimensionsAndLOAs.html";
head1.meta[8] = meta10;

meta meta11 = createNode("meta");
meta11.name = "reference";
meta11.content = "https://www.web3d.org/documents/specifications/19774-1/V2.0/HAnim/BodyDimensionsAndLOAs.html#LevelOfArticulationZero";
head1.meta[9] = meta11;

meta meta12 = createNode("meta");
meta12.name = "reference";
meta12.content = "HAnim 1.1 specification, Appendix A: Suggested Body Dimensions and Levels of Articulation, Level of Articulation Zero";
head1.meta[10] = meta12;

meta meta13 = createNode("meta");
meta13.name = "reference";
meta13.content = "http://HAnim.org/Specifications/HAnim1.1/appendices.html#appendixa";
head1.meta[11] = meta13;

meta meta14 = createNode("meta");
meta14.name = "reference";
meta14.content = "http://HAnim.org/Specifications/HAnim1.1/JointCenters1_1_LOA0.wrl";
head1.meta[12] = meta14;

meta meta15 = createNode("meta");
meta15.name = "reference";
meta15.content = "http://HAnim.org/Specifications/HAnim1.1/JointCenters1_1_LOA0-diamond.wrl";
head1.meta[13] = meta15;

meta meta16 = createNode("meta");
meta16.name = "reference";
meta16.content = "http://ece.uwaterloo.ca/~HAnim";
head1.meta[14] = meta16;

meta meta17 = createNode("meta");
meta17.name = "reference";
meta17.content = "http://www.cis.upenn.edu/~badler/anthro/89-71.pdf";
head1.meta[15] = meta17;

meta meta18 = createNode("meta");
meta18.name = "reference";
meta18.content = "http://www.cis.upenn.edu/~badler/anthro/89-71.ps";
head1.meta[16] = meta18;

meta meta19 = createNode("meta");
meta19.name = "reference";
meta19.content = "http://www.cis.upenn.edu/~beitler";
head1.meta[17] = meta19;

meta meta20 = createNode("meta");
meta20.name = "Image";
meta20.content = "humanoid_landmark_locations.gif";
head1.meta[18] = meta20;

meta meta21 = createNode("meta");
meta21.name = "Image";
meta21.content = "http://HAnim.org/Specifications/HAnim1.1/humanoid_landmark_locations.gif";
head1.meta[19] = meta21;

meta meta22 = createNode("meta");
meta22.name = "identifier";
meta22.content = "https://www.web3d.org/x3d/content/examples/HumanoidAnimation/Templates/DiamondManLOA0.x3d";
head1.meta[20] = meta22;

component component23 = createNode("component");
component23.name = "HAnim";
component23.level = 1;
head1.component[21] = component23;

head = head1;

WorldInfo WorldInfo25 = createNode("WorldInfo");
WorldInfo25.title = "HANIM 2.0 Default Joint Centers, LOA0";
WorldInfo25.info = new MFString(new java.lang.String["HAnim 2.0 Default Joint Centers, Level Of Articulation (LOA) 0 -------------------------------------------------------- HANIM 1.1 (VRML 2.0) Author name: eMpTy (a.k.a. Matthew T. Beitler) HANIM 1.1 (VRML 2.0) Author email: beitler@graphics.cis.upenn.edu or beitler@acm.org HANIM 1.1 (VRML 2.0) Author homepage: http://www.cis.upenn.edu/~beitler HANIM 1.1 (VRML 2.0) Compliance Date: May 12, 1999 HANIM 1.1 Compliance Information: http://ece.uwaterloo.ca/~HAnim/ Construction Info (joint centers): The joint centers of this figure are based on the work of Norman Badler, director of the Center for Human Modeling and Simulation at the University of Pennsylvania. The original document which these joint centers are based on can be found at: http://www.cis.upenn.edu/~badler/anthro/89-71.ps, .pdf"]);
children = new MFNode();

children[0] = WorldInfo25;

NavigationInfo NavigationInfo26 = createNode("NavigationInfo");
NavigationInfo26.speed = 1.5;
children[1] = NavigationInfo26;

Viewpoint Viewpoint27 = createNode("Viewpoint");
Viewpoint27.description = "Diamond Man, LOA 0";
Viewpoint27.position = new SFVec3f(new float[0,1,3]);
Viewpoint27.centerOfRotation = new SFVec3f(new float[0,1,0]);
children[2] = Viewpoint27;

HAnimHumanoid HAnimHumanoid28 = createNode("HAnimHumanoid");
HAnimHumanoid28.DEF = "hanim_humanoid";
HAnimHumanoid28.name = "humanoid";
HAnimHumanoid28.loa = 0;
MetadataSet MetadataSet29 = createNode("MetadataSet");
MetadataSet29.name = "HAnimHumanoid.info";
MetadataSet29.reference = "https://www.web3d.org/documents/specifications/19774/V2.0/Architecture/ObjectInterfaces.html#Humanoid";
MetadataString MetadataString30 = createNode("MetadataString");
MetadataString30.name = "authorEmail";
MetadataString30.value = new MFString(new java.lang.String["beitler@graphics.cis.upenn.edu beitler@acm.org"]);
MetadataSet29.value = new MFNode();

MetadataSet29.value[0] = MetadataString30;

MetadataString MetadataString31 = createNode("MetadataString");
MetadataString31.name = "authorName";
MetadataString31.value = new MFString(new java.lang.String["Matthew T. Beitler"]);
MetadataSet29.value[1] = MetadataString31;

MetadataString MetadataString32 = createNode("MetadataString");
MetadataString32.name = "copyright";
MetadataString32.value = new MFString(new java.lang.String["Copyright 1999 Matthew T. Beitler"]);
MetadataSet29.value[2] = MetadataString32;

MetadataString MetadataString33 = createNode("MetadataString");
MetadataString33.name = "creationDate";
MetadataString33.value = new MFString(new java.lang.String["05/12/99"]);
MetadataSet29.value[3] = MetadataString33;

MetadataString MetadataString34 = createNode("MetadataString");
MetadataString34.name = "humanoidVersion";
MetadataString34.value = new MFString(new java.lang.String["JointCenters 1.1 LOA0"]);
MetadataSet29.value[4] = MetadataString34;

MetadataString MetadataString35 = createNode("MetadataString");
MetadataString35.name = "usageRestrictions";
MetadataString35.value = new MFString(new java.lang.String["PERMISSION TO FULLY USE THIS SCENE GRAPH IS GRANTED PROVIDED THIS COPYRIGHT INFORMATION AND DOCUMENTATION OF THE ORIGINAL AUTHOR IS INCLUDED. This humanoid scene graph is provided _as-is_ and without warranty of any kind express implied or otherwise including without limitation any warranty of merchantability or fitness for a particular purpose."]);
MetadataSet29.value[5] = MetadataString35;

HAnimHumanoid28.metadata = new SFNode();

HAnimHumanoid28.metadata[0] = MetadataSet29;

HAnimJoint HAnimJoint36 = createNode("HAnimJoint");
HAnimJoint36.DEF = "hanim_humanoid_root";
HAnimJoint36.name = "humanoid_root";
HAnimJoint36.center = new SFVec3f(new float[0,0.824,0.0277]);
HAnimJoint HAnimJoint37 = createNode("HAnimJoint");
HAnimJoint37.DEF = "hanim_sacroiliac";
HAnimJoint37.name = "sacroiliac";
HAnimJoint37.center = new SFVec3f(new float[0,0.9149,0.0016]);
HAnimSegment HAnimSegment38 = createNode("HAnimSegment");
HAnimSegment38.DEF = "hanim_pelvis";
HAnimSegment38.name = "pelvis";
Transform Transform39 = createNode("Transform");
Transform39.translation = new SFVec3f(new float[0,0.9149,0.0016]);
Shape Shape40 = createNode("Shape");
Shape40.DEF = "DiamondShape";
Appearance Appearance41 = createNode("Appearance");
Material Material42 = createNode("Material");
Material42.diffuseColor = new SFColor(new float[1,1,0]);
Appearance41.material = Material42;

Shape40.appearance = Appearance41;

IndexedFaceSet IndexedFaceSet43 = createNode("IndexedFaceSet");
IndexedFaceSet43.creaseAngle = 0.5;
IndexedFaceSet43.coordIndex = new MFInt32(new int[0,1,2,-1,0,2,3,-1,0,3,4,-1,0,4,1,-1,5,2,1,-1,5,3,2,-1,5,4,3,-1,5,1,4,-1]);
Coordinate Coordinate44 = createNode("Coordinate");
Coordinate44.point = new MFVec3f(new float[0,0.01,0,-0.01,0,0,0,0,0.01,0.01,0,0,0,0,-0.01,0,-0.01,0]);
IndexedFaceSet43.coord = Coordinate44;

Shape40.geometry = IndexedFaceSet43;

Transform39.child = new undefined();

Transform39.child[0] = Shape40;

HAnimSegment38.children = new MFNode();

HAnimSegment38.children[0] = Transform39;

HAnimJoint37.children = new MFNode();

HAnimJoint37.children[0] = HAnimSegment38;

HAnimJoint36.children = new MFNode();

HAnimJoint36.children[0] = HAnimJoint37;

HAnimHumanoid28.joints[1] = HAnimJoint36;

HAnimSite HAnimSite45 = createNode("HAnimSite");
HAnimSite45.DEF = "hanim_site_view";
HAnimSite45.name = "site_view";
Viewpoint Viewpoint46 = createNode("Viewpoint");
Viewpoint46.DEF = "InclinedView";
Viewpoint46.description = "Inclined View";
Viewpoint46.position = new SFVec3f(new float[1.62,1.05,2.06]);
Viewpoint46.orientation = new SFRotation(new float[-0.113,0.993,0.0347,0.671]);
HAnimSite45.children = new MFNode();

HAnimSite45.children[0] = Viewpoint46;

Viewpoint Viewpoint47 = createNode("Viewpoint");
Viewpoint47.DEF = "FrontView";
Viewpoint47.description = "Front View";
Viewpoint47.position = new SFVec3f(new float[0,0.854,2.57665]);
HAnimSite45.children[1] = Viewpoint47;

Viewpoint Viewpoint48 = createNode("Viewpoint");
Viewpoint48.DEF = "SideView";
Viewpoint48.description = "Side View";
Viewpoint48.position = new SFVec3f(new float[2.5929,0.854,0]);
Viewpoint48.orientation = new SFRotation(new float[0,1,0,1.57079]);
HAnimSite45.children[2] = Viewpoint48;

Viewpoint Viewpoint49 = createNode("Viewpoint");
Viewpoint49.DEF = "TopView";
Viewpoint49.description = "Top View";
Viewpoint49.position = new SFVec3f(new float[0,3.4495,0]);
Viewpoint49.orientation = new SFRotation(new float[1,0,0,-1.57079]);
HAnimSite45.children[3] = Viewpoint49;

HAnimHumanoid28.viewpoints[2] = HAnimSite45;

HAnimSegment HAnimSegment50 = createNode("HAnimSegment");
HAnimSegment50.USE = "hanim_pelvis";
HAnimHumanoid28.segments[3] = HAnimSegment50;

HAnimJoint HAnimJoint51 = createNode("HAnimJoint");
HAnimJoint51.USE = "hanim_humanoid_root";
HAnimHumanoid28.joints[4] = HAnimJoint51;

HAnimJoint HAnimJoint52 = createNode("HAnimJoint");
HAnimJoint52.USE = "hanim_sacroiliac";
HAnimHumanoid28.joints[5] = HAnimJoint52;

children[3] = HAnimHumanoid28;

}
