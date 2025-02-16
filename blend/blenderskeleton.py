import bpy

# remove initial cube
objs = bpy.data.objects
objs.remove(objs["Cube"], do_unlink=True)

skeleton = bpy.data.objects.new("Humanoid_collection", bpy.data.armatures.new("Humanoid"))
bpy.context.collection.objects.link(skeleton)
bpy.context.view_layer.objects.active = skeleton
skeleton.select_set(True)
bpy.ops.object.mode_set(mode='EDIT')

# Create joints
joints = [
("Armature", (0, 0, 0), (0, 0, 0)),
("humanoid_root", (-0.0002, -0.1178, 0.8174), (0, 0, 0)),
                  ("l_tarsal_interphalangeal_1", (0, 0, 0), (0.0619, -0.0083, 0.0059)),
                ("l_metatarsophalangeal_1", (0.0619, -0.0083, 0.0059), (0.0644, -0.0577, 0.0147)),
              ("l_tarsometatarsal_1", (0.0644, -0.0577, 0.0147), (0.0672, -0.0835, 0.0235)),
            ("l_cuneonavicular_1", (0.0672, -0.0835, 0.0235), (0.0781, -0.0970, 0.0283)),
                    ("l_tarsal_distal_interphalangeal_2", (0.0841, 0.0216, 0.0013), (0.0841, 0.0121, 0.0041)),
                  ("l_tarsal_proximal_interphalangeal_2", (0.0841, 0.0121, 0.0041), (0.0824, -0.0040, 0.0064)),
                ("l_metatarsophalangeal_2", (0.0824, -0.0040, 0.0064), (0.0800, -0.0608, 0.0175)),
              ("l_tarsometatarsal_2", (0.0800, -0.0608, 0.0175), (0.0812, -0.0805, 0.0250)),
            ("l_cuneonavicular_2", (0.0812, -0.0805, 0.0250), (0.0781, -0.0970, 0.0283)),
                    ("l_tarsal_distal_interphalangeal_3", (0.1002, 0.0178, 0.0013), (0.0987, 0.0086, 0.0034)),
                  ("l_tarsal_proximal_interphalangeal_3", (0.0987, 0.0086, 0.0034), (0.0963, -0.0065, 0.0065)),
                ("l_metatarsophalangeal_3", (0.0963, -0.0065, 0.0065), (0.0944, -0.0625, 0.0175)),
              ("l_tarsometatarsal_3", (0.0944, -0.0625, 0.0175), (0.0928, -0.0821, 0.0248)),
            ("l_cuneonavicular_3", (0.0928, -0.0821, 0.0248), (0.0781, -0.0970, 0.0283)),
          ("l_talocalcaneonavicular", (0.0781, -0.0970, 0.0283), (0.0886, -0.1123, 0.0869)),
                    ("l_tarsal_distal_interphalangeal_4", (0.1155, 0.0118, 0.0008), (0.1140, 0.0044, 0.0037)),
                  ("l_tarsal_proximal_interphalangeal_4", (0.1140, 0.0044, 0.0037), (0.1097, -0.0107, 0.0058)),
                ("l_metatarsophalangeal_4", (0.1097, -0.0107, 0.0058), (0.1063, -0.0634, 0.0160)),
              ("l_tarsometatarsal_4", (0.1063, -0.0634, 0.0160), (0.1105, -0.0998, 0.0267)),
                    ("l_tarsal_distal_interphalangeal_5", (0.1271, 0.0000, 0.0000), (0.1262, -0.0077, 0.0023)),
                  ("l_tarsal_proximal_interphalangeal_5", (0.1262, -0.0077, 0.0023), (0.1239, -0.0153, 0.0051)),
                ("l_metatarsophalangeal_5", (0.1239, -0.0153, 0.0051), (0.1206, -0.0671, 0.0124)),
              ("l_tarsometatarsal_5", (0.1206, -0.0671, 0.0124), (0.1105, -0.0998, 0.0267)),
            ("l_transversetarsal", (0.1105, -0.0998, 0.0267), (0.0889, -0.1278, 0.0494)),
          ("l_calcaneocuboid", (0.0889, -0.1278, 0.0494), (0.0886, -0.1123, 0.0869)),
        ("l_talocrural", (0.0886, -0.1123, 0.0869), (0.0924, -0.1213, 0.4003)),
      ("l_knee", (0.0924, -0.1213, 0.4003), (0.0945, -0.1202, 0.8181)),
    ("l_hip", (0.0945, -0.1202, 0.8181), (-0.0002, -0.1178, 0.6986)),
                  ("r_tarsal_interphalangeal_1", (0, 0, 0), (-0.0619, -0.0083, 0.0059)),
                ("r_metatarsophalangeal_1", (-0.0619, -0.0083, 0.0059), (-0.0644, -0.0577, 0.0147)),
              ("r_tarsometatarsal_1", (-0.0644, -0.0577, 0.0147), (-0.0672, -0.0835, 0.0235)),
            ("r_cuneonavicular_1", (-0.0672, -0.0835, 0.0235), (-0.0781, -0.0970, 0.0283)),
                    ("r_tarsal_distal_interphalangeal_2", (-0.0841, 0.0216, 0.0013), (-0.0841, 0.0121, 0.0041)),
                  ("r_tarsal_proximal_interphalangeal_2", (-0.0841, 0.0121, 0.0041), (-0.0823, -0.0040, 0.0064)),
                ("r_metatarsophalangeal_2", (-0.0823, -0.0040, 0.0064), (-0.0800, -0.0608, 0.0175)),
              ("r_tarsometatarsal_2", (-0.0800, -0.0608, 0.0175), (-0.0812, -0.0805, 0.0250)),
            ("r_cuneonavicular_2", (-0.0812, -0.0805, 0.0250), (-0.0781, -0.0970, 0.0283)),
                    ("r_tarsal_distal_interphalangeal_3", (-0.1002, 0.0178, 0.0013), (-0.0987, 0.0086, 0.0034)),
                  ("r_tarsal_proximal_interphalangeal_3", (-0.0987, 0.0086, 0.0034), (-0.0963, -0.0065, 0.0065)),
                ("r_metatarsophalangeal_3", (-0.0963, -0.0065, 0.0065), (-0.0944, -0.0625, 0.0175)),
              ("r_tarsometatarsal_3", (-0.0944, -0.0625, 0.0175), (-0.0928, -0.0821, 0.0248)),
            ("r_cuneonavicular_3", (-0.0928, -0.0821, 0.0248), (-0.0781, -0.0970, 0.0283)),
          ("r_talocalcaneonavicular", (-0.0781, -0.0970, 0.0283), (-0.0886, -0.1123, 0.0869)),
                    ("r_tarsal_distal_interphalangeal_4", (-0.1155, 0.0118, 0.0008), (-0.1140, 0.0044, 0.0037)),
                  ("r_tarsal_proximal_interphalangeal_4", (-0.1140, 0.0044, 0.0037), (-0.1097, -0.0107, 0.0058)),
                ("r_metatarsophalangeal_4", (-0.1097, -0.0107, 0.0058), (-0.1063, -0.0634, 0.0160)),
              ("r_tarsometatarsal_4", (-0.1063, -0.0634, 0.0160), (-0.1105, -0.0998, 0.0267)),
                    ("r_tarsal_distal_interphalangeal_5", (-0.1271, 0.0000, 0.0000), (-0.1262, -0.0077, 0.0023)),
                  ("r_tarsal_proximal_interphalangeal_5", (-0.1262, -0.0077, 0.0023), (-0.1239, -0.0153, 0.0051)),
                ("r_metatarsophalangeal_5", (-0.1239, -0.0153, 0.0051), (-0.1206, -0.0671, 0.0124)),
              ("r_tarsometatarsal_5", (-0.1206, -0.0671, 0.0124), (-0.1105, -0.0998, 0.0267)),
            ("r_transversetarsal", (-0.1105, -0.0998, 0.0267), (-0.0889, -0.1278, 0.0494)),
          ("r_calcaneocuboid", (-0.0889, -0.1278, 0.0494), (-0.0886, -0.1123, 0.0869)),
        ("r_talocrural", (-0.0886, -0.1123, 0.0869), (-0.0928, -0.1213, 0.4003)),
      ("r_knee", (-0.0928, -0.1213, 0.4003), (-0.0948, -0.1202, 0.8181)),
    ("r_hip", (-0.0948, -0.1202, 0.8181), (-0.0002, -0.1178, 0.6986)),
  ("sacroiliac", (-0.0002, -0.1178, 0.6986), (-0.0002, -0.1178, 0.8174)),
                                                    ("l_eyelid_joint", (0.0503, -0.0689, 1.4157), (-0.0002, -0.1173, 1.3041)),
                                                    ("r_eyelid_joint", (-0.0507, -0.0689, 1.4157), (-0.0002, -0.1173, 1.3041)),
                                                    ("l_eyeball_joint", (0.0479, -0.0188, 1.3963), (-0.0002, -0.1173, 1.3041)),
                                                    ("r_eyeball_joint", (-0.0483, -0.0188, 1.3963), (-0.0002, -0.1173, 1.3041)),
                                                    ("l_eyebrow_joint", (0.0216, 0.0051, 1.4053), (-0.0002, -0.1173, 1.3041)),
                                                    ("r_eyebrow_joint", (-0.0219, 0.0051, 1.4053), (-0.0002, -0.1173, 1.3041)),
                                                    ("temporomandibular", (-0.0002, -0.0865, 1.3043), (-0.0002, -0.1173, 1.3041)),
                                                  ("skullbase", (-0.0002, -0.1173, 1.3041), (-0.0002, -0.1169, 1.3099)),
                                                ("vc1", (-0.0002, -0.1169, 1.3099), (-0.0002, -0.1169, 1.2982)),
                                              ("vc2", (-0.0002, -0.1169, 1.2982), (-0.0002, -0.1169, 1.2865)),
                                            ("vc3", (-0.0002, -0.1169, 1.2865), (-0.0002, -0.1169, 1.2737)),
                                          ("vc4", (-0.0002, -0.1169, 1.2737), (-0.0002, -0.1169, 1.2613)),
                                        ("vc5", (-0.0002, -0.1169, 1.2613), (-0.0002, -0.1169, 1.2490)),
                                      ("vc6", (-0.0002, -0.1169, 1.2490), (-0.0002, -0.1169, 1.2368)),
                                    ("vc7", (-0.0002, -0.1169, 1.2368), (-0.0002, -0.1156, 1.2109)),
                                                    ("l_carpal_interphalangeal_1", (0.1825, -0.0522, 0.6455), (0.1809, -0.0661, 0.6642)),
                                                  ("l_metacarpophalangeal_1", (0.1809, -0.0661, 0.6642), (0.1803, -0.0759, 0.6840)),
                                                ("l_carpometacarpal_1", (0.1803, -0.0759, 0.6840), (0.1811, -0.0826, 0.6975)),
                                              ("l_midcarpal_1", (0.1811, -0.0826, 0.6975), (0.1818, -0.1069, 0.7157)),
                                                      ("l_carpal_distal_interphalangeal_2", (0.1805, -0.0885, 0.5731), (0.1815, -0.0877, 0.5983)),
                                                    ("l_carpal_proximal_interphalangeal_2", (0.1815, -0.0877, 0.5983), (0.1836, -0.0868, 0.6286)),
                                                  ("l_metacarpophalangeal_2", (0.1836, -0.0868, 0.6286), (0.1811, -0.0922, 0.6790)),
                                                ("l_carpometacarpal_2", (0.1811, -0.0922, 0.6790), (0.1811, -0.0935, 0.6984)),
                                              ("l_midcarpal_2", (0.1811, -0.0935, 0.6984), (0.1818, -0.1069, 0.7157)),
                                                      ("l_carpal_distal_interphalangeal_3", (0.1805, -0.1056, 0.5668), (0.1815, -0.1054, 0.5947)),
                                                    ("l_carpal_proximal_interphalangeal_3", (0.1815, -0.1054, 0.5947), (0.1835, -0.1058, 0.6264)),
                                                  ("l_metacarpophalangeal_3", (0.1835, -0.1058, 0.6264), (0.1809, -0.1081, 0.6772)),
                                                ("l_carpometacarpal_3", (0.1809, -0.1081, 0.6772), (0.1809, -0.1067, 0.7000)),
                                              ("l_midcarpal_3", (0.1809, -0.1067, 0.7000), (0.1818, -0.1069, 0.7157)),
                                                      ("l_carpal_distal_interphalangeal_4", (0.1805, -0.1217, 0.5722), (0.1815, -0.1225, 0.5980)),
                                                    ("l_carpal_proximal_interphalangeal_4", (0.1815, -0.1225, 0.5980), (0.1835, -0.1233, 0.6255)),
                                                  ("l_metacarpophalangeal_4", (0.1835, -0.1233, 0.6255), (0.1809, -0.1218, 0.6777)),
                                                ("l_carpometacarpal_4", (0.1809, -0.1218, 0.6777), (0.1809, -0.1276, 0.6973)),
                                                      ("l_carpal_distal_interphalangeal_5", (0.1806, -0.1388, 0.5938), (0.1815, -0.1390, 0.6124)),
                                                    ("l_carpal_proximal_interphalangeal_5", (0.1815, -0.1390, 0.6124), (0.1832, -0.1389, 0.6295)),
                                                  ("l_metacarpophalangeal_5", (0.1832, -0.1389, 0.6295), (0.1815, -0.1347, 0.6797)),
                                                ("l_carpometacarpal_5", (0.1815, -0.1347, 0.6797), (0.1809, -0.1276, 0.6973)),
                                              ("l_midcarpal_4_5", (0.1809, -0.1276, 0.6973), (0.1818, -0.1069, 0.7157)),
                                            ("l_radiocarpal", (0.1818, -0.1069, 0.7157), (0.1819, -0.1075, 0.9202)),
                                          ("l_elbow", (0.1819, -0.1075, 0.9202), (0.1649, -0.1051, 1.1700)),
                                        ("l_shoulder", (0.1649, -0.1051, 1.1700), (0.0383, -0.1157, 1.2001)),
                                      ("l_acromioclavicular", (0.0383, -0.1157, 1.2001), (0.1228, -0.1148, 1.1833)),
                                    ("l_sternoclavicular", (0.1228, -0.1148, 1.1833), (-0.0002, -0.1156, 1.2109)),
                                                    ("r_carpal_interphalangeal_1", (-0.1825, -0.0522, 0.6455), (-0.1808, -0.0661, 0.6642)),
                                                  ("r_metacarpophalangeal_1", (-0.1808, -0.0661, 0.6642), (-0.1803, -0.0759, 0.6840)),
                                                ("r_carpometacarpal_1", (-0.1803, -0.0759, 0.6840), (-0.1811, -0.0826, 0.6975)),
                                              ("r_midcarpal_1", (-0.1811, -0.0826, 0.6975), (-0.1818, -0.1069, 0.7157)),
                                                      ("r_carpal_distal_interphalangeal_2", (-0.1805, -0.0885, 0.5731), (-0.1815, -0.0877, 0.5983)),
                                                    ("r_carpal_proximal_interphalangeal_2", (-0.1815, -0.0877, 0.5983), (-0.1835, -0.0868, 0.6286)),
                                                  ("r_metacarpophalangeal_2", (-0.1835, -0.0868, 0.6286), (-0.1811, -0.0922, 0.6790)),
                                                ("r_carpometacarpal_2", (-0.1811, -0.0922, 0.6790), (-0.1811, -0.0935, 0.6984)),
                                              ("r_midcarpal_2", (-0.1811, -0.0935, 0.6984), (-0.1818, -0.1069, 0.7157)),
                                                      ("r_carpal_distal_interphalangeal_3", (-0.1805, -0.1056, 0.5668), (-0.1815, -0.1054, 0.5947)),
                                                    ("r_carpal_proximal_interphalangeal_3", (-0.1815, -0.1054, 0.5947), (-0.1835, -0.1058, 0.6264)),
                                                  ("r_metacarpophalangeal_3", (-0.1835, -0.1058, 0.6264), (-0.1809, -0.1081, 0.6772)),
                                                ("r_carpometacarpal_3", (-0.1809, -0.1081, 0.6772), (-0.1809, -0.1067, 0.7000)),
                                              ("r_midcarpal_3", (-0.1809, -0.1067, 0.7000), (-0.1818, -0.1069, 0.7157)),
                                                      ("r_carpal_distal_interphalangeal_4", (-0.1805, -0.1217, 0.5722), (-0.1815, -0.1225, 0.5980)),
                                                    ("r_carpal_proximal_interphalangeal_4", (-0.1815, -0.1225, 0.5980), (-0.1835, -0.1233, 0.6255)),
                                                  ("r_metacarpophalangeal_4", (-0.1835, -0.1233, 0.6255), (-0.1809, -0.1218, 0.6777)),
                                                ("r_carpometacarpal_4", (-0.1809, -0.1218, 0.6777), (-0.1809, -0.1276, 0.6973)),
                                                      ("r_carpal_distal_interphalangeal_5", (-0.1806, -0.1388, 0.5938), (-0.1815, -0.1390, 0.6124)),
                                                    ("r_carpal_proximal_interphalangeal_5", (-0.1815, -0.1390, 0.6124), (-0.1832, -0.1389, 0.6295)),
                                                  ("r_metacarpophalangeal_5", (-0.1832, -0.1389, 0.6295), (-0.1814, -0.1347, 0.6797)),
                                                ("r_carpometacarpal_5", (-0.1814, -0.1347, 0.6797), (-0.1809, -0.1276, 0.6973)),
                                              ("r_midcarpal_4_5", (-0.1809, -0.1276, 0.6973), (-0.1818, -0.1069, 0.7157)),
                                            ("r_radiocarpal", (-0.1818, -0.1069, 0.7157), (-0.1819, -0.1075, 0.9202)),
                                          ("r_elbow", (-0.1819, -0.1075, 0.9202), (-0.1649, -0.1051, 1.1700)),
                                        ("r_shoulder", (-0.1649, -0.1051, 1.1700), (-0.0387, -0.1157, 1.2001)),
                                      ("r_acromioclavicular", (-0.0387, -0.1157, 1.2001), (-0.1231, -0.1148, 1.1833)),
                                    ("r_sternoclavicular", (-0.1231, -0.1148, 1.1833), (-0.0002, -0.1156, 1.2109)),
                                  ("vt1", (-0.0002, -0.1156, 1.2109), (-0.0002, -0.1157, 1.1871)),
                                ("vt2", (-0.0002, -0.1157, 1.1871), (-0.0002, -0.1156, 1.1623)),
                              ("vt3", (-0.0002, -0.1156, 1.1623), (-0.0002, -0.1156, 1.1439)),
                            ("vt4", (-0.0002, -0.1156, 1.1439), (-0.0002, -0.1156, 1.1286)),
                          ("vt5", (-0.0002, -0.1156, 1.1286), (-0.0002, -0.1156, 1.1131)),
                        ("vt6", (-0.0002, -0.1156, 1.1131), (-0.0002, -0.1156, 1.1002)),
                      ("vt7", (-0.0002, -0.1156, 1.1002), (-0.0002, -0.1156, 1.0845)),
                    ("vt8", (-0.0002, -0.1156, 1.0845), (-0.0002, -0.1156, 1.0699)),
                  ("vt9", (-0.0002, -0.1156, 1.0699), (-0.0002, -0.1157, 1.0552)),
                ("vt10", (-0.0002, -0.1157, 1.0552), (-0.0002, -0.1156, 1.0381)),
              ("vt11", (-0.0002, -0.1156, 1.0381), (-0.0002, -0.1156, 1.0145)),
            ("vt12", (-0.0002, -0.1156, 1.0145), (-0.0002, -0.1156, 0.9911)),
          ("vl1", (-0.0002, -0.1156, 0.9911), (-0.0002, -0.1156, 0.9738)),
        ("vl2", (-0.0002, -0.1156, 0.9738), (-0.0002, -0.1156, 0.9574)),
      ("vl3", (-0.0002, -0.1156, 0.9574), (-0.0002, -0.1156, 0.9412)),
    ("vl4", (-0.0002, -0.1156, 0.9412), (-0.0002, -0.1156, 0.9169)),
  ("vl5", (-0.0002, -0.1156, 0.9169), (-0.0002, -0.1178, 0.8174)),
]

