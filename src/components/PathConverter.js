// PathConverter.js
import React, { useState, useEffect } from 'react';
import { detectPathType, convertPath } from '../utils/pathUtils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PathConverter() {
    const [inputPath, setInputPath] = useState('');
    const [convertedPath, setConvertedPath] = useState('');
    const [pathOS, setPathOS] = useState('');

    useEffect(() => {
        if (convertedPath) {
            navigator.clipboard.writeText(convertedPath)
                .then(() => toast.success('File path copied to clipboard! 🎉'))
                .catch(err => {
                    console.error('Failed to copy path: ', err);
                    toast.error('Failed to copy path to clipboard 🤔');
                });
        }
    }, [convertedPath]);

    const handleInputChange = (event) => {
        const path = event.target.value;
        setInputPath(path);

        const pathType = detectPathType(path);
        if (pathType === 'invalid') {
            toast.error('Invalid file path 😫');
            setConvertedPath('');
            setPathOS('');
        } else {
            setConvertedPath(convertPath(path, pathType));
            setPathOS(pathType);
        }
    };

    const clearInput = () => {
        setInputPath('');
        setConvertedPath('');
        setPathOS('');
    };

    return (
        <div className="flex flex-col items-center space-y-2">
            <div className="flex flex-row items-center space-x-2">
                <input 
                    type="text" 
                    value={inputPath} 
                    onChange={handleInputChange} 
                    placeholder="Paste file path" 
                    className="border rounded-md p-2 my-5 flex-grow text-black"
                />
                {inputPath && (
                    <button 
                        onClick={clearInput} 
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        X
                    </button>
                )}
            </div>
            <div className="w-full">
                {pathOS && (
                    <h1 className="text-sm animate-pulse mb-2">{pathOS} path detected...</h1>
                )}
                <h2 className="text-base"><code>Converted Path: {convertedPath}</code></h2>
            </div>
            <ToastContainer position="top-center" autoClose={5000} className="text-sm"/>
        </div>
    );
}

export default PathConverter;
