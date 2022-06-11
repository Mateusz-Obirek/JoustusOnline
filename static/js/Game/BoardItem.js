class BoardItem extends THREE.Mesh{
    #color = 0x000000
    constructor(texture, size, offsetX, offsetY){
        let geometry = new THREE.BoxGeometry(size, size, 1);
        let tex = new THREE.TextureLoader().load(texture)
        tex.repeat.x = 409.6 / 2048;
        tex.repeat.y = 409.6 / 2048;
        tex.offset.x = offsetX* tex.repeat.x
        tex.offset.y = offsetY* tex.repeat.y;
        let material = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide,
            wireframe: false,
            transparent: true,
            map:tex
        })
        super(geometry, material)
        this.#color = 0xffffff
        this.containsGem = false
    }

    //uses hex
    changeColor(color){
        this.material.color.setHex(color)
    }

    changeColorToOrigin(){
        this.material.color.setHex(this.#color)
    }
}

export default BoardItem