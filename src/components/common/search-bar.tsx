import { Dispatch, SetStateAction, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";

type Props = {
    className?: string;
    keyword: string;
    setKeyword: Dispatch<SetStateAction<string>>;
};

export default function SearchBar({
    className = "",
    keyword,
    setKeyword,
}: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <div className={`relative w-full min-w-[400px] md:w-[500px] h-full rounded ${className}`}>
            <button onClick={() => inputRef.current?.focus()}>
                <IoSearch
                    className={`absolute top-1/2 left-3 -translate-y-1/2 h-5 w-5 text-default-yellow font-bold ${isFocused ? "text-dark-yellow" : "bg-white"}`}
                />
            </button>
            <input
                type="text"
                ref={inputRef}
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Search ingredients to make a salad..."
                className={`w-full rounded border-2 pl-9 py-2 ${isFocused ? "border-black" : "bg-white"}`}
            />
        </div>
    );
}
