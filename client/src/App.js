import React, {useState, useEffect} from 'react'
import './styles/App.css';
import Step from "./components/Step"
import axios from "axios"

function App() {

    async function fetchData() {
        const response = await axios.get("/api/fetch/get")
        setSteps(response.data)
    }

    async function getRandomFact() {
        const response = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en")
        finishData.fact = response.data.text
        finishData.finished = true
        let newData = {}
        Object.assign(newData, finishData)
        setFinishData(newData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const [steps, setSteps] = useState([])
    const [finishData, setFinishData] = useState({
        fact: '',
        finished: false
    })


    const changeCheckBox = (step, point) => {

        let prevCompleted = false

        if (step === 1) {
            prevCompleted = true
        } else if (steps[step-2].completed) {
            prevCompleted = true
        }

         if (prevCompleted) {
             if (steps[step-1].points[point-1].checked) {
                 steps[step-1].points[point-1].checked = false
             } else {
                 steps[step-1].points[point-1].checked = true
             }
             let unfinished = false
             for (let i = 0; i < steps[step-1].points.length; i++) {
                 if (!steps[step-1].points[i].checked) {
                     unfinished = true
                 }
             }
             if (!unfinished) {
                 steps[step-1].completed = true
             } else {
                 steps[step-1].completed = false
             }
             setSteps(steps)
         }

         if (steps[steps.length - 1].completed) {
             getRandomFact()
         }

    }



   return (
     <div className="App">

         <div className="progress">

             <div className={"progress-wrapper " + (finishData.finished ? "hidden" : "")}>

                 <div className="progress-title">
                     My startup progress
                 </div>

                 <div className="progress-content">

                     {steps.map((step, index) =>
                        <Step step={step} key={step.id} check={changeCheckBox} index={index} />)
                     }

                 </div>


             </div>

             <div className={"progress-done " + (finishData.finished ? "active" : "")}>
                 {finishData.fact}
             </div>

         </div>

     </div>
   );
}

export default App;
