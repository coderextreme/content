# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.16

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake

# Utility rule file for createdocs.

# Include the progress variables for this target.
include doc/CMakeFiles/createdocs.dir/progress.make

doc/CMakeFiles/createdocs:
	cd /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake/doc && /usr/bin/cmake -E copy_directory /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/doc/style /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake/doc/style
	cd /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake/doc && /usr/bin/java -Djava.awt.headless=true -classpath /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/tools/jars/stylebook-1.0-b2.jar:/home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/tools/jars/xalan.jar:/home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/tools/jars/xerces.jar org.apache.stylebook.StyleBook targetDirectory=/home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake/doc/html /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/doc/xerces-c_book.xml /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake/doc/style

createdocs: doc/CMakeFiles/createdocs
createdocs: doc/CMakeFiles/createdocs.dir/build.make

.PHONY : createdocs

# Rule to build all files generated by this target.
doc/CMakeFiles/createdocs.dir/build: createdocs

.PHONY : doc/CMakeFiles/createdocs.dir/build

doc/CMakeFiles/createdocs.dir/clean:
	cd /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake/doc && $(CMAKE_COMMAND) -P CMakeFiles/createdocs.dir/cmake_clean.cmake
.PHONY : doc/CMakeFiles/createdocs.dir/clean

doc/CMakeFiles/createdocs.dir/depend:
	cd /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3 /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/doc /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake/doc /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake/doc/CMakeFiles/createdocs.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : doc/CMakeFiles/createdocs.dir/depend

