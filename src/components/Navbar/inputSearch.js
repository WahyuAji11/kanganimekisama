"use client"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useState, useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    const [inputValue, setInputValue] = useState('');
    const handleSearch = (event) => {

        if(event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            const keywoard = searchRef.current.value
            router.push(`/search/${keywoard}`)
        }
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const emptyInput = inputValue.trim() === ''

    return (
        <div className="relative">
            <input
                placeholder="cari anime..."
                className="w-full p-2 rounded"
                ref={searchRef}
                onKeyDown={handleSearch}
                onChange={handleChange}
                required
            />
            <button className="absolute top-2 end-2" onClick={handleSearch} disabled={emptyInput}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default InputSearch