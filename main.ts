/**
 * Use weights to control the order of blocks, a higher
 * weight means higher in the toolbox
 */

//% color="#AA278D" 
namespace fountains {
    //% block="build lava fountain of size $size"
    //% size.defl=8
    //% size.min=3 size.max=50
    export function lavaFountain (size: number) {
        blocks.fill(
        NETHERRACK,
        posCamera(-size / 2, 0, 5),
        posCamera(size / 2, 1, 5 + size),
        FillOperation.Replace
        )
        blocks.fill(
        LAVA,
        posCamera(-size / 2 + 1, 1, 6),
        posCamera(size / 2 - 1, 1, 4 + size),
        FillOperation.Replace
        )
        blocks.fill(
        LAVA,
        posCamera(0, 4, 5 + size/2),
        posCamera(0, 4, 5 + size/2),
        FillOperation.Replace
        )
    }
}
