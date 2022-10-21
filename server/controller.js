const advice = require('./db.json')

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A lifetime friend shall soon be made.", "A smile is your personal welcome mat.", "An inch of time is an inch of gold.", "Courtesy begins in the home.", "Distance yourself from the vain."];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getAdvice: (req, res) => {
        console.log("get Advice")
        res.status(200).send(advice)
    },
    createAdvice: (req, res) => {
        console.log("create Advice")
        res.status(200).send(advice)
    },
    deleteAdvice: (req, res) => {
        console.log("delete Advice")
        res.status(200).send(advice)
    },
    updateAdvice: (req, res) => {
        console.log("update Advice")
        res.status(200).send(advice)
    }

}