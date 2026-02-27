function RectangularPrism(l=2, h=l/2, w=l/2) {
    this.area = l * h * w;
    let originPosition = {
        x: 0,
        y: 0,
        z: 0,
    };
    // this.getOriginPosition = () => {
    //     return originPosition;
    // }
    // this.setOriginPosition = () => {
    //     originPosition.x = x; originPosition.y = y; originPosition.z = z;
    // }
    // instead of setting public method to get private property like above
    // we could use getter and setter to be able manipulate the value
    // without give to much access to the property with cleaner syntax
    Object.defineProperty(this, 'originPosition', {
        get: () => {
            return originPosition;
        },
        set: (x, y, z) => {
            // we also could set validation
            if (!x || !y || !z) {
                throw new Error(`invalid value for ${Object.getOwnPropertyNames}`);
            }
            originPosition.x = x; originPosition.y = y; originPosition.z = z;
        },
    });
    this.moveOrigin = (x=1, y=1, z=1) => {
        return positon = {
            x: originPosition.x += x,
            y: originPosition.y += y,
            z: originPosition.z += z,
        };
    };
    this.create = () => {
        console.log(`sucessfully created ${this.constructor.name} with area of ${this.area} in ${JSON.stringify(originPosition)}`)
    };
}

const recPriObj = new RectangularPrism(50);
recPriObj.moveOrigin();
recPriObj.create();