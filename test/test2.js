import { flatten, unflatten } from "../index.js";

const obj = {
    hello: {
        lorem: {
            ipsum: "again",
            dolor: "sit",
        },
    },
    world: {
        lorem: {
            ipsum: "again",
            dolor: "sit",
        },
    },
};

const exceptFunc = (key, value) => {
    if (key == "hello.lorem") {
        return true
    }
}

flatten(obj, { except: exceptFunc });

