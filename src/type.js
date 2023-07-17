'use strict';

new TypeIt('.home__title--strong', {
    loop: true,
    Speed: 100,
}) // Front-End|
.move(-9)
.type('Amazing ') // Amazing |Front-End
.pause(1000)
.move(null, { to: 'End' }) // Amazing Front-End|
.delete() // | , 모든 것을 삭제
.type('Front-end Engineer') // Front-end Engineer|
.pause(1000)
.delete()
.go();