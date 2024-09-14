import React, { useEffect } from 'react'
import { useEcommerce } from '../Context/EcommerceContext'


function ThemeBtn() {

    const { themeMode, setThemeMode } = useEcommerce()

    const changeThemeMode = () => {
        if (themeMode === "light") {
            setThemeMode("dark")
        } else {
            setThemeMode("light")
        }
    }
    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])
    return (
        <div className="w-7 h-7 p-1 flex justify-center items-center rounded-full cursor-pointer text-[8px] bg-slate-200 dark:bg-slate-700 " onClick={changeThemeMode}>
            <div className={`${themeMode === "light" ? "block" : "hidden"}`}>
                <svg className="w-4 h-4 text-gray-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z" />
                </svg>
            </div>
            <div className={`${themeMode === "dark" ? "block" : "hidden"}`}>
                <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                </svg>

            </div>
        </div>
    )
}

export default ThemeBtn