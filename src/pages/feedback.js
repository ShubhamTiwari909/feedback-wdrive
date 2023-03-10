import { useState, useContext, useEffect } from "react"
import Head from 'next/head'
import { AppContext } from "../../components/Context"
import { getData } from "../../firebase/getData"
import { Accordion, AccordionWrapper } from "../../components/mini-components/Accordion"
const Feedback = () => {
    const { data, setData } = useContext(AppContext)
    const [sortByDate, setSortByDate] = useState("Descending")
    const [issueLevel, setIssueLevel] = useState(0)
    useEffect(() => {
        getData(setData)
    }, [])

    const themes = {
        1:"lime",
        2:"green",
        3:"yellow",
        4:"orange",
        5:"red",
    }
    return (
        <>
            <Head>
                <title>Folder Navigation</title>
            </Head>
            <div className="mt-24">
                <h1 className="text-center text-3xl">Feedbacks</h1>
                <div className="fixed right-4 top-10 bg-white px-4 py-3 rounded-lg border border-slate-700">
                    <form className="flex gap-2 items-center">
                        <label>Sort By:- </label>
                        <select className="border border-purple-500 rounded-2xl px-3 py-1 focus-within:outline-none cursor-pointer"
                            value={sortByDate} onChange={(e) => setSortByDate(e.target.value)}>
                            <option value="Ascending">Date: Ascending</option>
                            <option value="Descending">Date: Descending</option>
                        </select>
                        <select className="border border-purple-500 rounded-2xl px-3 py-1 focus-within:outline-none cursor-pointer"
                            value={issueLevel} onChange={(e) => setIssueLevel(e.target.value)}>
                                {[0,1,2,3,4,5].map(value => {
                                    return <option key={value} value={value}>Issue Level: {value}</option>;
                                })}
                        </select>
                    </form>
                </div>
                <AccordionWrapper className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-2">
                    {data.filter(item => {
                        if (issueLevel == 0) {
                            return item
                        }
                        else {
                            return item.issueLevel == issueLevel
                        }
                    }).sort((a, b) => {
                            const date1 = new Date(a.date)
                            const date2 = new Date(b.date)

                            if (sortByDate === "Ascending") {
                                return date1 - date2;
                            }
                            else {
                                return date2 - date1
                            }
                        }).map(item => {
                            return (
                                <Accordion
                                    key={item.feedbackId}
                                    title={item.username}
                                    text={
                                        <>
                                            <p className="text-base px-3 py-2 rounded-xl bg-white text-slate-800 min-w-120">{item.message}</p>
                                            <div className="flex flex-col gap-1 mt-5 text-base px-3 py-2 rounded-xl bg-white text-slate-800 min-w-120">
                                                <p className="text-xs md:text-sm">Email - {item.email}</p>
                                                <p className="text-xs md:text-sm">Feedback ID - {item.feedbackId}</p>
                                                <p className="text-xs md:text-sm">Date - {item.date.substring(0, 10)}</p>
                                                <p className="text-xs md:text-sm">Issue Level - {item.issueLevel}</p>
                                            </div>
                                        </>
                                    }
                                    theme={themes[item.issueLevel]}
                                    width="md"
                                />
                            )
                        })}
                </AccordionWrapper>
            </div>
        </>
    )
}

export default Feedback