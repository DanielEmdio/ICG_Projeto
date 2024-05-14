
export let controls = {}

window.addEventListener("keydown", (e) => {
    controls[e.key.toLowerCase()] = true
})

window.addEventListener("keyup", (e) => {
    controls[e.key.toLowerCase()] = false
})

function easeOutQuad(t) {
    return 1 - (1 - t) * (1 - t)
}

let maxSpeed = 0.04
let jaw = 0
let pitch = 0
let speed = 0.01 // 0.01
export let turbo = 0
export function updateShip(shipPosition, x, y, z, camera) {
    jaw *= 0.95
    pitch *= 0.95

    if(Math.abs(jaw) > maxSpeed) {
        jaw = maxSpeed * Math.sign(jaw)
    }
    if(Math.abs(pitch) > maxSpeed) {
        pitch = maxSpeed * Math.sign(pitch)
    }

    if (controls["w"]) {
        pitch += 0.001
    }
    if (controls["s"]) {
        pitch -= 0.001
    }
    if (controls["a"]) {
        jaw += 0.001
    }
    if (controls["d"]) {
        jaw -= 0.001
    }


    x.applyAxisAngle(z, jaw)
    y.applyAxisAngle(z, jaw)

    y.applyAxisAngle(x, pitch)
    z.applyAxisAngle(x, pitch)

    x.normalize()
    y.normalize()
    z.normalize()

    if (controls.shift) {
        turbo += 0.025;
    } else {   
        turbo *= 0.95;
    }
    turbo = Math.min(1, turbo)

    let turboSpeed = 0.12 * easeOutQuad(turbo) //0.02

    camera.fov = 50 + turboSpeed * 200;
    camera.updateProjectionMatrix();

    shipPosition.add(z.clone().multiplyScalar(-speed - turboSpeed))
}