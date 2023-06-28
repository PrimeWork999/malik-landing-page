import { useEffect } from 'react'
import './welcome.scss'
// comment
import HomeSection from '../HomeSection'
import Button from '../../button/Button'

import hoverEffect from 'hover-effect'

import {
    bg1,
    champAshe,
    champAhri,
    champGaren,
    distortion,
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth
} from '../../../assets/images'
const champImgs = [first, second, third,  fourth, fifth, sixth, seventh, eighth, ninth ]

const Welcome = props => {
    const isMediaQuery500 = window.matchMedia('(min-width: 500px)').matches;

    useEffect(() => {
        const welcomeImgs = document.querySelectorAll('#welcome__img__slide > img')
        let animates = []
        welcomeImgs.forEach((item, index) => {
            let nextImg = welcomeImgs[index === welcomeImgs.length - 1 ? 0 : index + 1].getAttribute('src')
            let animation = new hoverEffect({
                parent: document.querySelector('#welcome__img__slide'),
                intensity: 0.5,
                image1: item.getAttribute('src'),
                image2: nextImg,
                displacementImage: distortion,
                hover: false
            })
            animates.push(animation)
        })
        welcomeImgs.forEach(e => e.remove())

        let currItem = 0

        const autoImageSlide = () => {
            let prevItem = currItem
            currItem = (currItem + 1) % animates.length

            if (!document.hidden) {
                animates[prevItem].next()
            }

            setTimeout(() => {
                let canvas = document.querySelectorAll('#welcome__img__slide > canvas')
                document.querySelector('#welcome__img__slide').appendChild(canvas[0])
                animates[prevItem].previous()
            }, 3000);
        }

        setInterval(autoImageSlide, 3000);
    }, [])

    return (
        <HomeSection
            className={`welcome ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay welcome__content"
            bgImage={fourth}
        >
            <div className="welcome__info relative">
                <div className="welcome__info__content">
                    <div className="title text-center">
                        <span>Welcome To</span>
                        <h2 className="main-color text-center">Malik's World</h2>
                    </div>
                    <div className="description m-t-4 text-center px-3">
                    Join the Journey to Millionaire Status and Unlock Your Wealth Potential! Earn as much as possible
                    </div>
                    <div className="btns m-t-4 mt-5 text-center">
                        <Button className="btn-second">Join the original Malik Mumbai</Button>
                        <br />
                        <br />
                        <Button className="btn-second">Join Our Telegram Channel For Free <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
</svg></Button>
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>

            <div className="welcome__img relative">
                <div className="welcome__img__slide" id="welcome__img__slide">
                    {
                        champImgs.map((item, index) => (
                            <img src={item} key={index}/>
                        ))
                    }
                </div>
            </div>
            <div className="my-component">
      <div className="content">
        <h2>Welcome to the Mobile App</h2>
        <p>Explore our amazing features and start your journey today!</p>
        <button>Get Started</button>
      </div>
    </div>
        </HomeSection>
    )
}

export default Welcome
