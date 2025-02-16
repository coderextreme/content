package net.coderextreme.data;
import org.web3d.x3d.jsail.*;
import org.web3d.x3d.jsail.CADGeometry.*;
import org.web3d.x3d.jsail.Core.*;
import org.web3d.x3d.jsail.CubeMapTexturing.*;
import org.web3d.x3d.jsail.DIS.*;
import org.web3d.x3d.jsail.EnvironmentalEffects.*;
import org.web3d.x3d.jsail.EnvironmentalSensor.*;
import org.web3d.x3d.jsail.EventUtilities.*;
import org.web3d.x3d.jsail.Followers.*;
import org.web3d.x3d.jsail.Geometry2D.*;
import org.web3d.x3d.jsail.Geometry3D.*;
import org.web3d.x3d.jsail.Geospatial.*;
import org.web3d.x3d.jsail.Grouping.*;
import org.web3d.x3d.jsail.HAnim.*;
import org.web3d.x3d.jsail.Interpolation.*;
import org.web3d.x3d.jsail.KeyDeviceSensor.*;
import org.web3d.x3d.jsail.Layering.*;
import org.web3d.x3d.jsail.Layout.*;
import org.web3d.x3d.jsail.Lighting.*;
import org.web3d.x3d.jsail.NURBS.*;
import org.web3d.x3d.jsail.Navigation.*;
import org.web3d.x3d.jsail.Networking.*;
import org.web3d.x3d.jsail.ParticleSystems.*;
import org.web3d.x3d.jsail.Picking.*;
import org.web3d.x3d.jsail.PointingDeviceSensor.*;
import org.web3d.x3d.jsail.Rendering.*;
import org.web3d.x3d.jsail.RigidBodyPhysics.*;
import org.web3d.x3d.jsail.Scripting.*;
import org.web3d.x3d.jsail.Shaders.*;
import org.web3d.x3d.jsail.Shape.*;
import org.web3d.x3d.jsail.Sound.*;
import org.web3d.x3d.jsail.Text.*;
import org.web3d.x3d.jsail.Texturing3D.*;
import org.web3d.x3d.jsail.Texturing.*;
import org.web3d.x3d.jsail.Time.*;
import org.web3d.x3d.jsail.VolumeRendering.*;
import org.web3d.x3d.jsail.fields.*;
import java.util.ArrayList;
import java.util.List;
import net.coderextreme.X3DRoots;
public class DesignPatternsApparelMedicalSkinLayers implements X3DRoots {
  public static void main(String[] args) {
    ConfigurationProperties.setXsltEngine(ConfigurationProperties.XSLT_ENGINE_NATIVE_JAVA);
    ConfigurationProperties.setDeleteIntermediateFiles(false);
    ConfigurationProperties.setStripTrailingZeroes(true);
    ConfigurationProperties.setStripDefaultAttributes(true);
    X3D model = new DesignPatternsApparelMedicalSkinLayers().getRootNodeList().get(0); // only get one root node
    System.out.print(model.validationReport().trim());
    model.toFileX3D("../data/DesignPatternsApparelMedicalSkinLayers.new.java.x3d");
    model.toFileJSON("../data/DesignPatternsApparelMedicalSkinLayers.new.java.json");
    }
    public List<X3D> getRootNodeList() {
    	List<X3D> list = new ArrayList<X3D>(1);
    	list.add(initialize());
    	return list;
    }
    public X3D initialize() {
      X3D X3D0 =  new X3D().setProfile("Immersive").setVersion("4.0")
      .setHead(new head()
        .addMeta(new meta().setName("title").setContent("DesignPatternsApparelMedicalSkinLayers.x3d"))
        .addMeta(new meta().setName("description").setContent("Design patterns for skin and apparel using HAnim2 standard in X3D4"))
        .addMeta(new meta().setName("creator").setContent("Don Brutzman"))
        .addMeta(new meta().setName("creator").setContent("Joe D. Williams"))
        .addMeta(new meta().setName("creator").setContent("Dick Puk"))
        .addMeta(new meta().setName("created").setContent("23 December 2022"))
        .addMeta(new meta().setName("modified").setContent("2 July 2023"))
        .addMeta(new meta().setName("reference").setContent("DesignPatternsApparelVariations.txt"))
        .addMeta(new meta().setName("reference").setContent("HAnim2 Part 1, HAnim architecture, 4.3 Humanoid object https://www.web3d.org/documents/specifications/19774/V2.0/Architecture/concepts.html#HumanoidObject"))
        .addMeta(new meta().setName("reference").setContent("HAnim2 Part 1, HAnim architecture, E.4 Multiple humanoids per file https://www.web3d.org/documents/specifications/19774/V2.0/Architecture/Guidelines.html#MultipleHumanoidsPerFile"))
        .addMeta(new meta().setName("reference").setContent("X3D4 Architecture, clause 26 HAnim component, 26.3.2 HAnimHumanoid https://www.web3d.org/specifications/X3Dv4Draft/ISO-IEC19775-1v4-DIS/Part01/components/hanim.html#HAnimHumanoid"))
        .addMeta(new meta().setName("warning").setContent("Under development. This template example does not produce renderable HAnim models."))
        .addMeta(new meta().setName("identifier").setContent("https://www.web3d.org/x3d/content/examples/HumanoidAnimation/Skin/DesignPatternsApparelMedicalSkinLayers.x3d"))
        .addMeta(new meta().setName("generator").setContent("X3D-Edit 4.0, https://savage.nps.edu/X3D-Edit"))
        .addMeta(new meta().setName("license").setContent("../license.html")))
      .setScene(new Scene()
        .addChild(new WorldInfo().setTitle("HAnimHumanoid skin design patterns for apparel, medical"))
        .addChild(new Background().setSkyColor(new MFColor0().getArray()))
        .addChild(new Group().setDEF("MultipleHumanoids")
          .setMetadata(new MetadataString().setName("HAnimArchitecture").setReference("https://www.web3d.org/documents/specifications/19774/V2.0/Architecture/Guidelines.html#MultipleHumanoidsPerFile").setValue(new MFString1().getArray()))
          .addComments("==============================")
          .addChild(new HAnimHumanoid("MultipleHumanoids").setName("SimpleSkeleton").setDEF("a_SimpleSkeleton").setVersion("2.0")
            .addSkeleton(((HAnimJoint)new HAnimJoint("a_SimpleSkeleton").setName("humanoid_root").setUlimit(new MFFloat2().getArray()).setLlimit(new MFFloat3().getArray()).setContainerFieldOverride("skeleton"))
              .addChild(new HAnimSegment().setName("sacrum")
                .addChild(new Shape().setDEF("JointVisualization"))
                .addChild(new Shape().setDEF("SegmentVisualization"))
                .addChild(new HAnimSite().setName("feature01_tip").setDEF("a_feature01_tip")
                  .addChild(new Shape().setDEF("SiteVisualization"))))))
          .addComments("==============================")
          .addChild(new HAnimHumanoid("MultipleHumanoids").setName("SimpleSkeletonMesh").setDEF("b_SimpleSkeletonMesh").setVersion("2.0")
            .addSkeleton(((HAnimJoint)new HAnimJoint("b_SimpleSkeletonMesh").setName("humanoid_root").setUlimit(new MFFloat4().getArray()).setLlimit(new MFFloat5().getArray()).setContainerFieldOverride("skeleton"))
              .addChild(new HAnimSegment().setName("sacrum")
                .addChild(new Shape()
                  .setGeometry(new IndexedFaceSet().setDEF("SegmentBoneMesh"))))))
          .addComments("==============================")
          .addChild(new HAnimHumanoid("MultipleHumanoids").setName("SkinIndexedGeometry").setDEF("c_SkinIndexedGeometry").setVersion("2.0")
            .addSkeleton(((HAnimJoint)new HAnimJoint("c_SkinIndexedGeometry").setName("humanoid_root").setUlimit(new MFFloat6().getArray()).setLlimit(new MFFloat7().getArray()).setContainerFieldOverride("skeleton"))
              .addChild(new HAnimSegment().setName("sacrum")))
            .addSkin(((IndexedFaceSet)new IndexedFaceSet().setDEF("SkinMeshIFS").setContainerFieldOverride("skin"))))
          .addComments("==============================")
          .addChild(new HAnimHumanoid("MultipleHumanoids").setName("SkinShapeIndexedGeometry").setDEF("d_SkinShapeIndexedGeometry").setVersion("2.0")
            .addSkeleton(((HAnimJoint)new HAnimJoint("d_SkinShapeIndexedGeometry").setName("humanoid_root").setUlimit(new MFFloat8().getArray()).setLlimit(new MFFloat9().getArray()).setContainerFieldOverride("skeleton"))
              .addChild(new HAnimSegment().setName("sacrum")))
            .addSkin(((Shape)new Shape().setContainerFieldOverride("skin"))
              .setGeometry(new IndexedFaceSet().setUSE("SkinMeshIFS"))))
          .addComments("==============================")
          .addChild(new HAnimHumanoid("MultipleHumanoids").setName("SkinSwitchShapeIndexedGeometry").setDEF("e_SkinSwitchShapeIndexedGeometry").setVersion("2.0")
            .addSkeleton(((HAnimJoint)new HAnimJoint("e_SkinSwitchShapeIndexedGeometry").setName("humanoid_root").setUlimit(new MFFloat10().getArray()).setLlimit(new MFFloat11().getArray()).setContainerFieldOverride("skeleton"))
              .addChild(new HAnimSegment().setName("sacrum")))
            .addComments("TODO show X3D4.0 addition of <Switch DEF='AlternativeSkins' containerField='skin'>")
            .addSkin(((Shape)new Shape().setContainerFieldOverride("skin"))
              .setGeometry(new IndexedFaceSet().setDEF("IndexedSkinMeshIFS")
                .setCoord(new Coordinate().setDEF("SkinMeshCoordinate")))))
          .addComments("similarly for LOD")
          .addComments("==============================")
          .addChild(new HAnimHumanoid("MultipleHumanoids").setName("SynthesizedSkinShapeIndexedTwoPartGeometry").setDEF("f_SynthesizedSkinShapeIndexedTwoPartGeometry").setVersion("2.0")
            .addSkeleton(((HAnimJoint)new HAnimJoint("f_SynthesizedSkinShapeIndexedTwoPartGeometry").setName("humanoid_root").setUlimit(new MFFloat12().getArray()).setLlimit(new MFFloat13().getArray()).setContainerFieldOverride("skeleton"))
              .addChild(new HAnimSegment().setName("sacrum")))
            .addSkin(((Shape)new Shape().setContainerFieldOverride("skin"))
              .setGeometry(new IndexedFaceSet().setDEF("TwoPartIndexedSkinMesh")
                .setCoord(new Coordinate().setDEF("TwoPartSkinMesh")))))
          .addComments("==============================")
          .addChild(new HAnimHumanoid("MultipleHumanoids").setName("ApparelSkinIndexedGeometryMultipleShapes").setDEF("g_ApparelSkinIndexedGeometryMultipleShapes").setVersion("2.0")
            .addSkeleton(((HAnimJoint)new HAnimJoint("g_ApparelSkinIndexedGeometryMultipleShapes").setName("humanoid_root").setUlimit(new MFFloat14().getArray()).setLlimit(new MFFloat15().getArray()).setContainerFieldOverride("skeleton"))
              .addChild(new HAnimSegment().setName("sacrum")))
            .addSkin(((Shape)new Shape().setContainerFieldOverride("skin")))
            .addComments("allow multiple Shape nodes with containerField='apparel', one for each layer of clothing")
            .addComments("TODO proposed for X3D4.1 <Shape containerField='apparel'/>"))
          .addComments("==============================")
          .addChild(new HAnimHumanoid("MultipleHumanoids").setName("AnatomySkinIndexedGeometryMultipleShapes").setDEF("h_AnatomySkinIndexedGeometryMultipleShapes").setVersion("2.0")
            .addSkeleton(((HAnimJoint)new HAnimJoint("h_AnatomySkinIndexedGeometryMultipleShapes").setName("humanoid_root").setUlimit(new MFFloat16().getArray()).setLlimit(new MFFloat17().getArray()).setContainerFieldOverride("skeleton"))
              .addChild(new HAnimSegment().setName("sacrum")))
            .addComments("allow multiple Shape nodes with containerField='skin', one for each layer of skin")
            .addSkin(((Shape)new Shape().setContainerFieldOverride("skin"))))
          .addComments("=============================="))
        .addChild(new Viewpoint().setDEF("ViewHelpText").setDescription("Select text to see website").setPosition(new double[] {0,0,12}))
        .addComments("Selectable Text design pattern has transparent Box and TouchSensor description as a tooltip")
        .addChild(new Anchor().setDescription("DesignPatternsApparelMedicalSkinLayers.x3d explores potential apparel approaches").setParameter(new MFString18().getArray()).setUrl(new MFString19().getArray())
          .addChild(new Shape()
            .addComments("TODO adjust Text string and Box size, then set Material transparency='1'")
            .setGeometry(new Text().setString(new MFString20().getArray())
              .setFontStyle(new FontStyle().setFamily(new MFString21().getArray()).setJustify(new MFString22().getArray()).setSize(0.6).setStyle("BOLD")))
            .setAppearance(new Appearance()
              .setMaterial(new Material().setDiffuseColor(new double[] {0.9,0.9,0.9}))))
          .addChild(new Shape()
            .addComments("Author TODO: to adjust transparent Box as text-selection assist, set width and height to match size, then set transparency='1' to make invisible.")
            .setGeometry(new Box().setSize(new double[] {11,2,0.001}))
            .setAppearance(new Appearance()
              .setMaterial(new Material().setTransparency(1))))))      ;
    return X3D0;
    }
private class MFColor0 {
  private org.web3d.x3d.jsail.fields.MFColor getArray() {
    return new org.web3d.x3d.jsail.fields.MFColor(new double[] {0,0.6,0.6});
  }
}
private class MFString1 {
  private org.web3d.x3d.jsail.fields.MFString getArray() {
    return new org.web3d.x3d.jsail.fields.MFString(new java.lang.String[] {"E.4 Multiple humanoids per file"});
  }
}
private class MFFloat2 {
  private org.web3d.x3d.jsail.fields.MFFloat getArray() {
    return new org.web3d.x3d.jsail.fields.MFFloat(new double[] {0,0,0});
  }
}
private class MFFloat3 {
  private org.web3d.x3d.jsail.fields.MFFloat getArray() {
    return new org.web3d.x3d.jsail.fields.MFFloat(new double[] {0,0,0});
  }
}
private class MFFloat4 {
  private org.web3d.x3d.jsail.fields.MFFloat getArray() {
    return new org.web3d.x3d.jsail.fields.MFFloat(new double[] {0,0,0});
  }
}
private class MFFloat5 {
  private org.web3d.x3d.jsail.fields.MFFloat getArray() {
    return new org.web3d.x3d.jsail.fields.MFFloat(new double[] {0,0,0});
  }
}
private class MFFloat6 {
  private org.web3d.x3d.jsail.fields.MFFloat getArray() {
    return new org.web3d.x3d.jsail.fields.MFFloat(new double[] {0,0,0});
  }
}
private class MFFloat7 {
  private org.web3d.x3d.jsail.fields.MFFloat getArray() {
    return new org.web3d.x3d.jsail.fields.MFFloat(new double[] {0,0,0});
  }
}
private class MFFloat8 {
  private org.web3d.x3d.jsail.fields.MFFloat getArray() {
    return new org.web3d.x3d.jsail.fields.MFFloat(new double[] {0,0,0});
  }
}
private class MFFloat9 {
  private org.web3d.x3d.jsail.fields.MFFloat getArray() {
    return new org.web3d.x3d.jsail.fields.MFFloat(new double[] {0,0,0});
  }
}
private class MFFloat10 {
  private org.web3d.x3d.jsail.fields.MFFloat getArray() {
    return new org.web3d.x3d.jsail.fields.MFFloat(new double[] {0,0,0});
  }
}
private class MFFloat11 {
  private org.web3d.x3d.jsail.fields.MFFloat getArray() {
    return new org.web3d.x3d.jsail.fields.MFFloat(new double[] {0,0,0});
  }
}
private class MFFloat12 {
  private org.web3d.x3d.jsail.fields.MFFloat getArray() {
    return new org.web3d.x3d.jsail.fields.MFFloat(new double[] {0,0,0});
  }
}
private class MFFloat13 {
  private org.web3d.x3d.jsail.fields.MFFloat getArray() {
    return new org.web3d.x3d.jsail.fields.MFFloat(new double[] {0,0,0});
  }
}
private class MFFloat14 {
  private org.web3d.x3d.jsail.fields.MFFloat getArray() {
    return new org.web3d.x3d.jsail.fields.MFFloat(new double[] {0,0,0});
  }
}
private class MFFloat15 {
  private org.web3d.x3d.jsail.fields.MFFloat getArray() {
    return new org.web3d.x3d.jsail.fields.MFFloat(new double[] {0,0,0});
  }
}
private class MFFloat16 {
  private org.web3d.x3d.jsail.fields.MFFloat getArray() {
    return new org.web3d.x3d.jsail.fields.MFFloat(new double[] {0,0,0});
  }
}
private class MFFloat17 {
  private org.web3d.x3d.jsail.fields.MFFloat getArray() {
    return new org.web3d.x3d.jsail.fields.MFFloat(new double[] {0,0,0});
  }
}
private class MFString18 {
  private org.web3d.x3d.jsail.fields.MFString getArray() {
    return new org.web3d.x3d.jsail.fields.MFString(new java.lang.String[] {"target=blank"});
  }
}
private class MFString19 {
  private org.web3d.x3d.jsail.fields.MFString getArray() {
    return new org.web3d.x3d.jsail.fields.MFString(new java.lang.String[] {"https://www.web3d.org/x3d/content/examples/HumanoidAnimation/Skin/DesignPatternsApparelMedicalSkinLayersIndex.html"});
  }
}
private class MFString20 {
  private org.web3d.x3d.jsail.fields.MFString getArray() {
    return new org.web3d.x3d.jsail.fields.MFString(new java.lang.String[] {"DesignPatternsApparelMedicalSkinLayers.x3d","","explores potential apparel approaches"});
  }
}
private class MFString21 {
  private org.web3d.x3d.jsail.fields.MFString getArray() {
    return new org.web3d.x3d.jsail.fields.MFString(new java.lang.String[] {"SANS"});
  }
}
private class MFString22 {
  private org.web3d.x3d.jsail.fields.MFString getArray() {
    return new org.web3d.x3d.jsail.fields.MFString(new java.lang.String[] {"MIDDLE","MIDDLE"});
  }
}
}
