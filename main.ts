/**
 * Use weights to control the order of blocks, a higher
 * weight means higher in the toolbox
 */

//% color="#F4DF3E" 
namespace fountains {
    //% block="build lava fountain of size $size"
    //% size.defl=8
    //% size.min=4 size.max=50
    export function lavaFountain(size: number) {
        size = size % 2 ? size -1 : size;
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
            posCamera(0, 4, 5 + size / 2),
            posCamera(0, 4, 5 + size / 2),
            FillOperation.Replace
        )
    }

    //% block="build glass fountain of size $size"
    //% size.defl=8
    //% size.min=4 size.max=50
    export function glassFountain(size: number) {
        size = size % 2 ? size -1 : size;
        blocks.fill(
            GLASS,
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
            posCamera(0, 4, 5 + size / 2),
            posCamera(0, 4, 5 + size / 2),
            FillOperation.Replace
        )
    }

    //% block="build overgrown fountain of size $size"
    //% size.defl=8
    //% size.min=4 size.max=50
    export function overgrownFountain(size: number) {
        size = size % 2 ? size -1 : size;
        blocks.fill(
            MOSS_STONE,
            posCamera(-size / 2, 0, 5),
            posCamera(size / 2, 1, 5 + size),
            FillOperation.Replace
        )
        blocks.fill(
            WATER,
            posCamera(-size / 2 + 1, 1, 6),
            posCamera(size / 2 - 1, 1, 4 + size),
            FillOperation.Replace
        )
        blocks.fill(
            WATER,
            posCamera(0, 4, 5 + size / 2),
            posCamera(0, 4, 5 + size / 2),
            FillOperation.Replace
        )
        blocks.fill(
            SEA_LANTERN,
            posCamera(0, 0, 5 + size / 2),
            posCamera(0, 0, 5 + size / 2),
            FillOperation.Replace
        )
        blocks.fill(
            LEAVES_JUNGLE,
            posCamera(size/2, 2, 5),
            posCamera(size/2, 3, 5),
            FillOperation.Replace
        )
        blocks.fill(
            LEAVES_JUNGLE,
            posCamera(size / 2, 2, 5+size),
            posCamera(size / 2, 3, 5+size),
            FillOperation.Replace
        )
        blocks.fill(
            LEAVES_JUNGLE,
            posCamera(-size / 2, 2, 5+size),
            posCamera(-size / 2, 3, 5+size),
            FillOperation.Replace
        )
        blocks.fill(
            LEAVES_JUNGLE,
            posCamera(-size / 2, 2, 5),
            posCamera(-size / 2, 3, 5),
            FillOperation.Replace
        )
    }

}
