import React from 'react'
import SearchbarCSS from './Searchbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useCategoryContext } from '../Context'
import { useState } from 'react'
import Results from './Results'



function Searchbar() {
    const { catData, setData } = useCategoryContext()
    const [input, setInput] = useState('')
    const [promptLog, setPromptLog] = useState([{ user: "userOne", prompt: "" }, { user: "AI", prompt: "" }])
    const [isResult,setIsResult] = useState(false);


    function handleCategoryClick(event) {
        setData({ ...catData, category: event.target.value })

        console.log(event.target.value)

    };

    async function handleSubmit(e) {
        //const promptResult = []
        e.preventDefault();
        let promptLogNew = [...promptLog, { user: "userOne", prompt: `${input}` }];

        //setInput('')
        setPromptLog(promptLogNew)
        const category = catData.category
        console.log(category)
        const prompts = promptLogNew.map((prompt) => prompt.prompt).join("\n");
        const response = await fetch("http://localhost:5000/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: prompts, category: category }) // whithout join i get a list[]
        });
        const data = await response.json();
        setPromptLog([...promptLogNew, { user: "AI", prompt: `${data.prompt}` }]);
        setPromptLog([]);
        console.log(data.data);
        console.log(data.test);
        setIsResult(true)
        console.log(isResult)
    }

    return (
        <div>
            <div className={SearchbarCSS.mainBody}>
                <span className={SearchbarCSS.head}>What {catData.category} can i recommend to you?</span>
                <div className={SearchbarCSS.search}>
                    <form className={SearchbarCSS.searchInput} onSubmit={handleSubmit}>
                        <input type="text" placeholder={`based on what ${catData.category} you like...`} value={input} onChange={(e) => setInput(e.target.value)} />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={SearchbarCSS.magnifyingGlass} onClick={handleSubmit}></FontAwesomeIcon>
                    </form>
                    <div className={SearchbarCSS.searchCategory}>
                        <button value="Movies" onClick={(event) => handleCategoryClick(event)}>Movies</button>
                        <button value="Books" style={{ backgroundColor: '#0074A6' }} onClick={(event) => handleCategoryClick(event)}>Books</button>
                        <button value="Music" style={{ backgroundColor: '#DB574D' }} onClick={(event) => handleCategoryClick(event)}>Music</button>
                        <button value="Games" style={{ backgroundColor: '#FFB805' }} onClick={(event) => handleCategoryClick(event)}>Games</button>
                    </div>
                </div>

            </div>
            <Results isResult={isResult} setIsResult={setIsResult} />
        </div>
    )
}

export default Searchbar