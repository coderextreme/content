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

# Include any dependencies generated for this target.
include samples/CMakeFiles/PParse.dir/depend.make

# Include the progress variables for this target.
include samples/CMakeFiles/PParse.dir/progress.make

# Include the compile flags for this target's objects.
include samples/CMakeFiles/PParse.dir/flags.make

samples/CMakeFiles/PParse.dir/src/PParse/PParse.cpp.o: samples/CMakeFiles/PParse.dir/flags.make
samples/CMakeFiles/PParse.dir/src/PParse/PParse.cpp.o: ../samples/src/PParse/PParse.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object samples/CMakeFiles/PParse.dir/src/PParse/PParse.cpp.o"
	cd /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake/samples && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/PParse.dir/src/PParse/PParse.cpp.o -c /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/samples/src/PParse/PParse.cpp

samples/CMakeFiles/PParse.dir/src/PParse/PParse.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/PParse.dir/src/PParse/PParse.cpp.i"
	cd /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake/samples && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/samples/src/PParse/PParse.cpp > CMakeFiles/PParse.dir/src/PParse/PParse.cpp.i

samples/CMakeFiles/PParse.dir/src/PParse/PParse.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/PParse.dir/src/PParse/PParse.cpp.s"
	cd /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake/samples && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/samples/src/PParse/PParse.cpp -o CMakeFiles/PParse.dir/src/PParse/PParse.cpp.s

samples/CMakeFiles/PParse.dir/src/PParse/PParseHandlers.cpp.o: samples/CMakeFiles/PParse.dir/flags.make
samples/CMakeFiles/PParse.dir/src/PParse/PParseHandlers.cpp.o: ../samples/src/PParse/PParseHandlers.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object samples/CMakeFiles/PParse.dir/src/PParse/PParseHandlers.cpp.o"
	cd /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake/samples && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/PParse.dir/src/PParse/PParseHandlers.cpp.o -c /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/samples/src/PParse/PParseHandlers.cpp

samples/CMakeFiles/PParse.dir/src/PParse/PParseHandlers.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/PParse.dir/src/PParse/PParseHandlers.cpp.i"
	cd /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake/samples && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/samples/src/PParse/PParseHandlers.cpp > CMakeFiles/PParse.dir/src/PParse/PParseHandlers.cpp.i

samples/CMakeFiles/PParse.dir/src/PParse/PParseHandlers.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/PParse.dir/src/PParse/PParseHandlers.cpp.s"
	cd /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake/samples && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/samples/src/PParse/PParseHandlers.cpp -o CMakeFiles/PParse.dir/src/PParse/PParseHandlers.cpp.s

# Object files for target PParse
PParse_OBJECTS = \
"CMakeFiles/PParse.dir/src/PParse/PParse.cpp.o" \
"CMakeFiles/PParse.dir/src/PParse/PParseHandlers.cpp.o"

# External object files for target PParse
PParse_EXTERNAL_OBJECTS =

samples/PParse: samples/CMakeFiles/PParse.dir/src/PParse/PParse.cpp.o
samples/PParse: samples/CMakeFiles/PParse.dir/src/PParse/PParseHandlers.cpp.o
samples/PParse: samples/CMakeFiles/PParse.dir/build.make
samples/PParse: src/libxerces-c-3.2.so
samples/PParse: /usr/lib/x86_64-linux-gnu/libnsl.so
samples/PParse: samples/CMakeFiles/PParse.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Linking CXX executable PParse"
	cd /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake/samples && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/PParse.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
samples/CMakeFiles/PParse.dir/build: samples/PParse

.PHONY : samples/CMakeFiles/PParse.dir/build

samples/CMakeFiles/PParse.dir/clean:
	cd /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake/samples && $(CMAKE_COMMAND) -P CMakeFiles/PParse.dir/cmake_clean.cmake
.PHONY : samples/CMakeFiles/PParse.dir/clean

samples/CMakeFiles/PParse.dir/depend:
	cd /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3 /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/samples /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake/samples /home/coderextreme/X3DJSONLD/src/main/cplusplus/xerces-c-3.2.3/cmake/samples/CMakeFiles/PParse.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : samples/CMakeFiles/PParse.dir/depend

