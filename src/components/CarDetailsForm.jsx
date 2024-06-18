import React from "react";

const CarDetailsForm = () => {
    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Enter Car Details</h2>
            <form>
                <div className="mb-4">
                    <label
                        htmlFor="make"
                        className="block text-sm font-medium text-gray-700">
                        Make
                    </label>
                    <input
                        type="text"
                        id="make"
                        name="make"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="model"
                        className="block text-sm font-medium text-gray-700">
                        Model
                    </label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="registration"
                        className="block text-sm font-medium text-gray-700">
                        Registration
                    </label>
                    <input
                        type="text"
                        id="registration"
                        name="registration"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="year"
                        className="block text-sm font-medium text-gray-700">
                        Year
                    </label>
                    <input
                        type="number"
                        id="year"
                        name="year"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="gearbox"
                        className="block text-sm font-medium text-gray-700">
                        Gearbox
                    </label>
                    <select
                        id="gearbox"
                        name="gearbox"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option value="">Select</option>
                        <option value="manual">Manual</option>
                        <option value="automatic">Automatic</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="fuelType"
                        className="block text-sm font-medium text-gray-700">
                        Fuel Type
                    </label>
                    <select
                        id="fuelType"
                        name="fuelType"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option value="">Select</option>
                        <option value="petrol">Petrol</option>
                        <option value="diesel">Diesel</option>
                        <option value="electric">Electric</option>
                    </select>
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CarDetailsForm;
