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
          verify music nfts on any chain 
        </p>

        <div className="flex flex-col gap-4 grid-cols-1 w-full">
          <label htmlFor="json" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your Metadata</label>
          <textarea id="json" onChange={(e) => setMetadata(e.target.value)} rows={4} className="block col-span-1 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Paste your metadata here..."></textarea>
          <SubmitButton onSuccess={(parsed: any) => setResults(parsed)} metadata={metadata} />
          <ResultsTable results={results} setFocus={setFocus} />
          <FocusSection focus={focus} />
        </div>
      </main>
    )
}

export default HomePage