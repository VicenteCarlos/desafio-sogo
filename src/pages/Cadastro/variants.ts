const variantsPeople = {
    initial: {
        x: "-100vw"
    },
    visible: {
        x: "-0vw",
        transition: {
            type: "tween", duration: 1
        }
    }
}

const variantsContract = {
    initial: {
        y: -1000
    },
    visible: {
        y: 0,
        transition: {
            type: "spring", stiffness: 70 ,duration: 2, delay: 1
        }
    }
}

export { variantsPeople, variantsContract }