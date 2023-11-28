// pathUtils.js

// Checks if the path is a valid Windows path
const isValidWindowsPath = (path) => /^[a-zA-Z]:\\/.test(path);

// Checks if the path is a valid macOS path
const isValidMacPath = (path) => /^\//.test(path);

export function detectPathType(path) {
    if (isValidWindowsPath(path)) {
        return 'windows';
    } else if (isValidMacPath(path)) {
        return 'mac';
    } else {
        return 'invalid'; // Return 'invalid' for unrecognized paths
    }
}


// Converts the path to the opposite format
export function convertPath(path, pathType) {
    switch (pathType) {
        case 'windows':
            return path.replace(/\\/g, '/').replace(/([A-Z]):\//, '/$1/');
        case 'mac':
            return path.replace(/^\//, '').replace(/\//g, '\\').replace(/^([A-Z])\\/, '$1:\\');
        case 'network':
            return path.replace(/^\/\/|\\\\/, 'smb://').replace(/\\/g, '/');
        default:
            return path; // or throw an error if invalid path
    }
}
