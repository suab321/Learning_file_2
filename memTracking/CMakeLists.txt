cmake_minimum_required()


add_executable(abhi "sample.cpp")
find_library(unwind libunwind.a REQUIRED)
find_library(unwind_2 libunwind-x86_64.a REQUIRED)
find_library(unwind_3 libunwind-ptrace.a REQUIRED)
target_link_libraries(abhi ${unwind} ${unwind_2} ${unwind_3})
# add_link_options("-rdynamic")
# add_link_options("-static" "-lboost")

