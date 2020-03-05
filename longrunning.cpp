#include <iostream>

int main(int argc, const char * argv[]) {
  auto input = "";

  if (argc > 1) {
    input = argv[1];
  }
  auto count = 1000000000;
  auto inc = 0;
  for (auto i = 0; i < count; i++) {
    inc += 2;
  }
  std::cout << input << "->" << inc << std::endl;
}