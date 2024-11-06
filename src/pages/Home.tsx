import { FC } from "react"

export const Home: FC = () => {

    return (
        <>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Scoring Interface</h1>
            <p className="text-lg text-gray-600 text-center max-w-md">
                Easily score and evaluate medical student interactions with our intuitive interface.
            </p>
        </div>
        <div className="mt-8 px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-2">Feature One</h2>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque libero, pulvinar et elementum quis, facilisis eu ante.
                    </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-2">Feature Two</h2>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque libero, pulvinar et elementum quis, facilisis eu ante.
                    </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-2">Feature Three</h2>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque libero, pulvinar et elementum quis, facilisis eu ante.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}