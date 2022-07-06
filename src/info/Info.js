import self from "../img/self.png"
import joke from "../img/joke.png"
import painting from "../img/paint.png"
import hiking from "../img/hiking.png"
import movie from "../img/movie.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Keerthi",
    lastName: "Akella",
    initials: `KA`, // the example uses first and last, but feel free to use three or more if you like.
    position: "a Software Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "Sotware Engineer at PayPal"
        },
        {
            emoji: "📧",
            text: "akella.keerthi@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/keerthiAkella3/",
            icon: 'fa fa-facebook'
        },
        {
            link: "https://www.instagram.com/akeerthy/",
            icon: 'fa fa-instagram'
        },
        {
            link: "https://github.com/KeerthiAkella3",
            icon: "fa fa-github"
        },
        {
            link: "https://www.linkedin.com/in/keerthiakella",
            icon: "fa fa-linkedin"
        },
        {
            link: "https://twitter.com/KeerthyAkella",
            icon: "fa fa-twitter"
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: `Hello! I'm Keerthi. I graduated with a Master’s degree in Software Engineering from San Jose State University. 
    I am a creative individual, with an objective of lifelong learning and seeking new opportunities to grow professionally and as a person.
    `,
    skills:
        {
            proficientWith: ['javascript', 'react', 'nodeJS', 'expressJS', 'bootstrap', 'html5', 'css3', 'java', 'C++'],
            exposedTo: ['kafka', 'docker', 'graphQL', 'mongoDB', 'mySQL', 'python']
        }
    ,
    hobbies: [
        {
            label: 'painting',
            emoji: '🎨',
            image: painting
        },
        {
            label: 'movies',
            emoji: '🎥',
            image:movie
        },
        {
            label: 'devJokes',
            emoji: '🙃',
            image: joke
        },
        {
            label: 'hiking',
            emoji: '🥾',
            image: hiking
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
        Experience:[
            {
            label: 'Software Engineer 2',
            details: `Working with the Credit(Buy Now Pay Later) Servicing team, 
            leads to re-invent legacy products within the Pay Later suite, adapting and deploying long-term installments 
            the Global Pay Later products in certain international markets. 
            Contributed to installment products and was part of implementing Payment after 30 days product in Germany. 
            Designed and contributed to the snooze feature that allows customers to delay the payment of installments.`
            },

        {
            label: 'Software Engineer Intern',
            details: `Using React and NodeJS migrated over 7 million US PayPal Credit customers to the common “Add A Bank”
            workflow. This provides frictionless bank setup and access to 300+ banks for all US PayPal Credit customers. This
            achieved a uniform user experience for all customers of PayPal Credit services and cobrands such as eBay
            Mastercard, PayPal Smart Connect, and PayPal Extras Mastercard.`
        }
    ]
}