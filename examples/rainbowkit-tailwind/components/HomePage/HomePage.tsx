import { useState } from 'react';
import styles from '../../styles/Home.module.css';
import FocusSection from '../FocusSection';
import ResultsTable from '../ResultsTable';
import SubmitButton from "../SubmitButton"

const HomePage = () => {
    const [metadata, setMetadata] = useState("");
    const [results, setResults] = useState([]);
    const [focus, setFocus] = useState();

    return (
        <main className={styles.main}>
        <h1 className={styles.title}>
          <a rel="noreferrer" target="_blank" href="https://github.com/SweetmanTech/music-nft-inspect">
            music nft inspect
          </a>
        </h1>

        
        <p className={styles.description}>
          verify music nfts 
        </p>

        <div className="flex grid flex-col gap-4 grid-cols-1 md:grid-cols-2 w-full">
          <div className="grid-col-1">
            <label htmlFor="json" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your contract address or metadata JSON</label>
            <textarea id="json" onChange={(e) => setMetadata(e.target.value)} rows={4} className="block col-span-1 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex. 0xC74e50a1b15394E63ef4fb18d9d65b9563c1e2cD"></textarea>
            <SubmitButton onSuccess={(parsed: any) => setResults(parsed)} metadata={metadata} />
          </div>
          <div className="grid-col-1 flex flex-col items-center">
            <ResultsTable results={results} setFocus={setFocus} />
            {/* <FocusSection focus={focus} /> */}
          </div>
        </div>
      </main>
    )
}

export default HomePage