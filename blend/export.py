import bpy

# bpy.ops.import_scene.fbx(filepath = "../../WinterAndSpring/LILY_7_3_BLEND.fbx")
bpy.ops.wm.open_mainfile(filepath="LILY_7_3_BLEND.blend")
bpy.ops.export_scene.x3dv(filepath="fooLily.x3d")
