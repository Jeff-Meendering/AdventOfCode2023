#include <stdio.h>

int main() {
    FILE* fptr;

    fptr = fopen("input.txt", "r");

    if (fptr == NULL) {
        printf("Wrong file, program will now be killed");
        exit(0);
    }
    
    if (fptr != NULL) {
        printf("File is now opened");
        exit(0);
    }

    return 0;
}