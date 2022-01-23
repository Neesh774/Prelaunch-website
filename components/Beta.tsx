import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";
import { useRef, useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

export default function Beta() {
const closeButtonRef = useRef();
const [open, setOpen] = useState<boolean>();
useEffect(() => {
    if(open === undefined) {
        setTimeout(() => {
            setOpen(true);
        }, 3000);
    }
})
  return (
    <Transition.Root show={open ?? false}>
      <Transition.Child
        enter="ease-out duration-300"
        enterFrom="opacity-0 -translate-y-4 sm:translate-x-0"
        enterTo="opacity-100 -translate-y-0"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 -translate-y-0"
        leaveTo="opacity-0 -translate-y-4 sm:translate-x-0"
      >
        <div className="bg-brandBlue">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-brandBlue">
                  <SpeakerphoneIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-3 font-medium text-white truncate">
                  <span className="md:hidden">Beta Monad is out!</span>
                  <span className="hidden md:inline">
                    Big news! We&apos;re excited to announce the open beta for
                    Monad!
                  </span>
                </p>
              </div>
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="https://beta.monad.ilioslabs.dev"
                  className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-brandBlue bg-white hover:bg-blue-50 hover:text-brandBlue"
                >
                  Check it out
                </a>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  className="-mr-1 flex p-2 rounded-md hover:bg-blueDark focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                  onClick={() => setOpen(false)}
                  ref={closeButtonRef}
                >
                  <span className="sr-only">Dismiss</span>
                  <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition.Child>
    </Transition.Root>
  );
}
