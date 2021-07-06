import React from 'react'
import Button from 'react';
import './Projects.css';


// const projects = [
//     "Village Book Builders",
//     "Anytime Fitness Fitness Tracker App",
//     "Human Rights First Asylum Analysis Project",
//     "Facebook Clone",
//     "Python Pong",
//     "Space invaders",

// ];


function Projects() {
    return (
        <div className='myWork'>
            <div ClassName='project-pics'>
                <h2>Space Invaders style Arcade game using Python and Pygame</h2>
                <img id='spceinv' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEcSelwte6T3pDYi5osIoPiifgn2Ow0fYTTA&usqp=CAU' alt="SpaceInvaders" />
            </div>


            <div className='project-pics'>
                <h2>Classic Pong Game</h2>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAdVBMVEUAAAD///8GBgb5+flmZmasrKyZmZm3t7fb29tiYmK8vLwODg5fX19WVlY+Pj5zc3Pu7u7Pz8+AgICOjo4XFxdJSUmfn5+urq6VlZUsLCzf399ra2v19fXFxcV3d3fV1dUkJCQ0NDRBQUFLS0vo6OgdHR1/f3/UoGA8AAAEiklEQVR4nO3dbVuiQBiG4QrTzNfSkCDfa///T1yY4TgWGGaWOwd50Pv6ZIXjeG6LYIAPTw/ymqxVk67nYSQRS2zEAmof6xgOzaJLHzeqGTSce5mwvfaxZo91XbpCqh104GXC9jrCCi7FCupGHXuZsD25WO6ZESsvDL7SgtA1KrHyNnqZjWtUYuU962WeXaPeNtZyGKr8Yukxh983hrXPvwx8YgX5V2/Eco2aD7PWX+3vGStII1YjrDzn1IgFRCwgYgERC4hYQMQCIlZeFKuGrlGJldf8XQdicXeHWI0iFhCxgLiCB8KxPk/ztNOna1RiARELqDzMrWHFx4+008kv1vmUjXp8uTGscvzzfX3EAiIWEI612qpWrlGJlcdjHQCsOz7W4Ry/mO0vxdrXDBrPPE+9msQDcJtgdRKxgCRiNVnBd5JErPMiSVucu56HkUQssRELiFhAxAIiFhCxgCRiDfRJXm2ftoQnEYsbpUDc3QEiFhCxgIgFxBU8UKJOQQ+TrudhJBFLbMQCIhYQsVzNB+O0wSn/kliuwvLrMrFcDctbfBKxpivVtOt5WLHWn6pDR7MqJWej1IL1rr/91tW0isnZ3XFj7W13u2Z9weJvViliAfUAiyt4oN1Gtet6Hr3AkhOxgK6AtU4GdSXFM5fqFyktOFW3jdHn2V0TfeHImWOUgYdDlq6AdXqsb1FYxrKITq+tvtRtY/RIfVtf427vGmV7+TO5AtbcMvvib4kTS6su67FWBaw31yivlz8TYgERC+h+sPq0zlqOqoVR2vCgllGLBJvqIrGBtcruVDyNx8TaGo+U9eo896dZV8My38DQp1DqF33taSyyMbC0amERE6u96093iLWvYn0Zi4zqsYoLmlgfPiZdG7FKU9XvYNt2Q4lVbKHHjy0/7iWWe511OdaL5cdXfDV8LTda/gZL/TeJ1AAayIa1rTxco1dDKVi2QCx181D4z2LDMh6oyXbWLWIdC0+pMVaTLXhi+cQqXbj4zrFm28La0Gx9UOVXvOkVVlyYqScsrDb+yKqx4tm0rrH+Z8KwJuPsru/f2UUmlxas8b/HWPUOyz0UhqUbF35tnNtZ05axfuaqo48x28IaNMUat4zlM2IBEQuoMVaT97MKP0wsWMa6Y3aLWLZsbyuvJ5PJVd+Dr9QrLBWxiOWKWHnEAppn++r/2c1Uu/OWcqxvddu450qNrq+sv3UM8zjy/sQkHgcvNmIBEQtIItaz/phRAUcrV5KIJedo5UoSseQcB1+JWEDEAiIWkEQsruCBnia6rudhJBFLbMQCIhYQsYCIBUQsIIlYkfpsgjjqeh5GErG4UQrE3R0gYgERC4hYQFzBAx3P2YcWnr0cheg1iVhiIxYQsYCIBUQsIGIBScT6o0+ufO96HkYSsbhRCsTdHSBiARELiFhAXMEDnXeLtF3bH3SMJxFLbMQCIhYQsYCIBUQsIIlYSajiZ4U1iRulQNzdASIWELGAiAXEFTwQP2b0FiIWELGAiAVELCBiAUnE+khU7V0T/7dJxOJGKRB3d4CIBUQsIKlYfwGQSlwFWwxjbAAAAABJRU5ErkJggg==' alt="Pong" />
            </div>

            <div className='project-pics'>
                <h2>My running attempt at a social media site./</h2>

                <img id='facebookClone' src='data:image/jpeg;base64,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' alt='facebook' />
            </div>
        </div>



    )
}

export default Projects
