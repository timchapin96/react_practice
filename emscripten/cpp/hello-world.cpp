// cpp/hello-world.cpp

#include <emscripten.h>

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    void main() {
        // Your main function logic
        printf("Hello from main function!\n");
    }
}
