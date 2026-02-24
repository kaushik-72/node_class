import { timeEnd } from "node:console";
import crypto from "node:crypto";

function hp1() {
    console.time("hashAsync1");
    crypto.pbkdf2(
    qwerty123,
    "random-string",
    100000,
    64,
    "sha512",
    (err:Error | null, data: NonSharedBuffer)=>{

        console.timeEnd("hashAsync1");
    }
    );
}

function hp2() {
    console.time("hashAsync2");
    crypto.pbkdf2(
    qwerty123,
    "random-string",
    100000,
    64,
    "sha512",
    (err:Error | null, data: NonSharedBuffer)=>{

        console.timeEnd("hashAsync2");
    }
    );
}

function hp3() {
    console.time("hashAsync3");
    crypto.pbkdf2(
    qwerty123,
    "random-string",
    100000,
    64,
    "sha512",
    (err:Error | null, data: NonSharedBuffer)=>{

        console.timeEnd("hashAsync3");
    }
    );
}

function hp4() {
    console.time("hashAsync4");
    crypto.pbkdf2(
    qwerty123,
    "random-string",
    100000,
    64,
    "sha512",
    (err:, data)=>{

        console.timeEnd("hashAsync4");
    }
    );
}

hp1();
hp2();
hp3();
hp4();

// UV_THREADPOOL_SIZE=6 "execute: node fileName.js ........"

