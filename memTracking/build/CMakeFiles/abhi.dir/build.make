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
CMAKE_SOURCE_DIR = /home/abhinav/Learning_file_2/memTracking

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/abhinav/Learning_file_2/memTracking/build

# Include any dependencies generated for this target.
include CMakeFiles/abhi.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/abhi.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/abhi.dir/flags.make

CMakeFiles/abhi.dir/sample.cpp.o: CMakeFiles/abhi.dir/flags.make
CMakeFiles/abhi.dir/sample.cpp.o: ../sample.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/abhinav/Learning_file_2/memTracking/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/abhi.dir/sample.cpp.o"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/abhi.dir/sample.cpp.o -c /home/abhinav/Learning_file_2/memTracking/sample.cpp

CMakeFiles/abhi.dir/sample.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/abhi.dir/sample.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/abhinav/Learning_file_2/memTracking/sample.cpp > CMakeFiles/abhi.dir/sample.cpp.i

CMakeFiles/abhi.dir/sample.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/abhi.dir/sample.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/abhinav/Learning_file_2/memTracking/sample.cpp -o CMakeFiles/abhi.dir/sample.cpp.s

# Object files for target abhi
abhi_OBJECTS = \
"CMakeFiles/abhi.dir/sample.cpp.o"

# External object files for target abhi
abhi_EXTERNAL_OBJECTS =

abhi: CMakeFiles/abhi.dir/sample.cpp.o
abhi: CMakeFiles/abhi.dir/build.make
abhi: /usr/local/lib/libunwind.a
abhi: /usr/local/lib/libunwind-x86_64.a
abhi: /usr/local/lib/libunwind-ptrace.a
abhi: CMakeFiles/abhi.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/abhinav/Learning_file_2/memTracking/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable abhi"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/abhi.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/abhi.dir/build: abhi

.PHONY : CMakeFiles/abhi.dir/build

CMakeFiles/abhi.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/abhi.dir/cmake_clean.cmake
.PHONY : CMakeFiles/abhi.dir/clean

CMakeFiles/abhi.dir/depend:
	cd /home/abhinav/Learning_file_2/memTracking/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/abhinav/Learning_file_2/memTracking /home/abhinav/Learning_file_2/memTracking /home/abhinav/Learning_file_2/memTracking/build /home/abhinav/Learning_file_2/memTracking/build /home/abhinav/Learning_file_2/memTracking/build/CMakeFiles/abhi.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/abhi.dir/depend
