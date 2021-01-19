import React, { useState } from 'react'

import ReactPaginate from 'react-paginate';

export default function Card(props) {
    const [search, setSearch] = useState(null)
    const [select, setSelect] = useState(null)
    const [pay, setPay] = useState(null)

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSeChange = (e) => {
        setSelect(e.target.value)
    }

    const handlePeChange = (e) => {
        setPay(e.target.value)
    }

    const records = props;

    const displayCards = (props) => {
        const { records } = props;

        if (records.length > 0) {
            return (
                records.filter((record) => {
                    if(search == null)
                        return record
                    else if (record.FirstName.toLowerCase().includes(search.toLowerCase()) || record.LastName.toLowerCase().includes(search.toLowerCase())){
                        return record
                    }
                })
                // records.filter((record) => {
                //     if(select == null)
                //         return record
                //     else if (record.Gender.toLowerCase().includes(select.toLowerCase())){
                //         return record
                //     }
                // }),
                // records.filter((record) => {
                //     if(pay == null)
                //         return record
                //     else if (record.PaymentMethod.toLowerCase().includes(pay.toLowerCase())){
                //         return record
                //     }
                })
                .map((record) => {
                    return (
                        <div className="py-6 px-5 border border-purple-100 rounded-lg my-2" key={record.id}>
                            <div className="flex items-center">
                                <p className="font-semibold text-lg mr-1">{record.FirstName}</p>
                                <p className="font-semibold text-lg">{record.LastName}</p>
                            </div>
                            <div className="flex my-8">
                                <div className="">
                                    <span className="px-2 py-1 bg-purple-50 text-purple-500 rounded-full font-semibold" style={{ fontSize: '11px' }}>Credit Card Type</span>
                                    <p className="text-sm mt-2">{record.CreditCardType}</p>
                                </div>
                                <div className="ml-auto">
                                    <span className="px-2 py-1 bg-purple-50 text-purple-500 rounded-full font-semibold" style={{ fontSize: '11px' }}>Payment Method</span>
                                    <p className="text-sm mt-2 text-right">{record.PaymentMethod}</p>
                                </div>
                            </div>
                            <div className="flex mt-6">
                                <div className="">
                                    <span className="px-2 py-1 bg-purple-50 text-purple-500 rounded-full font-semibold" style={{ fontSize: '11px' }}>Gender</span>
                                    <p className="text-sm mt-2">{record.Gender}</p>
                                </div>
                                <div className="ml-auto">
                                    <span className="px-2 py-1 bg-purple-50 text-purple-500 rounded-full font-semibold" style={{ fontSize: '11px' }}>Phone Number</span>
                                    <p className="text-sm mt-2 text-right">{record.PhoneNumber}</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <span className="px-2 py-1 bg-purple-50 text-purple-500 rounded-full font-semibold" style={{ fontSize: '11px' }}>Email</span>
                                <p className="text-sm mt-2">{record.Email}</p>
                            </div>
                            <div className="mt-8">
                                <p className="mt-2 text-gray-400" style={{ fontSize: '10px' }}>{record.LastLogin}</p>
                            </div>
                        </div>
                    )
                })
            )
        } else {
            return (
                <p className="font-semibold">No Transactions Recorded</p>
            )
        }
    }

    return (
        <div className="mx-10 my-6">
            <div className="flex items-center mb-8">
                <div className="max-w-lg flex">
                    <input type="text" className="bg-purple-50 pr-10 pl-4 py-2 outline-none rounded-lg w-full text-sm" placeholder="Search..." value={search} onChange={handleChange} />
                </div>
                {/* <div className="ml-auto flex items-center">
                    <select onChange={handleSeChange} value={select} id={props.id} class="block w-full py-2 px-3 appearance-none outline-none bg-purple-100 rounded-lg sm:text-sm mr-4">
                        <option selected disabled>Filter By Gender</option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Prefer to skip'>Prefer to skip</option>
                    </select>
                    <select onChange={handlePeChange} value={pay} id={props.id} class="block w-64 py-2 px-3 appearance-none outline-none bg-purple-100 rounded-lg sm:text-sm">
                        <option selected disabled>Filter By Payment Mode</option>
                        <option value='paypal'>Paypal</option>
                        <option value='cc'>CC</option>
                        <option value='check'>Check</option>
                        <option value='money order'>Money Order</option>
                    </select>
                </div> */}
            </div>
            <div className="grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 grid gap-4">
                {displayCards(props)}
            </div>
        </div>
    )
}