for joint in joints:
    joint_name, joint_start, joint_end = joint
    bpy.ops.armature.bone_primitive_add(name=joint_name)
    new_segment = skeleton.data.edit_bones[joint_name]
    new_segment.head = joint_start
    new_segment.tail = joint_end

# Connect joints
segments = [
                  ("l_metatarsophalangeal_1", "l_tarsal_interphalangeal_1"),
                ("l_tarsometatarsal_1", "l_metatarsophalangeal_1"),
              ("l_cuneonavicular_1", "l_tarsometatarsal_1"),
            ("l_talocalcaneonavicular", "l_cuneonavicular_1"),
                    ("l_tarsal_proximal_interphalangeal_2", "l_tarsal_distal_interphalangeal_2"),
                  ("l_metatarsophalangeal_2", "l_tarsal_proximal_interphalangeal_2"),
                ("l_tarsometatarsal_2", "l_metatarsophalangeal_2"),
              ("l_cuneonavicular_2", "l_tarsometatarsal_2"),
            ("l_talocalcaneonavicular", "l_cuneonavicular_2"),
                    ("l_tarsal_proximal_interphalangeal_3", "l_tarsal_distal_interphalangeal_3"),
                  ("l_metatarsophalangeal_3", "l_tarsal_proximal_interphalangeal_3"),
                ("l_tarsometatarsal_3", "l_metatarsophalangeal_3"),
              ("l_cuneonavicular_3", "l_tarsometatarsal_3"),
            ("l_talocalcaneonavicular", "l_cuneonavicular_3"),
          ("l_talocrural", "l_talocalcaneonavicular"),
                    ("l_tarsal_proximal_interphalangeal_4", "l_tarsal_distal_interphalangeal_4"),
                  ("l_metatarsophalangeal_4", "l_tarsal_proximal_interphalangeal_4"),
                ("l_tarsometatarsal_4", "l_metatarsophalangeal_4"),
              ("l_transversetarsal", "l_tarsometatarsal_4"),
                    ("l_tarsal_proximal_interphalangeal_5", "l_tarsal_distal_interphalangeal_5"),
                  ("l_metatarsophalangeal_5", "l_tarsal_proximal_interphalangeal_5"),
                ("l_tarsometatarsal_5", "l_metatarsophalangeal_5"),
              ("l_transversetarsal", "l_tarsometatarsal_5"),
            ("l_calcaneocuboid", "l_transversetarsal"),
          ("l_talocrural", "l_calcaneocuboid"),
        ("l_knee", "l_talocrural"),
      ("l_hip", "l_knee"),
    ("sacroiliac", "l_hip"),
                  ("r_metatarsophalangeal_1", "r_tarsal_interphalangeal_1"),
                ("r_tarsometatarsal_1", "r_metatarsophalangeal_1"),
              ("r_cuneonavicular_1", "r_tarsometatarsal_1"),
            ("r_talocalcaneonavicular", "r_cuneonavicular_1"),
                    ("r_tarsal_proximal_interphalangeal_2", "r_tarsal_distal_interphalangeal_2"),
                  ("r_metatarsophalangeal_2", "r_tarsal_proximal_interphalangeal_2"),
                ("r_tarsometatarsal_2", "r_metatarsophalangeal_2"),
              ("r_cuneonavicular_2", "r_tarsometatarsal_2"),
            ("r_talocalcaneonavicular", "r_cuneonavicular_2"),
                    ("r_tarsal_proximal_interphalangeal_3", "r_tarsal_distal_interphalangeal_3"),
                  ("r_metatarsophalangeal_3", "r_tarsal_proximal_interphalangeal_3"),
                ("r_tarsometatarsal_3", "r_metatarsophalangeal_3"),
              ("r_cuneonavicular_3", "r_tarsometatarsal_3"),
            ("r_talocalcaneonavicular", "r_cuneonavicular_3"),
          ("r_talocrural", "r_talocalcaneonavicular"),
                    ("r_tarsal_proximal_interphalangeal_4", "r_tarsal_distal_interphalangeal_4"),
                  ("r_metatarsophalangeal_4", "r_tarsal_proximal_interphalangeal_4"),
                ("r_tarsometatarsal_4", "r_metatarsophalangeal_4"),
              ("r_transversetarsal", "r_tarsometatarsal_4"),
                    ("r_tarsal_proximal_interphalangeal_5", "r_tarsal_distal_interphalangeal_5"),
                  ("r_metatarsophalangeal_5", "r_tarsal_proximal_interphalangeal_5"),
                ("r_tarsometatarsal_5", "r_metatarsophalangeal_5"),
              ("r_transversetarsal", "r_tarsometatarsal_5"),
            ("r_calcaneocuboid", "r_transversetarsal"),
          ("r_talocrural", "r_calcaneocuboid"),
        ("r_knee", "r_talocrural"),
      ("r_hip", "r_knee"),
    ("sacroiliac", "r_hip"),
  ("humanoid_root", "sacroiliac"),
                                                    ("skullbase", "l_eyelid_joint"),
                                                    ("skullbase", "r_eyelid_joint"),
                                                    ("skullbase", "l_eyeball_joint"),
                                                    ("skullbase", "r_eyeball_joint"),
                                                    ("skullbase", "l_eyebrow_joint"),
                                                    ("skullbase", "r_eyebrow_joint"),
                                                    ("skullbase", "temporomandibular"),
                                                  ("vc1", "skullbase"),
                                                ("vc2", "vc1"),
                                              ("vc3", "vc2"),
                                            ("vc4", "vc3"),
                                          ("vc5", "vc4"),
                                        ("vc6", "vc5"),
                                      ("vc7", "vc6"),
                                    ("vt1", "vc7"),
                                                    ("l_metacarpophalangeal_1", "l_carpal_interphalangeal_1"),
                                                  ("l_carpometacarpal_1", "l_metacarpophalangeal_1"),
                                                ("l_midcarpal_1", "l_carpometacarpal_1"),
                                              ("l_radiocarpal", "l_midcarpal_1"),
                                                      ("l_carpal_proximal_interphalangeal_2", "l_carpal_distal_interphalangeal_2"),
                                                    ("l_metacarpophalangeal_2", "l_carpal_proximal_interphalangeal_2"),
                                                  ("l_carpometacarpal_2", "l_metacarpophalangeal_2"),
                                                ("l_midcarpal_2", "l_carpometacarpal_2"),
                                              ("l_radiocarpal", "l_midcarpal_2"),
                                                      ("l_carpal_proximal_interphalangeal_3", "l_carpal_distal_interphalangeal_3"),
                                                    ("l_metacarpophalangeal_3", "l_carpal_proximal_interphalangeal_3"),
                                                  ("l_carpometacarpal_3", "l_metacarpophalangeal_3"),
                                                ("l_midcarpal_3", "l_carpometacarpal_3"),
                                              ("l_radiocarpal", "l_midcarpal_3"),
                                                      ("l_carpal_proximal_interphalangeal_4", "l_carpal_distal_interphalangeal_4"),
                                                    ("l_metacarpophalangeal_4", "l_carpal_proximal_interphalangeal_4"),
                                                  ("l_carpometacarpal_4", "l_metacarpophalangeal_4"),
                                                ("l_midcarpal_4_5", "l_carpometacarpal_4"),
                                                      ("l_carpal_proximal_interphalangeal_5", "l_carpal_distal_interphalangeal_5"),
                                                    ("l_metacarpophalangeal_5", "l_carpal_proximal_interphalangeal_5"),
                                                  ("l_carpometacarpal_5", "l_metacarpophalangeal_5"),
                                                ("l_midcarpal_4_5", "l_carpometacarpal_5"),
                                              ("l_radiocarpal", "l_midcarpal_4_5"),
                                            ("l_elbow", "l_radiocarpal"),
                                          ("l_shoulder", "l_elbow"),
                                        ("l_acromioclavicular", "l_shoulder"),
                                      ("l_sternoclavicular", "l_acromioclavicular"),
                                    ("vt1", "l_sternoclavicular"),
                                                    ("r_metacarpophalangeal_1", "r_carpal_interphalangeal_1"),
                                                  ("r_carpometacarpal_1", "r_metacarpophalangeal_1"),
                                                ("r_midcarpal_1", "r_carpometacarpal_1"),
                                              ("r_radiocarpal", "r_midcarpal_1"),
                                                      ("r_carpal_proximal_interphalangeal_2", "r_carpal_distal_interphalangeal_2"),
                                                    ("r_metacarpophalangeal_2", "r_carpal_proximal_interphalangeal_2"),
                                                  ("r_carpometacarpal_2", "r_metacarpophalangeal_2"),
                                                ("r_midcarpal_2", "r_carpometacarpal_2"),
                                              ("r_radiocarpal", "r_midcarpal_2"),
                                                      ("r_carpal_proximal_interphalangeal_3", "r_carpal_distal_interphalangeal_3"),
                                                    ("r_metacarpophalangeal_3", "r_carpal_proximal_interphalangeal_3"),
                                                  ("r_carpometacarpal_3", "r_metacarpophalangeal_3"),
                                                ("r_midcarpal_3", "r_carpometacarpal_3"),
                                              ("r_radiocarpal", "r_midcarpal_3"),
                                                      ("r_carpal_proximal_interphalangeal_4", "r_carpal_distal_interphalangeal_4"),
                                                    ("r_metacarpophalangeal_4", "r_carpal_proximal_interphalangeal_4"),
                                                  ("r_carpometacarpal_4", "r_metacarpophalangeal_4"),
                                                ("r_midcarpal_4_5", "r_carpometacarpal_4"),
                                                      ("r_carpal_proximal_interphalangeal_5", "r_carpal_distal_interphalangeal_5"),
                                                    ("r_metacarpophalangeal_5", "r_carpal_proximal_interphalangeal_5"),
                                                  ("r_carpometacarpal_5", "r_metacarpophalangeal_5"),
                                                ("r_midcarpal_4_5", "r_carpometacarpal_5"),
                                              ("r_radiocarpal", "r_midcarpal_4_5"),
                                            ("r_elbow", "r_radiocarpal"),
                                          ("r_shoulder", "r_elbow"),
                                        ("r_acromioclavicular", "r_shoulder"),
                                      ("r_sternoclavicular", "r_acromioclavicular"),
                                    ("vt1", "r_sternoclavicular"),
                                  ("vt2", "vt1"),
                                ("vt3", "vt2"),
                              ("vt4", "vt3"),
                            ("vt5", "vt4"),
                          ("vt6", "vt5"),
                        ("vt7", "vt6"),
                      ("vt8", "vt7"),
                    ("vt9", "vt8"),
                  ("vt10", "vt9"),
                ("vt11", "vt10"),
              ("vt12", "vt11"),
            ("vl1", "vt12"),
          ("vl2", "vl1"),
        ("vl3", "vl2"),
      ("vl4", "vl3"),
    ("vl5", "vl4"),
  ("humanoid_root", "vl5"),
("Armature", "humanoid_root")
]

for segment in segments:
    parent_joint, child_joint = segment
    parent = skeleton.data.edit_bones[parent_joint]
    child = skeleton.data.edit_bones[child_joint]
    child.parent = parent

# Exit edit mode
bpy.ops.object.mode_set(mode='OBJECT')
bpy.ops.export_scene.x3dv(filepath="blenderSkeleton.html", export_format="HTML")
bpy.ops.export_scene.x3dv(filepath="blenderSkeleton.x3d", export_format="X3D")
bpy.ops.export_scene.x3dv(filepath="blenderSkeleton.x3dv", export_format="X3DV")
