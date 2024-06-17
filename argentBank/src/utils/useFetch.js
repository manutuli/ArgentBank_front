import { useEffect, useState } from "react"
// 
export function useRequest(request) {
    const [data, setData] = useState(null)
    const {url, options} = request
    useEffect(()=>{
        if (!url||!options) return console.log("Erreur dans Fetch")
        const startFetching = async () => {
            try {
                const response = await fetch(url, options)
                setData(response.json())
            } catch (error) {
                console.log("Erreur dans Fetch : ", error)
            }
        }
        startFetching()
        // return controller.abort()
    },[options, url])
    return data
}