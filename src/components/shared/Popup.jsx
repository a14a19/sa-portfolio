import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { isHide } from '../../features/popups/popup';

function Popup() {

    const { theme } = useSelector((store) => store.theme)
    const { hideShow, title } = useSelector((store) => store.popup)
    const dispatch = useDispatch()


    function closeModal() {
        return dispatch(isHide())
    }

    return (
        <>
            <Transition appear show={hideShow} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className={`${theme === 'black' ? 'bg-[#1e1e1e] border-[#d8d8d830]' : 'bg-white text-black border-[#00000033]'} w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all`}>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6"
                                    >
                                        {title}
                                    </Dialog.Title>
                                    <div className="mt-2 min-h-[6rem]">
                                        {
                                            title == "Jobs" ? (
                                                <ul className='list-disc ps-4 text-sm'>
                                                    <li>Software Engineer</li>
                                                    <li>Product designer</li>
                                                    {/* <li>Legal Associate</li> */}
                                                    <li>Investment Analyst</li>
                                                </ul>
                                            ) :
                                                (
                                                    <p className="text-sm text-gray-500">
                                                        Coming soon...
                                                    </p>
                                                )
                                        }

                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className={`${theme === 'black' ? 'border-[#d8d8d830]  bg-[#292929]' : 'bg-[#f6f6f6] border-[#00000033]'} border px-3 py-1 rounded-xl text-xs`}
                                            onClick={closeModal}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Popup