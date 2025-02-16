'use strict';
import fs from 'fs';
import { X3D } from './x3d.mjs';
import { SFString } from './x3d.mjs';
import { SFNode } from './x3d.mjs';
import { head } from './x3d.mjs';
import { component } from './x3d.mjs';
import { SFInt32 } from './x3d.mjs';
import { MFNode } from './x3d.mjs';
import { meta } from './x3d.mjs';
import { Scene } from './x3d.mjs';
import { Group } from './x3d.mjs';
import { WorldInfo } from './x3d.mjs';
import { MFString } from './x3d.mjs';
import { Transform } from './x3d.mjs';
import { SFVec3f } from './x3d.mjs';
import { Shape } from './x3d.mjs';
import { IndexedFaceSet } from './x3d.mjs';
import { MFInt32 } from './x3d.mjs';
import { SFFloat } from './x3d.mjs';
import { Coordinate } from './x3d.mjs';
import { MFVec3f } from './x3d.mjs';
import { Color } from './x3d.mjs';
import { MFColor } from './x3d.mjs';
import { Appearance } from './x3d.mjs';
import { Material } from './x3d.mjs';
import { SFColor } from './x3d.mjs';
import { IndexedLineSet } from './x3d.mjs';
import { Sphere } from './x3d.mjs';
import { HAnimHumanoid } from './x3d.mjs';
import { HAnimJoint } from './x3d.mjs';
import { MFFloat } from './x3d.mjs';
import { HAnimSegment } from './x3d.mjs';
import { HAnimSite } from './x3d.mjs';
import { ImageTexture } from './x3d.mjs';
import { TimeSensor } from './x3d.mjs';
import { SFTime } from './x3d.mjs';
import { SFBool } from './x3d.mjs';
import { OrientationInterpolator } from './x3d.mjs';
import { MFRotation } from './x3d.mjs';
import { ROUTE } from './x3d.mjs';
import { PositionInterpolator } from './x3d.mjs';
import { NavigationInfo } from './x3d.mjs';
import { Viewpoint } from './x3d.mjs';
import { SFRotation } from './x3d.mjs';
import { Background } from './x3d.mjs';
import { Inline } from './x3d.mjs';
var X3D0 =  new X3D({

      profile : new SFString("Immersive"),
      version : new SFString("3.3"),
      head : new SFNode(
        new head({
          component : new SFNode(
            new component({
              name : new SFString("H-Anim"),
              level : new SFInt32(2)})),
          /*TODO fix X3D Tooltips entry for HAnim component*/
          meta : new MFNode([
            new meta({
              name : new SFString("title"),
              content : new SFString("JoeSkeletonSiteSkinSaluteWalk.x3d")}),

            new meta({
              name : new SFString("description"),
              content : new SFString("Attempting to show skeleton, skin, sites and animation")}),

            new meta({
              name : new SFString("reference"),
              content : new SFString("JoeSkeletonSiteSkinSaluteWalk.original.x3dv")}),

            new meta({
              name : new SFString("creator"),
              content : new SFString("Joe D. Williams")}),

            new meta({
              name : new SFString("created"),
              content : new SFString("9 January 2004")}),

            new meta({
              name : new SFString("translated"),
              content : new SFString("4 December 2022")}),

            new meta({
              name : new SFString("modified"),
              content : new SFString("4 December 2022")}),

            new meta({
              name : new SFString("translator"),
              content : new SFString("Michalis Kamburelis")}),

            new meta({
              name : new SFString("translator"),
              content : new SFString("Don Brutzman")}),

            new meta({
              name : new SFString("identifier"),
              content : new SFString("https://www.web3d.org/x3d/content/examples/HumanoidAnimation/MotionAnimation/JoeSkeletonSiteSkinSaluteWalk.x3d")}),

            new meta({
              name : new SFString("generator"),
              content : new SFString("tovrmlx3d, https://castle-engine.io/view3dscene.php#section_converting")}),

            new meta({
              name : new SFString("generator"),
              content : new SFString("X3D-Edit 4.0, https://savage.nps.edu/X3D-Edit")}),

            new meta({
              name : new SFString("filename"),
              content : new SFString("hanimLOA3A8320080320..x3dv 20080627")}),

            new meta({
              name : new SFString("warning"),
              content : new SFString("Under development, numerous errors and warnings")}),

            new meta({
              name : new SFString("TODO"),
              content : new SFString("Provide feedback to tovrmlx3d converter")}),

            new meta({
              name : new SFString("TODO"),
              content : new SFString("HAnimJoint cannot contain X3DChildNode elements, only HAnimJoint HAnimSegmet HAnimSite - improve diagnostics.")}),

            new meta({
              name : new SFString("TODO"),
              content : new SFString("ensure name prefix \"Joe_\" applied to all contained DEF values (not name field), perhaps correction automatically applied by X3DTidy")}),

            new meta({
              name : new SFString("TODO"),
              content : new SFString("This is an HAnimV1 loa model, might need to convert to X3D4 to note loa value")}),

            new meta({
              name : new SFString("license"),
              content : new SFString("../license.html")})])})),
      Scene : new SFNode(
        new Scene({
          children : new MFNode([
            new Group({
              DEF : new SFString("JointCenters_WorldInfo"),
              children : new MFNode([
                new WorldInfo({
                  info : new MFString(["By Joe for Joe"]),
                  title : new SFString("HAnim V1 LOA3 Skeleton Joint centers and Site translations Adapted for approximatrion of ManGLoss Site Location Example and HANIM 200x Default Joint Centers, LOA3")})])}),

            new Group({
              children : new MFNode([
                new Transform({
                  scale : new SFVec3f([10,10,10]),
                  translation : new SFVec3f([0,3,0]),
                  children : new MFNode([
                    new Shape({
                      DEF : new SFString("jointbox"),
                      geometry : new SFNode(
                        new IndexedFaceSet({
                          coordIndex : new MFInt32([0,1,2,-1,0,2,3,-1,0,3,4,-1,0,4,1,-1,5,2,1,-1,5,3,2,-1,5,4,3,-1,5,1,4,-1]),
                          creaseAngle : new SFFloat(0.10000000149011612),
                          coord : new SFNode(
                            new Coordinate({
                              point : new MFVec3f([0,0.009999999776482582,0,-0.009999999776482582,0,0,0,0,0.015699999406933784,0.009999999776482582,0,0,0,0,-0.009999999776482582,0,-0.009999999776482582,0])})),
                          color : new SFNode(
                            new Color({
                              color : new MFColor([1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0])}))})),
                      appearance : new SFNode(
                        new Appearance({
                          material : new SFNode(
                            new Material({
                              ambientIntensity : new SFFloat(0.5),
                              diffuseColor : new SFColor([0,0,0]),
                              shininess : new SFFloat(1),
                              transparency : new SFFloat(1)}))}))})])}),

                new Transform({
                  scale : new SFVec3f([0.10000000149011612,0.10000000149011612,0.10000000149011612]),
                  translation : new SFVec3f([0,0.10000000149011612,0]),
                  children : new MFNode([
                    new Shape({
                      DEF : new SFString("sitebox"),
                      geometry : new SFNode(
                        new IndexedFaceSet({
                          coordIndex : new MFInt32([0,1,2,-1,0,2,3,-1,0,3,4,-1,0,4,1,-1,5,2,1,-1,5,3,2,-1,5,4,3,-1,5,1,4,-1]),
                          creaseAngle : new SFFloat(0.10000000149011612),
                          coord : new SFNode(
                            new Coordinate({
                              point : new MFVec3f([0,0.009999999776482582,0,-0.009999999776482582,0,0,0,0,0.009999999776482582,0.009999999776482582,0,0,0,0,-0.009999999776482582,0,-0.009999999776482582,0])}))})),
                      appearance : new SFNode(
                        new Appearance({
                          material : new SFNode(
                            new Material({
                              ambientIntensity : new SFFloat(1),
                              diffuseColor : new SFColor([1,0,0]),
                              emissiveColor : new SFColor([1,0,0]),
                              shininess : new SFFloat(0.699999988079071),
                              specularColor : new SFColor([1,0,0]),
                              transparency : new SFFloat(0.6000000238418579)}))}))})])}),

                new Transform({
                  scale : new SFVec3f([0.10000000149011612,0.10000000149011612,0.10000000149011612]),
                  translation : new SFVec3f([0,0.20000000298023224,0]),
                  children : new MFNode([
                    new Shape({
                      geometry : new SFNode(
                        new IndexedLineSet({
                          coordIndex : new MFInt32([0,1,-1]),
                          coord : new SFNode(
                            new Coordinate({
                              point : new MFVec3f([0,0,0,0,0.00009999999747378752,0])}))})),
                      appearance : new SFNode(
                        new Appearance({
                          DEF : new SFString("SegmentLine"),
                          material : new SFNode(
                            new Material({
                              diffuseColor : new SFColor([0,1,0]),
                              emissiveColor : new SFColor([0,1,0]),
                              specularColor : new SFColor([0,1,0]),
                              transparency : new SFFloat(0.800000011920929)}))}))})])}),

                new Transform({
                  scale : new SFVec3f([0.10000000149011612,0.10000000149011612,0.10000000149011612]),
                  translation : new SFVec3f([0,0.30000001192092896,0]),
                  children : new MFNode([
                    new Shape({
                      DEF : new SFString("skinsphere"),
                      geometry : new SFNode(
                        new Sphere({
                          radius : new SFFloat(0.004999999888241291)})),
                      appearance : new SFNode(
                        new Appearance({
                          material : new SFNode(
                            new Material({
                              ambientIntensity : new SFFloat(0.5),
                              diffuseColor : new SFColor([0,1,0]),
                              emissiveColor : new SFColor([0,1,0]),
                              shininess : new SFFloat(1),
                              specularColor : new SFColor([0,1,0])}))}))})])})])}),

            new Group({
              DEF : new SFString("SpecHumanoid"),
              children : new MFNode([
                new Group({
                  DEF : new SFString("JoeISOHumanoid"),
                  children : new MFNode([
                    new HAnimHumanoid({
                      name : new SFString("Joe"),
                      DEF : new SFString("JoeHumanoid"),
                      version : new SFString("1.0"),
                      joints : new MFNode([
                        new HAnimJoint({
                          name : new SFString("HumanoidRoot"),
                          DEF : new SFString("Joe_HumanoidRoot"),
                          center : new SFVec3f([0,0.875,0]),
                          translation : new SFVec3f([0,0.875,0]),
                          ulimit : new MFFloat([0,0,0]),
                          llimit : new MFFloat([0,0,0]),
                          children : new MFNode([
                            new HAnimSegment({
                              name : new SFString("sacrum"),
                              DEF : new SFString("Joe_sacrum"),
                              children : new MFNode([
                                new Shape({
                                  USE : new SFString("jointbox")}),

                                new Shape({
                                  geometry : new SFNode(
                                    new IndexedLineSet({
                                      coordIndex : new MFInt32([0,1,-1]),
                                      coord : new SFNode(
                                        new Coordinate({
                                          point : new MFVec3f([0,0.875,0,0,0.9200000166893005,0])}))})),
                                  appearance : new SFNode(
                                    new Appearance({
                                      USE : new SFString("SegmentLine")}))})])}),

                            new HAnimJoint({
                              name : new SFString("sacroiliac"),
                              DEF : new SFString("Joe_sacroiliac"),
                              center : new SFVec3f([0,0.9200000166893005,0]),
                              skinCoordIndex : new MFInt32([17,19,20,21,22,23,26,27,73,82,89,91,93]),
                              skinCoordWeight : new MFFloat([1,1,1,1,1,1,1,1,1,1,0.3499999940395355,0.3499999940395355,1]),
                              translation : new SFVec3f([0,0.914900004863739,0.0015999999595806003]),
                              ulimit : new MFFloat([0,0,0]),
                              llimit : new MFFloat([0,0,0]),
                              children : new MFNode([
                                new HAnimSegment({
                                  name : new SFString("pelvis"),
                                  DEF : new SFString("Joe_pelvis"),
                                  children : new MFNode([
                                    new Shape({
                                      USE : new SFString("jointbox")}),

                                    new Shape({
                                      geometry : new SFNode(
                                        new IndexedLineSet({
                                          coordIndex : new MFInt32([0,1,-1,0,2,-1,0,3,-1]),
                                          coord : new SFNode(
                                            new Coordinate({
                                              point : new MFVec3f([0,0.9200000166893005,0,0.09610000252723694,0.9124000072479248,0,-0.0949999988079071,0.9171000123023987,0.002899999963119626,0,1.0449999570846558,-0.0949999988079071])}))})),
                                      appearance : new SFNode(
                                        new Appearance({
                                          USE : new SFString("SegmentLine")}))}),

                                    new HAnimSite({
                                      name : new SFString("l_iliocristale"),
                                      DEF : new SFString("Joe_l_iliocristale"),
                                      translation : new SFVec3f([0.14249999821186066,1.065000057220459,0.0032999999821186066]),
                                      children : new MFNode([
                                        new Shape({
                                          USE : new SFString("sitebox")})])}),

                                    new HAnimSite({
                                      name : new SFString("l_trochanterion"),
                                      DEF : new SFString("Joe_l_trochanterion"),
                                      translation : new SFVec3f([0.15000000596046448,0.8999999761581421,-0.009999999776482582]),
                                      children : new MFNode([
                                        new Shape({
                                          USE : new SFString("sitebox")})])}),

                                    new HAnimSite({
                                      name : new SFString("r_iliocristale"),
                                      DEF : new SFString("Joe_r_iliocristale"),
                                      translation : new SFVec3f([-0.14249999821186066,1.065000057220459,0.0032999999821186066]),
                                      children : new MFNode([
                                        new Shape({
                                          USE : new SFString("sitebox")})])}),

                                    new HAnimSite({
                                      name : new SFString("r_trochanterion"),
                                      DEF : new SFString("Joe_r_trochanterion"),
                                      translation : new SFVec3f([-0.15000000596046448,0.8999999761581421,-0.009999999776482582]),
                                      children : new MFNode([
                                        new Shape({
                                          USE : new SFString("sitebox")})])}),

                                    new HAnimSite({
                                      name : new SFString("l_asis"),
                                      DEF : new SFString("Joe_l_asis"),
                                      translation : new SFVec3f([0.09350000321865082,1.0299999713897705,0.07500000298023224]),
                                      children : new MFNode([
                                        new Shape({
                                          USE : new SFString("sitebox")})])}),

                                    new HAnimSite({
                                      name : new SFString("r_asis"),
                                      DEF : new SFString("Joe_r_asis"),
                                      translation : new SFVec3f([-0.09350000321865082,1.0299999713897705,0.07500000298023224]),
                                      children : new MFNode([
                                        new Shape({
                                          USE : new SFString("sitebox")})])}),

                                    new HAnimSite({
                                      name : new SFString("l_psis"),
                                      DEF : new SFString("Joe_l_psis"),
                                      translation : new SFVec3f([0.07729999721050262,1.0190000534057617,-0.11999999731779099]),
                                      children : new MFNode([
                                        new Shape({
                                          USE : new SFString("sitebox")})])}),

                                    new HAnimSite({
                                      name : new SFString("r_psis"),
                                      DEF : new SFString("Joe_r_psis"),
                                      translation : new SFVec3f([-0.07729999721050262,1.0190000534057617,-0.11999999731779099]),
                                      children : new MFNode([
                                        new Shape({
                                          USE : new SFString("sitebox")})])}),

                                    new HAnimSite({
                                      name : new SFString("floormarker"),
                                      DEF : new SFString("Joe_floormarker"),
                                      children : new MFNode([
                                        new Transform({
                                          scale : new SFVec3f([3,3,3]),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("sitebox")})])})])}),

                                    new HAnimSite({
                                      name : new SFString("crotch"),
                                      DEF : new SFString("Joe_crotch"),
                                      translation : new SFVec3f([0,0.8700000047683716,-0.02199999988079071]),
                                      children : new MFNode([
                                        new Shape({
                                          USE : new SFString("sitebox")})])}),

                                    new Transform({
                                      translation : new SFVec3f([0,0.9200000166893005,0.07999999821186066]),
                                      children : new MFNode([
                                        new Shape({
                                          USE : new SFString("skinsphere")})])}),

                                    new Transform({
                                      translation : new SFVec3f([0,0.8700000047683716,-0.02199999988079071]),
                                      children : new MFNode([
                                        new Shape({
                                          USE : new SFString("skinsphere")})])})])}),

                                new HAnimJoint({
                                  name : new SFString("l_hip"),
                                  DEF : new SFString("Joe_l_hip"),
                                  center : new SFVec3f([0.10000000149011612,0.9200000166893005,0]),
                                  skinCoordIndex : new MFInt32([89,90,94,95,96,97]),
                                  skinCoordWeight : new MFFloat([0.6499999761581421,1,1,1,1,1]),
                                  translation : new SFVec3f([0.10000000149011612,0.9200000166893005,0]),
                                  ulimit : new MFFloat([0,0,0]),
                                  llimit : new MFFloat([0,0,0]),
                                  children : new MFNode([
                                    new HAnimSegment({
                                      name : new SFString("l_thigh"),
                                      DEF : new SFString("Joe_l_thigh"),
                                      children : new MFNode([
                                        new Shape({
                                          USE : new SFString("jointbox")}),

                                        new Shape({
                                          geometry : new SFNode(
                                            new IndexedLineSet({
                                              coordIndex : new MFInt32([0,1,-1]),
                                              coord : new SFNode(
                                                new Coordinate({
                                                  point : new MFVec3f([0.10000000149011612,0.9200000166893005,0,0.11500000208616257,0.4659999907016754,0])}))})),
                                          appearance : new SFNode(
                                            new Appearance({
                                              USE : new SFString("SegmentLine")}))}),

                                        new HAnimSite({
                                          name : new SFString("l_knee_crease"),
                                          DEF : new SFString("Joe_l_knee_crease"),
                                          translation : new SFVec3f([0.11500000208616257,0.4659999907016754,-0.054999999701976776]),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("sitebox")})])}),

                                        new HAnimSite({
                                          name : new SFString("l_femoral_lateral_epicn"),
                                          DEF : new SFString("Joe_l_femoral_lateral_epicn"),
                                          translation : new SFVec3f([0.17000000178813934,0.4659999907016754,0]),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("sitebox")})])}),

                                        new HAnimSite({
                                          name : new SFString("l_femoral_medial_epicn"),
                                          DEF : new SFString("Joe_l_femoral_medial_epicn"),
                                          translation : new SFVec3f([0.05000000074505806,0.4659999907016754,0]),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("sitebox")})])}),

                                        new Transform({
                                          translation : new SFVec3f([0.10000000149011612,0.8999999761581421,0.07750000059604645]),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("skinsphere")})])}),

                                        new Transform({
                                          translation : new SFVec3f([0.07900000363588333,0.9200000166893005,-0.14000000059604645]),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("skinsphere")})])}),

                                        new Transform({
                                          translation : new SFVec3f([0.17100000381469727,0.6499999761581421,0]),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("skinsphere")})])}),

                                        new Transform({
                                          translation : new SFVec3f([0.019999999552965164,0.6499999761581421,0]),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("skinsphere")})])}),

                                        new Transform({
                                          translation : new SFVec3f([0.10000000149011612,0.6499999761581421,-0.07999999821186066]),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("skinsphere")})])}),

                                        new Transform({
                                          translation : new SFVec3f([0.10000000149011612,0.6499999761581421,0.07000000029802322]),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("skinsphere")})])})])}),

                                    new HAnimJoint({
                                      name : new SFString("l_knee"),
                                      DEF : new SFString("Joe_l_knee"),
                                      center : new SFVec3f([0.11500000208616257,0.4659999907016754,0]),
                                      skinCoordIndex : new MFInt32([334,335,336,337,338,339,340,341]),
                                      skinCoordWeight : new MFFloat([1,1,1,1,1,1,1,1]),
                                      translation : new SFVec3f([0.11500000208616257,0.4659999907016754,0]),
                                      ulimit : new MFFloat([0,0,0]),
                                      llimit : new MFFloat([0,0,0]),
                                      children : new MFNode([
                                        new HAnimSegment({
                                          name : new SFString("l_calf"),
                                          DEF : new SFString("Joe_l_calf"),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("jointbox")}),

                                            new Shape({
                                              geometry : new SFNode(
                                                new IndexedLineSet({
                                                  coordIndex : new MFInt32([0,1,-1]),
                                                  coord : new SFNode(
                                                    new Coordinate({
                                                      point : new MFVec3f([0.11500000208616257,0.4659999907016754,0,0.10000000149011612,0.0689999982714653,0])}))})),
                                              appearance : new SFNode(
                                                new Appearance({
                                                  USE : new SFString("SegmentLine")}))}),

                                            new HAnimSite({
                                              name : new SFString("l_lateral_malleolus"),
                                              DEF : new SFString("Joe_l_lateral_malleolus"),
                                              translation : new SFVec3f([0.15000000596046448,0.07000000029802322,0]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("sitebox")})])}),

                                            new HAnimSite({
                                              name : new SFString("l_medial_malleolus"),
                                              DEF : new SFString("Joe_l_medial_malleolus"),
                                              translation : new SFVec3f([0.08500000089406967,0.0860000029206276,0.012500000186264515]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("sitebox")})])}),

                                            new Transform({
                                              translation : new SFVec3f([0.11500000208616257,0.4659999907016754,0.05999999865889549]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("skinsphere")})])}),

                                            new Transform({
                                              translation : new SFVec3f([0.11500000208616257,0.4659999907016754,-0.054999999701976776]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("skinsphere")})])}),

                                            new Transform({
                                              translation : new SFVec3f([0.17000000178813934,0.4659999907016754,0]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("skinsphere")})])}),

                                            new Transform({
                                              translation : new SFVec3f([0.05000000074505806,0.4659999907016754,0]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("skinsphere")})])}),

                                            new Transform({
                                              translation : new SFVec3f([0.17000000178813934,0.30000001192092896,0]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("skinsphere")})])}),

                                            new Transform({
                                              translation : new SFVec3f([0.05999999865889549,0.30000001192092896,0]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("skinsphere")})])}),

                                            new Transform({
                                              translation : new SFVec3f([0.10000000149011612,0.30000001192092896,-0.05000000074505806]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("skinsphere")})])}),

                                            new Transform({
                                              translation : new SFVec3f([0.10000000149011612,0.30000001192092896,0.05000000074505806]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("skinsphere")})])})])}),

                                        new HAnimJoint({
                                          name : new SFString("l_ankle"),
                                          DEF : new SFString("Joe_l_ankle"),
                                          center : new SFVec3f([0.11500000208616257,0.0689999982714653,0]),
                                          skinCoordIndex : new MFInt32([342,343,344,345]),
                                          skinCoordWeight : new MFFloat([1,1,1,1]),
                                          translation : new SFVec3f([0.11500000208616257,0.0689999982714653,0]),
                                          ulimit : new MFFloat([0,0,0]),
                                          llimit : new MFFloat([0,0,0]),
                                          children : new MFNode([
                                            new HAnimSegment({
                                              name : new SFString("l_hindfoot"),
                                              DEF : new SFString("Joe_l_hindfoot"),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("jointbox")}),

                                                new Shape({
                                                  geometry : new SFNode(
                                                    new IndexedLineSet({
                                                      coordIndex : new MFInt32([0,1,-1]),
                                                      coord : new SFNode(
                                                        new Coordinate({
                                                          point : new MFVec3f([0.10000000149011612,0.0689999982714653,0,0.11500000208616257,0.03099999949336052,0.029999999329447746])}))})),
                                                  appearance : new SFNode(
                                                    new Appearance({
                                                      USE : new SFString("SegmentLine")}))}),

                                                new HAnimSite({
                                                  name : new SFString("l_sphyrion"),
                                                  DEF : new SFString("Joe_l_sphyrion"),
                                                  translation : new SFVec3f([0.09000000357627869,0.0560000017285347,0.012500000186264515]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("sitebox")})])}),

                                                new HAnimSite({
                                                  name : new SFString("l_calcaneous_post"),
                                                  DEF : new SFString("Joe_l_calcaneous_post"),
                                                  translation : new SFVec3f([0.11500000208616257,0.03999999910593033,-0.054999999701976776]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("sitebox")})])}),

                                                new Transform({
                                                  translation : new SFVec3f([0.15000000596046448,0.07000000029802322,0]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("skinsphere")})])}),

                                                new Transform({
                                                  translation : new SFVec3f([0.08500000089406967,0.0860000029206276,0.012500000186264515]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("skinsphere")})])}),

                                                new Transform({
                                                  translation : new SFVec3f([0.11500000208616257,0.0689999982714653,-0.04500000178813934]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("skinsphere")})])}),

                                                new Transform({
                                                  translation : new SFVec3f([0.11699999868869781,0.09749999642372131,0.061500001698732376]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("skinsphere")})])})])}),

                                            new HAnimJoint({
                                              name : new SFString("l_subtalar"),
                                              DEF : new SFString("Joe_l_subtalar"),
                                              center : new SFVec3f([0.11500000208616257,0.03099999949336052,0.029999999329447746]),
                                              skinCoordIndex : new MFInt32([346,347,348,71]),
                                              skinCoordWeight : new MFFloat([1,1,1,1]),
                                              translation : new SFVec3f([0.11500000208616257,0.03099999949336052,0.029999999329447746]),
                                              ulimit : new MFFloat([0,0,0]),
                                              llimit : new MFFloat([0,0,0]),
                                              children : new MFNode([
                                                new HAnimSegment({
                                                  name : new SFString("l_midproximal"),
                                                  DEF : new SFString("Joe_l_l_midproximal"),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("jointbox")}),

                                                    new Shape({
                                                      geometry : new SFNode(
                                                        new IndexedLineSet({
                                                          coordIndex : new MFInt32([0,1,-1]),
                                                          coord : new SFNode(
                                                            new Coordinate({
                                                              point : new MFVec3f([0.11500000208616257,0.03099999949336052,0.029999999329447746,0.11500000208616257,0.03700000047683716,0.09000000357627869])}))})),
                                                      appearance : new SFNode(
                                                        new Appearance({
                                                          USE : new SFString("SegmentLine")}))}),

                                                    new Transform({
                                                      translation : new SFVec3f([0.13750000298023224,0.006000000052154064,-0.029999999329447746]),
                                                      children : new MFNode([
                                                        new Shape({
                                                          USE : new SFString("skinsphere")})])}),

                                                    new Transform({
                                                      translation : new SFVec3f([0.0949999988079071,0.006000000052154064,-0.029999999329447746]),
                                                      children : new MFNode([
                                                        new Shape({
                                                          USE : new SFString("skinsphere")})])}),

                                                    new Transform({
                                                      translation : new SFVec3f([0.11500000208616257,0.014999999664723873,-0.04500000178813934]),
                                                      children : new MFNode([
                                                        new Shape({
                                                          USE : new SFString("skinsphere")})])})])}),

                                                new HAnimJoint({
                                                  name : new SFString("l_midtarsal"),
                                                  DEF : new SFString("Joe_l_midtarsal"),
                                                  center : new SFVec3f([0.11500000208616257,0.03700000047683716,0.09000000357627869]),
                                                  skinCoordIndex : new MFInt32([349,350,351,352]),
                                                  skinCoordWeight : new MFFloat([1,1,1,1]),
                                                  translation : new SFVec3f([0.11500000208616257,0.03700000047683716,0.09000000357627869]),
                                                  ulimit : new MFFloat([0,0,0]),
                                                  llimit : new MFFloat([0,0,0]),
                                                  children : new MFNode([
                                                    new HAnimSegment({
                                                      name : new SFString("l_middistal"),
                                                      DEF : new SFString("Joe_l_middistal"),
                                                      children : new MFNode([
                                                        new Shape({
                                                          USE : new SFString("jointbox")}),

                                                        new Shape({
                                                          geometry : new SFNode(
                                                            new IndexedLineSet({
                                                              coordIndex : new MFInt32([0,1,-1]),
                                                              coord : new SFNode(
                                                                new Coordinate({
                                                                  point : new MFVec3f([0.11500000208616257,0.03700000047683716,0.09000000357627869,0.11500000208616257,0.019999999552965164,0.12200000137090683])}))})),
                                                          appearance : new SFNode(
                                                            new Appearance({
                                                              USE : new SFString("SegmentLine")}))}),

                                                        new HAnimSite({
                                                          name : new SFString("l_metatarsal_pha1"),
                                                          DEF : new SFString("Joe_l_metatarsal_pha1"),
                                                          translation : new SFVec3f([0.08699999749660492,0.009999999776482582,0.12200000137090683]),
                                                          children : new MFNode([
                                                            new Shape({
                                                              USE : new SFString("sitebox")})])}),

                                                        new Transform({
                                                          translation : new SFVec3f([0.11500000208616257,0.05999999865889549,0.10000000149011612]),
                                                          children : new MFNode([
                                                            new Shape({
                                                              USE : new SFString("skinsphere")})])}),

                                                        new Transform({
                                                          translation : new SFVec3f([0.11500000208616257,0,0.07000000029802322]),
                                                          children : new MFNode([
                                                            new Shape({
                                                              USE : new SFString("skinsphere")})])}),

                                                        new Transform({
                                                          translation : new SFVec3f([0.16500000655651093,0,0.07000000029802322]),
                                                          children : new MFNode([
                                                            new Shape({
                                                              USE : new SFString("skinsphere")})])}),

                                                        new Transform({
                                                          translation : new SFVec3f([0.0949999988079071,0,0.07000000029802322]),
                                                          children : new MFNode([
                                                            new Shape({
                                                              USE : new SFString("skinsphere")})])})])}),

                                                    new HAnimJoint({
                                                      name : new SFString("l_metatarsal"),
                                                      DEF : new SFString("Joe_l_metatarsal"),
                                                      center : new SFVec3f([0.11500000208616257,0.019999999552965164,0.12200000137090683]),
                                                      skinCoordIndex : new MFInt32([353,354,355,356,357,358,359,360,361]),
                                                      skinCoordWeight : new MFFloat([1,1,1,1,1,1,1,1,1]),
                                                      translation : new SFVec3f([0.11500000208616257,0.019999999552965164,0.12999999523162842]),
                                                      ulimit : new MFFloat([0,0,0]),
                                                      llimit : new MFFloat([0,0,0]),
                                                      children : new MFNode([
                                                        new HAnimSegment({
                                                          name : new SFString("l_forefoot"),
                                                          DEF : new SFString("Joe_l_forefoot"),
                                                          children : new MFNode([
                                                            new Shape({
                                                              USE : new SFString("jointbox")}),

                                                            new Shape({
                                                              geometry : new SFNode(
                                                                new IndexedLineSet({
                                                                  coordIndex : new MFInt32([0,1,-1]),
                                                                  coord : new SFNode(
                                                                    new Coordinate({
                                                                      point : new MFVec3f([0.11500000208616257,0.019999999552965164,0.12200000137090683,0.13199999928474426,0.013000000268220901,0.1899999976158142])}))})),
                                                              appearance : new SFNode(
                                                                new Appearance({
                                                                  USE : new SFString("SegmentLine")}))}),

                                                            new HAnimSite({
                                                              name : new SFString("l_metatarsal_pha5"),
                                                              DEF : new SFString("Joe_l_metatarsal_pha5"),
                                                              translation : new SFVec3f([0.16500000655651093,0.009999999776482582,0.11999999731779099]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("sitebox")})])}),

                                                            new HAnimSite({
                                                              name : new SFString("l_digit2"),
                                                              DEF : new SFString("Joe_l_digit2"),
                                                              translation : new SFVec3f([0.10999999940395355,0.010999999940395355,0.1899999976158142]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("sitebox")})])}),

                                                            new Transform({
                                                              translation : new SFVec3f([0.11500000208616257,0.03999999910593033,0.12999999523162842]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("skinsphere")})])}),

                                                            new Transform({
                                                              translation : new SFVec3f([0.125,0,0.11999999731779099]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("skinsphere")})])}),

                                                            new Transform({
                                                              translation : new SFVec3f([0.16500000655651093,0,0.11999999731779099]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("skinsphere")})])}),

                                                            new Transform({
                                                              translation : new SFVec3f([0.08699999749660492,0,0.12200000137090683]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("skinsphere")})])}),

                                                            new Transform({
                                                              translation : new SFVec3f([0.09000000357627869,0.012000000104308128,0.18799999356269836]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("skinsphere")})])}),

                                                            new Transform({
                                                              translation : new SFVec3f([0.10999999940395355,0.010999999940395355,0.1899999976158142]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("skinsphere")})])}),

                                                            new Transform({
                                                              translation : new SFVec3f([0.12800000607967377,0.010999999940395355,0.1850000023841858]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("skinsphere")})])}),

                                                            new Transform({
                                                              translation : new SFVec3f([0.1420000046491623,0.010999999940395355,0.17800000309944153]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("skinsphere")})])}),

                                                            new Transform({
                                                              translation : new SFVec3f([0.15399999916553497,0.009999999776482582,0.1679999977350235]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("skinsphere")})])})])})])})])})])})])})])})])}),

                                new HAnimJoint({
                                  name : new SFString("r_hip"),
                                  DEF : new SFString("Joe_r_hip"),
                                  center : new SFVec3f([-0.10000000149011612,0.9200000166893005,0]),
                                  skinCoordIndex : new MFInt32([91,92,98,99,100,101]),
                                  skinCoordWeight : new MFFloat([0.6499999761581421,1,1,1,1,1]),
                                  ulimit : new MFFloat([0,0,0]),
                                  llimit : new MFFloat([0,0,0]),
                                  children : new MFNode([
                                    new Transform({
                                      translation : new SFVec3f([-0.10000000149011612,0.9200000166893005,0]),
                                      children : new MFNode([
                                        new Shape({
                                          USE : new SFString("jointbox")})])}),

                                    new HAnimSegment({
                                      name : new SFString("r_thigh"),
                                      DEF : new SFString("Joe_r_thigh"),
                                      children : new MFNode([
                                        new Shape({
                                          geometry : new SFNode(
                                            new IndexedLineSet({
                                              coordIndex : new MFInt32([0,1,-1]),
                                              coord : new SFNode(
                                                new Coordinate({
                                                  point : new MFVec3f([-0.10000000149011612,0.9200000166893005,0,-0.10000000149011612,0.49129998683929443,0])}))})),
                                          appearance : new SFNode(
                                            new Appearance({
                                              USE : new SFString("SegmentLine")}))}),

                                        new HAnimSite({
                                          name : new SFString("r_knee_crease"),
                                          DEF : new SFString("Joe_r_knee_crease"),
                                          translation : new SFVec3f([-0.11500000208616257,0.4659999907016754,-0.054999999701976776]),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("sitebox")})])}),

                                        new HAnimSite({
                                          name : new SFString("r_femoral_lateral_epicn"),
                                          DEF : new SFString("Joe_r_femoral_lateral_epicn"),
                                          translation : new SFVec3f([-0.17000000178813934,0.4659999907016754,0]),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("sitebox")})])}),

                                        new HAnimSite({
                                          name : new SFString("r_femoral_medial_epicn"),
                                          DEF : new SFString("Joe_r_femoral_medial_epicn"),
                                          translation : new SFVec3f([-0.05000000074505806,0.4659999907016754,0]),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("sitebox")})])}),

                                        new Transform({
                                          translation : new SFVec3f([-0.07900000363588333,0.9200000166893005,-0.14000000059604645]),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("skinsphere")})])}),

                                        new Transform({
                                          translation : new SFVec3f([-0.10000000149011612,0.8999999761581421,0.07500000298023224]),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("skinsphere")})])}),

                                        new Transform({
                                          translation : new SFVec3f([-0.17100000381469727,0.6499999761581421,0]),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("skinsphere")})])}),

                                        new Transform({
                                          translation : new SFVec3f([-0.019999999552965164,0.6499999761581421,0]),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("skinsphere")})])}),

                                        new Transform({
                                          translation : new SFVec3f([-0.10000000149011612,0.6499999761581421,-0.07999999821186066]),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("skinsphere")})])}),

                                        new Transform({
                                          translation : new SFVec3f([-0.10000000149011612,0.6499999761581421,0.07000000029802322]),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("skinsphere")})])})])}),

                                    new HAnimJoint({
                                      name : new SFString("r_knee"),
                                      DEF : new SFString("Joe_r_knee"),
                                      center : new SFVec3f([-0.05000000074505806,0.4659999907016754,0]),
                                      skinCoordIndex : new MFInt32([362,363,364,365,366,367,368,369]),
                                      skinCoordWeight : new MFFloat([1,1,1,1,1,1,1,1]),
                                      ulimit : new MFFloat([0,0,0]),
                                      llimit : new MFFloat([0,0,0]),
                                      children : new MFNode([
                                        new Transform({
                                          translation : new SFVec3f([-0.10000000149011612,0.49129998683929443,0]),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("jointbox")})])}),

                                        new HAnimSegment({
                                          name : new SFString("r_calf"),
                                          DEF : new SFString("Joe_r_calf"),
                                          children : new MFNode([
                                            new Shape({
                                              geometry : new SFNode(
                                                new IndexedLineSet({
                                                  coordIndex : new MFInt32([0,1,-1]),
                                                  coord : new SFNode(
                                                    new Coordinate({
                                                      point : new MFVec3f([-0.10000000149011612,0.49129998683929443,0,-0.10000000149011612,0.07119999825954437,0])}))})),
                                              appearance : new SFNode(
                                                new Appearance({
                                                  USE : new SFString("SegmentLine")}))}),

                                            new HAnimSite({
                                              name : new SFString("r_lateral_malleolus"),
                                              DEF : new SFString("Joe_r_lateral_malleolus"),
                                              translation : new SFVec3f([-0.15000000596046448,0.07000000029802322,0]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("sitebox")})])}),

                                            new HAnimSite({
                                              name : new SFString("r_medial_malleolus"),
                                              DEF : new SFString("Joe_r_medial_malleolus"),
                                              translation : new SFVec3f([-0.08500000089406967,0.0860000029206276,0.012500000186264515]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("sitebox")})])}),

                                            new Transform({
                                              translation : new SFVec3f([-0.11500000208616257,0.4659999907016754,0.05999999865889549]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("skinsphere")})])}),

                                            new Transform({
                                              translation : new SFVec3f([-0.11500000208616257,0.4659999907016754,-0.054999999701976776]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("skinsphere")})])}),

                                            new Transform({
                                              translation : new SFVec3f([-0.17000000178813934,0.4659999907016754,0]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("skinsphere")})])}),

                                            new Transform({
                                              translation : new SFVec3f([-0.05000000074505806,0.4659999907016754,0]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("skinsphere")})])}),

                                            new Transform({
                                              translation : new SFVec3f([-0.17000000178813934,0.30000001192092896,0]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("skinsphere")})])}),

                                            new Transform({
                                              translation : new SFVec3f([-0.05999999865889549,0.30000001192092896,0]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("skinsphere")})])}),

                                            new Transform({
                                              translation : new SFVec3f([-0.10000000149011612,0.30000001192092896,-0.05000000074505806]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("skinsphere")})])}),

                                            new Transform({
                                              translation : new SFVec3f([-0.10000000149011612,0.30000001192092896,0.05000000074505806]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("skinsphere")})])})])}),

                                        new HAnimJoint({
                                          name : new SFString("r_ankle"),
                                          DEF : new SFString("Joe_r_ankle"),
                                          center : new SFVec3f([-0.11500000208616257,0.0689999982714653,0]),
                                          skinCoordIndex : new MFInt32([370,371,372,373]),
                                          skinCoordWeight : new MFFloat([1,1,1,1]),
                                          ulimit : new MFFloat([0,0,0]),
                                          llimit : new MFFloat([0,0,0]),
                                          children : new MFNode([
                                            new Transform({
                                              translation : new SFVec3f([-0.10000000149011612,0.07119999825954437,0]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("jointbox")})])}),

                                            new HAnimSegment({
                                              name : new SFString("r_hindfoot"),
                                              DEF : new SFString("Joe_r_hindfoot"),
                                              children : new MFNode([
                                                new Shape({
                                                  geometry : new SFNode(
                                                    new IndexedLineSet({
                                                      coordIndex : new MFInt32([0,1,-1]),
                                                      coord : new SFNode(
                                                        new Coordinate({
                                                          point : new MFVec3f([-0.10000000149011612,0.07119999825954437,0,-0.10000000149011612,0.014999999664723873,-0.009999999776482582])}))})),
                                                  appearance : new SFNode(
                                                    new Appearance({
                                                      USE : new SFString("SegmentLine")}))}),

                                                new HAnimSite({
                                                  name : new SFString("r_sphyrion"),
                                                  DEF : new SFString("Joe_r_sphyrion"),
                                                  translation : new SFVec3f([-0.09000000357627869,0.0560000017285347,0.012500000186264515]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("sitebox")})])}),

                                                new HAnimSite({
                                                  name : new SFString("r_calcaneous_post"),
                                                  DEF : new SFString("Joe_r_calcaneous_post"),
                                                  translation : new SFVec3f([-0.11500000208616257,0.03999999910593033,-0.054999999701976776]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("sitebox")})])}),

                                                new Transform({
                                                  translation : new SFVec3f([-0.15000000596046448,0.07000000029802322,0]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("skinsphere")})])}),

                                                new Transform({
                                                  translation : new SFVec3f([-0.08500000089406967,0.0860000029206276,0.012500000186264515]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("skinsphere")})])}),

                                                new Transform({
                                                  translation : new SFVec3f([-0.11500000208616257,0.0689999982714653,-0.04500000178813934]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("skinsphere")})])}),

                                                new Transform({
                                                  translation : new SFVec3f([-0.11699999868869781,0.09749999642372131,0.061500001698732376]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("skinsphere")})])})])}),

                                            new HAnimJoint({
                                              name : new SFString("r_subtalar"),
                                              DEF : new SFString("Joe_r_subtalar"),
                                              center : new SFVec3f([-0.10000000149011612,0.014999999664723873,-0.009999999776482582]),
                                              skinCoordIndex : new MFInt32([374,375,376]),
                                              skinCoordWeight : new MFFloat([1,1,1]),
                                              ulimit : new MFFloat([0,0,0]),
                                              llimit : new MFFloat([0,0,0]),
                                              children : new MFNode([
                                                new Transform({
                                                  translation : new SFVec3f([-0.10000000149011612,0.014999999664723873,-0.009999999776482582]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("jointbox")})])}),

                                                new HAnimSegment({
                                                  name : new SFString("r_midproximal"),
                                                  DEF : new SFString("Joe_r_midproximal"),
                                                  children : new MFNode([
                                                    new Shape({
                                                      geometry : new SFNode(
                                                        new IndexedLineSet({
                                                          coordIndex : new MFInt32([0,1,-1]),
                                                          coord : new SFNode(
                                                            new Coordinate({
                                                              point : new MFVec3f([-0.10000000149011612,0.014999999664723873,-0.009999999776482582,-0.10000000149011612,0.019999999552965164,0.07000000029802322])}))})),
                                                      appearance : new SFNode(
                                                        new Appearance({
                                                          USE : new SFString("SegmentLine")}))}),

                                                    new Transform({
                                                      translation : new SFVec3f([-0.13750000298023224,0.006000000052154064,-0.029999999329447746]),
                                                      children : new MFNode([
                                                        new Shape({
                                                          USE : new SFString("skinsphere")})])}),

                                                    new Transform({
                                                      translation : new SFVec3f([-0.0949999988079071,0.006000000052154064,-0.029999999329447746]),
                                                      children : new MFNode([
                                                        new Shape({
                                                          USE : new SFString("skinsphere")})])}),

                                                    new Transform({
                                                      translation : new SFVec3f([-0.0949999988079071,0.006000000052154064,-0.029999999329447746]),
                                                      children : new MFNode([
                                                        new Shape({
                                                          USE : new SFString("skinsphere")})])})])}),

                                                new HAnimJoint({
                                                  name : new SFString("r_midtarsal"),
                                                  DEF : new SFString("Joe_r_midtarsal"),
                                                  center : new SFVec3f([-0.11500000208616257,0.03700000047683716,0.09000000357627869]),
                                                  skinCoordIndex : new MFInt32([377,378,379,380]),
                                                  skinCoordWeight : new MFFloat([1,1,1,1]),
                                                  ulimit : new MFFloat([0,0,0]),
                                                  llimit : new MFFloat([0,0,0]),
                                                  children : new MFNode([
                                                    new Transform({
                                                      translation : new SFVec3f([-0.10000000149011612,0.019999999552965164,0.07000000029802322]),
                                                      children : new MFNode([
                                                        new Shape({
                                                          USE : new SFString("jointbox")})])}),

                                                    new HAnimSegment({
                                                      name : new SFString("r_middistal"),
                                                      DEF : new SFString("Joe_r_middistal"),
                                                      children : new MFNode([
                                                        new Shape({
                                                          geometry : new SFNode(
                                                            new IndexedLineSet({
                                                              coordIndex : new MFInt32([0,1,-1]),
                                                              coord : new SFNode(
                                                                new Coordinate({
                                                                  point : new MFVec3f([-0.10000000149011612,0.019999999552965164,0.07000000029802322,-0.10000000149011612,0.009999999776482582,0.14000000059604645])}))})),
                                                          appearance : new SFNode(
                                                            new Appearance({
                                                              USE : new SFString("SegmentLine")}))}),

                                                        new HAnimSite({
                                                          name : new SFString("r_metatarsal_pha1"),
                                                          DEF : new SFString("Joe_r_metatarsal_pha1"),
                                                          translation : new SFVec3f([-0.11500000208616257,0.019999999552965164,0.12200000137090683]),
                                                          children : new MFNode([
                                                            new Shape({
                                                              USE : new SFString("sitebox")})])}),

                                                        new Transform({
                                                          translation : new SFVec3f([-0.11500000208616257,0.05999999865889549,0.10000000149011612]),
                                                          children : new MFNode([
                                                            new Shape({
                                                              USE : new SFString("skinsphere")})])}),

                                                        new Transform({
                                                          translation : new SFVec3f([-0.11500000208616257,0,0.07000000029802322]),
                                                          children : new MFNode([
                                                            new Shape({
                                                              USE : new SFString("skinsphere")})])}),

                                                        new Transform({
                                                          translation : new SFVec3f([-0.16500000655651093,0,0.07000000029802322]),
                                                          children : new MFNode([
                                                            new Shape({
                                                              USE : new SFString("skinsphere")})])}),

                                                        new Transform({
                                                          translation : new SFVec3f([-0.16500000655651093,0,0.07000000029802322]),
                                                          children : new MFNode([
                                                            new Shape({
                                                              USE : new SFString("skinsphere")})])})])}),

                                                    new HAnimJoint({
                                                      name : new SFString("r_metatarsal"),
                                                      DEF : new SFString("Joe_r_metatarsal"),
                                                      center : new SFVec3f([-0.10000000149011612,0.009999999776482582,0.14000000059604645]),
                                                      skinCoordIndex : new MFInt32([381,382,383,384,385,386,387,388,389]),
                                                      skinCoordWeight : new MFFloat([1,1,1,1,1,1,1,1,1]),
                                                      ulimit : new MFFloat([0,0,0]),
                                                      llimit : new MFFloat([0,0,0]),
                                                      children : new MFNode([
                                                        new Transform({
                                                          translation : new SFVec3f([-0.10859999805688858,0.009999999776482582,0.14000000059604645]),
                                                          children : new MFNode([
                                                            new Shape({
                                                              USE : new SFString("jointbox")})])}),

                                                        new HAnimSegment({
                                                          name : new SFString("r_forefoot"),
                                                          DEF : new SFString("Joe_r_forefoot"),
                                                          children : new MFNode([
                                                            new Shape({
                                                              geometry : new SFNode(
                                                                new IndexedLineSet({
                                                                  coordIndex : new MFInt32([0,1,-1]),
                                                                  coord : new SFNode(
                                                                    new Coordinate({
                                                                      point : new MFVec3f([-0.10000000149011612,0.009999999776482582,0.14000000059604645,-0.10429999977350235,0.0015999999595806003,0.20000000298023224])}))})),
                                                              appearance : new SFNode(
                                                                new Appearance({
                                                                  USE : new SFString("SegmentLine")}))}),

                                                            new HAnimSite({
                                                              name : new SFString("r_metatarsal_pha5"),
                                                              DEF : new SFString("Joe_r_metatarsal_pha5"),
                                                              translation : new SFVec3f([-0.16500000655651093,0.009999999776482582,0.11999999731779099]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("sitebox")})])}),

                                                            new HAnimSite({
                                                              name : new SFString("r_digit2"),
                                                              DEF : new SFString("Joe_r_digit2"),
                                                              translation : new SFVec3f([-0.10999999940395355,0.010999999940395355,0.1899999976158142]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("sitebox")})])}),

                                                            new Transform({
                                                              translation : new SFVec3f([-0.11500000208616257,0.03999999910593033,0.12999999523162842]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("skinsphere")})])}),

                                                            new Transform({
                                                              translation : new SFVec3f([-0.125,0,0.11999999731779099]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("skinsphere")})])}),

                                                            new Transform({
                                                              translation : new SFVec3f([-0.16500000655651093,0,0.11999999731779099]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("skinsphere")})])}),

                                                            new Transform({
                                                              translation : new SFVec3f([-0.08699999749660492,0,0.12200000137090683]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("skinsphere")})])}),

                                                            new Transform({
                                                              translation : new SFVec3f([-0.09000000357627869,0.012000000104308128,0.18799999356269836]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("skinsphere")})])}),

                                                            new Transform({
                                                              translation : new SFVec3f([-0.10999999940395355,0.010999999940395355,0.1899999976158142]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("skinsphere")})])}),

                                                            new Transform({
                                                              translation : new SFVec3f([-0.12800000607967377,0.010999999940395355,0.1850000023841858]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("skinsphere")})])}),

                                                            new Transform({
                                                              translation : new SFVec3f([-0.1420000046491623,0.010999999940395355,0.17800000309944153]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("skinsphere")})])}),

                                                            new Transform({
                                                              translation : new SFVec3f([-0.15399999916553497,0.009999999776482582,0.1679999977350235]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("skinsphere")})])})])})])})])})])})])})])})])})])}),

                            new HAnimJoint({
                              name : new SFString("vl5"),
                              DEF : new SFString("Joe_vl5"),
                              center : new SFVec3f([0,1.0449999570846558,-0.0949999988079071]),
                              skinCoordIndex : new MFInt32([28,76]),
                              skinCoordWeight : new MFFloat([1,1]),
                              ulimit : new MFFloat([0,0,0]),
                              llimit : new MFFloat([0,0,0]),
                              children : new MFNode([
                                new Transform({
                                  translation : new SFVec3f([0,1.0449999570846558,-0.0949999988079071]),
                                  children : new MFNode([
                                    new Shape({
                                      USE : new SFString("jointbox")})])}),

                                new HAnimSegment({
                                  name : new SFString("toPelvis"),
                                  DEF : new SFString("Joe_toPelvisMarker"),
                                  children : new MFNode([
                                    new Shape({
                                      geometry : new SFNode(
                                        new IndexedLineSet({
                                          coordIndex : new MFInt32([0,1,-1]),
                                          coord : new SFNode(
                                            new Coordinate({
                                              point : new MFVec3f([0,1.0449999570846558,-0.0949999988079071,0,0.914900004863739,0.0015999999595806003])}))})),
                                      appearance : new SFNode(
                                        new Appearance({
                                          USE : new SFString("SegmentLine")}))})])}),

                                new HAnimSegment({
                                  name : new SFString("l5"),
                                  DEF : new SFString("Joe_l5"),
                                  children : new MFNode([
                                    new Shape({
                                      geometry : new SFNode(
                                        new IndexedLineSet({
                                          coordIndex : new MFInt32([0,1,-1]),
                                          coord : new SFNode(
                                            new Coordinate({
                                              point : new MFVec3f([0,1.0449999570846558,-0.0949999988079071,0,1.0679999589920044,-0.08500000089406967])}))})),
                                      appearance : new SFNode(
                                        new Appearance({
                                          USE : new SFString("SegmentLine")}))}),

                                    new HAnimSite({
                                      name : new SFString("waist_preferred_post"),
                                      DEF : new SFString("Joe_waist_preferred_post"),
                                      translation : new SFVec3f([0,1.0915000438690186,-0.10909999907016754]),
                                      children : new MFNode([
                                        new Shape({
                                          USE : new SFString("sitebox")})])}),

                                    new HAnimSite({
                                      name : new SFString("navel"),
                                      DEF : new SFString("Joe_navel"),
                                      translation : new SFVec3f([0,1.0722500085830688,0.09000000357627869]),
                                      children : new MFNode([
                                        new Shape({
                                          USE : new SFString("sitebox")})])})])}),

                                new HAnimJoint({
                                  name : new SFString("vl4"),
                                  DEF : new SFString("Joe_vl4"),
                                  center : new SFVec3f([0,1.0679999589920044,-0.08500000089406967]),
                                  ulimit : new MFFloat([0,0,0]),
                                  llimit : new MFFloat([0,0,0]),
                                  children : new MFNode([
                                    new Transform({
                                      translation : new SFVec3f([0,1.0679999589920044,-0.08500000089406967]),
                                      children : new MFNode([
                                        new Shape({
                                          USE : new SFString("jointbox")})])}),

                                    new HAnimSegment({
                                      name : new SFString("l4"),
                                      DEF : new SFString("Joe_l4"),
                                      children : new MFNode([
                                        new Shape({
                                          geometry : new SFNode(
                                            new IndexedLineSet({
                                              coordIndex : new MFInt32([0,1,-1]),
                                              coord : new SFNode(
                                                new Coordinate({
                                                  point : new MFVec3f([0,1.0679999589920044,-0.08500000089406967,0,1.0920000076293945,-0.07249999791383743])}))})),
                                          appearance : new SFNode(
                                            new Appearance({
                                              USE : new SFString("SegmentLine")}))})])}),

                                    new HAnimJoint({
                                      name : new SFString("vl3"),
                                      DEF : new SFString("Joe_vl3"),
                                      center : new SFVec3f([0,1.0920000076293945,-0.07249999791383743]),
                                      ulimit : new MFFloat([0,0,0]),
                                      llimit : new MFFloat([0,0,0]),
                                      children : new MFNode([
                                        new Transform({
                                          translation : new SFVec3f([0,1.0920000076293945,-0.07249999791383743]),
                                          children : new MFNode([
                                            new Shape({
                                              USE : new SFString("jointbox")})])}),

                                        new HAnimSegment({
                                          name : new SFString("l3"),
                                          DEF : new SFString("Joe_l3"),
                                          children : new MFNode([
                                            new Shape({
                                              geometry : new SFNode(
                                                new IndexedLineSet({
                                                  coordIndex : new MFInt32([0,1,-1]),
                                                  coord : new SFNode(
                                                    new Coordinate({
                                                      point : new MFVec3f([0,1.0920000076293945,-0.07249999791383743,0,1.1200000047683716,-0.06499999761581421])}))})),
                                              appearance : new SFNode(
                                                new Appearance({
                                                  USE : new SFString("SegmentLine")}))})])}),

                                        new HAnimJoint({
                                          name : new SFString("vl2"),
                                          DEF : new SFString("Joe_vl2"),
                                          center : new SFVec3f([0,1.1200000047683716,-0.06499999761581421]),
                                          skinCoordIndex : new MFInt32([16,18,25,83,84,85,86,87,88]),
                                          skinCoordWeight : new MFFloat([1,1,1,1,1,1,0.699999988079071,1,0.800000011920929]),
                                          ulimit : new MFFloat([0,0,0]),
                                          llimit : new MFFloat([0,0,0]),
                                          children : new MFNode([
                                            new Transform({
                                              translation : new SFVec3f([0,1.1200000047683716,-0.06499999761581421]),
                                              children : new MFNode([
                                                new Shape({
                                                  USE : new SFString("jointbox")})])}),

                                            new HAnimSegment({
                                              name : new SFString("l2"),
                                              DEF : new SFString("Joe_l2"),
                                              children : new MFNode([
                                                new Shape({
                                                  geometry : new SFNode(
                                                    new IndexedLineSet({
                                                      coordIndex : new MFInt32([0,1,-1]),
                                                      coord : new SFNode(
                                                        new Coordinate({
                                                          point : new MFVec3f([0,1.1200000047683716,-0.06499999761581421,0,1.145900011062622,-0.0625])}))})),
                                                  appearance : new SFNode(
                                                    new Appearance({
                                                      USE : new SFString("SegmentLine")}))}),

                                                new HAnimSite({
                                                  name : new SFString("r_rib10"),
                                                  DEF : new SFString("Joe_r_rib10"),
                                                  translation : new SFVec3f([-0.08699999749660492,1.190000057220459,0.09000000357627869]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("sitebox")})])}),

                                                new HAnimSite({
                                                  name : new SFString("l_rib10"),
                                                  DEF : new SFString("Joe_l_rib10"),
                                                  translation : new SFVec3f([0.08699999749660492,1.190000057220459,0.09000000357627869]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("sitebox")})])}),

                                                new HAnimSite({
                                                  name : new SFString("rib10_midspine"),
                                                  DEF : new SFString("Joe_rib10_midspine"),
                                                  translation : new SFVec3f([0,1.1907999515533447,-0.11129999905824661]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("sitebox")})])}),

                                                new Transform({
                                                  translation : new SFVec3f([-0.08699999749660492,1.190000057220459,-0.09000000357627869]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("skinsphere")})])}),

                                                new Transform({
                                                  translation : new SFVec3f([0.08699999749660492,1.190000057220459,-0.09000000357627869]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("skinsphere")})])}),

                                                new Transform({
                                                  translation : new SFVec3f([0.1720000058412552,1.3200000524520874,-0.029999999329447746]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("skinsphere")})])}),

                                                new Transform({
                                                  translation : new SFVec3f([-0.1720000058412552,1.3200000524520874,-0.029999999329447746]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("skinsphere")})])}),

                                                new Transform({
                                                  translation : new SFVec3f([0.15000000596046448,1.2300000190734863,-0.014999999664723873]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("skinsphere")})])}),

                                                new Transform({
                                                  translation : new SFVec3f([-0.15000000596046448,1.2300000190734863,-0.014999999664723873]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("skinsphere")})])})])}),

                                            new HAnimJoint({
                                              name : new SFString("vl1"),
                                              DEF : new SFString("Joe_vl1"),
                                              center : new SFVec3f([0,1.145900011062622,-0.0625]),
                                              ulimit : new MFFloat([0,0,0]),
                                              llimit : new MFFloat([0,0,0]),
                                              children : new MFNode([
                                                new Transform({
                                                  translation : new SFVec3f([0,1.145900011062622,-0.0625]),
                                                  children : new MFNode([
                                                    new Shape({
                                                      USE : new SFString("jointbox")})])}),

                                                new HAnimSegment({
                                                  name : new SFString("l1"),
                                                  DEF : new SFString("Joe_l1"),
                                                  children : new MFNode([
                                                    new Shape({
                                                      geometry : new SFNode(
                                                        new IndexedLineSet({
                                                          coordIndex : new MFInt32([0,1,-1]),
                                                          coord : new SFNode(
                                                            new Coordinate({
                                                              point : new MFVec3f([0,1.145900011062622,-0.0625,0,1.1790000200271606,-0.06800000369548798])}))})),
                                                      appearance : new SFNode(
                                                        new Appearance({
                                                          USE : new SFString("SegmentLine")}))})])}),

                                                new HAnimJoint({
                                                  name : new SFString("vt12"),
                                                  DEF : new SFString("Joe_vt12"),
                                                  center : new SFVec3f([0,1.1790000200271606,-0.06800000369548798]),
                                                  ulimit : new MFFloat([0,0,0]),
                                                  llimit : new MFFloat([0,0,0]),
                                                  children : new MFNode([
                                                    new Transform({
                                                      translation : new SFVec3f([0,1.1790000200271606,-0.06800000369548798]),
                                                      children : new MFNode([
                                                        new Shape({
                                                          USE : new SFString("jointbox")})])}),

                                                    new HAnimSegment({
                                                      name : new SFString("t12"),
                                                      DEF : new SFString("Joe_t12"),
                                                      children : new MFNode([
                                                        new Shape({
                                                          geometry : new SFNode(
                                                            new IndexedLineSet({
                                                              coordIndex : new MFInt32([0,1,-1]),
                                                              coord : new SFNode(
                                                                new Coordinate({
                                                                  point : new MFVec3f([0,1.1790000200271606,-0.06800000369548798,0,1.2419999837875366,-0.09000000357627869])}))})),
                                                          appearance : new SFNode(
                                                            new Appearance({
                                                              USE : new SFString("SegmentLine")}))})])}),

                                                    new HAnimJoint({
                                                      name : new SFString("vt11"),
                                                      DEF : new SFString("Joe_vt11"),
                                                      center : new SFVec3f([0,1.267899990081787,-0.08100000023841858]),
                                                      ulimit : new MFFloat([0,0,0]),
                                                      llimit : new MFFloat([0,0,0]),
                                                      children : new MFNode([
                                                        new Transform({
                                                          translation : new SFVec3f([0,1.2144999504089355,-0.0754999965429306]),
                                                          children : new MFNode([
                                                            new Shape({
                                                              USE : new SFString("jointbox")})])}),

                                                        new HAnimSegment({
                                                          name : new SFString("t11"),
                                                          DEF : new SFString("Joe_t11"),
                                                          children : new MFNode([
                                                            new Shape({
                                                              geometry : new SFNode(
                                                                new IndexedLineSet({
                                                                  coordIndex : new MFInt32([0,1,-1]),
                                                                  coord : new SFNode(
                                                                    new Coordinate({
                                                                      point : new MFVec3f([0,1.2144999504089355,-0.0754999965429306,0,1.2419999837875366,-0.09000000357627869])}))})),
                                                              appearance : new SFNode(
                                                                new Appearance({
                                                                  USE : new SFString("SegmentLine")}))})])}),

                                                        new HAnimJoint({
                                                          name : new SFString("vt10"),
                                                          DEF : new SFString("Joe_vt10"),
                                                          center : new SFVec3f([0,1.2419999837875366,-0.09000000357627869]),
                                                          skinCoordIndex : new MFInt32([15]),
                                                          skinCoordWeight : new MFFloat([1]),
                                                          ulimit : new MFFloat([0,0,0]),
                                                          llimit : new MFFloat([0,0,0]),
                                                          children : new MFNode([
                                                            new Transform({
                                                              translation : new SFVec3f([0,1.2419999837875366,-0.09000000357627869]),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  USE : new SFString("jointbox")})])}),

                                                            new HAnimSegment({
                                                              name : new SFString("t10"),
                                                              DEF : new SFString("Joe_t10"),
                                                              children : new MFNode([
                                                                new Shape({
                                                                  geometry : new SFNode(
                                                                    new IndexedLineSet({
                                                                      coordIndex : new MFInt32([0,1,-1]),
                                                                      coord : new SFNode(
                                                                        new Coordinate({
                                                                          point : new MFVec3f([0,1.2419999837875366,-0.09000000357627869,0,1.2680000066757202,-0.10000000149011612])}))})),
                                                                  appearance : new SFNode(
                                                                    new Appearance({
                                                                      USE : new SFString("SegmentLine")}))}),

                                                                new HAnimSite({
                                                                  name : new SFString("substernale"),
                                                                  DEF : new SFString("Joe_substernale"),
                                                                  translation : new SFVec3f([0,1.25,0.11299999803304672]),
                                                                  children : new MFNode([
                                                                    new Shape({
                                                                      USE : new SFString("sitebox")})])})])}),

                                                            new HAnimJoint({
                                                              name : new SFString("vt9"),
                                                              DEF : new SFString("Joe_vt9"),
                                                              center : new SFVec3f([0,1.2680000066757202,-0.10000000149011612]),
                                                              skinCoordIndex : new MFInt32([13,14]),
                                                              skinCoordWeight : new MFFloat([1,1]),
                                                              ulimit : new MFFloat([0,0,0]),
                                                              llimit : new MFFloat([0,0,0]),
                                                              children : new MFNode([
                                                                new Transform({
                                                                  translation : new SFVec3f([0,1.2680000066757202,-0.10000000149011612]),
                                                                  children : new MFNode([
                                                                    new Shape({
                                                                      USE : new SFString("jointbox")})])}),

                                                                new HAnimSegment({
                                                                  name : new SFString("t9"),
                                                                  DEF : new SFString("Joe_t9"),
                                                                  children : new MFNode([
                                                                    new Shape({
                                                                      geometry : new SFNode(
                                                                        new IndexedLineSet({
                                                                          coordIndex : new MFInt32([0,1,-1]),
                                                                          coord : new SFNode(
                                                                            new Coordinate({
                                                                              point : new MFVec3f([0,1.2680000066757202,-0.10000000149011612,0,1.2940000295639038,-0.10999999940395355])}))})),
                                                                      appearance : new SFNode(
                                                                        new Appearance({
                                                                          USE : new SFString("SegmentLine")}))}),

                                                                    new HAnimSite({
                                                                      name : new SFString("r_thelion"),
                                                                      DEF : new SFString("Joe_r_thelion"),
                                                                      translation : new SFVec3f([-0.11349999904632568,1.3179999589920044,0.0949999988079071]),
                                                                      children : new MFNode([
                                                                        new Shape({
                                                                          USE : new SFString("sitebox")})])}),

                                                                    new HAnimSite({
                                                                      name : new SFString("l_thelion"),
                                                                      DEF : new SFString("Joe_l_thelion"),
                                                                      translation : new SFVec3f([0.11349999904632568,1.3179999589920044,0.0949999988079071]),
                                                                      children : new MFNode([
                                                                        new Shape({
                                                                          USE : new SFString("sitebox")})])})])}),

                                                                new HAnimJoint({
                                                                  name : new SFString("vt8"),
                                                                  DEF : new SFString("Joe_vt8"),
                                                                  center : new SFVec3f([0,1.2940000295639038,-0.10999999940395355]),
                                                                  ulimit : new MFFloat([0,0,0]),
                                                                  llimit : new MFFloat([0,0,0]),
                                                                  children : new MFNode([
                                                                    new Transform({
                                                                      translation : new SFVec3f([0,1.2940000295639038,-0.10999999940395355]),
                                                                      children : new MFNode([
                                                                        new Shape({
                                                                          USE : new SFString("jointbox")})])}),

                                                                    new HAnimSegment({
                                                                      name : new SFString("t8"),
                                                                      DEF : new SFString("Joe_t8"),
                                                                      children : new MFNode([
                                                                        new Shape({
                                                                          geometry : new SFNode(
                                                                            new IndexedLineSet({
                                                                              coordIndex : new MFInt32([0,1,-1]),
                                                                              coord : new SFNode(
                                                                                new Coordinate({
                                                                                  point : new MFVec3f([0,1.2940000295639038,-0.10999999940395355,0,1.3519999980926514,-0.11999999731779099])}))})),
                                                                          appearance : new SFNode(
                                                                            new Appearance({
                                                                              USE : new SFString("SegmentLine")}))})])}),

                                                                    new HAnimJoint({
                                                                      name : new SFString("vt7"),
                                                                      DEF : new SFString("Joe_vt7"),
                                                                      center : new SFVec3f([0,1.3229999542236328,-0.11550000309944153]),
                                                                      ulimit : new MFFloat([0,0,0]),
                                                                      llimit : new MFFloat([0,0,0]),
                                                                      children : new MFNode([
                                                                        new Transform({
                                                                          translation : new SFVec3f([0,1.3229999542236328,-0.11550000309944153]),
                                                                          children : new MFNode([
                                                                            new Shape({
                                                                              USE : new SFString("jointbox")})])}),

                                                                        new HAnimSegment({
                                                                          name : new SFString("t7"),
                                                                          DEF : new SFString("Joe_t7"),
                                                                          children : new MFNode([
                                                                            new Shape({
                                                                              geometry : new SFNode(
                                                                                new IndexedLineSet({
                                                                                  coordIndex : new MFInt32([0,1,-1]),
                                                                                  coord : new SFNode(
                                                                                    new Coordinate({
                                                                                      point : new MFVec3f([0,1.3519999980926514,-0.11999999731779099,0,1.38100004196167,-0.12349999696016312])}))})),
                                                                              appearance : new SFNode(
                                                                                new Appearance({
                                                                                  USE : new SFString("SegmentLine")}))})])}),

                                                                        new HAnimJoint({
                                                                          name : new SFString("vt6"),
                                                                          DEF : new SFString("Joe_vt6"),
                                                                          center : new SFVec3f([0,1.3519999980926514,-0.11999999731779099]),
                                                                          ulimit : new MFFloat([0,0,0]),
                                                                          llimit : new MFFloat([0,0,0]),
                                                                          children : new MFNode([
                                                                            new Transform({
                                                                              translation : new SFVec3f([0,1.3519999980926514,-0.11999999731779099]),
                                                                              children : new MFNode([
                                                                                new Shape({
                                                                                  USE : new SFString("jointbox")})])}),

                                                                            new HAnimSegment({
                                                                              name : new SFString("t6"),
                                                                              DEF : new SFString("Joe_t6"),
                                                                              children : new MFNode([
                                                                                new Shape({
                                                                                  geometry : new SFNode(
                                                                                    new IndexedLineSet({
                                                                                      coordIndex : new MFInt32([0,1,-1]),
                                                                                      coord : new SFNode(
                                                                                        new Coordinate({
                                                                                          point : new MFVec3f([0,1.38100004196167,-0.12349999696016312,0,1.409999966621399,-0.12349999696016312])}))})),
                                                                                  appearance : new SFNode(
                                                                                    new Appearance({
                                                                                      USE : new SFString("SegmentLine")}))})])}),

                                                                            new HAnimJoint({
                                                                              name : new SFString("vt5"),
                                                                              DEF : new SFString("Joe_vt5"),
                                                                              center : new SFVec3f([0,1.38100004196167,-0.12349999696016312]),
                                                                              ulimit : new MFFloat([0,0,0]),
                                                                              llimit : new MFFloat([0,0,0]),
                                                                              children : new MFNode([
                                                                                new Transform({
                                                                                  translation : new SFVec3f([0,1.38100004196167,-0.12349999696016312]),
                                                                                  children : new MFNode([
                                                                                    new Shape({
                                                                                      USE : new SFString("jointbox")})])}),

                                                                                new HAnimSegment({
                                                                                  name : new SFString("t5"),
                                                                                  DEF : new SFString("Joe_t5"),
                                                                                  children : new MFNode([
                                                                                    new Shape({
                                                                                      geometry : new SFNode(
                                                                                        new IndexedLineSet({
                                                                                          coordIndex : new MFInt32([0,1,-1]),
                                                                                          coord : new SFNode(
                                                                                            new Coordinate({
                                                                                              point : new MFVec3f([0,1.409999966621399,-0.12349999696016312,0,1.437999963760376,-0.11999999731779099])}))})),
                                                                                      appearance : new SFNode(
                                                                                        new Appearance({
                                                                                          USE : new SFString("SegmentLine")}))})])}),

                                                                                new HAnimJoint({
                                                                                  name : new SFString("vt4"),
                                                                                  DEF : new SFString("Joe_vt4"),
                                                                                  center : new SFVec3f([0,1.409999966621399,-0.12349999696016312]),
                                                                                  skinCoordIndex : new MFInt32([81]),
                                                                                  skinCoordWeight : new MFFloat([1]),
                                                                                  ulimit : new MFFloat([0,0,0]),
                                                                                  llimit : new MFFloat([0,0,0]),
                                                                                  children : new MFNode([
                                                                                    new Transform({
                                                                                      translation : new SFVec3f([0,1.409999966621399,-0.12349999696016312]),
                                                                                      children : new MFNode([
                                                                                        new Shape({
                                                                                          USE : new SFString("jointbox")})])}),

                                                                                    new Transform({
                                                                                      translation : new SFVec3f([0,1.409999966621399,-0.14499999582767487]),
                                                                                      children : new MFNode([
                                                                                        new Shape({
                                                                                          USE : new SFString("skinsphere")})])}),

                                                                                    new HAnimSegment({
                                                                                      name : new SFString("t4"),
                                                                                      DEF : new SFString("Joe_t4"),
                                                                                      children : new MFNode([
                                                                                        new Shape({
                                                                                          geometry : new SFNode(
                                                                                            new IndexedLineSet({
                                                                                              coordIndex : new MFInt32([0,1,-1]),
                                                                                              coord : new SFNode(
                                                                                                new Coordinate({
                                                                                                  point : new MFVec3f([0,1.409999966621399,-0.12349999696016312,0,1.437999963760376,-0.11999999731779099])}))})),
                                                                                          appearance : new SFNode(
                                                                                            new Appearance({
                                                                                              USE : new SFString("SegmentLine")}))})])}),

                                                                                    new HAnimJoint({
                                                                                      name : new SFString("vt3"),
                                                                                      DEF : new SFString("Joe_vt3"),
                                                                                      center : new SFVec3f([0,1.437999963760376,-0.11999999731779099]),
                                                                                      ulimit : new MFFloat([0,0,0]),
                                                                                      llimit : new MFFloat([0,0,0]),
                                                                                      children : new MFNode([
                                                                                        new Transform({
                                                                                          translation : new SFVec3f([0,1.437999963760376,-0.11999999731779099]),
                                                                                          children : new MFNode([
                                                                                            new Shape({
                                                                                              USE : new SFString("jointbox")})])}),

                                                                                        new HAnimSegment({
                                                                                          name : new SFString("t3"),
                                                                                          DEF : new SFString("Joe_t3"),
                                                                                          children : new MFNode([
                                                                                            new Shape({
                                                                                              geometry : new SFNode(
                                                                                                new IndexedLineSet({
                                                                                                  coordIndex : new MFInt32([0,1,-1]),
                                                                                                  coord : new SFNode(
                                                                                                    new Coordinate({
                                                                                                      point : new MFVec3f([0,1.437999963760376,-0.11999999731779099,0,1.468000054359436,-0.10499999672174454])}))})),
                                                                                              appearance : new SFNode(
                                                                                                new Appearance({
                                                                                                  USE : new SFString("SegmentLine")}))})])}),

                                                                                        new HAnimJoint({
                                                                                          name : new SFString("vt2"),
                                                                                          DEF : new SFString("Joe_vt2"),
                                                                                          center : new SFVec3f([0,1.468000054359436,-0.10499999672174454]),
                                                                                          ulimit : new MFFloat([0,0,0]),
                                                                                          llimit : new MFFloat([0,0,0]),
                                                                                          children : new MFNode([
                                                                                            new Transform({
                                                                                              translation : new SFVec3f([0,1.468000054359436,-0.10499999672174454]),
                                                                                              children : new MFNode([
                                                                                                new Shape({
                                                                                                  USE : new SFString("jointbox")})])}),

                                                                                            new HAnimSegment({
                                                                                              name : new SFString("t2"),
                                                                                              DEF : new SFString("Joe_t2"),
                                                                                              children : new MFNode([
                                                                                                new Shape({
                                                                                                  geometry : new SFNode(
                                                                                                    new IndexedLineSet({
                                                                                                      coordIndex : new MFInt32([0,1,-1]),
                                                                                                      coord : new SFNode(
                                                                                                        new Coordinate({
                                                                                                          point : new MFVec3f([0,1.468000054359436,-0.10499999672174454,0,1.496999979019165,-0.09000000357627869])}))})),
                                                                                                  appearance : new SFNode(
                                                                                                    new Appearance({
                                                                                                      USE : new SFString("SegmentLine")}))})])}),

                                                                                            new HAnimJoint({
                                                                                              name : new SFString("vt1"),
                                                                                              DEF : new SFString("Joe_vt1"),
                                                                                              center : new SFVec3f([0,1.496999979019165,-0.09000000357627869]),
                                                                                              skinCoordIndex : new MFInt32([11,24]),
                                                                                              skinCoordWeight : new MFFloat([1,1]),
                                                                                              ulimit : new MFFloat([0,0,0]),
                                                                                              llimit : new MFFloat([0,0,0]),
                                                                                              children : new MFNode([
                                                                                                new Transform({
                                                                                                  translation : new SFVec3f([0,1.496999979019165,-0.09000000357627869]),
                                                                                                  children : new MFNode([
                                                                                                    new Shape({
                                                                                                      USE : new SFString("jointbox")})])}),

                                                                                                new HAnimSegment({
                                                                                                  name : new SFString("t1"),
                                                                                                  DEF : new SFString("Joe_t1"),
                                                                                                  children : new MFNode([
                                                                                                    new Shape({
                                                                                                      geometry : new SFNode(
                                                                                                        new IndexedLineSet({
                                                                                                          coordIndex : new MFInt32([0,1,-1]),
                                                                                                          coord : new SFNode(
                                                                                                            new Coordinate({
                                                                                                              point : new MFVec3f([0,1.496999979019165,-0.09000000357627869,0,1.524999976158142,-0.07199999690055847])}))})),
                                                                                                      appearance : new SFNode(
                                                                                                        new Appearance({
                                                                                                          USE : new SFString("SegmentLine")}))}),

                                                                                                    new HAnimSite({
                                                                                                      name : new SFString("suprasternale"),
                                                                                                      DEF : new SFString("Joe_suprasternale"),
                                                                                                      translation : new SFVec3f([0,1.440000057220459,0.029999999329447746]),
                                                                                                      children : new MFNode([
                                                                                                        new Shape({
                                                                                                          USE : new SFString("sitebox")})])}),

                                                                                                    new HAnimSite({
                                                                                                      name : new SFString("cervicale"),
                                                                                                      DEF : new SFString("Joe_cervicale"),
                                                                                                      translation : new SFVec3f([0,1.5299999713897705,-0.08399999886751175]),
                                                                                                      children : new MFNode([
                                                                                                        new Shape({
                                                                                                          USE : new SFString("sitebox")})])})])}),

                                                                                                new HAnimJoint({
                                                                                                  name : new SFString("vc7"),
                                                                                                  DEF : new SFString("Joe_vc7"),
                                                                                                  center : new SFVec3f([0,1.524999976158142,-0.07199999690055847]),
                                                                                                  skinCoordIndex : new MFInt32([74,75]),
                                                                                                  skinCoordWeight : new MFFloat([1,1]),
                                                                                                  ulimit : new MFFloat([0,0,0]),
                                                                                                  llimit : new MFFloat([0,0,0]),
                                                                                                  children : new MFNode([
                                                                                                    new Transform({
                                                                                                      translation : new SFVec3f([0,1.524999976158142,-0.07199999690055847]),
                                                                                                      children : new MFNode([
                                                                                                        new Shape({
                                                                                                          USE : new SFString("jointbox")})])}),

                                                                                                    new HAnimSegment({
                                                                                                      name : new SFString("c7"),
                                                                                                      DEF : new SFString("Joe_c7"),
                                                                                                      children : new MFNode([
                                                                                                        new Shape({
                                                                                                          geometry : new SFNode(
                                                                                                            new IndexedLineSet({
                                                                                                              coordIndex : new MFInt32([0,1,-1,0,2,-1,0,3,-1]),
                                                                                                              coord : new SFNode(
                                                                                                                new Coordinate({
                                                                                                                  point : new MFVec3f([0,1.524999976158142,-0.07199999690055847,0.0820000022649765,1.448799967765808,-0.03530000150203705,-0.029999999329447746,1.4600000381469727,0.019999999552965164,0,1.5399999618530273,-0.05000000074505806])}))})),
                                                                                                          appearance : new SFNode(
                                                                                                            new Appearance({
                                                                                                              USE : new SFString("SegmentLine")}))}),

                                                                                                        new HAnimSite({
                                                                                                          name : new SFString("r_neck_base"),
                                                                                                          DEF : new SFString("Joe_r_neck_base"),
                                                                                                          translation : new SFVec3f([-0.06459999829530716,1.5148999691009521,-0.03849999979138374]),
                                                                                                          children : new MFNode([
                                                                                                            new Shape({
                                                                                                              USE : new SFString("sitebox")})])}),

                                                                                                        new HAnimSite({
                                                                                                          name : new SFString("l_neck_base"),
                                                                                                          DEF : new SFString("Joe_l_neck_base"),
                                                                                                          translation : new SFVec3f([0.06459999829530716,1.5148999691009521,-0.03849999979138374]),
                                                                                                          children : new MFNode([
                                                                                                            new Shape({
                                                                                                              USE : new SFString("sitebox")})])})])}),

                                                                                                    new HAnimJoint({
                                                                                                      name : new SFString("vc6"),
                                                                                                      DEF : new SFString("Joe_vc6"),
                                                                                                      center : new SFVec3f([0,1.5399999618530273,-0.05000000074505806]),
                                                                                                      ulimit : new MFFloat([0,0,0]),
                                                                                                      llimit : new MFFloat([0,0,0]),
                                                                                                      children : new MFNode([
                                                                                                        new Transform({
                                                                                                          translation : new SFVec3f([0,1.5399999618530273,-0.05000000074505806]),
                                                                                                          children : new MFNode([
                                                                                                            new Shape({
                                                                                                              USE : new SFString("jointbox")})])}),

                                                                                                        new HAnimSegment({
                                                                                                          name : new SFString("c6"),
                                                                                                          DEF : new SFString("Joe_c6"),
                                                                                                          children : new MFNode([
                                                                                                            new Shape({
                                                                                                              geometry : new SFNode(
                                                                                                                new IndexedLineSet({
                                                                                                                  coordIndex : new MFInt32([0,1,-1]),
                                                                                                                  coord : new SFNode(
                                                                                                                    new Coordinate({
                                                                                                                      point : new MFVec3f([0,1.5399999618530273,-0.05000000074505806,0,1.5674999952316284,-0.025599999353289604])}))})),
                                                                                                              appearance : new SFNode(
                                                                                                                new Appearance({
                                                                                                                  USE : new SFString("SegmentLine")}))})])}),

                                                                                                        new HAnimJoint({
                                                                                                          name : new SFString("vc5"),
                                                                                                          DEF : new SFString("Joe_vc5"),
                                                                                                          center : new SFVec3f([0,1.5520000457763672,-0.03500000014901161]),
                                                                                                          ulimit : new MFFloat([0,0,0]),
                                                                                                          llimit : new MFFloat([0,0,0]),
                                                                                                          children : new MFNode([
                                                                                                            new Transform({
                                                                                                              translation : new SFVec3f([0,1.5520000457763672,-0.03500000014901161]),
                                                                                                              children : new MFNode([
                                                                                                                new Shape({
                                                                                                                  USE : new SFString("jointbox")})])}),

                                                                                                            new HAnimSegment({
                                                                                                              name : new SFString("c5"),
                                                                                                              DEF : new SFString("Joe_c5"),
                                                                                                              children : new MFNode([
                                                                                                                new Shape({
                                                                                                                  geometry : new SFNode(
                                                                                                                    new IndexedLineSet({
                                                                                                                      coordIndex : new MFInt32([0,1,-1]),
                                                                                                                      coord : new SFNode(
                                                                                                                        new Coordinate({
                                                                                                                          point : new MFVec3f([0,1.5674999952316284,-0.025599999353289604,0,1.5822499990463257,-0.01850000023841858])}))})),
                                                                                                                  appearance : new SFNode(
                                                                                                                    new Appearance({
                                                                                                                      USE : new SFString("SegmentLine")}))})])}),

                                                                                                            new HAnimJoint({
                                                                                                              name : new SFString("vc4"),
                                                                                                              DEF : new SFString("Joe_vc4"),
                                                                                                              center : new SFVec3f([0,1.5674999952316284,-0.025599999353289604]),
                                                                                                              ulimit : new MFFloat([0,0,0]),
                                                                                                              llimit : new MFFloat([0,0,0]),
                                                                                                              children : new MFNode([
                                                                                                                new Transform({
                                                                                                                  translation : new SFVec3f([0,1.5674999952316284,-0.025599999353289604]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Shape({
                                                                                                                      USE : new SFString("jointbox")})])}),

                                                                                                                new HAnimSegment({
                                                                                                                  name : new SFString("c4"),
                                                                                                                  DEF : new SFString("Joe_c4"),
                                                                                                                  children : new MFNode([
                                                                                                                    new Shape({
                                                                                                                      geometry : new SFNode(
                                                                                                                        new IndexedLineSet({
                                                                                                                          coordIndex : new MFInt32([0,1,-1]),
                                                                                                                          coord : new SFNode(
                                                                                                                            new Coordinate({
                                                                                                                              point : new MFVec3f([0,1.5822499990463257,-0.01850000023841858,0,1.5950000286102295,-0.017500000074505806])}))})),
                                                                                                                      appearance : new SFNode(
                                                                                                                        new Appearance({
                                                                                                                          USE : new SFString("SegmentLine")}))})])}),

                                                                                                                new HAnimJoint({
                                                                                                                  name : new SFString("vc3"),
                                                                                                                  DEF : new SFString("Joe_vc3"),
                                                                                                                  center : new SFVec3f([0,1.5822499990463257,-0.01850000023841858]),
                                                                                                                  ulimit : new MFFloat([0,0,0]),
                                                                                                                  llimit : new MFFloat([0,0,0]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Transform({
                                                                                                                      translation : new SFVec3f([0,1.5822499990463257,-0.01850000023841858]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          USE : new SFString("jointbox")})])}),

                                                                                                                    new HAnimSegment({
                                                                                                                      name : new SFString("c3"),
                                                                                                                      DEF : new SFString("Joe_c3"),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          geometry : new SFNode(
                                                                                                                            new IndexedLineSet({
                                                                                                                              coordIndex : new MFInt32([0,1,-1]),
                                                                                                                              coord : new SFNode(
                                                                                                                                new Coordinate({
                                                                                                                                  point : new MFVec3f([0,1.5950000286102295,-0.017500000074505806,0,1.6100000143051147,-0.014999999664723873])}))})),
                                                                                                                          appearance : new SFNode(
                                                                                                                            new Appearance({
                                                                                                                              USE : new SFString("SegmentLine")}))})])}),

                                                                                                                    new HAnimJoint({
                                                                                                                      name : new SFString("vc2"),
                                                                                                                      DEF : new SFString("Joe_vc2"),
                                                                                                                      center : new SFVec3f([0,1.5950000286102295,-0.017500000074505806]),
                                                                                                                      ulimit : new MFFloat([0,0,0]),
                                                                                                                      llimit : new MFFloat([0,0,0]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Transform({
                                                                                                                          translation : new SFVec3f([0,1.5950000286102295,-0.017500000074505806]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              USE : new SFString("jointbox")})])}),

                                                                                                                        new HAnimSegment({
                                                                                                                          name : new SFString("c2"),
                                                                                                                          DEF : new SFString("Joe_c2"),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              geometry : new SFNode(
                                                                                                                                new IndexedLineSet({
                                                                                                                                  coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                  coord : new SFNode(
                                                                                                                                    new Coordinate({
                                                                                                                                      point : new MFVec3f([0,1.6100000143051147,-0.014999999664723873,0,1.614400029182434,-0.0034000000450760126])}))})),
                                                                                                                              appearance : new SFNode(
                                                                                                                                new Appearance({
                                                                                                                                  USE : new SFString("SegmentLine")}))})])}),

                                                                                                                        new HAnimJoint({
                                                                                                                          name : new SFString("vc1"),
                                                                                                                          DEF : new SFString("Joe_vc1"),
                                                                                                                          center : new SFVec3f([0,1.6100000143051147,-0.014999999664723873]),
                                                                                                                          ulimit : new MFFloat([0,0,0]),
                                                                                                                          llimit : new MFFloat([0,0,0]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Transform({
                                                                                                                              translation : new SFVec3f([0,1.6100000143051147,-0.014999999664723873]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  USE : new SFString("jointbox")})])}),

                                                                                                                            new HAnimSegment({
                                                                                                                              name : new SFString("c1"),
                                                                                                                              DEF : new SFString("Joe_c1"),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  geometry : new SFNode(
                                                                                                                                    new IndexedLineSet({
                                                                                                                                      coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                      coord : new SFNode(
                                                                                                                                        new Coordinate({
                                                                                                                                          point : new MFVec3f([0,1.614400029182434,-0.0034000000450760126,0,1.6299999952316284,-0.009999999776482582])}))})),
                                                                                                                                  appearance : new SFNode(
                                                                                                                                    new Appearance({
                                                                                                                                      USE : new SFString("SegmentLine")}))})])}),

                                                                                                                            new HAnimJoint({
                                                                                                                              name : new SFString("skullbase"),
                                                                                                                              DEF : new SFString("Joe_skullbase"),
                                                                                                                              center : new SFVec3f([0,1.6299999952316284,-0.009999999776482582]),
                                                                                                                              skinCoordIndex : new MFInt32([0,1,2,3,4,5,6,7,8,9]),
                                                                                                                              skinCoordWeight : new MFFloat([1,1,1,1,1,1,1,1,1,1]),
                                                                                                                              ulimit : new MFFloat([0,0,0]),
                                                                                                                              llimit : new MFFloat([0,0,0]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Transform({
                                                                                                                                  translation : new SFVec3f([0,1.6299999952316284,-0.009999999776482582]),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Transform({
                                                                                                                                      scale : new SFVec3f([2,2,2]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("jointbox")})])})])}),

                                                                                                                                new HAnimSegment({
                                                                                                                                  name : new SFString("skull"),
                                                                                                                                  DEF : new SFString("Joe_skull"),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Shape({
                                                                                                                                      geometry : new SFNode(
                                                                                                                                        new IndexedLineSet({
                                                                                                                                          coordIndex : new MFInt32([0,1,-1,0,2,-1]),
                                                                                                                                          coord : new SFNode(
                                                                                                                                            new Coordinate({
                                                                                                                                              point : new MFVec3f([0,1.6299999952316284,-0.009999999776482582,0.03400000184774399,1.659000039100647,0.05999999865889549,-0.03400000184774399,1.6549999713897705,0.06499999761581421])}))})),
                                                                                                                                      appearance : new SFNode(
                                                                                                                                        new Appearance({
                                                                                                                                          USE : new SFString("SegmentLine")}))}),

                                                                                                                                    new HAnimSite({
                                                                                                                                      name : new SFString("skull_tip"),
                                                                                                                                      DEF : new SFString("Joe_skull_tip"),
                                                                                                                                      translation : new SFVec3f([0,1.7699999809265137,0]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("sitebox")})])}),

                                                                                                                                    new HAnimSite({
                                                                                                                                      name : new SFString("sellion"),
                                                                                                                                      DEF : new SFString("Joe_sellion"),
                                                                                                                                      translation : new SFVec3f([0,1.6649999618530273,0.09000000357627869]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("sitebox")})])}),

                                                                                                                                    new HAnimSite({
                                                                                                                                      name : new SFString("r_infraorbitale"),
                                                                                                                                      DEF : new SFString("Joe_r_infraorbitale"),
                                                                                                                                      translation : new SFVec3f([-0.032999999821186066,1.6200000047683716,0.08699999749660492]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("sitebox")})])}),

                                                                                                                                    new HAnimSite({
                                                                                                                                      name : new SFString("l_infraorbitale"),
                                                                                                                                      DEF : new SFString("Joe_l_infraorbitale"),
                                                                                                                                      translation : new SFVec3f([0.032999999821186066,1.6200000047683716,0.08699999749660492]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("sitebox")})])}),

                                                                                                                                    new HAnimSite({
                                                                                                                                      name : new SFString("supramenton"),
                                                                                                                                      DEF : new SFString("Joe_supramenton"),
                                                                                                                                      translation : new SFVec3f([0,1.5499999523162842,0.09700000286102295]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("sitebox")})])}),

                                                                                                                                    new HAnimSite({
                                                                                                                                      name : new SFString("r_tragion"),
                                                                                                                                      DEF : new SFString("Joe_r_tragion"),
                                                                                                                                      translation : new SFVec3f([-0.07699999958276749,1.6399999856948853,-0.009999999776482582]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("sitebox")})])}),

                                                                                                                                    new HAnimSite({
                                                                                                                                      name : new SFString("r_gonion"),
                                                                                                                                      DEF : new SFString("Joe_r_gonion"),
                                                                                                                                      translation : new SFVec3f([-0.052000001072883606,1.5800000429153442,0.014999999664723873]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("sitebox")})])}),

                                                                                                                                    new HAnimSite({
                                                                                                                                      name : new SFString("l_tragion"),
                                                                                                                                      DEF : new SFString("Joe_l_tragion"),
                                                                                                                                      translation : new SFVec3f([0.07699999958276749,1.6399999856948853,-0.009999999776482582]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("sitebox")})])}),

                                                                                                                                    new HAnimSite({
                                                                                                                                      name : new SFString("l_gonion"),
                                                                                                                                      DEF : new SFString("Joe_l_gonion"),
                                                                                                                                      translation : new SFVec3f([0.06310000270605087,1.5800000429153442,0.014999999664723873]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("sitebox")})])}),

                                                                                                                                    new HAnimSite({
                                                                                                                                      name : new SFString("nuchale"),
                                                                                                                                      DEF : new SFString("Joe_nuchale"),
                                                                                                                                      translation : new SFVec3f([0,1.625,-0.0925000011920929]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("sitebox")})])})])}),

                                                                                                                                new HAnimJoint({
                                                                                                                                  name : new SFString("l_eyeball_joint"),
                                                                                                                                  DEF : new SFString("Joe_l_eyeball_joint"),
                                                                                                                                  center : new SFVec3f([0.03400000184774399,1.659000039100647,0.05999999865889549]),
                                                                                                                                  ulimit : new MFFloat([0,0,0]),
                                                                                                                                  llimit : new MFFloat([0,0,0]),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Transform({
                                                                                                                                      scale : new SFVec3f([1,1,1.399999976158142]),
                                                                                                                                      translation : new SFVec3f([0.03400000184774399,1.6549999713897705,0.06499999761581421]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("jointbox")})])}),

                                                                                                                                    new HAnimSegment({
                                                                                                                                      name : new SFString("l_eyeball"),
                                                                                                                                      DEF : new SFString("Joe_l_eyeball"),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          geometry : new SFNode(
                                                                                                                                            new IndexedLineSet({
                                                                                                                                              coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                              coord : new SFNode(
                                                                                                                                                new Coordinate({
                                                                                                                                                  point : new MFVec3f([0.03400000184774399,1.6549999713897705,0.06499999761581421,-0.03400000184774399,1.6549999713897705,0.06499999761581421])}))})),
                                                                                                                                          appearance : new SFNode(
                                                                                                                                            new Appearance({
                                                                                                                                              USE : new SFString("SegmentLine")}))})])})])}),

                                                                                                                                new HAnimJoint({
                                                                                                                                  name : new SFString("r_eyeball_joint"),
                                                                                                                                  DEF : new SFString("Joe_r_eyeball_joint"),
                                                                                                                                  center : new SFVec3f([-0.03400000184774399,1.659000039100647,0.05999999865889549]),
                                                                                                                                  ulimit : new MFFloat([0,0,0]),
                                                                                                                                  llimit : new MFFloat([0,0,0]),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Transform({
                                                                                                                                      scale : new SFVec3f([1,1,1.399999976158142]),
                                                                                                                                      translation : new SFVec3f([-0.03400000184774399,1.6549999713897705,0.06499999761581421]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("jointbox")})])}),

                                                                                                                                    new HAnimSegment({
                                                                                                                                      name : new SFString("r_eyeball"),
                                                                                                                                      DEF : new SFString("Joe_r_eyeball"),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          geometry : new SFNode(
                                                                                                                                            new IndexedLineSet({
                                                                                                                                              coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                              coord : new SFNode(
                                                                                                                                                new Coordinate({
                                                                                                                                                  point : new MFVec3f([0.03400000184774399,1.6549999713897705,0.06499999761581421,-0.03400000184774399,1.6549999713897705,0.06499999761581421])}))})),
                                                                                                                                          appearance : new SFNode(
                                                                                                                                            new Appearance({
                                                                                                                                              USE : new SFString("SegmentLine")}))})])})])})])})])})])})])})])})])})])})])}),

                                                                                                new HAnimJoint({
                                                                                                  name : new SFString("l_sternoclavicular"),
                                                                                                  DEF : new SFString("Joe_l_sternoclavicular"),
                                                                                                  center : new SFVec3f([0.0820000022649765,1.448799967765808,-0.03530000150203705]),
                                                                                                  skinCoordIndex : new MFInt32([12]),
                                                                                                  skinCoordWeight : new MFFloat([1]),
                                                                                                  ulimit : new MFFloat([0,0,0]),
                                                                                                  llimit : new MFFloat([0,0,0]),
                                                                                                  children : new MFNode([
                                                                                                    new Transform({
                                                                                                      translation : new SFVec3f([0.0820000022649765,1.448799967765808,-0.03530000150203705]),
                                                                                                      children : new MFNode([
                                                                                                        new Shape({
                                                                                                          USE : new SFString("jointbox")})])}),

                                                                                                    new HAnimSegment({
                                                                                                      name : new SFString("l_clavicle"),
                                                                                                      DEF : new SFString("Joe_l_clavicle"),
                                                                                                      children : new MFNode([
                                                                                                        new Shape({
                                                                                                          geometry : new SFNode(
                                                                                                            new IndexedLineSet({
                                                                                                              coordIndex : new MFInt32([0,1,-1]),
                                                                                                              coord : new SFNode(
                                                                                                                new Coordinate({
                                                                                                                  point : new MFVec3f([0.0820000022649765,1.448799967765808,-0.03530000150203705,0.09619999676942825,1.426900029182434,-0.042399998754262924])}))})),
                                                                                                          appearance : new SFNode(
                                                                                                            new Appearance({
                                                                                                              USE : new SFString("SegmentLine")}))}),

                                                                                                        new HAnimSite({
                                                                                                          name : new SFString("l_clavicale"),
                                                                                                          DEF : new SFString("Joe_l_clavicale"),
                                                                                                          translation : new SFVec3f([0.029999999329447746,1.4600000381469727,0.03500000014901161]),
                                                                                                          children : new MFNode([
                                                                                                            new Shape({
                                                                                                              USE : new SFString("sitebox")})])})])}),

                                                                                                    new HAnimJoint({
                                                                                                      name : new SFString("l_acromioclavicular"),
                                                                                                      DEF : new SFString("Joe_l_acromioclavicular"),
                                                                                                      center : new SFVec3f([0.09619999676942825,1.426900029182434,-0.042399998754262924]),
                                                                                                      skinCoordIndex : new MFInt32([79]),
                                                                                                      skinCoordWeight : new MFFloat([1]),
                                                                                                      ulimit : new MFFloat([0,0,0]),
                                                                                                      llimit : new MFFloat([0,0,0]),
                                                                                                      children : new MFNode([
                                                                                                        new Transform({
                                                                                                          translation : new SFVec3f([0.09619999676942825,1.426900029182434,-0.042399998754262924]),
                                                                                                          children : new MFNode([
                                                                                                            new Shape({
                                                                                                              USE : new SFString("jointbox")})])}),

                                                                                                        new HAnimSegment({
                                                                                                          name : new SFString("l_scapula"),
                                                                                                          DEF : new SFString("Joe_l_scapula"),
                                                                                                          children : new MFNode([
                                                                                                            new Shape({
                                                                                                              geometry : new SFNode(
                                                                                                                new IndexedLineSet({
                                                                                                                  coordIndex : new MFInt32([0,1,-1]),
                                                                                                                  coord : new SFNode(
                                                                                                                    new Coordinate({
                                                                                                                      point : new MFVec3f([0.09619999676942825,1.426900029182434,-0.042399998754262924,0.20000000298023224,1.440000057220459,-0.03999999910593033])}))})),
                                                                                                              appearance : new SFNode(
                                                                                                                new Appearance({
                                                                                                                  USE : new SFString("SegmentLine")}))}),

                                                                                                            new HAnimSite({
                                                                                                              name : new SFString("l_acromion"),
                                                                                                              DEF : new SFString("Joe_l_acromion"),
                                                                                                              translation : new SFVec3f([0.17499999701976776,1.4824999570846558,-0.05999999865889549]),
                                                                                                              children : new MFNode([
                                                                                                                new Shape({
                                                                                                                  USE : new SFString("sitebox")})])}),

                                                                                                            new HAnimSite({
                                                                                                              name : new SFString("l_axilla_ant"),
                                                                                                              DEF : new SFString("Joe_l_axilla_ant"),
                                                                                                              translation : new SFVec3f([0.17000000178813934,1.3799999952316284,0.007000000216066837]),
                                                                                                              children : new MFNode([
                                                                                                                new Shape({
                                                                                                                  USE : new SFString("sitebox")})])}),

                                                                                                            new HAnimSite({
                                                                                                              name : new SFString("l_axilla_post"),
                                                                                                              DEF : new SFString("Joe_l_axilla_post"),
                                                                                                              translation : new SFVec3f([0.1599999964237213,1.3799999952316284,-0.125]),
                                                                                                              children : new MFNode([
                                                                                                                new Shape({
                                                                                                                  USE : new SFString("sitebox")})])}),

                                                                                                            new Transform({
                                                                                                              translation : new SFVec3f([0.10999999940395355,1.4270000457763672,-0.13750000298023224]),
                                                                                                              children : new MFNode([
                                                                                                                new Shape({
                                                                                                                  USE : new SFString("skinsphere")})])})])}),

                                                                                                        new HAnimJoint({
                                                                                                          name : new SFString("l_shoulder"),
                                                                                                          DEF : new SFString("Joe_l_shoulder"),
                                                                                                          center : new SFVec3f([0.20000000298023224,1.440000057220459,-0.03999999910593033]),
                                                                                                          skinCoordIndex : new MFInt32([41,42,44,80,102,103,104,105]),
                                                                                                          skinCoordWeight : new MFFloat([1,1,1,1,1,1,1,1]),
                                                                                                          ulimit : new MFFloat([0,0,0]),
                                                                                                          llimit : new MFFloat([0,0,0]),
                                                                                                          children : new MFNode([
                                                                                                            new Transform({
                                                                                                              translation : new SFVec3f([0.20000000298023224,1.440000057220459,-0.03999999910593033]),
                                                                                                              children : new MFNode([
                                                                                                                new Shape({
                                                                                                                  USE : new SFString("jointbox")})])}),

                                                                                                            new HAnimSegment({
                                                                                                              name : new SFString("l_upperarm"),
                                                                                                              DEF : new SFString("Joe_l_upperarm"),
                                                                                                              children : new MFNode([
                                                                                                                new Shape({
                                                                                                                  geometry : new SFNode(
                                                                                                                    new IndexedLineSet({
                                                                                                                      coordIndex : new MFInt32([0,1,-1]),
                                                                                                                      coord : new SFNode(
                                                                                                                        new Coordinate({
                                                                                                                          point : new MFVec3f([0.2029000073671341,1.440000057220459,-0.03869999945163727,0.20000000298023224,1.138800024986267,-0.03999999910593033])}))})),
                                                                                                                  appearance : new SFNode(
                                                                                                                    new Appearance({
                                                                                                                      USE : new SFString("SegmentLine")}))}),

                                                                                                                new HAnimSite({
                                                                                                                  name : new SFString("l_humeral_medial_epicn"),
                                                                                                                  DEF : new SFString("Joe_l_humeral_medial_epicn"),
                                                                                                                  translation : new SFVec3f([0.16500000655651093,1.138800024986267,-0.03999999910593033]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Shape({
                                                                                                                      USE : new SFString("sitebox")})])}),

                                                                                                                new HAnimSite({
                                                                                                                  name : new SFString("l_radiale"),
                                                                                                                  DEF : new SFString("Joe_l_radiale"),
                                                                                                                  translation : new SFVec3f([0.23000000417232513,1.1330000162124634,-0.054999999701976776]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Shape({
                                                                                                                      USE : new SFString("sitebox")})])}),

                                                                                                                new HAnimSite({
                                                                                                                  name : new SFString("l_humeral_lateral_epicn"),
                                                                                                                  DEF : new SFString("Joe_l_humeral_lateral_epicn"),
                                                                                                                  translation : new SFVec3f([0.24400000274181366,1.138800024986267,-0.03999999910593033]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Shape({
                                                                                                                      USE : new SFString("sitebox")})])}),

                                                                                                                new Transform({
                                                                                                                  translation : new SFVec3f([0.23499999940395355,1.4199999570846558,-0.0625]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Shape({
                                                                                                                      USE : new SFString("skinsphere")})])}),

                                                                                                                new Transform({
                                                                                                                  translation : new SFVec3f([0.25,1.2699999809265137,-0.03999999910593033]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Shape({
                                                                                                                      USE : new SFString("skinsphere")})])}),

                                                                                                                new Transform({
                                                                                                                  translation : new SFVec3f([0.17000000178813934,1.2699999809265137,-0.03999999910593033]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Shape({
                                                                                                                      USE : new SFString("skinsphere")})])}),

                                                                                                                new Transform({
                                                                                                                  translation : new SFVec3f([0.20000000298023224,1.2699999809265137,-0.09000000357627869]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Shape({
                                                                                                                      USE : new SFString("skinsphere")})])}),

                                                                                                                new Transform({
                                                                                                                  translation : new SFVec3f([0.20000000298023224,1.2699999809265137,0.019999999552965164]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Shape({
                                                                                                                      USE : new SFString("skinsphere")})])})])}),

                                                                                                            new HAnimJoint({
                                                                                                              name : new SFString("l_elbow"),
                                                                                                              DEF : new SFString("Joe_l_elbow"),
                                                                                                              center : new SFVec3f([0.20000000298023224,1.138800024986267,-0.03999999910593033]),
                                                                                                              skinCoordIndex : new MFInt32([45,46,47,109,110,111,112,113,115,116,117,118]),
                                                                                                              skinCoordWeight : new MFFloat([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]),
                                                                                                              ulimit : new MFFloat([0,0,0]),
                                                                                                              llimit : new MFFloat([0,0,0]),
                                                                                                              children : new MFNode([
                                                                                                                new Transform({
                                                                                                                  translation : new SFVec3f([0.20000000298023224,1.138800024986267,-0.03999999910593033]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Shape({
                                                                                                                      USE : new SFString("jointbox")})])}),

                                                                                                                new HAnimSegment({
                                                                                                                  name : new SFString("l_forearm"),
                                                                                                                  DEF : new SFString("Joe_l_forearm"),
                                                                                                                  children : new MFNode([
                                                                                                                    new Shape({
                                                                                                                      geometry : new SFNode(
                                                                                                                        new IndexedLineSet({
                                                                                                                          coordIndex : new MFInt32([0,1,-1]),
                                                                                                                          coord : new SFNode(
                                                                                                                            new Coordinate({
                                                                                                                              point : new MFVec3f([0.20000000298023224,1.138800024986267,-0.03999999910593033,0.20000000298023224,0.8700000047683716,-0.03999999910593033])}))})),
                                                                                                                      appearance : new SFNode(
                                                                                                                        new Appearance({
                                                                                                                          USE : new SFString("SegmentLine")}))}),

                                                                                                                    new HAnimSite({
                                                                                                                      name : new SFString("l_radial_styloid"),
                                                                                                                      DEF : new SFString("Joe_l_radial_styloid"),
                                                                                                                      translation : new SFVec3f([0.19009999930858612,0.8644999861717224,-0.04149999842047691]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          USE : new SFString("sitebox")})])}),

                                                                                                                    new HAnimSite({
                                                                                                                      name : new SFString("l_olecranon"),
                                                                                                                      DEF : new SFString("Joe_l_olecranon"),
                                                                                                                      translation : new SFVec3f([0.20000000298023224,1.138800024986267,-0.07999999821186066]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          USE : new SFString("sitebox")})])}),

                                                                                                                    new Transform({
                                                                                                                      translation : new SFVec3f([0.20000000298023224,1.138800024986267,-0.013000000268220901]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          USE : new SFString("skinsphere")})])}),

                                                                                                                    new Transform({
                                                                                                                      translation : new SFVec3f([0.22499999403953552,1,-0.009999999776482582]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          USE : new SFString("skinsphere")})])}),

                                                                                                                    new Transform({
                                                                                                                      translation : new SFVec3f([0.22499999403953552,1,-0.07000000029802322]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          USE : new SFString("skinsphere")})])}),

                                                                                                                    new Transform({
                                                                                                                      translation : new SFVec3f([0.1850000023841858,1,-0.009999999776482582]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          USE : new SFString("skinsphere")})])}),

                                                                                                                    new Transform({
                                                                                                                      translation : new SFVec3f([0.1850000023841858,1,-0.07000000029802322]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          USE : new SFString("skinsphere")})])})])}),

                                                                                                                new HAnimJoint({
                                                                                                                  name : new SFString("l_wrist"),
                                                                                                                  DEF : new SFString("Joe_l_wrist"),
                                                                                                                  center : new SFVec3f([0.20000000298023224,0.8700000047683716,-0.03999999910593033]),
                                                                                                                  skinCoordIndex : new MFInt32([119,120,121,122,123,124,125,126]),
                                                                                                                  skinCoordWeight : new MFFloat([1,1,1,1,1,1,1,1]),
                                                                                                                  ulimit : new MFFloat([0,0,0]),
                                                                                                                  llimit : new MFFloat([0,0,0]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Transform({
                                                                                                                      translation : new SFVec3f([0.20000000298023224,0.8700000047683716,-0.03999999910593033]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          USE : new SFString("jointbox")})])}),

                                                                                                                    new HAnimSegment({
                                                                                                                      name : new SFString("l_hand"),
                                                                                                                      DEF : new SFString("Joe_l_hand"),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          geometry : new SFNode(
                                                                                                                            new IndexedLineSet({
                                                                                                                              coordIndex : new MFInt32([0,1,-1,0,2,-1,0,3,-1,0,4,-1,0,5,-1]),
                                                                                                                              coord : new SFNode(
                                                                                                                                new Coordinate({
                                                                                                                                  point : new MFVec3f([0.20000000298023224,0.8700000047683716,-0.03999999910593033,0.1923999935388565,0.8471999764442444,-0.05339999869465828,0.19830000400543213,0.8023999929428101,-0.02800000086426735,0.19869999587535858,0.8029000163078308,-0.05299999937415123,0.1956000030040741,0.8019000291824341,-0.07940000295639038,0.19249999523162842,0.8065999746322632,-0.10360000282526016])}))})),
                                                                                                                          appearance : new SFNode(
                                                                                                                            new Appearance({
                                                                                                                              USE : new SFString("SegmentLine")}))}),

                                                                                                                        new HAnimSite({
                                                                                                                          name : new SFString("l_metacarpal_pha2"),
                                                                                                                          DEF : new SFString("Joe_l_metacarpal_pha2"),
                                                                                                                          translation : new SFVec3f([0.20090000331401825,0.8138999938964844,-0.02370000071823597]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              USE : new SFString("sitebox")})])}),

                                                                                                                        new HAnimSite({
                                                                                                                          name : new SFString("l_ulnar_styloid"),
                                                                                                                          DEF : new SFString("Joe_l_ulnar_styloid"),
                                                                                                                          translation : new SFVec3f([0.2142000049352646,0.8529000282287598,-0.06480000168085098]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              USE : new SFString("sitebox")})])}),

                                                                                                                        new HAnimSite({
                                                                                                                          name : new SFString("l_metacarpal_pha5"),
                                                                                                                          DEF : new SFString("Joe_l_metacarpal_pha5"),
                                                                                                                          translation : new SFVec3f([0.19290000200271606,0.7860000133514404,-0.11219999939203262]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              USE : new SFString("sitebox")})])})])}),

                                                                                                                    new HAnimJoint({
                                                                                                                      name : new SFString("l_thumb1"),
                                                                                                                      DEF : new SFString("Joe_l_thumb1"),
                                                                                                                      center : new SFVec3f([0.1923999935388565,0.8471999764442444,-0.05339999869465828]),
                                                                                                                      skinCoordIndex : new MFInt32([127,128]),
                                                                                                                      skinCoordWeight : new MFFloat([1,1]),
                                                                                                                      ulimit : new MFFloat([0,0,0]),
                                                                                                                      llimit : new MFFloat([0,0,0]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Transform({
                                                                                                                          translation : new SFVec3f([0.1923999935388565,0.8471999764442444,-0.05339999869465828]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              USE : new SFString("jointbox")})])}),

                                                                                                                        new HAnimSegment({
                                                                                                                          name : new SFString("l_thumb_metacarpal"),
                                                                                                                          DEF : new SFString("Joe_l_thumb_metacarpal"),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              geometry : new SFNode(
                                                                                                                                new IndexedLineSet({
                                                                                                                                  coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                  coord : new SFNode(
                                                                                                                                    new Coordinate({
                                                                                                                                      point : new MFVec3f([0.1923999935388565,0.8471999764442444,-0.05339999869465828,0.19509999454021454,0.8226000070571899,0.02459999918937683])}))})),
                                                                                                                              appearance : new SFNode(
                                                                                                                                new Appearance({
                                                                                                                                  USE : new SFString("SegmentLine")}))})])}),

                                                                                                                        new HAnimJoint({
                                                                                                                          name : new SFString("l_thumb2"),
                                                                                                                          DEF : new SFString("Joe_l_thumb2"),
                                                                                                                          center : new SFVec3f([0.19509999454021454,0.8226000070571899,0.02459999918937683]),
                                                                                                                          skinCoordIndex : new MFInt32([138,139,140,141,142,143]),
                                                                                                                          skinCoordWeight : new MFFloat([0.5,0.5,0.5,1,1,1]),
                                                                                                                          ulimit : new MFFloat([0,0,0]),
                                                                                                                          llimit : new MFFloat([0,0,0]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Transform({
                                                                                                                              translation : new SFVec3f([0.19509999454021454,0.8226000070571899,0.02459999918937683]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  USE : new SFString("jointbox")})])}),

                                                                                                                            new HAnimSegment({
                                                                                                                              name : new SFString("l_thumb_distal"),
                                                                                                                              DEF : new SFString("Joe_l_thumb_proximal"),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  geometry : new SFNode(
                                                                                                                                    new IndexedLineSet({
                                                                                                                                      coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                      coord : new SFNode(
                                                                                                                                        new Coordinate({
                                                                                                                                          point : new MFVec3f([0.19509999454021454,0.8226000070571899,0.02459999918937683,0.19550000131130219,0.8159000277519226,0.04639999940991402])}))})),
                                                                                                                                  appearance : new SFNode(
                                                                                                                                    new Appearance({
                                                                                                                                      USE : new SFString("SegmentLine")}))})])}),

                                                                                                                            new HAnimJoint({
                                                                                                                              name : new SFString("l_thumb3"),
                                                                                                                              DEF : new SFString("Joe_l_thumb3"),
                                                                                                                              center : new SFVec3f([0.19550000131130219,0.8159000277519226,0.04639999940991402]),
                                                                                                                              skinCoordIndex : new MFInt32([144,145,146,147,148,149,150,151,152]),
                                                                                                                              skinCoordWeight : new MFFloat([1,1,1,1,1,1,1,1,1]),
                                                                                                                              ulimit : new MFFloat([0,0,0]),
                                                                                                                              llimit : new MFFloat([0,0,0]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Transform({
                                                                                                                                  translation : new SFVec3f([0.19550000131130219,0.8159000277519226,0.04639999940991402]),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Shape({
                                                                                                                                      USE : new SFString("jointbox")})])}),

                                                                                                                                new HAnimSegment({
                                                                                                                                  name : new SFString("l_thumb_distal"),
                                                                                                                                  DEF : new SFString("Joe_l_thumb_distal"),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Shape({
                                                                                                                                      geometry : new SFNode(
                                                                                                                                        new IndexedLineSet({
                                                                                                                                          coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                          coord : new SFNode(
                                                                                                                                            new Coordinate({
                                                                                                                                              point : new MFVec3f([0.19550000131130219,0.8159000277519226,0.04639999940991402,0.19820000231266022,0.8061000108718872,0.07590000331401825])}))})),
                                                                                                                                      appearance : new SFNode(
                                                                                                                                        new Appearance({
                                                                                                                                          USE : new SFString("SegmentLine")}))}),

                                                                                                                                    new HAnimSite({
                                                                                                                                      name : new SFString("l_thumb_distal_tip"),
                                                                                                                                      DEF : new SFString("Joe_l_thumb_distal_tip"),
                                                                                                                                      translation : new SFVec3f([0.19820000231266022,0.8061000108718872,0.07590000331401825]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("sitebox")})])})])})])})])})])}),

                                                                                                                    new HAnimJoint({
                                                                                                                      name : new SFString("l_index0"),
                                                                                                                      DEF : new SFString("Joe_l_index0"),
                                                                                                                      center : new SFVec3f([0.19830000400543213,0.8023999929428101,-0.02800000086426735]),
                                                                                                                      skinCoordIndex : new MFInt32([129,130]),
                                                                                                                      skinCoordWeight : new MFFloat([1,1]),
                                                                                                                      ulimit : new MFFloat([0,0,0]),
                                                                                                                      llimit : new MFFloat([0,0,0]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Transform({
                                                                                                                          translation : new SFVec3f([0.19830000400543213,0.8023999929428101,-0.02800000086426735]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              USE : new SFString("jointbox")})])}),

                                                                                                                        new HAnimSegment({
                                                                                                                          name : new SFString("l_index_metacarpal"),
                                                                                                                          DEF : new SFString("Joe_l_index_metacarpal"),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              geometry : new SFNode(
                                                                                                                                new IndexedLineSet({
                                                                                                                                  coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                  coord : new SFNode(
                                                                                                                                    new Coordinate({
                                                                                                                                      point : new MFVec3f([0.19830000400543213,0.8023999929428101,-0.02800000086426735,0.19830000400543213,0.781499981880188,-0.02800000086426735])}))})),
                                                                                                                              appearance : new SFNode(
                                                                                                                                new Appearance({
                                                                                                                                  USE : new SFString("SegmentLine")}))})])}),

                                                                                                                        new HAnimJoint({
                                                                                                                          name : new SFString("l_index1"),
                                                                                                                          DEF : new SFString("Joe_l_index1"),
                                                                                                                          center : new SFVec3f([0.19830000400543213,0.781499981880188,-0.02800000086426735]),
                                                                                                                          skinCoordIndex : new MFInt32([138,139,140,153,154,155,163]),
                                                                                                                          skinCoordWeight : new MFFloat([0.5,0.5,0.5,1,1,1,0.5]),
                                                                                                                          ulimit : new MFFloat([0,0,0]),
                                                                                                                          llimit : new MFFloat([0,0,0]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Transform({
                                                                                                                              translation : new SFVec3f([0.19830000400543213,0.781499981880188,-0.02800000086426735]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  USE : new SFString("jointbox")})])}),

                                                                                                                            new HAnimSegment({
                                                                                                                              name : new SFString("l_index_proximal"),
                                                                                                                              DEF : new SFString("Joe_l_index_proximal"),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  geometry : new SFNode(
                                                                                                                                    new IndexedLineSet({
                                                                                                                                      coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                      coord : new SFNode(
                                                                                                                                        new Coordinate({
                                                                                                                                          point : new MFVec3f([0.19830000400543213,0.781499981880188,-0.02800000086426735,0.20170000195503235,0.736299991607666,-0.024800000712275505])}))})),
                                                                                                                                  appearance : new SFNode(
                                                                                                                                    new Appearance({
                                                                                                                                      USE : new SFString("SegmentLine")}))})])}),

                                                                                                                            new HAnimJoint({
                                                                                                                              name : new SFString("l_index2"),
                                                                                                                              DEF : new SFString("Joe_l_index2"),
                                                                                                                              center : new SFVec3f([0.20170000195503235,0.736299991607666,-0.024800000712275505]),
                                                                                                                              skinCoordIndex : new MFInt32([166,167,168,169]),
                                                                                                                              skinCoordWeight : new MFFloat([1,1,1,1]),
                                                                                                                              ulimit : new MFFloat([0,0,0]),
                                                                                                                              llimit : new MFFloat([0,0,0]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Transform({
                                                                                                                                  translation : new SFVec3f([0.20170000195503235,0.736299991607666,-0.024800000712275505]),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Shape({
                                                                                                                                      USE : new SFString("jointbox")})])}),

                                                                                                                                new HAnimSegment({
                                                                                                                                  name : new SFString("l_index_middle"),
                                                                                                                                  DEF : new SFString("Joe_l_index_middle"),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Shape({
                                                                                                                                      geometry : new SFNode(
                                                                                                                                        new IndexedLineSet({
                                                                                                                                          coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                          coord : new SFNode(
                                                                                                                                            new Coordinate({
                                                                                                                                              point : new MFVec3f([0.20170000195503235,0.736299991607666,-0.024800000712275505,0.20280000567436218,0.7139000296592712,-0.023600000888109207])}))})),
                                                                                                                                      appearance : new SFNode(
                                                                                                                                        new Appearance({
                                                                                                                                          USE : new SFString("SegmentLine")}))})])}),

                                                                                                                                new HAnimJoint({
                                                                                                                                  name : new SFString("l_index3"),
                                                                                                                                  DEF : new SFString("Joe_l_index3"),
                                                                                                                                  center : new SFVec3f([0.20280000567436218,0.7139000296592712,-0.023600000888109207]),
                                                                                                                                  skinCoordIndex : new MFInt32([170,171,172,173,174,175,176,177,178]),
                                                                                                                                  skinCoordWeight : new MFFloat([1,1,1,1,1,1,1,1,1]),
                                                                                                                                  ulimit : new MFFloat([0,0,0]),
                                                                                                                                  llimit : new MFFloat([0,0,0]),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Transform({
                                                                                                                                      translation : new SFVec3f([0.20280000567436218,0.7139000296592712,-0.023600000888109207]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("jointbox")})])}),

                                                                                                                                    new HAnimSegment({
                                                                                                                                      name : new SFString("l_index_distal"),
                                                                                                                                      DEF : new SFString("Joe_l_index_distal"),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          geometry : new SFNode(
                                                                                                                                            new IndexedLineSet({
                                                                                                                                              coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                              coord : new SFNode(
                                                                                                                                                new Coordinate({
                                                                                                                                                  point : new MFVec3f([0.20280000567436218,0.7139000296592712,-0.023600000888109207,0.20890000462532043,0.6858000159263611,-0.02449999935925007])}))})),
                                                                                                                                          appearance : new SFNode(
                                                                                                                                            new Appearance({
                                                                                                                                              USE : new SFString("SegmentLine")}))}),

                                                                                                                                        new HAnimSite({
                                                                                                                                          name : new SFString("l_index_distal_tip"),
                                                                                                                                          DEF : new SFString("Joe_l_index_distal_tip"),
                                                                                                                                          translation : new SFVec3f([0.20890000462532043,0.6858000159263611,-0.02449999935925007]),
                                                                                                                                          children : new MFNode([
                                                                                                                                            new Shape({
                                                                                                                                              USE : new SFString("sitebox")})])}),

                                                                                                                                        new HAnimSite({
                                                                                                                                          name : new SFString("l_dactylion"),
                                                                                                                                          DEF : new SFString("Joe_l_dactylion"),
                                                                                                                                          translation : new SFVec3f([0.20559999346733093,0.6743000149726868,-0.04820000007748604]),
                                                                                                                                          children : new MFNode([
                                                                                                                                            new Shape({
                                                                                                                                              USE : new SFString("sitebox")})])})])})])})])})])})])}),

                                                                                                                    new HAnimJoint({
                                                                                                                      name : new SFString("l_middle0"),
                                                                                                                      DEF : new SFString("Joe_l_middle0"),
                                                                                                                      center : new SFVec3f([0.19869999587535858,0.8029000163078308,-0.05299999937415123]),
                                                                                                                      skinCoordIndex : new MFInt32([131,132]),
                                                                                                                      skinCoordWeight : new MFFloat([1,1]),
                                                                                                                      ulimit : new MFFloat([0,0,0]),
                                                                                                                      llimit : new MFFloat([0,0,0]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Transform({
                                                                                                                          translation : new SFVec3f([0.19869999587535858,0.8029000163078308,-0.05299999937415123]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              USE : new SFString("jointbox")})])}),

                                                                                                                        new HAnimSegment({
                                                                                                                          name : new SFString("l_middle_metacarpal"),
                                                                                                                          DEF : new SFString("Joe_l_middle_metacarpal"),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              geometry : new SFNode(
                                                                                                                                new IndexedLineSet({
                                                                                                                                  coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                  coord : new SFNode(
                                                                                                                                    new Coordinate({
                                                                                                                                      point : new MFVec3f([0.19869999587535858,0.8029000163078308,-0.05299999937415123,0.19869999587535858,0.7817999720573425,-0.05299999937415123])}))})),
                                                                                                                              appearance : new SFNode(
                                                                                                                                new Appearance({
                                                                                                                                  USE : new SFString("SegmentLine")}))})])}),

                                                                                                                        new HAnimJoint({
                                                                                                                          name : new SFString("l_middle1"),
                                                                                                                          DEF : new SFString("Joe_l_middle1"),
                                                                                                                          center : new SFVec3f([0.19869999587535858,0.7817999720573425,-0.05299999937415123]),
                                                                                                                          skinCoordIndex : new MFInt32([156,157,163,164]),
                                                                                                                          skinCoordWeight : new MFFloat([1,1,0.5,0.5]),
                                                                                                                          ulimit : new MFFloat([0,0,0]),
                                                                                                                          llimit : new MFFloat([0,0,0]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Transform({
                                                                                                                              translation : new SFVec3f([0.19869999587535858,0.7817999720573425,-0.05299999937415123]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  USE : new SFString("jointbox")})])}),

                                                                                                                            new HAnimSegment({
                                                                                                                              name : new SFString("l_middle_proximal"),
                                                                                                                              DEF : new SFString("Joe_l_middle_proximal"),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  geometry : new SFNode(
                                                                                                                                    new IndexedLineSet({
                                                                                                                                      coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                      coord : new SFNode(
                                                                                                                                        new Coordinate({
                                                                                                                                          point : new MFVec3f([0.19869999587535858,0.7817999720573425,-0.05299999937415123,0.2012999951839447,0.7272999882698059,-0.0502999983727932])}))})),
                                                                                                                                  appearance : new SFNode(
                                                                                                                                    new Appearance({
                                                                                                                                      USE : new SFString("SegmentLine")}))})])}),

                                                                                                                            new HAnimJoint({
                                                                                                                              name : new SFString("l_middle2"),
                                                                                                                              DEF : new SFString("Joe_l_middle2"),
                                                                                                                              center : new SFVec3f([0.2012999951839447,0.7272999882698059,-0.0502999983727932]),
                                                                                                                              skinCoordIndex : new MFInt32([179,180,181,182]),
                                                                                                                              skinCoordWeight : new MFFloat([1,1,1,1]),
                                                                                                                              ulimit : new MFFloat([0,0,0]),
                                                                                                                              llimit : new MFFloat([0,0,0]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Transform({
                                                                                                                                  translation : new SFVec3f([0.2012999951839447,0.7272999882698059,-0.0502999983727932]),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Shape({
                                                                                                                                      USE : new SFString("jointbox")})])}),

                                                                                                                                new HAnimSegment({
                                                                                                                                  name : new SFString("l_middle_middle"),
                                                                                                                                  DEF : new SFString("Joe_l_middle_middle"),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Shape({
                                                                                                                                      geometry : new SFNode(
                                                                                                                                        new IndexedLineSet({
                                                                                                                                          coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                          coord : new SFNode(
                                                                                                                                            new Coordinate({
                                                                                                                                              point : new MFVec3f([0.2012999951839447,0.7272999882698059,-0.0502999983727932,0.20260000228881836,0.7010999917984009,-0.049400001764297485])}))})),
                                                                                                                                      appearance : new SFNode(
                                                                                                                                        new Appearance({
                                                                                                                                          USE : new SFString("SegmentLine")}))})])}),

                                                                                                                                new HAnimJoint({
                                                                                                                                  name : new SFString("l_middle3"),
                                                                                                                                  DEF : new SFString("Joe_l_middle3"),
                                                                                                                                  center : new SFVec3f([0.20260000228881836,0.7010999917984009,-0.049400001764297485]),
                                                                                                                                  skinCoordIndex : new MFInt32([183,184,185,186,187,188,189,190,191]),
                                                                                                                                  skinCoordWeight : new MFFloat([1,1,1,1,1,1,1,1,1]),
                                                                                                                                  ulimit : new MFFloat([0,0,0]),
                                                                                                                                  llimit : new MFFloat([0,0,0]),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Transform({
                                                                                                                                      translation : new SFVec3f([0.20260000228881836,0.7010999917984009,-0.049400001764297485]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("jointbox")})])}),

                                                                                                                                    new HAnimSegment({
                                                                                                                                      name : new SFString("l_middle_distal"),
                                                                                                                                      DEF : new SFString("Joe_l_middle_distal"),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          geometry : new SFNode(
                                                                                                                                            new IndexedLineSet({
                                                                                                                                              coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                              coord : new SFNode(
                                                                                                                                                new Coordinate({
                                                                                                                                                  point : new MFVec3f([0.20260000228881836,0.7010999917984009,-0.049400001764297485,0.20800000429153442,0.6730999946594238,-0.04910000041127205])}))})),
                                                                                                                                          appearance : new SFNode(
                                                                                                                                            new Appearance({
                                                                                                                                              USE : new SFString("SegmentLine")}))}),

                                                                                                                                        new HAnimSite({
                                                                                                                                          name : new SFString("l_middle_distal_tip"),
                                                                                                                                          DEF : new SFString("Joe_l_middle_distal_tip"),
                                                                                                                                          translation : new SFVec3f([0.20800000429153442,0.6730999946594238,-0.04910000041127205]),
                                                                                                                                          children : new MFNode([
                                                                                                                                            new Shape({
                                                                                                                                              USE : new SFString("sitebox")})])})])})])})])})])})])}),

                                                                                                                    new HAnimJoint({
                                                                                                                      name : new SFString("l_ring0"),
                                                                                                                      DEF : new SFString("Joe_l_ring0"),
                                                                                                                      center : new SFVec3f([0.1956000030040741,0.8019000291824341,-0.07940000295639038]),
                                                                                                                      skinCoordIndex : new MFInt32([133,134]),
                                                                                                                      skinCoordWeight : new MFFloat([1,1]),
                                                                                                                      ulimit : new MFFloat([0,0,0]),
                                                                                                                      llimit : new MFFloat([0,0,0]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Transform({
                                                                                                                          translation : new SFVec3f([0.1956000030040741,0.8019000291824341,-0.07940000295639038]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              USE : new SFString("jointbox")})])}),

                                                                                                                        new HAnimSegment({
                                                                                                                          name : new SFString("l_ring_metacarpal"),
                                                                                                                          DEF : new SFString("Joe_l_ring_metacarpal"),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              geometry : new SFNode(
                                                                                                                                new IndexedLineSet({
                                                                                                                                  coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                  coord : new SFNode(
                                                                                                                                    new Coordinate({
                                                                                                                                      point : new MFVec3f([0.1956000030040741,0.8019000291824341,-0.07940000295639038,0.1956000030040741,0.781499981880188,-0.07940000295639038])}))})),
                                                                                                                              appearance : new SFNode(
                                                                                                                                new Appearance({
                                                                                                                                  USE : new SFString("SegmentLine")}))})])}),

                                                                                                                        new HAnimJoint({
                                                                                                                          name : new SFString("l_ring1"),
                                                                                                                          DEF : new SFString("Joe_l_ring1"),
                                                                                                                          center : new SFVec3f([0.1956000030040741,0.781499981880188,-0.07940000295639038]),
                                                                                                                          skinCoordIndex : new MFInt32([158,159,164,165]),
                                                                                                                          skinCoordWeight : new MFFloat([1,1,0.5,0.5]),
                                                                                                                          ulimit : new MFFloat([0,0,0]),
                                                                                                                          llimit : new MFFloat([0,0,0]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Transform({
                                                                                                                              translation : new SFVec3f([0.1956000030040741,0.781499981880188,-0.07940000295639038]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  USE : new SFString("jointbox")})])}),

                                                                                                                            new HAnimSegment({
                                                                                                                              name : new SFString("l_ring_proximal"),
                                                                                                                              DEF : new SFString("Joe_l_ring_proximal"),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  geometry : new SFNode(
                                                                                                                                    new IndexedLineSet({
                                                                                                                                      coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                      coord : new SFNode(
                                                                                                                                        new Coordinate({
                                                                                                                                          point : new MFVec3f([0.1956000030040741,0.781499981880188,-0.07940000295639038,0.1973000019788742,0.7286999821662903,-0.07769999653100967])}))})),
                                                                                                                                  appearance : new SFNode(
                                                                                                                                    new Appearance({
                                                                                                                                      USE : new SFString("SegmentLine")}))})])}),

                                                                                                                            new HAnimJoint({
                                                                                                                              name : new SFString("l_ring2"),
                                                                                                                              DEF : new SFString("Joe_l_ring2"),
                                                                                                                              center : new SFVec3f([0.1973000019788742,0.7286999821662903,-0.07769999653100967]),
                                                                                                                              skinCoordIndex : new MFInt32([192,193,194,195]),
                                                                                                                              skinCoordWeight : new MFFloat([1,1,1,1]),
                                                                                                                              ulimit : new MFFloat([0,0,0]),
                                                                                                                              llimit : new MFFloat([0,0,0]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Transform({
                                                                                                                                  translation : new SFVec3f([0.1973000019788742,0.7286999821662903,-0.07769999653100967]),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Shape({
                                                                                                                                      USE : new SFString("jointbox")})])}),

                                                                                                                                new HAnimSegment({
                                                                                                                                  name : new SFString("l_ring_middle"),
                                                                                                                                  DEF : new SFString("Joe_l_ring_middle"),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Shape({
                                                                                                                                      geometry : new SFNode(
                                                                                                                                        new IndexedLineSet({
                                                                                                                                          coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                          coord : new SFNode(
                                                                                                                                            new Coordinate({
                                                                                                                                              point : new MFVec3f([0.1973000019788742,0.7286999821662903,-0.07769999653100967,0.19830000400543213,0.7045000195503235,-0.07670000195503235])}))})),
                                                                                                                                      appearance : new SFNode(
                                                                                                                                        new Appearance({
                                                                                                                                          USE : new SFString("SegmentLine")}))})])}),

                                                                                                                                new HAnimJoint({
                                                                                                                                  name : new SFString("l_ring3"),
                                                                                                                                  DEF : new SFString("Joe_l_ring3"),
                                                                                                                                  center : new SFVec3f([0.19830000400543213,0.7045000195503235,-0.07670000195503235]),
                                                                                                                                  skinCoordIndex : new MFInt32([196,197,198,199,200,201,202,203,204]),
                                                                                                                                  skinCoordWeight : new MFFloat([1,1,1,1,1,1,1,1,1]),
                                                                                                                                  ulimit : new MFFloat([0,0,0]),
                                                                                                                                  llimit : new MFFloat([0,0,0]),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Transform({
                                                                                                                                      translation : new SFVec3f([0.19830000400543213,0.7045000195503235,-0.07670000195503235]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("jointbox")})])}),

                                                                                                                                    new HAnimSegment({
                                                                                                                                      name : new SFString("l_ring_distal"),
                                                                                                                                      DEF : new SFString("Joe_l_ring_distal"),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          geometry : new SFNode(
                                                                                                                                            new IndexedLineSet({
                                                                                                                                              coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                              coord : new SFNode(
                                                                                                                                                new Coordinate({
                                                                                                                                                  point : new MFVec3f([0.19830000400543213,0.7045000195503235,-0.07670000195503235,0.20350000262260437,0.675000011920929,-0.07559999823570251])}))})),
                                                                                                                                          appearance : new SFNode(
                                                                                                                                            new Appearance({
                                                                                                                                              USE : new SFString("SegmentLine")}))}),

                                                                                                                                        new HAnimSite({
                                                                                                                                          name : new SFString("l_ring_distal_tip"),
                                                                                                                                          DEF : new SFString("Joe_l_ring_distal_tip"),
                                                                                                                                          translation : new SFVec3f([0.20350000262260437,0.675000011920929,-0.07559999823570251]),
                                                                                                                                          children : new MFNode([
                                                                                                                                            new Shape({
                                                                                                                                              USE : new SFString("sitebox")})])})])})])})])})])})])}),

                                                                                                                    new HAnimJoint({
                                                                                                                      name : new SFString("l_pinky0"),
                                                                                                                      DEF : new SFString("Joe_l_pinky0"),
                                                                                                                      center : new SFVec3f([0.19249999523162842,0.8065999746322632,-0.10360000282526016]),
                                                                                                                      skinCoordIndex : new MFInt32([135,136,137,165]),
                                                                                                                      skinCoordWeight : new MFFloat([1,1,1,0.5]),
                                                                                                                      ulimit : new MFFloat([0,0,0]),
                                                                                                                      llimit : new MFFloat([0,0,0]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Transform({
                                                                                                                          translation : new SFVec3f([0.19249999523162842,0.8065999746322632,-0.10360000282526016]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              USE : new SFString("jointbox")})])}),

                                                                                                                        new HAnimSegment({
                                                                                                                          name : new SFString("l_pinky_metacarpal"),
                                                                                                                          DEF : new SFString("Joe_l_pinky_metacarpal"),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              geometry : new SFNode(
                                                                                                                                new IndexedLineSet({
                                                                                                                                  coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                  coord : new SFNode(
                                                                                                                                    new Coordinate({
                                                                                                                                      point : new MFVec3f([0.19249999523162842,0.8065999746322632,-0.10360000282526016,0.19249999523162842,0.7865999937057495,-0.10360000282526016])}))})),
                                                                                                                              appearance : new SFNode(
                                                                                                                                new Appearance({
                                                                                                                                  USE : new SFString("SegmentLine")}))})])}),

                                                                                                                        new HAnimJoint({
                                                                                                                          name : new SFString("l_pinky1"),
                                                                                                                          DEF : new SFString("Joe_l_pinky1"),
                                                                                                                          center : new SFVec3f([0.19249999523162842,0.7865999937057495,-0.10360000282526016]),
                                                                                                                          skinCoordIndex : new MFInt32([160,161,162]),
                                                                                                                          skinCoordWeight : new MFFloat([1,1,1]),
                                                                                                                          ulimit : new MFFloat([0,0,0]),
                                                                                                                          llimit : new MFFloat([0,0,0]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Transform({
                                                                                                                              translation : new SFVec3f([0.19249999523162842,0.7865999937057495,-0.10360000282526016]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  USE : new SFString("jointbox")})])}),

                                                                                                                            new HAnimSegment({
                                                                                                                              name : new SFString("l_pinky_proximal"),
                                                                                                                              DEF : new SFString("Joe_l_pinky_proximal"),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  geometry : new SFNode(
                                                                                                                                    new IndexedLineSet({
                                                                                                                                      coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                      coord : new SFNode(
                                                                                                                                        new Coordinate({
                                                                                                                                          point : new MFVec3f([0.19249999523162842,0.7865999937057495,-0.10360000282526016,0.19380000233650208,0.745199978351593,-0.10239999741315842])}))})),
                                                                                                                                  appearance : new SFNode(
                                                                                                                                    new Appearance({
                                                                                                                                      USE : new SFString("SegmentLine")}))})])}),

                                                                                                                            new HAnimJoint({
                                                                                                                              name : new SFString("l_pinky2"),
                                                                                                                              DEF : new SFString("Joe_l_pinky2"),
                                                                                                                              center : new SFVec3f([0.19380000233650208,0.745199978351593,-0.10239999741315842]),
                                                                                                                              skinCoordIndex : new MFInt32([205,206,207,208]),
                                                                                                                              skinCoordWeight : new MFFloat([1,1,1,1]),
                                                                                                                              ulimit : new MFFloat([0,0,0]),
                                                                                                                              llimit : new MFFloat([0,0,0]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Transform({
                                                                                                                                  translation : new SFVec3f([0.19380000233650208,0.745199978351593,-0.10239999741315842]),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Shape({
                                                                                                                                      USE : new SFString("jointbox")})])}),

                                                                                                                                new HAnimSegment({
                                                                                                                                  name : new SFString("l_pinky_middle"),
                                                                                                                                  DEF : new SFString("Joe_l_pinky_middle"),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Shape({
                                                                                                                                      geometry : new SFNode(
                                                                                                                                        new IndexedLineSet({
                                                                                                                                          coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                          coord : new SFNode(
                                                                                                                                            new Coordinate({
                                                                                                                                              point : new MFVec3f([0.19380000233650208,0.745199978351593,-0.10239999741315842,0.19480000436306,0.7276999950408936,-0.10170000046491623])}))})),
                                                                                                                                      appearance : new SFNode(
                                                                                                                                        new Appearance({
                                                                                                                                          USE : new SFString("SegmentLine")}))})])}),

                                                                                                                                new HAnimJoint({
                                                                                                                                  name : new SFString("l_pinky3"),
                                                                                                                                  DEF : new SFString("Joe_l_pinky3"),
                                                                                                                                  center : new SFVec3f([0.19480000436306,0.7276999950408936,-0.10170000046491623]),
                                                                                                                                  skinCoordIndex : new MFInt32([209,210,211,212,213,214,215,216,217]),
                                                                                                                                  skinCoordWeight : new MFFloat([1,1,1,1,1,1,1,1,1]),
                                                                                                                                  ulimit : new MFFloat([0,0,0]),
                                                                                                                                  llimit : new MFFloat([0,0,0]),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Transform({
                                                                                                                                      translation : new SFVec3f([0.19480000436306,0.7276999950408936,-0.10170000046491623]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("jointbox")})])}),

                                                                                                                                    new HAnimSegment({
                                                                                                                                      name : new SFString("l_pinky_distal"),
                                                                                                                                      DEF : new SFString("Joe_l_pinky_distal"),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          geometry : new SFNode(
                                                                                                                                            new IndexedLineSet({
                                                                                                                                              coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                              coord : new SFNode(
                                                                                                                                                new Coordinate({
                                                                                                                                                  point : new MFVec3f([0.19480000436306,0.7276999950408936,-0.10170000046491623,0.2013999968767166,0.7009000182151794,-0.10119999945163727])}))})),
                                                                                                                                          appearance : new SFNode(
                                                                                                                                            new Appearance({
                                                                                                                                              USE : new SFString("SegmentLine")}))}),

                                                                                                                                        new HAnimSite({
                                                                                                                                          name : new SFString("l_pinky_distal_tip"),
                                                                                                                                          DEF : new SFString("Joe_l_pinky_distal_tip"),
                                                                                                                                          translation : new SFVec3f([0.2013999968767166,0.7009000182151794,-0.10119999945163727]),
                                                                                                                                          children : new MFNode([
                                                                                                                                            new Shape({
                                                                                                                                              USE : new SFString("sitebox")})])})])})])})])})])})])})])})])})])})])})])})])}),

                                                                                            new HAnimJoint({
                                                                                              name : new SFString("r_sternoclavicular"),
                                                                                              DEF : new SFString("Joe_r_sternoclavicular"),
                                                                                              center : new SFVec3f([-0.029999999329447746,1.4600000381469727,0]),
                                                                                              skinCoordIndex : new MFInt32([10]),
                                                                                              skinCoordWeight : new MFFloat([1]),
                                                                                              ulimit : new MFFloat([0,0,0]),
                                                                                              llimit : new MFFloat([0,0,0]),
                                                                                              children : new MFNode([
                                                                                                new Transform({
                                                                                                  translation : new SFVec3f([-0.029999999329447746,1.4600000381469727,0.019999999552965164]),
                                                                                                  children : new MFNode([
                                                                                                    new Shape({
                                                                                                      USE : new SFString("jointbox")})])}),

                                                                                                new HAnimSegment({
                                                                                                  name : new SFString("r_clavicle"),
                                                                                                  DEF : new SFString("Joe_r_clavicle"),
                                                                                                  children : new MFNode([
                                                                                                    new Shape({
                                                                                                      geometry : new SFNode(
                                                                                                        new IndexedLineSet({
                                                                                                          coordIndex : new MFInt32([0,1,-1]),
                                                                                                          coord : new SFNode(
                                                                                                            new Coordinate({
                                                                                                              point : new MFVec3f([-0.029999999329447746,1.4600000381469727,0.019999999552965164,-0.09000000357627869,1.409999966621399,-0.09000000357627869])}))})),
                                                                                                      appearance : new SFNode(
                                                                                                        new Appearance({
                                                                                                          USE : new SFString("SegmentLine")}))}),

                                                                                                    new HAnimSite({
                                                                                                      name : new SFString("r_clavicale"),
                                                                                                      DEF : new SFString("Joe_r_clavicale"),
                                                                                                      translation : new SFVec3f([-0.029999999329447746,1.4600000381469727,0.03500000014901161]),
                                                                                                      children : new MFNode([
                                                                                                        new Shape({
                                                                                                          USE : new SFString("sitebox")})])})])}),

                                                                                                new HAnimJoint({
                                                                                                  name : new SFString("r_acromioclavicular"),
                                                                                                  DEF : new SFString("Joe_r_acromioclavicular"),
                                                                                                  center : new SFVec3f([-0.09000000357627869,1.409999966621399,-0.10999999940395355]),
                                                                                                  skinCoordIndex : new MFInt32([77,29]),
                                                                                                  skinCoordWeight : new MFFloat([1,0.8999999761581421]),
                                                                                                  ulimit : new MFFloat([0,0,0]),
                                                                                                  llimit : new MFFloat([0,0,0]),
                                                                                                  children : new MFNode([
                                                                                                    new Transform({
                                                                                                      translation : new SFVec3f([-0.09000000357627869,1.409999966621399,-0.09000000357627869]),
                                                                                                      children : new MFNode([
                                                                                                        new Shape({
                                                                                                          USE : new SFString("jointbox")})])}),

                                                                                                    new HAnimSegment({
                                                                                                      name : new SFString("r_scapula"),
                                                                                                      DEF : new SFString("Joe_r_scapula"),
                                                                                                      children : new MFNode([
                                                                                                        new Shape({
                                                                                                          geometry : new SFNode(
                                                                                                            new IndexedLineSet({
                                                                                                              coordIndex : new MFInt32([0,1,-1]),
                                                                                                              coord : new SFNode(
                                                                                                                new Coordinate({
                                                                                                                  point : new MFVec3f([-0.09000000357627869,1.409999966621399,-0.09000000357627869,-0.20000000298023224,1.440000057220459,-0.03999999910593033])}))})),
                                                                                                          appearance : new SFNode(
                                                                                                            new Appearance({
                                                                                                              USE : new SFString("SegmentLine")}))}),

                                                                                                        new HAnimSite({
                                                                                                          name : new SFString("r_acromion"),
                                                                                                          DEF : new SFString("Joe_r_acromion"),
                                                                                                          translation : new SFVec3f([-0.17800000309944153,1.4824999570846558,-0.0625]),
                                                                                                          children : new MFNode([
                                                                                                            new Shape({
                                                                                                              USE : new SFString("sitebox")})])}),

                                                                                                        new HAnimSite({
                                                                                                          name : new SFString("r_axilla_ant"),
                                                                                                          DEF : new SFString("Joe_r_axilla_ant"),
                                                                                                          translation : new SFVec3f([-0.17000000178813934,1.3799999952316284,0.007000000216066837]),
                                                                                                          children : new MFNode([
                                                                                                            new Shape({
                                                                                                              USE : new SFString("sitebox")})])}),

                                                                                                        new HAnimSite({
                                                                                                          name : new SFString("r_axilla_post"),
                                                                                                          DEF : new SFString("Joe_r_axilla_post"),
                                                                                                          translation : new SFVec3f([-0.1599999964237213,1.3799999952316284,-0.12700000405311584]),
                                                                                                          children : new MFNode([
                                                                                                            new Shape({
                                                                                                              USE : new SFString("sitebox")})])}),

                                                                                                        new Transform({
                                                                                                          translation : new SFVec3f([-0.10999999940395355,1.4270000457763672,-0.13750000298023224]),
                                                                                                          children : new MFNode([
                                                                                                            new Shape({
                                                                                                              USE : new SFString("skinsphere")})])})])}),

                                                                                                    new HAnimJoint({
                                                                                                      name : new SFString("r_shoulder"),
                                                                                                      DEF : new SFString("Joe_r_shoulder"),
                                                                                                      center : new SFVec3f([-0.20000000298023224,1.440000057220459,-0.03999999910593033]),
                                                                                                      skinCoordIndex : new MFInt32([29,30,32,78,218,219,220,221,86,88]),
                                                                                                      skinCoordWeight : new MFFloat([0.10000000149011612,1,1,1,1,1,1,1,0.30000001192092896,0.20000000298023224]),
                                                                                                      ulimit : new MFFloat([0,0,0]),
                                                                                                      llimit : new MFFloat([0,0,0]),
                                                                                                      children : new MFNode([
                                                                                                        new Transform({
                                                                                                          translation : new SFVec3f([-0.20000000298023224,1.440000057220459,-0.03999999910593033]),
                                                                                                          children : new MFNode([
                                                                                                            new Shape({
                                                                                                              USE : new SFString("jointbox")})])}),

                                                                                                        new HAnimSegment({
                                                                                                          name : new SFString("r_upperarm"),
                                                                                                          DEF : new SFString("Joe_r_upperarm"),
                                                                                                          children : new MFNode([
                                                                                                            new Shape({
                                                                                                              geometry : new SFNode(
                                                                                                                new IndexedLineSet({
                                                                                                                  coordIndex : new MFInt32([0,1,-1]),
                                                                                                                  coord : new SFNode(
                                                                                                                    new Coordinate({
                                                                                                                      point : new MFVec3f([-0.20000000298023224,1.440000057220459,-0.03999999910593033,-0.20000000298023224,1.138800024986267,-0.03999999910593033])}))})),
                                                                                                              appearance : new SFNode(
                                                                                                                new Appearance({
                                                                                                                  USE : new SFString("SegmentLine")}))}),

                                                                                                            new HAnimSite({
                                                                                                              name : new SFString("r_humeral_medial_epicn"),
                                                                                                              DEF : new SFString("Joe_r_humeral_medial_epicn"),
                                                                                                              translation : new SFVec3f([-0.16500000655651093,1.138800024986267,-0.03999999910593033]),
                                                                                                              children : new MFNode([
                                                                                                                new Shape({
                                                                                                                  USE : new SFString("sitebox")})])}),

                                                                                                            new HAnimSite({
                                                                                                              name : new SFString("r_radiale"),
                                                                                                              DEF : new SFString("Joe_r_radiale"),
                                                                                                              translation : new SFVec3f([-0.23000000417232513,1.1330000162124634,-0.054999999701976776]),
                                                                                                              children : new MFNode([
                                                                                                                new Shape({
                                                                                                                  USE : new SFString("sitebox")})])}),

                                                                                                            new HAnimSite({
                                                                                                              name : new SFString("r_humeral_lateral_epicn"),
                                                                                                              DEF : new SFString("Joe_r_humeral_lateral_epicn"),
                                                                                                              translation : new SFVec3f([-0.24400000274181366,1.138800024986267,-0.03999999910593033]),
                                                                                                              children : new MFNode([
                                                                                                                new Shape({
                                                                                                                  USE : new SFString("sitebox")})])}),

                                                                                                            new Transform({
                                                                                                              translation : new SFVec3f([-0.17800000309944153,1.4824999570846558,-0.0625]),
                                                                                                              children : new MFNode([
                                                                                                                new Shape({
                                                                                                                  USE : new SFString("skinsphere")})])}),

                                                                                                            new Transform({
                                                                                                              translation : new SFVec3f([-0.17000000178813934,1.3799999952316284,0.007000000216066837]),
                                                                                                              children : new MFNode([
                                                                                                                new Shape({
                                                                                                                  USE : new SFString("skinsphere")})])}),

                                                                                                            new Transform({
                                                                                                              translation : new SFVec3f([-0.1599999964237213,1.3799999952316284,-0.12700000405311584]),
                                                                                                              children : new MFNode([
                                                                                                                new Shape({
                                                                                                                  USE : new SFString("skinsphere")})])}),

                                                                                                            new Transform({
                                                                                                              translation : new SFVec3f([-0.23499999940395355,1.4199999570846558,-0.0625]),
                                                                                                              children : new MFNode([
                                                                                                                new Shape({
                                                                                                                  USE : new SFString("skinsphere")})])}),

                                                                                                            new Transform({
                                                                                                              translation : new SFVec3f([-0.23000000417232513,1.2350000143051147,-0.03999999910593033]),
                                                                                                              children : new MFNode([
                                                                                                                new Shape({
                                                                                                                  USE : new SFString("skinsphere")})])}),

                                                                                                            new Transform({
                                                                                                              translation : new SFVec3f([-0.1599999964237213,1.2300000190734863,-0.03999999910593033]),
                                                                                                              children : new MFNode([
                                                                                                                new Shape({
                                                                                                                  USE : new SFString("skinsphere")})])}),

                                                                                                            new Transform({
                                                                                                              translation : new SFVec3f([-0.20000000298023224,1.2300000190734863,-0.10499999672174454]),
                                                                                                              children : new MFNode([
                                                                                                                new Shape({
                                                                                                                  USE : new SFString("skinsphere")})])}),

                                                                                                            new Transform({
                                                                                                              translation : new SFVec3f([-0.20000000298023224,1.2350000143051147,0.019999999552965164]),
                                                                                                              children : new MFNode([
                                                                                                                new Shape({
                                                                                                                  USE : new SFString("skinsphere")})])})])}),

                                                                                                        new HAnimJoint({
                                                                                                          name : new SFString("r_elbow"),
                                                                                                          DEF : new SFString("Joe_r_elbow"),
                                                                                                          center : new SFVec3f([-0.20000000298023224,1.138800024986267,-0.03999999910593033]),
                                                                                                          skinCoordIndex : new MFInt32([33,34,35,225,226,227,228,229,231,232,233,234]),
                                                                                                          skinCoordWeight : new MFFloat([1,1,1,1,1,1,1,1,1,1,1,1]),
                                                                                                          ulimit : new MFFloat([0,0,0]),
                                                                                                          llimit : new MFFloat([0,0,0]),
                                                                                                          children : new MFNode([
                                                                                                            new Transform({
                                                                                                              translation : new SFVec3f([-0.20000000298023224,1.138800024986267,-0.03999999910593033]),
                                                                                                              children : new MFNode([
                                                                                                                new Shape({
                                                                                                                  USE : new SFString("jointbox")})])}),

                                                                                                            new HAnimSegment({
                                                                                                              name : new SFString("r_forearm"),
                                                                                                              DEF : new SFString("Joe_r_forearm"),
                                                                                                              children : new MFNode([
                                                                                                                new Shape({
                                                                                                                  geometry : new SFNode(
                                                                                                                    new IndexedLineSet({
                                                                                                                      coordIndex : new MFInt32([0,1,-1]),
                                                                                                                      coord : new SFNode(
                                                                                                                        new Coordinate({
                                                                                                                          point : new MFVec3f([-0.20000000298023224,1.138800024986267,-0.03999999910593033,-0.20000000298023224,0.8899999856948853,-0.03999999910593033])}))})),
                                                                                                                  appearance : new SFNode(
                                                                                                                    new Appearance({
                                                                                                                      USE : new SFString("SegmentLine")}))}),

                                                                                                                new HAnimSite({
                                                                                                                  name : new SFString("r_radial_styloid"),
                                                                                                                  DEF : new SFString("Joe_r_radial_styloid"),
                                                                                                                  translation : new SFVec3f([-0.20000000298023224,0.8999999761581421,-0.014999999664723873]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Shape({
                                                                                                                      USE : new SFString("sitebox")})])}),

                                                                                                                new HAnimSite({
                                                                                                                  name : new SFString("r_olecranon"),
                                                                                                                  DEF : new SFString("Joe_r_olecranon"),
                                                                                                                  translation : new SFVec3f([-0.20000000298023224,1.138800024986267,-0.07999999821186066]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Shape({
                                                                                                                      USE : new SFString("sitebox")})])}),

                                                                                                                new Transform({
                                                                                                                  translation : new SFVec3f([-0.20000000298023224,1.138800024986267,0.013000000268220901]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Shape({
                                                                                                                      USE : new SFString("skinsphere")})])}),

                                                                                                                new Transform({
                                                                                                                  translation : new SFVec3f([-0.22499999403953552,1,-0.009999999776482582]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Shape({
                                                                                                                      USE : new SFString("skinsphere")})])}),

                                                                                                                new Transform({
                                                                                                                  translation : new SFVec3f([-0.22499999403953552,1,-0.07000000029802322]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Shape({
                                                                                                                      USE : new SFString("skinsphere")})])}),

                                                                                                                new Transform({
                                                                                                                  translation : new SFVec3f([-0.1850000023841858,1,-0.009999999776482582]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Shape({
                                                                                                                      USE : new SFString("skinsphere")})])}),

                                                                                                                new Transform({
                                                                                                                  translation : new SFVec3f([-0.1850000023841858,1,-0.07000000029802322]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Shape({
                                                                                                                      USE : new SFString("skinsphere")})])})])}),

                                                                                                            new HAnimJoint({
                                                                                                              name : new SFString("r_wrist"),
                                                                                                              DEF : new SFString("Joe_r_wrist"),
                                                                                                              center : new SFVec3f([-0.20000000298023224,0.8899999856948853,-0.03999999910593033]),
                                                                                                              skinCoordIndex : new MFInt32([235,236,237,238,239,240,241,242]),
                                                                                                              skinCoordWeight : new MFFloat([1,1,1,1,1,1,1,1]),
                                                                                                              ulimit : new MFFloat([0,0,0]),
                                                                                                              llimit : new MFFloat([0,0,0]),
                                                                                                              children : new MFNode([
                                                                                                                new Transform({
                                                                                                                  translation : new SFVec3f([-0.20000000298023224,0.8899999856948853,-0.03999999910593033]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Shape({
                                                                                                                      USE : new SFString("jointbox")})])}),

                                                                                                                new HAnimSegment({
                                                                                                                  name : new SFString("r_hand"),
                                                                                                                  DEF : new SFString("Joe_r_hand"),
                                                                                                                  children : new MFNode([
                                                                                                                    new Shape({
                                                                                                                      geometry : new SFNode(
                                                                                                                        new IndexedLineSet({
                                                                                                                          coordIndex : new MFInt32([0,1,-1,0,2,-1,0,3,-1,0,4,-1,0,5,-1]),
                                                                                                                          coord : new SFNode(
                                                                                                                            new Coordinate({
                                                                                                                              point : new MFVec3f([-0.20000000298023224,0.8899999856948853,-0.03999999910593033,-0.20000000298023224,0.8500000238418579,0,-0.20000000298023224,0.8399999737739563,-0.014999999664723873,-0.20000000298023224,0.8349999785423279,-0.03999999910593033,-0.20000000298023224,0.8349999785423279,-0.06499999761581421,-0.20000000298023224,0.8399999737739563,-0.08500000089406967])}))})),
                                                                                                                      appearance : new SFNode(
                                                                                                                        new Appearance({
                                                                                                                          USE : new SFString("SegmentLine")}))}),

                                                                                                                    new HAnimSite({
                                                                                                                      name : new SFString("r_ulnar_styloid"),
                                                                                                                      DEF : new SFString("Joe_r_ulnar_styloid"),
                                                                                                                      translation : new SFVec3f([-0.20000000298023224,0.8999999761581421,-0.08500000089406967]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          USE : new SFString("sitebox")})])})])}),

                                                                                                                new HAnimJoint({
                                                                                                                  name : new SFString("r_thumb1"),
                                                                                                                  DEF : new SFString("Joe_r_thumb1"),
                                                                                                                  center : new SFVec3f([-0.20000000298023224,0.8500000238418579,0]),
                                                                                                                  skinCoordIndex : new MFInt32([243,244]),
                                                                                                                  skinCoordWeight : new MFFloat([1,1]),
                                                                                                                  ulimit : new MFFloat([0,0,0]),
                                                                                                                  llimit : new MFFloat([0,0,0]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Transform({
                                                                                                                      translation : new SFVec3f([-0.20000000298023224,0.8500000238418579,0]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          USE : new SFString("jointbox")})])}),

                                                                                                                    new HAnimSegment({
                                                                                                                      name : new SFString("r_thumb_metacarpal"),
                                                                                                                      DEF : new SFString("Joe_r_thumb_metacarpal"),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          geometry : new SFNode(
                                                                                                                            new IndexedLineSet({
                                                                                                                              coordIndex : new MFInt32([0,1,-1]),
                                                                                                                              coord : new SFNode(
                                                                                                                                new Coordinate({
                                                                                                                                  point : new MFVec3f([-0.20000000298023224,0.8500000238418579,0,-0.20000000298023224,0.8199999928474426,0.029999999329447746])}))})),
                                                                                                                          appearance : new SFNode(
                                                                                                                            new Appearance({
                                                                                                                              USE : new SFString("SegmentLine")}))})])}),

                                                                                                                    new HAnimJoint({
                                                                                                                      name : new SFString("r_thumb2"),
                                                                                                                      DEF : new SFString("Joe_r_thumb2"),
                                                                                                                      center : new SFVec3f([-0.20000000298023224,0.8199999928474426,0.029999999329447746]),
                                                                                                                      skinCoordIndex : new MFInt32([254,255,256,257,258,259]),
                                                                                                                      skinCoordWeight : new MFFloat([0.5,0.5,0.5,1,1,1]),
                                                                                                                      ulimit : new MFFloat([0,0,0]),
                                                                                                                      llimit : new MFFloat([0,0,0]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Transform({
                                                                                                                          translation : new SFVec3f([-0.20000000298023224,0.8199999928474426,0.029999999329447746]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              USE : new SFString("jointbox")})])}),

                                                                                                                        new HAnimSegment({
                                                                                                                          name : new SFString("r_thumb_proximal"),
                                                                                                                          DEF : new SFString("Joe_r_thumb_proximal"),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              geometry : new SFNode(
                                                                                                                                new IndexedLineSet({
                                                                                                                                  coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                  coord : new SFNode(
                                                                                                                                    new Coordinate({
                                                                                                                                      point : new MFVec3f([-0.20000000298023224,0.8199999928474426,0.029999999329447746,-0.20000000298023224,0.800000011920929,0.05000000074505806])}))})),
                                                                                                                              appearance : new SFNode(
                                                                                                                                new Appearance({
                                                                                                                                  USE : new SFString("SegmentLine")}))})])}),

                                                                                                                        new HAnimJoint({
                                                                                                                          name : new SFString("r_thumb3"),
                                                                                                                          DEF : new SFString("Joe_r_thumb3"),
                                                                                                                          center : new SFVec3f([-0.20000000298023224,0.800000011920929,0.05000000074505806]),
                                                                                                                          skinCoordIndex : new MFInt32([260,261,262,263,264,265,266,267,268]),
                                                                                                                          skinCoordWeight : new MFFloat([1,1,1,1,1,1,1,1,1]),
                                                                                                                          ulimit : new MFFloat([0,0,0]),
                                                                                                                          llimit : new MFFloat([0,0,0]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Transform({
                                                                                                                              translation : new SFVec3f([-0.20000000298023224,0.800000011920929,0.05000000074505806]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  USE : new SFString("jointbox")})])}),

                                                                                                                            new Transform({
                                                                                                                              DEF : new SFString("Thumbnail"),
                                                                                                                              translation : new SFVec3f([-0.20000000298023224,0.7850000262260437,0.07500000298023224]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  USE : new SFString("sitebox")})])}),

                                                                                                                            new HAnimSegment({
                                                                                                                              name : new SFString("r_thumb_distal"),
                                                                                                                              DEF : new SFString("Joe_r_thumb_distal"),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  geometry : new SFNode(
                                                                                                                                    new IndexedLineSet({
                                                                                                                                      coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                      coord : new SFNode(
                                                                                                                                        new Coordinate({
                                                                                                                                          point : new MFVec3f([-0.20000000298023224,0.800000011920929,0.05000000074505806,-0.20000000298023224,0.7799999713897705,0.07000000029802322])}))})),
                                                                                                                                  appearance : new SFNode(
                                                                                                                                    new Appearance({
                                                                                                                                      USE : new SFString("SegmentLine")}))}),

                                                                                                                                new HAnimSite({
                                                                                                                                  name : new SFString("r_thumb_distal_tip"),
                                                                                                                                  DEF : new SFString("Joe_r_thumb_distal_tip"),
                                                                                                                                  translation : new SFVec3f([-0.20000000298023224,0.7799999713897705,0.07000000029802322]),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Shape({
                                                                                                                                      USE : new SFString("sitebox")})])})])})])})])})])}),

                                                                                                                new HAnimJoint({
                                                                                                                  name : new SFString("r_index0"),
                                                                                                                  DEF : new SFString("Joe_r_index0"),
                                                                                                                  center : new SFVec3f([-0.20000000298023224,0.8399999737739563,-0.014999999664723873]),
                                                                                                                  skinCoordIndex : new MFInt32([245,246]),
                                                                                                                  skinCoordWeight : new MFFloat([1,1]),
                                                                                                                  ulimit : new MFFloat([0,0,0]),
                                                                                                                  llimit : new MFFloat([0,0,0]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Transform({
                                                                                                                      translation : new SFVec3f([-0.20000000298023224,0.8399999737739563,-0.014999999664723873]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          USE : new SFString("jointbox")})])}),

                                                                                                                    new HAnimSegment({
                                                                                                                      name : new SFString("r_index_metacarpal"),
                                                                                                                      DEF : new SFString("Joe_r_index_metacarpal"),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          geometry : new SFNode(
                                                                                                                            new IndexedLineSet({
                                                                                                                              coordIndex : new MFInt32([0,1,-1]),
                                                                                                                              coord : new SFNode(
                                                                                                                                new Coordinate({
                                                                                                                                  point : new MFVec3f([-0.20000000298023224,0.8399999737739563,-0.014999999664723873,-0.20000000298023224,0.7929999828338623,-0.014999999664723873])}))})),
                                                                                                                          appearance : new SFNode(
                                                                                                                            new Appearance({
                                                                                                                              USE : new SFString("SegmentLine")}))}),

                                                                                                                        new HAnimSite({
                                                                                                                          name : new SFString("r_metacarpal_pha2"),
                                                                                                                          DEF : new SFString("Joe_r_metacarpal_pha2"),
                                                                                                                          translation : new SFVec3f([-0.20000000298023224,0.7929999828338623,-0.004999999888241291]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              USE : new SFString("sitebox")})])})])}),

                                                                                                                    new HAnimJoint({
                                                                                                                      name : new SFString("r_index1"),
                                                                                                                      DEF : new SFString("Joe_r_index1"),
                                                                                                                      center : new SFVec3f([-0.20000000298023224,0.7929999828338623,-0.014999999664723873]),
                                                                                                                      skinCoordIndex : new MFInt32([254,255,256,269,270,271,279]),
                                                                                                                      skinCoordWeight : new MFFloat([0.5,0.5,0.5,1,1,1,0.5]),
                                                                                                                      ulimit : new MFFloat([0,0,0]),
                                                                                                                      llimit : new MFFloat([0,0,0]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Transform({
                                                                                                                          translation : new SFVec3f([-0.20000000298023224,0.7929999828338623,-0.014999999664723873]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              USE : new SFString("jointbox")})])}),

                                                                                                                        new HAnimSegment({
                                                                                                                          name : new SFString("r_index_proximal"),
                                                                                                                          DEF : new SFString("Joe_r_index_proximal"),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              geometry : new SFNode(
                                                                                                                                new IndexedLineSet({
                                                                                                                                  coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                  coord : new SFNode(
                                                                                                                                    new Coordinate({
                                                                                                                                      point : new MFVec3f([-0.20000000298023224,0.7929999828338623,-0.014999999664723873,-0.20000000298023224,0.7450000047683716,-0.014999999664723873])}))})),
                                                                                                                              appearance : new SFNode(
                                                                                                                                new Appearance({
                                                                                                                                  USE : new SFString("SegmentLine")}))})])}),

                                                                                                                        new HAnimJoint({
                                                                                                                          name : new SFString("r_index2"),
                                                                                                                          DEF : new SFString("Joe_r_index2"),
                                                                                                                          center : new SFVec3f([-0.20000000298023224,0.7450000047683716,-0.014999999664723873]),
                                                                                                                          skinCoordIndex : new MFInt32([282,283,284,285]),
                                                                                                                          skinCoordWeight : new MFFloat([1,1,1,1]),
                                                                                                                          ulimit : new MFFloat([0,0,0]),
                                                                                                                          llimit : new MFFloat([0,0,0]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Transform({
                                                                                                                              translation : new SFVec3f([-0.20000000298023224,0.7450000047683716,-0.014999999664723873]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  USE : new SFString("jointbox")})])}),

                                                                                                                            new HAnimSegment({
                                                                                                                              name : new SFString("r_index_middle"),
                                                                                                                              DEF : new SFString("Joe_r_index_middle"),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  geometry : new SFNode(
                                                                                                                                    new IndexedLineSet({
                                                                                                                                      coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                      coord : new SFNode(
                                                                                                                                        new Coordinate({
                                                                                                                                          point : new MFVec3f([-0.20000000298023224,0.7450000047683716,-0.014999999664723873,-0.20000000298023224,0.7200000286102295,-0.014999999664723873])}))})),
                                                                                                                                  appearance : new SFNode(
                                                                                                                                    new Appearance({
                                                                                                                                      USE : new SFString("SegmentLine")}))})])}),

                                                                                                                            new HAnimJoint({
                                                                                                                              name : new SFString("r_index3"),
                                                                                                                              DEF : new SFString("Joe_r_index3"),
                                                                                                                              center : new SFVec3f([-0.20000000298023224,0.7200000286102295,-0.014999999664723873]),
                                                                                                                              skinCoordIndex : new MFInt32([286,287,288,289,290,291,292,293,294]),
                                                                                                                              skinCoordWeight : new MFFloat([1,1,1,1,1,1,1,1,1]),
                                                                                                                              ulimit : new MFFloat([0,0,0]),
                                                                                                                              llimit : new MFFloat([0,0,0]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Transform({
                                                                                                                                  translation : new SFVec3f([-0.20000000298023224,0.7200000286102295,-0.014999999664723873]),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Shape({
                                                                                                                                      USE : new SFString("jointbox")})])}),

                                                                                                                                new HAnimSegment({
                                                                                                                                  name : new SFString("r_index_distal"),
                                                                                                                                  DEF : new SFString("Joe_r_index_distal"),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Shape({
                                                                                                                                      geometry : new SFNode(
                                                                                                                                        new IndexedLineSet({
                                                                                                                                          coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                          coord : new SFNode(
                                                                                                                                            new Coordinate({
                                                                                                                                              point : new MFVec3f([-0.20000000298023224,0.7200000286102295,-0.014999999664723873,-0.20000000298023224,0.6949999928474426,-0.014999999664723873])}))})),
                                                                                                                                      appearance : new SFNode(
                                                                                                                                        new Appearance({
                                                                                                                                          USE : new SFString("SegmentLine")}))}),

                                                                                                                                    new HAnimSite({
                                                                                                                                      name : new SFString("r_index_distal_tip"),
                                                                                                                                      DEF : new SFString("Joe_r_index_distal_tip"),
                                                                                                                                      translation : new SFVec3f([-0.20000000298023224,0.6949999928474426,-0.014999999664723873]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("sitebox")})])})])})])})])})])})])}),

                                                                                                                new HAnimJoint({
                                                                                                                  name : new SFString("r_middle0"),
                                                                                                                  DEF : new SFString("Joe_r_middle0"),
                                                                                                                  center : new SFVec3f([-0.20000000298023224,0.8349999785423279,-0.03999999910593033]),
                                                                                                                  skinCoordIndex : new MFInt32([247,248]),
                                                                                                                  skinCoordWeight : new MFFloat([1,1]),
                                                                                                                  ulimit : new MFFloat([0,0,0]),
                                                                                                                  llimit : new MFFloat([0,0,0]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Transform({
                                                                                                                      translation : new SFVec3f([-0.20000000298023224,0.8349999785423279,-0.03999999910593033]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          USE : new SFString("jointbox")})])}),

                                                                                                                    new HAnimSegment({
                                                                                                                      name : new SFString("r_middle_metacarpal"),
                                                                                                                      DEF : new SFString("Joe_r_middle_metacarpal"),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          geometry : new SFNode(
                                                                                                                            new IndexedLineSet({
                                                                                                                              coordIndex : new MFInt32([0,1,-1]),
                                                                                                                              coord : new SFNode(
                                                                                                                                new Coordinate({
                                                                                                                                  point : new MFVec3f([-0.20000000298023224,0.8349999785423279,-0.03999999910593033,-0.20000000298023224,0.7879999876022339,-0.03999999910593033])}))})),
                                                                                                                          appearance : new SFNode(
                                                                                                                            new Appearance({
                                                                                                                              USE : new SFString("SegmentLine")}))})])}),

                                                                                                                    new HAnimJoint({
                                                                                                                      name : new SFString("r_middle1"),
                                                                                                                      DEF : new SFString("Joe_r_middle1"),
                                                                                                                      center : new SFVec3f([-0.20000000298023224,0.7879999876022339,-0.03999999910593033]),
                                                                                                                      skinCoordIndex : new MFInt32([272,273,279,280]),
                                                                                                                      skinCoordWeight : new MFFloat([1,1,0.5,0.5]),
                                                                                                                      ulimit : new MFFloat([0,0,0]),
                                                                                                                      llimit : new MFFloat([0,0,0]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Transform({
                                                                                                                          translation : new SFVec3f([-0.20000000298023224,0.7879999876022339,-0.03999999910593033]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              USE : new SFString("jointbox")})])}),

                                                                                                                        new HAnimSegment({
                                                                                                                          name : new SFString("r_middle_proximal"),
                                                                                                                          DEF : new SFString("Joe_r_middle_proximal"),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              geometry : new SFNode(
                                                                                                                                new IndexedLineSet({
                                                                                                                                  coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                  coord : new SFNode(
                                                                                                                                    new Coordinate({
                                                                                                                                      point : new MFVec3f([-0.20000000298023224,0.7879999876022339,-0.03999999910593033,-0.20000000298023224,0.7400000095367432,-0.03999999910593033])}))})),
                                                                                                                              appearance : new SFNode(
                                                                                                                                new Appearance({
                                                                                                                                  USE : new SFString("SegmentLine")}))})])}),

                                                                                                                        new HAnimJoint({
                                                                                                                          name : new SFString("r_middle2"),
                                                                                                                          DEF : new SFString("Joe_r_middle2"),
                                                                                                                          center : new SFVec3f([-0.20000000298023224,0.7400000095367432,-0.03999999910593033]),
                                                                                                                          skinCoordIndex : new MFInt32([295,296,297,298]),
                                                                                                                          skinCoordWeight : new MFFloat([1,1,1,1]),
                                                                                                                          ulimit : new MFFloat([0,0,0]),
                                                                                                                          llimit : new MFFloat([0,0,0]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Transform({
                                                                                                                              translation : new SFVec3f([-0.20000000298023224,0.7400000095367432,-0.03999999910593033]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  USE : new SFString("jointbox")})])}),

                                                                                                                            new HAnimSegment({
                                                                                                                              name : new SFString("r_middle_middle"),
                                                                                                                              DEF : new SFString("Joe_r_middle_middle"),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  geometry : new SFNode(
                                                                                                                                    new IndexedLineSet({
                                                                                                                                      coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                      coord : new SFNode(
                                                                                                                                        new Coordinate({
                                                                                                                                          point : new MFVec3f([-0.20000000298023224,0.7400000095367432,-0.03999999910593033,-0.20000000298023224,0.7142000198364258,-0.03999999910593033])}))})),
                                                                                                                                  appearance : new SFNode(
                                                                                                                                    new Appearance({
                                                                                                                                      USE : new SFString("SegmentLine")}))})])}),

                                                                                                                            new HAnimJoint({
                                                                                                                              name : new SFString("r_middle3"),
                                                                                                                              DEF : new SFString("Joe_r_middle3"),
                                                                                                                              center : new SFVec3f([-0.20000000298023224,0.7142000198364258,-0.03999999910593033]),
                                                                                                                              skinCoordIndex : new MFInt32([299,300,301,302,303,304,305,306,307]),
                                                                                                                              skinCoordWeight : new MFFloat([1,1,1,1,1,1,1,1,1]),
                                                                                                                              ulimit : new MFFloat([0,0,0]),
                                                                                                                              llimit : new MFFloat([0,0,0]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Transform({
                                                                                                                                  translation : new SFVec3f([-0.20000000298023224,0.7142000198364258,-0.03999999910593033]),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Shape({
                                                                                                                                      USE : new SFString("jointbox")})])}),

                                                                                                                                new HAnimSegment({
                                                                                                                                  name : new SFString("r_middle_distal"),
                                                                                                                                  DEF : new SFString("Joe_r_middle_distal"),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Shape({
                                                                                                                                      geometry : new SFNode(
                                                                                                                                        new IndexedLineSet({
                                                                                                                                          coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                          coord : new SFNode(
                                                                                                                                            new Coordinate({
                                                                                                                                              point : new MFVec3f([-0.20000000298023224,0.7142000198364258,-0.03999999910593033,-0.20000000298023224,0.6758000254631042,-0.03999999910593033])}))})),
                                                                                                                                      appearance : new SFNode(
                                                                                                                                        new Appearance({
                                                                                                                                          USE : new SFString("SegmentLine")}))}),

                                                                                                                                    new HAnimSite({
                                                                                                                                      name : new SFString("r_dactylion"),
                                                                                                                                      DEF : new SFString("Joe_r_dactylion"),
                                                                                                                                      translation : new SFVec3f([-0.20000000298023224,0.6800000071525574,-0.03999999910593033]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("sitebox")})])}),

                                                                                                                                    new HAnimSite({
                                                                                                                                      name : new SFString("r_middle_distal_tip"),
                                                                                                                                      DEF : new SFString("Joe_r_middle_distal_tip"),
                                                                                                                                      translation : new SFVec3f([-0.20000000298023224,0.6800000071525574,-0.03999999910593033]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("sitebox")})])})])})])})])})])})])}),

                                                                                                                new HAnimJoint({
                                                                                                                  name : new SFString("r_ring0"),
                                                                                                                  DEF : new SFString("Joe_r_ring0"),
                                                                                                                  center : new SFVec3f([-0.20000000298023224,0.8349999785423279,-0.06499999761581421]),
                                                                                                                  skinCoordIndex : new MFInt32([249,250]),
                                                                                                                  skinCoordWeight : new MFFloat([1,1]),
                                                                                                                  ulimit : new MFFloat([0,0,0]),
                                                                                                                  llimit : new MFFloat([0,0,0]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Transform({
                                                                                                                      translation : new SFVec3f([-0.20000000298023224,0.8349999785423279,-0.06499999761581421]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          USE : new SFString("jointbox")})])}),

                                                                                                                    new HAnimSegment({
                                                                                                                      name : new SFString("r_ring_metacarpal"),
                                                                                                                      DEF : new SFString("Joe_r_ring_metacarpal"),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          geometry : new SFNode(
                                                                                                                            new IndexedLineSet({
                                                                                                                              coordIndex : new MFInt32([0,1,-1]),
                                                                                                                              coord : new SFNode(
                                                                                                                                new Coordinate({
                                                                                                                                  point : new MFVec3f([-0.20000000298023224,0.8349999785423279,-0.06499999761581421,-0.20000000298023224,0.7929999828338623,-0.06499999761581421])}))})),
                                                                                                                          appearance : new SFNode(
                                                                                                                            new Appearance({
                                                                                                                              USE : new SFString("SegmentLine")}))})])}),

                                                                                                                    new HAnimJoint({
                                                                                                                      name : new SFString("r_ring1"),
                                                                                                                      DEF : new SFString("Joe_r_ring1"),
                                                                                                                      center : new SFVec3f([-0.20000000298023224,0.7929999828338623,-0.06499999761581421]),
                                                                                                                      skinCoordIndex : new MFInt32([274,275,280,281]),
                                                                                                                      skinCoordWeight : new MFFloat([1,1,0.5,0.5]),
                                                                                                                      ulimit : new MFFloat([0,0,0]),
                                                                                                                      llimit : new MFFloat([0,0,0]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Transform({
                                                                                                                          translation : new SFVec3f([-0.20000000298023224,0.7929999828338623,-0.06499999761581421]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              USE : new SFString("jointbox")})])}),

                                                                                                                        new HAnimSegment({
                                                                                                                          name : new SFString("r_ring_proximal"),
                                                                                                                          DEF : new SFString("Joe_r_ring_proximal"),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              geometry : new SFNode(
                                                                                                                                new IndexedLineSet({
                                                                                                                                  coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                  coord : new SFNode(
                                                                                                                                    new Coordinate({
                                                                                                                                      point : new MFVec3f([-0.20000000298023224,0.7929999828338623,-0.06499999761581421,-0.20000000298023224,0.7400000095367432,-0.06499999761581421])}))})),
                                                                                                                              appearance : new SFNode(
                                                                                                                                new Appearance({
                                                                                                                                  USE : new SFString("SegmentLine")}))})])}),

                                                                                                                        new HAnimJoint({
                                                                                                                          name : new SFString("r_ring2"),
                                                                                                                          DEF : new SFString("Joe_r_ring2"),
                                                                                                                          center : new SFVec3f([-0.20000000298023224,0.7400000095367432,-0.06499999761581421]),
                                                                                                                          skinCoordIndex : new MFInt32([308,309,310,311]),
                                                                                                                          skinCoordWeight : new MFFloat([1,1,1,1]),
                                                                                                                          ulimit : new MFFloat([0,0,0]),
                                                                                                                          llimit : new MFFloat([0,0,0]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Transform({
                                                                                                                              translation : new SFVec3f([-0.20000000298023224,0.7400000095367432,-0.06499999761581421]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  USE : new SFString("jointbox")})])}),

                                                                                                                            new HAnimSegment({
                                                                                                                              name : new SFString("r_ring_middle"),
                                                                                                                              DEF : new SFString("Joe_r_ring_middle"),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  geometry : new SFNode(
                                                                                                                                    new IndexedLineSet({
                                                                                                                                      coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                      coord : new SFNode(
                                                                                                                                        new Coordinate({
                                                                                                                                          point : new MFVec3f([-0.20000000298023224,0.7400000095367432,-0.06499999761581421,-0.20000000298023224,0.7177000045776367,-0.06499999761581421])}))})),
                                                                                                                                  appearance : new SFNode(
                                                                                                                                    new Appearance({
                                                                                                                                      USE : new SFString("SegmentLine")}))})])}),

                                                                                                                            new HAnimJoint({
                                                                                                                              name : new SFString("r_ring3"),
                                                                                                                              DEF : new SFString("Joe_r_ring3"),
                                                                                                                              center : new SFVec3f([-0.20000000298023224,0.7177000045776367,-0.06499999761581421]),
                                                                                                                              skinCoordIndex : new MFInt32([312,313,314,315,316,317,318,319,320]),
                                                                                                                              skinCoordWeight : new MFFloat([1,1,1,1,1,1,1,1,1]),
                                                                                                                              ulimit : new MFFloat([0,0,0]),
                                                                                                                              llimit : new MFFloat([0,0,0]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Transform({
                                                                                                                                  translation : new SFVec3f([-0.20000000298023224,0.7177000045776367,-0.06499999761581421]),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Shape({
                                                                                                                                      USE : new SFString("jointbox")})])}),

                                                                                                                                new HAnimSegment({
                                                                                                                                  name : new SFString("r_ring_distal"),
                                                                                                                                  DEF : new SFString("Joe_r_ring_distal"),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Shape({
                                                                                                                                      geometry : new SFNode(
                                                                                                                                        new IndexedLineSet({
                                                                                                                                          coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                          coord : new SFNode(
                                                                                                                                            new Coordinate({
                                                                                                                                              point : new MFVec3f([-0.20000000298023224,0.7177000045776367,-0.06499999761581421,-0.20000000298023224,0.6949999928474426,-0.06499999761581421])}))})),
                                                                                                                                      appearance : new SFNode(
                                                                                                                                        new Appearance({
                                                                                                                                          USE : new SFString("SegmentLine")}))}),

                                                                                                                                    new HAnimSite({
                                                                                                                                      name : new SFString("r_ring_distal_tip"),
                                                                                                                                      DEF : new SFString("Joe_r_ring_distal_tip"),
                                                                                                                                      translation : new SFVec3f([-0.20000000298023224,0.6949999928474426,-0.06499999761581421]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("sitebox")})])})])})])})])})])})])}),

                                                                                                                new HAnimJoint({
                                                                                                                  name : new SFString("r_pinky0"),
                                                                                                                  DEF : new SFString("Joe_r_pinky0"),
                                                                                                                  center : new SFVec3f([-0.20000000298023224,0.8399999737739563,-0.08500000089406967]),
                                                                                                                  skinCoordIndex : new MFInt32([251,252,253,281]),
                                                                                                                  skinCoordWeight : new MFFloat([1,1,1,0.5]),
                                                                                                                  ulimit : new MFFloat([0,0,0]),
                                                                                                                  llimit : new MFFloat([0,0,0]),
                                                                                                                  children : new MFNode([
                                                                                                                    new Transform({
                                                                                                                      translation : new SFVec3f([-0.20000000298023224,0.8399999737739563,-0.08500000089406967]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          USE : new SFString("jointbox")})])}),

                                                                                                                    new HAnimSegment({
                                                                                                                      name : new SFString("r_pinky_metacarpal"),
                                                                                                                      DEF : new SFString("Joe_r_pinky_metacarpal"),
                                                                                                                      children : new MFNode([
                                                                                                                        new Shape({
                                                                                                                          geometry : new SFNode(
                                                                                                                            new IndexedLineSet({
                                                                                                                              coordIndex : new MFInt32([0,1,-1]),
                                                                                                                              coord : new SFNode(
                                                                                                                                new Coordinate({
                                                                                                                                  point : new MFVec3f([-0.20000000298023224,0.8399999737739563,-0.08500000089406967,-0.20000000298023224,0.7900000214576721,-0.08500000089406967])}))})),
                                                                                                                          appearance : new SFNode(
                                                                                                                            new Appearance({
                                                                                                                              USE : new SFString("SegmentLine")}))}),

                                                                                                                        new HAnimSite({
                                                                                                                          name : new SFString("r_metacarpal_pha5"),
                                                                                                                          DEF : new SFString("Joe_r_metacarpal_pha5"),
                                                                                                                          translation : new SFVec3f([-0.20000000298023224,0.7900000214576721,-0.0949999988079071]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              USE : new SFString("sitebox")})])})])}),

                                                                                                                    new HAnimJoint({
                                                                                                                      name : new SFString("r_pinky1"),
                                                                                                                      DEF : new SFString("Joe_r_pinky1"),
                                                                                                                      center : new SFVec3f([-0.20000000298023224,0.7900000214576721,-0.08500000089406967]),
                                                                                                                      skinCoordIndex : new MFInt32([276,277,278]),
                                                                                                                      skinCoordWeight : new MFFloat([1,1,1]),
                                                                                                                      ulimit : new MFFloat([0,0,0]),
                                                                                                                      llimit : new MFFloat([0,0,0]),
                                                                                                                      children : new MFNode([
                                                                                                                        new Transform({
                                                                                                                          translation : new SFVec3f([-0.20000000298023224,0.7900000214576721,-0.08500000089406967]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              USE : new SFString("jointbox")})])}),

                                                                                                                        new HAnimSegment({
                                                                                                                          name : new SFString("r_pinky_proximal"),
                                                                                                                          DEF : new SFString("Joe_r_pinky_proximal"),
                                                                                                                          children : new MFNode([
                                                                                                                            new Shape({
                                                                                                                              geometry : new SFNode(
                                                                                                                                new IndexedLineSet({
                                                                                                                                  coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                  coord : new SFNode(
                                                                                                                                    new Coordinate({
                                                                                                                                      point : new MFVec3f([-0.20000000298023224,0.7900000214576721,-0.08500000089406967,-0.20000000298023224,0.7549999952316284,-0.08500000089406967])}))})),
                                                                                                                              appearance : new SFNode(
                                                                                                                                new Appearance({
                                                                                                                                  USE : new SFString("SegmentLine")}))})])}),

                                                                                                                        new HAnimJoint({
                                                                                                                          name : new SFString("r_pinky2"),
                                                                                                                          DEF : new SFString("Joe_r_pinky2"),
                                                                                                                          center : new SFVec3f([-0.20000000298023224,0.7549999952316284,-0.08500000089406967]),
                                                                                                                          skinCoordIndex : new MFInt32([321,322,323,324]),
                                                                                                                          skinCoordWeight : new MFFloat([1,1,1,1]),
                                                                                                                          ulimit : new MFFloat([0,0,0]),
                                                                                                                          llimit : new MFFloat([0,0,0]),
                                                                                                                          children : new MFNode([
                                                                                                                            new Transform({
                                                                                                                              translation : new SFVec3f([-0.20000000298023224,0.7549999952316284,-0.08500000089406967]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  USE : new SFString("jointbox")})])}),

                                                                                                                            new HAnimSegment({
                                                                                                                              name : new SFString("r_pinky_middle"),
                                                                                                                              DEF : new SFString("Joe_r_pinky_middle"),
                                                                                                                              children : new MFNode([
                                                                                                                                new Shape({
                                                                                                                                  geometry : new SFNode(
                                                                                                                                    new IndexedLineSet({
                                                                                                                                      coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                      coord : new SFNode(
                                                                                                                                        new Coordinate({
                                                                                                                                          point : new MFVec3f([-0.20000000298023224,0.7549999952316284,-0.08500000089406967,-0.20000000298023224,0.7350000143051147,-0.08500000089406967])}))})),
                                                                                                                                  appearance : new SFNode(
                                                                                                                                    new Appearance({
                                                                                                                                      USE : new SFString("SegmentLine")}))})])}),

                                                                                                                            new HAnimJoint({
                                                                                                                              name : new SFString("r_pinky3"),
                                                                                                                              DEF : new SFString("Joe_r_pinky3"),
                                                                                                                              center : new SFVec3f([-0.20000000298023224,0.7350000143051147,-0.09000000357627869]),
                                                                                                                              skinCoordIndex : new MFInt32([325,326,327,328,329,330,331,332,333]),
                                                                                                                              skinCoordWeight : new MFFloat([1,1,1,1,1,1,1,1,1]),
                                                                                                                              ulimit : new MFFloat([0,0,0]),
                                                                                                                              llimit : new MFFloat([0,0,0]),
                                                                                                                              children : new MFNode([
                                                                                                                                new Transform({
                                                                                                                                  translation : new SFVec3f([-0.20000000298023224,0.7350000143051147,-0.08500000089406967]),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Shape({
                                                                                                                                      USE : new SFString("jointbox")})])}),

                                                                                                                                new HAnimSegment({
                                                                                                                                  name : new SFString("r_pinky_distal"),
                                                                                                                                  DEF : new SFString("Joe_r_pinky_distal"),
                                                                                                                                  children : new MFNode([
                                                                                                                                    new Shape({
                                                                                                                                      geometry : new SFNode(
                                                                                                                                        new IndexedLineSet({
                                                                                                                                          coordIndex : new MFInt32([0,1,-1]),
                                                                                                                                          coord : new SFNode(
                                                                                                                                            new Coordinate({
                                                                                                                                              point : new MFVec3f([-0.20000000298023224,0.7350000143051147,-0.08500000089406967,-0.20000000298023224,0.7200000286102295,-0.08500000089406967])}))})),
                                                                                                                                      appearance : new SFNode(
                                                                                                                                        new Appearance({
                                                                                                                                          USE : new SFString("SegmentLine")}))}),

                                                                                                                                    new HAnimSite({
                                                                                                                                      name : new SFString("r_pinky_distal_tip"),
                                                                                                                                      DEF : new SFString("Joe_r_pinky_distal_tip"),
                                                                                                                                      translation : new SFVec3f([-0.20000000298023224,0.7200000286102295,-0.08500000089406967]),
                                                                                                                                      children : new MFNode([
                                                                                                                                        new Shape({
                                                                                                                                          USE : new SFString("sitebox")})])})])})])})])})])})])})])})])})])})])})])})])})])})])})])})])})])})])})])})])})])})])})])})])})])})])})])})])}),

                        new HAnimJoint({
                          USE : new SFString("Joe_sacroiliac")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_hip")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_knee")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_ankle")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_subtalar")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_midtarsal")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_metatarsal")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_hip")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_knee")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_ankle")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_subtalar")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_midtarsal")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_metatarsal")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vl5")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vl4")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vl3")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vl2")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vl1")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vt12")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vt11")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vt10")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vt9")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vt8")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vt7")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vt6")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vt5")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vt4")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vt3")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vt2")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vt1")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vc7")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vc6")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vc5")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vc4")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vc3")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vc2")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_vc1")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_skullbase")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_eyeball_joint")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_eyeball_joint")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_sternoclavicular")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_acromioclavicular")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_shoulder")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_elbow")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_wrist")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_thumb1")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_thumb2")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_thumb3")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_index0")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_index1")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_index2")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_index3")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_middle0")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_middle1")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_middle2")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_middle3")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_ring0")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_ring1")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_ring2")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_ring3")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_pinky0")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_pinky1")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_pinky2")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_l_pinky3")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_sternoclavicular")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_acromioclavicular")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_shoulder")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_elbow")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_wrist")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_thumb1")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_thumb2")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_thumb3")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_index0")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_index1")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_index2")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_index3")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_middle0")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_middle1")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_middle2")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_middle3")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_ring0")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_ring1")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_ring2")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_ring3")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_pinky0")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_pinky1")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_pinky2")}),

                        new HAnimJoint({
                          USE : new SFString("Joe_r_pinky3")}),
                      skin : new SFNode(
                        new Shape({
                          geometry : new SFNode(
                            new IndexedFaceSet({
                              coordIndex : new MFInt32([0,9,5,-1,0,7,9,-1,0,5,1,-1,1,5,2,-1,1,3,7,-1,2,4,3,-1,0,1,7,-1,1,2,3,-1,5,6,2,-1,7,3,8,-1,6,4,2,-1,3,4,8,-1,9,6,5,-1,9,7,8,-1,4,6,10,-1,4,10,12,-1,4,12,8,-1,10,11,12,-1,9,75,24,-1,9,24,74,-1,9,8,75,-1,9,74,6,-1,10,6,74,-1,12,75,8,-1,74,24,29,-1,24,77,29,-1,10,74,29,-1,77,32,29,-1,32,78,29,-1,78,30,29,-1,30,10,29,-1,41,24,75,-1,41,75,12,-1,41,12,42,-1,41,42,80,-1,41,80,44,-1,41,44,79,-1,41,79,24,-1,81,24,79,-1,81,77,24,-1,81,25,77,-1,81,79,25,-1,25,79,44,-1,25,32,77,-1,25,83,32,-1,25,26,83,-1,25,27,26,-1,25,84,27,-1,25,44,84,-1,11,10,30,-1,11,30,13,-1,11,13,15,-1,11,15,14,-1,11,14,42,-1,11,42,12,-1,15,13,16,-1,15,18,14,-1,15,16,76,-1,15,76,18,-1,76,16,17,-1,76,17,82,-1,76,82,19,-1,76,19,18,-1,22,18,19,-1,22,87,18,-1,22,27,84,-1,22,84,87,-1,87,84,85,-1,85,84,44,-1,85,42,14,-1,87,14,18,-1,87,85,14,-1,20,83,26,-1,20,17,16,-1,20,16,88,-1,20,88,83,-1,88,16,13,-1,88,13,86,-1,88,86,83,-1,86,13,30,-1,86,32,83,-1,23,89,22,-1,89,27,22,-1,89,91,27,-1,91,26,27,-1,91,20,26,-1,21,20,91,-1,21,17,20,-1,21,92,17,-1,82,17,92,-1,82,90,19,-1,23,22,19,-1,23,19,90,-1,82,92,101,-1,82,101,99,-1,82,99,93,-1,82,93,95,-1,82,95,97,-1,82,97,90,-1,23,90,97,-1,23,97,94,-1,23,94,89,-1,89,94,96,-1,89,96,95,-1,89,95,93,-1,89,93,91,-1,91,93,99,-1,91,99,100,-1,91,100,98,-1,21,91,98,-1,21,98,101,-1,21,101,92,-1,85,105,42,-1,85,103,105,-1,85,44,103,-1,103,44,104,-1,80,42,105,-1,80,105,102,-1,80,102,104,-1,80,104,44,-1,105,109,102,-1,102,109,47,-1,47,104,102,-1,104,47,45,-1,104,45,103,-1,103,45,46,-1,103,46,109,-1,103,109,105,-1,109,112,110,-1,109,110,47,-1,47,110,111,-1,47,111,45,-1,45,111,113,-1,113,46,45,-1,46,113,112,-1,112,109,46,-1,112,118,110,-1,110,118,115,-1,110,115,111,-1,111,115,117,-1,111,117,113,-1,113,117,116,-1,113,116,112,-1,112,116,118,-1,115,118,119,-1,119,118,122,-1,118,116,122,-1,122,116,120,-1,116,117,120,-1,120,117,121,-1,117,115,121,-1,115,119,121,-1,119,127,123,-1,119,122,127,-1,122,126,127,-1,122,128,126,-1,122,120,128,-1,120,124,128,-1,120,121,124,-1,121,125,124,-1,121,119,125,-1,119,123,125,-1,127,129,123,-1,127,126,129,-1,129,126,141,-1,141,126,143,-1,126,142,143,-1,126,128,142,-1,128,124,130,-1,142,128,130,-1,124,132,130,-1,124,134,132,-1,125,134,124,-1,125,136,134,-1,125,137,136,-1,125,135,137,-1,125,133,135,-1,125,123,133,-1,123,131,133,-1,123,129,131,-1,131,129,138,-1,129,141,138,-1,138,141,144,-1,141,143,144,-1,143,146,144,-1,142,146,143,-1,142,145,146,-1,139,145,142,-1,130,139,142,-1,139,130,132,-1,139,132,154,-1,132,157,154,-1,132,159,157,-1,132,134,159,-1,134,136,159,-1,136,161,159,-1,136,137,161,-1,137,162,161,-1,160,162,137,-1,135,160,137,-1,133,160,135,-1,133,158,160,-1,131,158,133,-1,156,158,131,-1,153,156,131,-1,131,138,153,-1,138,155,153,-1,140,155,138,-1,138,144,140,-1,144,147,140,-1,140,147,145,-1,140,145,139,-1,139,155,140,-1,154,155,139,-1,146,149,144,-1,146,151,149,-1,145,151,146,-1,150,151,145,-1,145,152,150,-1,147,152,145,-1,147,149,152,-1,147,144,149,-1,148,149,151,-1,148,152,149,-1,148,150,152,-1,148,151,150,-1,160,207,162,-1,160,205,207,-1,165,208,205,-1,160,165,205,-1,158,165,160,-1,161,162,207,-1,161,207,206,-1,165,206,208,-1,206,165,161,-1,161,165,159,-1,207,209,211,-1,205,209,207,-1,205,212,209,-1,205,208,212,-1,206,212,208,-1,206,210,212,-1,206,207,210,-1,207,211,210,-1,209,212,213,-1,212,216,213,-1,212,214,216,-1,210,214,212,-1,210,215,214,-1,210,211,215,-1,209,215,211,-1,209,213,215,-1,217,213,216,-1,217,215,213,-1,217,214,215,-1,217,216,214,-1,158,194,165,-1,192,194,158,-1,164,195,192,-1,158,164,192,-1,156,164,158,-1,159,194,165,-1,159,194,193,-1,159,193,195,-1,159,195,164,-1,159,164,157,-1,157,164,180,-1,192,198,194,-1,192,196,198,-1,192,195,196,-1,195,199,196,-1,196,199,200,-1,199,203,200,-1,193,199,195,-1,193,197,199,-1,193,198,197,-1,193,194,198,-1,199,201,203,-1,197,201,199,-1,197,198,201,-1,198,202,201,-1,196,202,198,-1,200,202,196,-1,204,202,200,-1,204,201,202,-1,204,203,201,-1,204,200,203,-1,156,181,164,-1,156,179,181,-1,156,182,179,-1,156,163,182,-1,163,180,182,-1,157,180,163,-1,164,181,180,-1,179,182,183,-1,182,186,183,-1,182,184,186,-1,180,184,182,-1,180,181,184,-1,181,185,184,-1,179,185,181,-1,183,185,179,-1,183,186,187,-1,186,190,187,-1,184,190,186,-1,184,188,190,-1,184,185,188,-1,185,189,188,-1,185,183,189,-1,183,187,189,-1,191,189,187,-1,191,188,189,-1,191,190,188,-1,191,187,190,-1,153,163,156,-1,153,168,163,-1,153,166,168,-1,153,169,166,-1,155,169,153,-1,155,167,169,-1,154,167,155,-1,154,163,167,-1,154,157,163,-1,163,168,167,-1,166,169,170,-1,169,173,170,-1,169,171,173,-1,169,167,171,-1,167,168,171,-1,168,172,171,-1,168,170,172,-1,170,168,166,-1,170,173,174,-1,173,177,174,-1,173,175,177,-1,173,171,175,-1,171,172,175,-1,172,176,175,-1,172,174,176,-1,170,174,172,-1,178,176,174,-1,178,175,176,-1,178,177,175,-1,178,174,177,-1,86,30,221,-1,86,221,219,-1,86,219,32,-1,32,219,220,-1,78,32,220,-1,78,220,218,-1,78,218,221,-1,78,221,30,-1,221,225,219,-1,219,225,35,-1,35,33,219,-1,33,220,219,-1,33,34,220,-1,220,34,218,-1,221,218,34,-1,34,225,221,-1,225,226,228,-1,225,228,35,-1,35,228,229,-1,35,229,33,-1,33,229,227,-1,33,227,34,-1,34,227,226,-1,34,226,225,-1,226,234,228,-1,228,234,232,-1,232,229,228,-1,232,233,229,-1,229,233,227,-1,227,233,231,-1,227,231,226,-1,226,231,234,-1,231,235,234,-1,235,238,234,-1,234,238,232,-1,238,236,232,-1,232,236,233,-1,236,237,233,-1,233,237,231,-1,231,237,235,-1,235,239,243,-1,235,243,238,-1,238,243,242,-1,238,242,244,-1,238,244,236,-1,236,244,240,-1,236,240,237,-1,237,240,241,-1,237,241,235,-1,235,241,239,-1,243,239,245,-1,243,245,242,-1,245,257,242,-1,257,259,242,-1,242,259,258,-1,242,258,244,-1,244,246,240,-1,258,246,244,-1,240,246,248,-1,240,248,250,-1,241,240,250,-1,241,250,252,-1,241,252,253,-1,241,253,251,-1,241,251,249,-1,241,249,239,-1,239,249,247,-1,239,247,245,-1,247,254,245,-1,245,254,257,-1,254,260,257,-1,257,260,259,-1,259,260,262,-1,258,259,262,-1,258,262,261,-1,255,258,261,-1,246,258,255,-1,255,248,246,-1,255,270,248,-1,248,270,273,-1,248,273,275,-1,248,275,250,-1,250,275,252,-1,252,275,277,-1,252,277,253,-1,253,277,278,-1,276,253,278,-1,251,253,276,-1,249,251,276,-1,249,276,274,-1,247,249,274,-1,272,247,274,-1,269,247,272,-1,247,269,254,-1,254,269,271,-1,256,254,271,-1,254,256,260,-1,260,256,263,-1,256,261,263,-1,256,255,261,-1,255,256,271,-1,270,255,271,-1,262,260,265,-1,262,265,267,-1,261,262,267,-1,266,261,267,-1,261,266,268,-1,263,261,268,-1,263,268,265,-1,263,265,260,-1,264,267,265,-1,264,265,268,-1,264,268,266,-1,264,266,267,-1,276,278,323,-1,276,323,321,-1,281,321,324,-1,276,321,281,-1,274,276,281,-1,277,323,278,-1,277,322,323,-1,281,324,322,-1,322,277,281,-1,277,275,281,-1,323,327,325,-1,321,323,325,-1,321,325,328,-1,321,328,324,-1,322,324,328,-1,322,328,326,-1,322,326,323,-1,323,326,327,-1,325,329,328,-1,328,329,332,-1,328,332,330,-1,326,328,330,-1,326,330,331,-1,326,331,327,-1,325,327,331,-1,325,331,329,-1,333,332,329,-1,333,329,331,-1,333,331,330,-1,333,330,332,-1,274,281,310,-1,308,274,310,-1,280,308,311,-1,274,308,280,-1,272,274,280,-1,275,310,281,-1,275,309,310,-1,275,311,309,-1,275,280,311,-1,275,273,280,-1,273,296,280,-1,308,310,314,-1,308,314,312,-1,308,312,311,-1,311,312,315,-1,312,316,315,-1,315,316,319,-1,309,311,315,-1,309,315,313,-1,309,313,314,-1,309,314,310,-1,315,319,317,-1,313,315,317,-1,313,317,314,-1,314,317,318,-1,312,314,318,-1,316,312,318,-1,320,316,318,-1,320,318,317,-1,320,317,319,-1,320,319,316,-1,272,280,297,-1,272,297,295,-1,272,295,298,-1,272,298,279,-1,279,298,296,-1,273,279,296,-1,280,296,297,-1,295,299,298,-1,298,299,302,-1,298,302,300,-1,296,298,300,-1,296,300,297,-1,297,300,301,-1,295,297,301,-1,299,295,301,-1,299,303,302,-1,302,303,306,-1,300,302,306,-1,300,306,304,-1,300,304,301,-1,301,304,305,-1,301,305,299,-1,299,305,303,-1,307,303,305,-1,307,305,304,-1,307,304,306,-1,307,306,303,-1,269,272,279,-1,269,279,284,-1,269,284,282,-1,269,282,285,-1,271,269,285,-1,271,285,283,-1,270,271,283,-1,270,283,279,-1,270,279,273,-1,279,283,284,-1,282,286,285,-1,285,286,289,-1,285,289,287,-1,285,287,283,-1,283,287,284,-1,284,287,288,-1,284,288,286,-1,286,282,284,-1,286,290,289,-1,289,290,293,-1,289,293,291,-1,289,291,287,-1,287,291,288,-1,288,291,292,-1,288,292,290,-1,286,288,290,-1,294,290,292,-1,294,292,291,-1,294,291,293,-1,294,293,290,-1,97,334,336,-1,97,336,94,-1,94,336,96,-1,336,335,96,-1,96,335,95,-1,95,335,337,-1,95,337,334,-1,95,334,97,-1,334,341,336,-1,336,341,338,-1,336,338,335,-1,335,338,340,-1,335,340,337,-1,337,340,339,-1,337,339,334,-1,334,339,341,-1,341,345,342,-1,341,342,338,-1,338,342,340,-1,340,342,344,-1,340,344,339,-1,339,344,343,-1,339,343,345,-1,339,345,341,-1,345,349,342,-1,342,349,351,-1,342,351,346,-1,342,346,344,-1,71,346,348,-1,71,344,346,-1,71,348,347,-1,71,347,344,-1,344,347,343,-1,343,347,352,-1,343,352,349,-1,343,349,345,-1,349,352,356,-1,349,356,353,-1,349,353,355,-1,349,355,351,-1,354,356,352,-1,354,352,350,-1,354,350,351,-1,354,351,355,-1,353,356,357,-1,353,357,358,-1,353,358,359,-1,353,359,360,-1,353,360,361,-1,353,361,355,-1,354,357,356,-1,350,346,351,-1,348,346,347,-1,350,347,346,-1,350,352,347,-1,354,358,357,-1,354,359,358,-1,354,360,359,-1,354,361,360,-1,354,355,361,-1,101,362,365,-1,101,365,99,-1,99,365,100,-1,100,365,363,-1,100,363,98,-1,98,363,364,-1,98,364,101,-1,101,364,362,-1,362,369,367,-1,362,367,365,-1,365,367,363,-1,363,367,368,-1,363,367,368,-1,363,368,366,-1,363,366,364,-1,364,366,362,-1,362,366,369,-1,369,373,371,-1,369,371,367,-1,367,371,368,-1,368,371,372,-1,368,372,366,-1,366,372,370,-1,366,370,369,-1,369,370,373,-1,373,377,380,-1,373,380,375,-1,373,375,371,-1,371,375,372,-1,372,375,376,-1,372,376,374,-1,372,374,370,-1,370,374,379,-1,373,370,379,-1,373,379,377,-1,377,379,383,-1,377,383,381,-1,377,381,384,-1,377,384,380,-1,381,383,389,-1,381,389,388,-1,381,388,387,-1,381,387,386,-1,381,386,385,-1,381,385,384,-1,376,375,374,-1,378,379,374,-1,378,374,375,-1,378,375,380,-1,382,386,387,-1,382,387,388,-1,382,388,389,-1,382,389,383,-1,382,383,379,-1,382,379,378,-1,382,378,380,-1,382,380,384,-1,382,384,385,-1,382,385,386,-1]),
                              creaseAngle : new SFFloat(3.0999999046325684),
                              coord : new SFNode(
                                new Coordinate({
                                  DEF : new SFString("JoeSkinCoord"),
                                  point : new MFVec3f([0,1.7699999809265137,0,0,1.6649999618530273,0.09000000357627869,-0.032999999821186066,1.6200000047683716,0.08699999749660492,0.032999999821186066,1.6200000047683716,0.08699999749660492,0,1.5499999523162842,0.09700000286102295,-0.07699999958276749,1.6399999856948853,-0.009999999776482582,-0.05270000174641609,1.5800000429153442,0.014999999664723873,0.07699999958276749,1.6399999856948853,-0.009999999776482582,0.05270000174641609,1.5800000429153442,0.014999999664723873,0,1.625,-0.0925000011920929,-0.029999999329447746,1.4600000381469727,0.03500000014901161,0,1.440000057220459,0.029999999329447746,0.029999999329447746,1.4600000381469727,0.03500000014901161,-0.11349999904632568,1.3179999589920044,0.0949999988079071,0.11349999904632568,1.3179999589920044,0.0949999988079071,0,1.25,0.11299999803304672,-0.08699999749660492,1.190000057220459,0.09000000357627869,-0.09350000321865082,1.0299999713897705,0.07500000298023224,0.08699999749660492,1.190000057220459,0.09000000357627869,0.09350000321865082,1.0299999713897705,0.07500000298023224,-0.14249999821186066,1.065000057220459,0.0032999999821186066,-0.15000000596046448,0.8999999761581421,-0.009999999776482582,0.14249999821186066,1.065000057220459,0.0032999999821186066,0.15000000596046448,0.8999999761581421,-0.009999999776482582,0,1.5299999713897705,-0.08399999886751175,0.004900000058114529,1.1907999515533447,-0.1120000034570694,-0.07729999721050262,1.0190000534057617,-0.11999999731779099,0.07729999721050262,1.0190000534057617,-0.11999999731779099,0.004999999888241291,1.0915000438690186,-0.10909999907016754,-0.17800000309944153,1.4824999570846558,-0.06199999898672104,-0.17000000178813934,1.3799999952316284,0.007000000216066837,-0.18799999356269836,0.8676000237464905,-0.035999998450279236,-0.1599999964237213,1.3799999952316284,-0.12700000405311584,-0.20000000298023224,1.138800024986267,-0.07999999821186066,-0.24400000274181366,1.138800024986267,-0.03999999910593033,-0.16500000655651093,1.138800024986267,-0.03999999910593033,-0.23000000417232513,1.1330000162124634,-0.054999999701976776,-0.19769999384880066,0.8169999718666077,-0.01769999973475933,-0.1941000074148178,0.6769999861717224,-0.04230000078678131,-0.21170000731945038,0.8560000061988831,-0.058400001376867294,-0.19300000369548798,0.7889999747276306,-0.10639999806880951,0.17499999701976776,1.4824999570846558,-0.05999999865889549,0.17000000178813934,1.3799999952316284,0.007000000216066837,0.1899999976158142,0.8644999861717224,-0.04149999842047691,0.1599999964237213,1.3799999952316284,-0.125,0.20000000298023224,1.138800024986267,-0.07999999821186066,0.16500000655651093,1.138800024986267,-0.03999999910593033,0.24400000274181366,1.138800024986267,-0.03999999910593033,0.23000000417232513,1.1330000162124634,-0.054999999701976776,0.20090000331401825,0.8138999938964844,-0.02370000071823597,0.20559999346733093,0.6743000149726868,-0.04820000007748604,0.2142000049352646,0.8529000282287598,-0.06480000168085098,0.19290000200271606,0.7860000133514404,-0.11219999939203262,-0.10000000149011612,0.49129998683929443,-0.029999999329447746,-0.17000000178813934,0.4659999907016754,0,-0.05000000074505806,0.4659999907016754,0,-0.16500000655651093,0.009999999776482582,0.11999999731779099,-0.15000000596046448,0.07000000029802322,0,-0.08500000089406967,0.0860000029206276,0.012500000186264515,-0.09000000357627869,0.0560000017285347,0.012500000186264515,-0.11500000208616257,0.019999999552965164,0.12200000137090683,-0.11500000208616257,0.03999999910593033,-0.054999999701976776,-0.10999999940395355,0.010999999940395355,0.1899999976158142,0.09929999709129333,0.4880000054836273,-0.03099999949336052,0.17000000178813934,0.4659999907016754,0,0.05000000074505806,0.48669999837875366,0,0.16500000655651093,0.009999999776482582,0.11999999731779099,0.15000000596046448,0.07000000029802322,0,0.08500000089406967,0.0860000029206276,0.012500000186264515,0.09000000357627869,0.0560000017285347,0.012500000186264515,0.11500000208616257,0.019999999552965164,0.12200000137090683,0.11500000208616257,0.03999999910593033,-0.054999999701976776,0.10999999940395355,0.010999999940395355,0.1899999976158142,0,0.875,0,-0.06459999829530716,1.5149999856948853,-0.03799999877810478,0.06459999829530716,1.5148999691009521,-0.03799999877810478,0,1.0722500085830688,0.09000000357627869,-0.10999999940395355,1.4270000457763672,-0.13750000298023224,-0.23499999940395355,1.4199999570846558,-0.0625,0.10999999940395355,1.4270000457763672,-0.13750000298023224,0.23499999940395355,1.4199999570846558,-0.0625,0,1.409999966621399,-0.14499999582767487,0,0.925000011920929,0.07999999821186066,-0.08699999749660492,1.190000057220459,-0.09000000357627869,0.08699999749660492,1.190000057220459,-0.09000000357627869,0.1720000058412552,1.3200000524520874,-0.029999999329447746,-0.1720000058412552,1.3200000524520874,-0.029999999329447746,0.15000000596046448,1.2300000190734863,-0.014999999664723873,-0.15000000596046448,1.2300000190734863,-0.014999999664723873,0.07900000363588333,0.9200000166893005,-0.14000000059604645,0.10000000149011612,0.8999999761581421,0.07699999958276749,-0.07900000363588333,0.9200000166893005,-0.14000000059604645,-0.10000000149011612,0.8999999761581421,0.07500000298023224,0,0.8700000047683716,0,0.17100000381469727,0.6499999761581421,0,0.019999999552965164,0.6499999761581421,0,0.10000000149011612,0.6499999761581421,-0.07999999821186066,0.10000000149011612,0.6499999761581421,0.07000000029802322,-0.17100000381469727,0.6499999761581421,0,-0.019999999552965164,0.6499999761581421,0,-0.10000000149011612,0.6499999761581421,-0.07999999821186066,-0.10000000149011612,0.6499999761581421,0.07000000029802322,0.25,1.2699999809265137,-0.03999999910593033,0.17000000178813934,1.2699999809265137,-0.03999999910593033,0.20000000298023224,1.2699999809265137,-0.09000000357627869,0.20000000298023224,1.2699999809265137,0.019999999552965164,0.24400000274181366,1.138800024986267,-0.03999999910593033,0.16500000655651093,1.138800024986267,-0.03999999910593033,0.20000000298023224,1.138800024986267,-0.07999999821186066,0.20000000298023224,1.138800024986267,-0.013000000268220901,0.22499999403953552,1,-0.009999999776482582,0.22499999403953552,1,-0.07000000029802322,0.1850000023841858,1,-0.009999999776482582,0.1850000023841858,1,-0.07000000029802322,0.20000000298023224,1.138800024986267,-0.03999999910593033,0.22499999403953552,0.9200000166893005,-0.03999999910593033,0.17499999701976776,0.9200000166893005,-0.03999999910593033,0.20000000298023224,0.9200000166893005,-0.06499999761581421,0.20000000298023224,0.9200000166893005,-0.014999999664723873,0.22499999403953552,0.8899999856948853,-0.03999999910593033,0.17499999701976776,0.8899999856948853,-0.03999999910593033,0.20000000298023224,0.8899999856948853,-0.06499999761581421,0.20000000298023224,0.8899999856948853,-0.014999999664723873,0.21799999475479126,0.8600000143051147,-0.03999999910593033,0.18400000035762787,0.8600000143051147,-0.03999999910593033,0.20000000298023224,0.8700000047683716,-0.07000000029802322,0.20000000298023224,0.8700000047683716,0,0.20999999344348907,0.8500000238418579,0,0.18539999425411224,0.8500000238418579,0,0.21199999749660492,0.8399999737739563,-0.014999999664723873,0.18299999833106995,0.8399999737739563,-0.014999999664723873,0.21299999952316284,0.8349999785423279,-0.03999999910593033,0.1899999976158142,0.8349999785423279,-0.03999999910593033,0.210999995470047,0.8349999785423279,-0.06499999761581421,0.19200000166893005,0.8349999785423279,-0.06499999761581421,0.20800000429153442,0.8399999737739563,-0.08500000089406967,0.1899999976158142,0.8399999737739563,-0.08500000089406967,0.20000000298023224,0.8399999737739563,-0.0949999988079071,0.2150000035762787,0.8199999928474426,0,0.19300000369548798,0.8149999976158142,0.004999999888241291,0.1979999989271164,0.800000011920929,0.012000000104308128,0.20999999344348907,0.8199999928474426,0.029999999329447746,0.1899999976158142,0.8199999928474426,0.029999999329447746,0.20000000298023224,0.8349999785423279,0.039000000804662704,0.21199999749660492,0.800000011920929,0.05000000074505806,0.18799999356269836,0.800000011920929,0.05000000074505806,0.20000000298023224,0.8069999814033508,0.05700000002980232,0.20000000298023224,0.7929999828338623,0.03500000014901161,0.20000000298023224,0.7739999890327454,0.07599999755620956,0.21199999749660492,0.7799999713897705,0.07000000029802322,0.18799999356269836,0.7799999713897705,0.07000000029802322,0.20000000298023224,0.7850000262260437,0.07500000298023224,0.20000000298023224,0.7699999809265137,0.06199999898672104,0.2150000035762787,0.7929999828338623,-0.014999999664723873,0.18700000643730164,0.7929999828338623,-0.014999999664723873,0.20000000298023224,0.7929999828338623,-0.004999999888241291,0.2150000035762787,0.7879999876022339,-0.03999999910593033,0.18700000643730164,0.7879999876022339,-0.03999999910593033,0.2150000035762787,0.7929999828338623,-0.06499999761581421,0.18700000643730164,0.7929999828338623,-0.06499999761581421,0.20999999344348907,0.7900000214576721,-0.08500000089406967,0.1899999976158142,0.7900000214576721,-0.08500000089406967,0.20000000298023224,0.7900000214576721,-0.0949999988079071,0.1899999976158142,0.7699999809265137,-0.027499999850988388,0.1899999976158142,0.7699999809265137,-0.05249999836087227,0.1899999976158142,0.7799999713897705,-0.07750000059604645,0.21199999749660492,0.7450000047683716,-0.014999999664723873,0.18799999356269836,0.7450000047683716,-0.019999999552965164,0.20000000298023224,0.7450000047683716,-0.025499999523162842,0.20000000298023224,0.7450000047683716,-0.0044999998062849045,0.210999995470047,0.7200000286102295,-0.014999999664723873,0.1889999955892563,0.7200000286102295,-0.014999999664723873,0.20000000298023224,0.7200000286102295,-0.025200000032782555,0.20000000298023224,0.7200000286102295,-0.004800000227987766,0.20999999344348907,0.6949999928474426,-0.014999999664723873,0.1899999976158142,0.6949999928474426,-0.014999999664723873,0.20000000298023224,0.6949999928474426,-0.02500000037252903,0.20000000298023224,0.6949999928474426,-0.004999999888241291,0.20000000298023224,0.6850000023841858,-0.014999999664723873,0.2150000035762787,0.7400000095367432,-0.03999999910593033,0.1850000023841858,0.7400000095367432,-0.03999999910593033,0.20000000298023224,0.7400000095367432,-0.054999999701976776,0.20000000298023224,0.7400000095367432,-0.02500000037252903,0.20999999344348907,0.7142000198364258,-0.03999999910593033,0.1899999976158142,0.7142000198364258,-0.03999999910593033,0.20000000298023224,0.7142000198364258,-0.05299999937415123,0.20000000298023224,0.7142000198364258,-0.027000000700354576,0.20999999344348907,0.6800000071525574,-0.03999999910593033,0.1899999976158142,0.6800000071525574,-0.03999999910593033,0.20000000298023224,0.6800000071525574,-0.05000000074505806,0.20000000298023224,0.6800000071525574,-0.029999999329447746,0.20000000298023224,0.6700000166893005,-0.03999999910593033,0.21199999749660492,0.7400000095367432,-0.06499999761581421,0.18799999356269836,0.7400000095367432,-0.06499999761581421,0.20000000298023224,0.7400000095367432,-0.07559999823570251,0.20000000298023224,0.7400000095367432,-0.05420000106096268,0.20999999344348907,0.7177000045776367,-0.06499999761581421,0.1899999976158142,0.7177000045776367,-0.06499999761581421,0.20000000298023224,0.7177000045776367,-0.07509999722242355,0.20000000298023224,0.7177000045776367,-0.05490000173449516,0.20999999344348907,0.6949999928474426,-0.06499999761581421,0.1899999976158142,0.6949999928474426,-0.06499999761581421,0.20000000298023224,0.6949999928474426,-0.07500000298023224,0.20000000298023224,0.6949999928474426,-0.054999999701976776,0.20000000298023224,0.6850000023841858,-0.06499999761581421,0.210999995470047,0.7549999952316284,-0.08500000089406967,0.1889999955892563,0.7549999952316284,-0.08500000089406967,0.20000000298023224,0.7549999952316284,-0.09520000219345093,0.20000000298023224,0.7549999952316284,-0.07479999959468842,0.20999999344348907,0.7350000143051147,-0.08500000089406967,0.1899999976158142,0.7350000143051147,-0.08500000089406967,0.20000000298023224,0.7350000143051147,-0.09510000050067902,0.20000000298023224,0.7350000143051147,-0.07490000128746033,0.20999999344348907,0.7200000286102295,-0.08500000089406967,0.1899999976158142,0.7200000286102295,-0.08500000089406967,0.20000000298023224,0.7200000286102295,-0.0949999988079071,0.20000000298023224,0.7200000286102295,-0.07500000298023224,0.20000000298023224,0.7099999785423279,-0.08500000089406967,-0.23000000417232513,1.2300000190734863,-0.03999999910593033,-0.1599999964237213,1.2300000190734863,-0.03999999910593033,-0.20000000298023224,1.2350000143051147,-0.10499999672174454,-0.20000000298023224,1.2350000143051147,0.019999999552965164,-0.24400000274181366,1.138800024986267,-0.03999999910593033,-0.16500000655651093,1.138800024986267,-0.03999999910593033,-0.20000000298023224,1.138800024986267,-0.07999999821186066,-0.20000000298023224,1.138800024986267,0.013000000268220901,-0.22499999403953552,1,-0.009999999776482582,-0.22499999403953552,1,-0.07000000029802322,-0.1850000023841858,1,-0.009999999776482582,-0.1850000023841858,1,-0.07000000029802322,-0.20000000298023224,1.138800024986267,-0.03999999910593033,-0.22499999403953552,0.9200000166893005,-0.03999999910593033,-0.17499999701976776,0.9200000166893005,-0.03999999910593033,-0.20000000298023224,0.9200000166893005,-0.06499999761581421,-0.20000000298023224,0.9200000166893005,-0.014999999664723873,-0.22499999403953552,0.8899999856948853,-0.03999999910593033,-0.17499999701976776,0.8899999856948853,-0.03999999910593033,-0.20000000298023224,0.8899999856948853,-0.06499999761581421,-0.20000000298023224,0.8899999856948853,-0.014999999664723873,-0.21799999475479126,0.8600000143051147,-0.03999999910593033,-0.18400000035762787,0.8600000143051147,-0.03999999910593033,-0.20000000298023224,0.8700000047683716,-0.07000000029802322,-0.20000000298023224,0.8700000047683716,0,-0.20999999344348907,0.8500000238418579,0,-0.18539999425411224,0.8500000238418579,0,-0.21199999749660492,0.8399999737739563,-0.014999999664723873,-0.18299999833106995,0.8399999737739563,-0.014999999664723873,-0.21299999952316284,0.8349999785423279,-0.03999999910593033,-0.1899999976158142,0.8349999785423279,-0.03999999910593033,-0.210999995470047,0.8349999785423279,-0.06499999761581421,-0.19200000166893005,0.8349999785423279,-0.06499999761581421,-0.20800000429153442,0.8399999737739563,-0.08500000089406967,-0.1899999976158142,0.8399999737739563,-0.08500000089406967,-0.20000000298023224,0.8399999737739563,-0.0949999988079071,-0.2150000035762787,0.8199999928474426,0,-0.19300000369548798,0.8149999976158142,0.004999999888241291,-0.1979999989271164,0.800000011920929,0.012000000104308128,-0.20999999344348907,0.8199999928474426,0.029999999329447746,-0.1899999976158142,0.8199999928474426,0.029999999329447746,-0.20000000298023224,0.8349999785423279,0.039000000804662704,-0.21199999749660492,0.800000011920929,0.05000000074505806,-0.18799999356269836,0.800000011920929,0.05000000074505806,-0.20000000298023224,0.8069999814033508,0.05700000002980232,-0.20000000298023224,0.7929999828338623,0.03500000014901161,-0.20000000298023224,0.7739999890327454,0.07599999755620956,-0.21199999749660492,0.7799999713897705,0.07000000029802322,-0.18799999356269836,0.7799999713897705,0.07000000029802322,-0.20000000298023224,0.7850000262260437,0.07500000298023224,-0.20000000298023224,0.7699999809265137,0.06199999898672104,-0.2150000035762787,0.7929999828338623,-0.014999999664723873,-0.18700000643730164,0.7929999828338623,-0.014999999664723873,-0.20000000298023224,0.7929999828338623,-0.004999999888241291,-0.2150000035762787,0.7879999876022339,-0.03999999910593033,-0.18700000643730164,0.7879999876022339,-0.03999999910593033,-0.2150000035762787,0.7929999828338623,-0.06499999761581421,-0.18700000643730164,0.7929999828338623,-0.06499999761581421,-0.20999999344348907,0.7900000214576721,-0.08500000089406967,-0.1899999976158142,0.7900000214576721,-0.08500000089406967,-0.20000000298023224,0.7900000214576721,-0.0949999988079071,-0.1899999976158142,0.7699999809265137,-0.027499999850988388,-0.1899999976158142,0.7699999809265137,-0.05249999836087227,-0.1899999976158142,0.7799999713897705,-0.07750000059604645,-0.21199999749660492,0.7450000047683716,-0.014999999664723873,-0.18799999356269836,0.7450000047683716,-0.019999999552965164,-0.20000000298023224,0.7450000047683716,-0.025499999523162842,-0.20000000298023224,0.7450000047683716,-0.0044999998062849045,-0.210999995470047,0.7200000286102295,-0.014999999664723873,-0.1889999955892563,0.7200000286102295,-0.014999999664723873,-0.20000000298023224,0.7200000286102295,-0.025200000032782555,-0.20000000298023224,0.7200000286102295,-0.004800000227987766,-0.20999999344348907,0.6949999928474426,-0.014999999664723873,-0.1899999976158142,0.6949999928474426,-0.014999999664723873,-0.20000000298023224,0.6949999928474426,-0.02500000037252903,-0.20000000298023224,0.6949999928474426,-0.004999999888241291,-0.20000000298023224,0.6850000023841858,-0.014999999664723873,-0.2150000035762787,0.7400000095367432,-0.03999999910593033,-0.1850000023841858,0.7400000095367432,-0.03999999910593033,-0.20000000298023224,0.7400000095367432,-0.054999999701976776,-0.20000000298023224,0.7400000095367432,-0.02500000037252903,-0.20999999344348907,0.7142000198364258,-0.03999999910593033,-0.1899999976158142,0.7142000198364258,-0.03999999910593033,-0.20000000298023224,0.7142000198364258,-0.05299999937415123,-0.20000000298023224,0.7142000198364258,-0.027000000700354576,-0.20999999344348907,0.6800000071525574,-0.03999999910593033,-0.1899999976158142,0.6800000071525574,-0.03999999910593033,-0.20000000298023224,0.6800000071525574,-0.05000000074505806,-0.20000000298023224,0.6800000071525574,-0.029999999329447746,-0.20000000298023224,0.6700000166893005,-0.03999999910593033,-0.21199999749660492,0.7400000095367432,-0.06499999761581421,-0.18799999356269836,0.7400000095367432,-0.06499999761581421,-0.20000000298023224,0.7400000095367432,-0.07559999823570251,-0.20000000298023224,0.7400000095367432,-0.05420000106096268,-0.20999999344348907,0.7177000045776367,-0.06499999761581421,-0.1899999976158142,0.7177000045776367,-0.06499999761581421,-0.20000000298023224,0.7177000045776367,-0.07509999722242355,-0.20000000298023224,0.7177000045776367,-0.05490000173449516,-0.20999999344348907,0.6949999928474426,-0.06499999761581421,-0.1899999976158142,0.6949999928474426,-0.06499999761581421,-0.20000000298023224,0.6949999928474426,-0.07500000298023224,-0.20000000298023224,0.6949999928474426,-0.054999999701976776,-0.20000000298023224,0.6850000023841858,-0.06499999761581421,-0.210999995470047,0.7549999952316284,-0.08500000089406967,-0.1889999955892563,0.7549999952316284,-0.08500000089406967,-0.20000000298023224,0.7549999952316284,-0.09520000219345093,-0.20000000298023224,0.7549999952316284,-0.07479999959468842,-0.20999999344348907,0.7350000143051147,-0.08500000089406967,-0.1899999976158142,0.7350000143051147,-0.08500000089406967,-0.20000000298023224,0.7350000143051147,-0.09510000050067902,-0.20000000298023224,0.7350000143051147,-0.07490000128746033,-0.20999999344348907,0.7200000286102295,-0.08500000089406967,-0.1899999976158142,0.7200000286102295,-0.08500000089406967,-0.20000000298023224,0.7200000286102295,-0.0949999988079071,-0.20000000298023224,0.7200000286102295,-0.07500000298023224,-0.20000000298023224,0.7099999785423279,-0.08500000089406967,0.11500000208616257,0.4659999907016754,0.05999999865889549,0.11500000208616257,0.4659999907016754,-0.054999999701976776,0.15000000596046448,0.4659999907016754,0,0.05000000074505806,0.4659999907016754,0,0.17000000178813934,0.30000001192092896,0,0.05999999865889549,0.30000001192092896,0,0.10000000149011612,0.30000001192092896,-0.05000000074505806,0.10000000149011612,0.30000001192092896,0.05000000074505806,0.15000000596046448,0.07000000029802322,0,0.08500000089406967,0.0860000029206276,0.012500000186264515,0.11500000208616257,0.0689999982714653,-0.04500000178813934,0.11699999868869781,0.09749999642372131,0.061500001698732376,0.13750000298023224,0.006000000052154064,-0.029999999329447746,0.0949999988079071,0.006000000052154064,-0.029999999329447746,0.11500000208616257,0.014999999664723873,-0.04500000178813934,0.11500000208616257,0.05999999865889549,0.10000000149011612,0.11500000208616257,0,0.07000000029802322,0.16500000655651093,0,0.07000000029802322,0.0949999988079071,0,0.07000000029802322,0.11500000208616257,0.03999999910593033,0.12999999523162842,0.125,0,0.11999999731779099,0.16500000655651093,0,0.11999999731779099,0.08699999749660492,0,0.12200000137090683,0.09000000357627869,0.012000000104308128,0.18799999356269836,0.10999999940395355,0.010999999940395355,0.1899999976158142,0.12800000607967377,0.010999999940395355,0.1850000023841858,0.1420000046491623,0.010999999940395355,0.17800000309944153,0.15399999916553497,0.009999999776482582,0.1679999977350235,-0.11500000208616257,0.4659999907016754,0.05999999865889549,-0.11500000208616257,0.4659999907016754,-0.054999999701976776,-0.17000000178813934,0.4659999907016754,0,-0.05000000074505806,0.4659999907016754,0,-0.17000000178813934,0.30000001192092896,0,-0.05999999865889549,0.30000001192092896,0,-0.10000000149011612,0.30000001192092896,-0.05000000074505806,-0.10000000149011612,0.30000001192092896,0.05000000074505806,-0.15000000596046448,0.07000000029802322,0,-0.08500000089406967,0.0860000029206276,0.012500000186264515,-0.11500000208616257,0.0689999982714653,-0.04500000178813934,-0.11699999868869781,0.09749999642372131,0.06199999898672104,-0.13750000298023224,0.006000000052154064,-0.029999999329447746,-0.0949999988079071,0.006000000052154064,-0.029999999329447746,-0.0949999988079071,0.006000000052154064,-0.029999999329447746,-0.11500000208616257,0.05999999865889549,0.10000000149011612,-0.11500000208616257,0,0.07000000029802322,-0.16500000655651093,0,0.07000000029802322,-0.0949999988079071,0,0.07000000029802322,-0.11500000208616257,0.03999999910593033,0.12999999523162842,-0.125,0,0.11999999731779099,-0.16500000655651093,0,0.11999999731779099,-0.08699999749660492,0,0.12200000137090683,-0.09000000357627869,0.012000000104308128,0.18799999356269836,-0.10999999940395355,0.010999999940395355,0.1899999976158142,-0.12800000607967377,0.010999999940395355,0.1850000023841858,-0.1420000046491623,0.010999999940395355,0.17800000309944153,-0.15399999916553497,0.009999999776482582,0.1679999977350235])})),
                              color : new SFNode(
                                new Color({
                                  color : new MFColor([1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1])}))})),
                          appearance : new SFNode(
                            new Appearance({
                              texture : new SFNode(
                                new ImageTexture({
                                  url : new MFString(["zBlueSpiralBkg2.gif"])})),
                              material : new SFNode(
                                new Material({
                                  ambientIntensity : new SFFloat(0.6000000238418579),
                                  diffuseColor : new SFColor([0,0,0]),
                                  shininess : new SFFloat(0.6000000238418579)}))}))})]),
                      skinCoord : new SFNode(
                        new Coordinate({
                          USE : new SFString("JoeSkinCoord")})),

                        new HAnimJoint({
                          USE : new SFString("Joe_HumanoidRoot")})})])})])}),

            new TimeSensor({
              DEF : new SFString("Time1"),
              cycleInterval : new SFTime(2.86),
              loop : new SFBool(true)}),

            new TimeSensor({
              DEF : new SFString("Time2"),
              cycleInterval : new SFTime(5.72),
              loop : new SFBool(true)}),

            new OrientationInterpolator({
              DEF : new SFString("Pitch"),
              key : new MFFloat([0,0.20000000298023224,0.4000000059604645,0.6000000238418579,0.800000011920929,1]),
              keyValue : new MFRotation([1,0,0,0,1,0,0,1.25600004196167,1,0,0,2.51200008392334,1,0,0,3.7679998874664307,1,0,0,5.02400016784668,1,0,0,6.28000020980835])}),

            new OrientationInterpolator({
              DEF : new SFString("Yaw"),
              key : new MFFloat([0,0.20000000298023224,0.4000000059604645,0.6000000238418579,0.800000011920929,1]),
              keyValue : new MFRotation([0,1,0,0,0,1,0,1.25600004196167,0,1,0,2.51200008392334,0,1,0,3.7679998874664307,0,1,0,5.02400016784668,0,1,0,6.28000020980835])}),

            new OrientationInterpolator({
              DEF : new SFString("Roll"),
              key : new MFFloat([0,0.20000000298023224,0.4000000059604645,0.6000000238418579,0.800000011920929,1]),
              keyValue : new MFRotation([0,0,1,0,0,0,1,1.25600004196167,0,0,1,2.51200008392334,0,0,1,3.7679998874664307,0,0,1,5.02400016784668,0,0,1,6.28000020980835])}),

            new OrientationInterpolator({
              DEF : new SFString("vc6Yaw"),
              key : new MFFloat([0,0.20000000298023224,0.4000000059604645,0.5,0.6000000238418579,0.699999988079071,0.800000011920929,0.8999999761581421,1]),
              keyValue : new MFRotation([0,1,0,0,0,1,0,0.699999988079071,0,1,0,0,0,1,0,0,-1,0,0,0.5,-0.4000000059604645,-1,0,0.699999988079071,-0.4000000059604645,-1,0,0.4000000059604645,0,1,0,0,0,1,0,0])}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time2"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("vc6Yaw")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("vc6Yaw"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_vc6")}),

            new OrientationInterpolator({
              DEF : new SFString("r_sternoclavicularRoll"),
              key : new MFFloat([0,0.20000000298023224,0.4000000059604645,0.5,0.699999988079071,0.800000011920929,1]),
              keyValue : new MFRotation([0,0,1,0,0,0,-1,0.10000000149011612,0,0,-1,0.2199999988079071,0,0.5,-1,0.27000001072883606,0,0,-1,0.10000000149011612,0,0,1,0,0,0,1,0])}),

            new OrientationInterpolator({
              DEF : new SFString("r_acromioclavicularRoll"),
              key : new MFFloat([0,0.20000000298023224,0.4000000059604645,0.6000000238418579,0.800000011920929,1]),
              keyValue : new MFRotation([0,0,1,0,0,0,1,0,0,0,1,-0.05000000074505806,0,0,1,0,0,0,1,0,0,0,1,0])}),

            new OrientationInterpolator({
              DEF : new SFString("r_shoulderRoll"),
              key : new MFFloat([0,0.20000000298023224,0.4000000059604645,0.5,0.8500000238418579,1]),
              keyValue : new MFRotation([1,0,0,0,0,0,-1,1.659999966621399,-0.25,0,-1,1.7599999904632568,0,0,-1,1.25600004196167,0,0,-1,0.05000000074505806,1,0,0,0])}),

            new OrientationInterpolator({
              DEF : new SFString("r_ForeArmPitch"),
              key : new MFFloat([0,0.15000000596046448,0.30000001192092896,0.5,0.699999988079071,0.8999999761581421,1]),
              keyValue : new MFRotation([0,0,1,0,-1,0,0,0.550000011920929,-1,-0.25,0,2.549999952316284,-1,-0.25,0,2.549999952316284,-1,-0.25,0,2.549999952316284,0,0,1,0,0,0,1,0])}),

            new OrientationInterpolator({
              DEF : new SFString("r_wristRoll"),
              key : new MFFloat([0,0.20000000298023224,0.4000000059604645,0.6000000238418579,0.6499999761581421,0.75,0.8500000238418579,1]),
              keyValue : new MFRotation([0,0,1,0,0,0,1,0,0,1,0,-0.550000011920929,0,0,1,0,0,1,0,1.5499999523162842,0,0,-1,1.5499999523162842,0,0,1,0,0,0,1,0])}),

            new OrientationInterpolator({
              DEF : new SFString("r_handPitch"),
              key : new MFFloat([0,0.20000000298023224,0.4000000059604645,0.6000000238418579,0.800000011920929,1]),
              keyValue : new MFRotation([0,0,1,0,0,0,0.009999999776482582,0.25,0,0,-0.009999999776482582,0.029999999329447746,0,0,0.009999999776482582,0.05000000074505806,0,0,0.009999999776482582,0.009999999776482582,0,0,1,0])}),

            new OrientationInterpolator({
              DEF : new SFString("l_shoulderRoll"),
              key : new MFFloat([0,0.20000000298023224,0.4000000059604645,0.5,0.8500000238418579,1]),
              keyValue : new MFRotation([0.25,0,1,1.7599999904632568,0,0,1,1.659999966621399,0.25,0,1,1.7599999904632568,0,0,1,1.25600004196167,0,0,1,0.05000000074505806,0.25,0,1,1.7599999904632568])}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time2"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("r_sternoclavicularRoll")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time2"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("r_acromioclavicularRoll")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time2"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("r_shoulderRoll")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time2"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("r_ForeArmPitch")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time2"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("r_wristRoll")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time2"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("r_handPitch")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("r_sternoclavicularRoll"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_r_sternoclavicular")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("r_acromioclavicularRoll"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_r_acromioclavicular")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("r_shoulderRoll"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_r_shoulder")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("r_ForeArmPitch"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_r_elbow")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("r_wristRoll"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_r_wrist")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("l_shoulderRoll"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_l_shoulder")}),

            new Group({
              children : new MFNode([
                new PositionInterpolator({
                  DEF : new SFString("HUMANOIDROOT_POSITION_ANIMATOR"),
                  key : new MFFloat([0,0.041669998317956924,0.125,0.16670000553131104,0.20829999446868896,0.25,0.29170000553131104,0.375,0.45829999446868896,0.5,0.541700005531311,0.583299994468689,0.625,0.708299994468689,0.75,0.791700005531311,0.875,0.916700005531311,1]),
                  keyValue : new MFVec3f([0,-0.009279999881982803,0,0,-0.0038580000400543213,0,0,-0.008847000077366829,0,0,-0.01486000046133995,0,0,-0.026410000398755074,0,0,-0.039340000599622726,0,0,-0.050200000405311584,0,0,-0.07468999922275543,0,0,-0.027319999411702156,0,0,-0.01607999950647354,0,0,-0.011289999820291996,0,0,-0.0058189998380839825,0,0,-0.0020039998926222324,0,0,-0.0025790000800043344,0,0,-0.014299999922513962,0,0,-0.03799000009894371,0,0,-0.05648000165820122,0,0,-0.04500000178813934,0,0,-0.009279999881982803,0])}),

                new OrientationInterpolator({
                  DEF : new SFString("HUMANOIDROOT_ANIMATOR"),
                  key : new MFFloat([0,1]),
                  keyValue : new MFRotation([0,0,1,0,0,0,1,0])}),

                new OrientationInterpolator({
                  DEF : new SFString("L_HIP_ANIMATOR"),
                  key : new MFFloat([0,0.25,0.375,0.5,0.666700005531311,0.791700005531311,0.916700005531311,1]),
                  keyValue : new MFRotation([-0.8730000257492065,0.06094000115990639,0.48399999737739563,0.2865000069141388,0.9962999820709229,-0.010569999925792217,0.08481000363826752,0.24879999458789825,0.9965000152587891,0.01590999960899353,-0.08222000300884247,0.38359999656677246,-0.7017999887466431,-0.03223000094294548,-0.7117000222206116,0.12890000641345978,-1,0,0,0.551800012588501,-0.996399998664856,0.02230999991297722,0.08169999718666077,0.535099983215332,-0.98089998960495,0.04912000149488449,0.18809999525547028,0.5203999876976013,-0.8730000257492065,0.06094000115990639,0.48399999737739563,0.2865000069141388])}),

                new OrientationInterpolator({
                  DEF : new SFString("L_KNEE_ANIMATOR"),
                  key : new MFFloat([0,0.20829999446868896,0.375,0.5,0.666700005531311,0.791700005531311,0.916700005531311,1]),
                  keyValue : new MFRotation([1,0,0,0.32260000705718994,1,0,0,0.15559999644756317,1,0,0,0.08677999675273895,1,0,0,0.8751000165939331,1,0,0,1.13100004196167,1,0,0,0.09961000084877014,1,0,0,0.39419999718666077,1,0,0,0.32260000705718994])}),

                new OrientationInterpolator({
                  DEF : new SFString("L_ANKLE_ANIMATOR"),
                  key : new MFFloat([0,0.125,0.20829999446868896,0.375,0.666700005531311,0.916700005531311,1]),
                  keyValue : new MFRotation([-1,0,0,0.06710000336170197,-1,0,0,0.2152000069618225,-1,0,0,0.31839999556541443,-1,0,0,0.4717000126838684,-1,0,0,0.29120001196861267,1,0,0,0.22220000624656677,-1,0,0,0.06710000336170197])}),

                new OrientationInterpolator({
                  DEF : new SFString("R_ANKLE_ANIMATOR"),
                  key : new MFFloat([0,0.125,0.20829999446868896,0.375,0.45829999446868896,0.5,0.666700005531311,0.75,0.7799999713897705,0.916700005531311,1]),
                  keyValue : new MFRotation([0,0,1,0,-1,0,0,0.353300005197525,-1,0,0,0.10719999670982361,1,0,0,0.4000000059604645,1,0,0,0.12700000405311584,-1,0,0,0.017999999225139618,-1,0,0,0.057999998331069946,-1,0,0,0.23999999463558197,-1,0,0,0.3499999940395355,-1,0,0,0.33000001311302185,0,0,1,0])}),

                new OrientationInterpolator({
                  DEF : new SFString("L_subtalar_ANIMATOR"),
                  key : new MFFloat([0,0.30000001192092896,1]),
                  keyValue : new MFRotation([0,0,1,0,0,0,1,0,0,0,1,0])}),

                new OrientationInterpolator({
                  DEF : new SFString("L_MIDTARSAL_ANIMATOR"),
                  key : new MFFloat([0,0.5,1]),
                  keyValue : new MFRotation([0,0,1,0,1,0,0,-0.20000000298023224,0,0,1,0])}),

                new OrientationInterpolator({
                  DEF : new SFString("L_metatarsal_ANIMATOR"),
                  key : new MFFloat([0,0.20000000298023224,0.4000000059604645,0.800000011920929,1]),
                  keyValue : new MFRotation([-1,0,0,0.30000001192092896,-1,0,0,0.15000000596046448,1,0,0,0.30000001192092896,0,0,1,0,-1,0,0,0.30000001192092896])}),

                new OrientationInterpolator({
                  DEF : new SFString("R_HIP_ANIMATOR"),
                  key : new MFFloat([0,0.125,0.20829999446868896,0.29170000553131104,0.375,0.5,0.666700005531311,0.791700005531311,0.916700005531311,1]),
                  keyValue : new MFRotation([-0.5831000208854675,0.035110000520944595,0.8116000294685364,0.14810000360012054,-0.9950000047683716,0.02295999974012375,0.0967399999499321,0.4683000147342682,-1,0.0019000000320374966,0.007960000075399876,0.4731999933719635,-0.9980000257492065,-0.015799999237060547,-0.06102000176906586,0.5078999996185303,-0.991100013256073,-0.03540999814867973,-0.12860000133514404,0.5418999791145325,-0.913100004196167,-0.0624300017952919,-0.40299999713897705,0.3361000120639801,-0.43059998750686646,-0.07962000370025635,-0.8989999890327454,0.07038000226020813,1,0,0,0.257099986076355,0.9890999794006348,-0.028049999848008156,0.1444000005722046,0.3878999948501587,-0.5831000208854675,0.035110000520944595,0.8116000294685364,0.14810000360012054])}),

                new OrientationInterpolator({
                  DEF : new SFString("R_KNEE_ANIMATOR"),
                  key : new MFFloat([0,0.125,0.20829999446868896,0.29170000553131104,0.375,0.5,0.666700005531311,0.791700005531311,0.916700005531311,1]),
                  keyValue : new MFRotation([1,0,0,0.8572999835014343,1,0,0,0.8925999999046326,1,0,0,0.535099983215332,1,0,0,0.17560000717639923,1,0,0,0.11940000206232071,1,0,0,0.31529998779296875,1,0,0,0.0935399979352951,1,0,0,0.0855799987912178,1,0,0,0.2475000023841858,1,0,0,0.8572999835014343])}),

                new OrientationInterpolator({
                  DEF : new SFString("R_subtalar_ANIMATOR"),
                  key : new MFFloat([0,0.22499999403953552,0.25,0.3499999940395355,0.44999998807907104,0.8500000238418579,0.9100000262260437]),
                  keyValue : new MFRotation([-1,0,0,0.10000000149011612,0,0,1,0,0,0,1,0,1,0,0,0.10000000149011612,0,0,1,0,1,0,0,0.10000000149011612,1,0,0,0.25,-1,0,0,0.10000000149011612])}),

                new OrientationInterpolator({
                  DEF : new SFString("R_MIDTARSAL_ANIMATOR"),
                  key : new MFFloat([0,0.2199999988079071,1]),
                  keyValue : new MFRotation([1,0,0,-0.20000000298023224,0,0,1,0,1,0,0,-0.20000000298023224])}),

                new OrientationInterpolator({
                  DEF : new SFString("R_metatarsal_ANIMATOR"),
                  key : new MFFloat([0,0.20000000298023224,0.4000000059604645,0.800000011920929,1]),
                  keyValue : new MFRotation([-1,0,0,0.15000000596046448,0,0,1,0,1,0,0,0.30000001192092896,-1,0,0,0.30000001192092896,-1,0,0,0.15000000596046448])}),

                new OrientationInterpolator({
                  DEF : new SFString("VL5_ANIMATOR"),
                  key : new MFFloat([0,0.20829999446868896,0.375,0.75,0.833299994468689,1]),
                  keyValue : new MFRotation([0,1,0,0.08259999752044678,-0.01971999928355217,-0.5974000096321106,0.8016999959945679,0.08230999857187271,0.009296000003814697,-0.9648000001907349,0.26269999146461487,0.17339999973773956,-0.012380000203847885,0.9549000263214111,-0.29679998755455017,0.0873199999332428,-0.008124999701976776,0.9690999984741211,-0.24629999697208405,0.15800000727176666,0,1,0,0.08259999752044678])}),

                new OrientationInterpolator({
                  DEF : new SFString("SKULLBASE_ANIMATOR"),
                  key : new MFFloat([0,0.375,0.41670000553131104,0.5,0.583299994468689,0.666700005531311,0.75,0.833299994468689,0.916700005531311,1]),
                  keyValue : new MFRotation([0,-1,0,0.08640000224113464,0,1,0,0.18250000476837158,0,1,0,0.15049999952316284,0,1,0,0.10530000180006027,0,1,0,0.04391000047326088,0,-1,0,0.031190000474452972,0,-1,0,0.0793600007891655,0,-1,0,0.1615999937057495,0,-1,0,0.1550000011920929,0,-1,0,0.08641999959945679])}),

                new OrientationInterpolator({
                  DEF : new SFString("L_SHOULDER_ANIMATOR"),
                  key : new MFFloat([0,0.375,0.916700005531311,1]),
                  keyValue : new MFRotation([1,0,0.4000000059604645,0.11999999731779099,-1,0,0.4000000059604645,0.1860000044107437,1,0,0.10000000149011612,0.335999995470047,1,0,0.4000000059604645,0.11999999731779099])}),

                new OrientationInterpolator({
                  DEF : new SFString("L_ELBOW_ANIMATOR"),
                  key : new MFFloat([0,0.375,0.916700005531311,1]),
                  keyValue : new MFRotation([-1,0,0,0.06599999964237213,-1,0,0,0.4880000054836273,-1,0,0,0.01769999973475933,-1,0,0,0.06598780304193497])}),

                new OrientationInterpolator({
                  DEF : new SFString("L_WRIST_ANIMATOR"),
                  key : new MFFloat([0,0.375,0.916700005531311,1]),
                  keyValue : new MFRotation([0,-1,0,0.460999995470047,-0.3301999866962433,-0.9275000095367432,0.17550000548362732,0.5388000011444092,0.03277739882469177,-0.99931401014328,-0.01721850037574768,0.4920330047607422,0,-1,0,0.4611000120639801])}),

                new OrientationInterpolator({
                  DEF : new SFString("R_SHOULDER_ANIMATOR"),
                  key : new MFFloat([0,0.375,0.916700005531311,1]),
                  keyValue : new MFRotation([-1,0,-1,0.09200000017881393,1,0,-0.20000000298023224,0.3197000026702881,-1,0,-0.5,0.15639999508857727,-1,0,-1,0.09200000017881393])}),

                new OrientationInterpolator({
                  DEF : new SFString("R_ELBOW_ANIMATOR"),
                  key : new MFFloat([0,0.375,0.916700005531311,1]),
                  keyValue : new MFRotation([-1,0,0,0.4115000069141388,-1,0,0,0.0925000011920929,-1,0,0,0.5725679993629456,-1,0,0,0.4115079939365387])}),

                new OrientationInterpolator({
                  DEF : new SFString("R_WRIST_ANIMATOR"),
                  key : new MFFloat([0,0.375,0.916700005531311,1]),
                  keyValue : new MFRotation([-0.8129000067710876,0.47589999437332153,-0.33570000529289246,0.13459999859333038,0.15330000221729279,-0.9878000020980835,0.02582000009715557,0.3901999890804291,-0.5701000094413757,0.7603999972343445,-0.3109999895095825,0.3659999966621399,-0.8129000067710876,0.47589999437332153,-0.33570000529289246,0.13459999859333038])})])}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time1"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("HUMANOIDROOT_POSITION_ANIMATOR")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time1"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("HUMANOIDROOT_ANIMATOR")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time1"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("L_HIP_ANIMATOR")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time1"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("L_KNEE_ANIMATOR")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time1"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("L_ANKLE_ANIMATOR")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time1"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("L_subtalar_ANIMATOR")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time1"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("L_MIDTARSAL_ANIMATOR")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time1"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("L_metatarsal_ANIMATOR")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time1"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("R_HIP_ANIMATOR")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time1"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("R_KNEE_ANIMATOR")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time1"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("R_ANKLE_ANIMATOR")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time1"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("R_subtalar_ANIMATOR")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time1"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("R_MIDTARSAL_ANIMATOR")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time1"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("R_metatarsal_ANIMATOR")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time1"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("VL5_ANIMATOR")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time1"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("SKULLBASE_ANIMATOR")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time1"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("L_SHOULDER_ANIMATOR")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time1"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("L_ELBOW_ANIMATOR")}),

            new ROUTE({
              fromField : new SFString("fraction_changed"),
              fromNode : new SFString("Time1"),
              toField : new SFString("set_fraction"),
              toNode : new SFString("L_WRIST_ANIMATOR")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("HUMANOIDROOT_POSITION_ANIMATOR"),
              toField : new SFString("set_translation"),
              toNode : new SFString("Joe_HumanoidRoot")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("HUMANOIDROOT_ANIMATOR"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_HumanoidRoot")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("L_HIP_ANIMATOR"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_l_hip")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("L_KNEE_ANIMATOR"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_l_knee")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("L_ANKLE_ANIMATOR"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_l_ankle")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("L_MIDTARSAL_ANIMATOR"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_l_midtarsal")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("L_subtalar_ANIMATOR"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_l_subtalar")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("L_metatarsal_ANIMATOR"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_l_metatarsal")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("R_HIP_ANIMATOR"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_r_hip")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("R_KNEE_ANIMATOR"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_r_knee")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("R_ANKLE_ANIMATOR"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_r_ankle")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("R_subtalar_ANIMATOR"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_r_subtalar")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("R_MIDTARSAL_ANIMATOR"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_r_midtarsal")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("R_metatarsal_ANIMATOR"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_r_metatarsal")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("VL5_ANIMATOR"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_vl5")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("SKULLBASE_ANIMATOR"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_skullbase")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("L_SHOULDER_ANIMATOR"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_l_shoulder")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("L_ELBOW_ANIMATOR"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_l_elbow")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("L_WRIST_ANIMATOR"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_l_wrist")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("R_SHOULDER_ANIMATOR"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_r_shoulder")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("R_ELBOW_ANIMATOR"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_r_elbow")}),

            new ROUTE({
              fromField : new SFString("value_changed"),
              fromNode : new SFString("R_WRIST_ANIMATOR"),
              toField : new SFString("set_rotation"),
              toNode : new SFString("Joe_r_wrist")}),

            new NavigationInfo({
              avatarSize : new MFFloat([0.25,1.600000023841858,0.75]),
              headlight : new SFBool(false)}),

            new Viewpoint({
              description : new SFString("Front Up View"),
              orientation : new SFRotation([-1,-1,0,0.550000011920929]),
              position : new SFVec3f([-1,2,2.5])}),

            new Viewpoint({
              description : new SFString("From Left View"),
              orientation : new SFRotation([0.30000001192092896,1,0,-1.5700000524520874]),
              position : new SFVec3f([-2.5,1.5,0])}),

            new Viewpoint({
              description : new SFString("Front Mid View"),
              position : new SFVec3f([0,0.5,1.25])}),

            new Viewpoint({
              description : new SFString("Front Feet View"),
              position : new SFVec3f([0,0,0.75])}),

            new Viewpoint({
              description : new SFString("From Right View"),
              orientation : new SFRotation([0,1,0,1.5700000524520874]),
              position : new SFVec3f([1,1,0])}),

            new Viewpoint({
              description : new SFString("Front Head View"),
              position : new SFVec3f([0,1.649999976158142,0.75])}),

            new Viewpoint({
              description : new SFString("Front Mid View"),
              position : new SFVec3f([0,1,1.75])}),

            new Viewpoint({
              description : new SFString("Rear View"),
              orientation : new SFRotation([0,1,0,3.140000104904175]),
              position : new SFVec3f([0,1.5,-4])}),

            new Viewpoint({
              description : new SFString("Top View"),
              orientation : new SFRotation([1,0,0,-1.5700000524520874]),
              position : new SFVec3f([0,4,0])}),

            new Viewpoint({
              description : new SFString("Bottom View"),
              orientation : new SFRotation([1,0,0,1.5700000524520874]),
              position : new SFVec3f([0,-4,0])}),

            new Background({
              groundAngle : new MFFloat([1.5700000524520874]),
              groundColor : new MFColor([0,0.10000000149011612,0,0,0.10000000149011612,0]),
              skyColor : new MFColor([0,0,0.10000000149011612])}),

            new Transform({
              DEF : new SFString("cordsysfloor"),
              scale : new SFVec3f([0.17499999701976776,0.17499999701976776,0.17499999701976776]),
              children : new MFNode([
                new Inline({
                  url : new MFString(["JointCoordinateAxes.x3dv"])})])})])}))});
console.log(X3D0.toXMLNode());
