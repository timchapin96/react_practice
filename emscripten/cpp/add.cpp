
#include <emscripten.h>
// Example function to be called from JavaScript
extern "C" {
    EMSCRIPTEN_KEEPALIVE
    int add(int a, int b) {
        return a + b;
    }
}
