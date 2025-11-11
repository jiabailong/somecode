// report-utils.ts

/**
 * Reports an error message.
 * @param message - The error message to be reported.
 * @param data - Optional additional data related to the error.
 */
function reportError(message: string, data?: any): void {
    if (typeof message !== 'string') {
        throw new TypeError('Message must be a string.');
    }
    console.error('Error:', message, data ? data : ''); 
}

/**
 * Reports a warning message.
 * @param message - The warning message to be reported.
 * @param data - Optional additional data related to the warning.
 */
function reportWarning(message: string, data?: any): void {
    if (typeof message !== 'string') {
        throw new TypeError('Message must be a string.');
    }
    console.warn('Warning:', message, data ? data : '');
}

/**
 * Reports a generic message.
 * @param level - The severity level of the message. Can be 'error', 'warning', or 'info'.
 * @param message - The message to be reported.
 * @param data - Optional additional data related to the message.
 */
function report(level: 'error' | 'warning' | 'info', message: string, data?: any): void {
    if (typeof message !== 'string') {
        throw new TypeError('Message must be a string.');
    }
    switch (level) {
        case 'error':
            reportError(message, data);
            break;
        case 'warning':
            reportWarning(message, data);
            break;
        case 'info':
            console.log('Info:', message, data ? data : '');
            break;
        default:
            throw new Error('Invalid level');
    }
}

export { reportError, reportWarning, report };