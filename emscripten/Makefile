# Define the compiler
EMCC = emcc

# Emscripten include path
EMSCRIPTEN_INCLUDE_PATH = /opt/homebrew/Cellar/emscripten/3.1.62/system/include/emscripten

# Source files
SRC_FILES = cpp/add.cpp

# Output file
OUTPUT_FILE = src/dist/add.mjs

# Compiler flags
CFLAGS = -I$(EMSCRIPTEN_INCLUDE_PATH) \
         -s EXPORTED_FUNCTIONS='["_add"]' \
				 -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' \
         -s MODULARIZE \
         -s EXPORT_ES6=1 \
         -O3

# Phony targets
.PHONY: all clean

# Default target
all: $(OUTPUT_FILE)

# Clean target
clean:
	rm -f $(OUTPUT_FILE)

# Build target
$(OUTPUT_FILE): $(SRC_FILES)
	$(EMCC) $(SRC_FILES) -o $(OUTPUT_FILE) $(CFLAGS)
