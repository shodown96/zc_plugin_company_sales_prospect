import React, { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Modal from '../components/Modal'
import ProspectRow from '../components/ProspectRow'
import { ChevronLeft, ChevronRight } from "react-feather";
import Select from '../components/Select'

function Prospects() {
    const prospects = [
        { name: "Jane Cooper", email: "jane.cooper@example.com", phone: "09093527277", status: "Prospect" },
        { name: "Jane Cooper", email: "jane.cooper@example.com", phone: "09093527277", status: "Closed" },
        { name: "Jane Cooper", email: "jane.cooper@example.com", phone: "09093527277", status: "Negotiation" },
        { name: "Jane Cooper", email: "jane.cooper@example.com", phone: "09093527277", status: "Proposal" },
        { name: "Jane Cooper", email: "jane.cooper@example.com", phone: "09093527277", status: "Negotiation" },
        { name: "Jane Cooper", email: "jane.cooper@example.com", phone: "09093527277", status: "Prospect" }
    ]

    const [open, setOpen] = useState(false)
    const handleOpenModal = () => setOpen(true)

    const [open2, setOpen2] = useState(false)
    const handleOpenModal2 = () => setOpen2(true)

    const [open3, setOpen3] = useState(false)
    const handleOpenModal3 = () => setOpen3(true)

    const handleCloseModal = () => {
        setOpen(false)
        setOpen2(false)
        setOpen3(false)
    }
    // const [selectedProspect, setSelectedProspect] = useState(prospects[0])

    return (
        <div className="p-10 w-screen">
            <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">Prospects</h3> 
            <Button onClick={handleOpenModal}>Create New</Button>
            </div>
            {/* CREATE MODAL */}
            <Modal
                title="Create a Prospect"
                description="Provide information about your prospects."
                open={open} closeModal={handleCloseModal}>

                <div className="mt-2">
                    <div>
                        <label className="block">Name</label>
                        <Input placeholder="Enter Full Name" />
                    </div>
                    <div>
                        <label className="block">Email</label>
                        <Input placeholder="Enter Email" />
                    </div>
                    <div>
                        <label className="block">Phone Number</label>
                        <Input placeholder="Enter Phone Number" />
                    </div>
                    <div>
                        <Select title="stage" label="Deal stage">
                            <option disabled selected>Select a stage</option>
                            <option>Active</option>
                            <option>Closed</option>
                            <option>Negotiation</option>
                            <option>Prospect</option>
                        </Select>
                    </div>
                </div>

                <div className="mt-4 flex justify-end">
                    <button
                        type="button"
                        className="bg-primary text-white px-10 py-2"
                        onClick={handleCloseModal}>
                        Create
                    </button>
                </div>

            </Modal>

            {/* EDIT MODAL */}
            <Modal
                title="Edit Prospect"
                description="Provide information about your prospects."
                open={open2} closeModal={handleCloseModal}>
                <div className="mt-2">
                    <div>
                        <label className="block">Name</label>
                        <Input placeholder="Jane Cooper" />
                    </div>
                    <div>
                        <label className="block">Email</label>
                        <Input placeholder="jane.cooper@example.com" />
                    </div>
                    <div>
                        <label className="block">Phone Number</label>
                        <Input placeholder="09093527277" />
                    </div>
                    <div>
                        <Select title="stage" label="Deal stage">
                            <option>Active</option>
                            <option>Closed</option>
                            <option>Negotiation</option>
                            <option>Prospect</option>
                        </Select>
                    </div>
                </div>

                <div className="mt-4 flex justify-end">
                    <button
                        type="button"
                        className="bg-primary text-white px-10 py-2"
                        onClick={handleCloseModal}>
                        Edit
                    </button>
                </div>

            </Modal>

            {/* DELETE MODAL */}
            <Modal
                title="Delete Prospect"
                description="This prospect will be deleted, this action cannot be undone."
                open={open3} closeModal={handleCloseModal}>
                <div className="mt-2">
                    <div>
                        <label className="block">Name</label>
                        <Input placeholder="Jane Cooper" disabled />
                    </div>
                    <div>
                        <label className="block">Email</label>
                        <Input placeholder="jane.cooper@example.com" disabled />
                    </div>
                    <div>
                        <label className="block">Phone Number</label>
                        <Input placeholder="09093527277" disabled />
                    </div>
                    <div>
                        <Select title="stage" label="Deal stage">
                            <option disabled selected>Select a stage</option>
                            <option>Active</option>
                            <option>Closed</option>
                            <option>Negotiation</option>
                            <option>Prospect</option>
                        </Select>
                    </div>
                </div>

                <div className="mt-4 flex justify-end">
                    <button
                        type="button"
                        className="text-primary px-10 py-2 mr-2"
                        onClick={handleCloseModal}>
                        No, Keep
                    </button>
                    <button
                        type="button"
                        className="bg-error text-white px-10 py-2"
                        onClick={handleCloseModal}>
                        Yes, Delete
                    </button>
                </div>

            </Modal>

            <div className="mt-4">

                <div className="overflow-x-auto overflow-y-hidden rounded-md">
                    <table className="text-left border-gray-100 w-full">
                        <thead className="border-b cursor-pointer">
                            <tr>
                                <th className="px-3 py-4 flex items-center">
                                    <input className="mr-4" type="checkbox" name="" id="all" />
                                    <label htmlFor="all">Name</label>
                                </th>
                                <th className="px-3 py-4">Email</th>
                                <th className="px-3 py-4">Phone Number</th>
                                <th className="px-3 py-4">All stages</th>
                                <th className="px-3 py-4"> Actions </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {prospects.map((prospect, i) => (
                                <ProspectRow key={i}
                                    openEditModal={handleOpenModal2}
                                    openDeleteModal={handleOpenModal3}
                                    prospect={prospect} />
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <ul className="flex list-none justify-end mt-5">
                    <li className="py-2 px-3"> <ChevronLeft strokeWidth={1} /> </li>
                    <li className="py-2 px-3">Prev</li>
                    <li className="bg-primary-light text-primary rounded-sm py-2 px-4">2</li>
                    <li className="py-2 px-3">Next</li>
                    <li className="py-2 px-3"> <ChevronRight strokeWidth={1} /> </li>
                </ul>
            </div>
        </div>
    )
}

export default Prospects
